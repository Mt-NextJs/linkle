"use client";

import BasicBlock from "@app/intro/components/basicblock";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ClientRoute } from "@config/route";
import EmptyBlock from "@app/intro/components/UI/empty-block";
import { useRouter } from "next/navigation";
import { postBlock } from "../../lib/post-block";
import BlockMenu from "@app/admin/(block)/block-menu";

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
}

export default function Admin() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (!token) {
      // window.history.back();
    }
    const setVisitor = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/visitor`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (!response.ok) {
          alert("방문자 조회 실패");
        } else {
          const infor = await response.json();
          setShowToday(infor.data.today);
          setShowRealTime(infor.data.realTime);
          setShowTotal(infor.data.total);
        }
      } catch (error) {
        // alert("연결 실패");
      }
    };
    setVisitor();
    getBlocks();
  }, []);

  const [showTotal, setShowTotal] = useState("0");
  const [showToday, setShowToday] = useState("0");
  const [showRealTime, setShowRealTime] = useState("0");

  const [isBlockMenuOn, setIsBlockMenuOn] = useState<boolean>(false);

  const [blocks, setBlocks] = useState<Block[]>([]);

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const router = useRouter();

  async function getBlocks() {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/list`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        alert("블록 조회 실패");
      } else {
        const infor = await response.json();
        console.log(infor.data);
        setBlocks(infor.data);
      }
    } catch (error) {
      alert("연결 실패");
    }
  }

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

  const updateBlockOrder = () => {
    const params = {
      order: blocks,
    };
    postBlock("/api/link/update/order", params, router).then((res) => {
      if (res) {
        console.log(res);
        const { data } = res;
        setBlocks(data);
      }
    });
  };

  return (
    <div>
      <div className="mt-8 flex h-[200px] flex-col items-center justify-center border bg-slate-100 text-center">
        <Image
          src="/assets/icons/icon_profile.png"
          alt="profile"
          className="mt-10 cursor-pointer"
          width={80}
          height={20}
        />
        <Link
          href={ClientRoute.MAIN as string}
          className="mt-2 font-bold underline"
        >
          momomoc
        </Link>
      </div>
      <br />
      <div className="flex w-full rounded border">
        <div className="grid w-8/12 rounded-l border">
          <h3 className="ml-2 font-bold">방문자</h3>

          <div className="flex">
            <p className="ml-2">
              전체 <span className="text-red-500">{showTotal}</span>
            </p>
            <p className="ml-2">
              오늘 <span className="text-red-500">{showToday}</span>
            </p>
            <p className="ml-2">
              실시간 <span className="text-red-500">{showRealTime}</span>
            </p>
          </div>
        </div>
        <div className="w-4/12 rounded-r border">
          <h3 className="ml-2 font-bold">소식받기</h3>
          <p className="ml-2">
            전체 <span className="text-red-500">0</span>
          </p>
        </div>
      </div>
      <br />
      <div className="flex gap-1">
        <h1 className="font-bold">블록 리스트</h1>
        <div className="group relative inline-block">
          <Image
            src="/assets/icons/icon_question.png"
            alt="question"
            width={20}
            height={20}
          />
          <div className="absolute left-full top-1/2 w-max -translate-y-1/2 translate-x-2 transform rounded bg-slate-400 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            블록을 편집하거나 배치 순서를 변경할 수 있습니다
          </div>
        </div>
      </div>

      <br />
      {blocks.length == 0 ? (
        <EmptyBlock />
      ) : (
        blocks.map((block, index) => (
          <BasicBlock
            key={block.id}
            id={block.id}
            type={block.type}
            title={block.title || "제목 없음"}
            sequence={block.sequence}
            style={block.style}
            subText01={block.subText01}
            subText02={block.subText02}
            url={block.url}
            imgUrl={block.imgUrl}
            dateStart={block.dateStart}
            dateEnd={block.dateEnd}
            openYn={block.openYn}
            keepYn={block.keepYn}
            dateCreate={block.dateCreate}
            dateUpdate={block.dateUpdate}
            index={index}
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
          />
        ))
      )}
      <div className="mb-5 mt-9 flex w-full items-center justify-between">
        <div className="flex flex-grow justify-center">
          <button
            onClick={updateBlockOrder}
            className="rounded-full border bg-white px-6 py-2 font-bold text-gray-600 shadow-xl hover:bg-gray-100 hover:text-gray-800"
          >
            미리보기
          </button>
        </div>
        <button
          onClick={() => setIsBlockMenuOn(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-md hover:bg-orange-600"
        >
          +
        </button>
      </div>
      <BlockMenu setIsOpen={setIsBlockMenuOn} isOpen={isBlockMenuOn} />
    </div>
  );
}
