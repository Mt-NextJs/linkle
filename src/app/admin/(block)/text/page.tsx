"use client";

import { getSequence } from "../../../../lib/get-sequence";
import { useRouter } from "next/navigation";
import Layout from "../components/layout";
import FormInput from "../components/form-input";
import ButtonBox from "../components/buttons/button-box";
import AddButton from "../components/buttons/add-button";
import { useState } from "react";
export default function TextPage() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const addTextBlock = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    const nowSequence = await getSequence(token);
    const params = {
      type: 6,
      sequence: nowSequence + 1,
      title,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(params),
        },
      );
      if (response.ok) {
        alert("텍스트 블록 추가 완료");
        router.push("/admin");
      } else {
        const { status } = response;
        console.log(status);
        if (status === 500) {
          alert("서버 에러");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout title={"텍스트 블록"} onSubmit={addTextBlock}>
        <FormInput
          label="내용 입력"
          id="video-url"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
          maxLength={500}
        />
        <div className="flex items-center justify-center shadow-lg"></div>
        <ButtonBox>
          <AddButton type={"submit"} text="추가 완료" />
        </ButtonBox>
      </Layout>
    </>
  );
}
