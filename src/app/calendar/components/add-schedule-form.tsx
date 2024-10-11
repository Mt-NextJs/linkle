"use client";

import { useState } from "react";
import Image from "next/image";

export default function AddScheduleForm() {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ startDate, startTime, endDate, endTime, title, url });
  };

  const timeOptions = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`,
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="ml-2 mt-4 flex w-full max-w-2xl flex-col space-y-6 p-8"
    >
      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <span>오픈 일시</span>
          <span className="ml-1 text-red-500">*</span>
        </label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={startDate.split(". ").join("-")}
            onChange={(e) => setStartDate(e.target.value)}
            className={`min-w-[160px] flex-1 rounded-md p-2 ${
              startDate ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
            }`}
            required
          />
          <div className="relative flex min-w-[120px] flex-1 items-center rounded-md border border-gray-300">
            <div className="pl-2 pr-1">
              <Image
                src="/assets/icons/icon_clock.png"
                alt="Clock"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full appearance-none rounded-md border-0 bg-transparent p-2 focus:outline-none focus:ring-0"
              placeholder="시간"
              required
              readOnly
            />
            <div
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowStartTime(!showStartTime)}
            >
              <Image
                src="/assets/icons/icon_open.png"
                alt="Open"
                width={13}
                height={13}
              />
            </div>
            {showStartTime && (
              <div className="absolute left-0 top-full z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white shadow-lg">
                {timeOptions.map((time, i) => (
                  <div
                    key={i}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setStartTime(time);
                      setShowStartTime(false);
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <span>종료 일시</span>
          <span className="ml-1 text-red-500">*</span>
        </label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={endDate.split(". ").join("-")}
            onChange={(e) => setEndDate(e.target.value)}
            className={`min-w-[120px] flex-1 rounded-md p-2 ${
              endDate ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
            }`}
            required
          />
          <div className="relative flex min-w-[120px] flex-1 items-center rounded-md border border-gray-300">
            <div className="pl-2 pr-1">
              <Image
                src="/assets/icons/icon_clock.png"
                alt="Clock"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full appearance-none rounded-md border-0 bg-transparent p-2 focus:outline-none focus:ring-0"
              placeholder="시간"
              required
              readOnly
            />
            <div
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowEndTime(!showEndTime)}
            >
              <Image
                src="/assets/icons/icon_open.png"
                alt="Open"
                width={13}
                height={13}
              />
            </div>
            {showEndTime && (
              <div className="absolute left-0 top-full z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white shadow-lg">
                {timeOptions.map((time, i) => (
                  <div
                    key={i}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setEndTime(time);
                      setShowEndTime(false);
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <span>일정 이름</span>
          <span className="ml-1 text-red-500">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border border-gray-300 p-2 text-sm placeholder-gray-300 focus:border-[#FFCAB5] focus:outline-none focus:ring-[#FFCAB5]"
          placeholder="알리고 싶은 일정 내용이 잘 드러나면 좋아요"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label>연결할 주소</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="rounded-md border border-gray-300 p-2 text-sm placeholder-gray-300 focus:border-[#FFCAB5] focus:outline-none focus:ring-[#FFCAB5]"
          placeholder="일정에 관심 있을 때 이동시키고 싶은 링크가 있나요?"
        />
      </div>

      <div>
        <button
          type="submit"
          style={{ backgroundColor: "#FFF1ED", color: "#FFB092" }}
          className="button color w-full rounded-md px-4 py-2 text-white hover:bg-blue-600"
        >
          추가 완료
        </button>
      </div>
    </form>
  );
}
