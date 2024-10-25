interface TextBlockProps {
  title: string | null;
}

export default function TextBlock({ title }: TextBlockProps) {
  return (
    <>
      <div className="mb-4 ml-10 font-bold">{title}</div>
    </>
  );
}
