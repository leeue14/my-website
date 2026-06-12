## Why

当前网站仅有 Hero Section，访客无法看到实际项目展示。"查看我的项目" CTA 按钮指向一个空白锚点，点击后无内容可见。需要在 Hero 下方添加项目展示区，让个人品牌站具备实质内容，同时使 CTA 按钮的跳转目标生效。

## What Changes

- 新增项目展示 Section，卡片式布局展示个人项目（项目截图、名称、简介、GitHub 链接），至少 4 个项目
- 项目卡片支持亮/暗主题适配，鼠标悬浮时卡片产生微缩放 + 阴影增强效果
- HeroSection 的 CTA 按钮锚点目标已经是 `#projects`，保持不变；新的 ProjectSection 使用 `id="projects"` 替代原有空白占位 div
- 响应式适配：桌面 2 列，平板 2 列，手机 1 列

## Capabilities

### New Capabilities

- `project-section`: 项目展示区，卡片式布局，包含项目截图、名称、简介、GitHub 链接，≥4 个项目，hover 微特效，亮/暗主题适配，响应式网格

### Modified Capabilities

_无_（CTA 按钮已指向 `#projects`，新 ProjectSection 使用相同锚点，无需修改 HeroSection 代码或 spec）

## Impact

- `src/components/ProjectSection.tsx` — 新增项目展示区组件
- `src/components/ProjectCard.tsx` — 新增项目卡片组件
- `src/App.tsx` — 替换 `div#projects` 占位为 `<ProjectSection />`，移除占位 div
- `src/components/HeroSection.tsx` — 无需修改（CTA 目标 `#projects` 保持不变）
- `public/projects/` — 新增项目截图资源目录（至少 4 张图片）
- 不影响 Navigation、ParticleBackground、ThemeToggle、主题系统

## Out of Scope

- 不做项目详情页
- 不做项目搜索/过滤功能
- 不做项目分页
- 不做项目排序
