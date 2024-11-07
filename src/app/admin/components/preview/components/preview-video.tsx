import React from "react";
import { Block } from "@app/admin/page";

interface Props {
  block: Block;
}
const PreviewVideo = ({ block }: Props) => {
  const { url: videoUrl } = block;
  return (
    <div className="flex h-[24rem] items-center justify-center overflow-hidden rounded-xl shadow-lg">
      {videoUrl && (
        <object type="text/html" data={videoUrl} width="100%" height="100%">
          <div>동영상 주소를 확인해주세요</div>
        </object>
      )}
    </div>
  );
};

export default PreviewVideo;
