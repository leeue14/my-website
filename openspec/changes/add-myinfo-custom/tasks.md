## 1. Hero + About 文案替换

- [ ] 1.1 修改 `HeroSection.tsx`：职业标题改为"AI 工程师 & 服务端开发"，个人介绍改为"8 年服务端开发经验，近 2 年深耕 AI 应用，专注于 LLM Agent、向量检索与分布式架构"
- [ ] 1.2 修改 `AboutSection.tsx`：3 段简介基于简历重写（工作概述 / AI 能力 / 工程能力）

## 2. 公司 Logo 爬取

- [ ] 2.1 通过 Clearbit API 爬取 5 家公司 logo：薄荷健康（boohee.com）、盛大汽车（shengdaauto.com）、平安健康（pahealth.com）、科瓴医疗（kelink.com）、唯智信息（v-times.com）
- [ ] 2.2 将爬取的 logo 存入 `src/assets/logos/`，文件名为 `<company-slug>.png`

## 3. 创建 ExperienceSection 组件

- [ ] 3.1 新建 `src/components/ExperienceSection.tsx`，垂直时间线布局（左侧 logo + 竖线 + 右侧内容）
- [ ] 3.2 展示 5 家公司履历：公司 logo、公司名、职位、起止时间、2-3 条核心成果
- [ ] 3.3 logo 加载失败降级为公司名首字渐变色标识
- [ ] 3.4 适配亮/暗主题

## 4. 导航栏 + App 集成

- [ ] 4.1 `Navigation.tsx` 新增"履历"链接（`#experience`），顺序：首页 / 关于 / 履历 / 项目 / 联系我
- [ ] 4.2 `App.tsx` 引入 ExperienceSection，插入 AboutSection 和 ProjectSection 之间

## 5. 验证

- [ ] 5.1 浏览器验证：文案正确、履历时间线展示、logo 加载、亮暗切换、导航跳转、移动端适配
