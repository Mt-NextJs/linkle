import Image from "next/image";
import Link from "next/link";

import { TypeBlock } from "@/types/block_types";
import Icons from "@app/profile/[userId]/components/icons";

interface LinkBlockProps {
  type: TypeBlock;
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function TypeThree({
  type,
  url,
  style,
  imgUrl,
  title,
}: LinkBlockProps) {
  return (
    <div className={"flex items-center gap-4"}>
      <Icons type={type} />
      <Link href={url} className={"flex w-full flex-col items-center"}>
        <div className="relative h-[100px] w-full flex-grow-[3] rounded-t-xl bg-gray-300">
          <Image
            src={imgUrl == null ? "없음" : imgUrl}
            alt={`미리보기`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-xl"
          />
        </div>
        <p className="flex-grow-[1] font-bold">{title}</p>
      </Link>
    </div>
  );
}

//card
