import Image from "next/image";
import { useState, useEffect } from "react";

interface Schedule {
  id: number;
  title: string;
  url: string;
  dateStart: string;
  dateEnd: string;
}

interface CalendarBlock {
  id: number;
  type: number;
  sequence: number;
  style: number;
  schedule: Schedule[];
}

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
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [calendarBlock, setCalendarBlock] = useState<CalendarBlock | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    setError(null);
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("로그인이 필요합니다.");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.code === 200 && Array.isArray(data.data)) {
        const foundCalendarBlock = data.data.find(
          (item: CalendarBlock) => item.type === 7,
        );

        if (foundCalendarBlock) {
          setCalendarBlock(foundCalendarBlock);
          if (Array.isArray(foundCalendarBlock.schedule)) {
            setSchedules(foundCalendarBlock.schedule);
          } else {
            setSchedules([]);
          }
        } else {
          setSchedules([]);
        }
      } else {
        throw new Error(`Unexpected data structure: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error("Error fetching schedules:", error);
      setError(
        error instanceof Error
          ? error.message
          : "알 수 없는 오류가 발생했습니다.",
      );
    }
  };

  const currentDate = new Date();

  const filteredSchedules = schedules.filter((schedule) => {
    const endDate = new Date(schedule.dateEnd);
    return activeTab === "current"
      ? endDate >= currentDate
      : endDate < currentDate;
  });

  if (error) return <div>오류 발생: {error}</div>;

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
              className={`mx-4 py-2 ${
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
