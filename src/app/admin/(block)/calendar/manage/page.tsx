"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ScheduleForm from "../components/schedule-form";

interface Schedule {
  id?: number;
  title: string;
  url?: string;
  dateStart: string;
  dateEnd: string;
}

interface CalendarBlockData {
  type: number;
  id: number;
  schedule: Schedule[];
}

export default function ScheduleManagementPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "add";
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [calendarBlockId, setCalendarBlockId] = useState<number | null>(null);

  const handleClose = () => {
    router.push("/admin/block/calendar");
  };

  useEffect(() => {
    if (mode === "edit") {
      const fetchSchedule = async () => {
        const scheduleId = searchParams.get("id");

        if (!scheduleId) {
          alert("일정 ID가 필요합니다.");
          router.push("/admin/block/calendar");
          return;
        }

        try {
          const token = sessionStorage.getItem("token");
          if (!token) throw new Error("로그인이 필요합니다.");

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/link/list`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          if (!response.ok)
            throw new Error("데이터를 불러오는데 실패했습니다.");

          const data = await response.json();
          if (data.code === 200 && Array.isArray(data.data)) {
            const calendarBlock = data.data.find(
              (block: CalendarBlockData) => block.type === 7,
            );
            if (calendarBlock) {
              const foundSchedule = calendarBlock.schedule.find(
                (s: Schedule) => s.id === Number(scheduleId),
              );
              if (foundSchedule) {
                setSchedule(foundSchedule);
                setCalendarBlockId(calendarBlock.id);
              }
            }
          }
        } catch (error) {
          console.error("Error fetching schedule:", error);
          alert("일정을 불러오는데 실패했습니다.");
          router.push("/admin/block/calendar");
        }
      };

      fetchSchedule();
    }
  }, [mode, router, searchParams]);

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
      <h1 className="mb-8 ml-10 mr-4 text-2xl font-semibold">
        {mode === "edit" ? "일정 수정하기" : "일정 추가하기"}
      </h1>
      <p className="ml-10 mr-4 text-gray-700">
        입력하는 진행기간에 따라
        <br />
        전체 일정이 최근 날짜 순서로 자동 정렬됩니다.
      </p>
      <ScheduleForm
        mode={mode as "add" | "edit"}
        initialData={schedule}
        calendarBlockId={calendarBlockId}
      />
    </div>
  );
}
