## Why

当前网站的 Hero 标题、个人介绍和关于我内容为占位文字，未反映真实履历背景。需要基于简历替换为真实信息，同时新增工作履历时间线，让访客快速了解专业背景。

## What Changes

- Hero Section 职业标题从"全栈工程师"改为"AI 工程师 & 服务端开发"
- Hero Section 个人介绍改为基于简历的一句话定位
- About Section 3 段简介基于简历重写，精炼表达
- 新增 Experience Section（`#experience`），时间线形式展示 5 家公司履历，每家带公司 logo
- 通过 WebFetch 爬取各公司官网 logo 图片，存入 `src/assets/logos/`
- 导航栏新增"履历"链接（`#experience`）

## Capabilities

### New Capabilities

- `experience-section`: 工作履历时间线区域，展示公司名称、职位、时间、核心成果，每家带公司 logo，支持亮暗主题

### Modified Capabilities

- `hero-section`: 职业标题和个人介绍替换为基于简历的真实内容
- `about-section`: 3 段简介文字替换为基于简历的精炼内容
- `navigation`: 新增"履历"导航链接

## Impact

- `src/components/HeroSection.tsx`: 修改职业标题和个人介绍文案
- `src/components/AboutSection.tsx`: 替换简介段落文字
- `src/components/ExperienceSection.tsx`: 新建组件
- `src/components/Navigation.tsx`: 新增"履历"链接
- `src/assets/logos/`: 新增目录，存放公司 logo 图片
- `src/App.tsx`: 引入 ExperienceSection
- GitHub 项目卡片不变（out-of-scope）
