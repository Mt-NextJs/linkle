"use client";

import { CiLight, CiDark } from "react-icons/ci";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

import { useTheme } from "@components/providers/theme-provider";

export function ThemeToggle() {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const [theme, setTheme] = useState<Theme | null>(savedTheme);

  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      return;
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // useEffect(() => {
  //   if (!savedTheme) return;
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handleChange = (e: MediaQueryListEvent) => {
  //     const newTheme = e.matches ? "dark" : "light";
  //     // 사용자가 수동으로 설정한 테마가 없을 때만 시스템 테마 따르기
  //     if (!savedTheme) {
  //       document.documentElement.setAttribute("data-theme", newTheme);
  //       setTheme(newTheme);
  //     }
  //   };
  //
  //   mediaQuery.addEventListener("change", handleChange);
  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, []);

  const handleThemeChange = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    const isDark = theme === "dark";
    setTheme(isDark ? "light" : "dark");
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
