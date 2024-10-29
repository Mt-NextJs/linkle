import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientRoute } from "@config/route";
import { useRouter } from "next/navigation";
import Contour from "@app/admin/(block)/components/contour";

const HomeMenu = () => {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
  const router = useRouter();
  async function handleLogout() {
    try {
      // 인증 관련 데이터 제거
      sessionStorage.removeItem("token");
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      router.push(ClientRoute.MAIN as string);
      router.refresh();
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
                <Link href={ClientRoute.ADMIN as string}>Admin</Link>
              </li>
              <Contour />
              <li className="p-2">
                <Link href="/profile/detail">회원 정보 조회</Link>
              </li>
              <Contour />
              <li className="p-2">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeMenu;
