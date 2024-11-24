import type { Metadata } from "next";
import { cookies } from "next/headers";

import { ThemeToggle } from "@components/common/ui/theme-toggle";
import ReactQueryProvider from "@components/providers/React-Query-Provider";
//styles
import "@styles/global.css";
import "@styles/common.css";

export const metadata: Metadata = {
  title: {
    template: "%s | IN MY LINK",
    default: "IN MY LINK",
  },
  description: "나만의 맞춤형 링크 페이지를 만들어보세요. | BOOMCO co.",
  openGraph: {
    title: "IN MY LINK - 나만의 링크 페이지",
    description:
      "링크, 텍스트, 이미지 등 다양한 블록으로 페이지를 만들어보세요.",
    images: ["/assets/images/og-image.png"],
    type: "website",
    locale: "ko_KR",
    siteName: "IN MY LINK",
  },
  icons: {
    icon: [
      { url: "/assets/icons/favicon/favicon.ico" },
      {
        url: "/assets/icons/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "/assets/icons/favicon/apple-icon-180x180.png",
      sizes: "180x180",
    },
  },
};
type Theme = "light" | "dark" | undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("theme")?.value as Theme;
  return (
    <html lang="ko" data-theme={theme || ""}>
      <body>
        <ReactQueryProvider>
          <div id="portal" />
          <div className={"mx-auto max-w-screen-md"}>{children}</div>
          <div id="portal" />
          <div className={"mx-auto max-w-screen-md"}>{children}</div>
          <ThemeToggle cookieTheme={theme} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
