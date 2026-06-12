## MODIFIED Requirements

### Requirement: Hero 全屏展示
系统 SHALL 在页面首屏渲染一个全屏高度的 Hero Section（带有 `id="home"` 属性作为导航锚点），垂直水平居中展示用户姓名（李月）、职业（AI 工程师 & 服务端开发）、一句话个人介绍和 CTA 按钮。

#### Scenario: 用户首次访问
- **WHEN** 用户打开网站首页
- **THEN** 系统渲染一个占满视口高度的 Hero Section，姓名"李月"、职业"AI 工程师 & 服务端开发"、介绍文字居中显示，CTA 按钮可见

#### Scenario: 移动端视口高度适配
- **WHEN** 用户在移动设备上访问网站
- **THEN** Hero Section 使用动态视口高度（dvh），适配浏览器地址栏的显示/隐藏，内容始终完整可见

#### Scenario: 导航栏"首页"链接跳转
- **WHEN** 用户点击导航栏中的"首页"链接
- **THEN** 页面平滑滚动到 Hero Section 顶部（`#home` 锚点）
