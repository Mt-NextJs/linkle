import React from "react";

type Props = {
  text: string;
} & React.ComponentPropsWithoutRef<"button">;
const AddButton = ({ text, ...buttonProps }: Props) => {
  const { disabled } = buttonProps;
  const bgColor = disabled ? "bg-primary-100" : "bg-primary-450";
  const textColor = disabled ? "text-orange-300" : "text-slate-200";

  return (
    <button
      className={`h-14 w-full rounded-lg ${bgColor} ${textColor} font-bold`}
      {...buttonProps}
    >
      {text}
    </button>
  );
};

export default AddButton;
