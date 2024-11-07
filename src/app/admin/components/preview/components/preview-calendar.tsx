import React from "react";
import { Block } from "@app/admin/page";
import { ScheduleItem } from "@app/admin/(block)/calendar/components/schedule-list";

// interface Schedule {
//   id: number;
//   title: string;
//   url: string;
//   dateStart: string;
//   dateEnd: string;
// }

interface Props {
  block: Block;
}
const PreviewCalendar = ({ block }: Props) => {
  const { id, title: subject, url, dateStart: start, dateEnd: end } = block;
  const title = subject as string;
  const dateStart = start as string;
  const dateEnd = end as string;
  const schedule = { id, title, url, dateStart, dateEnd };
  return (
    <div className={"shadow-xl"}>
      <ScheduleItem schedule={schedule} />
    </div>
  );
};

export default PreviewCalendar;
