import Image from "next/image";

export default function EmptyBlock() {
  return (
    <div className="flex h-64 flex-col items-center justify-center rounded border border-[var(--primary-200)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 dark:border-[var(--primary-300)]">
      <Image
        className="mb-4"
        src="/assets/icons/icon_empty.png"
        alt="표시할 블록이 없음을 나타내는 아이콘"
        width={80}
        height={40}
        priority
      />
      <div className="space-y-2 text-center">
        <p>지금 공개된 링크가 없습니다</p>
        <p>
          <strong className="cursor-pointer text-[var(--primary)] transition-colors hover:text-[var(--primary-450)] dark:text-[var(--primary-400)] dark:hover:text-[var(--primary-350)]">
            소식받기
          </strong>{" "}
          버튼을 눌러주세요
        </p>
        <p>새로운 링크가 생기면 알려드리겠습니다</p>
      </div>
    </div>
  );
}
