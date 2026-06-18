// 时间轴控件
const Timeline = {
    currentMonth: 1,
    track: null,
    thumb: null,
    fill: null,
    dateLabel: null,
    labelsEl: null,
    isDragging: false,
    onChange: null,

    months: ['1月', '2月', '3月', '4月', '5月', '6月',
             '7月', '8月', '9月', '10月', '11月', '12月'],

    seasonIcons: { spring: '🌱', summer: '☀️', autumn: '🍂', winter: '❄️' },

    init(options = {}) {
        this.track = document.getElementById('timeline-track');
        this.thumb = document.getElementById('timeline-thumb');
        this.fill = document.getElementById('timeline-fill');
        this.dateLabel = document.getElementById('tl-date');
        this.labelsEl = document.getElementById('timeline-labels');
        if (options.onChange) this.onChange = options.onChange;

        this.renderLabels();
        this.setMonth(1);
        this.bindEvents();
    },

    renderLabels() {
        this.labelsEl.innerHTML = '';
        const showLabels = [1, 3, 5, 7, 9, 11];
        showLabels.forEach(m => {
            const label = document.createElement('span');
            label.textContent = m + '月';
            const pos = (m - 1) / 11 * 100;
            label.style.position = 'absolute';
            label.style.left = pos + '%';
            label.style.transform = 'translateX(-50%)';
            this.labelsEl.appendChild(label);
        });
    },

    bindEvents() {
        // 拖动滑块
        this.thumb.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            this.updateFromPosition(e.clientX);
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        // 点击轨道
        this.track.addEventListener('click', (e) => {
            if (e.target === this.thumb) return;
            this.updateFromPosition(e.clientX);
        });

        // 触控支持
        this.thumb.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (!this.isDragging) return;
            const touch = e.touches[0];
            this.updateFromPosition(touch.clientX);
        }, { passive: true });

        document.addEventListener('touchend', () => {
            this.isDragging = false;
        });
    },

    updateFromPosition(clientX) {
        const rect = this.track.getBoundingClientRect();
        let percent = (clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        const month = Math.round(percent * 11) + 1;
        this.setMonth(month);
    },

    setMonth(month) {
        this.currentMonth = month;
        const percent = (month - 1) / 11 * 100;

        if (this.fill) this.fill.style.width = percent + '%';
        if (this.thumb) this.thumb.style.left = percent + '%';
        if (this.dateLabel) {
            const season = this.getSeason(month);
            this.dateLabel.textContent = this.seasonIcons[season] + ' ' + this.months[month - 1];
        }

        if (this.onChange) this.onChange(month);
    },

    prevMonth() {
        let m = this.currentMonth - 1;
        if (m < 1) m = 12;
        this.setMonth(m);
    },

    nextMonth() {
        let m = this.currentMonth + 1;
        if (m > 12) m = 1;
        this.setMonth(m);
    },

    getSeason(month) {
        if (month >= 3 && month <= 5) return 'spring';
        if (month >= 6 && month <= 8) return 'summer';
        if (month >= 9 && month <= 11) return 'autumn';
        return 'winter';
    }
};
