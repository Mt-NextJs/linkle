import Image from "next/image";

export default function Dot() {
  return (
    <>
      <div className="flex h-[80px] w-full items-center justify-center">
        <Image
          alt="dot"
          src="/assets/icons/SVG/item/item_dotted.svg"
          width={100}
          height={80}
          className="mr-12"
        />
        <Image
          alt="dot"
          src="/assets/icons/SVG/item/item_dotted.svg"
          width={100}
          height={100}
        />
        <Image
          alt="dot"
          src="/assets/icons/SVG/item/item_dotted.svg"
          width={100}
          height={100}
          className="ml-12"
        />
      </div>
    </>
  );
}
