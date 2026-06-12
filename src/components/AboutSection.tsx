import { useState, useCallback } from "react";

const PARAGRAPHS = [
  "拥有 X 年全栈开发经验，专注于 React + TypeScript 技术栈。从 0 到 1 搭建过多个产品，擅长在快速迭代中保持代码质量与工程效率的平衡。",
  "热衷于探索 AI 驱动的开发新范式。相信 AI 不是替代开发者，而是让我们从重复劳动中解放，将精力投入到真正有创造力的工作中。",
  "工作之余喜欢研究开源项目、写技术博客，偶尔也在社区分享一些踩坑经验。始终对新技术保持好奇心，享受持续学习的过程。",
];

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);

  const handleImgError = useCallback(() => {
    setImgError(true);
  }, []);

  return (
    <section id="about" className="scroll-mt-16 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-10">
          关于我
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* 左侧照片 */}
          <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56">
            {!imgError ? (
              <img
                src="/avatar.jpg"
                alt="李月的个人照片"
                loading="lazy"
                onError={handleImgError}
                className="w-full h-full rounded-2xl object-cover border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] dark:border-cyan-400/30 dark:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              />
            ) : (
              <FallbackAvatar />
            )}
          </div>

          {/* 右侧简介 */}
          <div className="flex-1 space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {PARAGRAPHS.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>

        {/* 当前状态标签 */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 dark:border-cyan-400/20 bg-cyan-50 dark:bg-cyan-950/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              当前状态：使用 AI 做开发的程序员
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FallbackAvatar() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] dark:border-cyan-400/30 dark:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
      <span className="text-5xl font-bold text-white/80">李</span>
    </div>
  );
}
