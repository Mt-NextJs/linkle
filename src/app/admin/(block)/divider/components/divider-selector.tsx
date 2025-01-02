import Image from "next/image";

import { Divider, DividerType } from "../types";

interface DividerSelectorProps {
  onSelect: (divider: DividerType) => void;
  selected: DividerType;
}

export default function DividerSelector({
  onSelect,
  selected,
}: DividerSelectorProps) {
  const dividers: {
    name: DividerType;
    displayName: string;
    icon: string | JSX.Element;
    ariaLabel: string;
  }[] = [
    {
      name: "Space",
      displayName: "공백",
      icon: " ",
      ariaLabel: "공백 구분선 선택하기",
    },
    {
      name: "Dashed",
      displayName: "점선",
      icon: "┈┈",
      ariaLabel: "점선 구분선 선택하기",
    },
    {
      name: "Solid",
      displayName: "실선",
      icon: "───",
      ariaLabel: "실선 구분선 선택하기",
    },
    {
      name: "Point",
      displayName: "포인트",
      icon: "· · ·",
      ariaLabel: "포인트 구분선 선택하기",
    },
    {
      name: "Zigzag",
      displayName: "지그재그",
      icon: (
        <Image
          src="/assets/icons/item_zigzag.png"
          alt="Zigzag"
          width={60}
          height={5}
          className="dark:invert"
        />
      ),
      ariaLabel: "지그재그 구분선 선택하기",
    },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center">
        <h3 className="text-base">구분선 모양</h3>
        <span className="ml-1 text-red-500" aria-label="필수 입력">
          *
        </span>
      </div>
      <div
        className="flex space-x-4"
        role="radiogroup"
        aria-label="구분선 스타일 선택"
      >
        {dividers.map((divider) => (
          <div key={divider.name} className="flex flex-col items-center">
            <button
              className={`flex h-16 w-16 items-center justify-center rounded-xl border transition-all ${
                selected === divider.name
                  ? "border-[var(--foreground)] shadow-[0_0_0_1px_var(--foreground)]"
                  : "border-gray-600 hover:border-gray-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(divider.name as DividerType);
              }}
              type="button"
              aria-label={divider.ariaLabel}
              role="radio"
              aria-checked={selected === divider.name}
            >
              <span className="text-2xl">{divider.icon}</span>
            </button>
            <span className="mt-2" aria-hidden="true">
              {divider.displayName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
