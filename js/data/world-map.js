// 简化版世界地图数据 - 卡通风格，适合儿童
const WorldMap = {
    viewBox: { w: 800, h: 400 },

    // 大洲 SVG 路径（简化卡通风格）
    continents: [
        {
            id: 'north-america',
            name: '北美洲',
            nameEn: 'North America',
            icon: '🍁',
            color: '#A8D8EA',
            hoverColor: '#7EC8E3',
            path: 'M 105,75 C 120,50 160,38 185,42 C 200,44 215,50 225,58 C 240,68 250,78 248,92 C 246,108 238,120 235,135 C 232,148 225,158 218,168 C 210,178 200,185 192,195 C 185,203 178,212 168,215 C 158,218 148,213 142,205 C 135,195 132,182 128,168 C 122,150 115,135 112,118 C 108,100 102,88 105,75 Z'
        },
        {
            id: 'south-america',
            name: '南美洲',
            nameEn: 'South America',
            icon: '🌴',
            color: '#A8E6CF',
            hoverColor: '#7ED8AA',
            path: 'M 175,215 C 182,212 188,218 192,228 C 196,240 198,255 200,268 C 202,282 205,295 203,308 C 201,320 195,328 188,335 C 180,342 172,345 168,338 C 162,328 158,315 156,300 C 154,285 153,268 155,252 C 157,238 162,225 168,218 C 170,214 173,216 175,215 Z'
        },
        {
            id: 'europe',
            name: '欧洲',
            nameEn: 'Europe',
            icon: '🏰',
            color: '#C9B8E8',
            hoverColor: '#B49EDC',
            path: 'M 355,55 C 365,48 380,45 395,48 C 408,50 420,58 428,68 C 432,76 430,86 425,95 C 420,104 412,110 405,115 C 395,120 385,122 375,120 C 365,118 358,112 352,105 C 345,96 340,85 342,75 C 344,65 348,58 355,55 Z'
        },
        {
            id: 'africa',
            name: '非洲',
            nameEn: 'Africa',
            icon: '🦁',
            color: '#F5D5A8',
            hoverColor: '#EFC48A',
            path: 'M 360,120 C 370,115 382,118 390,125 C 398,132 405,145 410,158 C 415,172 420,188 420,202 C 420,215 416,228 408,238 C 400,248 392,252 385,248 C 378,244 372,235 368,222 C 364,210 360,195 358,180 C 356,165 352,150 350,138 C 348,128 352,122 360,120 Z'
        },
        {
            id: 'asia',
            name: '亚洲',
            nameEn: 'Asia',
            icon: '🏯',
            color: '#FFD5A8',
            hoverColor: '#FFC48A',
            path: 'M 430,45 C 450,35 475,30 505,35 C 535,40 560,50 580,62 C 600,75 615,90 622,108 C 628,125 625,142 618,158 C 610,175 598,185 585,192 C 570,200 555,202 540,198 C 525,194 512,185 500,175 C 490,165 482,152 475,140 C 468,128 460,115 452,105 C 445,95 438,85 432,75 C 426,65 424,55 428,48 C 429,46 430,45 430,45 Z'
        },
        {
            id: 'australia',
            name: '大洋洲',
            nameEn: 'Oceania',
            icon: '🦘',
            color: '#B8E8B8',
            hoverColor: '#96DC96',
            path: 'M 580,258 C 595,252 615,254 630,260 C 645,266 658,278 660,292 C 662,306 655,318 642,325 C 628,332 612,330 598,324 C 585,318 575,308 572,295 C 570,282 572,268 580,258 Z'
        }
    ],

    // 兴趣点标记（可随时间变化）
    markers: [
        { id: 'bear', name: '北极熊', x: 150, y: 55, icon: '🐻‍❄️', season: [1,2,3,12], continent: 'north-america', info: '北极熊生活在北极冰原上' },
        { id: 'eagle', name: '白头海雕', x: 175, y: 80, icon: '🦅', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'north-america', info: '美国的国鸟' },
        { id: 'monkey', name: '金丝猴', x: 490, y: 130, icon: '🐒', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'asia', info: '生活在中国的山林中' },
        { id: 'panda', name: '大熊猫', x: 470, y: 145, icon: '🐼', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'asia', info: '中国的国宝，爱吃竹子' },
        { id: 'elephant', name: '非洲象', x: 395, y: 200, icon: '🐘', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'africa', info: '非洲草原上的大型动物' },
        { id: 'lion', name: '狮子', x: 380, y: 190, icon: '🦁', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'africa', info: '草原之王' },
        { id: 'kangaroo', name: '袋鼠', x: 620, y: 285, icon: '🦘', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'australia', info: '澳大利亚的象征' },
        { id: 'penguin', name: '企鹅', x: 400, y: 365, icon: '🐧', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: null, info: '生活在南极' },
        { id: 'tulip', name: '郁金香', x: 375, y: 82, icon: '🌷', season: [3,4,5], continent: 'europe', info: '荷兰的国花，春天盛开' },
        { id: 'maple', name: '枫叶', x: 200, y: 65, icon: '🍁', season: [9,10,11], continent: 'north-america', info: '加拿大枫叶在秋天变红' },
        { id: 'cherry', name: '樱花', x: 530, y: 110, icon: '🌸', season: [3,4], continent: 'asia', info: '日本的樱花在春天盛开' },
        { id: 'temple', name: '长城', x: 490, y: 100, icon: '🏯', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'asia', info: '中国的万里长城' },
        { id: 'pyramid', name: '金字塔', x: 390, y: 175, icon: '🔺', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'africa', info: '埃及的金字塔，古代奇迹' },
        { id: 'opera', name: '悉尼歌剧院', x: 610, y: 270, icon: '🎵', season: [1,2,3,4,5,6,7,8,9,10,11,12], continent: 'australia', info: '澳大利亚的标志性建筑' },
        // 迁徙动物（随季节变化位置）
        { id: 'swallow', name: '家燕（迁徙）', x: 350, y: 130, icon: '🐦', season: [4,5,6,7,8,9], continent: 'europe', info: '春天飞到欧洲筑巢' },
        { id: 'swallow-winter', name: '家燕（越冬）', x: 400, y: 225, icon: '🐦', season: [10,11,12,1,2,3], continent: 'africa', info: '冬天飞到非洲过冬' },
        { id: 'caribou', name: '驯鹿', x: 165, y: 58, icon: '🦌', season: [6,7,8,9], continent: 'north-america', info: '夏季在北极苔原' },
        { id: 'caribou-winter', name: '驯鹿（冬季）', x: 190, y: 85, icon: '🦌', season: [10,11,12,1,2,3,4,5], continent: 'north-america', info: '冬季向南迁徙到森林' },
    ],

    // 获取当前月份显示的标记
    getMarkersForMonth(month) {
        return this.markers.filter(m => m.season.includes(month));
    }
};
