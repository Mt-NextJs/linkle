import { twMerge } from "tailwind-merge";

import { TypeBlock } from "@/types/block_types";
import Icons from "@app/profile/[userId]/components/icons";

interface LinkBlockProps {
  type: TypeBlock;
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function TypeFour({
  type,
  url,
  style,
  imgUrl,
  title,
}: LinkBlockProps) {
  return (
    <>
      <div>
        <Icons type={type} />
      </div>
    </>
  );
}
