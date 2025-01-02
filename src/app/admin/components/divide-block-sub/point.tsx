import Image from "next/image";

export default function Point() {
  return (
    <div className="flex h-[80px] w-full items-center justify-center">
      <Image
        alt="point"
        src="/assets/icons/SVG/item/item_dotted.svg"
        width={200}
        height={100}
      />
    </div>
  );
}
