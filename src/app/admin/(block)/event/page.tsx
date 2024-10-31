import EventForm from "./components/event-form";
import React, { Suspense } from "react";

function Page() {
  return <EventForm />;
}

export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
