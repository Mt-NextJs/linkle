"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function StyleSetting() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeView, setActiveView] = useState<"list" | "calendar">("list");

  const toggleOpen = () => setIsOpen(!isOpen);

  const renderListViewExample = () => (
    <div className="relative mt-4 space-y-0 rounded-lg bg-white p-4 shadow">
      <div className="ml-10">
        <div
          className="absolute bottom-4 left-[9.35rem] top-6 bg-gray-200"
          style={{ width: "3px" }}
        ></div>
        <div className="relative flex items-start pb-8">
          <div className="z-10 w-24 flex-shrink-0">
            <span className="inline-block w-20 rounded-full bg-orange-500 px-3 py-1 text-center text-xs font-semibold text-white">
              OPEN
            </span>
          </div>
          <div className="relative ml-4">
            <div className="absolute -left-[1.25rem] top-2 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
            <p className="mb-1 text-sm text-gray-500">
              01.02(오전 9시) ~ 01.06(오전 10시)
            </p>
            <p
              className="text-sm font-semibold"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              [SAMPLE] 첫 번째 일정 예시
            </p>
          </div>
        </div>
        <div className="relative flex items-start pb-8">
          <div className="z-10 w-24 flex-shrink-0">
            <span
              className="inline-block w-20 rounded-full bg-gray-200 px-3 py-1 text-center text-xs font-semibold"
              style={{
                color: "var(--primary)",
              }}
            >
              D-3
            </span>
          </div>
          <div className="relative ml-4">
            <div className="absolute -left-[1.25rem] top-2 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
            <p className="mb-1 text-sm text-gray-500">
              01.05(오후 3시) ~ 01.10(오전 10시)
            </p>
            <p
              className="text-sm font-semibold"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              [SAMPLE] 두 번째 일정 예시
            </p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="z-10 w-24 flex-shrink-0">
            <span
              className="inline-block w-20 rounded-full bg-gray-200 px-3 py-1 text-center text-xs font-semibold"
              style={{
                color: "var(--primary)",
              }}
            >
              SOON
            </span>
          </div>
          <div className="relative ml-4">
            <div className="absolute -left-[1.25rem] top-2 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
            <p className="mb-1 text-sm text-gray-500">
              01.10(오전 11시) ~ 01.13(오후 1시)
            </p>
            <p
              className="text-sm font-semibold"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              [SAMPLE] 세 번째 일정 예시
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCalendarViewExample = () => (
    <div className="mt-4 overflow-hidden rounded-lg border border-gray-300">
      calendar
    </div>
  );

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
          {activeView === "list"
            ? renderListViewExample()
            : renderCalendarViewExample()}
        </div>
      )}
    </div>
  );
}
