// components/providers/theme-provider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { Theme } from "@/types/theme";

interface ThemeContextType {
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    // 로컬 스토리지에서 테마 불러오기
    if (savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme);

    if (savedTheme) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      // 사용자가 수동으로 설정한 테마가 없을 때만 시스템 테마 따르기
      if (!localStorage.getItem("theme")) {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
