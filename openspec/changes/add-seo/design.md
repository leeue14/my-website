## Context

当前 index.html 仅有基础 `<title>` 标签，缺少 description、Open Graph 和 Twitter Card 元数据，搜索引擎和社交媒体无法正确展示网站摘要卡片。此外，App.tsx 使用 Fragment `<>` 包裹主体内容，缺少 `<main>` 语义化标签。robots.txt 文件不存在。

## Goals / Non-Goals

**Goals:**
- index.html 添加 SEO meta 标签（description、og:*、twitter:*）
- 新增 public/robots.txt，允许 Google 及主流爬虫索引
- 审查语义化 HTML：App.tsx 添加 `<main>` 标签包裹主体

**Non-Goals:**
- 不做 sitemap.xml（可后续添加）
- 不做 JSON-LD 结构化数据
- 不做 Google Analytics / Search Console 集成
- 不修改现有 section 组件（HeroSection、ProjectSection 已使用 `<section>` 语义标签）

## Decisions

### robots.txt：仅允许主流搜索引擎爬虫

- **策略**：`User-agent: *` + `Allow: /`，完全不限制。个人品牌站所有内容为公开页面，无敏感路径
- **备选方案**：限制特定 bot → 个人站无此需求

### OG/Twitter Card 图片：使用 SVG 占位或 emoji 替代

- **方案**：使用 favicon.svg 作为 og:image（内联 data URI 或使用公开路径）
- **备选方案**：生成 PNG → 增加构建复杂度和资源大小，无必要

### 语义化 HTML：仅添加 `<main>`，保留现有 `<section>` 和 `<nav>`

- **为什么**：HeroSection 和 ProjectSection 已正确使用 `<section>`，Navigation 已使用 `<nav>`。唯一缺失的是外层 `<main>` 语义容器
- **不改动各组件内部标签**，保持组件独立性和可复用性

## Risks / Trade-offs

- [Risk] og:image 使用 SVG favicon → 不是所有社交平台支持 SVG 格式 og:image → 可接受，个人站 SEO 优先级不高
- [Risk] robots.txt 内容可能被不同爬虫差异化理解 → 使用广泛兼容的 Allow 语法
