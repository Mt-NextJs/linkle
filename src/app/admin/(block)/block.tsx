import React from "react";
import ImageBlock from "@app/admin/(block)/(image)/image-block";
import VideoBlock from "@app/admin/(block)/(video)/video-block";

const Block = () => {
  return (
    <div className="w-full">
      <ImageBlock />
      <VideoBlock />
    </div>
  );
};

export default Block;
