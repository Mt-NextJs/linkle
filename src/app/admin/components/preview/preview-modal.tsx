import React, { SetStateAction, Suspense } from "react";
import Portal from "@app/components/portal";
import CircleButton from "@app/admin/components/buttons/circle-button";
import ProfileBox from "@app/admin/components/profile-box";
import { Block } from "@app/admin/page";
import PreviewText from "@app/admin/components/preview/components/preview-text";
import PreviewLink from "@app/admin/components/preview/components/preview-link";
import dynamic from "next/dynamic";
import Preview from "@app/admin/components/preview/components/preview";
const PreviewImage = dynamic(
  () => import("@app/admin/components/preview/components/preview-image"),
);
const PreviewVideo = dynamic(
  () => import("@app/admin/components/preview/components/preview-video"),
);
const PreviewDivider = dynamic(
  () => import("@app/admin/components/preview/components/preview-divider"),
);
const PreviewCalendar = dynamic(
  () => import("@app/admin/components/preview/components/preview-calendar"),
);
const PreviewEvent = dynamic(
  () => import("@app/admin/components/preview/components/preview-event"),
);

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

  console.log(data[data.length - 1]);
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
