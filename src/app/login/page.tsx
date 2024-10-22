"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            password: password,
          }),
        },
      );
      const infor = await response.json();
      if (response.ok) {
        alert("성공");
        // 세션 스토리지에 토큰 저장
        sessionStorage.setItem("token", infor.data.token);
        // 쿠키에 토큰 저장
        document.cookie = `token=${infor.data.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
        router.push("/"); // 성공 시 메인 페이지로 리다이렉트
      } else {
        alert("실패");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="id">
          id
          <input
            type="text"
            id="id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
