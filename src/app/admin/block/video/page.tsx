"use client";

import React, { useEffect, useState } from "react";
import Layout from "@app/admin/block/components/layout";
import TextInputBox from "@app/components/text-input-box";
import AddButton from "@app/components/buttons/add-button";
import ButtonBox from "@app/components/buttons/button-box";
import { useRouter } from "next/navigation";
import { getSequence } from "../../../../lib/get-sequence";

const Page = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [iframeUrl, setIframeUrl] = useState<string>("");
  const router = useRouter();

  const addVideoBlock = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    const nowSequence = await getSequence(token);
    const params = {
      type: 2,
      url: videoUrl,
      sequence: nowSequence + 1,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/link/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(params),
        },
      );
      if (response.ok) {
        alert("비디오 블록 추가 완료");
        router.push("/admin");
      } else {
        const { status } = response;
        console.log(status);
        if (status === 500) {
          alert("서버 에러");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  function extractVideoID(url: string) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[7].length == 11) return match[7];
    else return null;
  }

  const handleAddButtonClick = () => {
    addVideoBlock().then();
  };
  const setText = (text: string) => {
    const videoId = extractVideoID(text);
    setIframeUrl(videoId ? `https://www.youtube.com/embed/${videoId}` : text);
    setVideoUrl(videoId ? `https://www.youtube.com/embed/${videoId}` : text);
  };
  return (
    <Layout title={"비디오 블록"}>
      <TextInputBox
        title="동영상 URL"
        placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
        text={videoUrl}
        setText={setText}
        required={true}
      />
      <div className="flex items-center justify-center">
        {iframeUrl && (
          <object data={iframeUrl} width="600" height="320">
            <div>동영상 주소를 확인해주세요</div>
          </object>
        )}
      </div>
      <ButtonBox>
        <AddButton
          text="추가 완료"
          onClick={handleAddButtonClick}
          disabled={!videoUrl}
        />
      </ButtonBox>
    </Layout>
  );
};

export default Page;
