import Link from "next/link";
import { ClientRoute } from "@config/route";

export default function Intro() {
  return (
    <div className={"flex w-full flex-col items-center py-10"}>
      <Link href={ClientRoute.LOGIN as string} className={"button color"}>
        시작하기
      </Link>
      <Link href={ClientRoute.ADMIN as string} className={"button color"}>
        관리자
      </Link>
    </div>
  );
}
