## 1. 添加 SEO Meta 标签

- [ ] 1.1 在 `index.html` 的 `<head>` 中添加 `<meta name="description">` 标签，描述个人品牌站（中文内容）
- [ ] 1.2 添加 Open Graph 标签：`og:title`、`og:description`、`og:image`、`og:url`、`og:type`
- [ ] 1.3 添加 Twitter Card 标签：`twitter:card`（summary_large_image）、`twitter:title`、`twitter:description`、`twitter:image`

## 2. 创建 robots.txt

- [ ] 2.1 新建 `public/robots.txt`，配置 `User-agent: *` + `Allow: /`

## 3. 语义化 HTML 审查与修复

- [ ] 3.1 审查现有组件标签：确认 Navigation 使用 `<nav>`，HeroSection 使用 `<section>`，ProjectSection 使用 `<section>`
- [ ] 3.2 在 `App.tsx` 中将外层 `<>` Fragment 替换为 `<main>` 标签，包裹所有 Section 组件

## 4. 验证

- [ ] 4.1 浏览器中打开页面 → 查看源代码确认 meta 标签存在 → 访问 `/robots.txt` 确认文件可访问 → DevTools 检查 DOM 确认 `<main>` 标签存在
