"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ScheduleForm from "../components/schedule-form";

export default function AddSchedulePage() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/admin/block/calendar");
  };

  return (
    <div className="mt-4 flex w-full max-w-4xl flex-col p-8">
      <div className="ml-10">
        <button onClick={handleClose} className="mb-6 mr-4">
          <Image
            src="/assets/icons/icon_close.png"
            alt="Close"
            width={30}
            height={30}
          />
        </button>
      </div>
      <h1 className="mb-8 ml-10 mr-4 text-2xl font-semibold">일정 추가하기</h1>
      <p className="ml-10 mr-4 text-gray-700">
        입력하는 진행기간에 따라
        <br />
        전체 일정이 최근 날짜 순서로 자동 정렬됩니다.
      </p>
      <ScheduleForm />
    </div>
  );
}
