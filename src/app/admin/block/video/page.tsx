"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import Layout from "@app/admin/block/components/layout";
import TextInputBox from "@app/admin/block/components/text-input-box";
import AddButton from "@app/admin/block/components/buttons/add-button";
import ButtonBox from "@app/admin/block/components/buttons/button-box";
import { useRouter } from "next/navigation";
import { getSequence } from "../../../../lib/get-sequence";
import FormInput from "@app/admin/block/components/form-input";
import { checkUrl } from "../../../../lib/check-url";

const Page = () => {
  const object = useRef<HTMLObjectElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    console.log(object.current?.validationMessage, "video");
  }, [videoUrl]);

  const addVideoBlock = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const nowSequence = await getSequence(token);
    console.log(nowSequence);
    const params = {
      type: 2,
      url: videoUrl,
      sequence: nowSequence + 1,
    };
    console.log(nowSequence);
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

  const handleAddButtonClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hi");
    addVideoBlock().then();
  };
  const setText = (text: string) => {
    if (!checkUrl(text) && text !== "") {
      alert("이미지 URL을 확인해주세요.");
      return;
    }
    const videoId = extractVideoID(text);
    setVideoUrl(videoId ? `https://www.youtube.com/embed/${videoId}` : text);
  };
  return (
    <Layout title={"비디오 블록"} onSubmit={handleAddButtonClick}>
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
          <object type="text/html" data={videoUrl} width="600" height="320">
            <div>동영상 주소를 확인해주세요</div>
          </object>
        )}
      </div>
      <ButtonBox>
        <AddButton type={"submit"} text="추가 완료" disabled={!videoUrl} />
      </ButtonBox>
    </Layout>
  );
};

export default Page;
