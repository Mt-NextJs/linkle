import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";

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
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // 토글 on/off
  const [isDescriptionOverflowing, setIsDescriptionOverflowing] =
    useState<boolean>(false); // 입력된 설명 텍스트 너비 판단
  const [isTitleOverflowing, setIsTitleOverflowing] = useState<boolean>(false); // 입력된 타이틀 텍스트 너비 판단
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

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

  useEffect(() => {
    if (descriptionRef.current) {
      setIsDescriptionOverflowing(
        descriptionRef.current.scrollWidth > descriptionRef.current.clientWidth,
      );
    }
    if (titleRef.current) {
      setIsTitleOverflowing(
        titleRef.current.scrollWidth > titleRef.current.clientWidth,
      );
    }
    if (isExpanded && !isDescriptionOverflowing && !isTitleOverflowing) {
      setIsExpanded(false);
    }
  }, [description, title, isDescriptionOverflowing, isTitleOverflowing]);

  const formatDateTime = (date: Date | null, time: Date | null) => {
    if (!date || !time) return "";
    return `${date.toLocaleDateString("ko-KR", { year: "2-digit", month: "2-digit", day: "2-digit" }).replace(/\s/g, "")} ${time.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
  };

  const handleExpandToggle = () => {
    if (isDescriptionOverflowing || isTitleOverflowing) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div className="flex w-full items-center justify-center rounded-sm bg-[#F6F6F6] py-[35px]">
      <div
        className={twMerge(
          "flex w-[500px] flex-col items-center justify-between gap-5 overflow-hidden rounded-2xl bg-white drop-shadow-md transition-all duration-500",
          isExpanded ? "max-h-[600px]" : "max-h-[150px]",
        )}
      >
        <div className="w-full">
          <div className="flex w-full justify-start">
            <p className="pl-5 pt-2 text-sm text-gray-300">event</p>
          </div>
          <div
            className={twMerge(
              "flex flex-col items-center justify-center tracking-tighter transition-all duration-500",
              isExpanded && "gap-1",
            )}
          >
            <p
              ref={titleRef}
              className={twMerge(
                "text-center text-base font-semibold transition-all duration-500",
                isExpanded ? "" : "w-40 truncate",
              )}
            >
              {title || "타이틀을 입력해주세요"}
            </p>
            <p
              ref={descriptionRef}
              className={twMerge(
                "text-center text-sm text-gray-400 transition-all duration-500",
                isExpanded ? "px-[52px]" : "w-44 truncate",
              )}
            >
              {description || "이벤트 설명을 입력해주세요"}
            </p>
          </div>
        </div>
        <div className="flex h-8 w-full items-center justify-between rounded-b-2xl bg-[#F6F6F6] px-4 text-xs text-gray-400">
          <p>
            {startDate && startTime && endDate && endTime
              ? `${formatDateTime(startDate, startTime)} ~ ${formatDateTime(endDate, endTime)}`
              : "날짜와 시간을 선택해주세요"}
          </p>
          <div className="flex items-center gap-1">
            <p>{timeLeft}</p>
            <IoIosArrowDown
              className={twMerge(
                "transform text-sm text-gray-500 transition-transform duration-500",
                isDescriptionOverflowing || isTitleOverflowing
                  ? "cursor-pointer"
                  : "cursor-default",
                isExpanded ? "rotate-180" : "",
              )}
              onClick={handleExpandToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
