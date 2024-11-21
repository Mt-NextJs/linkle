import React from "react";

import { Block } from "@app/admin/page";
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
    <EventPreview
      title={title}
      description={description}
      startDate={dateStart}
      endDate={dateEnd}
      startTime={dateStart}
      endTime={dateEnd}
    />
  );
};

export default PreviewEvent;
