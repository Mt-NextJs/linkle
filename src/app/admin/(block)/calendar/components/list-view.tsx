import React from "react";
import { Schedule } from "./types";

interface ListViewProps {
  schedules: Schedule[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = date.getHours();
  const ampm = hour >= 12 ? "오후" : "오전";
  const hour12 = hour % 12 || 12;
  return `${month}.${day} (${ampm} ${hour12}시)`;
};

const getScheduleStatus = (schedule: Schedule, index: number) => {
  if (["1", "2", "3"].includes(String(schedule.id))) {
    if (index === 0) {
      return {
        text: "OPEN",
        color: "bg-[var(--primary)] text-white",
      };
    } else if (index === 1) {
      return {
        text: "D-3",
        color: "bg-gray-200 text-[var(--primary)]",
      };
    } else {
      return {
        text: "SOON",
        color: "bg-gray-200 text-[var(--primary)]",
      };
    }
  }

  const startDate = new Date(schedule.startDate);
  const endDate = new Date(schedule.endDate);
  const now = new Date();

  if (now < startDate) {
    const diffDays = Math.ceil(
      (startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    );
    return {
      text: `D-${diffDays}`,
      color: "bg-gray-200 text-[var(--primary)]",
    };
  } else if (now >= startDate && now <= endDate) {
    return {
      text: "OPEN",
      color: "bg-[var(--primary)] text-white",
    };
  } else {
    return {
      text: "CLOSED",
      color: "bg-[#BABABA] text-[#eae9e9]",
    };
  }
};

const ListView: React.FC<ListViewProps> = ({ schedules }) => {
  const handleClick = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="relative mt-4 space-y-0 rounded-lg bg-white p-4 shadow">
      <div className="relative max-h-[400px] overflow-y-auto">
        <div className="ml-10 mt-5">
          <div className="pr-4 [&::-webkit-scrollbar]:hidden">
            {schedules.map((schedule, index) => {
              const status = getScheduleStatus(schedule, index);
              const hasUrl = Boolean(schedule.url);
              return (
                <div
                  key={schedule.id}
                  className={`relative flex items-start pb-6 ${
                    hasUrl ? "cursor-pointer hover:text-[var(--primary)]" : ""
                  }`}
                  onClick={() => hasUrl && handleClick(schedule.url!)}
                >
                  <div className="z-10 w-24 flex-shrink-0">
                    <span
                      className={`inline-block w-20 rounded-full px-3 py-1 text-center text-xs font-semibold ${status.color}`}
                    >
                      {status.text}
                    </span>
                  </div>
                  <div className="relative ml-4 flex-grow">
                    <div className="absolute -left-[1.2rem] top-[0.8rem] h-16 w-1 bg-gray-200"></div>
                    <div className="absolute -left-[1.25rem] top-2 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <p className="mb-1 text-sm text-gray-500">
                      {formatDate(schedule.startDate)} ~{" "}
                      {formatDate(schedule.endDate)}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      {schedule.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
