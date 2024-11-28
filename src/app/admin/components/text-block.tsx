import { MoreVertical, Type } from "lucide-react";

import { Switch } from "@components/UI/switch";
import { Button } from "@components/UI/button";
import { TypeBlock } from "@/types/block_types";
import Icons from "@app/profile/[userId]/components/icons";

interface TextBlockProps {
  type: TypeBlock;
  title: string | null;
}

export default function TextBlock({ type, title }: TextBlockProps) {
  return (
    <div className={"flex w-full items-center gap-4"}>
      <Icons type={type} />
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
