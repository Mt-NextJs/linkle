import React, { SetStateAction } from "react";

import ProfileBox from "@app/admin/components/profile-box";
import BlockList from "@app/components/page/block-list";

interface Props {
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
}
const Preview = ({ setIsOpen }: Props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <ProfileBox />
      <BlockList setIsOpen={setIsOpen} />
    </div>
  );
};

export default Preview;
