"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

export default function ProfileDetail() {
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const token = sessionStorage.getItem("token");
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
    <div className="profile-detail">
      <h1>회원 정보</h1>
      <p>아이디: {userData.userId}</p>
      <p>이름: {userData.name}</p>
      <p>이메일: {userData.email || "미입력"}</p>
      <button
        className="edit-button"
        onClick={() => router.push(`/profile/${userData.userId}/edit`)}
      >
        회원 정보 수정
      </button>
    </div>
  );
}
