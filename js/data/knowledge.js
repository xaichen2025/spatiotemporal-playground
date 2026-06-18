// 时空知识库 - 10+ 主题，每题 3 级难度
const KnowledgeBase = {

    // 主题列表
    topics: [
        {
            id: 'earth-rotation',
            name: '地球自转与昼夜',
            icon: '🌍',
            color: '#4A90D9',
            continent: null,
            prerequisites: [],
            content: {
                summary: '地球像一个大陀螺，不停地绕着一根 imaginary 的轴自西向东旋转，这就是「自转」。地球自转一圈大约需要 24 小时，所以我们有白天和黑夜的交替。朝向太阳的一面是白天，背向太阳的一面是黑夜。',
                details: '🌏 地球自转的速度在赤道处约为每秒 465 米，比飞机还快！\n\n🕐 因为地球自转，不同经度的地方看到太阳的时间不一样，于是有了「时区」的概念。\n\n🔬 法国物理学家傅科用「傅科摆」证明了地球在自转。',
                funFact: '你知道吗？地球自转正在慢慢变慢！每过 100 年，一天的长度会增加约 1.8 毫秒。恐龙时代，一天只有 23 小时！',
                visual: '🔄'
            },
            questions: [
                // 难度 1 - 简单
                {
                    difficulty: 1,
                    question: '地球自转一圈大约需要多长时间？',
                    options: ['12 小时', '24 小时', '365 天', '7 天'],
                    answer: 1,
                    explanation: '地球自转一圈约 24 小时，这就是我们一天的长度。'
                },
                {
                    difficulty: 1,
                    question: '地球自转的方向是？',
                    options: ['自东向西', '自西向东', '自南向北', '自北向南'],
                    answer: 1,
                    explanation: '地球从西向东自转，所以我们看到太阳从东方升起。'
                },
                {
                    difficulty: 1,
                    question: '白天和黑夜交替出现是因为什么？',
                    options: ['地球绕太阳转', '地球自转', '月亮挡住了太阳', '太阳在移动'],
                    answer: 1,
                    explanation: '地球自转时，朝向太阳的一面是白天，背向的一面就是黑夜。'
                },
                // 难度 2 - 中等
                {
                    difficulty: 2,
                    question: '地球自转在赤道处的速度大约是多少？',
                    options: ['每秒 46.5 米', '每秒 465 米', '每秒 4650 米', '每秒 46.5 千米'],
                    answer: 1,
                    explanation: '赤道周长约 4 万公里，24 小时转完一圈，算下来速度约每秒 465 米！'
                },
                {
                    difficulty: 2,
                    question: '傅科摆是用来证明什么的？',
                    options: ['地球是圆的', '地球在自转', '地球在公转', '地球有引力'],
                    answer: 1,
                    explanation: '傅科摆的摆动平面会缓慢转动，这直接证明了地球在自转。'
                },
                // 难度 3 - 困难
                {
                    difficulty: 3,
                    question: '如果不考虑地球自转速度的变化，一亿年前一天大约有多长？',
                    options: ['和现在一样', '比现在短约 2 小时', '比现在长约 2 小时', '一亿年前没有昼夜'],
                    answer: 2,
                    explanation: '地球自转在减慢！每世纪增加约 1.8 毫秒，一亿年前一天比现在短约 0.5 小时，反过来未来的天数会变长。实际上根据化石珊瑚的年轮，4亿年前一年有约400天。'
                }
            ]
        },
        {
            id: 'seasons',
            name: '地球公转与四季',
            icon: '🌞',
            color: '#FFB347',
            continent: null,
            prerequisites: ['earth-rotation'],
            content: {
                summary: '地球不仅自转，还绕着太阳公转。公转一圈是一年（约 365.25 天）。有趣的是，地球的「身体」是歪着的——地轴与公转轨道面有约 23.5° 的倾斜。正是这个倾斜角度，让我们有了春夏秋冬！',
                details: '🌞 夏至时（6月左右），北半球朝向太阳，所以天气炎热。\n\n❄️ 冬至时（12月左右），北半球背向太阳，所以天气寒冷。\n\n🌱 春分和秋分时，太阳直射赤道，全球昼夜等长。\n\n📐 地轴的 23.5° 倾斜是四季形成的根本原因。',
                funFact: '如果没有地轴倾斜，地球就没有四季变化！赤道永远炎热，两极永远寒冷，很多地方将不适合人类居住。',
                visual: '🌏☀️'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '地球绕太阳公转一圈需要多长时间？',
                    options: ['24 小时', '30 天', '365 天', '10 年'],
                    answer: 2,
                    explanation: '地球绕太阳公转一圈约 365 天，也就是一年。'
                },
                {
                    difficulty: 1,
                    question: '四季的形成主要和什么有关？',
                    options: ['地球离太阳的距离', '地轴的倾斜', '地球的大小', '月亮的引力'],
                    answer: 1,
                    explanation: '地轴倾斜约 23.5°，使得不同季节太阳照射角度不同，形成了四季。'
                },
                {
                    difficulty: 1,
                    question: '北半球夏天时，太阳直射点在？',
                    options: ['赤道', '北回归线', '南回归线', '北极'],
                    answer: 1,
                    explanation: '夏至时太阳直射北回归线（约北纬 23.5°），北半球接收最多热量。'
                },
                {
                    difficulty: 2,
                    question: '春分这一天有什么特点？',
                    options: ['白天最长', '黑夜最长', '全球昼夜等长', '开始下雪'],
                    answer: 2,
                    explanation: '春分和秋分时，太阳直射赤道，全球各地昼夜等长，各 12 小时。'
                },
                {
                    difficulty: 2,
                    question: '地轴倾斜的角度大约是多少？',
                    options: ['12.5°', '23.5°', '35.5°', '45°'],
                    answer: 1,
                    explanation: '地轴倾斜约 23.5°，这个角度让太阳直射点在南北回归线之间移动。'
                },
                {
                    difficulty: 3,
                    question: '如果地轴倾斜角变成 45°，地球上会发生什么？',
                    options: ['没有变化', '四季更分明，极端天气更多', '四季消失', '地球会停止转动'],
                    answer: 1,
                    explanation: '地轴倾斜越大，太阳直射点的纬度范围就越大，夏季更热、冬季更冷，温带地区的四季差异会更极端。'
                },
                {
                    difficulty: 3,
                    question: '地球在近日点（离太阳最近）时，北半球是什么季节？',
                    options: ['春天', '夏天', '秋天', '冬天'],
                    answer: 3,
                    explanation: '地球在每年 1 月初到达近日点，此时北半球是冬天。所以距离太阳的远近并不是四季的主因，地轴倾斜才是！'
                }
            ]
        },
        {
            id: 'timezone',
            name: '世界时区',
            icon: '🕐',
            color: '#9B6BFF',
            continent: null,
            prerequisites: ['earth-rotation'],
            content: {
                summary: '地球自转一圈是 360°，24 小时，所以每小时转过 15° 经度。人们把地球划分为 24 个时区，每个时区宽 15° 经度。同一个时区内用相同的时间，相邻时区差 1 小时。',
                details: '📍 本初子午线（0° 经线）穿过伦敦格林尼治天文台，是时区的起点。\n\n🌏 中国虽然横跨 5 个时区，但全国统一使用北京时间（东八区）。\n\n➖ 国际日期变更线在太平洋中间，从东向西跨越它要「减一天」！',
                funFact: '俄罗斯有 11 个时区，是全球时区最多的国家！当莫斯科是早上 8 点时，远东的堪察加已经是下午 5 点了。',
                visual: '🌐'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '全世界共划分了多少个时区？',
                    options: ['12 个', '24 个', '36 个', '48 个'],
                    answer: 1,
                    explanation: '地球每 15° 经度一个时区，360° ÷ 15° = 24 个时区。'
                },
                {
                    difficulty: 1,
                    question: '中国全国统一使用哪个时区的时间？',
                    options: ['东六区', '东七区', '东八区', '东九区'],
                    answer: 2,
                    explanation: '中国统一使用北京时间，属于东八区（UTC+8）。'
                },
                {
                    difficulty: 2,
                    question: '本初子午线（0°经线）通过哪个城市？',
                    options: ['巴黎', '伦敦', '罗马', '柏林'],
                    answer: 1,
                    explanation: '本初子午线穿过伦敦格林尼治天文台，所以也叫格林尼治子午线。'
                },
                {
                    difficulty: 2,
                    question: '北京时间（东八区）是 UTC 几点？',
                    options: ['UTC+6', 'UTC+7', 'UTC+8', 'UTC+9'],
                    answer: 2,
                    explanation: '北京时间 = UTC+8，比格林尼治时间早 8 小时。'
                },
                {
                    difficulty: 3,
                    question: '当你从中国（东八区）飞到美国纽约（西五区），到达后手表需要怎么调？',
                    options: ['拨快 13 小时', '拨慢 13 小时', '拨快 3 小时', '拨慢 3 小时'],
                    answer: 1,
                    explanation: '东八区和西五区相差 13 小时（8+5=13）。往东飞减时间，往西飞加时间。从中国到美国往东飞，所以要拨慢 13 小时。实际上这是跨过国际日期变更线，很可能会「减少一天」。'
                }
            ]
        },
        {
            id: 'animal-migration',
            name: '动物大迁徙',
            icon: '🦒',
            color: '#7BC67E',
            continent: 'africa',
            prerequisites: ['seasons'],
            content: {
                summary: '许多动物会随着季节变化进行长距离的迁移，这叫做「迁徙」。动物迁徙是为了寻找食物、适宜的繁殖地或避开严寒。最著名的迁徙之一是非洲角马大迁徙，每年有超过 150 万头角马在坦桑尼亚和肯尼亚之间往返。',
                details: '🦓 东非角马大迁徙：每年 7-8 月穿越马拉河，场面壮观。\n\n🐦 家燕每年秋天从欧洲飞到非洲过冬，春天返回，单程约 10000 公里。\n\n🦋 帝王蝶每年从加拿大飞到墨西哥越冬，飞行约 4000 公里。\n\n🦭 灰鲸每年从北极游到墨西哥繁殖，往返约 20000 公里。',
                funFact: '北极燕鸥是迁徙距离最长的动物！它们每年在北极和南极之间往返，飞行距离超过 70000 公里，相当于绕地球近两圈！',
                visual: '🦒🌿'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '动物为什么要迁徙？',
                    options: ['为了好玩', '寻找食物和适宜的气候', '为了锻炼身体', '为了上学'],
                    answer: 1,
                    explanation: '动物迁徙主要是为了寻找食物、避开严寒或寻找适合繁殖的地方。'
                },
                {
                    difficulty: 1,
                    question: '非洲角马大迁徙中，角马们要穿越哪条危险的河流？',
                    options: ['尼罗河', '马拉河', '刚果河', '赞比西河'],
                    answer: 1,
                    explanation: '角马大迁徙中最惊险的就是穿越马拉河，河里有大量鳄鱼等着它们。'
                },
                {
                    difficulty: 2,
                    question: '家燕秋天从欧洲飞到非洲过冬，春天再飞回来，这种行为叫什么？',
                    options: ['搬家', '旅行', '迁徙', '探险'],
                    answer: 2,
                    explanation: '这种随季节变化往返迁移的行为叫做迁徙。'
                },
                {
                    difficulty: 2,
                    question: '以下哪种动物是迁徙距离最长的？',
                    options: ['家燕', '角马', '北极燕鸥', '帝王蝶'],
                    answer: 2,
                    explanation: '北极燕鸥每年在北极和南极间往返，飞行距离超 70000 公里！'
                },
                {
                    difficulty: 3,
                    question: '帝王蝶（ monarch butterfly ）每年从哪里迁徙到哪里？',
                    options: ['欧洲到非洲', '加拿大到墨西哥', '中国到印度', '澳洲到南极'],
                    answer: 1,
                    explanation: '帝王蝶从加拿大和美国北部飞到墨西哥中部的山林过冬，全程约 4000 公里，需要整整四代蝴蝶接力完成！'
                }
            ]
        },
        {
            id: 'plant-seasons',
            name: '植物与季节',
            icon: '🌳',
            color: '#5CB85C',
            continent: null,
            prerequisites: ['seasons'],
            content: {
                summary: '植物和季节变化密切相关！春天，气温回升，植物开始发芽开花；夏天，阳光充足，植物疯狂生长；秋天，日照变短，树叶变色脱落；冬天，树木进入休眠期，等待下一个春天。',
                details: '🌱 春天：樱花、桃花、郁金香盛开，树木长出新叶。\n\n☀️ 夏天：植物生长最快，水果蔬菜丰富。\n\n🍂 秋天：枫叶变红，银杏变黄，果实成熟。\n\n❄️ 冬天：落叶树光秃秃的，常青树依然翠绿。\n\n⏰ 植物通过感知日照长短来「知道」季节变化，这叫光周期现象。',
                funFact: '有些植物对时间非常敏感！比如「时钟花」每天准时在早上开放、傍晚闭合；含羞草的叶子在白天展开、夜晚合拢，好像有自己的「生物钟」。',
                visual: '🌱🌳🍂❄️'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '秋天树叶变色的主要原因是？',
                    options: ['树生病了', '日照变短、温度降低', '空气污染', '被虫子吃了'],
                    answer: 1,
                    explanation: '秋季日照变短、温度下降，叶绿素分解，露出了叶黄素和花青素的颜色。'
                },
                {
                    difficulty: 1,
                    question: '春天来临的信号不包括以下哪项？',
                    options: ['气温回升', '植物发芽', '落叶纷飞', '花开'],
                    answer: 2,
                    explanation: '落叶纷飞是秋天的特征，不是春天的。'
                },
                {
                    difficulty: 2,
                    question: '植物通过感知什么来「知道」季节变化？',
                    options: ['温度', '湿度', '日照长短', '风力'],
                    answer: 2,
                    explanation: '植物通过感知日照长短（光周期）来判断季节，从而安排开花、落叶等生命活动。'
                },
                {
                    difficulty: 2,
                    question: '冬天树木落叶进入休眠期有什么好处？',
                    options: ['减少水分和能量消耗', '让树变矮', '防止被雪压断', '方便砍伐'],
                    answer: 0,
                    explanation: '冬天水分少、温度低，落叶休眠可以减少水分蒸发和能量消耗，帮助树木度过严冬。'
                },
                {
                    difficulty: 3,
                    question: '为什么一些植物只在春天开花，而另一些在秋天开花？',
                    options: ['因为它们喜欢不同的温度', '它们对日照长短的响应不同', '因为种子不同', '随机发生的'],
                    answer: 1,
                    explanation: '长日照植物在日照变长时（春末夏初）开花，短日照植物在日照变短时（秋季）开花。这是植物对环境的精确适应。'
                }
            ]
        },
        {
            id: 'climate-zones',
            name: '世界气候带',
            icon: '🌡️',
            color: '#FF6B6B',
            continent: null,
            prerequisites: ['seasons'],
            content: {
                summary: '地球上不同地区的天气模式长期平均就是「气候」。根据温度和降水，世界分为热带、温带、寒带三大气候带。赤道附近最热，两极最冷。气候带也影响了人们的生活方式、房屋建筑和饮食习惯。',
                details: '🌴 热带（0°-23.5°）：全年高温多雨，有热带雨林。\n\n🌳 温带（23.5°-66.5°）：四季分明，是最适合农业的气候。\n\n❄️ 寒带（66.5°-90°）：全年寒冷，有冰原和苔原。\n\n🏜️ 除了这些，还有干旱的沙漠气候和高原山地气候。',
                funFact: '撒哈拉沙漠是地球上最热的地方之一，最高温达 58°C，但晚上会降到 0°C 以下！「早穿棉袄午穿纱」在沙漠里是真的！',
                visual: '🌴🌲❄️'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '热带地区的气候特点是？',
                    options: ['全年寒冷', '四季分明', '全年高温多雨', '全年干燥'],
                    answer: 2,
                    explanation: '热带地区靠近赤道，全年高温多雨，生长着茂密的热带雨林。'
                },
                {
                    difficulty: 1,
                    question: '中国大部分地区属于哪个气候带？',
                    options: ['热带', '温带', '寒带', '寒温带'],
                    answer: 1,
                    explanation: '中国大部分位于北温带，四季分明。'
                },
                {
                    difficulty: 2,
                    question: '南北回归线（23.5°）是哪个气候带的分界线？',
                    options: ['热带和温带', '温带和寒带', '热带和寒带', '不是分界线'],
                    answer: 0,
                    explanation: '南北回归线（23.5°）是热带和温带的分界线，南北极圈（66.5°）是温带和寒带的分界线。'
                },
                {
                    difficulty: 2,
                    question: '以下哪种动物最不可能生活在热带雨林？',
                    options: ['金刚鹦鹉', '树懒', '北极熊', '猴子'],
                    answer: 2,
                    explanation: '北极熊生活在北极冰原（寒带），不在热带雨林。'
                },
                {
                    difficulty: 3,
                    question: '为什么赤道附近的热带雨林降水特别多？',
                    options: ['靠近大海', '高温使得水汽蒸发旺盛', '有很多河流', '风把雨吹来了'],
                    answer: 1,
                    explanation: '赤道附近太阳辐射强烈，温度高，蒸发旺盛，湿润空气上升后冷却形成降雨，所以几乎每天下午都会下雨。'
                }
            ]
        },
        {
            id: 'moon-phases',
            name: '月相与潮汐',
            icon: '🌙',
            color: '#C9B8E8',
            continent: null,
            prerequisites: ['earth-rotation'],
            content: {
                summary: '月球的形状其实没变，但我们看到的月亮「形状」在变化，这就是月相。月相变化是月球绕地球公转造成的。同时，月球的引力还会引起地球上的潮汐现象——海水周期性的涨落。',
                details: '🌑 新月：月亮在太阳和地球之间，看不到它。\n\n🌓 上弦月：能看到右半边月亮。\n\n🌕 满月：地球在太阳和月球之间，看到完整的圆月。\n\n🌗 下弦月：能看到左半边月亮。\n\n🌊 潮汐：月球引力使海水涨落，每天两次。新月和满月时潮汐最大（大潮）。',
                funFact: '你可能会以为月球的「暗面」永远黑暗，但其实它和正面一样会被太阳照到！只是因为月球被潮汐锁定，永远以同一面朝向地球，所以我们在地球上永远看不到背面。',
                visual: '🌑🌓🌕🌗'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '月相变化的原因是什么？',
                    options: ['月亮在变形', '月球绕地球公转', '地球的影子', '太阳在变化'],
                    answer: 1,
                    explanation: '月球绕地球公转，使得太阳照亮月球的角度不断变化，形成不同月相。'
                },
                {
                    difficulty: 1,
                    question: '潮汐现象主要由什么引起？',
                    options: ['风', '月球的引力', '海底火山', '地球自转'],
                    answer: 1,
                    explanation: '月球（和太阳）的引力引起海水周期性涨落，这就是潮汐。'
                },
                {
                    difficulty: 2,
                    question: '一个月中，哪几天潮汐涨落最大（大潮）？',
                    options: ['每月 1 号和 15 号左右', '每天都是大潮', '只有夏天才有大潮', '每月 7 号和 22 号左右'],
                    answer: 0,
                    explanation: '新月和满月时，太阳和月球的引力方向一致，形成大潮，潮差最大。'
                },
                {
                    difficulty: 2,
                    question: '我们在地球上为什么永远看不到月球的背面？',
                    options: ['月球不自转', '月球被潮汐锁定', '月球背面是黑暗的', '被地球挡住了'],
                    answer: 1,
                    explanation: '月球绕地球公转和自转的周期相同（约 27.3 天），这叫潮汐锁定，所以永远以同一面朝向地球。'
                },
                {
                    difficulty: 3,
                    question: '如果月球离地球更近一倍，潮汐会怎样变化？',
                    options: ['不变', '变小', '变大很多（约 8 倍）', '潮汐消失'],
                    answer: 2,
                    explanation: '潮汐力与距离的立方成反比。月球距离减半，潮汐力增大到 2³=8 倍！海啸般的潮汐会淹没沿海地区。'
                }
            ]
        },
        {
            id: 'solar-system',
            name: '太阳系与宇宙',
            icon: '🌌',
            color: '#6C5CE7',
            continent: null,
            prerequisites: [],
            content: {
                summary: '我们的地球住在太阳系里——一个以太阳为中心的天体大家庭。八大行星从内到外是：水星、金星、地球、火星、木星、土星、天王星、海王星。除此之外还有小行星带、彗星等。太阳系只是银河系中数千亿颗恒星之一！',
                details: '🪐 水星最小离太阳最近，金星最热，地球有生命。\n\n🪐 木星是最大的行星，质量是所有其他行星总和的两倍多。\n\n💫 土星有漂亮的光环，主要由冰和岩石碎片组成。\n\n🌌 光从太阳到地球需要约 8 分 20 秒，到海王星需要约 4 小时！',
                funFact: '在太阳系所有行星中，只有金星是「倒着转」的（自转方向与其他行星相反）。在金星上，太阳从西方升起！',
                visual: '🌞🪐🌌'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '太阳系有几颗行星？',
                    options: ['7 颗', '8 颗', '9 颗', '10 颗'],
                    answer: 1,
                    explanation: '太阳系有八大行星：水星、金星、地球、火星、木星、土星、天王星、海王星。（冥王星在 2006 年被重新分类为矮行星）'
                },
                {
                    difficulty: 1,
                    question: '太阳系中最大的行星是哪颗？',
                    options: ['土星', '木星', '海王星', '天王星'],
                    answer: 1,
                    explanation: '木星是太阳系最大的行星，质量是其他所有行星总和的 2.5 倍！'
                },
                {
                    difficulty: 2,
                    question: '光从太阳到地球大约需要多长时间？',
                    options: ['8 分钟', '8 秒', '1 小时', '1 天'],
                    answer: 0,
                    explanation: '光速每秒约 30 万公里，太阳到地球约 1.5 亿公里，所以约需 8 分 20 秒。'
                },
                {
                    difficulty: 2,
                    question: '哪颗行星的自转方向和其他行星相反？',
                    options: ['火星', '木星', '金星', '海王星'],
                    answer: 2,
                    explanation: '金星是太阳系中唯一逆向自转的行星，在金星上太阳从西方升起。'
                },
                {
                    difficulty: 3,
                    question: '小行星带位于哪两颗行星之间？',
                    options: ['水星和金星', '地球和火星', '火星和木星', '木星和土星'],
                    answer: 2,
                    explanation: '小行星带位于火星和木星之间，这里有数百万颗大小不一的小行星绕太阳运行。'
                },
                {
                    difficulty: 3,
                    question: '如果地球和太阳之间的距离增加一倍，地球表面温度会怎样变化？',
                    options: ['不变', '升高', '降低到约 1/4', '降低到约 1/2'],
                    answer: 2,
                    explanation: '太阳辐射强度与距离的平方成反比（平方反比定律）。距离加倍，接收到的太阳辐射减少到 1/4。地球会变成一个冰球！'
                }
            ]
        },
        {
            id: 'map-reading',
            name: '地图与导航',
            icon: '🗺️',
            color: '#F5A623',
            continent: null,
            prerequisites: [],
            content: {
                summary: '地图是探索世界的工具！地图上有几个重要元素：经线（南北方向）、纬线（东西方向）、比例尺（距离换算）、图例（符号说明）。GPS（全球定位系统）利用太空中的卫星，可以精确定位我们在地球上的位置。',
                details: '🌐 经线从北极到南极，0° 经线是「本初子午线」（格林尼治）。\n\n🌐 纬线与赤道平行，赤道是 0° 纬线。\n\n📍 GPS 需要至少 4 颗卫星才能精确定位你的位置。\n\n📏 地图比例尺 1:100000 表示地图上 1 厘米 = 实际 1 公里。',
                funFact: '最早的「地图」是古人画在石头或骨头上的！巴比伦人制作了世界上最早的正式地图（约 2500 年前），画在泥板上。',
                visual: '🗺️📍'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '地图上指示方向的符号通常叫什么？',
                    options: ['图标', '指北针', '比例尺', '图例'],
                    answer: 1,
                    explanation: '指北针（指南针）是地图上指示方向的符号，通常箭头指向北。'
                },
                {
                    difficulty: 1,
                    question: '赤道的纬度是多少？',
                    options: ['0°', '90°', '180°', '45°'],
                    answer: 0,
                    explanation: '赤道是 0° 纬线，将地球分为南北半球。'
                },
                {
                    difficulty: 2,
                    question: 'GPS 至少需要多少颗卫星才能定位？',
                    options: ['1 颗', '2 颗', '3 颗', '4 颗'],
                    answer: 3,
                    explanation: 'GPS 至少需要 4 颗卫星才能精确定位三维空间位置（经度、纬度、高度）。'
                },
                {
                    difficulty: 2,
                    question: '如果地图比例尺是 1:100000，地图上 5 厘米代表实际多少距离？',
                    options: ['500 米', '5 公里', '50 公里', '500 公里'],
                    answer: 1,
                    explanation: '比例尺 1:100000 表示 1 厘米 = 1 公里，所以 5 厘米 = 5 公里。'
                },
                {
                    difficulty: 3,
                    question: '麦卡托投影地图最明显的缺陷是什么？',
                    options: ['不准确', '越靠近两极，面积失真越大', '不能显示海洋', '颜色不对'],
                    answer: 1,
                    explanation: '麦卡托投影保持方向准确，但面积严重失真。格陵兰看起来和非洲一样大，实际上非洲面积是格陵兰的 14 倍！'
                }
            ]
        },
        {
            id: 'world-cultures',
            name: '世界节日与文化',
            icon: '🎉',
            color: '#FF6B9D',
            continent: null,
            prerequisites: [],
            content: {
                summary: '世界各地的人们在不同时间和季节庆祝各种节日！很多节日和天文现象或季节相关：春节在冬春之交，中秋节在秋天月圆时，圣诞节在冬至前后。通过了解不同文化的节日，我们可以看到人类如何用独特的方式记录时间、庆祝自然的变化。',
                details: '🇨🇳 春节：农历正月初一，冬春之交，全家团圆。\n\n🇧🇷 巴西狂欢节：每年 2-3 月，盛夏狂欢。\n\n🇯🇵 花见（赏樱）：3-4 月，春天看樱花。\n\n🇮🇳 排灯节：10-11 月，光明战胜黑暗的节日。\n\n🎄 圣诞节：12 月 25 日，冬至前后，西方最重要的节日。',
                funFact: '不同文化使用不同的历法！中国用农历（阴阳合历），伊斯兰世界用纯阴历，西方通用公历（阳历）。这就是为什么春节每年日期都不一样——它跟着月亮走！',
                visual: '🎊🌍'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '中国的春节在什么季节？',
                    options: ['春夏季之交', '冬春季之交', '夏秋季之交', '秋冬季之交'],
                    answer: 1,
                    explanation: '春节在冬末春初，标志着春天即将来临和农历新年的开始。'
                },
                {
                    difficulty: 1,
                    question: '中秋节是农历几月几日？',
                    options: ['七月初七', '八月十五', '九月初九', '正月十五'],
                    answer: 1,
                    explanation: '中秋节是农历八月十五，正值秋天月圆之时。'
                },
                {
                    difficulty: 2,
                    question: '为什么每年春节的公历日期都不一样？',
                    options: ['随便定的', '因为春节跟着农历（阴历）走', '因为天气变化', '不同省份不同'],
                    answer: 1,
                    explanation: '春节按农历计算，农历是阴阳合历，以月相变化（约 29.5 天）确定月份，同时用闰月调整与公历的差距，所以春节在 1 月 21 日到 2 月 20 日之间变动。'
                },
                {
                    difficulty: 2,
                    question: '巴西狂欢节在几月举行？这对应南半球什么季节？',
                    options: ['6-7 月，冬季', '2-3 月，夏季', '9-10 月，春季', '12-1 月，秋季'],
                    answer: 1,
                    explanation: '巴西在南半球，2-3 月是盛夏，所以狂欢节是在炎炎夏日举行！和北半球节日季节相反。'
                },
                {
                    difficulty: 3,
                    question: '伊斯兰历（回历）是纯阴历，它的新年每年会提前约多少天？',
                    options: ['3 天', '11 天', '20 天', '30 天'],
                    answer: 1,
                    explanation: '伊斯兰历每年约 354 天，比公历少约 11 天。所以伊斯兰节日每年都比前一年提前约 11 天，大约 33 年一个循环。这就是为什么斋月有时在夏天、有时在冬天。'
                }
            ]
        },
        {
            id: 'day-night-cycle',
            name: '昼夜与生活节律',
            icon: '🌓',
            color: '#5D6D7E',
            continent: null,
            prerequisites: ['earth-rotation'],
            content: {
                summary: '昼夜交替深深影响了地球上所有生物的作息节律。人类有「生物钟」，植物在白天光合作用、晚上休息，夜行动物在夜晚活动。有趣的是，不同季节的昼夜长度不同——夏天白天长、冬天白天短。',
                details: '😴 人体生物钟周期约 24 小时，控制着睡眠、体温和激素分泌。\n\n🦉 猫头鹰、蝙蝠是夜行动物，它们的「白天」从晚上开始。\n\n🌻 向日葵的花盘白天跟着太阳转，晚上慢慢回正。\n\n🧬 2017 年诺贝尔生理学奖颁给了发现生物钟分子机制的三位科学家！',
                funFact: '北极圈内有「极昼」和「极夜」现象！夏至前后太阳不落山，连续好几天都是白天；冬至前后则连续好几天都是黑夜。在那里生活需要非常强的适应能力！',
                visual: '☀️🌙'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '以下哪种动物属于夜行动物？',
                    options: ['公鸡', '猫头鹰', '绵羊', '海豚'],
                    answer: 1,
                    explanation: '猫头鹰是典型的夜行动物，白天休息，夜晚捕食。'
                },
                {
                    difficulty: 1,
                    question: '夏天和冬天相比，哪个季节白天更长？',
                    options: ['夏天', '冬天', '一样长', '看具体地点'],
                    answer: 0,
                    explanation: '北半球夏天时，太阳直射北半球，所以白天比冬天长。'
                },
                {
                    difficulty: 2,
                    question: '人体内部大约 24 小时的生理节律叫什么？',
                    options: ['生物钟', '时间表', '心跳节律', '呼吸周期'],
                    answer: 0,
                    explanation: '人体有内在的生物钟（昼夜节律），控制着我们的睡眠-清醒周期、体温变化等。'
                },
                {
                    difficulty: 2,
                    question: '北极圈内的「极昼」现象是怎么回事？',
                    options: ['太阳一直不落', '太阳一直不出来', '一天有 48 小时', '月亮代替了太阳'],
                    answer: 0,
                    explanation: '夏至前后，北极圈内太阳不会落到地平线以下，出现连续多天不天黑的现象。'
                },
                {
                    difficulty: 3,
                    question: '坐飞机跨越多个时区后会感到疲劳不适，这叫？为什么？',
                    options: ['时差反应', '晕机', '高原反应', '晕动症'],
                    answer: 0,
                    explanation: '跨越时区后，外部时间与体内生物钟不同步，就会出现时差反应（jet lag）。通常向东飞更难适应，因为人体生物钟天然略长于 24 小时，延后比提前更容易。'
                }
            ]
        },
        {
            id: 'natural-phenomena',
            name: '神奇自然现象',
            icon: '🌈',
            color: '#FF8A65',
            continent: null,
            prerequisites: ['seasons', 'earth-rotation'],
            content: {
                summary: '地球上有很多神奇的自然现象，很多都和时空有关。彩虹是阳光穿过雨滴折射形成的；极光是太阳风与地球磁场碰撞产生的光；日食是月球挡住了太阳光；海市蜃楼是光线在大气中弯曲造成的幻觉。',
                details: '🌈 彩虹：雨后阳光被水滴折射分光，形成七彩。\n\n🌌 极光：太阳带电粒子进入地球两极大气层发光。\n\n🌑 日食：月球运行到太阳和地球之间，挡住阳光。\n\n🌅 绿闪：日落最后一瞬间，太阳上缘闪现绿色光芒。',
                funFact: '极光不仅在地球有！木星、土星、天王星、海王星也都有极光。NASA 的朱诺号探测器拍到过木星上比地球大十倍以上的极光！',
                visual: '🌈🌌⚡'
            },
            questions: [
                {
                    difficulty: 1,
                    question: '彩虹通常出现在什么天气条件下？',
                    options: ['晴天', '雨后出太阳', '下雪天', '阴天'],
                    answer: 1,
                    explanation: '彩虹需要两个条件：下雨和阳光。阳光穿过雨滴折射分光，形成彩虹。'
                },
                {
                    difficulty: 1,
                    question: '极光通常出现在地球的什么区域？',
                    options: ['赤道附近', '南北极附近', '沙漠地区', '海洋上'],
                    answer: 1,
                    explanation: '极光出现在南北极附近的高纬度地区，因为地球磁场把太阳风粒子引向两极。'
                },
                {
                    difficulty: 2,
                    question: '日食发生时，月球在什么位置？',
                    options: ['地球的另一侧', '太阳和地球之间', '地球和火星之间', '远离地球'],
                    answer: 1,
                    explanation: '日食是月球运行到太阳和地球之间，三者大致在一条直线上，月球挡住了太阳光。'
                },
                {
                    difficulty: 2,
                    question: '彩虹的七种颜色顺序是？',
                    options: ['赤橙黄绿青蓝紫', '紫蓝青绿黄橙赤', '随机顺序', '只有三种颜色'],
                    answer: 0,
                    explanation: '彩虹颜色从外到内：红、橙、黄、绿、青、蓝、紫。用口诀「赤橙黄绿青蓝紫」记忆。'
                },
                {
                    difficulty: 3,
                    question: '为什么彩虹永远出现在太阳的对面方向？',
                    options: ['巧合', '因为光的反射折射需要特定角度（约 42°）', '因为风的方向', '因为地球是圆的'],
                    answer: 1,
                    explanation: '阳光进入水滴后，经过折射→反射→再折射，从水滴出来的光线与入射光方向偏转约 138°，所以彩虹总是出现在太阳的对面（180°-138°=42°）。'
                }
            ]
        }
    ],

    // 获取所有主题
    getAllTopics() {
        return this.topics;
    },

    // 根据 ID 获取主题
    getTopicById(id) {
        return this.topics.find(t => t.id === id);
    },

    // 获取主题的问题（按难度）
    getQuestionsForTopic(topicId, difficulty) {
        const topic = this.getTopicById(topicId);
        if (!topic) return [];
        return topic.questions.filter(q => q.difficulty === difficulty);
    },

    // 获取推荐的下一个学习主题
    getRecommendedNext(learnedTopics, adaptiveEngine) {
        const unlocked = this.topics.filter(t => {
            return t.prerequisites.every(p => learnedTopics.includes(p));
        });
        const notLearned = unlocked.filter(t => !learnedTopics.includes(t.id));
        if (notLearned.length === 0) return null;

        // 优先推荐掌握度最低的
        notLearned.sort((a, b) => {
            const masteryA = adaptiveEngine ? adaptiveEngine.getTopicMastery(a.id) : 0;
            const masteryB = adaptiveEngine ? adaptiveEngine.getTopicMastery(b.id) : 0;
            return masteryA - masteryB;
        });
        return notLearned[0];
    },

    // 获取主题进度统计
    getTopicStats(topicId, adaptiveEngine) {
        const topic = this.getTopicById(topicId);
        if (!topic) return { total: 0, learned: 0, mastery: 0 };
        const total = topic.questions.length;
        const answered = adaptiveEngine ? adaptiveEngine.getAnsweredCount(topicId) : 0;
        const mastery = adaptiveEngine ? adaptiveEngine.getTopicMastery(topicId) : 0;
        return { total, answered, mastery };
    }
};
