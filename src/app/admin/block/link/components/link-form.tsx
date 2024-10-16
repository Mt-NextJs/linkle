"use client";

import { FormEvent, useEffect, useState } from "react";
import StylePreview from "./style-preview";
import StyleType from "./style-type";
import FormInput from "./form-input";
import { getSequence } from "lib/get-sequence";

const styleItemNames = ["썸네일", "심플", "카드", "배경"];

async function getToken() {
  const loginData = {
    userId: "linkle",
    password: "1234",
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      },
    );

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const result = await response.json();
    if (result.code === 200) {
      return result.data.token;
    }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Login error occurred",
    );
  }
}

export default function LinkForm() {
  const [selectedStyle, setSelectedStyle] = useState("썸네일");
  const [title, setTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [isImageError, setIsImageError] = useState(false);

  async function postLink() {
    const token = await getToken();
    const prevSequence = await getSequence(token);

    const postData = {
      type: 3,
      sequence: prevSequence + 1,
      style: styleItemNames.indexOf(selectedStyle) + 1,
      title,
      url: linkUrl.trim(),
      imgUrl: linkImg.trim(),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/add`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        },
      );

      if (!response.ok) {
        const errorResponse = await response.json(); // 서버에서 반환한 오류 메시지를 파싱
        throw new Error(
          `Error: ${response.status}, Message: ${errorResponse.message || "Unknown error"}`,
        );
      }

      // const responseData = await response.json();
      // console.log(responseData);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An error occurred",
      );
    }
  }

  useEffect(() => {
    if (linkImg) setIsImageError(false);
  }, [linkImg]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLink();
    setSelectedStyle("썸네일");
    setTitle("");
    setLinkUrl("");
    setLinkImg("");
  };

  return (
    <>
      <StylePreview
        selectedStyle={selectedStyle}
        title={title}
        linkImg={linkImg}
        setIsImageError={setIsImageError}
      />

      <form onSubmit={handleSubmit} className="mt-8">
        {/* 스타일 */}
        <div className="w-full">
          <h3 className="title mb-[10px]">
            스타일 <span className="text-red-500">*</span>
          </h3>
          <div className="flex gap-5">
            {styleItemNames.map((name, idx) => (
              <StyleType
                key={name}
                name={name}
                imgIdx={idx}
                selectedStyle={selectedStyle}
                onSelect={setSelectedStyle}
              />
            ))}
          </div>
        </div>

        <div className="my-8 border-t-2 border-[#F6F6F6]"></div>

        {/* Info */}
        <section className="flex flex-col gap-8">
          <FormInput
            label="연결할 주소"
            type="url"
            id="linked-url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="연결할 주소 url을 입력해주세요"
            required
          />
          <FormInput
            label="타이틀"
            type="text"
            id="link-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="타이틀을 입력해주세요"
            required
          />
          <div className="h-[110px]">
            <FormInput
              label="이미지"
              type="url"
              id="linked-img"
              value={linkImg}
              onChange={(e) => setLinkImg(e.target.value)}
              placeholder="이미지 url을 입력해주세요"
              disabled={selectedStyle === "심플"}
              required={selectedStyle !== "심플"}
            />
            {isImageError && (
              <div className="mt-1 text-red-500">잘못된 이미지 경로입니다</div>
            )}
          </div>
        </section>

        <div className="my-9 h-3 w-full bg-gray-200"></div>

        <button
          type="submit"
          className="h-14 w-full rounded bg-primary-100 font-bold text-primary-200 hover:bg-primary-450 hover:text-white"
        >
          추가 완료
        </button>
      </form>
    </>
  );
}
