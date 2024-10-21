"use client";

import React, { useEffect, useState } from "react";
import Layout from "@app/admin/block/components/layout";
import TextInputBox from "@app/admin/block/components/text-input-box";
import AddButton from "@app/admin/block/components/buttons/add-button";
import ButtonBox from "@app/admin/block/components/buttons/button-box";

const Page = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [iframeUrl, setIframeUrl] = useState<string>("");

  // const params = {
  //   type: 2,
  //   url: videoUrl,
  //   // sequence: number
  // };
  const params = {
    name: "test2000",
    userId: "test2000",
    password: "1234",
    email: "test2000@google.com",
  };

  const signUp = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        },
      );
      if (response.ok) {
        console.log(response);
        alert("회원가입 완료");
      } else {
        const { status } = response;
        if (status === 400) {
          alert("존재하는 아이디입니다.");
        }
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
    const videoId = extractVideoID(videoUrl);
    setIframeUrl(
      videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl,
    );
  };
  return (
    <Layout title={"비디오 블록"}>
      <TextInputBox
        title="동영상 URL"
        placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
        text={videoUrl}
        setText={setVideoUrl}
        required={true}
      />
      {iframeUrl && (
        <object data={iframeUrl} width="400" height="300">
          <div>hi</div>
        </object>
      )}
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
