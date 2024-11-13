import Image from "next/image";

export default function Dot() {
  return (
    <>
      <div className="ml-[85px] flex h-[86px] w-[530px] items-center justify-center">
        <Image
          alt="dot"
          src="/assets/icons/SVG/item/item_dotted.svg"
          width={150}
          height={100}
          className="mr-12"
        />
        <Image
          alt="dot"
          src="/assets/icons/SVG/item/item_dotted.svg"
          width={150}
          height={100}
        />
        <Image
          alt="dot"
          src="/assets/icons/SVG/item/item_dotted.svg"
          width={150}
          height={100}
          className="ml-12"
        />
      </div>
    </>
  );
}
