"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Admin from "@app/admin/page";
import { withLogin } from "../utils/with-login";

function Page() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
  }, []);

  return <Admin />;
}

export default Page;
