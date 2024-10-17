import Link from "next/link";
import Image from "next/image";
import EventForm from "./components/event-form";

export default function page() {
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

        <h1 className="pageName">이벤트 블록</h1>

        <EventForm />
      </div>
    </>
  );
}
