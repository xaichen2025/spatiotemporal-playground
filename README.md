<p align="center">
  <img src="https://img.icons8.com/fluency/96/globe.png" alt="时空小探险" width="96">
</p>

<h1 align="center">🌍 时空小探险</h1>

<p align="center">
  <strong>AI 驱动的少儿时空智能学习乐园</strong>
  <br>
  让 8-14 岁的孩子在探索中理解世界 🌏✨
</p>

<p align="center">
  <a href="#-功能特色">功能</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-学习主题">学习主题</a> •
  <a href="#-AI-自适应引擎">AI 引擎</a> •
  <a href="#-项目结构">结构</a> •
  <a href="#-开源许可">许可</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/platform-web-brightgreen.svg" alt="Platform: Web">
  <img src="https://img.shields.io/badge/dependencies-zero-orange.svg" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/language-JavaScript-yellow.svg" alt="Language: JavaScript">
</p>

---

## 🎯 简介

**时空小探险** 是一款面向 8-14 岁少儿的 AI 时空智能学习游戏。它通过**交互式世界地图**、**动态时间轴**和**自适应 AI 引擎**，将抽象的时空概念（时区、季节、气候、迁徙等）转化为可视化的探索体验。

孩子可以拖动时间轴观察动物迁徙、点击大洲了解各地知识、闯关答题解锁成就——全程由 AI 向导「小智」陪伴引导，难度自动适应每个孩子的学习进度。

**完全免费 · 无需安装 · 无广告 · 纯前端**

---

## ✨ 功能特色

| 特色 | 说明 |
|------|------|
| 🗺️ **交互式世界地图** | 简化版 SVG 世界地图，6 大洲可点击，25+ 趣味标记 |
| 🕐 **动态时间轴** | 拖动滑块控制月份，地图上的动物、植物、节气实时变化 |
| 🤖 **AI 自适应学习** | 智能追踪掌握度，动态调整题目难度，推荐最佳学习路径 |
| 🧩 **知识闯关挑战** | 12 大主题，3 级难度，70+ 道趣味题目，每题附详细解析 |
| 🏆 **成就徽章系统** | 12 个成就等待解锁，激发收集欲和成就感 |
| 🌱 **可视化成长** | 掌握度进度条、连击奖励、等级升级，进步看得见 |
| 🎨 **卡通风格 UI** | 明亮色彩 + 圆角设计 + 动效反馈，儿童友好 |
| 📱 **跨平台响应式** | 手机 / 平板 / 电脑都能用 |

---

## 🚀 快速开始

### 方式一：直接打开（推荐）

```bash
git clone https://github.com/XAICHEN/spacetime-explorer.git
cd spacetime-explorer
# 双击 index.html 即可在浏览器中打开
```

### 方式二：本地服务器

```bash
git clone https://github.com/XAICHEN/spacetime-explorer.git
cd spacetime-explorer

# 使用 Python
python -m http.server 8080
# 浏览器访问 http://localhost:8080

# 或使用 Node.js
npx serve .
```

**就是这么简单！** 无需安装任何依赖，打开即玩。

---

## 📚 学习主题

时空小探险涵盖了 **12 大主题**，让孩子系统性地理解时空概念：

<div align="center">

| # | 主题 | 核心内容 | 可视化 |
|---|------|---------|--------|
| 1 | 🌍 地球自转与昼夜 | 自转方向、昼夜交替、傅科摆 | 地球光照动画 |
| 2 | 🌞 地球公转与四季 | 公转轨道、地轴 23.5° 倾斜 | 四季变化演示 |
| 3 | 🕐 世界时区 | UTC、日期变更线、时区计算 | 时区地图染色 |
| 4 | 🦒 动物大迁徙 | 角马、北极燕鸥、帝王蝶 | 迁徙路径动画 |
| 5 | 🌳 植物与季节 | 光周期、落叶休眠、开花 | 树木四季变化 |
| 6 | 🌡️ 世界气候带 | 热带/温带/寒带 | 气候区着色 |
| 7 | 🌙 月相与潮汐 | 月相变化、潮汐锁定 | 月相轮播 |
| 8 | 🌌 太阳系与宇宙 | 八大行星、光速、引力 | 太阳系展示 |
| 9 | 🗺️ 地图与导航 | 经纬度、GPS、投影 | 交互式地图 |
| 10 | 🎉 世界节日与文化 | 春节、狂欢节、历法 | 节日标记 |
| 11 | 🌓 昼夜与生活节律 | 生物钟、极昼极夜 | 时间轴联动 |
| 12 | 🌈 神奇自然现象 | 彩虹、极光、日食 | 现象图解 |

</div>

---

## 🧠 AI 自适应引擎

系统内置轻量级**自适应学习引擎**，所有数据存储在浏览器本地：

### 知识追踪
记录每个知识点的掌握度（0% → 100%），可视化进度条展示。

### 动态难度调整
```
连续答对 2 题 → 升难度（挑战更难题目）
答错 1 题     → 降难度 + 插入复习
掌握度 > 80%  → 标记为已掌握
```

### 遗忘曲线
根据间隔时间推荐复习，对抗遗忘——最近复习的知识靠后推荐。

### 路径推荐
- 检查前置依赖是否满足
- 优先推荐未学习且掌握度最低的话题
- 考虑遗忘曲线，自动安排复习

### 连击系统
```
3 连击 → 额外积分奖励 🔥
连击越高 → 每道题得分越多
答错 → 连击中断重置
```

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| **HTML5** | 页面结构（4 屏幕 + 弹窗） |
| **CSS3** | 卡通风格主题、响应式布局、动画 |
| **JavaScript (ES6+)** | 全部业务逻辑 |
| **SVG** | 简化世界地图渲染 |
| **Canvas** | 粒子效果（星空背景） |
| **localStorage** | 学习进度持久化存储 |

**零第三方依赖**，所有代码手写，轻量高效。

---

## 📁 项目结构

```
spacetime-explorer/
├── index.html                  # 主入口
├── README.md                   # 本文件
├── LICENSE                     # MIT 许可证
├── css/
│   └── style.css               # 卡通主题样式（1050+ 行）
├── js/
│   ├── app.js                  # 主控制器 / 路由
│   ├── data/
│   │   ├── world-map.js        # 6 大洲 SVG 路径 + 25 个标记
│   │   └── knowledge.js        # 12 主题知识库 + 70+ 道题目
│   ├── engine/
│   │   ├── map-renderer.js     # SVG 地图渲染引擎
│   │   ├── timeline.js         # 时间轴交互控件
│   │   └── animations.js       # 动画 / 粒子 / 特效
│   ├── ai/
│   │   ├── adaptive-engine.js  # 自适应学习引擎（核心）
│   │   └── guide.js            # AI 向导「小智」
│   └── games/
│       ├── challenges.js       # 闯关系统
│       └── achievements.js     # 成就系统
```

---

## 👨‍👩‍👧‍👦 适用场景

- 🏠 **家庭教育** — 孩子自主学习，家长陪伴探索
- 🏫 **课堂教学** — 地理/科学课的互动教具
- 💻 **编程学习** — 作为前端 / 教育游戏开源案例学习
- 🌍 **科普活动** — 科技馆、图书馆的互动体验

---

## 🤝 贡献指南

欢迎贡献！无论是新功能、bug 修复、新题目还是文档改进：

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交改动：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

### 想加新题目？
编辑 `js/data/knowledge.js`，按已有格式添加即可。

---

## 📄 开源许可

本项目基于 **MIT License** 开源。

```
MIT License

Copyright (c) 2026 中科欣辰 XAICHEN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

你可以自由地使用、修改、分发本项目，用于个人或商业用途。

---

<p align="center">
  <strong>时空小探险</strong> — 让每个孩子都能探索世界的奥秘 🌍
  <br>
  <sub>Built with ❤️ by 中科欣辰 XAICHEN</sub>
</p>
