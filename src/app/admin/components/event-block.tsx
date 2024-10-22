export default function EventBlock() {
  return (
    <>
      <div className="flex">
        <div className="ml-3">
          <div className="font-bold uppercase text-gray-400">이벤트 명</div>

          <div className="font-bold uppercase text-gray-400">일정</div>
        </div>
        <div className="ml-10">
          <div className="font-bold tracking-wide">10월 이벤트</div>
          <div className="font-bold tracking-wide">
            24.10.04 10:00 ~ 24.10.11 18:00
          </div>
        </div>
      </div>
    </>
  );
}
