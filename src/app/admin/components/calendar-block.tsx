"use client";
import { useEffect, useState } from "react";

interface CalendarProps {
  dateStart: string | null;
  dateEnd: string | null;
}

export default function CalendarBlock({ dateStart, dateEnd }: CalendarProps) {
  useEffect(() => {
    const checked = dateChecker();
    console.log(checked);
    function checkSchedule() {
      if (checked == "open") {
        setOpen(1);
      } else if (checked == "soon") {
        setSoon(1);
      } else if (checked == "closed") {
        setClosed(1);
      }
    }
    checkSchedule();
  }, []);

  const [open, setOpen] = useState(0);
  const [soon, setSoon] = useState(0);
  const [closed, setClosed] = useState(0);

  function dateChecker() {
    const now = new Date();
    const started = new Date(dateStart as string);
    const ended = new Date(dateEnd as string);
    if (started <= now && now <= ended) {
      return "open";
    } else if (now < started) {
      return "soon";
    } else {
      return "closed";
    }
  }

  return (
    <>
      <div className="flex">
        <div className="ml-3">
          <div className="font-bold uppercase text-red-500">open</div>
          <div className="font-bold uppercase text-blue-500">soon</div>
          <div className="font-bold uppercase">closed</div>
        </div>
        <div className="ml-10">
          <div className="font-bold">{open}개</div>
          <div className="font-bold">{soon}개</div>
          <div className="font-bold">{closed}개</div>
        </div>
      </div>
    </>
  );
}
