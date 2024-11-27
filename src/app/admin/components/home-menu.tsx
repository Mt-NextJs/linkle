import React, { useState } from "react";
import Image from "next/image";

import UserMenu from "@app/admin/components/user-menu";

const HomeMenu = () => {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
  return (
    <>
      {isMenuOn && (
        <button
          type="button"
          onClick={() => setIsMenuOn(false)}
          className="cursor-default before:fixed before:left-0 before:top-0 before:h-screen before:w-screen before:opacity-0"
          aria-label="메뉴 닫기"
        />
      )}
      <nav
        aria-label="프로필 관련 메뉴"
        className="absolute right-3 top-3 sm:right-4 sm:top-4"
      >
        <button
          onClick={() => setIsMenuOn((prev) => !prev)}
          className="rounded-3xl border-2 border-gray-200 bg-white p-1.5 shadow-inner transition-colors duration-200 dark:bg-[var(--background)] sm:p-2"
          aria-expanded={isMenuOn}
          aria-controls="user-menu"
          aria-label="프로필 메뉴 열기/닫기"
        >
          <Image
            src="/assets/icons/icon_menu.png"
            alt=""
            width={20}
            height={20}
            className="h-4 w-4 sm:h-5 sm:w-5"
          />
        </button>
        {isMenuOn && <UserMenu />}
      </nav>
    </>
  );
};

export default HomeMenu;
