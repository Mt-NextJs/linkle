export default function Calendar({ label }: { label: string }) {
  return (
    <>
      <label htmlFor="start-date">{label}</label>
      <input type="text" placeholder="날짜 선택" />
      <input type="time" placeholder="시간 선택" />
      {/* 캘린더 */}
    </>
  );
}
