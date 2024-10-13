"use client";
import React, { useEffect, useRef, useState } from "react";
import Layout from "@app/admin/block/components/layout";
import TextInputBox from "@app/admin/block/components/text-input-box";
import Image from "next/image";
import AddButton from "@app/admin/block/components/buttons/add-button";
import ButtonBox from "@app/admin/block/components/buttons/button-box";
import ErrorBoundary from "@app/(intro)/components/error-boundary";
import ImageBox from "@app/admin/block/image/components/image-box";
import BoundaryImageBox from "@app/admin/block/image/components/image-box";

const Page = () => {
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [previewImageUrl, setPreviewImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [connectingUrl, setConnectingUrl] = useState<string>("");
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

  const params = {
    type: 4,
    // sequence: number,
    title,
    url: connectingUrl,
    imgUrl: imageUrl,
  };

  useEffect(() => {
    setSelectedImageUrl(imageUrl || previewImageUrl);
  }, [imageUrl, previewImageUrl]);

  const handeInputImageClick = () => {
    inputImageRef.current?.click();
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result;
      if (typeof dataUrl !== "string") {
        return;
      }
      setPreviewImageUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleAddButtonClick = () => {};

  return (
    <Layout title="이미지 블록">
      <TextInputBox
        title="이미지"
        text={imageUrl}
        setText={setImageUrl}
        placeholder="원하는 이미지 URL을 입력하세요"
        required={true}
      />
      <input
        id="file"
        ref={inputImageRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={selectFile}
      />
      <ImageBox
        selectedImageUrl={selectedImageUrl}
        handeInputImageClick={handeInputImageClick}
      />
      <TextInputBox
        title="타이틀"
        text={title}
        setText={setTitle}
        placeholder="이미지 하단에 함께 보여줄 수 있어요"
        limit={30}
      />
      <TextInputBox
        title="연결할 주소"
        text={connectingUrl}
        setText={setConnectingUrl}
        placeholder="이미지를 통해 이동시키고 싶은 링크가 있나요?"
      />
      <ButtonBox>
        <AddButton
          text="추가 완료"
          onClick={handleAddButtonClick}
          disabled={!imageUrl}
        />
      </ButtonBox>
    </Layout>
  );
};

export default Page;
