"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Admin from "@app/admin/page";

export default function Page() {
  const router = useRouter();

  // 로그아웃 함수: 세션 스토리지와 쿠키에서 토큰 제거 후 리다이렉트

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.log(token, "token");
      router.push("/intro");
    }
    // return () => sessionStorage.removeItem("token");
  }, []);

  return <Admin />;
}
