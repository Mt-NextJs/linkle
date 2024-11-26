"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import HomeMenu from "@app/admin/components/home-menu";
import { ClientRoute } from "@config/route";

import { copyText } from "../../../lib/copy";

interface Props {
  userId: string;
}
const ProfileBox = ({ userId }: Props) => {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin";
  const shareUrl = `https://linkle-nine.vercel.app/profile/${userId}`;

  // 카카오 로직은 도메인 주소가 필요..
  // const handleShearToKakao = () => {
  //   const { Kakao, location } = window;
  //   Kakao.Share.sendScrap({
  //     requestUrl: location.href,
  //   });
  // };

  return (
    <>
      <div
        className={twMerge(
          "relative mt-4 sm:mt-6 md:mt-8",
          "flex h-[160px] w-full sm:h-[180px] md:h-[200px]",
          "flex-col items-center justify-center",
          "border border-[var(--input-color-line)]",
          "bg-[var(--background)] text-[var(--foreground)]",
          "text-center",
          "transition-colors duration-200",
        )}
        aria-labelledby="profile-name"
        role="region"
      >
        <button
          id={"kakaotalk-sharing-btn"}
          type={"button"}
          onClick={() => copyText(shareUrl)}
          className="absolute left-2 top-3 h-8 w-8 rounded-full border-2 sm:left-3 sm:top-4 sm:h-10 sm:w-10 md:h-12 md:w-12"
        >
          <Image
            src={"/assets/icons/icon_share.png"}
            alt="프로필 공유 아이콘"
            fill
            className="p-1.5 sm:p-2"
          />
        </button>
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
            className="object-contain"
          />
          <span
            className="mt-2 text-base font-bold underline sm:text-lg"
            id="profile-name"
          >
            {userId}
          </span>
        </Link>
        {!isAdmin && <HomeMenu />}
      </div>
    </>
  );
};

export default ProfileBox;
