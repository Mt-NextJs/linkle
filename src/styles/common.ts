import { twMerge } from "tailwind-merge";

export const buttonStyles = {
  base: twMerge(
    "h-10 w-10 rounded-full border-2",
    "border-[var(--input-color-line)] bg-[var(--background)]",
    "transition-all duration-200",
  ),
  interactive: twMerge(
    "hover:border-[var(--primary-300)] hover:bg-[var(--primary-100)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]",
    "focus:ring-offset-2 focus:ring-offset-[var(--background)]",
    "active:scale-95",
  ),
  icon: twMerge(
    "p-2",
    "transition-opacity duration-200",
    "dark:invert dark:opacity-90",
    "group-hover:opacity-80",
  ),
};
