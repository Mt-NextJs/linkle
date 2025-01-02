"use client";

import { useEffect, useState } from "react";

import { Schedule, ScheduleFormProps } from "@/types/user";

import AddButton from "../../components/buttons/add-button";
import ButtonBox from "../../components/buttons/button-box";
import FormInput from "../../components/form-input";
import DateTimeInput from "./date-time-input";
import { adminApiInstance } from "../../../../../utils/apis";

export default function ScheduleForm({
  mode,
  initialData,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSchedule: Schedule = {
      title,
      url: url || undefined,
      dateStart: `${startDate}T${startTime}:00.000Z`,
      dateEnd: `${endDate}T${endTime}:00.000Z`,
    };
    const blockApis = await adminApiInstance;
    const response = await blockApis.addSchedule(newSchedule);
    if (!response) return;
    if (response.ok) {
      alert("스케줄 추가 완료");
    } else await blockApis.handleResponseError(response);
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
      <div role="group" aria-label="일정 시간 설정" className="space-y-8">
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

      <div role="group" aria-label="일정 정보 입력" className="space-y-8">
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
