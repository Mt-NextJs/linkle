import React from "react";
import Image from "next/image";

interface Props {
  title: string;
}
const QuestionIcon = ({ title }: Props) => {
  if (title !== "링크 블록") return;
  return (
    <div className="group relative inline-block">
      <Image
        src="/assets/icons/icon_help.png"
        alt="question"
        width={30}
        height={30}
      />
      <div className="absolute left-2 top-20 hidden w-max -translate-x-1/2 -translate-y-1/2 transform rounded bg-[#343434] px-3 py-3 text-sm text-white group-hover:block group-hover:animate-insideout">
        • 기본 정보와 공개 여부 값은 필수입니다. <br />• 예약 공개와 스티커는
        프로 기능입니다.
        <div className="absolute -top-3 left-1/2 h-0 w-0 rotate-90 border-y-8 border-r-8 border-y-transparent border-r-[#343434]"></div>
      </div>
    </div>
  );
};

export default QuestionIcon;
