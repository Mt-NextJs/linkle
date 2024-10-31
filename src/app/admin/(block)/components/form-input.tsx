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
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label className="title block" htmlFor={id}>
          {label}
          {required && <span className="text-warning">*</span>}
        </label>
        {maxLength && (
          <div className="text-slate-444">
            {value ? (value as string)?.length : 0}
            <span className="text-[12px] text-slate-666"> / {maxLength}</span>
          </div>
        )}
      </div>
      <input id={id} {...inputProps} />
    </div>
  );
}
