"use client";

import { useEffect } from "react";
import Admin from "@app/admin/page";
import ProfileBox from "@app/admin/components/profile-box";

function Page() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
  }, []);

  return (
    <div>
      <ProfileBox />
    </div>
  );
}

export default Page;
