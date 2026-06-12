## Why

个人品牌站目前仅有 Hero 欢迎区和项目展示区，缺少"关于我"区域让访客了解站主的背景和当前状态。添加该区域能增强个人品牌的信任感和亲和力。

## What Changes

- 在 Hero Section 和 Project Section 之间新增 About Section（`id="about"`）
- 左侧展示个人照片（带圆角和粒子风格边框），右侧展示 3 段个人简介文字
- 下方展示"当前状态"标签：使用 AI 做开发的程序员
- 导航栏新增"关于"链接，可平滑滚动到此区域
- About Section 适配亮/暗主题

## Capabilities

### New Capabilities

- `about-section`: 关于我展示区域，包含照片、个人简介和当前状态标签，支持亮暗主题适配

### Modified Capabilities

- `navigation`: 导航栏新增"关于"链接（`#about` 锚点），链接顺序调整为"首页 / 关于 / 项目 / 联系我"

## Impact

- `src/App.tsx`: 新增 AboutSection 组件引用，插入到 Hero 和 Project 之间；调整 Navigation 链接
- `src/components/Navigation.tsx`: 新增"关于"导航链接
- `src/components/AboutSection.tsx`: 新建组件文件
- `src/assets/`: 新增个人照片资源引用
- 不影响现有 Hero、Project、主题系统的行为
