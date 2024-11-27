import { useState } from "react";
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
        className="absolute right-2 top-3 sm:right-3 sm:top-4"
      >
        <button
          onClick={() => setIsMenuOn((prev) => !prev)}
          className="h-10 w-10 rounded-full border-2 border-[var(--input-color-line)] bg-[var(--background)] transition-all duration-200 hover:border-[var(--primary-300)] hover:bg-[var(--primary-100)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] active:scale-95"
          aria-expanded={isMenuOn}
          aria-controls="user-menu"
          aria-label="프로필 메뉴 열기/닫기"
        >
          <div className="relative h-full w-full">
            <Image
              src="/assets/icons/icon_menu.png"
              alt=""
              fill
              className="p-2 transition-opacity duration-200 group-hover:opacity-80 dark:opacity-90 dark:invert"
            />
          </div>
        </button>
        {isMenuOn && <UserMenu />}
      </nav>
    </>
  );
};

export default HomeMenu;
