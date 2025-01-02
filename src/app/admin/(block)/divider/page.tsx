"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ButtonBox from "@app/admin/(block)/components/buttons/button-box";
import AddButton from "@app/admin/(block)/components/buttons/add-button";
import { adminApiInstance } from "utils/apis";

import Layout from "../components/layout";
import DividerPreview from "./components/divider-preview";
import DividerSelector from "./components/divider-selector";
import { DividerType } from "./types";

function DividerPage() {
  const router = useRouter();
  const [selectedDivider, setSelectedDivider] = useState<DividerType>("Space");
  const prevPath = useSearchParams().get("prevPath") || "/admin";

  const handleAddDivider = async () => {
    const params = {
      type: 1,
      style: getDividerStyle(selectedDivider),
    };

    const blockApis = await adminApiInstance;
    const response = await blockApis.addBlock(params);
    if (!response) return;
    if (response.ok) {
      alert("구분선 블록 추가 완료");
      router.push("/admin");
    } else await blockApis.handleResponseError(response);
  };

  const getDividerStyle = (dividerType: DividerType): number => {
    const styles: Record<DividerType, number> = {
      Space: 1,
      Dashed: 2,
      Solid: 3,
      Point: 4,
      Zigzag: 5,
    };
    return styles[dividerType] || 1;
  };

  return (
    <Layout title="구분선 블록" prevPath={prevPath}>
      <DividerPreview selectedDivider={selectedDivider} />
      <DividerSelector
        onSelect={setSelectedDivider}
        selected={selectedDivider}
      />
      <ButtonBox>
        <AddButton
          text="추가 완료"
          onClick={handleAddDivider}
          aria-label="구분선 블록 추가하기"
        />
      </ButtonBox>
    </Layout>
  );
}

export default function PageWithSuspense() {
  return (
    <Suspense
      fallback={
        <div role="status" aria-label="페이지 로딩 중...">
          Loading...
        </div>
      }
    >
      <DividerPage />
    </Suspense>
  );
}
