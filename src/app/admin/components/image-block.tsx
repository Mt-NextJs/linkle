import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { BlockType, TypeBlock } from "@/types/block_types";
import Icons from "@app/profile/[userId]/components/icons";

interface ImageBlockProps {
  type: TypeBlock;
  url: string;
  imgUrl: string | null;
  title: string | null;
}

export default function ImageBlock({
  type,
  url,
  imgUrl,
  title,
}: ImageBlockProps) {
  return (
    <div className={"flex items-center"}>
      <Icons type={type} />
      <div className="flex flex-1 items-center gap-3">
        <div className="relative ml-6 h-[86px] w-[86px]">
          <Image
            src={imgUrl == null ? "없음" : imgUrl}
            alt={title == null ? "없음" : title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded border"
          />
        </div>
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
