import Image from "next/image";

interface LinkBlockProps {
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function TypeThree({
  url,
  style,
  imgUrl,
  title,
}: LinkBlockProps) {
  return (
    <>
      <div className="ml-[180px] flex h-[84px] w-[320px] flex-col items-center justify-start gap-[14px] rounded-xl bg-white drop-shadow-md">
        <div className="relative h-[63px] w-full flex-grow-[3] overflow-hidden rounded-t-xl bg-gray-300">
          <Image
            src={imgUrl == null ? "없음" : imgUrl}
            alt={`미리보기`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-xl"
          />
        </div>
        <p className="flex-grow-[1] font-bold">{title}</p>
      </div>
    </>
  );
}

//card
