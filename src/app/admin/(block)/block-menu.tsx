import React, { SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { blockTypes } from "@/types/block_types";
import Portal from "@app/components/portal";
import Contour from "@app/admin/(block)/components/contour";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const BlockMenu = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();
  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const colors = [
    "bg-block-connect",
    "bg-block-text",
    "bg-block-image",
    "bg-block-divide",
    "bg-block-video",
    "bg-block-calendar",
    "bg-block-event",
  ];

  return (
    <Portal>
      <button
        type="button"
        onClick={handleClose}
        className="flex h-screen w-screen cursor-default items-center justify-center before:relative before:h-screen before:w-screen before:bg-slate-333 before:opacity-25"
        aria-label="모달 닫기"
      />

      <section
        className="absolute left-1/2 top-1/2 z-20 flex w-[700px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-xl bg-white p-6"
        role="dialog"
        aria-labelledby="block-select-title"
        aria-hidden={!isOpen}
        aria-modal="true"
      >
        <header
          className="flex w-full items-center justify-between"
          aria-label="블록 선택 모달 헤더"
        >
          <h1 id="block-select-title" className="text-2xl font-bold">
            블록 선택하기
          </h1>
          <button type="button" onClick={handleClose} aria-label="모달 닫기">
            <Image
              src={"/assets/icons/icon_close.png"}
              width={24}
              height={24}
              alt="모달 닫기 버튼"
            />
          </button>
        </header>

        <span className="text-stale-333 text-lg">블록 타입</span>

        <nav aria-label="블록 선택 메뉴">
          <ul className="flex flex-col">
            {blockTypes.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={{
                      pathname: item.path,
                      query: { prevPath: pathname },
                    }}
                    as={item.path}
                    className="flex items-center gap-4"
                    aria-label={`${item.title} 블록 선택`}
                  >
                    <div
                      className={`overflow-hidden rounded-lg ${colors[index]} p-3`}
                      aria-hidden="true"
                    >
                      <Image
                        src={item.icon.src}
                        alt={item.title}
                        width={24}
                        height={24}
                        className={`bg-slate-eee opacity-50 drop-shadow-2xl grayscale`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-bold">{item.title}</h2>
                      <span className="text-slate-666">{item.text}</span>
                    </div>
                  </Link>

                  {index !== blockTypes.length - 1 && (
                    <div className="my-6">
                      <Contour />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </Portal>
  );
};

export default BlockMenu;
