import LinkForm from "./components/link-form";
import React, { Suspense } from "react";

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
