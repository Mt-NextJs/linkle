"use client";

type FormInputProps = {
  label: string;
  id: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function FormInput({
  label,
  id,
  ...inputProps
}: FormInputProps) {
  return (
    <div>
      <label className="title mb-[10px] block" htmlFor={id}>
        {label} <span className="text-red-500">*</span>
      </label>
      <input id={id} {...inputProps} />
    </div>
  );
}
