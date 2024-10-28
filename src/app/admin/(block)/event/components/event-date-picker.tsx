import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

registerLocale("ko", ko);

export default function EventDatePicker({
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
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="title mb-[10px] block">
        이벤트 일정 <span className="text-red-500">*</span>
      </label>
      <div
        className={twMerge(
          "relative flex flex-col items-start gap-5 bg-[#F6F6F6] px-3 py-5 transition-all duration-1000 ease-in-out",
          isStartCalendarOpen ? "h-[490px] justify-between" : "",
          isEndCalendarOpen ? "h-[490px] justify-start" : "",
        )}
      >
        {/* 시작 날짜 및 시간 선택 */}
        <div className="flex w-full items-center gap-4">
          <label className="text-sm">시작</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="yyyy.MM.dd"
            placeholderText="날짜 선택"
            locale={ko}
            enableTabLoop={false}
            className="w-full max-w-[150px] rounded-lg border-2 px-3 py-2 focus:border-black focus:placeholder:text-black"
            onCalendarOpen={() => setIsStartCalendarOpen(true)}
            onCalendarClose={() => setIsStartCalendarOpen(false)}
            popperPlacement="bottom-start"
            dayClassName={(
              date, // 주말은 빨간색, 평일은 회색인데 적용 안됨
            ) =>
              date.getDay() === 0 || date.getDay() === 6
                ? "text-red-500"
                : "text-gray-800"
            }
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="mb-2 flex items-center justify-between px-[14px] pt-[3px]">
                <span className="text-base font-semibold">
                  {date.getFullYear()}년 {date.getMonth() + 1}월
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={decreaseMonth}
                    className="text-lg text-primary-200 hover:text-primary-450"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={increaseMonth}
                    className="text-lg text-primary-200 hover:text-primary-450"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            )}
          />
          <div className="date-picker-start-time-container">
            <DatePicker
              selected={startTime}
              onChange={(date: Date | null) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption=""
              locale={ko}
              dateFormat="HH:mm"
              placeholderText="시간 선택"
              className="w-full max-w-[150px] rounded-lg border-2 px-3 py-2 focus:border-black focus:placeholder:text-black"
            />
          </div>
        </div>
        {/* 종료 날짜 및 시간 선택 */}
        <div className="flex w-full items-center gap-4">
          <label className="text-sm">종료</label>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            dateFormat="yyyy.MM.dd"
            placeholderText="날짜 선택"
            locale={ko}
            minDate={startDate || undefined}
            enableTabLoop={false}
            className="w-full max-w-[150px] rounded-lg border-2 px-3 py-2 focus:border-black focus:placeholder:text-black"
            popperClassName="end-datepicker-popper"
            onCalendarOpen={() => setIsEndCalendarOpen(true)}
            onCalendarClose={() => setIsEndCalendarOpen(false)}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="mb-2 flex items-center justify-between px-[14px] pt-[3px]">
                <span className="text-base font-semibold">
                  {date.getFullYear()}년 {date.getMonth() + 1}월
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={decreaseMonth}
                    className="text-lg text-primary-200 hover:text-primary-450"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={increaseMonth}
                    className="text-lg text-primary-200 hover:text-primary-450"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            )}
          />
          <div className="date-picker-end-time-container">
            <DatePicker
              selected={endTime}
              onChange={(date: Date | null) => setEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption=""
              locale={ko}
              dateFormat="HH:mm"
              placeholderText="시간 선택"
              className="w-full max-w-[150px] rounded-lg border-2 px-3 py-2 focus:border-black focus:placeholder:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
