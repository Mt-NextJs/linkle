import React from "react";

interface Props {
  showTotal: number;
  showToday: number;
  showRealTime: number;
}

const VisitSection = ({ showToday, showTotal, showRealTime }: Props) => {
  return (
    <section className="mt-4" aria-labelledby="visitor-stats-title">
      <div className="flex w-full rounded border">
        <div className="grid w-8/12 rounded-l border">
          <h2 id="visitor-stats-title" className="ml-2 font-bold">
            방문자
          </h2>
          <div className="flex">
            <dl className="ml-2">
              <dt className="inline">전체</dt>
              <dd
                className="ml-1 inline text-red-500"
                aria-label={`전체 방문자 ${showTotal}명`}
              >
                {showTotal}
              </dd>
            </dl>
            <dl className="ml-2">
              <dt className="inline">오늘</dt>
              <dd
                className="ml-1 inline text-red-500"
                aria-label={`오늘 방문자 ${showToday}명`}
              >
                {showToday}
              </dd>
            </dl>
            <dl className="ml-2">
              <dt className="inline">실시간</dt>
              <dd
                className="ml-1 inline text-red-500"
                aria-label={`실시간 방문자 ${showRealTime}명`}
              >
                {showRealTime}
              </dd>
            </dl>
          </div>
        </div>
        <div className="w-4/12 rounded-r border">
          <h2 id="subscription-stats-title" className="ml-2 font-bold">
            소식받기
          </h2>
          <dl className="ml-2">
            <dt className="inline">전체</dt>
            <dd
              className="ml-1 inline text-red-500"
              aria-label="소식받기 구독자 전체 0명"
            >
              0
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
