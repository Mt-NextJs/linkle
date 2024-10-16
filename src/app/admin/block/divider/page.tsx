"use client";

import { useState } from "react";
import Layout from "../components/layout";
import DividerPreview from "./components/divider-preview";
import DividerSelector from "./components/divider-selector";
import { DividerType } from "./types";

export default function DividerPage() {
  const [selectedDivider, setSelectedDivider] = useState<DividerType>("공백");

  return (
    <Layout title="구분선 블록">
      <DividerPreview selectedDivider={selectedDivider} />
      <DividerSelector
        onSelect={setSelectedDivider}
        selected={selectedDivider}
      />
    </Layout>
  );
}
