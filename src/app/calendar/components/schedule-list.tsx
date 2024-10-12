import Image from "next/image";
import { useState } from "react";

export default function ScheduleList() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="flex w-full max-w-4xl flex-col px-14 py-0">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">추가한 모든 일정</h2>
        <button onClick={toggleOpen} className="cursor-pointer">
          <Image
            src={
              isOpen
                ? "/assets/icons/icon_up.png"
                : "/assets/icons/icon_down.png"
            }
            alt={isOpen ? "접기" : "펼치기"}
            width={20}
            height={20}
            layout="fixed"
          />
        </button>
      </div>
    </div>
  );
}
