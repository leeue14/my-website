import { useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "首页", anchor: "#home" },
  { label: "关于", anchor: "#about" },
  { label: "项目", anchor: "#projects" },
  { label: "联系我", anchor: "#contact" },
];

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({ isDark, onToggleTheme }: Props) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
      e.preventDefault();
      const target = document.querySelector(anchor);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <nav className="fixed top-0 z-30 w-full h-14 backdrop-blur-md bg-white dark:bg-black nav-glass border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="mx-auto flex h-full items-center justify-between px-4 sm:px-8">
        <span className="text-base sm:text-lg font-semibold text-black dark:text-white">
          Leeue
        </span>
        <div className="flex items-center gap-4 sm:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.anchor}
              href={link.anchor}
              onClick={(e) => handleClick(e, link.anchor)}
              className="text-sm sm:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  );
}
