import React, { useState } from "react";
import Image from "next/image";

interface Schedule {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface CalendarViewProps {
  schedules: Schedule[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ schedules }) => {
  const [currentMonth] = useState<Date>(new Date(2023, 0, 1));

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = [];
    const totalDays = 35;

    for (let i = 1 - firstDay.getDay(); daysInMonth.length < totalDays; i++) {
      daysInMonth.push(new Date(year, month, i));
    }

    return daysInMonth;
  };

  const toDate = (date: string | Date): Date => {
    return new Date(new Date(date).setHours(0, 0, 0, 0));
  };

  const calculateOffsets = (start: Date, end: Date, weekStart: Date) => {
    const startOffset = Math.max(
      0,
      (start.getTime() - weekStart.getTime()) / (1000 * 3600 * 24),
    );
    const endOffset = Math.min(
      6,
      (end.getTime() - weekStart.getTime()) / (1000 * 3600 * 24),
    );
    const duration = endOffset - startOffset + 1;
    return { startOffset, duration };
  };

  const getBackgroundColor = (start: Date, end: Date) => {
    const startDay = start.getDate();
    const endDay = end.getDate();

    if (startDay >= 2 && endDay <= 6) {
      return "#575757";
    } else if (startDay >= 5 && endDay <= 10) {
      return "#707070";
    } else {
      return "#A0A0A0";
    }
  };

  const renderSchedules = (week: Date[]) => {
    const weekStart = week[0];
    const weekEnd = week[6];
    return schedules
      .filter((schedule) => {
        const start = toDate(schedule.startDate);
        const end = toDate(schedule.endDate);
        return start <= weekEnd && end >= weekStart;
      })
      .map((schedule, index) => {
        const start = toDate(schedule.startDate);
        const end = toDate(schedule.endDate);
        const { startOffset, duration } = calculateOffsets(
          start,
          end,
          weekStart,
        );

        return (
          <div
            key={schedule.id}
            className="absolute flex h-8 items-center overflow-hidden rounded p-1 text-xs text-white"
            style={{
              backgroundColor: getBackgroundColor(start, end),
              top: `${index * 2.2 + 1.5}rem`,
              left: `calc(${(startOffset / 7) * 100}% + 4px)`,
              width: `calc(${(duration / 7) * 100}% - 8px)`,
              zIndex: 10,
              paddingLeft: "10px",
            }}
          >
            {schedule.title}
          </div>
        );
      });
  };

  const days = getDaysInMonth(currentMonth);
  const weeks = Array.from({ length: 5 }, (_, i) =>
    days.slice(i * 7, (i + 1) * 7),
  );

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
      <div className="flex items-center justify-center p-4">
        <Image
          src="/assets/icons/icon_prev_gray.png"
          alt="Previous Month"
          width={20}
          height={20}
        />
        <h2 className="mx-8 text-lg font-semibold text-[#555555]">
          {`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1).padStart(2, "0")}`}
        </h2>
        <Image
          src="/assets/icons/icon_next_gray.png"
          alt="Next Month"
          width={20}
          height={20}
        />
      </div>
      <div className="grid grid-cols-7 gap-4 px-4 py-2 text-center text-xs font-medium text-gray-500">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="border-gray-00 border-t">
        <div className="grid grid-cols-7 gap-px bg-gray-100">
          {weeks.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {week.map((day) => (
                <div
                  key={day.toString()}
                  className={`relative flex h-32 items-start justify-center bg-white p-2 ${
                    day.getMonth() !== currentMonth.getMonth()
                      ? "text-gray-400"
                      : ""
                  }`}
                >
                  <span className="text-xs">{day.getDate()}</span>
                </div>
              ))}
              <div
                className="relative col-span-7"
                style={{ height: "0", marginTop: "-7.5rem" }}
              >
                {renderSchedules(week)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
