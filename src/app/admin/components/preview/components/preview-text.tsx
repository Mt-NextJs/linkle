import React from "react";
import { twMerge } from "tailwind-merge";

import { Block } from "@/types/apis";

interface Props {
  block: Block;
}
const PreviewText = ({ block }: Props) => {
  const { title } = block;
  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center rounded-lg bg-[var(--primary-100)]",
        "px-3 py-1.5 sm:px-4 sm:py-2",
        "text-sm sm:text-base",
      )}
    >
      {title}
    </div>
  );
};

export default PreviewText;
