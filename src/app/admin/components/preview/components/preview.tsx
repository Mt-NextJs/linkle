import React, { SetStateAction } from "react";
import ProfileBox from "@app/admin/components/profile-box";

import BlockList from "@app/components/page/block-list";

interface Props {
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
}
const Preview = ({ setIsOpen }: Props) => {
  return (
    // <div className="absolute left-1/2 top-[45%] flex h-3/4 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-3xl bg-slate-333 p-6">
    <>
      <ProfileBox />
      <BlockList setIsOpen={setIsOpen} />
    </>
  );
};

export default Preview;
