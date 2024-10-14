import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function StyleType({
  name,
  imgIdx,
  selectedStyle,
  onSelect,
}: {
  name: string;
  imgIdx: number;
  selectedStyle: string;
  onSelect: (style: string) => void;
}) {
  const isSelected = selectedStyle === name;

  return (
    <label
      htmlFor={name}
      key={name}
      className="flex w-[185px] cursor-pointer flex-col items-center"
      onClick={() => onSelect(name)}
    >
      <input type="radio" value={name} id={name} className="hidden" />
      <div
        className={twMerge(
          "relative flex h-[68px] w-full justify-center rounded-lg border-2 px-6 py-4",
          isSelected ? "border-[#FF5B1A]" : "border-neutral-200",
          name === "카드" && "py-2",
        )}
      >
        <Image
          src={`/assets/icons/item_card_00${imgIdx + 1}.png`}
          alt={name}
          className="h-auto"
          width={70}
          height={70}
        />
        {isSelected && (
          <Image
            src={"/assets/icons/icon_check_mark_circle.png"}
            alt="check mark"
            width={24}
            height={24}
            className="absolute bottom-1 right-1"
          />
        )}
      </div>
      <p
        className={twMerge(
          "mt-2 text-base font-normal",
          isSelected ? "text-gray-600" : "text-gray-300",
        )}
      >
        {name}
      </p>
    </label>
  );
}
