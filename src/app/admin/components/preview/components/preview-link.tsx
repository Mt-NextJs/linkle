import React from "react";
import { Block } from "@app/admin/page";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  block: Block;
}
const PreviewLink = ({ block }: Props) => {
  const pathname = usePathname();
  const iaMain = pathname === "/main";
  const { url, title, imgUrl } = block;

  return (
    <div
      className={
        "relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg shadow-lg"
      }
    >
      <Link
        href={iaMain ? url : ""}
        className={`${!iaMain && "cursor-default"}`}
      >
        <div
          className={`absolute left-0 top-0 z-[999] h-full w-full opacity-50 ${imgUrl ? "bg-black" : "bg-slate-333"}`}
        ></div>
      </Link>

      {imgUrl ? (
        <Image src={imgUrl} alt={title || "링크 이미지입니다"} fill />
      ) : (
        <span />
      )}
      <div
        className={`z-[9999] cursor-default ${imgUrl ? "text-slate-ccc" : "text-slate-444"}`}
      >
        {title || "링크 이동"}
      </div>
    </div>
  );
};

export default PreviewLink;
