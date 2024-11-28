import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { ClientRoute } from "@config/route";
import Contour from "@app/admin/(block)/components/contour";

const UserMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isAdmin = pathname === "/admin";
  async function handleLogout() {
    try {
      // 인증 관련 데이터 제거
      const response = await fetch("/api/logout", {
        credentials: "include",
        method: "POST",
      });
      if (response.ok) {
        alert("로그아웃 되었습니다.");
        router.push(`/`);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  }
  return (
    <div id="user-menu" className="top-30 absolute right-8 z-20">
      <ul className="right-0 w-max rounded-md border-1 border-gray-200 bg-white px-2 text-sm dark:bg-[var(--background)] dark:text-[var(--foreground)] sm:text-base">
        <li className="p-1.5 sm:p-2">
          <Link
            href={isAdmin ? "" : ClientRoute.ADMIN}
            onClick={() => isAdmin && router.back()}
            className="block w-full rounded-md px-2 py-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isAdmin ? "Profile Main" : "Admin"}
          </Link>
        </li>
        <Contour />
        <li className="p-1.5 sm:p-2">
          <Link
            href={ClientRoute.PROFILE.DETAIL}
            className="block w-full rounded-md px-2 py-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            회원 정보 조회
          </Link>
        </li>
        <Contour />
        <li className="p-1.5 sm:p-2">
          <button
            onClick={handleLogout}
            className="block w-full rounded-md px-2 py-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Logout
          </button>
        </li>
        <Contour />
        <li className="p-1.5 sm:p-2">
          <Link
            href={ClientRoute.LOGIN}
            className="block w-full rounded-md px-2 py-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
