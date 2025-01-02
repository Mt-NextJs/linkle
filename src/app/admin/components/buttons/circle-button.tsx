import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}
const CircleButton = ({ text, onClick }: Props) => {
  return (
    <div className="flex flex-grow justify-center">
      <button
        onClick={onClick}
        className="rounded-full border bg-white px-4 py-1.5 text-sm font-bold text-gray-600 shadow-xl transition-all duration-200 hover:bg-gray-100 hover:text-gray-800 sm:px-6 sm:py-2 sm:text-base"
      >
        {text}
      </button>
    </div>
  );
};

export default CircleButton;
