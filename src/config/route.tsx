import { ClientRouteType } from "@config/types";

export const ClientRoute: ClientRouteType = {
  MAIN: "/", // 메인 페이지
  INTRO: "/intro", // 랜딩 페이지
  LOGIN: "/login", // 로그인 페이지
  JOIN: "/join", // 회원가입 페이지
  ADMIN: "/admin", // 관리자 페이지
  MY: "/admin/my", // 개인 페이지
  PROFILE: {
    DEFAULT: "/profile", // 프로필 페이지
    DETAIL: "/profile/detail", // 프로필 상세 페이지
    EDIT: "/profile/edit", // 프로필 수정 페이지
  },
};
