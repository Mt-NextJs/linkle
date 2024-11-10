import React from "react";
import { Block } from "@app/admin/page";
import { usePathname } from "next/navigation";
import StylePreview from "@app/admin/(block)/link/components/style-preview";

interface Props {
  block: Block;
}

const styleItemNames = ["썸네일", "심플", "카드", "배경"];
const PreviewLink = ({ block }: Props) => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");
  const { url, title: subject, imgUrl: image, style } = block;
  const title = subject as string;
  const imgUrl = image as string;
  const type = style as number;
  const selectedStyle = styleItemNames[type - 1];

  return (
    <StylePreview
      title={title}
      linkImg={imgUrl}
      selectedStyle={selectedStyle}
      url={url}
    />
  );
};

export default PreviewLink;
