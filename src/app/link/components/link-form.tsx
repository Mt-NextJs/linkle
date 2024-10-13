"use client";

import { FormEvent, useState } from "react";
import StylePreview from "./style-preview";
import StyleType from "./style-type";

const styleItemNames = ["썸네일", "심플", "카드", "배경"];

export default function LinkForm() {
  const [selectedStyle, setSelectedStyle] = useState("썸네일");
  const [title, setTitle] = useState("");
  const [linkImg, setLinkImg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    // FormData 객체를 통해 폼 데이터를 가져옴
    const formData = new FormData(formElement);

    // FormData를 일반 객체로 변환 -> post로 보낼 데이터
    const data = Object.fromEntries(formData.entries());
  };

  return (
    <>
      <StylePreview
        selectedStyle={selectedStyle}
        title={title}
        linkImg={linkImg}
      />

      <form onSubmit={handleSubmit} className="mt-6">
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

        <div className="my-6 border-t-2 border-[#F6F6F6]"></div>

        {/* Info */}
        <section className="flex flex-col gap-6">
          <div>
            <label className="title mb-[10px]" htmlFor="linked-url">
              연결할 주소 <span className="text-red-500">*</span>
            </label>
            <input type="text" id="linked-url" />
          </div>
          <div>
            <label className="title mb-[10px]" htmlFor="link-title">
              타이틀 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="link-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <label className="title mb-[10px] block">
              이미지 <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center justify-start">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                value={linkImg}
                onChange={(e) => setLinkImg(e.target.value)}
              />
              <label
                htmlFor="file-upload"
                className="flex h-[94px] w-[94px] cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-200 hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </label>

              <div className="ml-3 text-sm text-gray-500">
                <p>이미지를 직접 끌어오거나</p>
                <p>파일을 선택하여 업로드해주세요</p>
              </div>
            </div>
          </div>
        </section>
        <div className="my-9 h-3 w-full bg-gray-200"></div>

        <button
          type="submit"
          className="h-11 w-full rounded bg-primary-100 text-primary-200"
        >
          추가 완료
        </button>
      </form>
    </>
  );
}
