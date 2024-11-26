import React from "react";
import Image from "next/image";
import Link from "next/link";

import ErrorBoundary from "@components/error-boundary";

interface Props {
  // handeInputImageClick: () => void;
  selectedImageUrl: string;
  connectingUrl?: string;
  title: string | null;
}

const ImageBox = ({ selectedImageUrl, connectingUrl, title }: Props) => {
  return (
    <div className={"overflow-hidden rounded shadow-lg"}>
      <div>
        {/*<button*/}
        {/*  onClick={handeInputImageClick}*/}
        {/*  className="absolute right-2 top-2 rounded-3xl bg-orange-600 p-2"*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    src="/assets/icons/icon_pencil.png"*/}
        {/*    alt="연필 아이콘"*/}
        {/*    width={24}*/}
        {/*    height={24}*/}
        {/*  />*/}
        {/*</button>*/}
        <Link
          href={connectingUrl || "#"}
          className={`${!connectingUrl && "cursor-default"}`}
          aria-disabled={!connectingUrl}
        >
          <div className="relative h-[20rem] w-full">
            <Image
              src={
                selectedImageUrl
                  ? selectedImageUrl
                  : "/assets/images/image_block_default.png"
              }
              alt={title ? `${title} 이미지` : "기본 이미지"}
              fill
            />
          </div>
        </Link>
      </div>
      {title && (
        <div
          className={"flex items-center justify-center py-2"}
          aria-label={`이미지 제목: ${title}`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default ImageBox;
