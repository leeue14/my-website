import { useState, useCallback } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

function getInitialDark(): boolean {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
  } catch {
    // localStorage unavailable
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function App() {
  const [isDark, setIsDark] = useState(getInitialDark);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        // silently ignore
      }
      return next;
    });
  }, []);

  return (
    <main>
      <Navigation isDark={isDark} onToggleTheme={toggleTheme} />
      <HeroSection theme={isDark ? "dark" : "light"} />
      <AboutSection />
      <ProjectSection />
      <div id="contact" className="scroll-mt-16" />
    </main>
  );
}

export default App;
