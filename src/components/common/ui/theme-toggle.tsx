"use client";

import { CiLight, CiDark } from "react-icons/ci";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light"); // 기본값 설정

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (!savedTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
      return;
    }
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={() => handleThemeChange()}
      className="fixed bottom-4 left-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <CiDark className="h-5 w-5" />
      ) : (
        <CiLight className="h-5 w-5" />
      )}
    </button>
  );
}
