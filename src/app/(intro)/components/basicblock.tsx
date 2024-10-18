"use client";

import Image from "next/image";
import ToggleButton from "./UI/toggle-button";
import { useState } from "react";

interface Block {
  id: number;
  type: number;
  sequence: number;
  style: number | null;
  title: string | null;
  subText01: string | null;
  subText02: string | null;
  url: string;
  imgUrl: string | null;
  dateStart: string | null;
  dateEnd: string | null;
  openYn: "Y" | "N";
  keepYn: "Y" | "N";
  dateCreate: string;
  dateUpdate: string | null;
  index: number;
  dragStart: (e: React.DragEvent<HTMLDivElement>, position: number) => void;
  dragEnter: (e: React.DragEvent<HTMLDivElement>, position: number) => void;
  drop: (e: React.DragEvent<HTMLDivElement>) => void;
}
export default function BasicBlock({
  id,
  type,
  sequence,
  style,
  title,
  subText01,
  subText02,
  url,
  imgUrl,
  dateStart,
  dateEnd,
  openYn,
  keepYn,
  dateCreate,
  dateUpdate,
  index,
  dragStart,
  dragEnter,
  drop,
}: Block) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function setIcon(title: string | null) {
    switch (title) {
      case "이벤트 블록":
        return "/assets/icons/icon_gift.png";
      case "캘린더 블록":
        return "/assets/icons/icon_calendar.png";
      case "동영상 블록":
        return "/assets/icons/icon_video.png";
      case "구분선 블록":
        return "/assets/icons/icon_divide.png";
      case "이미지 블록":
        return "/assets/icons/icon_image.png";
      case "텍스트 블록":
        return "/assets/icons/icon_text.png";
      case "링크 블록":
        return "/assets/icons/icon_link.png";
      default:
        return "/assets/icons/icon_gift.png";
    }
  }
  async function deleteHandler() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      alert("인증 토큰이 없습니다.");
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/delete`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        },
      );
      if (!response.ok) {
        alert("삭제 실패");
      } else {
        alert("삭제 성공");
      }
    } catch (error) {
      alert("연결 실패");
    }
  }

  return (
    <>
      <div
        className="flex h-36 w-full rounded border"
        draggable
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="relative w-[5%]">
          <div className="h-10 border bg-slate-100 hover:bg-slate-200">
            <button>
              <Image
                className="ml-[8px] mt-[7px]"
                src="/assets/icons/icon_arrow_up.png"
                alt="arrow_up"
                width={20}
                height={30}
              />
            </button>
          </div>
          <div className="h-16 cursor-pointer border bg-slate-100 hover:bg-slate-200">
            <Image
              className="ml-[6.5px] mt-[17px]"
              src="/assets/icons/icon_grabber.png"
              alt="grabber"
              width={25}
              height={40}
            />
          </div>
          <div className="h-10 border bg-slate-100 hover:bg-slate-200">
            <button>
              <Image
                className="ml-[8px] mt-[7px]"
                src="/assets/icons/icon_arrow.png"
                alt="arrow_down"
                width={20}
                height={30}
              />
            </button>
          </div>
        </div>
        <div className="grid h-full w-full">
          <div className="flex h-[32px] items-center justify-between">
            <div className="flex items-center">
              <Image
                className="ml-2"
                src={setIcon(title)}
                alt="title_icon"
                width={30}
                height={20}
              />
              <div className="ml-[4px] font-bold text-orange-600">{title}</div>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <ToggleButton />
              <button onClick={toggleMenu} className="hover:bg-slate-200">
                <Image
                  src="/assets/icons/icon_menu_dot.png"
                  alt="menu_dot"
                  width={20}
                  height={20}
                  className="ml-1 mt-[6px]"
                />
                {isOpen && (
                  <div className="absolute mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
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
              </button>
            </div>
          </div>
          <div className="h-[80px]"></div>
          <div className="h-[32px]"></div>
        </div>
      </div>
      <br></br>
    </>
  );
}
