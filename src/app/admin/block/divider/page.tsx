"use client";

import { useState } from "react";
import Layout from "../components/layout";
import DividerPreview from "./components/divider-preview";
import DividerSelector from "./components/divider-selector";
import { DividerType } from "./types";
import ButtonBox from "../components/buttons/button-box";
import AddButton from "../components/buttons/add-button";

export default function DividerPage() {
  const [selectedDivider, setSelectedDivider] = useState<DividerType>("공백");

  const handleAddButtonClick = () => {
    console.log(`선택된 구분선: ${selectedDivider}`);
  };

  return (
    <Layout title="구분선 블록">
      <DividerPreview selectedDivider={selectedDivider} />
      <DividerSelector
        onSelect={setSelectedDivider}
        selected={selectedDivider}
      />
      <ButtonBox>
        <AddButton text="추가 완료" onClick={handleAddButtonClick} />
      </ButtonBox>
    </Layout>
  );
}
