## Why

当前网站缺少基础的 SEO 元标签（description、Open Graph、Twitter Card），搜索引擎和社交平台无法正确抓取和展示网站信息。另外缺少 robots.txt，Google 爬虫缺乏索引指引。需要建立 SEO 基础以提升网站可发现性。

## What Changes

- `index.html` 新增 `<meta name="description">` 和 Open Graph / Twitter Card 元标签
- 新增 `public/robots.txt`，允许所有爬虫索引
- 审查并修复现有组件的语义化 HTML（确保使用 `<header>`、`<main>`、`<section>`、`<footer>` 等标签）
- 为 `<html>` 添加 `lang` 属性（已存在 `zh-CN`，验证格式正确）

## Capabilities

### New Capabilities

- `seo`: SEO 基础优化，包括 meta 标签、社交分享元数据、robots.txt 配置、语义化 HTML 结构

### Modified Capabilities

<!-- 无现有 spec 需要修改 -->

## Impact

- `index.html`: 新增 description、og:title、og:description、og:image、og:url、og:type、twitter:card 等 meta 标签
- `public/robots.txt`: 新建文件，配置允许 Google 爬虫索引
- `src/App.tsx`: 可能需要用 `<main>` 包裹主体组件
- 各 Section 组件: 审查是否需要将 `<div>` 替换为 `<section>`
- 不影响现有功能（主题、导航、内容展示）
