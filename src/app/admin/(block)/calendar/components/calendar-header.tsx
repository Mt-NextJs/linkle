"use client";
import Link from "next/link";
import Image from "next/image";
import { ClientRoute } from "@config/route";
import { useRouter } from "next/navigation";

export default function CalendarHeader() {
  const router = useRouter();

  const handleAddScheduleClick = () => {
    router.push("calendar/manage");
  };

  return (
    <div className="mt-4 flex w-full max-w-4xl flex-col p-8 pb-2">
      <Link href={ClientRoute.MAIN} className="mb-6 ml-10 mr-4">
        <Image
          src="/assets/icons/icon_back.png"
          alt="Back"
          width={40}
          height={40}
        />
      </Link>
      <h1 className="mb-8 ml-10 mr-4 text-2xl font-semibold">캘린더 블록</h1>
      <p className="ml-10 mr-4 text-gray-700">
        진행/예정된 일정이 1개 이상이어야
        <br />
        캘린더 블록을 공개할 수 있습니다
      </p>
      <button
        onClick={handleAddScheduleClick}
        className="button color ml-10 mr-10 flex w-auto flex-row items-center justify-center rounded-lg text-white"
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
      <hr className="border-gray-105 -mt-2 ml-8 mr-8 border-t-8" />
    </div>
  );
}
