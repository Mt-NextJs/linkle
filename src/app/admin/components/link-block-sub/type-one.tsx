import { Link2 } from "lucide-react";

import Icons from "@app/profile/[userId]/components/icons";
import { TypeBlock } from "@/types/block_types";

interface LinkBlockProps {
  type: TypeBlock;
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function TypeOne({
  url,
  style,
  imgUrl,
  title,
  type,
}: LinkBlockProps) {
  return (
    <div className={"flex items-center gap-4"}>
      <Icons type={type} />
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
//simple
