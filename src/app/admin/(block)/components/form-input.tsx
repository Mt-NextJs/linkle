"use client";

import React from "react";

type FormInputProps = {
  label: string;
  id: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function FormInput({
  label,
  id,
  ...inputProps
}: FormInputProps) {
  const { required, maxLength, value } = inputProps;
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <div className="flex items-center justify-between">
        <label className="title block text-sm sm:text-base" htmlFor={id}>
          {label}
          {required && <span className="text-warning">*</span>}
        </label>
        {maxLength && (
          <div className="text-sm text-slate-444 dark:text-slate-444-dark sm:text-base">
            {value ? (value as string)?.length : 0}
            <span className="text-[11px] text-slate-666 dark:text-slate-666-dark sm:text-[12px]">
              / {maxLength}
            </span>
          </div>
        )}
      </div>
      <input
        id={id}
        {...inputProps}
        className={`${inputProps.className || ""} text-sm sm:text-base`}
      />
    </div>
  );
}
