import Image from "next/image";

import TypeOne from "./link-block-sub/type-one";
import TypeTwo from "./link-block-sub/type-two";
import TypeThree from "./link-block-sub/type-three";
import TypeFour from "./link-block-sub/type-four";

interface LinkBlockProps {
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function LinkBlock({
  url,
  style,
  imgUrl,
  title,
}: LinkBlockProps) {
  function renderComponent(style: number) {
    switch (style) {
      case 1:
        return (
          <TypeOne url={url} style={style} imgUrl={imgUrl} title={title} />
        );
      case 2:
        return (
          <TypeTwo url={url} style={style} imgUrl={imgUrl} title={title} />
        );
      case 3:
        return (
          <TypeThree url={url} style={style} imgUrl={imgUrl} title={title} />
        );
      case 4:
        return (
          <TypeFour url={url} style={style} imgUrl={imgUrl} title={title} />
        );
      default:
        return <></>;
    }
  }

  return <>{style == null ? null : renderComponent(style)}</>;
}

{
  /* <div className="flex h-[500px] w-[500px] flex-col items-center justify-start gap-[14px] rounded-xl bg-white drop-shadow-md">
  <div className="relative h-[450px] w-full overflow-hidden rounded-t-xl bg-gray-300">
    <Image
      src={imgUrl}
      alt="미리보기"
      fill
      style={{ objectFit: "cover" }}
      className="rounded-t-xl"
    />
  </div>
  <p>{title}</p>
</div>; */
}
