interface Props {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="text-sm sm:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
      aria-label={isDark ? "切换到亮色模式" : "切换到暗色模式"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
