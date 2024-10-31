import Image from "next/image";

export default function Point() {
  return (
    <div className="ml-[85px] flex h-[86px] w-[530px] items-center justify-center">
      <Image
        alt="point"
        src="/assets/icons/SVG/item/item_dotted.svg"
        width={500}
        height={100}
      />
    </div>
  );
}
