import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Schedule } from "@/types/user";

import CalendarView from "./calendar-view";
import ListView from "./list-view";

const sampleSchedules: Schedule[] = [
  {
    id: 1,
    title: "[SAMPLE] 첫 번째 일정 예시",
    dateStart: "2023-01-02T00:00:00.000Z",
    dateEnd: "2023-01-06T01:00:00.000Z",
  },
  {
    id: 2,
    title: "[SAMPLE] 두 번째 일정 예시",
    dateStart: "2023-01-02T00:00:00.000Z",
    dateEnd: "2023-01-06T01:00:00.000Z",
  },
  {
    id: 3,
    title: "[SAMPLE] 세 번째 일정 예시",
    dateStart: "2023-01-02T00:00:00.000Z",
    dateEnd: "2023-01-06T01:00:00.000Z",
  },
];

interface Props {
  schedules: Schedule[];
}
const ViewToggleButton = ({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) => (
  <button
    className="flex cursor-pointer items-center"
    role="button"
    tabIndex={0}
    onClick={onClick}
    aria-pressed={isActive ? "true" : "false"}
    aria-label={label}
  >
    <div
      className="relative mr-2 flex h-6 w-6 items-center justify-center rounded-full border-[3px] transition-all duration-200 ease-in-out hover:opacity-80"
      style={{
        borderColor: isActive ? "var(--primary)" : "#cacccf",
      }}
    >
      {isActive && (
        <div
          className={`aspect-square h-3 w-3 transform rounded-full transition-all duration-200 ease-in-out ${
            isActive ? "animate-scaleIn" : "animate-scaleOut"
          }`}
          style={{
            backgroundColor: "var(--primary)",
            opacity: isActive ? 1 : 0,
          }}
        />
      )}
    </div>
    <span>{label}</span>
  </button>
);

export default function StyleSetting({ schedules }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeView, setActiveView] = useState<"list" | "calendar">("list");
  const [hasUserSchedules, setHasUserSchedules] = useState(false);

  useEffect(() => {
    if (schedules.length !== 0) setHasUserSchedules(true);
    else setHasUserSchedules(false);
  }, [schedules]);

  const toggleOpen = () => setIsOpen(!isOpen);
  console.log(schedules, "schedules");

  const currentSchedules = hasUserSchedules ? schedules : sampleSchedules;

  return (
    <section className="flex w-full max-w-4xl flex-col">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold" id="style-setting-title">
          스타일 설정
        </h2>
        <button
          onClick={toggleOpen}
          className="cursor-pointer rounded bg-orange-600"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="schedule-section"
          aria-label={isOpen ? "일정 숨기기" : "일정 보기"}
          role="button"
        >
          <Image
            src={
              isOpen
                ? "/assets/icons/icon_up.png"
                : "/assets/icons/icon_down.png"
            }
            alt={isOpen ? "일정 접기" : "일정 펼치기"}
            width={20}
            height={20}
          />
        </button>
      </div>
      {isOpen && (
        <div
          className="duration-2000 transform p-4 transition-transform"
          id="schedule-section"
        >
          <div className="mb-4 flex gap-8">
            <ViewToggleButton
              isActive={activeView === "list"}
              onClick={() => setActiveView("list")}
              label="리스트뷰"
            />
            <ViewToggleButton
              isActive={activeView === "calendar"}
              onClick={() => setActiveView("calendar")}
              label="캘린더뷰"
            />
          </div>
          {activeView === "list" ? (
            <ListView schedules={currentSchedules} />
          ) : (
            <CalendarView schedules={currentSchedules} />
          )}
        </div>
      )}
      <hr className="border-gray-105 ml-2 mr-2 mt-2 border-t-2" />
    </section>
  );
}
