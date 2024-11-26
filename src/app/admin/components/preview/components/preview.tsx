"use client";
import React, { SetStateAction, useState } from "react";

import ProfileBox from "@app/admin/components/profile-box";
import BlockList from "@app/components/page/block-list";

interface Props {
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
}
const Preview = ({ setIsOpen }: Props) => {
  const [userId, setUserId] = useState<string>("");
  return (
    <div className="mx-auto max-w-2xl">
      <ProfileBox userId={userId} />
      <BlockList setIsOpen={setIsOpen} setUserId={setUserId} />
    </div>
    // <div className="absolute left-1/2 top-[45%] flex h-3/4 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-3xl bg-slate-333 p-6">
  );
};

export default Preview;
