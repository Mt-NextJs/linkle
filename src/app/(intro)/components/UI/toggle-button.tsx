"use client";

import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <button
      onClick={toggle}
      className={`flex h-6 w-12 items-center rounded-full p-1 transition duration-300 ease-in-out ${
        isOn ? "bg-indigo-400" : "bg-gray-300"
      }`}
    >
      <div
        className={`h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
