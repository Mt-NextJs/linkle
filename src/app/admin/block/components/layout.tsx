"use client";
import React, { FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Layout = ({
  title,
  onSubmit,
  children,
}: Readonly<{
  title: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-6 px-20 py-4">
      <div>
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/assets/icons/icon_back.png"
            alt="뒤로가기 아이콘"
            width={34}
            height={34}
          />
        </button>
      </div>
      <div className="flex items-center gap-1">
        <h1 className="pageName">{title}</h1>
        <div className="group relative inline-block">
          <Image
            src="/assets/icons/icon_help.png"
            alt="question"
            width={30}
            height={30}
          />
          {title === "링크 블록" && (
            <div className="absolute left-[11px] top-20 w-max -translate-x-1/2 -translate-y-1/2 transform rounded bg-[#343434] px-3 py-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              • 기본 정보와 공개 여부 값은 필수입니다. <br />• 예약 공개와
              스티커는 프로 기능입니다.
              <div className="absolute -top-3 left-1/2 h-0 w-0 rotate-90 border-y-8 border-r-8 border-y-transparent border-r-[#343434]"></div>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </div>
  );
};

export default Layout;
