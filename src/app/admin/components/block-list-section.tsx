import React, { useRef } from "react";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { Calendar } from "lucide-react";

import EmptyBlock from "@components/UI/empty-block";
import BasicBlock from "@components/basicblock";
import { Block } from "@/types/apis";

interface Props {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  isAdmin: boolean;
}
const BlockListSection = ({ blocks, isAdmin, setBlocks }: Props) => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const dragStart = (position: number) => {
    dragItem.current = position; // position -> index (드래그 선택 아이템의 인덱스)
  };

  const dragEnter = (position: number) => {
    dragOverItem.current = position; // position -> index (드래그 오버 아이템의 인덱스)
  };

  const drop = () => {
    const copyListItems = [...blocks];
    const dragItemContent = copyListItems[dragItem.current as number]; // 리스트에서 드래그 선택 아이템
    copyListItems.splice(dragItem.current as number, 1); // 리스트에서 드래그 선택 아이템 삭제하여 리스트에서 제거
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent); // 리스트에서 드래그 오버 아이템의 위치에 드래그 선택 아이템 추가
    const newSequenceItems = copyListItems.map((item, index) => {
      return { ...item, sequence: index };
    }); // 시퀀스 변경
    dragItem.current = null;
    dragOverItem.current = null;
    setBlocks(newSequenceItems);
  };
  return (
    <section className="mt-4" aria-labelledby="block-list-title">
      <div className="mx-4 flex justify-between gap-1">
        <div className="flex gap-1">
          <h2 id="block-list-title" className="font-bold">
            블록 리스트
          </h2>
          <div className="group relative inline-block">
            <Image
              src="/assets/icons/icon_help.png"
              alt="블록 관리 도움말 아이콘"
              width={20}
              height={20}
              aria-describedby="block-help-tooltip"
            />
            <div
              id="block-help-tooltip"
              role="tooltip"
              className="absolute left-full top-1/2 w-max -translate-y-1/2 translate-x-2 transform rounded bg-slate-400 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              블록을 편집하거나 배치 순서를 변경할 수 있습니다
            </div>
          </div>
        </div>
        <Link href={"/admin/calendar"} className={"text-gray-700"}>
          <Calendar className="h-[28px] w-[28px]" />
        </Link>
      </div>

      <div className="mt-4 max-h-[40rem] overflow-scroll">
        {blocks === null || blocks.length == 0 ? (
          <EmptyBlock />
        ) : (
          <ul className="space-y-2">
            {blocks.map((block, index) => (
              <li
                key={block.id}
                aria-label={`${block.title || "제목 없음"} 블록`}
              >
                <BasicBlock
                  key={block.id}
                  index={index}
                  dragStart={dragStart}
                  dragEnter={dragEnter}
                  drop={drop}
                  isAdmin={isAdmin}
                  setBlocks={setBlocks}
                  block={block}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default BlockListSection;
