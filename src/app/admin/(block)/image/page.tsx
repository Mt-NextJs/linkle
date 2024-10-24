"use client";
import React, { FormEvent, useState } from "react";
import Layout from "@app/admin/(block)/components/layout";

import AddButton from "@app/admin/(block)/components/buttons/add-button";
import ButtonBox from "@app/admin/(block)/components/buttons/button-box";
import ImageBox from "@app/admin/(block)/image/components/image-box";
import { useRouter } from "next/navigation";
import FormInput from "@app/admin/(block)/components/form-input";
import { checkImage, checkUrl } from "../../../../lib/check-url";
import { postBlock } from "../../../../lib/post-block";

const Page = () => {
  // const inputImageRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("");
  const [connectingUrl, setConnectingUrl] = useState<string>("");
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const router = useRouter();

  const addImageBlock = () => {
    const params = {
      type: 4,
      title,
      url: connectingUrl,
      imgUrl: selectedImageUrl,
    };
    postBlock("/api/link/add", params, router).then((res) => {
      if (res) console.log(res);
    });
  };

  // const addImageBlock = async () => {
  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     router.push("/login");
  //     return;
  //   }
  //   const nowSequence = await getSequence(token);
  //
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/link/add`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify(params),
  //       },
  //     );
  //     if (response.ok) {
  //       alert("이미지 블록 추가 완료");
  //       router.push("/admin");
  //     } else {
  //       const { status } = response;
  //       console.log(status);
  //       if (status === 500) {
  //         alert("서버 에러");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleAddButtonClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedImageUrl) return;
    addImageBlock();
  };

  // const handeInputImageClick = () => {
  //   inputImageRef.current?.click();
  // };

  // const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) {
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const dataUrl = e.target?.result;
  //     if (typeof dataUrl !== "string") {
  //       return;
  //     }
  //     setPreviewImageUrl(dataUrl);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleAddButtonClick = () => {
  //   if (!checkImageUrl(imageUrl)) {
  //     alert("이미지 URL을 확인해주세요.");
  //     return;
  //   }
  //   setSelectedImageUrl(imageUrl || previewImageUrl);
  // };

  const setImageText = (text: string) => {
    if (!checkUrl(text) && text !== "") {
      alert("URL을 입력해주세요.");
      return;
    }
    if (!checkImage(text) && text !== "") {
      alert("이미지 URL을 입력해주세요.");
      return;
    }
    setSelectedImageUrl(text);
  };

  return (
    <Layout title="이미지 블록" onSubmit={handleAddButtonClick}>
      <FormInput
        label="이미지"
        id="image-url"
        type="url"
        placeholder="원하는 이미지 URL을 입력하세요"
        value={selectedImageUrl}
        onChange={(e) => setImageText(e.currentTarget.value)}
        required
      />
      {/*<input*/}
      {/*  id="file"*/}
      {/*  ref={inputImageRef}*/}
      {/*  type="file"*/}
      {/*  accept="image/*"*/}
      {/*  style={{ display: "none" }}*/}
      {/*  onChange={selectFile}*/}
      {/*/>*/}
      <ImageBox
        selectedImageUrl={selectedImageUrl}
        // handeInputImageClick={handeInputImageClick}
      />
      <FormInput
        label="타이틀"
        id="image-title"
        placeholder="이미지 하단에 함께 보여줄 수 있어요"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        maxLength={30}
      />
      <FormInput
        label="연결할 주소"
        id="image-title"
        type="url"
        placeholder="이미지를 통해 이동시키고 싶은 링크가 있나요?"
        value={connectingUrl}
        onChange={(e) => setConnectingUrl(e.currentTarget.value)}
      />
      <ButtonBox>
        <AddButton
          type={"submit"}
          text="추가 완료"
          disabled={!selectedImageUrl}
        />
      </ButtonBox>
    </Layout>
  );
};

export default Page;
