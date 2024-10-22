"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function StylePreview({
  selectedStyle,
  title,
  linkImg,
  setIsImgUrlConnectionError,
  isValidUrl,
}: {
  selectedStyle: string;
  title: string;
  linkImg: string;
  setIsImgUrlConnectionError: Dispatch<SetStateAction<boolean>>;
  isValidUrl: (url: string) => boolean;
}) {
  const placeholderImage =
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  const [hasImgError, setHasImgError] = useState(false);

  const checkImageExists = async (url: string) => {
    try {
      const response = await fetch(url, { method: "HEAD" });
      return (
        response.ok && response.headers.get("Content-Type")?.startsWith("image/")
      );
    } catch {
      return false;
    }
  };

  // 이미지 URL이 변경될 때마다 이미지 로드 상태를 초기화
  useEffect(() => {
    if (selectedStyle === "배경" && linkImg && isValidUrl(linkImg)) {
      setHasImgError(false);
      setIsImgUrlConnectionError(false);

      // 이미지 로드 비동기 처리(배경 이미지 일 때)
      const img = new window.Image();
      img.src = linkImg;

      img.onload = () => {
        setHasImgError(false); // 이미지 로드 성공
      };

      img.onerror = () => {
        setHasImgError(true); // 이미지 로드 실패시 메시지 표시
        setIsImgUrlConnectionError(true);
      };
    } else if (!isValidUrl(linkImg)) {
      // URL이 유효하지 않으면 메시지 표시x
      setHasImgError(false);
      setIsImgUrlConnectionError(false);
    }
  }, [linkImg, selectedStyle, setIsImgUrlConnectionError, isValidUrl]);

  // Image에서 error 발생시 오류 메시지 출력
  const imgErrorHandler = () => {
    setHasImgError(true);
    setIsImgUrlConnectionError(true);
  };

  const imgUrl =
    !hasImgError && isValidUrl(linkImg) ? linkImg : placeholderImage;

  const backgroundStyle =
    !hasImgError && isValidUrl(linkImg)
      ? { backgroundImage: `url(${linkImg}), url(${placeholderImage})` }
      : { backgroundImage: `url(${placeholderImage})` };

  return (
    <div
      className={twMerge(
        "flex h-32 w-full items-center justify-center rounded-sm bg-[#F6F6F6] transition-all duration-700 ease-in-out",
        selectedStyle === "카드" && "h-[580px]",
      )}
    >
      {selectedStyle === "썸네일" && (
        <div className="flex h-[86px] w-[530px] items-center rounded-lg bg-white shadow-md">
          <div className="flex w-full items-center">
            <div className="ml-[6px] flex w-1/5 justify-start">
              <Image
                src={imgUrl}
                alt={`${selectedStyle} 미리보기`}
                width={75}
                height={75}
                className="h-[75px] w-[75px] rounded-lg bg-gray-300 object-cover"
                onError={imgErrorHandler}
              />
            </div>
            <div className="flex w-4/5 items-center justify-center pr-[27px]">
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
        <div className="flex h-[500px] w-[500px] flex-col items-center justify-start gap-4 rounded-xl bg-white drop-shadow-md">
          <div className="relative h-[450px] w-full overflow-hidden rounded-t-xl bg-gray-300">
            <Image
              src={imgUrl}
              alt={`${selectedStyle} 미리보기`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-xl"
              onError={imgErrorHandler}
            />
          </div>
          <p>{title || "타이틀을 입력해주세요"}</p>
        </div>
      )}

      {selectedStyle === "배경" && (
        <div
          className={`relative flex h-[86px] w-[530px] items-center justify-center rounded-lg bg-gray-300 bg-cover bg-center`}
          style={backgroundStyle}
        >
          {!hasImgError && isValidUrl(linkImg) && (
            <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
          )}
          <p
            className={twMerge(
              "relative",
              !hasImgError && isValidUrl(linkImg) && "text-white",
            )}
          >
            {title || "타이틀을 입력해주세요"}
          </p>
        </div>
      )}
    </div>
  );
}
