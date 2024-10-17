import React from "react";
import { useDrag, useDrop } from "react-dnd";
import BasicBlock from "@app/(intro)/components/basicblock";

const ItemType = {
  BLOCK: "block",
};

interface DraggableBlockProps {
  block: string;
  index: number;
  moveBlock: (fromIndex: number, toIndex: number) => void;
  setTop: (index: number) => void;
  setBottom: (index: number) => void;
}

const DraggableBlock: React.FC<DraggableBlockProps> = ({
  block,
  index,
  moveBlock,
  setTop,
  setBottom,
}) => {
  const [, ref] = useDrag({
    type: ItemType.BLOCK,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.BLOCK,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveBlock(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => {
        if (node) ref(drop(node));
      }}
    >
      <BasicBlock
        title={block}
        index={index}
        setTop={setTop}
        setBottom={setBottom}
      />
    </div>
  );
};

export default DraggableBlock;
