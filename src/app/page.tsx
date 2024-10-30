"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Admin from "@app/admin/page";
import { withLogin } from "../utils/with-login";

function Page() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 로그아웃 함수: 세션 스토리지와 쿠키에서 토큰 제거 후 리다이렉트

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // setIsLoggedIn(!!token);
  }, []);

  return <Admin />;
}

export default Page;
