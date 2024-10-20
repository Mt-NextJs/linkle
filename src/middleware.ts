// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("token"); // 쿠키에서 인증 토큰을 가져옴

  // if (
  //   !token &&
  //   request.nextUrl.pathname !== "/login" &&
  //   request.nextUrl.pathname !== "/landing"
  // ) {
  //   return NextResponse.redirect(new URL("/landing", request.url));
  // }

  return NextResponse.next(); // 로그인된 사용자에 대한 요청은 통과
}

// 인증이 필요한 페이지 설정
export const config = {
  matcher: ["/main", "/profile/:path*", "/admin"], // 인증이 필요한 경로 지정
};
