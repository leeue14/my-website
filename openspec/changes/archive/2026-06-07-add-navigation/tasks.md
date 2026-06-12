## 1. Navigation 组件

- [x] 1.1 创建 `src/components/Navigation.tsx`：固定顶部导航栏，左侧品牌名 "Leeue"，右侧三个链接（首页、项目、联系我），使用 `<nav>` 语义标签
- [x] 1.2 实现平滑滚动：点击链接调用 `document.querySelector(anchor).scrollIntoView({ behavior: "smooth" })`，锚点不存在时不报错
- [x] 1.3 添加 backdrop-blur 背景模糊：`backdrop-blur-md bg-white/70 dark:bg-black/70`，底部 `border-b` 分割线，明暗主题文字颜色适配
- [x] 1.4 移动端响应式：品牌名字号和链接字号缩小 (`text-sm`)，间距缩小 (`gap-4`)，确保 320px+ 不换行

## 2. 页面集成

- [x] 2.1 在 `src/components/HeroSection.tsx` 根元素（`<section>`）上添加 `id="home"` 属性
- [x] 2.2 在 `src/App.tsx` 中引入 Navigation 置于 HeroSection 之前，为 `#projects` 和新增的 `#contact` 锚点元素添加 `scroll-mt-16` 避免被导航栏遮挡
