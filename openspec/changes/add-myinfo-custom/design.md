## Context

网站当前为占位文案，需基于简历替换为真实信息。简历显示：李月，8 年 Java 开发经验，近 2 年深耕 AI 应用（LangChain/LangGraph/Milvus/RAG），5 家公司履历。

技术约束：React 19 + TypeScript + Tailwind CSS v4，亮/暗双主题，所有图片 lazy loading。

## Goals / Non-Goals

**Goals:**
- Hero 职业标题改为 "AI 工程师 & 服务端开发"
- Hero 个人介绍改为基于简历的一句话定位
- About 3 段简介基于简历精炼重写
- 新增 Experience Section（`#experience`），时间线布局展示 5 家公司
- 公司 logo 从网络爬取，存入 `src/assets/logos/`
- 导航栏新增"履历"链接

**Non-Goals:**
- 不修改 GitHub 项目卡片内容
- 不改动粒子背景、主题切换等系统行为
- 不修改教育经历、技能详情（仅展示履历概要）

## Decisions

### Hero 标题："AI 工程师 & 服务端开发"

- **为什么**：简历核心能力是 AI + 后端。用 `&` 连接比 `/` 更友好，"服务端开发"比"Java 开发"更中性且涵盖 Go/Python 的跨语言背景
- **备选方案**：AI 应用开发工程师 → 范围偏窄，未体现后端工程深度

### 履历布局：垂直时间线，左侧 logo + 竖线 + 右侧内容

- **为什么**：时间线是经典履历展示模式，logo 直观识别公司，竖线串联职业路径
- **实现**：Tailwind `border-l-2 border-cyan-500/50` + `relative` 定位圆点标记当前公司
- **备选方案**：卡片网格 → 时间感弱，不如时间线有职业成长的叙事性

### 公司 logo：从 clearbit 或公司官网 favicon 爬取

- **URL 模式**：`https://logo.clearbit.com/<domain>` 直接获取公司 logo（如 `logo.clearbit.com/boohee.com`）
- **降级方案**：Clearbit 不可用时，使用公司名首字作为渐变色文字标识
- **资源存储**：`src/assets/logos/<company-slug>.png`，lazy loading

### About 文案：从简历提炼 3 段

- 第 1 段：工作经验概述（年限 + 核心方向）
- 第 2 段：AI 能力（LLM 应用框架 + 向量检索 + RAG）
- 第 3 段：工程能力（分布式架构 + 性能优化 + 跨语言）

## Risks / Trade-offs

- [Risk] Clearbit logo 服务不可用或域名不匹配 → 降级为文字标识
- [Risk] 导航链接增至 5 个（首页/关于/履历/项目/联系我），移动端拥挤 → `text-xs sm:text-sm` 压缩字号
