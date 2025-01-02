import React, { SetStateAction, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { blockTypes, TypeBlock } from "@/types/block_types";
import Portal from "@app/components/portal";
import Icons from "@app/profile/[userId]/components/icons";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const BlockMenu = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const setBlockType = (type: TypeBlock) => {
    const icon = <Icons type={type} />;
    const blockArr = [
      <div
        key={type}
        className="flex cursor-pointer items-start space-x-4 rounded-lg p-2 hover:bg-accent"
      >
        {icon}
        <div className="flex flex-col">
          <h3 className="font-medium">링크</h3>
          <p className="text-sm text-muted-foreground">
            연결하고 싶은 url은 무엇인가요
          </p>
        </div>
      </div>,
      <div
        key={type}
        className="flex cursor-pointer items-start space-x-4 rounded-lg p-2 hover:bg-accent"
      >
        {icon}
        <div className="flex flex-col">
          <h3 className="font-medium">텍스트</h3>
          <p className="text-sm text-muted-foreground">
            공유하고 싶은 글이 있다면 적어보세요
          </p>
        </div>
      </div>,
      <div
        key={type}
        className="flex cursor-pointer items-start space-x-4 rounded-lg p-2 hover:bg-accent"
      >
        {icon}
        <div className="flex flex-col">
          <h3 className="font-medium">이미지</h3>
          <p className="text-sm text-muted-foreground">
            보여주고 싶은 이미지로 표현하세요
          </p>
        </div>
      </div>,
      <div
        key={type}
        className="flex cursor-pointer items-start space-x-4 rounded-lg p-2 hover:bg-accent"
      >
        {icon}
        <div className="flex flex-col">
          <h3 className="font-medium">구분선</h3>
          <p className="text-sm text-muted-foreground">
            블록과 블록 사이를 구분할 수 있어요
          </p>
        </div>
      </div>,
      <div
        key={type}
        className="flex cursor-pointer items-start space-x-4 rounded-lg p-2 hover:bg-accent"
      >
        {icon}
        <div className="flex flex-col">
          <h3 className="font-medium">동영상</h3>
          <p className="text-sm text-muted-foreground">
            유튜브, 틱톡 등 동영상을 공유하세요
          </p>
        </div>
      </div>,
      <div
        key={type}
        className="flex cursor-pointer items-start space-x-4 rounded-lg p-2 hover:bg-accent"
      >
        {icon}
        <div className="flex flex-col">
          <h3 className="font-medium">이벤트</h3>
          <p className="text-sm text-muted-foreground">
            이벤트 응모부터, 추첨까지 진행해보세요
          </p>
        </div>
      </div>,
    ];
    return blockArr[type - 1];
  };

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
            {Object.keys(blockTypes).map((key, index) => {
              const item = blockTypes[(index + 1) as keyof typeof blockTypes];
              return (
                <li key={key}>
                  <Link
                    href={{
                      pathname: item.path,
                      query: { prevPath: pathname },
                    }}
                    as={item.path}
                    aria-label={`${item.title} 블록 선택`}
                  >
                    {setBlockType((index + 1) as TypeBlock)}
                  </Link>

                  {index !== Object.keys(blockTypes).length - 1 && (
                    <div className="my-4" />
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
