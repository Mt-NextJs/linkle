"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

import Layout from "../components/layout";
import CalendarHeader from "./components/calendar-header";
import ScheduleList from "./components/schedule-list";
import StyleSetting from "./components/style-setting";

function CalendarPage() {
  const prevPath = useSearchParams().get("prevPath") || "/admin";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return false;
  };

  return (
    <Layout title="캘린더 블록" onSubmit={handleSubmit} prevPath={prevPath}>
      <CalendarHeader />
      <StyleSetting />
      <ScheduleList />
    </Layout>
  );
}

export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CalendarPage />
    </Suspense>
  );
}
