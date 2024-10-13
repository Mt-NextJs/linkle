import LinkForm from "./components/link-form";

export default function LinkPage() {
  return (
    <>
      <div className="mx-auto my-14 w-[740px]">
        <h1 className="pageName mb-6">링크 블록</h1>

        <LinkForm />
      </div>
    </>
  );
}
