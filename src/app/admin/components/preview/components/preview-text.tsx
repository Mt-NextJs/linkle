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
        "flex w-full items-center justify-center rounded-sm bg-[#F6F6F6] py-2",
      )}
    >
      {title}
    </div>
  );
};

export default PreviewText;
