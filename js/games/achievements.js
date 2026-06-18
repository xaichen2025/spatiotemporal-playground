// 成就系统
const Achievements = {
    // 成就定义
    definitions: [
        { id: 'first-challenge', name: '初出茅庐', icon: '🎯', desc: '完成第一次挑战', check: (s) => s.totalScore >= 10 },
        { id: 'score-100', name: '小有成就', icon: '⭐', desc: '累计获得 100 分', check: (s) => s.totalScore >= 100 },
        { id: 'score-500', name: '学识渊博', icon: '🌟', desc: '累计获得 500 分', check: (s) => s.totalScore >= 500 },
        { id: 'streak-3', name: '初露锋芒', icon: '🔥', desc: '达成 3 连击', check: (s) => s.longestStreak >= 3 },
        { id: 'streak-5', name: '势如破竹', icon: '⚡', desc: '达成 5 连击', check: (s) => s.longestStreak >= 5 },
        { id: 'level-3', name: '探索新星', icon: '🌠', desc: '达到 Lv.3', check: (s) => s.level >= 3 },
        { id: 'level-5', name: '时空达人', icon: '👑', desc: '达到 Lv.5', check: (s) => s.level >= 5 },
        { id: 'master-one', name: '学有所成', icon: '📚', desc: '掌握一个知识点（掌握度≥80%）', check: (s) => {
            return Object.values(s.topics).some(t => t.mastery >= 0.8);
        }},
        { id: 'master-all', name: '满腹经纶', icon: '🏅', desc: '掌握所有知识点', check: (s) => {
            return Object.values(s.topics).every(t => t.mastery >= 0.8) && Object.keys(s.topics).length >= 11;
        }},
        { id: 'explorer-asia', name: '亚洲探险家', icon: '🏯', desc: '完成亚洲相关话题学习', check: (s) => {
            const asiaTopics = ['solar-system', 'world-cultures'];
            return asiaTopics.every(t => s.topics[t] && s.topics[t].mastery >= 0.5);
        }},
        { id: 'nature-lover', name: '自然爱好者', icon: '🌿', desc: '完成自然相关话题学习', check: (s) => {
            const nature = ['animal-migration', 'plant-seasons', 'climate-zones'];
            return nature.every(t => s.topics[t] && s.topics[t].mastery >= 0.5);
        }},
        { id: 'time-wizard', name: '时间魔法师', icon: '🕐', desc: '完成时间相关话题学习', check: (s) => {
            const time = ['timezone', 'seasons', 'earth-rotation'];
            return time.every(t => s.topics[t] && s.topics[t].mastery >= 0.5);
        }}
    ],

    // 检查并解锁成就
    checkAll(showNotification = false) {
        const state = AdaptiveEngine.userState;
        let newlyUnlocked = [];

        this.definitions.forEach(def => {
            if (!state.achievements.includes(def.id) && def.check(state)) {
                state.achievements.push(def.id);
                newlyUnlocked.push(def);
            }
        });

        if (newlyUnlocked.length > 0) {
            AdaptiveEngine.save();
            // 显示解锁通知
            newlyUnlocked.forEach(a => {
                Animations.showAchievementUnlock(a.name, a.icon);
                AIGuide.celebrate(a);
            });
        }

        return newlyUnlocked;
    },

    // 检查单个成就（用于触发式检查）
    checkById(id) {
        const def = this.definitions.find(d => d.id === id);
        if (!def) return false;
        const state = AdaptiveEngine.userState;
        if (state.achievements.includes(id)) return true;
        if (def.check(state)) {
            state.achievements.push(id);
            AdaptiveEngine.save();
            Animations.showAchievementUnlock(def.name, def.icon);
            AIGuide.celebrate(def);
            return true;
        }
        return false;
    },

    // 渲染成就页面
    render(gridId) {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        grid.innerHTML = '';

        const state = AdaptiveEngine.userState;

        this.definitions.forEach(def => {
            const unlocked = state.achievements.includes(def.id);
            const card = document.createElement('div');
            card.className = `achieve-card ${unlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="achieve-icon">${unlocked ? def.icon : '🔒'}</div>
                <div class="achieve-name">${def.name}</div>
                <div class="achieve-desc">${def.desc}</div>
            `;
            grid.appendChild(card);
        });

        // 更新计数
        const countEl = document.getElementById('achieve-count');
        if (countEl) {
            countEl.textContent = `${state.achievements.length}/${this.definitions.length}`;
        }
    },

    // 获取已解锁成就数
    getUnlockedCount() {
        return AdaptiveEngine.userState.achievements.length;
    }
};
