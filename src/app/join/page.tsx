"use client";

import FormInput from "@app/admin/(block)/components/form-input";
import { ClientRoute } from "@config/route";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Join() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");

  const [isUserIdFocused, setIsUserIdFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordConfirmFocused, setIsPasswordConfirmFocused] =
    useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isUserIdTouched, setIsUserIdTouched] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordConfirmTouched, setIsPasswordConfirmTouched] =
    useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isDisabled =
    !userId ||
    !name ||
    !password ||
    !passwordConfirm ||
    !email ||
    password !== passwordConfirm;

  const router = useRouter();

  async function handleJoin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDisabled || password !== passwordConfirm) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            userId: userId,
            password: password,
            email: email,
          }),
        },
      );

      const infor = await response.json();
      if (response.ok) {
        alert("회원가입 성공!");
        router.push(ClientRoute.LOGIN as string);
      } else {
        alert(
          "회원가입 실패: " +
            (infor.message || "알 수 없는 오류가 발생했습니다."),
        );
      }
    } catch (error) {
      console.log(error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center gap-16 px-20 py-4">
      <div className="sr-only">
        <h1>IN MY LINK 회원가입 페이지입니다!</h1>
        <p>필수 정보를 입력해 주세요.</p>
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
        <p className="pageName">IN MY LINK 회원가입</p>
        <p className="text-sm text-gray-500">
          이미 가입하셨나요?
          <Link href={ClientRoute.LOGIN} className="ml-1 text-primary">
            로그인 하기
          </Link>
        </p>
      </div>

      <form onSubmit={handleJoin} className="flex w-full flex-col gap-4">
        {/* 아이디 필드 */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <label
              htmlFor="userId"
              className="text-base font-semibold text-gray-700"
            >
              아이디 <span className="text-red-500">*</span>
            </label>

            {/* 말풍선 아이콘 */}
            <div className="group flex items-center">
              <Image
                src="/assets/icons/icon_help.png"
                alt="question"
                width={20}
                height={20}
              />
              <div className="hidden border-y-4 border-r-4 border-y-transparent border-r-[#343434] group-hover:flex"></div>
              <div className="hidden rounded bg-[#343434] px-2 py-1 text-xs text-white group-hover:flex">
                👈 아이디는 boomco 주소로 사용됩니다 (변경불가)
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-3 text-gray-500">http://link.boomco.com/</span>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onFocus={() => setIsUserIdFocused(true)}
              onBlur={() => {
                setIsUserIdFocused(false);
                setIsUserIdTouched(true);
              }}
              required
              className={twMerge(
                "flex-1 rounded-lg border p-3",
                isUserIdFocused ? "inserted" : "border-gray-300",
              )}
            />
          </div>
          {isUserIdTouched && !userId && (
            <p className="text-sm text-red-500">필수 입력 정보입니다</p>
          )}
        </div>

        {/* 이름 필드 */}
        <FormInput
          label="이름"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => {
            setIsNameFocused(false);
            setIsNameTouched(true);
          }}
          className={twMerge(isNameFocused ? "inserted" : "")}
        />
        {isNameTouched && !name && (
          <p className="text-sm text-red-500">필수 입력 정보입니다</p>
        )}

        {/* 비밀번호 필드 */}
        <FormInput
          label="비밀번호"
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => {
            setIsPasswordFocused(false);
            setIsPasswordTouched(true);
          }}
          className={twMerge(isPasswordFocused ? "inserted" : "")}
        />
        {isPasswordTouched && !password && (
          <p className="text-sm text-red-500">필수 입력 정보입니다</p>
        )}

        {/* 비밀번호 확인 필드 */}
        <FormInput
          label="비밀번호 확인"
          id="passwordConfirm"
          type="password"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          onFocus={() => setIsPasswordConfirmFocused(true)}
          onBlur={() => {
            setIsPasswordConfirmFocused(false);
            setIsPasswordConfirmTouched(true);
          }}
          className={twMerge(isPasswordConfirmFocused ? "inserted" : "")}
        />
        {isPasswordConfirmTouched && !passwordConfirm && (
          <p className="text-sm text-red-500">필수 입력 정보입니다</p>
        )}
        {passwordConfirm && password !== passwordConfirm && (
          <p className="text-sm text-red-500">비밀번호가 일치하지 않습니다</p>
        )}

        {/* 이메일 필드 */}
        <FormInput
          label="이메일"
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => {
            setIsEmailFocused(false);
            setIsEmailTouched(true);
          }}
          className={twMerge(isEmailFocused ? "inserted" : "")}
        />
        {isEmailTouched && !email && (
          <p className="text-sm text-red-500">필수 입력 정보입니다</p>
        )}

        {/* 가입 완료 버튼 */}
        <button
          type="submit"
          className={twMerge("button color mt-4", isDisabled && "disable")}
          disabled={isDisabled}
        >
          IN MY LINK 가입완료
        </button>
      </form>
    </div>
  );
}
