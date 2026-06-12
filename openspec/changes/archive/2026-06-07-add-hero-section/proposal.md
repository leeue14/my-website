## Why

个人品牌站目前是一个空白脚手架，访客进入后无法获取任何个人信息或导航指引。Hero Section 是首页的核心入口，需要在首屏清晰传达"我是谁、我做什么"，同时通过科技粒子背景建立视觉识别，并提供 CTA 引导访客浏览项目。

## What Changes

- 新增全屏高度 Hero Section，居中展示姓名、职业、一句话介绍和 CTA 按钮
- 新增 Canvas 静态粒子网络背景（科技感视觉符号），叠加在 CSS 渐变底之上
- 新增亮/暗主题系统：ThemeToggle 组件 + localStorage 持久化 + `<head>` 内联防闪烁脚本
- 更新 `index.html`：添加防闪烁脚本、修正 `lang` 属性

## Capabilities

### New Capabilities

- `hero-section`: 全屏 Hero 区域，居中展示个人品牌核心信息（姓名、职业、介绍、CTA 按钮），CTA 按钮平滑滚动到项目区域
- `theme-system`: 亮/暗主题切换，基于 Tailwind `dark:` 变体，localStorage 持久化用户选择，页面加载时无闪烁

### Modified Capabilities

_无（当前项目无既有 spec）_

## Impact

- `src/App.tsx` — 替换脚手架内容为 HeroSection 组件
- `src/components/HeroSection.tsx` — 新增 Hero 容器组件
- `src/components/ParticleBackground.tsx` — 新增 Canvas 粒子背景组件
- `src/components/ThemeToggle.tsx` — 新增主题切换按钮组件
- `src/index.css` — 添加渐变背景样式和粒子相关 Tailwind 工具类
- `index.html` — 添加防闪烁脚本、修正语言属性

## Out of Scope

- 不做任何动画效果（粒子为静态绘制，无 RAF 动画循环；无入场/滚动/过渡动画）
- 不做导航栏
- 不做后端 API
- 不做 Projects Section（CTA 目标锚点仅占位）
