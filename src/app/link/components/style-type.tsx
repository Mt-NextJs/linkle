import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function StyleType({
  name,
  imgIdx,
}: {
  name: string;
  imgIdx: number;
}) {
  return (
    <label
      key={name}
      className="flex w-[185px] cursor-pointer flex-col items-center"
    >
      <input type="radio" name="style" value={name} className="hidden" />
      <div
        className={twMerge(
          "flex h-[68px] w-full justify-center rounded-lg border-2 border-neutral-200 px-6 py-4",
          name === "카드" && "py-2",
        )}
      >
        <Image
          src={`/assets/icons/item_card_00${imgIdx + 1}.png`}
          alt={name}
          width={70}
          height={70}
        />
      </div>
      {/* 선택됐을 때, style -> title */}
      <p className="mt-2 text-gray-300">{name}</p>
    </label>
  );
}
