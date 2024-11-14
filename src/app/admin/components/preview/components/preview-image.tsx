import React, { useCallback } from "react";
import { Block } from "@app/admin/page";
import ImageBox from "@app/admin/(block)/image/components/image-box";
import { checkUrl } from "../../../../../lib/check-url";

interface Props {
  block: Block;
}
const PreviewImage = ({ block }: Props) => {
  const { imgUrl, url, title } = block;

  return (
    <div className={"h-3/4 w-full"}>
      <ImageBox
        selectedImageUrl={imgUrl as string}
        connectingUrl={url}
        title={title}
      />
    </div>
  );
};

export default PreviewImage;
