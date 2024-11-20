import React from "react";

import { Schedule } from "./types";

interface ListViewProps {
  schedules: Schedule[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
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
      description: `일정까지 ${diffDays}일 남았습니다.`,
    };
  } else if (now >= startDate && now <= endDate) {
    return {
      text: "OPEN",
      color: "bg-[var(--primary)] text-white",
      description: "일정이 열려 있습니다.",
    };
  } else {
    return {
      text: "CLOSED",
      color: "bg-[#BABABA] text-[#eae9e9]",
      description: "일정이 종료되었습니다.",
    };
  }
};

const ListView: React.FC<ListViewProps> = ({ schedules }) => {
  return (
    <section
      aria-labelledby="schedule-list"
      className="relative mt-4 space-y-0 rounded-lg bg-white p-4 shadow"
    >
      <div
        className="relative max-h-[400px] overflow-y-auto"
        role="region"
        aria-live="polite"
        aria-label="Scheduled Events"
      >
        <div className="ml-10 mt-5">
          {schedules.map((schedule, index) => {
            const status = getScheduleStatus(schedule, index);
            return (
              <div key={schedule.id} className="relative flex items-start pb-6">
                <div className="z-10 flex w-28 flex-shrink-0">
                  <div
                    className={`flex h-7 w-16 items-center justify-center rounded-l-md rounded-r-sm ${status.color}`}
                    role="status"
                    aria-live="polite"
                    aria-label={`일정 상태: ${status.text}`}
                  >
                    <span className="relative z-10 ml-2 text-xs font-semibold">
                      {status.text}
                    </span>
                    <span className="sr-only">{status.description}</span>
                  </div>
                  <div
                    className={`relative flex h-5 w-5 rounded-sm ${status.color.split(" ")[0]}`}
                    style={{
                      transform: "rotate(45deg)",
                      marginLeft: "-11px",
                      marginTop: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  />
                </div>

                <div className="relative flex-grow">
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
                    aria-label={schedule.title}
                  >
                    {schedule.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListView;
