## ADDED Requirements

### Requirement: 主题切换按钮
系统 SHALL 在 Hero Section 区域提供一个主题切换按钮，用户点击可在亮色和暗色模式之间切换。

#### Scenario: 从亮色切换到暗色
- **WHEN** 当前为亮色模式，用户点击主题切换按钮
- **THEN** 页面切换为暗色模式，`<html>` 元素获得 `class="dark"`，用户选择写入 localStorage

#### Scenario: 从暗色切换到亮色
- **WHEN** 当前为暗色模式，用户点击主题切换按钮
- **THEN** 页面切换为亮色模式，`<html>` 元素的 `class="dark"` 被移除，用户选择写入 localStorage

### Requirement: 主题持久化
系统 SHALL 将用户的主题选择持久化到 localStorage，下次访问时自动恢复。

#### Scenario: 用户之前选择了暗色模式
- **WHEN** 用户之前选择了暗色模式（localStorage 中 theme 值为 "dark"），再次访问网站
- **THEN** 页面在渲染前自动应用暗色模式，用户无闪烁感知

#### Scenario: 用户首次访问
- **WHEN** 用户首次访问网站，localStorage 中无主题记录
- **THEN** 系统检测系统偏好设置（prefers-color-scheme），自动匹配对应主题

#### Scenario: localStorage 不可用
- **WHEN** 浏览器处于隐私模式或 localStorage 不可用
- **THEN** 系统回退到系统偏好检测，主题切换仍可正常工作（仅本次会话有效）

### Requirement: 无闪烁加载
系统 SHALL 在 `<head>` 中内联防闪烁脚本，确保在 DOM 渲染前应用正确的主题 class。

#### Scenario: 暗色模式用户刷新页面
- **WHEN** 暗色模式用户刷新页面
- **THEN** 页面背景从一开始就是暗色，不会出现短暂亮色闪烁
