"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileEdit() {
  const [userData, setUserData] = useState({ name: "", userId: "", email: "" });
  const [isChanged, setIsChanged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserInfo() {
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
      if (response.ok) setUserData(data.data);
    }
    fetchUserInfo();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setIsChanged(true); // 데이터가 변경될 때마다 활성화
  }

  async function handleUpdate() {
    const token = sessionStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      },
    );
    if (response.ok) {
      alert("회원 정보가 수정되었습니다.");
      router.push(`/profile/${userData.userId}/detail`);
    } else {
      console.error("Failed to update user info");
    }
  }

  return (
    <div className="profile-edit">
      <h1>회원 정보 수정</h1>
      <input
        type="text"
        name="userId"
        value={userData.userId}
        readOnly
        className="readonly"
      />
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={userData.email || ""}
        onChange={handleChange}
      />
      <button
        onClick={handleUpdate}
        disabled={!isChanged}
        className={isChanged ? "active-button" : "inactive-button"}
      >
        수정 완료
      </button>
    </div>
  );
}
