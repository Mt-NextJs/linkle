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
      <div className="bg-text-444 absolute left-2 top-20 z-[9999] w-max -translate-x-1/2 -translate-y-1/2 transform rounded px-3 py-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        • 기본 정보와 공개 여부 값은 필수입니다. <br />• 예약 공개와 스티커는
        프로 기능입니다.
        <div className="border-r-text-444 absolute -top-3 left-1/2 z-[9999] h-0 w-0 rotate-90 border-y-8 border-r-8 border-y-transparent"></div>
      </div>
    </div>
  );
};

export default QuestionIcon;
