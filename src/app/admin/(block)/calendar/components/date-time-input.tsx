"use client";

import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";

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
            className={`w-full rounded-md border p-2 pr-8 ${
              dateValue ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
            }`}
            placeholderText="날짜 선택"
            wrapperClassName="w-full"
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
            className={`w-full rounded-md border p-2 pr-8 ${
              timeValue ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
            }`}
            placeholderText="시간 선택"
            wrapperClassName="w-full"
          />
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
  );
}
