import React, { useEffect, useState } from "react";

import { Block } from "@/types/apis";
import { DividerType } from "@app/admin/(block)/divider/types";
import { DividerContent } from "@app/admin/(block)/divider/components/divider-preview";

interface Props {
  block: Block;
}

const PreviewDivider = ({ block }: Props) => {
  const [selectedDivider, setSelectedDivider] = useState<DividerType>("Space");
  const { style } = block;

  useEffect(() => {
    if (!style) return;
    setSelectedDivider(getDividerStyle(style));
  }, [block]);

  const getDividerStyle = (type: number): DividerType => {
    const styles: Record<number, DividerType> = {
      1: "Space",
      2: "Dashed",
      3: "Solid",
      4: "Point",
      5: "Zigzag",
    };
    return styles[type] || "Space";
  };
  return (
    <div>
      <DividerContent type={selectedDivider} />
    </div>
  );
};

export default PreviewDivider;
