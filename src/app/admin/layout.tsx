import type { Metadata } from "next";

//components
import Navigation from "@app/(intro)/components/navigation";

//styles

//metadata
export const metadata: Metadata = {
  title: "admin",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
