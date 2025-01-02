"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function StylePreview({
  selectedStyle,
  title,
  linkImg,
  url,
  setIsImgUrlConnectionErrorMsg,
  isValidUrl,
}: {
  selectedStyle: string;
  title: string;
  linkImg: string;
  url?: string;
  setIsImgUrlConnectionErrorMsg?: Dispatch<SetStateAction<boolean>>;
  isValidUrl?: (url: string) => boolean;
}) {
  const placeholderImage =
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  const [hasImgError, setHasImgError] = useState(false);

  // 이미지 URL이 변경될 때마다 이미지 로드 상태를 초기화
  useEffect(() => {
    if (!isValidUrl || !setIsImgUrlConnectionErrorMsg) return;
    if (selectedStyle === "배경" && linkImg && isValidUrl(linkImg)) {
      setHasImgError(false);
      setIsImgUrlConnectionErrorMsg(false);

      // 이미지 로드 비동기 처리(배경 이미지 일 때)
      const img = new window.Image();
      img.src = linkImg;

      img.onload = () => {
        setHasImgError(false); // 이미지 로드 성공
      };

      img.onerror = () => {
        setHasImgError(true); // 이미지 로드 실패시 메시지 표시
        setIsImgUrlConnectionErrorMsg(true);
      };
    } else if (!isValidUrl(linkImg)) {
      // URL이 유효하지 않으면 메시지 표시x
      setHasImgError(false);
      setIsImgUrlConnectionErrorMsg(false);
    }
  }, [linkImg, selectedStyle, setIsImgUrlConnectionErrorMsg, isValidUrl]);

  // Image에서 error 발생시 오류 메시지 출력
  const imgErrorHandler = () => {
    setHasImgError(true);
    if (!setIsImgUrlConnectionErrorMsg) return;
    setIsImgUrlConnectionErrorMsg(true);
  };

  const imgUrl =
    !hasImgError && isValidUrl && isValidUrl(linkImg)
      ? linkImg
      : placeholderImage;

  const backgroundStyle =
    !hasImgError && isValidUrl && isValidUrl(linkImg)
      ? { backgroundImage: `url(${linkImg}), url(${placeholderImage})` }
      : { backgroundImage: `url(${placeholderImage})` };

  return (
    <Link
      href={url || ""}
      className={!url ? "cursor-default" : ""}
      role={"navigation"}
      aria-label={"링크가 있으면 해당 링크로 이동"}
    >
      <div
        className={twMerge(
          "flex w-full items-center justify-center rounded-lg",
          "transition-all duration-700 ease-in-out",
          "min-h-[6rem] sm:min-h-[8rem]",
          selectedStyle === "카드" && "min-h-[400px] sm:min-h-[580px]",
        )}
        aria-label={"선택된 링크 블록 미리보기"}
      >
        {selectedStyle === "썸네일" && (
          <div
            className="flex w-full items-center rounded-lg bg-[var(--primary-100)] py-2 text-[var(--foreground)] shadow-md"
            aria-label={"썸네일이 있는 블록 스타일"}
          >
            <div className="flex w-full items-center">
              <div className="ml-[6px] flex w-1/5 justify-start">
                <Image
                  src={imgUrl}
                  alt={`${selectedStyle} 미리보기`}
                  width={75}
                  height={75}
                  className="h-[60px] w-[60px] rounded-lg bg-gray-300 object-cover sm:h-[75px] sm:w-[75px]"
                  onError={imgErrorHandler}
                  aria-label={"썸네일 이미지"}
                />
              </div>
              <div className="flex w-4/5 items-center justify-center pr-[27px]">
                <p className="text-sm sm:text-base">
                  {title || "타이틀을 입력해주세요"}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedStyle === "심플" && (
          <div
            className="flex h-[70px] w-full items-center justify-center rounded-lg bg-[var(--primary-100)] text-[var(--foreground)] shadow-md sm:h-[86px]"
            aria-label={"심플한 텍스트 블록 스타일"}
          >
            <p className="px-4 text-center text-sm">
              {title || "타이틀을 입력해주세요"}
            </p>
          </div>
        )}

        {selectedStyle === "카드" && (
          <div
            className="flex h-[350px] w-full flex-col items-center justify-start gap-3 rounded-xl bg-[var(--primary-100)] text-[var(--foreground)] drop-shadow-md sm:h-[420px] md:h-[500px]"
            aria-label={"카드형식의 이미지가 있는 블록 스타일"}
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl bg-gray-300 sm:h-[370px] md:h-[450px]">
              <Image
                src={imgUrl}
                alt={`${selectedStyle} 미리보기`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-xl"
                onError={imgErrorHandler}
                aria-label={"카드 이미지"}
              />
            </div>
            <p className="px-4 text-center text-sm">
              {title || "타이틀을 입력해주세요"}
            </p>
          </div>
        )}

        {selectedStyle === "배경" && (
          <div
            className={`relative flex h-[70px] w-full items-center justify-center rounded-lg bg-slate-333 bg-cover bg-center text-[var(--background)] sm:h-[86px]`}
            style={backgroundStyle}
            aria-label={"배경이 있는 블록 스타일"}
          >
            {!hasImgError && isValidUrl && isValidUrl(linkImg) && (
              <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
            )}
            <p
              className={twMerge(
                "relative px-4 text-center text-sm sm:text-base",
                !hasImgError &&
                  isValidUrl &&
                  isValidUrl(linkImg) &&
                  "text-white",
              )}
            >
              {title || "타이틀을 입력해주세요"}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
