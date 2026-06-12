import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    name: "Vibe Chat Clone",
    description: "类 ChatGPT 对话系统，支持 DeepSeek 流式响应与 SQLite 本地持久化",
    githubUrl: "https://github.com",
    image: "bg-gradient-to-br from-blue-400 to-purple-500",
  },
  {
    name: "Personal Website",
    description: "个人品牌站，React 19 + Tailwind CSS v4 + 动态粒子背景",
    githubUrl: "https://github.com",
    image: "bg-gradient-to-br from-emerald-400 to-cyan-500",
  },
  {
    name: "Rust Token Killer",
    description: "Token 优化 CLI 代理工具，节省 60-90% 开发操作 Token 消耗",
    githubUrl: "https://github.com",
    image: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    name: "OpenSpec Workflow",
    description: "Spec 驱动开发工作流工具，结构化变更管理与三维验证",
    githubUrl: "https://github.com",
    image: "bg-gradient-to-br from-violet-400 to-pink-500",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-16 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-10">
          我的项目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
