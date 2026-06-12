import { useState, useCallback } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  color: string;
  initial: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "上海薄荷健康科技股份有限公司",
    role: "Java 高级开发工程师",
    period: "2024.09 — 至今",
    logo: `${import.meta.env.BASE_URL}logos/boohee.png`,
    color: "bg-emerald-500",
    initial: "薄",
    highlights: [
      "基于 LangChain + LangGraph 开发 AI 医生对话系统，多节点 Agent 工作流，接入 Langfuse 全链路追踪",
      "从 0 到 1 搭建 GLP-1 用药管理 AI 平台，对接 AI 体重预测与饮食分析大模型",
      "Milvus 向量数据库 + RAG 实现医疗报告解析与临床试验患者匹配",
    ],
  },
  {
    company: "上海盛大汽车服务集团有限公司",
    role: "Java 高级开发工程师",
    period: "2023.08 — 2024.09",
    logo: "/logos/shengda.png",
    color: "bg-amber-500",
    initial: "盛",
    highlights: [
      "负责公司内部核心产品大前台的技术方案和设计实现",
      "负责公共券码发放平台的技术方案设计",
    ],
  },
  {
    company: "平安健康互联网股份有限公司",
    role: "Java 高级开发工程师",
    period: "2020.08 — 2023.07",
    logo: "/logos/pahealth.png",
    color: "bg-blue-500",
    initial: "平",
    highlights: [
      "医生端项目 owner，承接项目日均 10w+ 访问量，负责整体项目进度把控与按时交付",
      "设计多级缓存架构 + 异步化，实现在线预约挂号服务，压测达 2000QPS",
    ],
  },
  {
    company: "上海科瓴医疗科技有限公司",
    role: "Java 中级开发",
    period: "2019.03 — 2020.08",
    logo: "/logos/kelink.png",
    color: "bg-violet-500",
    initial: "科",
    highlights: [],
  },
  {
    company: "唯智信息技术（上海）股份有限公司",
    role: "Java 开发工程师",
    period: "2018.07 — 2019.03",
    logo: "/logos/vtimes.png",
    color: "bg-pink-500",
    initial: "唯",
    highlights: [],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-16 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-10">
          工作履历
        </h2>

        <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-400/30 pl-8 ml-4 space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              experience={exp}
              isLatest={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  experience,
  isLatest,
}: {
  experience: Experience;
  isLatest: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  const handleImgError = useCallback(() => {
    setImgError(true);
  }, []);

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
          isLatest
            ? "bg-cyan-500 border-cyan-500 dark:bg-cyan-400 dark:border-cyan-400 ring-4 ring-cyan-500/20 dark:ring-cyan-400/20"
            : "bg-white dark:bg-gray-950 border-cyan-500/50 dark:border-cyan-400/50"
        }`}
      />

      <div className="flex gap-4">
        {/* Logo */}
        {!imgError ? (
          <img
            src={experience.logo}
            alt={experience.company}
            loading="lazy"
            onError={handleImgError}
            className="flex-shrink-0 w-10 h-10 rounded-lg object-contain bg-gray-100 dark:bg-gray-800"
          />
        ) : (
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg ${experience.color} flex items-center justify-center`}
          >
            <span className="text-sm font-bold text-white">
              {experience.initial}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
            <h3 className="text-base font-semibold text-black dark:text-white">
              {experience.company}
            </h3>
            <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {experience.period}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {experience.role}
          </p>
          {experience.highlights.length > 0 && (
            <ul className="mt-2 space-y-1">
              {experience.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
