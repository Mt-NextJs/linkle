import React, { SetStateAction } from "react";

import Portal from "@app/components/portal";
import { Block } from "@/types/apis";
import Preview from "@app/admin/components/preview/components/preview";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  data: Block[];
}

const PreviewModal = ({ isOpen, setIsOpen, data }: Props) => {
  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Portal>
      <button
        type="button"
        onClick={handleClose}
        className="flex h-screen w-screen cursor-default items-center justify-center before:relative before:h-screen before:w-screen before:bg-slate-666"
      ></button>
      <div className="absolute left-1/2 top-[45%] flex h-3/4 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-3xl bg-slate-333 p-6">
        <Preview setIsOpen={setIsOpen} />
      </div>
    </Portal>
  );
};

export default PreviewModal;
