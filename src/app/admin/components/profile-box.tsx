"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MoreVertical,
  Share,
  Type,
  Link2,
  ImageIcon,
  Plus,
  Menu,
  Eye,
} from "lucide-react";

import HomeMenu from "@app/admin/components/home-menu";
import { ClientRoute } from "@config/route";
import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader } from "@/components/UI/card";
import { Switch } from "@/components/UI/switch";
import { Separator } from "@/components/UI/separator";
import { ScrollArea } from "@/components/UI/scroll-area";

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
          "flex w-full",
          "flex-col items-center justify-center",
          "bg-[var(--background)] text-[var(--foreground)]",
          "text-center",
          "transition-colors duration-200",
          "px-4",
        )}
        aria-labelledby="profile-name"
        role="region"
      >
        <div className="flex w-full items-center justify-between border-b p-4">
          <Button
            id={"kakaotalk-sharing-btn"}
            variant="ghost"
            size="icon"
            onClick={() => copyText(shareUrl)}
          >
            <Share className="h-5 w-5" />
          </Button>
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100">
              <div className="h-12 w-12 rounded-full bg-gray-200" />
            </div>
            <span
              className="mt-2 h-4 text-base font-bold underline sm:text-lg"
              id="profile-name"
            >
              {userId}
            </span>
          </div>
          <HomeMenu />
        </div>
      </div>
      <div className="grid grid-cols-2 border-b">
        <div className="border-r p-4 text-center">
          <h2 className="mb-2 text-sm font-medium text-muted-foreground">
            방문자
          </h2>
          <div className="space-x-2">
            <span className="text-sm">
              전체 <span className="font-bold">0</span>
            </span>
            <span className="text-sm">
              오늘 <span className="font-bold">0</span>
            </span>
            <span className="text-sm">
              실시간 <span className="font-bold">0</span>
            </span>
          </div>
        </div>
        <div className="p-4 text-center">
          <h2 className="mb-2 text-sm font-medium text-muted-foreground">
            소식받기
          </h2>
          <span className="text-sm">
            전체 <span className="font-bold">0</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
