import React from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import { Block } from "@/types/apis";

interface Props {
  block: Block;
}
const PreviewVideo = ({ block }: Props) => {
  const { url: videoUrl } = block;
  const pathname = usePathname();
  const isAdmin = pathname.includes("/admin");
  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center overflow-hidden rounded-xl shadow-lg",
        isAdmin
          ? "h-[10rem] sm:h-[12rem] md:h-[14rem]"
          : "h-[16rem] sm:h-[20rem] md:h-[24rem]",
      )}
    >
      {videoUrl && (
        <object
          type="text/html"
          data={videoUrl}
          width="100%"
          height="100%"
          className="h-full w-full"
        >
          <div className="flex h-full items-center justify-center text-sm text-gray-500 sm:text-base">
            동영상 주소를 확인해주세요
          </div>
        </object>
      )}
    </div>
  );
};

export default PreviewVideo;
