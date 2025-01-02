import Icons from "@app/profile/[userId]/components/icons";
import { TypeBlock } from "@/types/block_types";

import Gap from "./divide-block-sub/gap";
import Dot from "./divide-block-sub/dot";
import Line from "./divide-block-sub/line";
import ZigZag from "./divide-block-sub/zigzag";
import Point from "./divide-block-sub/point";
interface DivideBlockProps {
  type: TypeBlock;
  sequence: number;
  style: number | null;
}

export default function DivideBlock({ type, style }: DivideBlockProps) {
  function renderComponent(style: number) {
    switch (style) {
      case 1:
        return <Gap />;
      case 2:
        return <Dot />;
      case 3:
        return <Line />;
      case 4:
        return <Point />;
      case 5:
        return <ZigZag />;
      default:
        return <></>;
    }
  }
  return (
    <div className={"flex w-full items-center"}>
      <Icons type={type} />
      {style != null && renderComponent(style)}
    </div>
  );
}

// 공백: 1,
// 점선: 2,
// 실선: 3,
// 포인트: 4,
// 지그재그: 5,
