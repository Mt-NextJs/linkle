"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CalendarHeader() {
  const router = useRouter();

  const handleAddScheduleClick = () => {
    router.push("calendar/manage");
  };

  return (
    <>
      <p className="text-gray-700">
        진행/예정된 일정이 1개 이상이어야
        <br />
        캘린더 블록을 공개할 수 있습니다
      </p>
      <button
        onClick={handleAddScheduleClick}
        className="button color flex w-auto flex-row items-center justify-center rounded-lg text-white"
      >
        <Image
          src="/assets/icons/icon_plus.png"
          alt="Plus"
          width={20}
          height={20}
          className="mr-2"
        />
        <span>캘린더에 일정을 추가하세요</span>
      </button>
      <hr className="border-gray-105 -mt-2 border-t-8" />
    </>
  );
}
