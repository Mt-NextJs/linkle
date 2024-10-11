import React from "react";
import Image from "next/image";

const BlockModal = ({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full flex-col gap-4 px-20 py-4">
      <Image
        src="/assets/icons/icon_close.png"
        alt="닫기 아이콘"
        width={24}
        height={24}
      />
      <h1>{title}</h1>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default BlockModal;
