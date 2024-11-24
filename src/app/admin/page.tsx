"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import BlockMenu from "@app/admin/(block)/block-menu";
import BasicBlock from "@app/intro/components/basicblock";
import EmptyBlock from "@app/intro/components/UI/empty-block";
import CircleButton from "@app/admin/components/buttons/circle-button";
import PreviewModal from "@app/admin/components/preview/preview-modal";
import ProfileBox from "@app/admin/components/profile-box";

import { adminApiInstance } from "../../utils/apis";

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
  };
  const handlePreviewOpen = () => {
    setIsPreviewOn(true);
  };

  return (
    <main className="max-h-screen w-full px-14" aria-label="관리자 대시보드">
      <ProfileBox />
      <section className="mt-4" aria-labelledby="visitor-stats-title">
        <div className="flex w-full rounded border">
          <div className="grid w-8/12 rounded-l border">
            <h2 id="visitor-stats-title" className="ml-2 font-bold">
              방문자
            </h2>
            <div className="flex">
              <dl className="ml-2">
                <dt className="inline">전체</dt>
                <dd
                  className="ml-1 inline text-red-500"
                  aria-label={`전체 방문자 ${showTotal}명`}
                >
                  {showTotal}
                </dd>
              </dl>
              <dl className="ml-2">
                <dt className="inline">오늘</dt>
                <dd
                  className="ml-1 inline text-red-500"
                  aria-label={`오늘 방문자 ${showToday}명`}
                >
                  {showToday}
                </dd>
              </dl>
              <dl className="ml-2">
                <dt className="inline">실시간</dt>
                <dd
                  className="ml-1 inline text-red-500"
                  aria-label={`실시간 방문자 ${showRealTime}명`}
                >
                  {showRealTime}
                </dd>
              </dl>
            </div>
          </div>
          <div className="w-4/12 rounded-r border">
            <h2 id="subscription-stats-title" className="ml-2 font-bold">
              소식받기
            </h2>
            <dl className="ml-2">
              <dt className="inline">전체</dt>
              <dd
                className="ml-1 inline text-red-500"
                aria-label="소식받기 구독자 전체 0명"
              >
                0
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="mt-4" aria-labelledby="block-list-title">
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

        <div className="mt-4 max-h-[40rem] overflow-scroll">
          {blocks === undefined || blocks.length == 0 ? (
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
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <PreviewModal
        isOpen={isPreviewOn}
        setIsOpen={setIsPreviewOn}
        data={blocks}
      />

      {isAdmin && (
        <>
          <div
            className="mt-4 flex w-full items-center justify-between"
            role="group"
            aria-label="블록 관리 도구"
          >
            <CircleButton
              text="미리보기"
              onClick={handlePreviewOpen}
              aria-label="블록 미리보기"
            />
            <CircleButton
              text="순서 업데이트"
              onClick={updateBlockOrder}
              aria-label="블록 순서 저장"
            />
            <button
              type="button"
              onClick={() => setIsBlockMenuOn(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-md transition-colors hover:bg-orange-600"
              aria-label="새 블록 추가"
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
    </main>
  );
}

export default Admin;
