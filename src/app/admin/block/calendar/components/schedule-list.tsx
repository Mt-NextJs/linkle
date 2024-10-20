import Image from "next/image";
import { useState } from "react";

interface Schedule {
  id: number;
  title: string;
  url: string;
  dateStart: string;
  dateEnd: string;
}

const scheduleData: Schedule[] = [
  {
    id: 1,
    title: "일정 1",
    url: "https://naver.com/",
    dateStart: "2024-10-01T12:26:44.000Z",
    dateEnd: "2024-10-02T12:26:44.000Z",
  },
  {
    id: 2,
    title: "일정 2",
    url: "https://google.com/",
    dateStart: "2024-10-01T09:00:00.000Z",
    dateEnd: "2024-11-30T18:00:00.000Z",
  },
  {
    id: 3,
    title: "일정 3",
    url: "https://github.com/",
    dateStart: "2024-12-01T08:00:00.000Z",
    dateEnd: "2024-12-31T17:00:00.000Z",
  },
  {
    id: 4,
    title: "일정 4",
    url: "https://microsoft.com/",
    dateStart: "2025-01-01T10:00:00.000Z",
    dateEnd: "2025-01-31T16:00:00.000Z",
  },
  {
    id: 5,
    title: "일정 5",
    url: "https://apple.com/",
    dateStart: "2025-02-01T11:00:00.000Z",
    dateEnd: "2025-02-28T15:00:00.000Z",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const ampm = hour >= 12 ? "오후" : "오전";
  const hour12 = hour % 12 || 12;
  return `${month}.${day} (${ampm} ${hour12}시)`;
};

const getScheduleStatus = (schedule: Schedule) => {
  const startDate = new Date(schedule.dateStart);
  const endDate = new Date(schedule.dateEnd);
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
    return { text: "CLOSED", color: "bg-[#BABABA] text-[#eae9e9]" };
  }
};

function ScheduleItem({ schedule }: { schedule: Schedule }) {
  const status = getScheduleStatus(schedule);

  return (
    <div>
      <div className="flex items-center rounded-lg p-4">
        <div
          className={`${status.color} mb-6 mr-4 w-20 rounded-full px-3 py-1 text-center text-xs font-semibold`}
        >
          {status.text}
        </div>
        <div className="flex-grow">
          <div className="text-sm text-gray-500">
            {formatDate(schedule.dateStart)} ~ {formatDate(schedule.dateEnd)}
          </div>
          <div className="mt-2 font-semibold">{schedule.title}</div>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold">
            수정
          </button>
          <button className="rounded-lg bg-[var(--primary-100)] px-3 py-2 text-sm font-semibold text-[var(--primary)]">
            삭제
          </button>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-200" />
    </div>
  );
}

export default function ScheduleList() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"current" | "past">("current");
  const toggleOpen = () => setIsOpen(!isOpen);

  const currentDate = new Date();

  const filteredSchedules = scheduleData.filter((schedule) => {
    const endDate = new Date(schedule.dateEnd);
    return activeTab === "current"
      ? endDate >= currentDate
      : endDate < currentDate;
  });

  return (
    <div className="flex w-full max-w-4xl flex-col px-14 py-0">
      <div className="mt-4 flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">추가한 모든 일정</h2>
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
            layout="fixed"
          />
        </button>
      </div>
      {isOpen && (
        <div className="p-4">
          <div className="mb-4 flex border-b">
            <button
              className={`mx-4 ${
                activeTab === "current"
                  ? "border-b-2 border-[var(--primary)] font-semibold text-[var(--primary)]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("current")}
            >
              진행/예정된
            </button>
            <button
              className={`mx-4 py-2 ${
                activeTab === "past"
                  ? "border-b-2 border-[var(--primary)] font-semibold text-[var(--primary)]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("past")}
            >
              지난
            </button>
          </div>
          <div className="space-y-4">
            {filteredSchedules.map((schedule) => (
              <ScheduleItem key={schedule.id} schedule={schedule} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
