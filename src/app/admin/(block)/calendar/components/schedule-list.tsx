import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCalendarXFill } from "react-icons/bs";

export interface Schedule {
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
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
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

function EmptyState({ message }: { message: React.ReactNode }) {
  return (
    <div className="mx-4 my-8 flex flex-col items-center justify-center rounded-lg bg-gray-100 py-32">
      <BsCalendarXFill className="mb-4 text-4xl text-gray-300" />
      <p className="text-center text-gray-500">{message}</p>
    </div>
  );
}

export function ScheduleItem({
  schedule,
  onDelete,
}: {
  schedule: Schedule;
  onDelete?: (id: number) => void;
}) {
  const router = useRouter();
  const status = getScheduleStatus(schedule);
  const pathname = usePathname();
  const isCalendarPage = pathname.includes("/admin/calendar");

  const handleEdit = () => {
    router.push(`/admin/calendar/manage?mode=edit&id=${schedule.id}`);
  };

  return (
    <div>
      <div className="flex items-center rounded-lg p-4">
        <div className="z-10 flex w-28 flex-shrink-0">
          <div
            className={`flex h-7 w-16 items-center justify-center rounded-l-md rounded-r-sm ${status.color}`}
          >
            <span className="relative z-10 ml-2 text-xs font-semibold">
              {status.text}
            </span>
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
        <div className="ml-4 flex flex-grow flex-col">
          <div className="text-sm text-gray-500">
            {formatDate(schedule.dateStart)} ~ {formatDate(schedule.dateEnd)}
          </div>
          <div className="group mt-2 font-semibold">{schedule.title}</div>
        </div>
        {isCalendarPage && (
          <div className="flex flex-col space-y-2">
            <button
              className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold"
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              className="rounded-lg bg-[var(--primary-100)] px-3 py-2 text-sm font-semibold text-[var(--primary)]"
              onClick={() => onDelete && onDelete(schedule.id)}
            >
              삭제
            </button>
          </div>
        )}
      </div>
      {isCalendarPage && <hr className="my-4 border-t border-gray-200" />}
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
      const response = await fetch(`/api/link/list`, {
        credentials: "include",
      });

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
    } catch (err) {
      console.error("Error fetching schedules:", err);
      setError(
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.",
      );
    }
  };

  const handleDelete = async (scheduleId: number) => {
    try {
      if (!calendarBlock) {
        throw new Error("캘린더 블록을 찾을 수 없습니다.");
      }

      const updatedSchedules = schedules.filter(
        (schedule) => schedule.id !== scheduleId,
      );

      const requestBody = {
        id: calendarBlock.id,
        type: 7,
        sequence: calendarBlock.sequence,
        style: calendarBlock.style,
        schedule: updatedSchedules,
      };

      const response = await fetch(`$/api/link/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to delete schedule: ${JSON.stringify(errorData)}`,
        );
      }

      const responseData = await response.json();

      if (responseData.code === 200) {
        setSchedules(updatedSchedules);
        alert("일정이 성공적으로 삭제되었습니다.");

        window.location.reload();
      } else {
        throw new Error(
          `Failed to delete schedule. Server response: ${JSON.stringify(responseData)}`,
        );
      }
    } catch (error) {
      console.error("Error deleting schedule:", error);
      alert(
        error instanceof Error
          ? error.message
          : "일정 삭제 중 오류가 발생했습니다.",
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

  return (
    <>
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
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((schedule) => (
                <ScheduleItem
                  key={schedule.id}
                  schedule={schedule}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <EmptyState
                message={
                  activeTab === "current" ? (
                    <>
                      <strong>진행 중이거나 예정된 일정이 없습니다.</strong>
                      <br />
                      일정을 추가하여 많은 방문자에게 알려보세요.
                    </>
                  ) : (
                    <>
                      <strong>지난 일정이 없습니다.</strong>
                      <br />
                      일정을 추가하여 많은 방문자에게 알려보세요.
                    </>
                  )
                }
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
