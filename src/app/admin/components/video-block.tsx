import Image from "next/image";

export default function VideoBlock() {
  return (
    <>
      <div className="ml-[180px] flex h-[84px] w-[320px] flex-col items-center justify-start gap-[14px] rounded-xl bg-white drop-shadow-md">
        <div className="relative h-[63px] w-full flex-grow-[3] overflow-hidden rounded-t-xl bg-gray-300"></div>
        <p className="flex-grow-[1] font-bold"></p>
      </div>
    </>
  );
}
