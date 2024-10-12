"use client";

import React, { useState } from "react";
import Image from "next/image";
import CalendarView from "./calendar-view";
import ListView from "./list-view";

const sampleSchedules = [
  {
    id: "1",
    title: "[SAMPLE] 첫 번째 일정 예시",
    startDate: "2023-01-02T00:00:00.000Z",
    endDate: "2023-01-06T01:00:00.000Z",
  },
  {
    id: "2",
    title: "[SAMPLE] 두 번째 일정 예시",
    startDate: "2023-01-05T06:00:00.000Z",
    endDate: "2023-01-10T01:00:00.000Z",
  },
  {
    id: "3",
    title: "[SAMPLE] 세 번째 일정 예시",
    startDate: "2023-01-10T02:00:00.000Z",
    endDate: "2023-01-13T04:00:00.000Z",
  },
];

export default function StyleSetting() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeView, setActiveView] = useState<"list" | "calendar">("list");

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full max-w-4xl flex-col px-14 py-0">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">스타일 설정</h2>
        <button onClick={toggleOpen} className="cursor-pointer">
          <Image
            src={
              isOpen
                ? "/assets/icons/icon_up.png"
                : "/assets/icons/icon_down.png"
            }
            alt={isOpen ? "접기" : "펼치기"}
            width={20}
            height={20}
          />
        </button>
      </div>
      {isOpen && (
        <div className="p-4">
          <div className="mb-4 flex space-x-8">
            <label className="flex items-center">
              <input
                type="radio"
                checked={activeView === "list"}
                onChange={() => setActiveView("list")}
                className="form-radio h-5 w-5 border-gray-300 text-gray-400 focus:ring-gray-400"
              />
              <span className="ml-2 text-gray-400">리스트뷰</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={activeView === "calendar"}
                onChange={() => setActiveView("calendar")}
                className="form-radio h-5 w-5 border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-400">캘린더뷰</span>
            </label>
          </div>
          {activeView === "list" ? (
            <ListView schedules={sampleSchedules} />
          ) : (
            <CalendarView schedules={sampleSchedules} />
          )}
        </div>
      )}
      <hr className="border-gray-105 ml-2 mr-2 mt-2 border-t-2" />
    </div>
  );
}
