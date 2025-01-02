import Image from "next/image";
export default function Line() {
  return (
    <div className="flex h-[80px] w-full items-center justify-center">
      <Image
        alt="line"
        src="/assets/icons/SVG/item/item_line.svg"
        width={200}
        height={100}
      />
    </div>
  );
}
