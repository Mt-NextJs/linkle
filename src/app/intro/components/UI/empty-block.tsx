import Image from "next/image";

export default function EmptyBlock() {
  return (
    <>
      <div className="h-64 items-center rounded border bg-slate-100 text-center align-middle">
        <Image
          className="mb-[10px] ml-[44%] mt-[17px]"
          src="/assets/icons/icon_empty.png"
          alt="arrow_down"
          width={80}
          height={40}
        />
        <p>지금 공개된 링크가 없습니다...</p>
        <p>
          <strong className="cursor-pointer">소식받기</strong> 버튼을 눌러다오
        </p>
        <p>새로운 링크가 생기면 알려줌.,..</p>
      </div>
    </>
  );
}
