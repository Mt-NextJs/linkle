// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (
    !token &&
    request.nextUrl.pathname !== "/login" &&
    request.nextUrl.pathname !== "/join" &&
    request.nextUrl.pathname !== "/intro"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 로그인된 사용자가 로그인, 회원가입, intro 페이지에 접근 시 메인 페이지로 리다이렉트
  if (
    token &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/join" ||
      request.nextUrl.pathname === "/intro")
  ) {
    return NextResponse.redirect(new URL("/main", request.url));
  }

  return NextResponse.next();
}

// 인증이 필요한 페이지 설정
export const config = {
  matcher: [
    "/profile/:path*", // 프로필 페이지와 하위 경로
    "/admin/:path*", // 관리자 페이지와 하위 경로
    "/login", // 로그인 페이지
    "/join", // 회원가입 페이지
  ],
};
