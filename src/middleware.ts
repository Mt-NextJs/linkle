// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (
    !token &&
    request.nextUrl.pathname !== "/login" &&
    request.nextUrl.pathname !== "/intro"
  ) {
    return NextResponse.redirect(new URL("/intro", request.url));
  }

  return NextResponse.next();
}

// 인증이 필요한 페이지 설정
export const config = {
  matcher: ["/", "/profile/:path*", "/admin/:path*"], // 인증이 필요한 경로 지정
};
