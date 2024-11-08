"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { User } from "@/types/user";
import FormInput from "@app/admin/(block)/components/form-input";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import AnimatedText from "@components/common/ui/animated-text";
import { getCookie } from "lib/get-cookie";

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export default function ProfileEdit() {
  const [userData, setUserData] = useState<User | null>(null);
  const [originalData, setOriginalData] = useState<User | null>(null);
  const [isChanged, setIsChanged] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  // 필수 필드 검증
  const validateField = useCallback((fieldName: string, value: string) => {
    const fieldNamesInKorean: { [key: string]: string } = {
      name: "이름",
      email: "이메일",
      password: "비밀번호",
      passwordConfirm: "비밀번호 확인",
    };

    if (!value || value.trim() === "") {
      return `${fieldNamesInKorean[fieldName]}은(는) 필수 입력 항목입니다`;
    }
    if (fieldName === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "유효한 이메일 주소를 입력해주세요";
    }
    return "";
  }, []);

  // 폼 전체 검증
  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!userData?.name) {
      newErrors.name = validateField("이름", "");
    }
    if (!userData?.email) {
      newErrors.email = validateField("이메일", "");
    }
    if (!password) {
      newErrors.password = validateField("비밀번호", "");
    }
    if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
    }

    return newErrors;
  }, [userData, password, passwordConfirm, validateField]);

  // 변경 사항 확인
  const checkChanges = useCallback(() => {
    if (!originalData || !userData) return false;

    return (
      originalData.name !== userData.name ||
      originalData.email !== userData.email ||
      password !== ""
    );
  }, [originalData, userData, password]);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await fetch("/api/user/info", {
          headers: {},
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          setUserData(data.user);
          setOriginalData(data.user);
        } else {
          throw new Error("사용자 정보를 불러오는데 실패했습니다");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        alert("사용자 정보를 불러오는데 실패했습니다. 다시 시도해주세요.");
      }
    }
    fetchUserInfo();
  }, []);

  // 입력 필드 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => (prev ? { ...prev, [name]: value } : null));

    // 필드 검증
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    // 변경 사항 확인
    setIsChanged(checkChanges());
  };

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);

    // 비밀번호 검증
    const error = validateField("비밀번호", value);
    setErrors((prev) => ({ ...prev, password: error }));
    setTouched((prev) => ({ ...prev, password: true }));

    // 비밀번호 확인 필드 검증
    if (passwordConfirm && value !== passwordConfirm) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirm: "비밀번호가 일치하지 않습니다",
      }));
    }

    setIsChanged(true);
  };

  // 비밀번호 확인 변경 핸들러
  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setPasswordConfirm(value);

    setErrors((prev) => ({
      ...prev,
      passwordConfirm: value !== password ? "비밀번호가 일치하지 않습니다" : "",
    }));
    setTouched((prev) => ({ ...prev, passwordConfirm: true }));
  };

  // 필드 포커스 아웃 핸들러
  const handleBlur = (name: string, value: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // 폼 제출 핸들러
  const handleUpdate = async () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // 모든 필드를 touched 상태로 변경
      const allTouched = Object.keys(formErrors).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {},
      );
      setTouched(allTouched);
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("회원 정보가 성공적으로 수정되었습니다.");
        router.push(`/profile/detail`);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "회원 정보 수정에 실패했습니다");
      }
    } catch (error) {
      console.error("Failed to update user info:", error);
      alert("회원 정보 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const isSubmitDisabled = !isChanged || Object.values(errors).some((e) => e);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen flex-col justify-center gap-16 px-20 py-4">
      <div className="sr-only">
        <h1>IN MY LINK 회원 정보 수정 페이지입니다!</h1>
        <p>회원님의 정보를 수정하세요.</p>
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
        <p className="pageName">IN MY LINK 회원 정보 수정</p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <FormInput
          label="아이디"
          id="userId"
          value={userData.userId}
          readOnly
          className="border-gray-300 bg-gray-100"
        />

        <FormInput
          label="이름"
          id="name"
          name="name"
          required
          value={userData.name}
          onChange={handleChange}
          onBlur={(e) => handleBlur("name", e.target.value)}
          className="border p-3"
        />
        <AnimatedText isVisible={touched.name && !!errors.name}>
          {errors.name || ""}
        </AnimatedText>

        <FormInput
          label="이메일"
          id="email"
          name="email"
          type="email"
          required
          value={userData.email || ""}
          onChange={handleChange}
          onBlur={(e) => handleBlur("email", e.target.value)}
          className="border p-3"
        />
        <AnimatedText isVisible={touched.email && !!errors.email}>
          {errors.email || ""}
        </AnimatedText>

        <FormInput
          label="비밀번호"
          id="password"
          type="password"
          required
          value={password}
          onChange={handlePasswordChange}
          onBlur={(e) => handleBlur("password", e.target.value)}
          className="border p-3"
        />
        <AnimatedText isVisible={touched.password && !!errors.password}>
          {errors.password || ""}
        </AnimatedText>

        <FormInput
          label="비밀번호 확인"
          id="passwordConfirm"
          type="password"
          required
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          onBlur={() =>
            setTouched((prev) => ({ ...prev, passwordConfirm: true }))
          }
          className="border p-3"
        />
        <AnimatedText
          isVisible={touched.passwordConfirm && !!errors.passwordConfirm}
        >
          {errors.passwordConfirm || ""}
        </AnimatedText>

        <button
          onClick={handleUpdate}
          className={twMerge(
            "button color mt-16 transition-opacity duration-500",
            isSubmitDisabled
              ? "pointer-events-none cursor-not-allowed opacity-50"
              : "animate-insideout opacity-100",
          )}
          disabled={isSubmitDisabled}
        >
          수정 완료
        </button>
      </div>
    </div>
  );
}
