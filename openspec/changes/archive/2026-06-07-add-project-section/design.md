## Context

当前网站仅 Hero Section + 空白 `#projects` 占位 div。需要将 `#projects` 替换为真实的项目展示区，使 CTA 按钮跳转后可见内容。技术栈 React 19 + TypeScript + Tailwind CSS v4，已有亮/暗主题和导航系统。

## Goals / Non-Goals

**Goals:**
- 项目展示 Section 位于 Hero 下方，卡片式网格布局
- 每张卡片包含：项目截图、名称、简介、GitHub 链接
- 至少 4 个占位项目
- 鼠标悬浮卡片微缩放 + 阴影增强
- 亮/暗主题适配
- 响应式：桌面 2 列 / 手机 1 列

**Non-Goals:**
- 无项目详情页
- 无搜索/过滤功能
- 无分页/排序
- 不使用真实项目数据（占位数据 + 占位图）

## Decisions

### 1. 组件拆分：ProjectSection + ProjectCard

```
src/components/
├── ProjectSection.tsx   # 网格容器，管理项目数据数组
└── ProjectCard.tsx      # 单张卡片，接收 project props
```

**替代方案考虑：**
- 单组件包含所有逻辑：超过 100 行，不利于维护和复用
- 拆分为更多子组件（CardImage, CardBody 等）：当前卡片结构简单，过度拆分

### 2. 项目数据：静态 TypeScript 数组

项目数据定义在 `ProjectSection.tsx` 中的常量数组，暂不抽离为独立数据文件（项目数量少，无需过早抽象）。

```ts
interface Project {
  name: string;
  description: string;
  githubUrl: string;
  image: string;
}
```

### 3. 项目截图：占位方案

使用渐变占位图替代真实截图。每张卡片使用不同色调的 CSS 渐变背景作为项目缩略图，避免依赖外部图片资源。

**替代方案考虑：**
- `<img>` + 真实截图：当前无截图素材，需用户后续提供
- 外部占位图服务：增加外部依赖和加载延迟
- CSS 渐变占位：零依赖、即时渲染、可展示设计意图

### 4. 网格布局：CSS Grid + Tailwind 响应式

```
grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto
```

- 手机 (<768px): 1 列
- 平板及以上 (≥768px): 2 列
- 最大宽度 `max-w-5xl` 限制内容宽度，与现有 Nav 内容区对齐

### 5. 卡片样式：极简黑白 + 微边框

```
bg-white dark:bg-black
border border-gray-200 dark:border-gray-800
rounded-xl overflow-hidden
```

卡片上半部：渐变占位图区域（16:9 比例，`aspect-video`）
卡片下半部：项目名称 + 简介 + GitHub 链接

### 6. Hover 微特效

```css
transition-all duration-300
hover:scale-[1.02]       /* 微放大 */
hover:shadow-lg           /* 阴影增强 */
```

仅缩放卡片不旋转不偏移，保持与极简黑白风格一致。过渡 300ms 确保不突兀。

### 7. 主题适配

- 卡片背景：`bg-white dark:bg-black`
- 边框：`border-gray-200 dark:border-gray-800`
- 文字：名 `text-black dark:text-white`，描述 `text-gray-600 dark:text-gray-400`
- GitHub 链接：`text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white` — 与导航链接风格一致

### 8. 锚点集成

ProjectSection 根元素使用 `id="projects"`，HeroSection CTA 按钮无需修改（已指向 `#projects`）。App.tsx 中替换空白 `<div id="projects">` 为 `<ProjectSection />`。

## Risks / Trade-offs

- **占位图无实际项目展示力** → 占位渐变保持视觉整洁，用户后续替换真实截图只需更新数据数组中的 image 字段
- **静态数据无法动态更新** → 若后续需要从 API/GitHub 获取项目，只需修改数据源，卡片组件无需变更
- **至少 4 个项目在移动端首屏以下** → 项目数量符合用户要求，导航栏"项目"链接可直接跳转

## Open Questions

_无_
