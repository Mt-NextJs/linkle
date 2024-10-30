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
      const formattedDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
      )
        .toISOString()
        .split("T")[0];
      onDateChange(formattedDate);
    }
  };

  const handleTimeChange = (date: Date | null) => {
    if (date) {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      onTimeChange(`${hours}:${minutes}`);
    }
  };

  const selectedDate = dateValue ? new Date(dateValue) : null;
  const selectedTime = timeValue ? new Date(`1970-01-01T${timeValue}`) : null;
  const minDateTime = minDate ? new Date(minDate) : undefined;

  return (
    <>
      <style jsx global>{`
        .react-datepicker {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow:
            0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
        }

        .react-datepicker__triangle {
          display: none;
        }

        .react-datepicker__header {
          background-color: white;
          border-bottom: 1px solid #f3f4f6;
          padding: 1rem 0 0.5rem;
        }

        .react-datepicker__current-month {
          margin-bottom: 0.75rem;
        }

        .react-datepicker__navigation {
          top: 1rem;
        }

        .react-datepicker__navigation--previous {
          left: 1rem;
        }

        .react-datepicker__navigation--next {
          right: 1rem;
        }

        .react-datepicker__navigation-icon::before {
          border: 2px solid #6b7280;
          border-width: 2px 2px 0 0;
          height: 8px;
          width: 8px;
          position: absolute;
          top: 6px;
        }

        .react-datepicker__day-names {
          margin-bottom: -0.5rem;
        }

        .react-datepicker__day-name {
          color: #6b7280;
          font-size: 0.75rem;
          width: 2rem;
          margin: 0.2rem;
        }

        .react-datepicker__month {
          margin: 0.4rem;
        }

        .react-datepicker__day {
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          margin: 0.2rem;
          font-size: 0.875rem;
          border-radius: 20px;
        }

        .react-datepicker__day:hover,
        .react-datepicker__time-list-item:hover {
          background-color: #fef1e5 !important;
        }

        .react-datepicker__day--selected,
        .react-datepicker__time-list-item--selected {
          background-color: #ff4e09 !important;
          color: white;
          font-weight: 600;
        }

        .same-day {
          background-color: #ffe5d9;
        }

        .react-datepicker__day--outside-month {
          color: #9ca3af;
        }

        .react-datepicker__time-container .react-datepicker__time {
          background: white;
        }

        .react-datepicker__time-list-item {
          height: 2rem;
          line-height: 2rem;
          font-size: 0.875rem;
          padding: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <span>{label}</span>
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <div className="flex gap-2">
          <div className="relative flex w-1/2">
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
          <div className="relative flex w-1/2">
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
