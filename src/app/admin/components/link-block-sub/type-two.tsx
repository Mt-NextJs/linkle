import Image from "next/image";

import { TypeBlock } from "@/types/block_types";
import Icons from "@app/profile/[userId]/components/icons";

interface LinkBlockProps {
  type: TypeBlock;
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function TypeTwo({
  type,
  url,
  style,
  imgUrl,
  title,
}: LinkBlockProps) {
  return (
    <>
      <div className="ml-[85px] flex h-[86px] w-[530px] items-center rounded-lg bg-white shadow-md">
        <div className="flex w-full items-center gap-4">
          <Icons type={type} />
          <div className="ml-[6px] flex w-1/5 justify-start">
            <Image
              src={imgUrl == null ? "없음" : imgUrl}
              alt={`미리보기`}
              width={75}
              height={75}
              className="h-[75px] w-[75px] rounded-lg bg-gray-300 object-cover"
            />
          </div>
          <div className="mr-[37px] flex w-4/5 items-center justify-center">
            <p className="text-xl font-bold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
//Thumbnail
