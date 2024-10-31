import React from "react";
import Image from "next/image";
import ErrorBoundary from "@app/intro/components/error-boundary";

interface Props {
  // handeInputImageClick: () => void;
  selectedImageUrl: string;
}

const ImageBox = ({ selectedImageUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded shadow-lg">
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
      <div className="h-[40rem] w-[30rem]">
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
    </div>
  );
};

export default ImageBox;
