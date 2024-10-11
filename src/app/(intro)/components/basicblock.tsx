import Image from "next/image";

export default function BasicBlock() {
  return (
    <>
      <div className="flex h-36 w-full rounded border">
        <div className="relative w-[5%]">
          <div className="h-10 border bg-slate-100 hover:bg-slate-200">
            <Image
              className="ml-[8px] mt-[7px]"
              src="/assets/icons/icon_arrow_up.png"
              alt="arrow_up"
              width={20}
              height={30}
            />
          </div>
          <div className="h-16 cursor-pointer border bg-slate-100 hover:bg-slate-200">
            <Image
              className="ml-[6.5px] mt-[17px]"
              src="/assets/icons/icon_grabber.png"
              alt="grabber"
              width={25}
              height={40}
            />
          </div>
          <div className="h-10 border bg-slate-100 hover:bg-slate-200">
            <Image
              className="ml-[8px] mt-[7px]"
              src="/assets/icons/icon_arrow.png"
              alt="arrow_down"
              width={20}
              height={30}
            />
          </div>
        </div>
        <div className="grid h-full w-[95%]">
          <div className="flex h-[32px]">
            <h1 className="ml-[4px] mt-[4px]"></h1>

            <div className="ml-[80%] flex">
              <button className="flex align-middle">토글</button>
              <div className="hover:bg-slate-200">
                <Image
                  src="/assets/icons/icon_menu_dot.png"
                  alt="menu_dot"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="h-[80px] border"></div>
          <div className="h-[32px] border"></div>
        </div>
      </div>
    </>
  );
}
