import React from "react";
import { DividerType } from "../types";

interface DividerPreviewProps {
  selectedDivider: DividerType;
}

const DividerPreview = ({ selectedDivider }: DividerPreviewProps) => {
  return (
    <div className="mb-4 space-y-2">
      <h3 className="text-[14px]">
        미리보기{" "}
        <span className="text-[12px] font-normal text-gray-700">
          (예시 블록입니다)
        </span>
      </h3>
    </div>
  );
};

export default DividerPreview;
