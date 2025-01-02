"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Layout from "../../components/layout";
import EventPreview from "./event-preview";
import ButtonBox from "../../components/buttons/button-box";
import AddButton from "../../components/buttons/add-button";
import FormInput from "../../components/form-input";

import "react-datepicker/dist/react-datepicker.css";
import { adminApiInstance } from "../../../../../utils/apis";
import EventDatePicker from "./event-date-picker";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventGuide, setEventGuide] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const router = useRouter();
  const prevPath = useSearchParams().get("prevPath") || "/admin";

  function combineDateAndTime(date: Date | null, time: Date | null) {
    if (!date || !time) return null;
    const combined = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
    );
    return combined.toISOString();
  }

  async function postEvent() {
    const dateStart = combineDateAndTime(startDate, startTime);
    const dateEnd = combineDateAndTime(endDate, endTime);

    const postData = {
      type: 5,
      title, // 타이틀
      subText01: description, // 서브타이틀
      subText02: eventGuide, // 가이드라인
      dateStart, // 시작일자
      dateEnd,
    };

    const blockApis = await adminApiInstance;
    const response = await blockApis.addBlock(postData);
    if (!response) return;
    if (response.ok) {
      alert("이벤트 블록이 성공적으로 추가되었습니다🥰");
      router.push("/admin");
    } else await blockApis.handleResponseError(response);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postEvent();
    setTitle("");
  };

  const summitButtonDisabled =
    !title || !startDate || !endDate || !startTime || !endTime;

  return (
    <Layout title="이벤트 블록" onSubmit={handleSubmit} prevPath={prevPath}>
      <div role="form" aria-label="이벤트 등록 폼">
        <EventPreview
          title={title}
          description={description}
          startDate={startDate}
          endDate={endDate}
          startTime={startTime}
          endTime={endTime}
        />

        <hr aria-hidden="true" className="border-gray-105 my-8 border-t-2" />

        <div className="flex flex-col gap-8">
          <FormInput
            label="이벤트 명"
            id="event-title"
            name="event-title"
            placeholder="이벤트를 잘 나타낼 수 있는 타이틀을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={30}
            aria-required="true"
            aria-describedby="title-help"
          />
          <span id="title-help" className="sr-only">
            최대 30자까지 입력 가능합니다
          </span>

          <FormInput
            label="이벤트 설명"
            id="event-description"
            name="event-description"
            placeholder="어떤 이벤트인지 설명을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={100}
            aria-describedby="description-help"
          />
          <span id="description-help" className="sr-only">
            최대 100자까지 입력 가능합니다
          </span>

          <FormInput
            label="가이드 문구"
            id="event-guide"
            name="event-guide"
            placeholder="이벤트의 응모 조건이나, 가이드를 작성해주세요"
            value={eventGuide}
            onChange={(e) => setEventGuide(e.target.value)}
            maxLength={100}
            aria-describedby="guide-help"
          />
          <span id="guide-help" className="sr-only">
            최대 100자까지 입력 가능합니다
          </span>

          <EventDatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />

          <ButtonBox>
            <AddButton
              type="submit"
              text="추가 완료"
              disabled={summitButtonDisabled}
              aria-disabled={summitButtonDisabled}
            />
          </ButtonBox>
        </div>
      </div>
    </Layout>
  );
}
