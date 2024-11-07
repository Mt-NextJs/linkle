import React, { SetStateAction, Suspense, useEffect, useState } from "react";
import ProfileBox from "@app/admin/components/profile-box";

import PreviewLink from "@app/admin/components/preview/components/preview-link";
import PreviewText from "@app/admin/components/preview/components/preview-text";
import { Block } from "@app/admin/page";
import dynamic from "next/dynamic";
import { adminApiInstance } from "../../../../../utils/apis";
import { usePathname } from "next/navigation";
import CircleButton from "@app/admin/components/buttons/circle-button";
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
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
}
const Preview = ({ setIsOpen }: Props) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  useEffect(() => {
    getBlocks().then();
  }, []);

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

  const setComponentType = (block: Block) => {
    const { type } = block;
    return {
      1: <PreviewDivider block={block} />,
      2: (
        <Suspense fallback={<p>Loading video...</p>}>
          <PreviewVideo block={block} />
        </Suspense>
      ),
      3: <PreviewLink block={block} />,
      4: <PreviewImage block={block} />,
      5: <PreviewEvent block={block} />,
      6: <PreviewText block={block} />,
      7: <PreviewCalendar block={block} />,
    }[type];
  };
  return (
    // <div className="absolute left-1/2 top-[45%] flex h-3/4 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-3xl bg-slate-333 p-6">
    <>
      <ProfileBox />
      <ul
        className={`flex h-full flex-col overflow-scroll ${isAdmin ? "gap-2 p-2" : "gap-4 pt-4"}`}
      >
        {blocks.map((block, index) => {
          return (
            <li key={`${block.title}${index}`} className="text-slate-666">
              {setComponentType(block)}
            </li>
          );
        })}
      </ul>
      {isAdmin && (
        <div className={"fixed -bottom-14 left-1/2 -translate-x-1/2"}>
          <CircleButton
            text="닫기"
            onClick={() => setIsOpen && setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Preview;
