'use client';
import React, { useRef, useState } from 'react';
import BlockModal from '@app/admin/(block)/components/block-modal';
import TextInputBox from '@app/admin/(block)/components/text-input-box';
import Image from 'next/image';

const ImageBlock = () => {
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [connectingUrl, setConnectingUrl] = useState<string>('');

  const selectedImageUrl = imageUrl || previewImageUrl;

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
      if (typeof dataUrl !== 'string') {
        return;
      }
      setPreviewImageUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <BlockModal title="이미지 블록">
      <TextInputBox
        title="이미지"
        text={imageUrl}
        setText={setImageUrl}
        placeholder="원하는 이미지 URL을 입력하세요"
        required={true}
      />
      <div className="relative overflow-hidden rounded">
        <button
          onClick={handeInputImageClick}
          className="absolute right-2 top-2 rounded-3xl bg-orange-600 p-2"
        >
          <Image
            src="/assets/icons/icon_pencil.png"
            alt="연필 아이콘"
            width={24}
            height={24}
          />
        </button>
        <input
          id="file"
          ref={inputImageRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={selectFile}
        />
        <Image
          src={
            selectedImageUrl
              ? selectedImageUrl
              : '/assets/images/image_block_default.png'
          }
          alt="이미지 블록 기본 이미지"
          width={610}
          height={610}
        />
      </div>
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
    </BlockModal>
  );
};

export default ImageBlock;
