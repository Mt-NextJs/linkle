import { useEffect, useState } from "react";

export default function EventPreview({
  title,
  description,
  startDate,
  endDate,
  startTime,
  endTime,
}: {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  startTime: Date | null;
  endTime: Date | null;
}) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  const calculateTimeLeft = () => {
    if (endDate && endTime) {
      const endDateTime = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate(),
        endTime.getHours(),
        endTime.getMinutes(),
      ).getTime();
      const currentTime = new Date().getTime();
      const timeDifference = endDateTime - currentTime;

      if (timeDifference > 0) {
        const totalMinutes = Math.floor(timeDifference / (1000 * 60));
        const daysLeft = Math.floor(totalMinutes / (60 * 24));
        const hoursLeft = Math.floor((totalMinutes % (60 * 24)) / 60);
        const minutesLeft = totalMinutes % 60;
        setTimeLeft(
          `${daysLeft > 0 ? `${daysLeft}일 ` : ""}${hoursLeft > 0 ? `${hoursLeft}시간 ` : ""}${minutesLeft}분 남음`.trim(),
        );
      } else {
        setTimeLeft("종료됨");
      }
    } else {
      setTimeLeft("");
    }
  };
  // 남은 시간 업데이트 (종료 시간이 변경될 때마다 재계산)
  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // 1분마다 남은 시간 업데이트

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [endDate, endTime]);

  const formatDateTime = (date: Date | null, time: Date | null) => {
    if (!date || !time) return "";
    return `${date.toLocaleDateString("ko-KR", { year: "2-digit", month: "2-digit", day: "2-digit" }).replace(/\s/g, "")} ${time.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
  };
  return (
    <div className="flex h-[190px] w-full items-center justify-center rounded-sm bg-[#F6F6F6]">
      <div className="flex h-[125px] w-[500px] flex-col items-center justify-between rounded-3xl bg-white drop-shadow-md">
        <div className="w-full">
          <div className="flex w-full justify-start">
            <p className="pl-5 pt-2 text-sm text-gray-300">event</p>
          </div>
          <div className="flex flex-col items-center justify-center tracking-tighter">
            <p className="text-base font-semibold">
              {title || "타이틀을 입력해주세요"}
            </p>
            <p className="text-sm text-gray-400">
              {description || "이벤트 설명을 입력해주세요"}
            </p>
          </div>
        </div>
        <div className="flex h-8 w-full items-center justify-between rounded-b-3xl bg-[#F6F6F6] px-5 text-xs text-gray-400">
          <p>
            {startDate && startTime && endDate && endTime
              ? `${formatDateTime(startDate, startTime)} ~ ${formatDateTime(endDate, endTime)}`
              : "날짜와 시간을 선택해주세요"}
          </p>
          <p>{timeLeft}</p>
        </div>
      </div>
    </div>
  );
}
