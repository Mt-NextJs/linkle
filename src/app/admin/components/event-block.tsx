interface EventBlockProps {
  title: string | null;
  dateStart: string | null;
  dateEnd: string | null;
}

export default function EventBlock({
  title,
  dateStart,
  dateEnd,
}: EventBlockProps) {
  const dateStarted = new Date(dateStart as string);
  const startedYear = dateStarted.getFullYear();
  const startedMonth = (dateStarted.getMonth() + 1).toString().padStart(2, "0");
  const startedDay = dateStarted.getDate().toString().padStart(2, "0");

  const dateEnded = new Date(dateEnd as string);
  const endedYear = dateEnded.getFullYear();
  const endedMonth = (dateEnded.getMonth() + 1).toString().padStart(2, "0");
  const endedDay = dateEnded.getDate().toString().padStart(2, "0");

  return (
    <>
      <div className="flex">
        <div className="ml-3">
          <div className="font-bold uppercase text-gray-400">이벤트 명</div>

          <div className="font-bold uppercase text-gray-400">일정</div>
        </div>
        <div className="ml-10">
          <div className="font-bold tracking-wide">{title}</div>
          <div className="font-bold tracking-wide">{`${startedYear}-${startedMonth}-${startedDay} ~ ${endedYear}-${endedMonth}-${endedDay}`}</div>
        </div>
      </div>
    </>
  );
}
