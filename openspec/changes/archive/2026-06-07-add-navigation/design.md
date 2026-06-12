## Context

当前项目只有 HeroSection（带 `#projects` 锚点），无全局导航。需要添加固定顶部导航栏，让访客能快速定位三大区块（首页、项目、联系我）。技术栈为 React 19 + TypeScript + Tailwind CSS v4，已有亮/暗主题系统。

## Goals / Non-Goals

**Goals:**
- 固定顶部导航栏，品牌名左侧，三个链接右侧
- 点击链接平滑滚动到对应锚点
- backdrop-blur 背景模糊（玻璃拟态效果）
- 亮/暗主题适配
- 移动端响应式（字号和间距缩小，不换行）

**Non-Goals:**
- 无搜索功能
- 无下拉菜单
- 无用户登录
- 无滚动显隐动画（始终可见）
- 无移动端汉堡菜单
- 无 active 链接高亮

## Decisions

### 1. 单组件 Navigation.tsx

导航栏逻辑简单（固定定位 + 锚点滚动），不需要拆分子组件。保持与现有项目一致的函数式组件风格。

**替代方案考虑：**
- 拆分为 NavLink / NavBrand 子组件：当前仅 3 个链接，拆分增加不必要的文件数
- 使用第三方库（react-scroll 等）：增加依赖，功能过于简单无需引入

### 2. 平滑滚动：scrollIntoView + behavior: "smooth"

与 HeroSection 的 CTA 按钮使用相同的 `element.scrollIntoView({ behavior: "smooth" })` 方案，代码一致性好。

**替代方案考虑：**
- `window.scrollTo({ top, behavior })`: 需要手动计算 offset，且导航栏会遮挡目标顶部 — 需要额外处理 navbar 高度偏移
- 最终选择 `scrollIntoView`：天然考虑元素位置，且已有 `scroll-mt-16` 等 Tailwind 工具类可作为偏移方案

### 3. backdrop-blur 半透明背景

使用 Tailwind 的 `backdrop-blur-md` + 半透明背景色实现玻璃拟态效果。亮色模式 `bg-white/70`，暗色模式 `bg-black/70`。

```
fixed top-0 z-30 w-full
backdrop-blur-md bg-white/70 dark:bg-black/70
border-b border-gray-200/50 dark:border-gray-800/50
```

**替代方案考虑：**
- CSS `backdrop-filter: blur()` 手动写：Tailwind v4 原生支持 `backdrop-blur-*`，无需自定义
- 完全不透明背景：缺少层次感和现代感

### 4. 锚点偏移方案

导航栏固定高度约 56px（`h-14`），锚点元素使用 `scroll-mt-16`（64px）确保滚动后内容不被导航栏遮挡。

### 5. 导航栏 z-index: z-30

现有 z-index 层级：
- z-0: ParticleBackground Canvas、背景色
- z-10: HeroSection 内容
- z-20: ThemeToggle
- z-30: Navigation（新增，需在所有内容之上）

### 6. 移动端响应式

- 品牌名：桌面 `text-lg`，移动 `text-base`
- 链接间距：桌面 `gap-8`，移动 `gap-4`
- 容器内边距：桌面 `px-8`，移动 `px-4`
- 三个短链接在 320px+ 屏幕上不会换行

## Risks / Trade-offs

- **导航栏遮挡 Hero 顶部粒子** → 导航栏仅 56px 高，遮挡面积小；使用半透明 + 模糊使粒子隐约可见
- **#contact 锚点无内容** → 点击"联系我"后页面无可见内容变化；若用户后续不实现联系区域，可届时改为页脚锚点
- **scrollIntoView 浏览器兼容性** → 所有现代浏览器均支持 `behavior: "smooth"` 参数

## Open Questions

_无_
