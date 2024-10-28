"use client";

import { useState } from "react";
import Layout from "../components/layout";
import DividerPreview from "./components/divider-preview";
import DividerSelector from "./components/divider-selector";
import { DividerType } from "./types";
import ButtonBox from "@app/admin/(block)/components/buttons/button-box";
import AddButton from "@app/admin/(block)/components/buttons/add-button";
import { blockApiInstance } from "utils/apis";
import { useRouter } from "next/navigation";

export default function DividerPage() {
  const [selectedDivider, setSelectedDivider] = useState<DividerType>("공백");
  const router = useRouter();

  const handleAddDivider = async () => {
    const params = {
      type: 1,
      style: getDividerStyle(selectedDivider),
    };

    const blockApis = await blockApiInstance;
    const response = await blockApis.addBlock(params);
    if (!response) return;
    if (response.ok) {
      alert("구분선 블록 추가 완료");
      router.push("/admin");
    } else await blockApis.handleError(response);
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
