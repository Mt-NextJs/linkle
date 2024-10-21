import React from "react";
import Image from "next/image";
import ErrorBoundary from "@app/(intro)/components/error-boundary";

interface Props {
  handeInputImageClick: () => void;
  selectedImageUrl: string;
}

const ImageBox = ({ handeInputImageClick, selectedImageUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded">
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
      <ErrorBoundary
        fallback={
          <Image
            src={"/assets/images/image_block_default.png"}
            alt="기본이미지 혹은 선택한 이미지"
            width={610}
            height={610}
          />
        }
      >
        <Image
          src={
            selectedImageUrl
              ? selectedImageUrl
              : "/assets/images/image_block_default.png"
          }
          alt="기본이미지 혹은 선택한 이미지"
          width={610}
          height={610}
        />
      </ErrorBoundary>
    </div>
  );
};

export default ImageBox;
