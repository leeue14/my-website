## ADDED Requirements

### Requirement: Hero 全屏展示
系统 SHALL 在页面首屏渲染一个全屏高度的 Hero Section，垂直水平居中展示用户姓名、职业、一句话个人介绍和 CTA 按钮。

#### Scenario: 用户首次访问
- **WHEN** 用户打开网站首页
- **THEN** 系统渲染一个占满视口高度的 Hero Section，姓名、职业、介绍文字居中显示，CTA 按钮可见

#### Scenario: 移动端视口高度适配
- **WHEN** 用户在移动设备上访问网站
- **THEN** Hero Section 使用动态视口高度（dvh），适配浏览器地址栏的显示/隐藏，内容始终完整可见

### Requirement: CTA 按钮跳转项目区域
系统 SHALL 提供一个 CTA 按钮，点击后平滑滚动到页面下方 Projects 区域（锚点 `#projects`）。

#### Scenario: 点击 CTA 按钮
- **WHEN** 用户点击 CTA 按钮
- **THEN** 页面平滑滚动到 `#projects` 锚点位置

#### Scenario: Projects 区域不存在
- **WHEN** 用户点击 CTA 按钮但页面上不存在 `#projects` 元素
- **THEN** 系统不执行滚动，也不抛出错误

### Requirement: Canvas 粒子背景
系统 SHALL 在 Hero 背景区域使用 Canvas 渲染静态粒子网络（节点 + 连线），叠加在 CSS 渐变背景之上。

#### Scenario: 桌面端渲染
- **WHEN** 页面在桌面浏览器（宽度 ≥ 1024px）加载完成
- **THEN** Canvas 渲染约 80 个粒子节点，距离小于阈值的节点间绘制连线，形成网络视觉

#### Scenario: 移动端渲染
- **WHEN** 页面在移动设备（宽度 < 768px）加载完成
- **THEN** Canvas 粒子数量减少至约 30 个，保证低性能设备不卡顿

#### Scenario: Canvas 不可用时降级
- **WHEN** 浏览器不支持 Canvas API
- **THEN** 系统仅显示 CSS 渐变背景，Hero 内容正常展示，不影响用户浏览

### Requirement: 粒子主题颜色适配
系统 SHALL 根据当前亮/暗主题模式调整粒子颜色，确保粒子在各自背景下可见。

#### Scenario: 亮色模式下的粒子
- **WHEN** 当前为亮色模式
- **THEN** 粒子使用较低透明度的深蓝/紫色系颜色

#### Scenario: 暗色模式下的粒子
- **WHEN** 当前为暗色模式
- **THEN** 粒子使用较高透明度的浅蓝/青色系颜色
