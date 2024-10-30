"use client";

import { getSequence } from "../../../../lib/get-sequence";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "../components/layout";
import FormInput from "../components/form-input";
import ButtonBox from "../components/buttons/button-box";
import AddButton from "../components/buttons/add-button";
import { useState } from "react";
import { adminApiInstance } from "../../../../utils/apis";
import useToken from "../../../../utils/get-token";

export default function TextPage() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const token = useToken();
  const prevPath = useSearchParams().get("prevPath") || "/admin";

  const addTextBlock = async (e: React.FormEvent) => {
    e.preventDefault();
    const params = {
      type: 6,
      title,
    };

    const blockApis = await adminApiInstance;
    const response = await blockApis.addBlock(token, params);
    if (!response) return;
    if (response.ok) {
      alert("텍스트 블록 추가 완료");
      router.push("/admin");
    } else await blockApis.handleError(response);
  };
  return (
    <>
      <Layout title={"텍스트 블록"} onSubmit={addTextBlock} prevPath={prevPath}>
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
