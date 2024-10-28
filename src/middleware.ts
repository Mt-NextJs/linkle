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
    return NextResponse.redirect(new URL("/intro", request.url));
  }

  // 이미 로그인된 사용자가 로그인 또는 회원가입 페이지에 접근하면 메인 페이지로 리다이렉트
  if (
    token &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/join" ||
      request.nextUrl.pathname === "/intro")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// 인증이 필요한 페이지 설정
export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/admin/:path*",
    "/login",
    "/join",
    "/intro",
  ], // 인증이 필요한 경로 지정
};
