import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const SunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path fill="currentColor" d="M12 4a1 1 0 0 1 1-1h0a1 1 0 1 1-2 0h0a1 1 0 0 1 1 1Zm0 17a1 1 0 0 1 1 1h0a1 1 0 1 1-2 0h0a1 1 0 0 1 1-1Zm8-8a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1ZM3 12a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1Zm13.657-7.071a1 1 0 0 1 1.414 1.414h0a1 1 0 1 1-1.414-1.414ZM5.93 18.071a1 1 0 0 1 1.415 1.415h0A1 1 0 0 1 5.93 18.07Zm12.142 1.415a1 1 0 0 1-1.414-1.415h0a1 1 0 1 1 1.414 1.415ZM7.343 4.93A1 1 0 0 1 5.93 3.515h0A1 1 0 1 1 7.343 4.93ZM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7Z"/>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`toggle ${theme}`}
      onClick={toggleTheme}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span className="track" />
      <span className="thumb">{isDark ? <MoonIcon /> : <SunIcon />}</span>
    </button>
  );
}
