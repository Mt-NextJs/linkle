import Image from "next/image";

interface ImageBlockProps {
  url: string;
  imgUrl: string | null;
  title: string | null;
}

export default function ImageBlock({ url, imgUrl, title }: ImageBlockProps) {
  return (
    <>
      <div className="flex">
        <div className="relative ml-6 h-[86px] w-[86px]">
          <Image
            src={imgUrl == null ? "없음" : imgUrl}
            alt="미리보기"
            fill
            style={{ objectFit: "cover" }}
            className="rounded border"
          />
        </div>
        <div className="ml-10 mt-7 font-bold">{title}</div>
      </div>
    </>
  );
}
