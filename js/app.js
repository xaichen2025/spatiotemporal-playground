// ============================================
// 时空智趣乐园 - 主控制器
// ============================================
const App = {
    currentScreen: 'welcome',

    // 应用初始化
    init() {
        // 初始化各模块
        AdaptiveEngine.init();

        // 初始化地图
        MapRenderer.init('world-map', 'map-markers', {
            onContinentClick: (continentId) => this.onContinentClick(continentId)
        });

        // 初始化时间轴
        Timeline.init({
            onChange: (month) => this.onTimelineChange(month)
        });

        // 初始化 AI 向导
        AIGuide.init('guide-avatar', 'guide-bubble', 'guide-text');

        // 初始化欢迎页星空动画
        const welcomeBg = document.querySelector('.welcome-bg');
        if (welcomeBg) Animations.initStarfield(welcomeBg);

        // 更新用户信息
        this.updateUserInfo();

        // 检查是否有进度恢复
        const hasProgress = Object.values(AdaptiveEngine.userState.topics)
            .some(t => t.answeredCount > 0);
        if (hasProgress) {
            setTimeout(() => {
                AIGuide.say('欢迎回来！继续我们的时空探索之旅吧！🚀');
            }, 1500);
        }
    },

    // 切换屏幕
    showScreen(screenName) {
        // 隐藏所有屏幕
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        this.currentScreen = screenName;

        // 显示目标屏幕
        const target = document.getElementById(`screen-${screenName}`);
        if (target) {
            target.classList.add('active');
            Animations.transitionIn(target);
        }

        // 屏幕特定初始化
        if (screenName === 'achievements') {
            Achievements.render('achieve-grid');
        }

        if (screenName === 'explore') {
            this.updateUserInfo();
            // 自适应推荐
            setTimeout(() => {
                const next = AdaptiveEngine.getRecommendedTopic();
                if (next && AdaptiveEngine.getTopicMastery(next.id) < 0.8) {
                    AIGuide.suggestTopic(next);
                }
            }, 1000);
        }
    },

    // 开始探索
    startExplore() {
        this.showScreen('explore');
    },

    // 大洲点击
    onContinentClick(continentId) {
        const continent = WorldMap.continents.find(c => c.id === continentId);
        if (!continent) return;

        // 找到该大洲相关的知识点
        const relatedTopics = KnowledgeBase.getAllTopics().filter(t => t.continent === continentId);

        // 更新信息面板
        const title = document.getElementById('topic-title');
        const body = document.getElementById('info-body');
        const season = document.getElementById('current-season');

        const seasonMap = { spring: '🌱 春季', summer: '☀️ 夏季', autumn: '🍂 秋季', winter: '❄️ 冬季' };
        season.textContent = seasonMap[Timeline.getSeason(Timeline.currentMonth)] || '';

        title.textContent = `${continent.icon} ${continent.name}`;

        if (relatedTopics.length > 0) {
            body.innerHTML = relatedTopics.map(t => {
                const mastery = AdaptiveEngine.getTopicMastery(t.id);
                const status = mastery >= 0.8 ? '✅ 已掌握' :
                              mastery > 0 ? `📖 学习中 (${Math.round(mastery * 100)}%)` : '🔍 未探索';
                return `
                    <div class="topic-card" onclick="App.startTopic('${t.id}')" style="margin-bottom:8px; text-align:left;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:1.8rem;">${t.icon}</span>
                            <div>
                                <div style="font-weight:700;">${t.name}</div>
                                <div style="font-size:0.85rem; color:var(--text-secondary);">${status}</div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            body.innerHTML = `
                <div class="info-placeholder">
                    <p>${continent.icon} ${continent.name}</p>
                    <p style="font-size:0.9rem; margin-top:8px;">这里有丰富的时空知识等待探索！</p>
                </div>
            `;
        }

        // AI 向导解说
        const firstTopic = relatedTopics[0];
        if (firstTopic) {
            AIGuide.explainTopic(firstTopic);
        }
    },

    // 时间轴变化
    onTimelineChange(month) {
        MapRenderer.setMonth(month);
        MapRenderer.setSeasonalTheme(month);

        // 更新信息面板的季节
        const seasonEl = document.getElementById('current-season');
        const seasonMap = { 1:'❄️ 冬季', 2:'❄️ 冬季', 3:'🌱 春季', 4:'🌱 春季', 5:'🌱 春季',
                           6:'☀️ 夏季', 7:'☀️ 夏季', 8:'☀️ 夏季',
                           9:'🍂 秋季', 10:'🍂 秋季', 11:'🍂 秋季', 12:'❄️ 冬季' };
        if (seasonEl) seasonEl.textContent = seasonMap[month] || '';
    },

    // 开始挑战
    startChallenge() {
        const activeTopic = this._getActiveTopic();
        if (activeTopic) {
            this.startTopic(activeTopic.id);
        } else {
            // 推荐一个主题
            const rec = AdaptiveEngine.getRecommendedTopic();
            if (rec) {
                this.startTopic(rec.id);
            } else {
                // 默认选第一个未完成的
                const first = KnowledgeBase.getAllTopics().find(t => {
                    const m = AdaptiveEngine.getTopicMastery(t.id);
                    return m < 0.8;
                });
                if (first) this.startTopic(first.id);
                else this.startTopic(KnowledgeBase.getAllTopics()[0].id);
            }
        }
    },

    // 获取当前选中的主题
    _getActiveTopic() {
        const continentId = MapRenderer.activeContinent;
        if (!continentId) return null;
        const related = KnowledgeBase.getAllTopics().filter(t => t.continent === continentId);
        return related.length > 0 ? related[0] : null;
    },

    // 开始学习某个主题
    startTopic(topicId) {
        this.showScreen('challenge');
        Challenges.startTopic(topicId);
    },

    // 显示学习目录
    showTopicList() {
        const overlay = document.getElementById('topic-overlay');
        const grid = document.getElementById('topic-grid');
        overlay.classList.remove('hidden');

        grid.innerHTML = KnowledgeBase.getAllTopics().map(t => {
            const mastery = AdaptiveEngine.getTopicMastery(t.id);
            const status = mastery >= 0.8 ? '✅ 已掌握' :
                          mastery > 0 ? `📖 ${Math.round(mastery * 100)}%` : '🔍 未探索';
            return `
                <div class="topic-card" onclick="App.selectFromList('${t.id}')">
                    <div class="topic-icon">${t.icon}</div>
                    <div class="topic-name">${t.name}</div>
                    <div class="topic-status">${status}</div>
                    <div class="topic-mastery">
                        <div class="topic-mastery-fill" style="width:${Math.round(mastery * 100)}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    },

    closeTopicList() {
        document.getElementById('topic-overlay').classList.add('hidden');
    },

    selectFromList(topicId) {
        this.closeTopicList();
        const topic = KnowledgeBase.getTopicById(topicId);

        // 显示知识点讲解
        const overlay = document.getElementById('knowledge-overlay');
        const title = document.getElementById('knowledge-title');
        const body = document.getElementById('knowledge-body');

        title.textContent = `${topic.icon} ${topic.name}`;
        body.innerHTML = `
            <p>${topic.content.summary}</p>
            <div class="visual-helper">${topic.content.visual}</div>
            <p>${topic.content.details.replace(/\n/g, '<br>')}</p>
            <div class="fun-fact">💡 ${topic.content.funFact}</div>
            <div style="text-align:center; margin-top:20px;">
                <button class="btn-accent" onclick="App.closeKnowledge(); App.startTopic('${topic.id}')">
                    🧩 开始挑战
                </button>
                <button class="btn-secondary" style="margin-left:10px;" onclick="App.closeKnowledge()">
                    稍后再说
                </button>
            </div>
        `;

        overlay.classList.remove('hidden');
    },

    closeKnowledge() {
        document.getElementById('knowledge-overlay').classList.add('hidden');
    },

    // 更新用户信息
    updateUserInfo() {
        const levelEl = document.getElementById('user-level');
        const scoreEl = document.getElementById('user-score');
        if (levelEl) levelEl.textContent = `🌟 Lv.${AdaptiveEngine.userState.level}`;
        if (scoreEl) scoreEl.textContent = `⭐ ${AdaptiveEngine.userState.totalScore}`;
    }
};

// ===== 页面加载后启动 =====
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
