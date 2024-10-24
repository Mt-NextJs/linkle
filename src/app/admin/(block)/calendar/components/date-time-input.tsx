"use client";

import Image from "next/image";

interface DateTimeInputProps {
  label: string;
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  showTimeDropdown: boolean;
  onTimeDropdownToggle: () => void;
  required?: boolean;
}

export default function DateTimeInput({
  label,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  showTimeDropdown,
  onTimeDropdownToggle,
  required = false,
}: DateTimeInputProps) {
  const timeOptions = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`,
  );

  return (
    <div className="flex flex-col space-y-2">
      <label className="flex items-center">
        <span>{label}</span>
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="flex space-x-2">
        <input
          type="date"
          value={dateValue}
          onChange={(e) => onDateChange(e.target.value)}
          className={`min-w-[160px] flex-1 rounded-md p-2 ${
            dateValue ? "border-[#FFCAB5] bg-[#FEF1E5]" : "border-gray-300"
          }`}
          required={required}
        />
        <div className="relative flex min-w-[120px] flex-1 items-center rounded-md border border-gray-300">
          <div className="pl-2 pr-1">
            <Image
              src="/assets/icons/icon_clock.png"
              alt="Clock"
              width={20}
              height={20}
            />
          </div>
          <input
            type="text"
            value={timeValue}
            onChange={(e) => onTimeChange(e.target.value)}
            className="w-full appearance-none rounded-md border-0 bg-transparent p-2 focus:outline-none focus:ring-0"
            placeholder="시간"
            required={required}
            readOnly
          />
          <div
            className="absolute right-2 cursor-pointer"
            onClick={onTimeDropdownToggle}
          >
            <Image
              src="/assets/icons/icon_open.png"
              alt="Open"
              width={13}
              height={13}
            />
          </div>
          {showTimeDropdown && (
            <div className="absolute left-0 top-full z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white shadow-lg">
              {timeOptions.map((time, i) => (
                <div
                  key={i}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => {
                    onTimeChange(time);
                    onTimeDropdownToggle();
                  }}
                >
                  {time}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
