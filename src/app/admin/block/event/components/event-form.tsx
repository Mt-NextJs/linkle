"use client";

import { FormEvent, useState } from "react";
import Calendar from "./calendar";
import EventPreview from "./event-preview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../../components/layout";
import ButtonBox from "../../components/buttons/button-box";
import AddButton from "../../components/buttons/add-button";
import FormInput from "../../components/form-input";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventGuide, setEventGuide] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");
  };

  const summitButtonDisabled =
    !title ||
    !description ||
    !eventGuide ||
    !startDate ||
    !endDate ||
    !startTime ||
    !endTime;

  return (
    <Layout title="이벤트 블록" onSubmit={handleSubmit}>
      <EventPreview
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
        startTime={startTime}
        endTime={endTime}
      />

      <div className="my-8 border-t-2 border-[#F6F6F6]"></div>

      <div className="flex flex-col gap-8">
        <FormInput
          label="이벤트 명"
          id="evnet-title"
          placeholder="이벤트를 잘 나타낼 수 있는 타이틀을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={30}
        />
        <FormInput
          label="이벤트 설명"
          id="evnet-description"
          placeholder="어떤 이벤트인지 설명을 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormInput
          label="가이드 문구"
          id="evnet-guide"
          placeholder="이벤트의 응모 조건이나, 가이드를 작성해주세요"
          value={eventGuide}
          onChange={(e) => setEventGuide(e.target.value)}
        />

        <div>
          <label className="title mb-[10px] block">
            이벤트 일정 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-5">
            {/* 시작 날짜 및 시간 선택 */}
            <div className="flex w-full flex-col">
              <label className="mb-2 font-medium">시작</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="yyyy.MM.dd"
                placeholderText="날짜 선택"
                className="mb-2 w-full rounded border p-2"
              />
              <DatePicker
                selected={startTime}
                onChange={(date: Date | null) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="시간 선택"
                dateFormat="HH:mm"
                placeholderText="시간 선택"
                className="w-full rounded border p-2"
              />
            </div>
            {/* 종료 날짜 및 시간 선택 */}
            <div className="flex w-full flex-col">
              <label className="mb-2 font-medium">종료</label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date)}
                dateFormat="yyyy.MM.dd"
                placeholderText="날짜 선택"
                minDate={startDate || undefined}
                className="mb-2 w-full rounded border p-2"
              />
              <DatePicker
                selected={endTime}
                onChange={(date: Date | null) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="시간 선택"
                dateFormat="HH:mm"
                placeholderText="시간 선택"
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        </div>

        <ButtonBox>
          <AddButton
            type={"submit"}
            text="추가 완료"
            disabled={summitButtonDisabled}
          />
        </ButtonBox>
      </div>
    </Layout>
  );
}
