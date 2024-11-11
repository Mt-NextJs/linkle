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
        className="rounded-full border bg-white px-6 py-2 font-bold text-gray-600 shadow-xl hover:bg-gray-100 hover:text-gray-800"
      >
        {text}
      </button>
    </div>
  );
};

export default CircleButton;
