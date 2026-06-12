## Context

项目当前是 Vite + React 19 + TypeScript + Tailwind CSS v4 脚手架，App.tsx 仅包含一行占位文字。无路由、无组件、无主题系统。需要从零构建 Hero Section 和主题基础设施。

## Goals / Non-Goals

**Goals:**
- 全屏 Hero，居中展示个人品牌信息
- Canvas 动态粒子网络背景（科技感），叠加纯色底
- 亮/暗主题切换（极简黑白风格），localStorage 持久化，无闪烁

**Non-Goals:**
- 无入场/滚动/过渡等 CSS 动画
- 无导航栏
- 无 Projects Section
- 无后端

## Decisions

### 1. Canvas 粒子：RAF 动画循环

选取 Canvas 2D API + requestAnimationFrame 实现粒子网络动画，粒子缓慢漂移并在边界反弹，每帧更新位置和连线。

**替代方案考虑：**
- 静态单次绘制：性能更好，但缺乏动态感，用户要求增强视觉效果
- CSS/SVG 粒子：无法实现节点间动态连线效果
- Three.js/WebGL：过度设计，增加约 150KB+ 依赖

### 2. 主题方案：Tailwind `dark:` 变体 + `@variant dark` + `<head>` 阻塞脚本

```
@variant dark (&:where(.dark, .dark *));  ← Tailwind v4 必须显式声明 class 策略
<html class="dark">  ← <head>中阻塞脚本在DOM渲染前设置
  <body class="bg-white dark:bg-black">
    ...
  </body>
</html>
```

**替代方案考虑：**
- CSS 媒体查询 `prefers-color-scheme` 单独：无法手动切换，不可控
- CSS 自定义属性 + data 属性：与 Tailwind v4 `dark:` 变体生态割裂

**防闪烁机制：** `<head>` 中内联一段同步脚本，在浏览器解析 `<body>` 前：
1. 读取 `localStorage.getItem("theme")`
2. 若值为 `"dark"`，或值为空但 `matchMedia("(prefers-color-scheme: dark)").matches`，则 `document.documentElement.classList.add("dark")`
3. 这段脚本同步执行，阻塞渲染，确保无闪烁

### 3. 组件拆分

```
src/components/
├── HeroSection.tsx          # 布局容器 + 主题状态管理
├── ParticleBackground.tsx   # Canvas 动态粒子（useRef + useEffect + RAF 循环）
└── ThemeToggle.tsx          # 受控按钮组件，接受 isDark + onToggle props
```

**职责边界：**
- `HeroSection` 负责布局（relative 容器，z-index 分层）+ 主题状态（isDark）管理，向子组件传递
- `ParticleBackground` 负责 Canvas 生命周期（尺寸适配、RAF 动画循环、清理），接受 `theme` prop 切换粒子颜色
- `ThemeToggle` 为受控组件，接收 `isDark` 和 `onToggle` props，不自行维护状态

**架构说明：** ThemeToggle 设计为受控组件（非自维护状态），因为 HeroSection 需向 ParticleBackground 传递当前 theme，状态必须提升到共同父组件。

### 4. 粒子颜色策略（极简黑白）

| 主题 | 粒子主体色 | 连线色 | 背景 |
|------|-----------|--------|------|
| 亮色 | `rgba(0, 0, 0, 0.18)` 黑 | `rgba(0, 0, 0, 0.06)` | white |
| 暗色 | `rgba(255, 255, 255, 0.22)` 白 | `rgba(255, 255, 255, 0.07)` | black |

### 5. 移动端适配

- 使用 `min-h-dvh`（dynamic viewport height）替代 `min-h-screen`（100vh），避免移动浏览器地址栏导致的布局跳动
- 粒子数量根据 `window.innerWidth` 动态计算：桌面约 150 个节点，平板约 100 个，手机约 60 个
- 节点半径 2.5px，连线距离阈值 = `min(width, height) * 0.18`
- 粒子移动速度：各方向 0~0.3 px/帧（随机），边界反弹

## Risks / Trade-offs

- **Canvas 在某些环境下不可用**（如 Node 测试环境、极老浏览器）→ 纯色背景独立于 Canvas，作为可靠降级方案
- **RAF 动画循环持续消耗资源** → 组件卸载时 cancelAnimationFrame 清理；粒子数量已针对移动端减少
- **localStorage 在隐私模式下可能不可用** → 用 try/catch 包裹，失败时回退到系统偏好检测
- **粒子颜色在亮/暗切换时需重建** → ParticleBackground 接收 `theme` prop，切换时 useEffect 清理旧 RAF 循环并重新初始化

## Open Questions

_无_
