import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ClientRoute } from "@config/route";
import Contour from "@app/admin/(block)/components/contour";

const HomeMenu = () => {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
  const router = useRouter();
  async function handleLogout() {
    try {
      // 인증 관련 데이터 제거
      const response = await fetch("/api/logout", {
        credentials: "include",
        method: "POST",
      });
      if (response.ok) {
        alert("로그아웃 되었습니다.");
        router.push(`/intro`);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  }

  return (
    <>
      {isMenuOn && (
        <button
          type="button"
          onClick={() => setIsMenuOn(false)}
          className="cursor-default before:fixed before:left-0 before:top-0 before:h-screen before:w-screen before:opacity-0"
        ></button>
      )}
      <div className="absolute right-4 top-4">
        <button
          onClick={() => setIsMenuOn((prev) => !prev)}
          className="rounded-3xl border-2 bg-white p-2 shadow-inner"
        >
          <Image
            src="/assets/icons/icon_menu.png"
            alt="메뉴 아이콘"
            width={20}
            height={20}
          />
        </button>
        {isMenuOn && (
          <div className="relative right-0 top-1">
            <ul className="absolute right-0 w-max rounded-md border-2 bg-white px-2">
              <li className="p-2">
                <Link href={ClientRoute.ADMIN}>Admin</Link>
              </li>
              <Contour />
              <li className="p-2">
                <Link href={ClientRoute.PROFILE.DETAIL}>회원 정보 조회</Link>
              </li>
              <Contour />
              <li className="p-2">
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li className="p-2">
                <Link href={ClientRoute.LOGIN}>Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeMenu;
