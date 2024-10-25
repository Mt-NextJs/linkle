export default function CalendarBlock() {
  return (
    <>
      <div className="flex">
        <div className="ml-3">
          <div className="font-bold uppercase text-red-500">open</div>
          <div className="font-bold uppercase text-blue-500">soon</div>
          <div className="font-bold uppercase">closed</div>
        </div>
        <div className="ml-10">
          <div className="font-bold">0개</div>
          <div className="font-bold">1개</div>
          <div className="font-bold">0개</div>
        </div>
      </div>
    </>
  );
}
