"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

import { Schedule } from "@/types/user";

import Layout from "../components/layout";
import CalendarHeader from "./components/calendar-header";
import ScheduleList from "./components/schedule-list";
import StyleSetting from "./components/style-setting";
import { adminApiInstance } from "../../../../utils/apis";

function CalendarPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const prevPath = useSearchParams().get("prevPath") || "/admin";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return false;
  };

  const fetchSchedules = async () => {
    const blockApis = await adminApiInstance;
    const response = await blockApis.getSchedules();
    if (!response) return;
    if (response.ok) {
      const {
        result: { calendar },
      } = await response.json();
      console.log(calendar);
      setSchedules(calendar as Schedule[]);
    } else await blockApis.handleError(response);
  };

  useEffect(() => {
    fetchSchedules().then();
  }, []);

  return (
    <Layout title="캘린더 블록" onSubmit={handleSubmit} prevPath={prevPath}>
      <CalendarHeader />
      <StyleSetting schedules={schedules} />
      <ScheduleList schedules={schedules} />
    </Layout>
  );
}

export default function PageWithSuspense() {
  return (
    <Suspense
      fallback={
        <div role="status" aria-label="페이지 로딩 중...">
          Loading...
        </div>
      }
    >
      <CalendarPage />
    </Suspense>
  );
}
