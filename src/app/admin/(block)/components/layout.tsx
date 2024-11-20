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
    <div className="flex w-full flex-col gap-6 px-20 py-4">
      <div>
        <Link href={prevPath}>
          <Image
            src="/assets/icons/icon_back.png"
            alt="뒤로가기 아이콘"
            width={34}
            height={34}
          />
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <h1 className="pageName">{title}</h1>
        <QuestionIcon title={title} />
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </div>
  );
};

export default Layout;
