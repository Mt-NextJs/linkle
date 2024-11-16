import React, { Suspense } from "react";

import EventForm from "./components/event-form";

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
