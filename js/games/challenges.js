// 挑战模式
const Challenges = {
    currentTopic: null,
    currentDifficulty: 1,
    currentQuestionIndex: 0,
    questions: [],
    answered: false,
    score: 0,
    totalAnswered: 0,

    // 开始话题挑战
    startTopic(topicId) {
        this.currentTopic = KnowledgeBase.getTopicById(topicId);
        if (!this.currentTopic) return;

        this.score = 0;
        this.totalAnswered = 0;

        // 获取推荐难度
        this.currentDifficulty = AdaptiveEngine.getRecommendedDifficulty(topicId);

        // 加载题目
        this.loadQuestions();
        this.showQuestion();
    },

    // 加载题目
    loadQuestions() {
        let questions = this.currentTopic.questions.filter(
            q => q.difficulty === this.currentDifficulty
        );
        if (questions.length === 0) {
            // 如果没有该难度的题，用全部
            questions = this.currentTopic.questions;
        }
        // 打乱顺序
        this.questions = this._shuffle(questions);
        this.currentQuestionIndex = 0;
    },

    _shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    // 显示题目
    showQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.finishChallenge();
            return;
        }

        const q = this.questions[this.currentQuestionIndex];
        this.answered = false;

        // 更新 UI
        document.getElementById('challenge-topic').textContent =
            `${this.currentTopic.icon} ${this.currentTopic.name}`;
        document.getElementById('question-text').textContent = q.question;
        document.getElementById('challenge-progress').textContent =
            `${this.totalAnswered + 1}/${this.currentTopic.questions.length}`;

        // 更新难度指示
        const dots = document.querySelectorAll('.diff-dot');
        dots.forEach((dot, i) => {
            dot.className = 'diff-dot';
            if (i + 1 === this.currentDifficulty) dot.classList.add('active');
        });

        // 渲染选项
        const container = document.getElementById('challenge-options');
        container.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-index">${labels[i]}</span>${opt}`;
            btn.dataset.index = i;
            btn.addEventListener('click', () => this.selectAnswer(i));
            container.appendChild(btn);
        });

        // 隐藏下一题按钮
        document.getElementById('btn-next').classList.remove('show');
        document.getElementById('challenge-feedback').innerHTML = '';

        // AI 向导鼓励
        AIGuide.say('来看看这道题，相信你一定能答对！💪', 'challenge-guide-text');
    },

    // 选择答案
    selectAnswer(index) {
        if (this.answered) return;
        this.answered = true;

        const q = this.questions[this.currentQuestionIndex];
        const isCorrect = index === q.answer;

        // 记录到自适应引擎
        AdaptiveEngine.recordAnswer(this.currentTopic.id, isCorrect, this.currentDifficulty);
        this.totalAnswered++;

        // 更新界面
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.answer) btn.classList.add('correct');
            if (i === index && !isCorrect) btn.classList.add('wrong');
        });

        // 反馈
        const feedback = document.getElementById('challenge-feedback');
        if (isCorrect) {
            this.score++;
            feedback.innerHTML = `<div class="feedback-text correct">✅ 正确！${q.explanation}</div>`;
            AIGuide.encourage('challenge-guide-text');

            // 连击
            if (AdaptiveEngine.userState.currentStreak >= 3) {
                feedback.innerHTML += `<div class="feedback-text correct" style="margin-top:8px;">🔥 ${AdaptiveEngine.userState.currentStreak} 连击！</div>`;
            }
        } else {
            feedback.innerHTML = `<div class="feedback-text wrong">❌ 正确答案是 ${['A','B','C','D'][q.answer]}。${q.explanation}</div>`;
            AIGuide.encourageWrong('challenge-guide-text');
        }

        // 更新得分
        document.getElementById('challenge-streak').textContent = `🔥 ${AdaptiveEngine.userState.currentStreak}`;

        // 显示下一题按钮
        document.getElementById('btn-next').classList.add('show');
    },

    // 下一题 / 完成返回
    nextQuestion() {
        if (this._challengeDone) {
            this._challengeDone = false;
            document.getElementById('btn-next').textContent = '下一题 →';
            App.showScreen('explore');
            const next = AdaptiveEngine.getRecommendedTopic();
            setTimeout(() => {
                if (next) AIGuide.suggestTopic(next);
                else AIGuide.say('恭喜你完成了所有学习内容！🎉');
            }, 500);
            return;
        }
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questions.length) {
            this.finishChallenge();
        } else {
            this.showQuestion();
        }
    },

    // 完成标志
    _challengeDone: false,

    // 完成挑战
    finishChallenge() {
        this._challengeDone = true;
        const total = this.currentTopic.questions.length;
        const mastery = AdaptiveEngine.getTopicMastery(this.currentTopic.id);
        const rate = total > 0 ? Math.round(this.score / this.questions.length * 100) : 0;

        document.getElementById('challenge-topic').textContent =
            `${this.currentTopic.icon} 挑战完成！`;
        document.getElementById('question-text').textContent =
            `你在「${this.currentTopic.name}」挑战中答对了 ${this.score}/${this.questions.length} 题（正确率 ${rate}%）！`;

        document.getElementById('challenge-options').innerHTML = `
            <div style="text-align:center; padding:20px; grid-column: 1/-1;">
                <div style="font-size:3rem; margin-bottom:10px;">${mastery >= 0.8 ? '🌟' : '👍'}</div>
                <div style="font-size:1.1rem; margin-bottom:6px;">掌握度：${Math.round(mastery * 100)}%</div>
                <div style="font-size:0.95rem; color:var(--text-secondary);">
                    ${mastery >= 0.8 ? '你已经掌握了这个知识点！' : '继续练习可以更好地掌握哦！'}
                </div>
            </div>
        `;

        document.getElementById('challenge-feedback').innerHTML = '';
        document.getElementById('btn-next').textContent = '返回探索 →';
        document.getElementById('btn-next').classList.add('show');

        // 检查成就
        Achievements.checkAll();

        // 检查升级
        if (AdaptiveEngine._checkLevelUp()) {
            const level = AdaptiveEngine.userState.level;
            setTimeout(() => AIGuide.celebrateLevelUp(level), 1000);
        }

        AdaptiveEngine.save();
    }
};
