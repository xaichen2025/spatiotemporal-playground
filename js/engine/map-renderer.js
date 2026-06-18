// 地图渲染引擎
const MapRenderer = {
    svg: null,
    markersContainer: null,
    activeContinent: null,
    currentMonth: 1,
    onContinentClick: null,

    // 初始化地图
    init(svgId, markersId, options = {}) {
        this.svg = document.getElementById(svgId);
        this.markersContainer = document.getElementById(markersId);
        if (options.onContinentClick) this.onContinentClick = options.onContinentClick;

        this.renderContinents();
        this.renderGrid();
        this.renderMarkers();
    },

    // 渲染大洲
    renderContinents() {
        WorldMap.continents.forEach(c => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', c.path);
            path.setAttribute('class', 'continent');
            path.dataset.continentId = c.id;
            path.addEventListener('click', () => this.selectContinent(c.id));
            this.svg.appendChild(path);
        });
    },

    // 渲染经纬网格线
    renderGrid() {
        const equator = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        equator.setAttribute('x1', '0'); equator.setAttribute('y1', '200');
        equator.setAttribute('x2', '800'); equator.setAttribute('y2', '200');
        equator.setAttribute('class', 'grid-line');
        equator.setAttribute('stroke-dasharray', '4,4');
        this.svg.appendChild(equator);

        const prime = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        prime.setAttribute('x1', '400'); prime.setAttribute('y1', '0');
        prime.setAttribute('x2', '400'); prime.setAttribute('y2', '400');
        prime.setAttribute('class', 'grid-line');
        prime.setAttribute('stroke-dasharray', '4,4');
        this.svg.appendChild(prime);
    },

    // 选择大洲
    selectContinent(continentId) {
        this.activeContinent = continentId;

        // 高亮
        const paths = this.svg.querySelectorAll('.continent');
        paths.forEach(p => {
            p.classList.toggle('active', p.dataset.continentId === continentId);
        });

        if (this.onContinentClick) this.onContinentClick(continentId);
    },

    // 清除选择
    clearSelection() {
        this.activeContinent = null;
        const paths = this.svg.querySelectorAll('.continent');
        paths.forEach(p => p.classList.remove('active'));
    },

    // 设置月份并更新标记
    setMonth(month) {
        this.currentMonth = month;
        this.renderMarkers();
    },

    // 渲染标记
    renderMarkers() {
        if (!this.markersContainer) return;
        this.markersContainer.innerHTML = '';

        const markers = WorldMap.getMarkersForMonth(this.currentMonth);
        markers.forEach(m => {
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.left = m.x / 800 * 100 + '%';
            el.style.top = m.y / 400 * 100 + '%';
            el.textContent = m.icon;
            el.title = m.name;

            const label = document.createElement('div');
            label.className = 'marker-label';
            label.textContent = m.name;
            el.appendChild(label);

            const match = WorldMap.continents.find(c => c.id === m.continent);
            if (match) {
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.selectContinent(m.continent);
                });
            }

            this.markersContainer.appendChild(el);
        });
    },

    // 更新地图样式主题
    setSeasonalTheme(month) {
        // 根据月份改变地图底色
        const season = this.getSeason(month);
        const hues = { spring: 200, summer: 150, autumn: 30, winter: 220 };
        const hue = hues[season] || 200;
        const paths = this.svg.querySelectorAll('.continent');
        paths.forEach(p => {
            const baseId = p.dataset.continentId;
            const continent = WorldMap.continents.find(c => c.id === baseId);
            if (continent) {
                // 轻微季节性色调变化
                p.style.fill = `hsl(${hue}, 55%, 78%)`;
            }
        });
    },

    // 获取季节
    getSeason(month) {
        if (month >= 3 && month <= 5) return 'spring';
        if (month >= 6 && month <= 8) return 'summer';
        if (month >= 9 && month <= 11) return 'autumn';
        return 'winter';
    }
};
