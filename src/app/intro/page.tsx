import Link from "next/link";

import { ClientRoute } from "@config/route";

export default function Intro() {
  return (
    <div className="h-screen bg-primary p-40">
      {/* 스크린 리더 전용 텍스트*/}
      <h1 className="sr-only">
        Link At Once! 소셜 프로필 링크 관리 서비스 in my link 입니다!
      </h1>
      <p className="sr-only">시작하기 버튼을 눌러 로그인을 진행해 주세요.</p>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col text-white">
          <p className="text-9xl font-black capitalize">link at once!</p>
          <p className="text-text-ddd text-4xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Link
          href={ClientRoute.LOGIN}
          className="button bg-white text-3xl text-primary shadow transition duration-300 hover:bg-primary-300 hover:text-primary-100 focus:bg-primary-300 focus:text-primary-100"
        >
          START!
        </Link>
      </div>
    </div>
  );
}
