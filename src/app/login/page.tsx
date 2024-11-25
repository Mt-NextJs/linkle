"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { ClientRoute } from "@config/route";
import FormInput from "@app/admin/(block)/components/form-input";

import { authApiInstance } from "../../utils/apis";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isUserIdFocused, setIsUserIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const router = useRouter();

  const isDisabled = !userId || !password;

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDisabled) return;

    const authApis = await authApiInstance;
    const response = await authApis.login(userId, password);
    if (!response) return;
    if (response.ok) {
      alert("로그인 성공");
      router.push("/");
    } else await authApis.handleError(response);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center gap-8 px-4 py-4 sm:gap-12 sm:px-8 md:gap-16 md:px-20">
      {/* 스크린 리더 전용 텍스트*/}
      <div className="sr-only">
        <h1>in my link 의 로그인 페이지 입니다!</h1>
        <p>아이디와 비밀번호를 입력해 주세요.</p>
        <p>가입하신 적이 없으시다면 회원가입을 진행해 주세요.</p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="w-8 sm:w-auto"
        >
          <Image
            src="/assets/icons/icon_back.png"
            alt="뒤로가기 아이콘"
            width={34}
            height={34}
            className="h-auto w-[24px] sm:w-[34px]"
          />
        </button>
        <p className="pageName text-2xl sm:text-3xl">로그인</p>
      </div>

      <form
        onSubmit={handleLogin}
        className="flex w-full flex-col gap-3 sm:gap-4"
        autoComplete="on"
      >
        <FormInput
          label="아이디"
          id="userId"
          name="username"
          autoComplete="username"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onFocus={() => setIsUserIdFocused(true)}
          onBlur={() => setIsUserIdFocused(false)}
          className={twMerge(
            isUserIdFocused ? "inserted" : "",
            "transition-colors duration-200",
          )}
        />
        <FormInput
          label="비밀번호"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          className={twMerge(
            isPasswordFocused ? "inserted" : "",
            "transition-colors duration-200",
          )}
        />
        <div className="mt-2 sm:mt-4">
          <button
            type="submit"
            className={twMerge(
              "button color mb-3 text-base sm:mb-4 sm:text-lg md:text-xl",
              isDisabled && "disable",
            )}
            disabled={isDisabled}
          >
            IN MY LINK 로그인
          </button>
          <Link
            href={ClientRoute.JOIN}
            className="button gray mt-0 text-base sm:text-lg md:text-xl"
          >
            IN MY LINK 무료 회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}
