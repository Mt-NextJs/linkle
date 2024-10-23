"use client";

import React, { useState } from "react";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventContentArg } from "@fullcalendar/core/index.js";

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
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2023, 0, 1));
  const calendarRef = React.useRef<FullCalendar>(null);

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

  const events = schedules.map((schedule) => ({
    id: schedule.id,
    title: schedule.title,
    start: schedule.startDate,
    end: schedule.endDate,
    backgroundColor: getBackgroundColor(
      new Date(schedule.startDate),
      new Date(schedule.endDate),
    ),
    borderColor: "transparent",
    classNames: ["calendar-event"],
  }));

  const handlePrevMonth = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.prev();
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentMonth(newDate);
  };

  const handleNextMonth = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.next();
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentMonth(newDate);
  };

  const CustomToolbar = () => {
    return (
      <div className="flex items-center justify-center p-4">
        <button onClick={handlePrevMonth} className="focus:outline-none">
          <Image
            src="/assets/icons/icon_prev_gray.png"
            alt="Previous Month"
            width={20}
            height={20}
          />
        </button>
        <h2 className="mx-8 text-lg font-semibold text-[#555555]">
          {`${currentMonth.getFullYear()}.${String(
            currentMonth.getMonth() + 1,
          ).padStart(2, "0")}`}
        </h2>
        <button onClick={handleNextMonth} className="focus:outline-none">
          <Image
            src="/assets/icons/icon_next_gray.png"
            alt="Next Month"
            width={20}
            height={20}
          />
        </button>
      </div>
    );
  };

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div className="overflow-hidden whitespace-nowrap px-2.5 py-1 text-xs text-white">
        {eventInfo.event.title}
      </div>
    );
  };

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
      <CustomToolbar />
      <div className="calendar-container [&_.calendar-event]:flex [&_.calendar-event]:h-8 [&_.calendar-event]:items-center [&_.fc-col-header-cell]:border-0 [&_.fc-col-header-cell]:border-b [&_.fc-col-header-cell]:border-gray-200 [&_.fc-col-header-cell]:py-2 [&_.fc-col-header-cell]:text-center [&_.fc-col-header-cell]:text-[11px] [&_.fc-col-header-cell]:font-medium [&_.fc-col-header-cell]:text-gray-500 [&_.fc-day-other_.fc-daygrid-day-number]:text-gray-400 [&_.fc-daygrid-day-number]:flex [&_.fc-daygrid-day-number]:h-8 [&_.fc-daygrid-day-number]:w-full [&_.fc-daygrid-day-number]:items-center [&_.fc-daygrid-day-number]:justify-center [&_.fc-daygrid-day-number]:text-[11px] [&_.fc-daygrid-event]:mx-1 [&_.fc-daygrid-event]:rounded-md [&_.fc-event-title]:overflow-hidden [&_.fc-scrollgrid-section>td]:!border-b-0 [&_.fc-scrollgrid-section>td]:!border-r-0 [&_.fc-scrollgrid-section>th]:!border-r-0 [&_.fc-scrollgrid]:border-0 [&_td]:!border-b-0 [&_td]:!border-r-0">
        {" "}
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2023-01-01"
          headerToolbar={false}
          events={events}
          eventContent={renderEventContent}
          height="auto"
          firstDay={0}
          eventDisplay="block"
          dayMaxEvents={false}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false,
          }}
          dayCellClassNames="h-32"
          dayHeaderContent={({ date }) => {
            const days = ["일", "월", "화", "수", "목", "금", "토"];
            return days[date.getDay()];
          }}
        />
      </div>
    </div>
  );
};

export default CalendarView;
