// 动画与特效系统
const Animations = {
    // 粒子系统
    particles: [],

    // 初始化星空粒子背景（欢迎页）
    initStarfield(container) {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        container.style.position = 'relative';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let stars = [];

        function resize() {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // 生成星星
        for (let i = 0; i < 80; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.3 + 0.1,
                opacity: Math.random() * 0.7 + 0.3
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                s.y -= s.speed;
                s.x += Math.sin(s.y * 0.01) * 0.2;
                if (s.y < -5) { s.y = canvas.height + 5; s.x = Math.random() * canvas.width; }
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }
        animate();
    },

    // 浮动提示动画
    showFloatingText(text, x, y, color = '#FFB347') {
        const el = document.createElement('div');
        el.textContent = text;
        el.style.cssText = `
            position: fixed; left: ${x}px; top: ${y}px;
            font-size: 1.5rem; font-weight: 700; color: ${color};
            pointer-events: none; z-index: 1000;
            text-shadow: 0 2px 8px rgba(0,0,0,0.2);
            transition: all 1.5s ease;
        `;
        document.body.appendChild(el);
        requestAnimationFrame(() => {
            el.style.transform = 'translateY(-60px)';
            el.style.opacity = '0';
        });
        setTimeout(() => el.remove(), 1600);
    },

    // 页面转场
    transitionIn(el, duration = 400) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all ${duration}ms ease`;
        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    },

    // 成就解锁特效
    showAchievementUnlock(name, icon) {
        const el = document.createElement('div');
        el.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            text-align: center; z-index: 1000;
            animation: unlockPop 0.6s ease forwards;
        `;
        el.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 10px;">${icon}</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: #FFB347; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">
                🏆 成就解锁！
            </div>
            <div style="font-size: 1.2rem; font-weight: 600; color: white; margin-top: 8px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                ${name}
            </div>
        `;

        // 添加关键帧动画
        if (!document.getElementById('unlock-keyframes')) {
            const style = document.createElement('style');
            style.id = 'unlock-keyframes';
            style.textContent = `
                @keyframes unlockPop {
                    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
                    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                    70% { transform: translate(-50%, -50%) scale(0.95); }
                    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(el);
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.transform = 'translate(-50%, -50%) scale(1.2)';
            el.style.opacity = '0';
            setTimeout(() => el.remove(), 900);
        }, 2500);
    }
};
