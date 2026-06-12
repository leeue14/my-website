## Context

当前个人品牌站为单页结构，包含 Navigation、HeroSection（带粒子背景）、ProjectSection 和空的 contact 占位锚点。About Section 需要插入到 Hero 和 Project 之间，保持与现有科技感/粒子风的设计一致性。

技术约束：
- React 19 + TypeScript + Tailwind CSS v4
- 支持亮/暗双主题
- 所有图片 lazy loading
- 导航栏已有 3 个链接（首页/项目/联系我），需新增"关于"

## Goals / Non-Goals

**Goals:**
- 新增 AboutSection 组件，左右双栏布局（照片 + 简介）
- 底部展示"当前状态"标签，风格与粒子科技主题一致
- Navigation 新增"关于"链接，顺序调整为：首页 / 关于 / 项目 / 联系我

**Non-Goals:**
- 不做联系我表单（out-of-scope）
- 不修改现有 Hero、Project、主题系统的行为
- 不引入新的外部依赖

## Decisions

### 布局：桌面端双栏（照片左 + 简介右），移动端纵向堆叠（照片上 + 简介下）

- **为什么**：照片和文字左右并排在桌面端视觉效果最佳；移动端屏幕窄，纵向堆叠保证可读性
- **备选方案**：始终左右并排 → 移动端文字区域过窄，阅读体验差

### 照片样式：圆角图片 + 半透明边框 + shadow glow

- **为什么**：与现有粒子科技风格保持一致，shadow glow 效果模拟霓虹边框
- **实现**：Tailwind `rounded-2xl border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]`

### 当前状态标签：内联 badge 样式，使用 emoji + 文字

- **为什么**：简洁直观，"使用 AI 做开发的程序员" 是当前状态的直接表达
- **实现**：带脉冲动画指示器的 chip/badge 组件

### 照片资源：使用占位图路径

- **为什么**：用户后续替换真实照片，初始使用带渐变背景的占位区域
- **实现**：`src/assets/avatar.jpg`，若文件不存在则显示带首字母的渐变占位块

## Risks / Trade-offs

- [Risk] 照片文件不存在 → 降级显示渐变色占位块 + 用户首字母
- [Risk] Navigation 链接数量从 3 变 4，移动端可能拥挤 → 使用 `text-sm` 和 `gap-3` 适配移动端
