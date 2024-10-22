import DatePicker from "react-datepicker";

export default function Calendar({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  startTime: Date | null;
  setStartTime: (date: Date | null) => void;
  endTime: Date | null;
  setEndTime: (date: Date | null) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="title mb-[10px] block">
        이벤트 일정 <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col items-start gap-5 bg-[#F6F6F6]">
        {/* 시작 날짜 및 시간 선택 */}
        <div className="flex w-full items-center gap-4">
          <label className="font-medium">시작</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="yyyy.MM.dd"
            placeholderText="날짜 선택"
            className="w-full rounded-lg border-2 p-2"
          />
          <DatePicker
            selected={startTime}
            onChange={(date: Date | null) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="시간 선택"
            dateFormat="HH:mm"
            placeholderText="시간 선택"
            className="w-full rounded-lg border-2 p-2"
          />
        </div>
        {/* 종료 날짜 및 시간 선택 */}
        <div className="flex w-full items-center gap-4">
          <label className="mb-2 font-medium">종료</label>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            dateFormat="yyyy.MM.dd"
            placeholderText="날짜 선택"
            minDate={startDate || undefined}
            className="w-full rounded-lg border-2 p-2"
          />
          <DatePicker
            selected={endTime}
            onChange={(date: Date | null) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="시간 선택"
            dateFormat="HH:mm"
            placeholderText="시간 선택"
            className="w-full rounded-lg border-2 p-2"
          />
        </div>
      </div>
    </div>
  );
}
