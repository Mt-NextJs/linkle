import Image from "next/image";
export default function Line() {
  return (
    <div className="ml-[85px] flex h-[86px] w-[530px] items-center justify-center">
      <Image
        alt="line"
        src="/assets/icons/SVG/item/item_line.svg"
        width={500}
        height={100}
      />
    </div>
  );
}
