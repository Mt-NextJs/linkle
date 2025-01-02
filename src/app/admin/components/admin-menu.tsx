import React from "react";
import { Plus } from "lucide-react";

import CircleButton from "@app/admin/components/buttons/circle-button";
import BlockMenu from "@app/admin/(block)/block-menu";

interface Props {
  handlePreviewOpen: () => void;
  updateBlockOrder: () => void;
  setIsBlockMenuOn: React.Dispatch<React.SetStateAction<boolean>>;
  isBlockMenuOn: boolean;
}
const AdminMenu = ({
  handlePreviewOpen,
  updateBlockOrder,
  setIsBlockMenuOn,
  isBlockMenuOn,
}: Props) => {
  return (
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
          <Plus className="h-6 w-6" />
        </button>
      </div>
      <BlockMenu setIsOpen={setIsBlockMenuOn} isOpen={isBlockMenuOn} />
    </>
  );
};

export default AdminMenu;
