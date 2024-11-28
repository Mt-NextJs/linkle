import React, { useState } from "react";
import Image from "next/image";
import { Link, Menu } from "lucide-react";

import { Button } from "@components/UI/button";
import UserMenu from "@app/admin/components/user-menu";
import { ClientRoute } from "@/config/route";

import Contour from "../(block)/components/contour";

const HomeMenu = () => {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
  return (
    <>
      <nav aria-label="프로필 관련 메뉴" className="sm:right-4 sm:top-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOn((prev) => !prev)}
          aria-expanded={isMenuOn}
          aria-controls="user-menu"
          aria-label="프로필 메뉴 열기/닫기"
        >
          <Menu className="h-5 w-5" />
        </Button>
        {isMenuOn && <UserMenu />}
      </nav>
      {isMenuOn && (
        <button
          type="button"
          onClick={() => setIsMenuOn(false)}
          className="fixed cursor-default before:fixed before:left-0 before:top-0 before:h-screen before:w-screen before:opacity-0"
          aria-label="메뉴 닫기"
        />
      )}
    </>
  );
};

export default HomeMenu;
