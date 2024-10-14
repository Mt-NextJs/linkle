"use client";

import { FormEvent, useState } from "react";
import StylePreview from "./style-preview";
import StyleType from "./style-type";

const styleItemNames = ["썸네일", "심플", "카드", "배경"];

// "PARAM": {
//             "type": 3, // 블록 타입(필수)
//             "sequence": 4, // 블록 순서(필수)
//             "style": 1, // 카드 스타일(1~4)
//             "title": "링크 블록", // 타이틀
//             "url": "https://www.naver.com", // 연결 url
//             "imgUrl": "" // 이미지 url
//         }

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
            <input
              type="url"
              id="linked-url"
              placeholder="연결할 주소 url을 입력해주세요"
            />
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
              placeholder="타이틀을 입력해주세요"
            />
          </div>

          <div className="mt-2">
            <label className="title mb-[10px] block" htmlFor="linked-img">
              이미지 <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="linked-img"
              value={linkImg}
              onChange={(e) => setLinkImg(e.target.value)}
              placeholder="이미지 url을 입력해주세요"
              required
              pattern="https?://.+"
            />
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
