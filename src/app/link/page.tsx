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

        <h1 className="pageName mb-9 mt-6">링크 블록</h1>

        <LinkForm />
      </div>
    </>
  );
}
