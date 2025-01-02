import React, { FormEvent, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import QuestionIcon from "@app/admin/(block)/components/question-icon";

const Layout = ({
  title,
  onSubmit,
  prevPath,
  children,
}: Readonly<{
  title: string;
  prevPath: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="flex w-full flex-col gap-6 px-20 py-4"
      aria-label="블록 추가 영역"
    >
      <div>
        <Link
          href={prevPath}
          role={"navigation"}
          aria-label={"뒤로가기 버튼입니다"}
        >
          <Image
            src="/assets/icons/icon_back.png"
            alt="뒤로가기 아이콘"
            width={34}
            height={34}
          />
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <h1 className="pageName" id="title" aria-label="추가할 블록의 제목">
          {title}
        </h1>
        <QuestionIcon
          title={title}
          aria-label={
            "마우스를 올려놓으면 블록 추가 영역에 대한 설명이 나옵니다"
          }
        />
      </div>
      <section aria-label={"블록 추가 영역입니다"}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {children}
        </form>
      </section>
    </div>
  );
};

export default Layout;
