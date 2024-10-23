"use client";

type FormInputProps = {
  label: string;
  id: string;
  selectedStyle?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function FormInput({
  label,
  id,
  selectedStyle,
  ...inputProps
}: FormInputProps) {
  return (
    <div>
      <label className="title mb-[10px] block" htmlFor={id}>
        {label}
        {selectedStyle !== "심플" && <span className="text-red-500">*</span>}
      </label>
      <input id={id} {...inputProps} />
    </div>
  );
}
