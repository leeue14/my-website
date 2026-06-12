## 1. 创建 AboutSection 组件

- [ ] 1.1 新建 `src/components/AboutSection.tsx`，实现左右双栏布局（桌面端 `md:flex-row`，移动端 `flex-col`）
- [ ] 1.2 实现照片区域：圆角 + 发光边框（`rounded-2xl border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]`），图片使用 lazy loading，onError 降级为渐变色占位块
- [ ] 1.3 实现右侧 3 段简介文字，适配亮/暗主题（`dark:text-gray-300 text-gray-700`）
- [ ] 1.4 实现底部"当前状态"标签：脉冲指示器 + "使用 AI 做开发的程序员" 文字

## 2. 导航栏新增"关于"链接

- [ ] 2.1 在 `Navigation.tsx` 中新增"关于"链接（`#about` 锚点），调整链接顺序为：首页 / 关于 / 项目 / 联系我

## 3. 集成到 App

- [ ] 3.1 在 `App.tsx` 中引入 AboutSection，插入到 HeroSection 和 ProjectSection 之间

## 4. 验证

- [ ] 4.1 在浏览器中验证：桌面端双栏布局、移动端单栏布局、导航链接跳转、亮暗主题切换、照片降级显示
