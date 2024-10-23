import React from "react";

interface Schedule {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface ListViewProps {
  schedules: Schedule[];
}

const ListView: React.FC<ListViewProps> = ({ schedules }) => {
  return (
    <div className="relative mt-4 space-y-0 rounded-lg bg-white p-4 shadow">
      <div className="ml-10 mt-5">
        <div
          className="h-50 absolute bottom-4 left-[9.35rem] top-12 bg-gray-200"
          style={{ width: "3px" }}
        ></div>
        {schedules.map((schedule, index) => (
          <div key={schedule.id} className="relative flex items-start pb-6">
            <div className="z-10 w-24 flex-shrink-0">
              <span
                className={`inline-block w-20 rounded-full px-3 py-1 text-center text-xs font-semibold ${index === 0 ? "bg-orange-500 text-white" : "bg-gray-200"}`}
                style={index !== 0 ? { color: "var(--primary)" } : {}}
              >
                {index === 0 ? "OPEN" : index === 1 ? "D-3" : "SOON"}
              </span>
            </div>
            <div className="relative ml-4">
              <div className="absolute -left-[1.25rem] top-2 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
              <p className="mb-1 text-sm text-gray-500">
                {new Date(schedule.startDate).toLocaleString("ko-KR", {
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                ~
                {new Date(schedule.endDate).toLocaleString("ko-KR", {
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p
                className="text-sm font-semibold"
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {schedule.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
