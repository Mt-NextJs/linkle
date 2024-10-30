"use client";

import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendar } from "react-icons/fa6";
import { ko } from "date-fns/locale";

interface DateTimeInputProps {
  label: string;
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  minDate?: string;
  required?: boolean;
}

export default function DateTimeInput({
  label,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  minDate,
  required = false,
}: DateTimeInputProps) {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      onDateChange(formattedDate);
    }
  };

  const handleTimeChange = (date: Date | null) => {
    if (date) {
      const formattedTime = date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      onTimeChange(formattedTime);
    }
  };

  const selectedDate = dateValue ? new Date(dateValue) : null;
  const selectedTime = timeValue ? new Date(`1970-01-01T${timeValue}`) : null;
  const minDateTime = minDate ? new Date(minDate) : undefined;

  return (
    <>
      <style jsx global>{`
        .calendar-block-datepicker .react-datepicker-popper {
          transform: none !important;
          top: 100% !important;
          left: 0 !important;
        }

        .calendar-block-datepicker .react-datepicker {
          background-color: var(--background);
          border: 1px solid #e5e7eb !important;
          border-radius: 0.5rem;
          box-shadow:
            0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
          width: 300px;
        }

        .calendar-block-datepicker .react-datepicker__triangle {
          display: none;
        }

        .calendar-block-datepicker .react-datepicker__header {
          background-color: var(--background);
          border-bottom: 1px solid #f3f4f6;
          padding: 1rem 0 0.5rem;
        }

        .calendar-block-datepicker .react-datepicker__current-month {
          margin-bottom: 0.75rem;
        }

        .calendar-block-datepicker .react-datepicker__navigation {
          top: 1rem;
        }

        .calendar-block-datepicker .react-datepicker__navigation--previous {
          left: 1rem;
        }

        .calendar-block-datepicker .react-datepicker__navigation--next {
          right: 1rem;
        }

        .calendar-block-datepicker .react-datepicker__navigation-icon::before {
          border: 2px solid #6b7280;
          border-width: 2px 2px 0 0;
          height: 8px;
          width: 8px;
          position: absolute;
          top: 6px;
        }

        .calendar-block-datepicker .react-datepicker__day-names {
          margin-bottom: -0.5rem;
          display: flex;
          justify-content: center;
        }

        .calendar-block-datepicker .react-datepicker__day-name {
          color: #6b7280;
          font-size: 0.75rem;
          margin: 0.5rem;
          display: inline-block;
        }

        .calendar-block-datepicker .react-datepicker__month {
          margin: 0.4rem;
          display: block;
          padding: 0;
        }

        .calendar-block-datepicker .react-datepicker__week {
          display: flex;
          justify-content: center;
          gap: 0;
        }

        .calendar-block-datepicker .react-datepicker__day {
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          margin: 0.2rem;
          font-size: 0.875rem;
          border-radius: 20px;
        }

        .calendar-block-datepicker .react-datepicker__day:hover,
        .calendar-block-datepicker .react-datepicker__time-list-item:hover {
          background-color: var(--primary-100) !important;
        }

        .calendar-block-datepicker .react-datepicker__day--selected:hover,
        .calendar-block-datepicker
          .react-datepicker__time-list-item--selected:hover {
          background-color: var(--primary) !important;
        }

        .calendar-block-datepicker .react-datepicker__day--selected,
        .calendar-block-datepicker .react-datepicker__time-list-item--selected {
          background-color: var(--primary) !important;
          color: white;
          font-weight: 600;
        }

        .calendar-block-datepicker .react-datepicker__day--keyboard-selected {
          background-color: var(--primary-100) !important;
        }

        .calendar-block-datepicker .react-datepicker__day--outside-month {
          color: #9ca3af;
        }

        .calendar-block-datepicker .react-datepicker--time-only {
          background-color: var(--background);
          border: 1px solid #e5e7eb !important;
          border-radius: 0.5rem;
          box-shadow:
            0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
          width: 100% !important;
          height: 100% !important;
        }

        .calendar-block-datepicker .react-datepicker__time-container {
          width: 100%;
        }

        .calendar-block-datepicker .react-datepicker__time-list-item {
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex gap-2">
          <div className="calendar-block-datepicker relative flex w-1/2">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              minDate={minDateTime}
              required={required}
              locale={ko}
              className={`w-full rounded-md border p-2 pr-8 ${
                dateValue ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
              }`}
              placeholderText="날짜"
              wrapperClassName="w-full"
              dayClassName={(date) => {
                if (!selectedDate) return "";

                if (date.toDateString() === selectedDate.toDateString()) {
                  return "react-datepicker__day--selected";
                }

                if (date.getDate() === selectedDate.getDate()) {
                  return "same-day";
                }

                return "";
              }}
            />
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <FaRegCalendar />
            </div>
          </div>
          <div className="calendar-block-datepicker relative flex w-1/2">
            <DatePicker
              selected={selectedTime}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="시간"
              dateFormat="HH:mm"
              required={required}
              locale={ko}
              className={`w-full rounded-md border p-2 pr-8 ${
                timeValue ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
              }`}
              placeholderText=""
              wrapperClassName="w-full"
            />
            {!timeValue && (
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                <Image
                  src="/assets/icons/icon_clock.png"
                  alt="Clock Icon"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <span>시간</span>
              </div>
            )}
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <Image
                src="/assets/icons/icon_open.png"
                alt="Open"
                width={13}
                height={13}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
