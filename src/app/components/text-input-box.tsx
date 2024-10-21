import React from "react";

interface Props {
  title: string;
  placeholder: string;
  text: string;
  setText: (text: string) => void;
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
  const checkImageUrl = (strUrl: string) => {
    const expUrl = /^http[s]?\:\/\//i;
    return expUrl.test(strUrl);
  };
  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value && title === "이미지" && !checkImageUrl(value)) {
      alert("이미지 URL을 확인해주세요.");
      return;
    }
    setText(value);
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between gap-2">
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
        onChange={handeChange}
        className="text-slate-600"
        maxLength={limit}
      />
    </div>
  );
};

export default TextInputBox;
