import React from "react";
import Image from "next/image";
import ErrorBoundary from "@app/intro/components/error-boundary";
import Link from "next/link";

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
          href={connectingUrl || ""}
          className={`${!connectingUrl && "cursor-default"}`}
        >
          <div className="relative h-[20rem] w-full">
            <Image
              src={
                selectedImageUrl
                  ? selectedImageUrl
                  : "/assets/images/image_block_default.png"
              }
              alt="이미지 URL을 확인해주세요"
              fill
            />
          </div>
        </Link>
      </div>
      {title && (
        <div className={"flex items-center justify-center py-2"}>{title}</div>
      )}
    </div>
  );
};

export default ImageBox;
