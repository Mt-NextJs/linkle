import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}
const AddButton = ({ text, onClick, disabled }: Props) => {
  const bgColor = disabled ? "bg-orange-100" : "bg-orange-600";
  const textColor = disabled ? "text-orange-300" : "text-slate-200";
  return (
    <button
      className={`h-12 w-full rounded-lg ${bgColor} ${textColor} font-bold`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default AddButton;
