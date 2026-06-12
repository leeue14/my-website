## ADDED Requirements

### Requirement: About Section 渲染
系统 SHALL 在 Hero Section 和 Project Section 之间渲染一个"关于我"区域（`id="about"`），包含左侧照片和右侧 3 段个人简介文字。

#### Scenario: 桌面端访问关于我区域
- **WHEN** 用户在桌面浏览器（宽度 ≥ 768px）访问网站并滚动到 About Section
- **THEN** 系统以左右两栏布局渲染，左侧为个人照片，右侧为 3 段个人简介文字，两栏垂直居中对齐

#### Scenario: 移动端访问关于我区域
- **WHEN** 用户在移动设备（宽度 < 768px）访问网站并滚动到 About Section
- **THEN** 系统以纵向堆叠布局渲染，照片在上方居中显示，简介文字在下方

### Requirement: 个人照片展示
系统 SHALL 在 About Section 左侧展示一张个人照片，具有圆角和粒子风格的发光边框。

#### Scenario: 照片正常加载
- **WHEN** 用户访问 About Section 且照片资源存在
- **THEN** 照片以圆角（rounded-2xl）渲染，带有半透明青色边框和发光阴影效果，使用 lazy loading

#### Scenario: 照片加载失败或不存在
- **WHEN** 用户访问 About Section 但照片资源加载失败
- **THEN** 系统显示渐变色占位块，展示用户首字母作为降级方案

### Requirement: 个人简介文字
系统 SHALL 在 About Section 右侧展示 3 段个人简介文字，基于真实履历精炼撰写，每段控制 2-3 句话。

#### Scenario: 简介文字完整展示
- **WHEN** 用户查看 About Section
- **THEN** 系统在右侧展示 3 段简介段落：第 1 段概述工作经验与方向，第 2 段描述 AI 技术能力，第 3 段描述工程架构能力，每段之间有 1.5 倍行距，文字颜色适配当前主题

### Requirement: 当前状态标签
系统 SHALL 在 About Section 底部展示一个包含"当前状态"信息的标签。

#### Scenario: 状态标签渲染
- **WHEN** 用户查看 About Section 底部
- **THEN** 系统渲染一个带指示器的状态标签，文字内容为"使用 AI 做开发的程序员"，前方有脉冲动画指示器

### Requirement: About Section 主题适配
系统 SHALL 使 About Section 的所有文字颜色、背景、边框颜色适配亮/暗主题模式。

#### Scenario: 亮色模式
- **WHEN** 当前为亮色模式
- **THEN** 标题和正文为深色文字，发光边框为深蓝/紫色调

#### Scenario: 暗色模式
- **WHEN** 当前为暗色模式
- **THEN** 标题和正文为浅色文字，发光边框为浅蓝/青色调
