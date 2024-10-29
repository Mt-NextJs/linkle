"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import FormInput from "@app/admin/(block)/components/form-input";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { getCookie } from "lib/get-cookie";

export default function ProfileDetail() {
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const token = getCookie("token"); // 쿠키에서 토큰 가져오기
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/info`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await response.json();
        if (response.ok) {
          setUserData(data.data);
        } else {
          console.error("Failed to fetch user info:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
    fetchUserInfo();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen flex-col justify-center gap-16 px-20 py-4">
      <div className="sr-only">
        <h1>IN MY LINK 회원 정보 페이지입니다!</h1>
        <p>회원님의 정보를 확인하세요.</p>
      </div>

      <div className="flex flex-col gap-6">
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/assets/icons/icon_back.png"
            alt="뒤로가기 아이콘"
            width={34}
            height={34}
          />
        </button>
        <p className="pageName">IN MY LINK 회원 정보</p>
      </div>

      {/* 유저 정보 조회 폼 */}
      <div className="flex w-full flex-col gap-4">
        {/* 아이디 필드 */}
        <FormInput
          label="아이디"
          id="userId"
          value={userData.userId}
          readOnly
          className="border-gray-300 bg-gray-100"
        />

        {/* 이름 필드 */}
        <FormInput
          label="이름"
          id="name"
          value={userData.name}
          readOnly
          className="border-gray-300 bg-gray-100"
        />

        {/* 이메일 필드 */}
        <FormInput
          label="이메일"
          id="email"
          value={userData.email || "미입력"}
          readOnly
          className="border-gray-300 bg-gray-100"
        />

        {/* 회원 정보 수정 버튼 */}
        <button
          type="button"
          className={twMerge("button color mt-16")}
          onClick={() => router.push(`/profile/edit`)}
        >
          회원 정보 수정
        </button>
      </div>
    </div>
  );
}
