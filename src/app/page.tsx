"use client";

import { useEffect } from "react";
import Admin from "@app/admin/page";
import ProfileBox from "@app/admin/components/profile-box";
import Preview from "@app/admin/components/preview/components/preview";

function Page() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
  }, []);

  return <Preview />;
}

export default Page;
