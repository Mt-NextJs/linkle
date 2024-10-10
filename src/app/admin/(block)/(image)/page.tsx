'use client';
import React, { useState } from 'react';
import BlockModal from '@app/admin/(block)/components/block-modal';
import TextInputBox from '@app/admin/(block)/components/text-input-box';
import Image from 'next/image';

const ImageBlock = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [connectingUrl, setConnectingUrl] = useState<string>('');
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
        <button className="absolute right-2 top-2 rounded-3xl bg-orange-600 p-2">
          <Image
            src="/assets/icons/icon_pencil.png"
            alt="연필 아이콘"
            width={24}
            height={24}
          />
        </button>
        <Image
          src="/assets/images/image_block_default.png"
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
