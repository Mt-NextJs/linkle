import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCalendarXFill } from "react-icons/bs";

import { Schedule } from "@/types/user";

const formatDate = (dateString: string) => {
  console.log(dateString);
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
      description: `일정까지 ${diffDays}일 남았습니다.`,
    };
  } else if (now >= startDate && now <= endDate) {
    return {
      text: "OPEN",
      color: "bg-[var(--primary)] text-white",
      description: "진행 중인 일정입니다.",
    };
  } else {
    return {
      text: "CLOSED",
      color: "bg-[#BABABA] text-[#eae9e9]",
      description: "종료된 일정입니다.",
    };
  }
};

function EmptyState({ message }: { message: React.ReactNode }) {
  return (
    <div
      className="mx-4 my-8 flex flex-col items-center justify-center rounded-lg bg-gray-100 py-32"
      role="status"
      aria-label="일정 없음"
    >
      <BsCalendarXFill
        className="mb-4 text-4xl text-gray-300"
        aria-hidden="true"
      />
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
  console.log(schedule, "sdnaslkdnslk");

  const handleEdit = () => {
    router.push(`/admin/calendar/manage?mode=edit&id=${schedule.id}`);
  };

  return (
    <div>
      <div className="flex items-center rounded-lg p-4">
        <div className="z-10 flex w-28 flex-shrink-0">
          <div
            className={`flex h-7 w-16 items-center justify-center rounded-l-md rounded-r-sm ${status.color}`}
            role="status"
            aria-label={status.description}
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
          <time dateTime={schedule.dateStart} className="text-sm text-gray-500">
            {formatDate(schedule.dateStart)} ~ {formatDate(schedule.dateEnd)}
          </time>
          <div className="group mt-2 font-semibold">{schedule.title}</div>
        </div>
        {isCalendarPage && (
          <div className="flex flex-col space-y-2">
            <button
              className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold"
              onClick={handleEdit}
              aria-label={`${schedule.title} 일정 수정`}
            >
              수정
            </button>
            <button
              className="rounded-lg bg-[var(--primary-100)] px-3 py-2 text-sm font-semibold text-[var(--primary)]"
              onClick={() => onDelete && onDelete(schedule.id as number)}
              aria-label={`${schedule.title} 일정 삭제`}
            >
              삭제
            </button>
          </div>
        )}
      </div>
      {isCalendarPage && (
        <hr className="my-4 border-t border-gray-200" aria-hidden="true" />
      )}
    </div>
  );
}

interface Props {
  schedules: Schedule[];
}
export default function ScheduleList({ schedules }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"current" | "past">("current");
  const [error, setError] = useState<string | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleDelete = async (scheduleId: number) => {};

  const currentDate = new Date();

  const filteredSchedules = schedules.filter((schedule) => {
    const endDate = new Date(schedule.dateEnd);
    return activeTab === "current"
      ? endDate >= currentDate
      : endDate < currentDate;
  });

  return (
    <section aria-labelledby="schedule-list-heading">
      <div className="mt-4 flex items-center justify-between p-4">
        <h2 id="schedule-list-heading" className="text-lg font-semibold">
          추가한 모든 일정
        </h2>
        <button
          onClick={toggleOpen}
          className="cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? "일정 목록 접기" : "일정 목록 펼치기"}
        >
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
            aria-hidden="true"
          />
        </button>
      </div>
      {isOpen && (
        <div className="p-4">
          <div
            className="mb-4 flex border-b"
            role="tablist"
            aria-label="일정 상태별 보기"
          >
            <button
              role="tab"
              aria-selected={activeTab === "current"}
              aria-controls="current-schedules"
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
              role="tab"
              aria-selected={activeTab === "past"}
              aria-controls="past-schedules"
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
          <div
            id={`${activeTab}-schedules`}
            role="tabpanel"
            className="space-y-4"
          >
            {filteredSchedules.length > 0 ? (
              <div role="list">
                {filteredSchedules.map((schedule) => (
                  <ScheduleItem
                    key={schedule.id}
                    schedule={schedule}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
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
    </section>
  );
}
