# 李月 — 个人品牌站

基于 React 19 + Vite + TypeScript + Tailwind CSS v4 构建的个人品牌网站，支持亮/暗双主题切换，带有动态粒子背景效果。

## 功能特性

- **Hero 全屏区** — 带 Canvas 粒子网络背景，响应式适配桌面与移动端
- **关于我** — 双栏布局展示个人介绍与当前状态，照片降级占位
- **项目展示** — 卡片网格展示个人作品，hover 微交互
- **亮/暗主题** — 一键切换，自动跟随系统偏好，无闪烁加载
- **SEO 优化** — Open Graph / Twitter Card 元标签，robots.txt 爬虫索引
- **GitHub Pages** — 自动化部署，推送即上线

## 技术栈

| 类别 | 技术 |
|-----|------|
| 框架 | React 19 |
| 语言 | TypeScript |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS v4 |
| 部署 | GitHub Pages |
| 粒子 | Canvas API |

## 快速开始

### 环境要求

- Node.js ≥ 18
- npm ≥ 9

### 安装

```bash
git clone git@github.com:leeue14/my-website.git
cd my-website
npm install
```

### 开发

```bash
npm run dev
```

浏览器打开 http://localhost:5173

### 构建

```bash
npm run build
```

产物输出到 `dist/` 目录。

### 部署

```bash
npm run deploy
```

构建并发布到 GitHub Pages。线上地址：https://leeue14.github.io/my-website/

## 项目结构

```
my-website/
├── public/
│   ├── favicon.svg          # 网站图标
│   └── robots.txt           # 爬虫规则
├── src/
│   ├── assets/              # 静态资源
│   ├── components/
│   │   ├── AboutSection.tsx       # 关于我区域
│   │   ├── HeroSection.tsx        # Hero 全屏区
│   │   ├── Navigation.tsx         # 导航栏
│   │   ├── ParticleBackground.tsx # Canvas 粒子背景
│   │   ├── ProjectCard.tsx        # 项目卡片
│   │   ├── ProjectSection.tsx     # 项目展示区
│   │   └── ThemeToggle.tsx        # 主题切换按钮
│   ├── App.tsx              # 根组件
│   ├── main.tsx             # 入口
│   └── index.css            # 全局样式
├── index.html               # HTML 模板
├── vite.config.ts           # Vite 配置
├── tailwindcss               # Vite 插件自动引入
└── package.json
```

## 可用脚本

| 命令 | 说明 |
|-----|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | TypeScript 类型检查 + 生产构建 |
| `npm run preview` | 本地预览生产构建 |
| `npm run deploy` | 构建并发布到 GitHub Pages |

## License

MIT
