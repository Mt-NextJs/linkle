"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import AddButton from "../../components/buttons/add-button";
import ButtonBox from "../../components/buttons/button-box";
import FormInput from "../../components/form-input";
import DateTimeInput from "./date-time-input";

interface Schedule {
  id?: number;
  title: string;
  url?: string;
  dateStart: string;
  dateEnd: string;
}

interface CalendarBlock {
  id?: number;
  type: number;
  sequence: number;
  style: number;
  schedule: Schedule[];
}

interface ScheduleFormProps {
  mode: "add" | "edit";
  initialData?: Schedule | null;
  calendarBlockId?: number | null;
  "aria-label"?: string;
}

export default function ScheduleForm({
  mode,
  initialData,
  calendarBlockId,
  "aria-label": ariaLabel,
}: ScheduleFormProps) {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [calendarBlock, setCalendarBlock] = useState<CalendarBlock | null>(
    null,
  );
  const router = useRouter();

  // 수정 모드에서 폼 초기값 설정
  useEffect(() => {
    if (mode === "edit" && initialData) {
      const startDateTime = new Date(initialData.dateStart);
      const endDateTime = new Date(initialData.dateEnd);

      setStartDate(startDateTime.toISOString().split("T")[0]);
      setStartTime(
        `${startDateTime.getUTCHours().toString().padStart(2, "0")}:${startDateTime.getUTCMinutes().toString().padStart(2, "0")}`,
      );
      setEndDate(endDateTime.toISOString().split("T")[0]);
      setEndTime(
        `${endDateTime.getUTCHours().toString().padStart(2, "0")}:${endDateTime.getUTCMinutes().toString().padStart(2, "0")}`,
      );
      setTitle(initialData.title);
      setUrl(initialData.url || "");
    }
  }, [mode, initialData]);

  // API에서 데이터 1회 호출
  useEffect(() => {
    const fetchCalendarBlock = async () => {
      if (mode === "edit") return;

      try {
        const response = await fetch("/api/link/list", {
          credentials: "include",
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.code === 200 && Array.isArray(data.data)) {
          const existingCalendarBlock = data.data.find(
            (item: CalendarBlock) => item.type === 7,
          );
          if (existingCalendarBlock) {
            setCalendarBlock(existingCalendarBlock);
          }
        }
      } catch (error) {
        console.error("Error fetching calendar block:", error);
      }
    };

    fetchCalendarBlock();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSchedule: Schedule = {
      ...(mode === "edit" && initialData?.id ? { id: initialData.id } : {}),
      title,
      url: url || undefined,
      dateStart: `${startDate}T${startTime}:00.000Z`,
      dateEnd: `${endDate}T${endTime}:00.000Z`,
    };

    try {
      const listResponse = await fetch("/api/link/list", {
        credentials: "include",
        method: "GET",
      });

      if (!listResponse.ok) {
        throw new Error("기존 일정을 불러오는데 실패했습니다.");
      }

      const listData = await listResponse.json();
      const existingCalendarBlock = listData.data.find(
        (item: CalendarBlock) => item.type === 7,
      );

      let requestBody;
      const blockId = mode === "edit" ? calendarBlockId : calendarBlock?.id;

      if (blockId) {
        let updatedSchedules;
        if (mode === "edit" && existingCalendarBlock) {
          updatedSchedules = existingCalendarBlock.schedule.map(
            (s: Schedule) => (s.id === initialData?.id ? newSchedule : s),
          );
        } else {
          updatedSchedules = [
            ...(existingCalendarBlock?.schedule || []),
            newSchedule,
          ];
        }

        requestBody = {
          id: blockId,
          type: 7,
          style: existingCalendarBlock?.style || 1,
          schedule: updatedSchedules,
        };
      } else {
        // 새로운 캘린더 블록 생성 및 일정 추가
        requestBody = {
          type: 7,
          style: 1,
          schedule: [newSchedule],
        };
      }

      const response = await fetch(`/api/link/${blockId ? "update" : "add"}`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(
          mode === "edit"
            ? "일정 수정에 실패했습니다."
            : "일정 추가에 실패했습니다.",
        );
      }

      const data = await response.json();
      if (data.code === 200) {
        alert(
          mode === "edit"
            ? "일정이 성공적으로 수정되었습니다."
            : "일정이 성공적으로 추가되었습니다.",
        );
        router.push("/admin/calendar");
      } else {
        throw new Error("서버 응답 오류");
      }
    } catch (error) {
      console.error(
        mode === "edit" ? "일정 수정 중 오류 발생" : "일정 추가 중 오류 발생",
        error,
      );
      alert(error instanceof Error ? error.message : "오류가 발생했습니다.");
    }
  };

  const timeOptions = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`,
  );

  const summitButtonDisabled =
    !startDate || !startTime || !endDate || !endTime || !title;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-8"
      aria-label={ariaLabel}
      role="form"
    >
      <div role="group" aria-label="일정 시간 설정">
        <DateTimeInput
          label="오픈 일시"
          dateValue={startDate}
          timeValue={startTime}
          onDateChange={setStartDate}
          onTimeChange={setStartTime}
          required
        />
        <DateTimeInput
          label="종료 일시"
          dateValue={endDate}
          timeValue={endTime}
          onDateChange={setEndDate}
          onTimeChange={setEndTime}
          minDate={startDate}
          required
        />
      </div>

      <div role="group" aria-label="일정 정보 입력">
        <FormInput
          label="일정 이름"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border border-gray-300 p-2 text-sm placeholder-gray-300 focus:border-[#FFCAB5] focus:outline-none focus:ring-[#FFCAB5]"
          placeholder="알리고 싶은 일정 내용이 잘 드러나면 좋아요"
          required
          aria-required="true"
        />
        <FormInput
          label="연결할 주소"
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="rounded-md border border-gray-300 p-2 text-sm placeholder-gray-300 focus:border-[#FFCAB5] focus:outline-none focus:ring-[#FFCAB5]"
          placeholder="일정에 관심 있을 때 이동시키고 싶은 링크가 있나요?"
          aria-required="false"
        />
      </div>

      <ButtonBox>
        <AddButton
          type="submit"
          text={mode === "edit" ? "수정 완료" : "추가 완료"}
          disabled={summitButtonDisabled}
          aria-disabled={summitButtonDisabled}
        />
      </ButtonBox>
    </form>
  );
}
