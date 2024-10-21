"use client";

import CalendarHeader from "./components/calendar-header";
import ScheduleList from "./components/schedule-list";
import StyleSetting from "./components/style-setting";

export default function CalendarPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <CalendarHeader />
        <StyleSetting />
        <ScheduleList />
      </div>
    </>
  );
}
