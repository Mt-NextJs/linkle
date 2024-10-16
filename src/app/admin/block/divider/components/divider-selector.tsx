import { Divider, DividerType } from "../types";
import Image from "next/image";

interface DividerSelectorProps {
  onSelect: (divider: DividerType) => void;
  selected: DividerType;
}

export default function DividerSelector({
  onSelect,
  selected,
}: DividerSelectorProps) {
  const dividers: Divider[] = [
    { name: "공백", icon: " " },
    { name: "점선", icon: "┈┈" },
    { name: "실선", icon: "───" },
    { name: "포인트", icon: "· · ·" },
    {
      name: "지그재그",
      icon: (
        <Image
          src="/assets/icons/item_zigzag.png"
          alt="Zigzag"
          width={60}
          height={5}
        />
      ),
    },
  ];

  return <div></div>;
}
