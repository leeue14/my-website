## 1. ProjectCard 卡片组件

- [x] 1.1 创建 `src/components/ProjectCard.tsx`：卡片组件，接收 `name`、`description`、`githubUrl`、`image` props，渲染截图占位区（16:9 渐变背景）、项目名称、简介、GitHub 链接（`target="_blank"`）
- [x] 1.2 实现 hover 微特效：`hover:scale-[1.02] hover:shadow-lg transition-all duration-300`，卡片亮/暗主题适配（`bg-white dark:bg-black` + 边框/文字颜色）
- [x] 1.3 定义 Project 类型接口（`name`、`description`、`githubUrl`、`image`），在 ProjectSection 中准备至少 4 条占位项目数据

## 2. ProjectSection 容器 + 页面集成

- [x] 2.1 创建 `src/components/ProjectSection.tsx`：Section 容器，`id="projects"` + `scroll-mt-16`，网格布局 `grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto`，包含 Section 标题（"我的项目"），渲染 ProjectCard 列表
- [x] 2.2 在 `src/App.tsx` 中将空白 `<div id="projects" className="scroll-mt-16" />` 替换为 `<ProjectSection />`
