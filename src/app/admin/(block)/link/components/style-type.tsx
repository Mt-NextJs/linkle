import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export default function StyleType({
  name,
  imgIdx,
  selectedStyle,
  onSelect,
  setLinkImg,
  setIsImgUrlConnectionErrorMsg,
}: {
  name: string;
  imgIdx: number;
  selectedStyle: string;
  onSelect: (style: string) => void;
  setLinkImg: Dispatch<SetStateAction<string>>;
  setIsImgUrlConnectionErrorMsg: Dispatch<SetStateAction<boolean>>;
}) {
  const isSelected = selectedStyle === name;

  function clickHandler() {
    onSelect(name);
    if (selectedStyle === "심플") {
      setLinkImg("");
      setIsImgUrlConnectionErrorMsg(false);
    }
  }

  return (
    <label
      htmlFor={name}
      key={name}
      className="flex w-[185px] cursor-pointer flex-col items-center"
      onClick={clickHandler}
      aria-label={isSelected ? `${name} 선택됨` : `${name} 선택`}
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
          width={70}
          height={70}
          style={{ objectFit: "contain" }}
          aria-label={`${name} 이미지`}
        />
        {isSelected && (
          <Image
            src={"/assets/icons/icon_check_mark_circle.png"}
            alt="check mark"
            width={24}
            height={24}
            className="absolute bottom-1 right-1"
            aria-label={`선택된 ${name} 이미지`}
          />
        )}
      </div>
      <p
        className={twMerge(
          "mt-2 text-base font-normal",
          isSelected ? "text-gray-600" : "text-gray-300",
        )}
        aria-label={`${name} 이름`}
      >
        {name}
      </p>
    </label>
  );
}
