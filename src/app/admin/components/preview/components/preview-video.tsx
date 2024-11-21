import React from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import { Block } from "@app/admin/page";

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
        "flex items-center justify-center overflow-hidden rounded-xl shadow-lg",
        isAdmin ? "h-[14rem]" : "h-[24rem]",
      )}
    >
      {videoUrl && (
        <object type="text/html" data={videoUrl} width="100%" height="100%">
          <div>동영상 주소를 확인해주세요</div>
        </object>
      )}
    </div>
  );
};

export default PreviewVideo;
