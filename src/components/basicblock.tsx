"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

import DivideBlock from "@app/admin/components/divide-block";
import VideoBlock from "@app/admin/components/video-block";
import ImageBlock from "@app/admin/components/image-block";
import EventBlock from "@app/admin/components/event-block";
import TextBlock from "@app/admin/components/text-block";
import CalendarBlock from "@app/admin/components/calendar-block";
import LinkBlock from "@app/admin/components/link-block";
import { Block } from "@/types/apis";
import { Switch } from "@components/UI/switch";
import { Button } from "@components/UI/button";

interface Props {
  block: Block;
  index: number;
  dragStart: (index: number) => void;
  dragEnter: (index: number) => void;
  drop: () => void;
  isAdmin: boolean;
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
}

export default function BasicBlock({
  block,
  index,
  dragStart,
  dragEnter,
  drop,
  isAdmin,
  setBlocks,
}: Props) {
  const { id, type, sequence, style, title, url, imgUrl, dateStart, dateEnd } =
    block;
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function renderComponent(type: number) {
    switch (type) {
      case 1:
        return <DivideBlock type={type} sequence={sequence} style={style} />;
      case 2:
        return <VideoBlock type={type} url={url} title={title} />;
      case 3:
        return (
          <LinkBlock
            type={type}
            url={url}
            style={style}
            imgUrl={imgUrl}
            title={title}
          />
        );
      case 4:
        return (
          <ImageBlock type={type} title={title} url={url} imgUrl={imgUrl} />
        );
      case 5:
        return (
          <EventBlock
            type={type}
            title={title}
            dateStart={dateStart}
            dateEnd={dateEnd}
          />
        );
      case 6:
        return <TextBlock type={type} title={title} />;
      case 7:
        return (
          <CalendarBlock type={type} dateStart={dateStart} dateEnd={dateEnd} />
        );
      default:
        return <></>;
    }
  }

  async function deleteHandler() {
    try {
      const response = await fetch(`/api/link/delete`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      if (!response.ok) {
        alert("삭제 실패");
      } else {
        setBlocks((prev) => prev.filter((block) => block.id !== id));
        alert("삭제 성공");
      }
    } catch (error) {
      alert("연결 실패");
    }
  }

  return (
    <>
      <div
        className="flex w-full items-center px-4 py-2 hover:bg-accent"
        draggable
        onDragStart={() => dragStart(index)}
        onDragEnter={() => dragEnter(index)}
        onDragEnd={drop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="grid h-full w-full">{renderComponent(type)}</div>
        {isAdmin && (
          <div className="ml-auto flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <Switch />
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            {isOpen && (
              <div className="absolute mt-2 w-48 -translate-x-[90%] transform rounded-lg border border-gray-200 bg-white shadow-lg">
                <ul className="py-1">
                  <li className="border-b px-4 py-2 font-bold hover:bg-slate-200">
                    상단에 고정
                  </li>
                  <li className="border-b px-4 py-2 font-bold hover:bg-slate-200">
                    보관
                  </li>
                  <li
                    className="px-4 py-2 font-bold hover:bg-slate-200"
                    onClick={deleteHandler}
                  >
                    삭제
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <br></br>
    </>
  );
}
