"use client";

import { useState } from "react";
import Layout from "../components/layout";
import DividerPreview from "./components/divider-preview";
import DividerSelector from "./components/divider-selector";
import { DividerType } from "./types";
import ButtonBox from "@app/components/buttons/button-box";
import AddButton from "@app/components/buttons/add-button";
import { getSequence } from "lib/get-sequence";

export default function DividerPage() {
  const [selectedDivider, setSelectedDivider] = useState<DividerType>("공백");

  const handleAddDivider = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) throw new Error("인증 토큰이 없습니다. 다시 로그인해주세요.");

      const nextSequence = await getSequence(token);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            type: 1,
            sequence: nextSequence + 1,
            style: getDividerStyle(selectedDivider),
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "서버 응답이 실패했습니다.");
      }

      console.log("서버 응답:", data);
      alert("구분선이 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("구분선 추가 중 오류 발생:", error);
      alert(
        error instanceof Error
          ? `오류: ${error.message}`
          : "알 수 없는 오류가 발생했습니다.",
      );
    }
  };

  const getDividerStyle = (dividerType: DividerType): number => {
    const styles: Record<DividerType, number> = {
      공백: 1,
      점선: 2,
      실선: 3,
      포인트: 4,
      지그재그: 5,
    };
    return styles[dividerType] || 1;
  };

  return (
    <Layout title="구분선 블록">
      <DividerPreview selectedDivider={selectedDivider} />
      <DividerSelector
        onSelect={setSelectedDivider}
        selected={selectedDivider}
      />
      <ButtonBox>
        <AddButton text="추가 완료" onClick={handleAddDivider} />
      </ButtonBox>
    </Layout>
  );
}
