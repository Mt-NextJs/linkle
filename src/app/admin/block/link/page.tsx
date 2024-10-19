import Link from "next/link";
import LinkForm from "./components/link-form";
import Image from "next/image";

export default function LinkPage() {
  return (
    <>
      <div className="mx-auto my-6 w-[740px]">
        <Link href="/admin/block">
          <Image
            src="/assets/icons/icon_back.png"
            alt="뒤로가기"
            width={34}
            height={34}
          />
        </Link>

        <div className="mb-9 mt-6 flex items-end gap-1">
          <h1 className="pageName">링크 블록</h1>
          <div className="group relative inline-block">
            <Image
              src="/assets/icons/icon_help.png"
              alt="question"
              width={30}
              height={30}
            />
            <div className="absolute left-full top-1/2 w-max -translate-y-1/2 translate-x-2 transform rounded bg-[#343434] px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              • 기본 정보와 공개 여부 값은 필수입니다. <br />• 예약 공개와
              스티커는 프로 기능입니다.
            </div>
          </div>
        </div>

        <LinkForm />
      </div>
    </>
  );
}
