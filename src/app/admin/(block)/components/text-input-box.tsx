import React from 'react';

interface Props {
  title: string;
  placeholder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  limit?: number;
}
const TextInputBox = ({
  title,
  placeholder,
  text,
  setText,
  required,
  limit,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between gap-1">
        <div>
          {title}
          {required && <span className="text-red-500">*</span>}
        </div>
        {limit && (
          <div className="text-slate-400">
            {text.length}
            <span className="text-[12px] text-slate-600"> / {limit}</span>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        className="text-slate-600"
        maxLength={limit}
      />
    </div>
  );
};

export default TextInputBox;
