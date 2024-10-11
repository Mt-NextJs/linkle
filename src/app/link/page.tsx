export default function LinkPage() {
  return (
    <>
      <article className="mx-auto my-14 w-[800px]">
        <header>
          <h1 className="text-2xl">블록 링크</h1>
        </header>

        {/* 스타일 */}
        <section className="mt-8 flex flex-col items-center justify-center gap-9">
          <div className="flex h-32 w-full items-center justify-center rounded-sm bg-[#F6F6F6]">
            <div className="flex h-[86px] w-[600px] items-center rounded-lg bg-white">
              <div className="flex w-full items-center">
                <div className="ml-[6px] flex w-1/5 justify-start">
                  <img
                    src="#"
                    alt="link-icon"
                    className="h-[75px] w-[75px] rounded-lg bg-gray-300"
                  />
                </div>
                <div className="mr-[37px] flex w-4/5 items-center justify-center">
                  <p>타이틀을 입력해주세요</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg">
              스타일 <span className="text-red-500">*</span>
            </h3>
            {/* item * 4 */}
            <div>
              <div className="boarder rounded border-[#F6F6F6]">
                {/* style type img */}
              </div>
              <p className="mt-2">썸네일</p>
            </div>
          </div>
        </section>

        <div className="my-6 border-t-2 border-[#F6F6F6]"></div>

        {/* Info */}
        <section>
          <form action="" className="flex flex-col gap-6">
            <div>
              <label className="text-lg" htmlFor="linked-url">
                연결할 주소 <span className="text-red-500">*</span>
              </label>
              <input type="text" id="linked-url" />
            </div>

            <div className="mt-2">
              <label className="mb-1 block font-medium text-gray-700">
                이미지 <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center justify-start">
                <input type="file" id="file-upload" className="hidden" />
                <label
                  htmlFor="file-upload"
                  className="flex h-[94px] w-[94px] cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-200 hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </label>

                <div className="ml-3 text-sm text-gray-500">
                  <p>이미지를 직접 끌어오거나</p>
                  <p>파일을 선택하여 업로드해주세요</p>
                </div>
              </div>
            </div>

            <div className="my-2 h-3 w-full bg-gray-200"></div>

            <button
              type="submit"
              className="h-11 w-full rounded bg-[#FFF3EF] text-[#FFB99D]"
            >
              추가 완료
            </button>
          </form>
        </section>
      </article>
    </>
  );
}
