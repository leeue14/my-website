## Why

当前网站只有一个 Hero Section，访客到达页面后缺少全局导航引导。需要固定顶部导航栏让用户清楚知道网站有哪些区块，并能在区块间快速定位，同时 backdrop-blur 效果增强层次感。

## What Changes

- 新增固定顶部导航栏，左侧显示品牌名 "Leeue"，右侧包含"首页"、"项目"、"联系我"三个链接
- 点击导航链接平滑滚动到对应锚点（`#home`、`#projects`、`#contact`），添加 backdrop-blur 背景模糊效果
- HeroSection 添加 `id="home"` 锚点，App.tsx 添加 `#contact` 空白占位锚点
- 导航栏响应式适配：移动端缩小字号和间距，确保不换行

## Capabilities

### New Capabilities

- `navigation`: 固定顶部导航栏，包含品牌名和三个锚点导航链接，使用 backdrop-blur 背景模糊，亮/暗主题适配，响应式布局

### Modified Capabilities

- `hero-section`: HeroSection 根元素添加 `id="home"` 属性，作为导航"首页"的滚动目标

## Impact

- `src/components/Navigation.tsx` — 新增导航栏组件
- `src/components/HeroSection.tsx` — 根元素添加 `id="home"`
- `src/App.tsx` — 引入 Navigation，添加 `#contact` 锚点占位
- 不影响 ParticleBackground、ThemeToggle、现有主题系统

## Out of Scope

- 不做搜索功能
- 不做多级下拉菜单
- 不做用户登录和注册
- 不做导航栏滚动隐藏/显示动画
- 不做移动端汉堡菜单（当前仅三个链接，直接展示即可）
- 不做"联系我"区域的完整内容（仅占位锚点）
