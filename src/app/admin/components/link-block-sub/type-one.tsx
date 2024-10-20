interface LinkBlockProps {
  url: string;
  style: number | null;
  imgUrl: string | null;
  title: string | null;
}

export default function TypeOne({ url, style, imgUrl, title }: LinkBlockProps) {
  return (
    <>
      <div className="ml-[85px] flex h-[86px] w-[530px] cursor-pointer items-center justify-center rounded-lg border bg-white shadow-md">
        <p className="text-2xl font-bold">{title}</p>
      </div>
    </>
  );
}
//simple
