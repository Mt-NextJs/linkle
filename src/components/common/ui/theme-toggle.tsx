"use client";

import { useTheme } from "@components/providers/theme-provider";
import { CiLight, CiDark } from "react-icons/ci";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
