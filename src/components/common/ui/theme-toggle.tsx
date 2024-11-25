"use client";

import { CiLight, CiDark } from "react-icons/ci";
import { useEffect, useState } from "react";

import { Theme } from "@/types/theme";

interface Props {
  cookieTheme: Theme | undefined;
}
export function ThemeToggle({ cookieTheme }: Props) {
  const [theme, setTheme] = useState<Theme | undefined>(cookieTheme); // 기본값 설정

  useEffect(() => {
    if (cookieTheme) {
      setTheme(cookieTheme as Theme);
      return;
    }

    if (typeof window === "undefined") return;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const osTheme = isDark ? "dark" : "light";

    document.cookie = `theme=${osTheme}; path=/`;
    document.documentElement.setAttribute("data-theme", osTheme);
    setTheme(osTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = document.cookie.includes("theme=light") ? "dark" : "light";
    document.cookie = `theme=${newTheme}; path=/`;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  if (!theme) return;

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
