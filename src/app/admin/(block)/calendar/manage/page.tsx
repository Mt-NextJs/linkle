"use client";

import React, { useEffect, useState, Suspense } from "react";
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
  return (
    <Suspense
      fallback={
        <div role="status" aria-label="페이지 로딩 중...">
          Loading...
        </div>
      }
    >
      <ScheduleContent />
    </Suspense>
  );
}

function ScheduleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "add";
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [calendarBlockId, setCalendarBlockId] = useState<number | null>(null);

  const handleClose = () => {
    router.push("/admin/calendar");
  };

  useEffect(() => {
    if (mode === "edit") {
      const fetchSchedule = async () => {
        const scheduleId = searchParams.get("id");

        if (!scheduleId) {
          alert("일정 ID가 필요합니다.");
          router.push("/admin/calendar");
          return;
        }

        try {
          const response = await fetch("/api/link/list", {
            credentials: "include",
            method: "POST",
          });

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
          router.push("/admin/calendar");
        }
      };

      fetchSchedule();
    }
  }, [mode, router, searchParams]);

  return (
    <div className="flex w-full flex-col gap-6 px-20 py-4">
      <div>
        <button
          type="button"
          onClick={handleClose}
          aria-label="이전 페이지로 돌아가기"
        >
          <Image
            src="/assets/icons/icon_close.png"
            alt=""
            width={34}
            height={34}
            aria-hidden="true"
          />
        </button>
      </div>

      <h1 className="pageName">
        {mode === "edit" ? "일정 수정하기" : "일정 추가하기"}
      </h1>

      <p className="text-gray-700" aria-label="일정 자동 정렬 안내">
        입력하는 진행기간에 따라
        <br />
        전체 일정이 최근 날짜 순서로 자동 정렬됩니다.
      </p>

      <ScheduleForm
        mode={mode as "add" | "edit"}
        initialData={schedule}
        calendarBlockId={calendarBlockId}
        aria-label={`일정 ${mode === "edit" ? "수정" : "추가"} 폼`}
      />
    </div>
  );
}
