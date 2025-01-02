import Image from "next/image";
import React from "react";

import Icons from "@app/profile/[userId]/components/icons";
import { TypeBlock } from "@/types/block_types";
interface VideoBlockProps {
  type: TypeBlock;
  title: string | null;
  url: string | null;
}
export default function VideoBlock({ type, title, url }: VideoBlockProps) {
  return (
    <div className="flex w-full items-center gap-4">
      <Icons type={type} />

      <div className={"flex w-full flex-col items-center"}>
        <div className="shadow-lg">
          {url && (
            <object type="text/html" data={url} width="300" height="200">
              <div>동영상 주소를 확인해주세요</div>
            </object>
          )}
        </div>
        <div className="flex w-4/5 items-center justify-center">
          <p className="text-xl font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
}
