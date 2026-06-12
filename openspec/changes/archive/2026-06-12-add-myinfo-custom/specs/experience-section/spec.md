## ADDED Requirements

### Requirement: 履历时间线渲染
系统 SHALL 在 About Section 和 Project Section 之间渲染一个履历区域（`id="experience"`），以垂直时间线布局展示 5 家公司的工作经历。

#### Scenario: 桌面端查看履历
- **WHEN** 用户在桌面浏览器（宽度 ≥ 768px）访问履历区域
- **THEN** 系统以左侧 logo + 竖线 + 右侧内容的布局渲染，时间线从最早到最新纵向排列，当前公司用高亮圆点标记

#### Scenario: 移动端查看履历
- **WHEN** 用户在移动设备（宽度 < 768px）访问履历区域
- **THEN** 系统以相同垂直布局渲染，logo 尺寸缩小，内容字号适配移动端

#### Scenario: 公司 logo 加载失败
- **WHEN** 某公司 logo 图片加载失败或 Clearbit 服务不可用
- **THEN** 系统显示公司名首字渐变色圆形标识作为降级方案

### Requirement: 履历内容展示
系统 SHALL 在每条履历中展示公司 logo、公司名称、职位、工作时长和核心成果摘要。

#### Scenario: 查看单条履历
- **WHEN** 用户查看任意一条履历条目
- **THEN** 系统显示公司 logo（或降级标识）、公司名称、担任职位、起止时间，以及 2-3 条核心成果摘要

### Requirement: 履历主题适配
系统 SHALL 使履历区域的所有文字和边框颜色适配亮/暗主题模式。

#### Scenario: 亮色模式
- **WHEN** 当前为亮色模式
- **THEN** 时间线竖线为深蓝/青色系，内容背景为白色，文字为深色

#### Scenario: 暗色模式
- **WHEN** 当前为暗色模式
- **THEN** 时间线竖线为浅蓝/青色系，内容背景为深色，文字为浅色
