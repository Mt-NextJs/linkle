import Image from "next/image";

export default function ZigZag() {
  return (
    <>
      <div className="ml-[80px] flex h-[86px] w-full items-center justify-center">
        <Image
          alt="zigzag"
          src="/assets/icons/SVG/item/item_zigzag.svg"
          width={200}
          height={100}
        />
      </div>
    </>
  );
}
