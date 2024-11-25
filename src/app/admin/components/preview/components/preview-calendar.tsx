import React from "react";

import { Block } from "@/types/apis";
import { ScheduleItem } from "@app/admin/(block)/calendar/components/schedule-list";
import { Schedule } from "@/types/user";

// interface Schedule {
//   id: number;
//   title: string;
//   url: string;
//   dateStart: string;
//   dateEnd: string;
// }

interface Props {
  schedule: Schedule;
}
const PreviewCalendar = ({ schedule }: Props) => {
  return (
    <div className={"shadow-xl"}>
      <ScheduleItem schedule={schedule} />
    </div>
  );
};

export default PreviewCalendar;
