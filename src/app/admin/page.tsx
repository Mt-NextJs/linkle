"use client";

import BlockMenu from "@app/admin/(block)/block-menu";
import BasicBlock from "@app/intro/components/basicblock";
import EmptyBlock from "@app/intro/components/UI/empty-block";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { postBlock } from "../../lib/post-block";
import { adminApiInstance } from "../../utils/apis";
import ProfileBox from "@app/admin/components/profile-box";
import PreviewModal from "@app/admin/components/preview/preview-modal";
import CircleButton from "@app/admin/components/buttons/circle-button";

export interface Block {
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

function Admin() {
  useEffect(() => {
    const setVisitor = async () => {
      const adminApis = await adminApiInstance;
      if (!adminApis) {
        alert("로그인이 필요합니다");
        if (typeof window !== "undefined") {
          window.location.href = "/login";
          return;
        }
      }
      const response = await adminApis.getVisitor();
      if (!response) return;
      if (!response.ok) {
        sessionStorage.removeItem("token");
        // alert("방문자 조회 실패");
      } else {
        const infor = await response.json();
        setShowToday(infor.data.today);
        setShowRealTime(infor.data.realTime);
        setShowTotal(infor.data.total);
      }
    };
    // setVisitor()
    //   .then()
    //   .catch((e) => console.log(e));
    getBlocks().then();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTopVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showTotal, setShowTotal] = useState(0);
  const [showToday, setShowToday] = useState(0);
  const [showRealTime, setShowRealTime] = useState(0);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [isBlockMenuOn, setIsBlockMenuOn] = useState<boolean>(false);
  const [isPreviewOn, setIsPreviewOn] = useState<boolean>(false);

  const [blocks, setBlocks] = useState<Block[]>([]);

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isAdmin = pathname === "/admin";

  async function getBlocks() {
    const blockApis = await adminApiInstance;
    const response = await blockApis.getBlocks();
    if (!response) return;
    if (response.ok) {
      const { data } = await response.json();
      setBlocks(data);
    } else {
      sessionStorage.removeItem("token");
      // alert("블록 조회 실패");
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
        const { data } = res;
        setBlocks(data);
      }
    });
  };
  const handlePreviewOpen = () => {
    setIsPreviewOn(true);
  };

  return (
    <div className={"max-h-screen w-full px-14"}>
      <ProfileBox />
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
            src="/assets/icons/icon_help.png"
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
      <div className={"max-h-[40rem] overflow-scroll"}>
        {blocks === undefined || blocks.length == 0 ? (
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
              isAdmin={isAdmin}
            />
          ))
        )}
      </div>
      <PreviewModal
        isOpen={isPreviewOn}
        setIsOpen={setIsPreviewOn}
        data={blocks}
      />
      {isAdmin && (
        <>
          <div className="mt-4 flex w-full items-center justify-between">
            <CircleButton text={"미리보기"} onClick={handlePreviewOpen} />
            <CircleButton text="순서 업데이트" onClick={updateBlockOrder} />
            <button
              onClick={() => setIsBlockMenuOn(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-md hover:bg-orange-600"
            >
              +
            </button>
          </div>
          <BlockMenu setIsOpen={setIsBlockMenuOn} isOpen={isBlockMenuOn} />
        </>
      )}
      {/*{isScrollTopVisible && (*/}
      {/*  <button*/}
      {/*    onClick={scrollToTop}*/}
      {/*    className="fixed bottom-5 right-5 rounded bg-orange-500 p-2 text-white shadow-md hover:bg-orange-300"*/}
      {/*  >*/}
      {/*    ▲*/}
      {/*  </button>*/}
      {/*)}*/}
    </div>
  );
}

export default Admin;
