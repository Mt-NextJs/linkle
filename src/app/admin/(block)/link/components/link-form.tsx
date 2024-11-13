"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import AddButton from "@app/admin/(block)/components/buttons/add-button";
import ButtonBox from "@app/admin/(block)/components/buttons/button-box";
import Layout from "@app/admin/(block)/components/layout";
import { checkUrl } from "lib/check-url";

import { adminApiInstance } from "../../../../../utils/apis";
import FormInput from "../../components/form-input";
import StylePreview from "./style-preview";
import StyleType from "./style-type";

const styleItemNames = ["썸네일", "심플", "카드", "배경"];

export default function LinkForm() {
  const [selectedStyle, setSelectedStyle] = useState("썸네일");
  const [title, setTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [isLinkUrlErrorMsg, setIsLinkUrlErrorMsg] = useState(false);
  const [isImgUrlErrorMsg, setIsImgUrlErrorMsg] = useState(false);
  const [isImgUrlConnectionErrorMsg, setIsImgUrlConnectionErrorMsg] =
    useState(false);
  const prevPath = useSearchParams().get("prevPath") || "/admin";

  // const isValidUrl = useCallback(
  //   (url: string) => /^https?:\/\/.+\..+/.test(url),
  //   [],
  // );

  const isValidUrl = useCallback((url: string) => checkUrl(url), []);

  const router = useRouter();

  async function postLink() {
    const postData = {
      type: 3,
      style: styleItemNames.indexOf(selectedStyle) + 1,
      title,
      url: linkUrl.trim(),
      imgUrl: linkImg.trim(),
    };

    const blockApis = await adminApiInstance;
    const response = await blockApis.addBlock(postData);
    if (!response) return;
    if (response.ok) {
      alert("링크 블록이 성공적으로 추가되었습니다🥰");
      router.push("/admin");
    } else await blockApis.handleError(response);
  }

  useEffect(() => {
    if (linkImg) setIsImgUrlConnectionErrorMsg(false);
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
      setIsLinkUrlErrorMsg(false);
    } else {
      setIsLinkUrlErrorMsg(!isValidUrl(newUrl));
    }
  };
  const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setLinkImg(newUrl);
    if (newUrl.trim() === "") {
      setIsImgUrlErrorMsg(false);
    } else {
      setIsImgUrlErrorMsg(!isValidUrl(newUrl));
    }
  };

  const summitButtonDisabled =
    isLinkUrlErrorMsg ||
    isImgUrlErrorMsg ||
    isImgUrlConnectionErrorMsg ||
    (selectedStyle === "심플" && (!linkUrl || !title)) ||
    (selectedStyle !== "심플" && (!linkUrl || !title || !linkImg));

  return (
    <Layout title="링크 블록" onSubmit={handleSubmit} prevPath={prevPath}>
      <StylePreview
        selectedStyle={selectedStyle}
        title={title}
        linkImg={linkImg}
        setIsImgUrlConnectionErrorMsg={setIsImgUrlConnectionErrorMsg}
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
                setIsImgUrlConnectionErrorMsg={setIsImgUrlConnectionErrorMsg}
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
            {isLinkUrlErrorMsg && (
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
            {isImgUrlErrorMsg && (
              <div className="mt-1 h-5 text-xs text-red-500">
                {/* URL 형식이 잘못되었습니다. "http://" 또는 "https://"로 시작하는 유효한 URL을 입력해주세요. */}
              </div>
            )}
            {isImgUrlConnectionErrorMsg && (
              <div className="mt-1 h-5 text-xs text-red-500">
                이미지를 찾을 수 없습니다: URL을 확인해주세요.
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
