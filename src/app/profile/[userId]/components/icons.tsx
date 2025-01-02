import React from "react";
import {
  Calendar,
  Gift,
  ImageIcon,
  Link2,
  Minus,
  Play,
  Type,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

import { TypeBlock } from "@/types/block_types";

interface Props {
  type: TypeBlock;
}

const Icons = ({ type }: Props) => {
  const icons = {
    1: {
      icon: <Minus className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-500",
    },
    2: {
      icon: <Play className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-500",
    },
    3: {
      icon: <Link2 className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-500",
    },
    4: {
      icon: <ImageIcon className="h-6 w-6" />,
      color: "bg-sky-100 text-sky-500",
    },
    5: {
      icon: <Gift className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-500",
    },
    6: {
      icon: <Type className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-500",
    },
    7: {
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-500",
    },
  };
  return (
    <div
      className={twMerge(
        `flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-lg`,
        icons[type].color,
      )}
    >
      {icons[type].icon}
    </div>
  );
};

export default Icons;
