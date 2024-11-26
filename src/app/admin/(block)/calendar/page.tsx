"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

import { Schedule, ScheduleResponse } from "@/types/user";

import Layout from "../components/layout";
import CalendarHeader from "./components/calendar-header";
import ScheduleList from "./components/schedule-list";
import StyleSetting from "./components/style-setting";
import { adminApiInstance } from "../../../../utils/apis";

function CalendarPage() {
  const [schedules, setSchedules] = useState<ScheduleResponse>([]);
  const prevPath = useSearchParams().get("prevPath") || "/admin";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return false;
  };

  const fetchSchedules = async () => {
    const blockApis = await adminApiInstance;
    const result = await blockApis.getSchedules();
    if (!result) return;
    const { response, data } = result;
    if (response.ok) {
      setSchedules(data);
    } else await blockApis.handleResponseError(response);
  };

  useEffect(() => {
    fetchSchedules().then();
    console.log(schedules);
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
