// AI 向导角色 - "小智"
const AIGuide = {
    avatarEl: null,
    bubbleEl: null,
    textEl: null,

    // 角色资料
    character: {
        name: '小智',
        emoji: '🤖',
        greetings: [
            '你好！我是小智，你的时空探索向导！',
            '欢迎来到时空小探险！我们一起去探索吧！',
            '嗨！准备好来一场时空旅行了吗？'
        ],
        encouragements: [
            '太棒了！继续加油！',
            '好厉害！你已经掌握这个知识点了！',
            '答对了！你真聪明！',
            '不错哦！再接再厉！',
            '哇，你已经对这个话题很了解了！'
        ],
        encouragementsWrong: [
            '没关系，再想想！我帮你分析一下。',
            '答错了不要紧，学习就是这样一步步来的！',
            '差一点就对了，我们再试试别的题。',
            '别灰心，每个人都会犯错，重要的是从中学到东西！'
        ],
        tips: [
            '你知道吗？地球自转的速度在赤道处比飞机还快！',
            '北极燕鸥每年飞行距离相当于绕地球两圈！',
            '如果没有地轴倾斜，就没有四季变化了！',
            '撒哈拉沙漠白天 58°C，晚上能到 0°C 以下！',
            '在金星上，太阳从西方升起！'
        ]
    },

    init(avatarId, bubbleId, textId) {
        this.avatarEl = document.getElementById(avatarId);
        this.bubbleEl = document.getElementById(bubbleId);
        this.textEl = document.getElementById(textId);

        // 点击头像切换提示
        if (this.avatarEl) {
            this.avatarEl.addEventListener('click', () => {
                const tip = this.character.tips[Math.floor(Math.random() * this.character.tips.length)];
                this.say(tip);
            });
        }

        // 初始问候
        setTimeout(() => {
            const greeting = this.character.greetings[Math.floor(Math.random() * this.character.greetings.length)];
            this.say(greeting);
        }, 800);
    },

    // 说话
    say(text, textElId) {
        const el = textElId ? document.getElementById(textElId) : this.textEl;
        if (el) {
            el.textContent = text;
            // 重置动画
            el.style.animation = 'none';
            void el.offsetHeight;
            el.style.animation = 'fadeInUp 0.3s ease';
        }
    },

    // 引导探索话题
    suggestTopic(topic) {
        if (!topic) {
            this.say('你已经学完了所有话题！真了不起！去成就页面看看吧 🏆');
            return;
        }
        const msg = `我建议你接下来学习「${topic.name}」${topic.icon}，要试试吗？`;
        this.say(msg);
    },

    // 鼓励（答对）
    encourage(guideTextId) {
        const msgs = this.character.encouragements;
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        this.say(msg, guideTextId);
    },

    // 鼓励（答错）
    encourageWrong(guideTextId) {
        const msgs = this.character.encouragementsWrong;
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        this.say(msg, guideTextId);
    },

    // 讲解知识点
    explainTopic(topic) {
        if (!topic) return;
        this.say(`来看看「${topic.name}」的知识吧！${topic.content.visual}`);
    },

    // 庆祝成就
    celebrate(achievement) {
        if (achievement) {
            this.say(`🎉 恭喜解锁成就「${achievement.name}」！你太棒了！`);
        }
    },

    // 升级祝贺
    celebrateLevelUp(level) {
        this.say(`🎉 你升到 Lv.${level} 了！真是了不起的时空探险家！`);
    }
};
