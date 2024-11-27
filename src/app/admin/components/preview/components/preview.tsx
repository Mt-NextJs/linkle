"use client";
import React, { SetStateAction, useEffect, useState } from "react";

import ProfileBox from "@app/admin/components/profile-box";
import BlockList from "@app/components/page/block-list";
import { Block } from "@/types/apis";

import { adminApiInstance } from "../../../../../utils/apis";

interface Props {
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
}
const Preview = ({ setIsOpen }: Props) => {
  const [userId, setUserId] = useState<string>("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  useEffect(() => {
    getBlocks().then();
  }, []);

  async function getBlocks() {
    const blockApis = await adminApiInstance;
    const response = userId
      ? await blockApis.getProfileBlocks(userId)
      : await blockApis.getBlocks();
    if (!response) return;
    if (response.ok) {
      const { data } = await response.json();
      setBlocks(data);
    } else {
      sessionStorage.removeItem("token");
      // alert("블록 조회 실패");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <ProfileBox userId={userId} />
      <BlockList setIsOpen={setIsOpen} setUserId={setUserId} blocks={blocks} />
    </div>
    // <div className="absolute left-1/2 top-[45%] flex h-3/4 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-3xl bg-slate-333 p-6">
  );
};

export default Preview;
