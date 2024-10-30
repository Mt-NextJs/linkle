import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
} & React.ComponentPropsWithoutRef<"button">;
const AddButton = ({ text, ...buttonProps }: Props) => {
  const { disabled } = buttonProps;

  return (
    <button
      className={twMerge(
        `h-14 w-full rounded-lg font-bold`,
        disabled ? "bg-primary-100" : "bg-primary-450",
        disabled ? "text-primary-200" : "text-primary-100",
      )}
      {...buttonProps}
    >
      {text}
    </button>
  );
};

export default AddButton;
