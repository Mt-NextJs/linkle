"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import StylePreview from "./style-preview";
import StyleType from "./style-type";
import FormInput from "../../components/form-input";
import { getSequence } from "lib/get-sequence";
import AddButton from "@app/admin/(block)/components/buttons/add-button";
import ButtonBox from "@app/admin/(block)/components/buttons/button-box";
import Layout from "@app/admin/(block)/components/layout";
import { useRouter, useSearchParams } from "next/navigation";
import { adminApiInstance } from "../../../../../utils/apis";
import useToken from "../../../../../utils/get-token";

const styleItemNames = ["썸네일", "심플", "카드", "배경"];

export default function LinkForm() {
  const [selectedStyle, setSelectedStyle] = useState("썸네일");
  const [title, setTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [isLinkUrlError, setIsLinkUrlError] = useState(false);
  const [isImgUrlError, setIsImgUrlError] = useState(false);
  const [isImgUrlConnectionError, setIsImgUrlConnectionError] = useState(false);
  const prevPath = useSearchParams().get("prevPath") || "/admin";

  const isValidUrl = useCallback(
    (url: string) => /^https?:\/\/.+\..+/.test(url),
    [],
  );
  const router = useRouter();
  const token = useToken();

  async function postLink() {
    const postData = {
      type: 3,
      style: styleItemNames.indexOf(selectedStyle) + 1,
      title,
      url: linkUrl.trim(),
      imgUrl: linkImg.trim(),
    };

    const blockApis = await adminApiInstance;
    const response = await blockApis.addBlock(token, postData);
    if (!response) return;
    if (response.ok) {
      alert("링크 블록이 성공적으로 추가되었습니다🥰");
      router.push("/admin");
    } else await blockApis.handleError(response);
  }

  useEffect(() => {
    if (linkImg) setIsImgUrlConnectionError(false);
  }, [linkImg]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLink();
    setSelectedStyle("썸네일");
    setTitle("");
    setLinkUrl("");
    setLinkImg("");
  };

  const handleLinkUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setLinkUrl(newUrl);
    if (newUrl.trim() === "") {
      setIsLinkUrlError(false);
    } else {
      setIsLinkUrlError(!isValidUrl(newUrl));
    }
  };
  const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setLinkImg(newUrl);
    if (newUrl.trim() === "") {
      setIsImgUrlError(false);
    } else {
      setIsImgUrlError(!isValidUrl(newUrl));
    }
  };

  const summitButtonDisabled =
    isLinkUrlError ||
    isImgUrlError ||
    isImgUrlConnectionError ||
    (selectedStyle === "심플" && (!linkUrl || !title)) ||
    (selectedStyle !== "심플" && (!linkUrl || !title || !linkImg));

  return (
    <Layout title="링크 블록" onSubmit={handleSubmit} prevPath={prevPath}>
      <StylePreview
        selectedStyle={selectedStyle}
        title={title}
        linkImg={linkImg}
        setIsImgUrlConnectionError={setIsImgUrlConnectionError}
        isValidUrl={isValidUrl}
      />

      <div className="mt-6">
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
                setLinkImg={setLinkImg}
                setIsImgUrlConnectionError={setIsImgUrlConnectionError}
              />
            ))}
          </div>
        </div>

        <hr className="border-gray-105 my-8 border-t-2" />

        {/* Info */}
        <section className="flex flex-col gap-3">
          <div className="h-[104px]">
            <FormInput
              label="연결할 주소"
              type="url"
              id="linked-url"
              value={linkUrl}
              onChange={handleLinkUrlChange}
              placeholder="연결할 주소 url을 입력해주세요"
              required
            />
            {isLinkUrlError && (
              <div className="mt-1 h-5 text-xs text-red-500">
                올바른 URL 형식을 입력해주세요
              </div>
            )}
          </div>
          <div className="h-[104px]">
            <FormInput
              label="타이틀"
              type="text"
              id="link-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="타이틀을 입력해주세요"
              required
              maxLength={30}
            />
          </div>
          <div className="h-[104px]">
            <FormInput
              label="이미지"
              type="url"
              id="linked-img"
              value={linkImg}
              onChange={handleImgUrlChange}
              placeholder="이미지 url을 입력해주세요"
              disabled={selectedStyle === "심플"}
              required={selectedStyle !== "심플"}
            />
            {isImgUrlError && (
              <div className="mt-1 h-5 text-xs text-red-500">
                올바른 URL 형식을 입력해주세요
              </div>
            )}
            {isImgUrlConnectionError && (
              <div className="mt-1 h-5 text-xs text-red-500">
                잘못된 이미지 경로입니다
              </div>
            )}
          </div>
        </section>
        <hr className="border-gray-105 my-2 border-t-8" />

        <ButtonBox>
          <AddButton
            type={"submit"}
            text="추가 완료"
            disabled={summitButtonDisabled}
          />
        </ButtonBox>
      </div>
    </Layout>
  );
}
