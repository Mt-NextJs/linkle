export default function EventPreview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-[190px] w-full items-center justify-center rounded-sm bg-[#F6F6F6]">
      <div className="flex h-[125px] w-[500px] flex-col items-center justify-between rounded-3xl bg-white drop-shadow-md">
        <div className="w-full">
          <div className="flex w-full justify-start">
            <p className="pl-5 pt-2 text-sm text-gray-300">event</p>
          </div>
          <div className="flex flex-col items-center justify-center tracking-tighter">
            <p className="text-base font-semibold">
              {title || "타이틀을 입력해주세요"}
            </p>
            <p className="text-sm text-gray-400">
              {description || "이벤트 설명을 입력해주세요"}
            </p>
          </div>
        </div>
        <div className="flex h-8 w-full items-center justify-between rounded-b-3xl bg-[#F6F6F6] px-5 text-xs text-gray-400">
          <p>24.09.11 16:00 ~ 24.09.11 16:00</p>
          <p>1분 남음</p>
        </div>
      </div>
    </div>
  );
}
