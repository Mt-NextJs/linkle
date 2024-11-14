// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 비로그인 사용자가 특정 페이지에 접근하면 intro 페이지로 리다이렉트
  // if (
  //   !token &&
  //   request.nextUrl.pathname !== "/login" &&
  //   request.nextUrl.pathname !== "/join" &&
  //   request.nextUrl.pathname !== "/intro"
  // ) {
  //   return NextResponse.redirect(new URL("/intro", request.url));
  // }
  //
  // // 로그인된 사용자가 로그인, 회원가입, intro 페이지에 접근 시 메인 페이지로 리다이렉트
  // if (
  //   token &&
  //   (request.nextUrl.pathname === "/login" ||
  //     request.nextUrl.pathname === "/join" ||
  //     request.nextUrl.pathname === "/intro")
  // ) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // 모든 조건을 통과하면 다음으로 요청을 진행
  return NextResponse.next();
}

// 인증이 필요한 페이지 설정
export const config = {
  matcher: [
    "/", // 메인 페이지
    "/profile/:path*", // 프로필 페이지와 하위 경로
    "/admin/:path*", // 관리자 페이지와 하위 경로
    "/login", // 로그인 페이지
    "/join", // 회원가입 페이지
    "/intro", // 소개 페이지
  ],
};
