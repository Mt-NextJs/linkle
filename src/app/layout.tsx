import type { Metadata } from "next";

import { ThemeProvider } from "@components/providers/theme-provider";
import { ThemeToggle } from "@components/common/ui/theme-toggle";

//styles
import "@styles/global.css";
import "@styles/common.css";

export const metadata: Metadata = {
  title: {
    template: "%s | IN MY LINK",
    default: "IN MY LINK",
  },
  description: "BOOMCO co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div id="portal" />
        <div className={"mx-auto max-w-screen-md"}>{children}</div>
        <ThemeToggle />
      </body>
    </html>
  );
}
