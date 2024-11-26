import React from "react";

import { Block } from "@/types/apis";
import EventPreview from "@app/admin/(block)/event/components/event-preview";

interface Props {
  block: Block;
}
const PreviewEvent = ({ block }: Props) => {
  const { title: subject, subText01, dateStart: start, dateEnd: end } = block;
  const title = subject as string;
  const description = subText01 as string;
  const dateStart = new Date(start as string);
  const dateEnd = new Date(end as string);

  return (
    <div className="w-full px-4 sm:px-0">
      <EventPreview
        title={title}
        description={description}
        startDate={dateStart}
        endDate={dateEnd}
        startTime={dateStart}
        endTime={dateEnd}
      />
    </div>
  );
};

export default PreviewEvent;
