import React from "react";
import { twMerge } from "tailwind-merge";
import HomeMenu from "@app/admin/components/home-menu";
import Link from "next/link";
import { ClientRoute } from "@config/route";
import Image from "next/image";
import { useTheme } from "@components/providers/theme-provider";
import { usePathname } from "next/navigation";

const ProfileBox = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isAdmin = pathname === "/admin";

  return (
    <>
      <div
        className={twMerge(
          "relative mt-8 flex h-[200px] flex-col items-center justify-center border text-center",
          theme === "light" ? "bg-slate-100" : "bg-gray-800",
        )}
      >
        <div className="absolute left-3 top-4 h-12 w-12 rounded-[40px] border-2 border-slate-333">
          <Image
            src={"/assets/icons/icon_share.png"}
            alt={"공유 이미지"}
            fill
            className="p-2"
          />
        </div>
        <Link href={ClientRoute.PROFILE.DETAIL}>
          <Image
            src="/assets/icons/icon_profile.png"
            alt="profile"
            width={80}
            height={20}
          />
          <span className="mt-2 font-bold underline">momomoc</span>
        </Link>

        {!isAdmin && <HomeMenu />}
      </div>
    </>
  );
};

export default ProfileBox;
