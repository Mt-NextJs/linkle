import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function StylePreview({
  selectedStyle,
  title,
  linkImg,
}: {
  selectedStyle: string;
  title: string;
  linkImg: string;
}) {
  const placeholderImage =
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  return (
    <div
      className={twMerge(
        "flex h-32 w-full items-center justify-center rounded-sm bg-[#F6F6F6]",
        selectedStyle === "카드" && "h-[580px]",
      )}
    >
      {selectedStyle === "썸네일" && (
        <div className="flex h-[86px] w-[530px] items-center rounded-lg bg-white shadow-md">
          <div className="flex w-full items-center">
            <div className="ml-[6px] flex w-1/5 justify-start">
              <Image
                src={linkImg || placeholderImage}
                alt={`${selectedStyle} 미리보기`}
                width={75}
                height={75}
                className="rounded-lg bg-gray-300"
              />
            </div>
            <div className="mr-[37px] flex w-4/5 items-center justify-center">
              <p>{title || "타이틀을 입력해주세요"}</p>
            </div>
          </div>
        </div>
      )}

      {selectedStyle === "심플" && (
        <div className="flex h-[86px] w-[530px] items-center justify-center rounded-lg bg-white shadow-md">
          <p>{title || "타이틀을 입력해주세요"}</p>
        </div>
      )}

      {selectedStyle === "카드" && (
        <div className="flex h-[500px] w-[500px] flex-col items-center justify-start gap-[14px] rounded-xl bg-white drop-shadow-md">
          <Image
            src={linkImg || placeholderImage}
            alt={`${selectedStyle} 미리보기`}
            width={500}
            height={450}
            className="h-[450px] rounded-t-xl bg-gray-300"
          />
          <p>{title || "타이틀을 입력해주세요"}</p>
        </div>
      )}

      {selectedStyle === "배경" && (
        <div className="flex h-[86px] w-[530px] items-center justify-center rounded-lg bg-white">
          <p>{title || "타이틀을 입력해주세요"}</p>
        </div>
      )}
    </div>
  );
}