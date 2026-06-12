## 1. 主题系统基础设施

- [x] 1.1 更新 `index.html`：`<head>` 中添加防闪烁脚本（同步读取 localStorage / 系统偏好，设置 `class="dark"`），修正 `lang` 为 `zh-CN`
- [x] 1.2 创建 `src/components/ThemeToggle.tsx`：亮/暗切换受控按钮组件，接受 `isDark` + `onToggle` props，操作 `document.documentElement.classList` 和 `localStorage`
- [x] 1.3 在 `src/index.css` 中添加 `@variant dark (&:where(.dark, .dark *));`，启用 Tailwind v4 class 策略暗色模式；移除渐变背景改为纯色（bg-white dark:bg-black）

## 2. Canvas 粒子背景

- [x] 2.1 创建 `src/components/ParticleBackground.tsx`：Canvas 组件，useRef 管理 canvas 元素，useEffect 中启动 RAF 动画循环绘制动态粒子网络（节点随机分布 + 速度漂移 + 边界反弹 + 距离阈值连线），cleanup 中清理 cancelAnimationFrame
- [x] 2.2 实现粒子数量自适应：根据 `window.innerWidth` 计算粒子数（≥1024px → 150个，768-1023px → 100个，<768px → 60个），ResizeObserver 监听容器尺寸变化重新初始化粒子
- [x] 2.3 实现主题颜色适配：接受 `theme` prop（"light" | "dark"），切换时重建动画循环，使用对应颜色方案（亮色: 黑粒子，暗色: 白粒子）

## 3. Hero Section 组装

- [x] 3.1 创建 `src/components/HeroSection.tsx`：布局容器 + 主题状态管理，relative 定位，分层放置 ParticleBackground（z-0）、内容区（z-10）。内容区居中：姓名 `<h1>`、职业 `<p>`、介绍 `<p>`、CTA 按钮。ThemeToggle 置于右上角（z-20）
- [x] 3.2 在 `src/App.tsx` 中引入 HeroSection，替换脚手架占位内容，添加 `#projects` 空锚点元素作为 CTA 滚动目标，删除无用的 `App.css`
