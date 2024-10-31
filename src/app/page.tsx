"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Admin from "@app/admin/page";
import { withLogin } from "../utils/with-login";

function Page() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // setIsLoggedIn(!!token);
  }, []);

  return <Admin />;
}

export default Page;
