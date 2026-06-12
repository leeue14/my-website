import { useCallback } from "react";
import ParticleBackground from "./ParticleBackground";

interface Props {
  theme: "light" | "dark";
}

export default function HeroSection({ theme }: Props) {
  const scrollToProjects = useCallback(() => {
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden bg-white dark:bg-black">
      <ParticleBackground theme={theme} />

      {/* Content */}
      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl lg:text-7xl">
          李月Leeue
        </h1>
        <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300 sm:text-2xl">
          AI 工程师 & 服务端开发
        </p>
          <p className="mt-3 max-w-lg text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            8 年服务端开发经验，近 2 年深耕 AI 应用，专注于 LLM Agent、向量检索与分布式架构
          </p>
        <button
          onClick={scrollToProjects}
          className="mt-8 rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
        >
          查看我的项目
        </button>
      </div>
    </section>
  );
}
