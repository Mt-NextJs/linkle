"use client";

import { useState } from "react";
import EventFormInput from "./event-form-input";
import Calendar from "./calendar";
import EventPreview from "./event-preview";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventGuide, setEventGuide] = useState("");

  return (
    <>
      <EventPreview title={title} description={description} />

      <div className="my-8 border-t-2 border-[#F6F6F6]"></div>

      <form className="flex flex-col gap-8">
        <EventFormInput
          label="이벤트 명"
          id="evnet-title"
          placeholder="이벤트를 잘 나타낼 수 있는 타이틀을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <EventFormInput
          label="이벤트 설명"
          id="evnet-description"
          placeholder="어떤 이벤트인지 설명을 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <EventFormInput
          label="가이드 문구"
          id="evnet-guide"
          placeholder="이벤트의 응모 조건이나, 가이드를 작성해주세요"
          value={eventGuide}
          onChange={(e) => setEventGuide(e.target.value)}
          required
        />

        <div>
          <h3>이벤트 일정</h3>
          <div className="h-auto w-full bg-gray-300">
            <Calendar label="시작" />
            <Calendar label="종료" />
          </div>
        </div>

        <button
          type="submit"
          className="h-11 w-full rounded bg-primary-100 text-primary-200"
        >
          추가 완료
        </button>
      </form>
    </>
  );
}
