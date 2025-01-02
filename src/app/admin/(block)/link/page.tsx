import React, { Suspense } from "react";

import LinkForm from "./components/link-form";

function LinkPage() {
  return <LinkForm />;
}

export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinkPage />
    </Suspense>
  );
}
