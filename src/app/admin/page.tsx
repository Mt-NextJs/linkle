"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ProfileBox from "@app/admin/components/profile-box";
import PreviewModal from "@app/admin/components/preview/preview-modal";
import VisitSection from "@app/admin/components/visit-section";
import BlockListSection from "@app/admin/components/block-list-section";
import AdminManu from "@app/admin/components/admin-manu";
import { Block } from "@/types/apis";

import { adminApiInstance } from "../../utils/apis";

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

  const [showTotal, setShowTotal] = useState(0);
  const [showToday, setShowToday] = useState(0);
  const [showRealTime, setShowRealTime] = useState(0);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [isBlockMenuOn, setIsBlockMenuOn] = useState<boolean>(false);
  const [isPreviewOn, setIsPreviewOn] = useState<boolean>(false);

  const [blocks, setBlocks] = useState<Block[]>([]);

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
      <VisitSection
        showRealTime={showRealTime}
        showToday={showToday}
        showTotal={showTotal}
      />
      <BlockListSection
        blocks={blocks}
        setBlocks={setBlocks}
        isAdmin={isAdmin}
      />
      {isAdmin && (
        <AdminManu
          handlePreviewOpen={handlePreviewOpen}
          isBlockMenuOn={isBlockMenuOn}
          setIsBlockMenuOn={setIsBlockMenuOn}
          updateBlockOrder={updateBlockOrder}
        />
      )}
      {/*{isScrollTopVisible && (*/}
      {/*  <button*/}
      {/*    onClick={scrollToTop}*/}
      {/*    className="fixed bottom-5 right-5 rounded bg-orange-500 p-2 text-white shadow-md hover:bg-orange-300"*/}
      {/*  >*/}
      {/*    ▲*/}
      {/*  </button>*/}
      {/*)}*/}
      <PreviewModal
        isOpen={isPreviewOn}
        setIsOpen={setIsPreviewOn}
        data={blocks}
      />
    </main>
  );
}

export default Admin;
