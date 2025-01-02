import React from "react";
import Image from "next/image";
import Link from "next/link";

import ErrorBoundary from "@components/error-boundary";

interface Props {
  selectedImageUrl: string;
  connectingUrl?: string;
  title: string | null;
}

const ImageBox = ({ selectedImageUrl, connectingUrl, title }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div>
        <Link
          href={connectingUrl || "#"}
          className={`${!connectingUrl && "cursor-default"}`}
          aria-disabled={!connectingUrl}
        >
          <div className="relative aspect-[16/9] w-full bg-neutral-200 dark:bg-neutral-800">
            <Image
              src={
                selectedImageUrl
                  ? selectedImageUrl
                  : "/assets/images/image_block_default.png"
              }
              alt={title ? `${title} 이미지` : "기본 이미지"}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 90vw,
                   80vw"
            />
          </div>
        </Link>
      </div>
      {title && (
        <div
          className="flex items-center justify-center border-t border-neutral-200 px-3 py-2 text-center dark:border-neutral-700"
          aria-label={`이미지 제목: ${title}`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default ImageBox;
