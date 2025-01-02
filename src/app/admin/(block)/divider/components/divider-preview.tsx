import React from "react";
import Image from "next/image";

import { DividerType } from "../../divider/types";

interface DividerPreviewProps {
  selectedDivider: DividerType;
}

interface DividerContentProps {
  type: DividerType;
}

export const DividerContent = ({ type }: DividerContentProps) => {
  const commonClasses = "flex h-12 items-center justify-center";

  switch (type) {
    case "Space":
      return (
        <div
          className={commonClasses}
          role="separator"
          aria-label="공백 구분선"
        />
      );
    case "Point":
      return (
        <div className={commonClasses} role="separator" aria-label="점 구분선">
          · · ·
        </div>
      );
    case "Zigzag":
      return (
        <div
          className={commonClasses}
          role="separator"
          aria-label="지그재그 구분선"
        >
          <Image
            src="/assets/icons/item_zigzag.png"
            alt="지그재그 모양 구분선"
            width={70}
            height={5}
            className="dark:invert"
          />
        </div>
      );
    case "Dashed":
    case "Solid":
      return (
        <div
          className={commonClasses}
          role="separator"
          aria-label={`${type === "Dashed" ? "점선" : "실선"} 구분선`}
        >
          <div
            className={`w-full border-t ${
              type === "Dashed" ? "border-dashed" : "border-solid"
            }`}
          />
        </div>
      );
  }
};

interface TagProps {
  text: string;
  bgColor: string;
  textColor?: string;
}

const Tag = ({ text, bgColor, textColor }: TagProps) => (
  <span
    className="rounded-full px-2.5 py-1 text-[10px] font-bold"
    style={{
      backgroundColor: bgColor,
      color: textColor || "inherit",
    }}
  >
    {text}
  </span>
);

const DividerPreview = ({ selectedDivider }: DividerPreviewProps) => {
  return (
    <div className="mb-4 space-y-2">
      <h3 className="text-[14px]">
        미리보기
        <span className="text-[12px] font-normal text-gray-700 dark:text-gray-400">
          (예시 블록입니다)
        </span>
      </h3>
      <div className="bg-gray-100 p-5 dark:bg-gray-800">
        <div className="mx-auto max-w-[370px] rounded-t-3xl bg-white pl-3 pr-3 pt-3 dark:bg-gray-900">
          <div className="overflow-hidden rounded-t-3xl border-l border-r border-t pl-3 pr-3 dark:border-gray-700">
            <div
              className="flex items-start space-x-3 rounded-b-xl pb-1"
              style={{ boxShadow: "0 4px 6px rgba(150, 150, 150, 0.1)" }}
            >
              <div className="relative ml-2 h-16 w-20 -translate-y-1">
                <Image
                  src={"/assets/images/divider_preview_image.png"}
                  alt="미리보기 예시 프로필 이미지"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-b-xl"
                />
              </div>
              <div className="mt-0.5 flex flex-wrap justify-center">
                <div
                  className="mb-1 flex flex-wrap items-center gap-1"
                  aria-label="미리보기 예시 태그 목록"
                >
                  <Tag text="Last" bgColor="#E0D4C3" textColor="black" />
                  <Tag text="summer" bgColor="#BFD0A6" textColor="white" />
                  <Tag text="🌻" bgColor="#DEDEDE" />
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  ♥ 러브의 의류 마켓 ♥
                </p>
              </div>
            </div>
            <DividerContent type={selectedDivider} />
            <p
              className="flex flex-wrap justify-center rounded-t-xl pt-7 text-sm text-gray-600 dark:text-gray-400"
              style={{ boxShadow: "0 -4px 6px rgba(150, 150, 150, 0.1)" }}
            >
              [vlog] 여름 휴가 in 제주도🌴 | LOOK BOOK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividerPreview;
