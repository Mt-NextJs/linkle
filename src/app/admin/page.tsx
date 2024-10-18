"use client";

import BasicBlock from "@app/(intro)/components/basicblock";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ClientRoute } from "@config/route";

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
    if (!token) {
      window.history.back();
    }
    const setVisitor = async () => {
      try {
        const response = await fetch(
          "http://43.201.21.97:3002/api/user/visitor",
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
        alert("연결 실패");
      }
    };
    setVisitor();
    getBlocks();
  }, []);

  const [showTotal, setShowTotal] = useState("0");
  const [showToday, setShowToday] = useState("0");
  const [showRealTime, setShowRealTime] = useState("0");
  const [blocks, setBlocks] = useState<Block[]>([]);

  function setTop(index: number) {
    setBlocks((prev) => {
      const newBlocks = [...prev];
      const [movedBlock] = newBlocks.splice(index, 1);
      newBlocks.unshift(movedBlock);
      return newBlocks;
    });
  }
  function setBottom(index: number) {
    setBlocks((prev) => {
      const newBlocks = [...prev];
      const [movedBlock] = newBlocks.splice(index, 1);
      newBlocks.push(movedBlock);
      return newBlocks;
    });
  }
  async function getBlocks() {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch("http://43.201.21.97:3002/api/link/list", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  return (
    <div>
      <div className="h-36 items-center border">
        <div className="items-center border text-center">
          <Image
            src="/assets/icons/icon_profile.png"
            alt="profile"
            className="ml-[44%] cursor-pointer"
            width={80}
            height={20}
          />
          <Link href={ClientRoute.MAIN as string} className="mr-5">
            momomoc
          </Link>
        </div>
      </div>
      <br />
      <div className="flex w-full rounded border">
        <div className="grid w-8/12 rounded-l border">
          <h3 className="ml-2 font-bold">방문자</h3>

          <div className="flex">
            <p className="ml-2">전체 {showTotal}</p>
            <p className="ml-2">오늘 {showToday}</p>
            <p className="ml-2">실시간 {showRealTime}</p>
          </div>
        </div>
        <div className="w-4/12 rounded-r border">
          <h3 className="ml-2 font-bold">소식받기</h3>
          <p className="ml-2">전체</p>
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
      <div className="h-64 items-center rounded border bg-slate-100 text-center align-middle">
        <Image
          className="mb-[10px] ml-[44%] mt-[17px]"
          src="/assets/icons/icon_empty.png"
          alt="arrow_down"
          width={80}
          height={40}
        />
        <p>지금 공개된 링크가 없다...</p>
        <p>
          <strong className="cursor-pointer">소식받기</strong> 버튼을 눌러다오
        </p>
        <p>새로운 링크가 생기면 알려줌.,..</p>
      </div>
      <br />
      {blocks.map((block, index) => (
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
        />
      ))}
    </div>
  );
}
