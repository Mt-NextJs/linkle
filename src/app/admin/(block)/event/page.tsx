import EventForm from "./components/event-form";
import React, { Suspense } from "react";

function Page() {
  return <EventForm />;
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
      <Page />
    </Suspense>
  );
}
