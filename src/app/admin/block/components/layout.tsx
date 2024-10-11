"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Layout = ({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-4 px-20 py-4">
      <button onClick={() => router.back()}>
        <Image
          src="/assets/icons/icon_back.png"
          alt="뒤로가기 아이콘"
          width={34}
          height={34}
        />
      </button>
      <h1>{title}</h1>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default Layout;
