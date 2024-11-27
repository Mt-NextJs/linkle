import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import UserMenu from "@app/admin/components/user-menu";
import { buttonStyles } from "@styles/common";

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
          className={twMerge(buttonStyles.base, buttonStyles.interactive)}
          aria-expanded={isMenuOn}
          aria-controls="user-menu"
          aria-label="프로필 메뉴 열기/닫기"
        >
          <div className="relative h-full w-full">
            <Image
              src="/assets/icons/icon_menu.png"
              alt=""
              fill
              className={twMerge(buttonStyles.icon)}
            />
          </div>
        </button>
        {isMenuOn && <UserMenu />}
      </nav>
    </>
  );
};

export default HomeMenu;
