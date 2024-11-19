import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import HomeMenu from "@app/admin/components/home-menu";
import { ClientRoute } from "@config/route";

const ProfileBox = () => {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin";

  return (
    <>
      <div
        className={twMerge(
          "relative mt-8 flex h-[200px] w-full flex-col items-center justify-center border text-center",
          "border-[var(--input-color-line)] bg-[var(--background)] text-[var(--foreground)]",
        )}
        aria-labelledby="profile-name"
        role="region"
      >
        <div
          className="absolute left-3 top-4 h-12 w-12 rounded-[40px] border-2 border-slate-333"
          aria-hidden="true"
        >
          <Image
            src={"/assets/icons/icon_share.png"}
            alt="프로필 공유 아이콘"
            fill
            className="p-2"
          />
        </div>
        <Link
          href={ClientRoute.PROFILE.DETAIL}
          aria-label="momomoc 프로필 페이지로 이동"
          tabIndex={0}
          className="group flex flex-col items-center rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <Image
            src="/assets/icons/icon_profile.png"
            alt="momomoc 프로필 이미지"
            width={80}
            height={80}
          />
          <span className="mt-2 font-bold underline" id="profile-name">
            momomoc
          </span>
        </Link>

        {!isAdmin && <HomeMenu />}
      </div>
    </>
  );
};

export default ProfileBox;
