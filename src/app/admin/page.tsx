"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ProfileBox from "@app/admin/components/profile-box";
import PreviewModal from "@app/admin/components/preview/preview-modal";
import BlockListSection from "@app/admin/components/block-list-section";
import AdminMenu from "@app/admin/components/admin-menu";
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
      console.log(response);
      const { data } = await response.json();
      setBlocks(data);
    } else {
      sessionStorage.removeItem("token");
    }
  }

  const updateBlockOrder = async () => {
    const params = {
      data: blocks,
    };

    const blockApis = await adminApiInstance;
    const response = await blockApis.orderBlock(params);
    if (!response) return;
    if (response.ok) {
      alert("블록 순서 업데이트 성공");
    } else {
      alert("블록 순서 업데이트 실패");
    }
  };
  const handlePreviewOpen = () => {
    setIsPreviewOn(true);
  };

  return (
    <main
      className="mx-auto max-h-screen max-w-2xl"
      aria-label="관리자 대시보드"
    >
      <ProfileBox />
      <BlockListSection
        blocks={blocks}
        setBlocks={setBlocks}
        isAdmin={isAdmin}
      />
      {isAdmin && (
        <AdminMenu
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
