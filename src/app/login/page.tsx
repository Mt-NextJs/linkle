"use client";

import { Metadata } from "next";
import { useState } from "react";
//metadata

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("http://43.201.21.97:3002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      });
      const infor = await response.json();
      if (response.ok) {
        alert("성공");
        sessionStorage.setItem("token", infor.data.token);
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
