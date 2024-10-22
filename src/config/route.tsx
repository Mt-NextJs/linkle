import { ClientRouteType } from "@config/types";

export const ClientRoute: ClientRouteType = {
  MAIN: "/", // 메인 페이지
  INTRO: "/intro", // 랜딩 페이지
  LOGIN: "/login", // 로그인 페이지
  JOIN: "/join", // 회원가입 페이지
  ADMIN: "/admin", // 관리자 페이지
  MY: "/admin/my", // 개인 페이지
  PROFILE: {
    DETAIL: "/admin/profile/detail", // 프로필 상세 페이지
    EDIT: "/admin/profile/edit", // 프로필 수정 페이지
  },
};
