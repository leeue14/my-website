## ADDED Requirements

### Requirement: 页面元数据标签
系统 SHALL 在 `<head>` 中包含 title、description 和 viewport 元数据，以及 Open Graph 和 Twitter Card 社交分享元标签。

#### Scenario: 搜索引擎爬虫抓取页面
- **WHEN** Google 或百度爬虫抓取网站首页
- **THEN** 爬虫读取到 `<title>` 为"李月 — 个人品牌站"，`<meta name="description">` 包含网站简短描述，页面可被正确索引

#### Scenario: 社交平台分享链接
- **WHEN** 用户在微信、Twitter 或 Facebook 上分享网站链接
- **THEN** 平台正确展示标题、描述和缩略图卡片（通过 og:title / og:description / og:image / twitter:card 标签）

#### Scenario: description 为中文
- **WHEN** 搜索引擎读取 description meta
- **THEN** description 文本为正确编码的中文字符，无乱码

### Requirement: robots.txt 配置
系统 SHALL 在网站根路径提供 robots.txt 文件，允许所有爬虫索引全部路径。

#### Scenario: 爬虫读取 robots.txt
- **WHEN** Googlebot 请求 `/robots.txt`
- **THEN** 返回包含 `User-agent: *` 和 `Allow: /` 规则的文本文件，状态码 200

#### Scenario: robots.txt 文件不存在
- **WHEN** 爬虫请求 `/robots.txt` 但文件未部署
- **THEN** 返回 404 状态码（爬虫将此视为允许索引全部路径的默认行为）

### Requirement: 语义化 HTML 结构
系统 SHALL 使用语义化 HTML 标签构建页面结构，包括 `<nav>` 导航、`<main>` 主内容和 `<section>` 区域划分。

#### Scenario: 页面整体结构审查
- **WHEN** 页面渲染完成并检查 DOM 结构
- **THEN** 导航使用 `<nav>` 标签，主内容区使用 `<main>` 标签包裹，Hero 和 Project 区域使用 `<section>` 标签，`<html>` 标签包含 `lang="zh-CN"`

#### Scenario: 无障碍工具读取页面
- **WHEN** 屏幕阅读器或无障碍工具解析页面
- **THEN** 能正确识别导航区、主内容和各 section 区域，用户可通过语义标签快速跳转
