"use client";

import React, { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Layout from "@app/admin/(block)/components/layout";
import AddButton from "@app/admin/(block)/components/buttons/add-button";
import ButtonBox from "@app/admin/(block)/components/buttons/button-box";
import FormInput from "@app/admin/(block)/components/form-input";

import { checkImage, checkUrl } from "../../../../lib/check-url";
import { adminApiInstance } from "../../../../utils/apis";

const Page = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const router = useRouter();
  const prevPath = useSearchParams().get("prevPath") || "/admin";

  const addVideoBlock = async () => {
    const params = {
      type: 2,
      url: videoUrl,
    };
    const blockApis = await adminApiInstance;
    const response = await blockApis.addBlock(params);
    if (!response) return;
    if (response.ok) {
      alert("비디오 블록 추가 완료");
      router.push("/admin");
    } else await blockApis.handleError(response);
  };

  function extractVideoID(url: string) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[7].length == 11) return match[7];
    else return null;
  }

  const handleAddButtonClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addVideoBlock().then();
  };
  const setText = (text: string) => {
    if (!checkUrl(text) && text !== "") {
      alert("URL을 입력해주세요.");
      return;
    }
    if (checkImage(text) && text !== "") {
      alert("이미지는 이미지 블록에 추가해주세요.");
      return;
    }
    const videoId = extractVideoID(text);
    setVideoUrl(videoId ? `https://www.youtube.com/embed/${videoId}` : text);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout
        title={"비디오 블록"}
        onSubmit={handleAddButtonClick}
        prevPath={prevPath}
      >
        <FormInput
          label="동영상 URL"
          id="video-url"
          type="url"
          placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
          value={videoUrl}
          onChange={(e) => setText(e.currentTarget.value)}
          required
        />
        <div className="flex items-center justify-center shadow-lg">
          {videoUrl && (
            <object type="text/html" data={videoUrl} width="600" height="400">
              <div>동영상 주소를 확인해주세요</div>
            </object>
          )}
        </div>
        <ButtonBox>
          <AddButton type={"submit"} text="추가 완료" disabled={!videoUrl} />
        </ButtonBox>
      </Layout>
    </Suspense>
  );
};

export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
