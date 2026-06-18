// AI 自适应学习引擎
const AdaptiveEngine = {
    // 用户状态（存储在 localStorage）
    userState: {
        level: 1,
        totalScore: 0,
        topics: {},  // { topicId: { mastery, answeredCount, correctCount, consecutiveCorrect, lastReview } }
        achievements: [],
        currentStreak: 0,
        longestStreak: 0
    },

    // 存储键
    STORAGE_KEY: 'spacetime_playground_user',

    // 初始化
    init() {
        this.load();
    },

    // 保存到 localStorage
    save() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.userState));
        } catch (e) {
            // localStorage 不可用时静默失败
        }
    },

    // 加载
    load() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data) {
                const parsed = JSON.parse(data);
                this.userState = { ...this.userState, ...parsed };
                // 确保每个主题有默认值
                KnowledgeBase.getAllTopics().forEach(t => {
                    if (!this.userState.topics[t.id]) {
                        this.userState.topics[t.id] = this._defaultTopicState();
                    }
                });
            } else {
                this._initDefaultState();
            }
        } catch (e) {
            this._initDefaultState();
        }
    },

    // 重置
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
        this._initDefaultState();
    },

    _initDefaultState() {
        this.userState = {
            level: 1,
            totalScore: 0,
            topics: {},
            achievements: [],
            currentStreak: 0,
            longestStreak: 0
        };
        KnowledgeBase.getAllTopics().forEach(t => {
            this.userState.topics[t.id] = this._defaultTopicState();
        });
    },

    _defaultTopicState() {
        return {
            mastery: 0,
            answeredCount: 0,
            correctCount: 0,
            consecutiveCorrect: 0,
            lastReview: null,
            highestDifficulty: 0
        };
    },

    // ===== 核心算法 =====

    // 记录答题结果
    recordAnswer(topicId, correct, difficulty) {
        const topic = this.userState.topics[topicId];
        if (!topic) return;

        topic.answeredCount++;
        if (correct) {
            topic.correctCount++;
            topic.consecutiveCorrect++;
            this.userState.currentStreak++;
            if (this.userState.currentStreak > this.userState.longestStreak) {
                this.userState.longestStreak = this.userState.currentStreak;
            }
            // 得分
            const scoreGain = difficulty * 10 + (this.userState.currentStreak >= 3 ? 5 : 0);
            this.userState.totalScore += scoreGain;
        } else {
            topic.consecutiveCorrect = 0;
            this.userState.currentStreak = 0;
        }

        // 更新掌握度
        this._updateMastery(topicId, correct, difficulty);

        // 更新最高难度
        if (difficulty > topic.highestDifficulty) {
            topic.highestDifficulty = difficulty;
        }

        topic.lastReview = new Date().toISOString();

        // 升级检查
        this._checkLevelUp();

        this.save();
    },

    // 掌握度更新（简化 IRT + 贝叶斯）
    _updateMastery(topicId, correct, difficulty) {
        const topic = this.userState.topics[topicId];
        const mastery = topic.mastery;

        // 题目难度权重
        const difficultyWeight = difficulty * 0.3;

        // 更新幅度
        let delta;
        if (correct) {
            // 答对：掌握度上升，难度越高上升越多
            delta = 0.08 + difficultyWeight;
        } else {
            // 答错：掌握度下降，难度越高下降越多
            delta = -(0.06 + difficultyWeight * 0.5);
        }

        topic.mastery = Math.max(0, Math.min(1, mastery + delta));
    },

    // 等级检查
    _checkLevelUp() {
        const newLevel = Math.floor(this.userState.totalScore / 100) + 1;
        if (newLevel > this.userState.level) {
            this.userState.level = newLevel;
            return true;
        }
        return false;
    },

    // ===== 难度推荐 =====

    // 推荐当前难度
    getRecommendedDifficulty(topicId) {
        const topic = this.userState.topics[topicId];
        if (!topic) return 1;

        const consecutive = topic.consecutiveCorrect;

        // 连续答对 2 题升难度 / 答错降难度
        if (topic.answeredCount === 0) return 1;
        if (consecutive >= 2 && topic.highestDifficulty < 3) return topic.highestDifficulty + 1;
        if (topic.answeredCount > 0 && topic.consecutiveCorrect === 0 && topic.mastery < 0.4) {
            return Math.max(1, topic.highestDifficulty - 1);
        }
        return Math.max(1, Math.min(3, Math.ceil(topic.mastery * 3)));
    },

    // ===== 推荐系统 =====

    // 获取推荐的下一个主题
    getRecommendedTopic() {
        const allTopics = KnowledgeBase.getAllTopics();
        const now = Date.now();

        // 收集所有主题数据
        const scored = allTopics.map(t => {
            const state = this.userState.topics[t.id];
            let score = 0;

            // 已掌握的不推荐
            if (state && state.mastery >= 0.8) return { topic: t, score: -1 };

            // 前置依赖检查
            const prereqsMet = t.prerequisites.every(p => {
                const ps = this.userState.topics[p];
                return ps && ps.mastery >= 0.5;
            });
            if (!prereqsMet) return { topic: t, score: -2 };
            score += 10;

            // 未学习过的优先
            if (!state || state.answeredCount === 0) {
                score += 20;
            } else {
                // 根据遗忘曲线（最近复习的推后）
                if (state.lastReview) {
                    const daysSince = (now - new Date(state.lastReview).getTime()) / 86400000;
                    score += Math.min(daysSince * 3, 15);
                }
                // 掌握度低的优先
                score += (1 - state.mastery) * 15;
            }

            return { topic: t, score };
        });

        const valid = scored.filter(s => s.score > 0);
        if (valid.length === 0) return null;

        valid.sort((a, b) => b.score - a.score);
        return valid[0].topic;
    },

    // ===== 查询方法 =====

    getTopicMastery(topicId) {
        const t = this.userState.topics[topicId];
        return t ? t.mastery : 0;
    },

    getAnsweredCount(topicId) {
        const t = this.userState.topics[topicId];
        return t ? t.answeredCount : 0;
    },

    getTopicStatus(topicId) {
        const t = this.userState.topics[topicId];
        if (!t) return 'unstarted';
        if (t.mastery >= 0.8) return 'mastered';
        if (t.answeredCount > 0) return 'learning';
        return 'unstarted';
    },

    // 获取总掌握进度
    getOverallProgress() {
        const topics = KnowledgeBase.getAllTopics();
        let total = 0;
        topics.forEach(t => {
            total += this.getTopicMastery(t.id);
        });
        return topics.length > 0 ? total / topics.length : 0;
    }
};
