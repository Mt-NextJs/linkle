"use client";

import { ClientRoute } from "@config/route";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  // 로그아웃 함수: 세션 스토리지와 쿠키에서 토큰 제거 후 리다이렉트
  async function handleLogout() {
    try {
      // 인증 관련 데이터 제거
      sessionStorage.removeItem("token");
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      await router.push(ClientRoute.MAIN as string);
      router.refresh();
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  }

  return (
    <>
      <h1>Home</h1>
      <h2>in my link</h2>
      <Link href={ClientRoute.ADMIN as string} className="button">
        Admin
      </Link>

      <button onClick={handleLogout} className="button">
        logout
      </button>
    </>
  );
}
