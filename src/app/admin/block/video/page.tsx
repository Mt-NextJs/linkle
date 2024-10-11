"use client";

import React, { useState } from "react";
import BlockModal from "@app/admin/block/components/block-modal";
import TextInputBox from "@app/admin/block/components/text-input-box";
import AddButton from "@app/admin/block/components/add-button";
import ButtonBox from "@app/admin/block/components/button-box";

const Page = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [iframeUrl, setIframeUrl] = useState<string>("");

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
    <BlockModal title={"비디오 블록"}>
      <TextInputBox
        title="동영상 URL"
        placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
        text={videoUrl}
        setText={setVideoUrl}
        required={true}
      />
      {iframeUrl && <iframe src={iframeUrl} className="rounded-lg" />}
      <ButtonBox>
        <AddButton
          text="추가 완료"
          onClick={handleAddButtonClick}
          disabled={!videoUrl}
        />
      </ButtonBox>
    </BlockModal>
  );
};

export default Page;
