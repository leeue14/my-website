## ADDED Requirements

### Requirement: 项目展示区渲染
系统 SHALL 在 Hero Section 下方渲染一个项目展示 Section（`id="projects"`），以卡片式网格布局展示至少 4 个项目。

#### Scenario: 桌面端访问项目展示区
- **WHEN** 用户在桌面浏览器（宽度 ≥ 768px）访问网站并滚动到项目展示区
- **THEN** 系统以 2 列网格布局渲染项目卡片，每张卡片包含项目截图区域、名称、简介、GitHub 链接

#### Scenario: 移动端访问项目展示区
- **WHEN** 用户在移动设备（宽度 < 768px）访问网站并滚动到项目展示区
- **THEN** 系统以 1 列布局渲染项目卡片，卡片内容完整可读

### Requirement: 项目卡片内容
系统 SHALL 在每张项目卡片中展示项目的截图（或占位图）、项目名称、项目简介和 GitHub 链接。

#### Scenario: 项目卡片包含完整信息
- **WHEN** 用户查看任意一张项目卡片
- **THEN** 卡片显示项目截图占位区域、项目名称、一句话项目简介和一个可点击的 GitHub 链接

#### Scenario: 点击 GitHub 链接
- **WHEN** 用户点击项目卡片中的 GitHub 链接
- **THEN** 系统在新标签页中打开对应的 GitHub 仓库页面

### Requirement: 鼠标悬浮微特效
系统 SHALL 在用户鼠标悬浮于项目卡片上时，展示微缩放和阴影增强的视觉反馈。

#### Scenario: 鼠标悬浮卡片
- **WHEN** 用户将鼠标光标移动到项目卡片上方
- **THEN** 卡片轻微放大（1.02 倍）并显示加深阴影，过渡动画持续 300ms

#### Scenario: 鼠标移出卡片
- **WHEN** 用户将鼠标光标从项目卡片上移出
- **THEN** 卡片恢复原始大小和阴影，过渡动画持续 300ms

#### Scenario: 触屏设备无 hover
- **WHEN** 用户在触屏设备上访问网站
- **THEN** 卡片保持默认样式，hover 特效不触发（无异常状态残留）

### Requirement: 主题适配
系统 SHALL 使项目卡片和文字颜色适配亮/暗主题模式。

#### Scenario: 亮色模式下的项目卡片
- **WHEN** 当前为亮色模式
- **THEN** 卡片背景为白色，边框为浅灰色，名称为黑色，描述为深灰色

#### Scenario: 暗色模式下的项目卡片
- **WHEN** 当前为暗色模式
- **THEN** 卡片背景为黑色，边框为深灰色，名称为白色，描述为浅灰色

### Requirement: 导航跳转到项目展示区
系统 SHALL 使导航栏"项目"链接和 Hero Section CTA 按钮均平滑滚动到项目展示区。

#### Scenario: 点击导航栏"项目"链接
- **WHEN** 用户点击导航栏中的"项目"链接
- **THEN** 页面平滑滚动到项目展示区顶部（`#projects` 锚点）

#### Scenario: 点击 Hero CTA 按钮
- **WHEN** 用户点击 Hero Section 中的"查看我的项目"按钮
- **THEN** 页面平滑滚动到项目展示区顶部（`#projects` 锚点）
