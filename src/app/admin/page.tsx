import BasicBlock from "@app/(intro)/components/basicblock";
import Image from "next/image";

import Link from "next/link";

import { ClientRoute } from "@config/route";

export default function Admin() {
  return (
    <div>
      <div className="h-36 items-center border">
        <div className="items-center border text-center">
          <Image
            src="/assets/icons/icon_profile.png"
            alt="profile"
            className="ml-[44%] cursor-pointer"
            width={80}
            height={20}
          />
          <Link href={ClientRoute.MAIN as string} className="mr-5">
            momomoc
          </Link>
        </div>
      </div>
      <br />
      <div className="flex w-full rounded border">
        <div className="w-8/12 rounded-l border">
          <h3 className="ml-2 font-bold">방문자</h3>
          <p className="ml-2">전체 오늘 실시간</p>
        </div>
        <div className="w-4/12 rounded-r border">
          <h3 className="ml-2 font-bold">소식받기</h3>
          <p className="ml-2">전체</p>
        </div>
      </div>
      <br />
      <div className="flex gap-1">
        <h1 className="font-bold">블록 리스트</h1>
        <div className="mt-[0.5px] w-5">
          <Image
            src="/assets/icons/icon_question.png"
            alt="question"
            width={20}
            height={20}
          />
        </div>
      </div>
      <br />
      <div className="h-64 items-center rounded border bg-slate-100 text-center align-middle">
        <Image
          className="mb-[10px] ml-[44%] mt-[17px]"
          src="/assets/icons/icon_empty.png"
          alt="arrow_down"
          width={80}
          height={40}
        />
        <p>지금 공개된 링크가 없다...</p>
        <p>
          <strong className="cursor-pointer">소식받기</strong> 버튼을 눌러다오
        </p>
        <p>새로운 링크가 생기면 알려줌.,..</p>
      </div>
      <br />
      <BasicBlock title="이벤트" />
      <br />
      <BasicBlock title="캘린더" />
      <br />
      <BasicBlock title="링크" />
      <br />
      <BasicBlock title="동영상" />
      <BasicBlock />
      <BasicBlock />
      <BasicBlock />
      <BasicBlock />
      <BasicBlock />
      <BasicBlock />
    </div>
  );
}
