interface VideoBlockProps {
  title: string | null;
  url: string | null;
}
export default function VideoBlock({ title, url }: VideoBlockProps) {
  return (
    <>
      <div className="ml-[85px] flex h-[86px] w-[530px] items-center rounded-lg bg-white shadow-md">
        <div className="flex w-full items-center">
          <div className="ml-[6px] flex w-1/5 justify-start">
            <object
              type="text/html"
              data={url as string}
              width="80"
              height="70"
              className="rounded border"
            >
              <div>동영상 주소를 확인해주세요</div>
            </object>
          </div>
          <div className="mr-[37px] flex w-4/5 items-center justify-center">
            <p className="text-xl font-bold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
