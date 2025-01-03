import React, { useCallback } from "react";

import { Block } from "@/types/apis";
import ImageBox from "@app/admin/(block)/image/components/image-box";

interface Props {
  block: Block;
}
const PreviewImage = ({ block }: Props) => {
  const { imgUrl, url, title } = block;

  return (
    <div
      className={
        "h-3/4 w-full overflow-hidden rounded-lg bg-[var(--primary-100)] sm:px-0"
      }
    >
      <ImageBox
        selectedImageUrl={imgUrl as string}
        connectingUrl={url}
        title={title}
      />
    </div>
  );
};

export default PreviewImage;
