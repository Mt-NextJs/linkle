# 환경변수 사용 현황

프로젝트에서 사용 중인 환경변수 목록 및 사용 위치입니다.

## 필수 환경변수

### 1. `MONGODB_URI`

- **용도**: MongoDB 데이터베이스 연결 URI
- **검증**: ✅ 있음 (`src/lib/mongodb.tsx`에서 체크)
- **사용 위치**:
  - `src/lib/mongodb.tsx` (3줄, 9줄)
  - 모든 API 라우트에서 MongoDB 연결 시 사용

### 2. `JWT_SECRET`

- **용도**: JWT 토큰 서명 및 검증용 시크릿 키
- **검증**: ❌ 없음 (추가 권장)
- **사용 위치** (총 12개 파일):
  - `src/app/api/login/route.tsx` (27줄) - 로그인 시 JWT 토큰 생성
  - `src/app/api/user/info/route.tsx` (25줄) - JWT 토큰 검증
  - `src/app/api/user/update/route.tsx` (23줄) - JWT 토큰 검증
  - `src/app/api/link/add/route.tsx` (52줄) - JWT 토큰 검증
  - `src/app/api/link/update/route.tsx` (59줄) - JWT 토큰 검증
  - `src/app/api/link/delete/route.tsx` (33줄) - JWT 토큰 검증
  - `src/app/api/link/list/route.tsx` (25줄) - JWT 토큰 검증
  - `src/app/api/link/list/update/route.tsx` (26줄) - JWT 토큰 검증
  - `src/app/api/link/calendar/add/route.tsx` (26줄) - JWT 토큰 검증
  - `src/app/api/link/calendar/update/route.tsx` (45줄) - JWT 토큰 검증
  - `src/app/api/link/calendar/list/route.tsx` (25줄) - JWT 토큰 검증
  - `src/app/api/link/calendar/delete/route.tsx` (34줄) - JWT 토큰 검증

## 클라이언트 환경변수 (NEXT*PUBLIC*\*)

### 3. `NEXT_PUBLIC_KAKAO_JS_KEY`

- **용도**: 카카오 JavaScript SDK 초기화용 API 키
- **검증**: ❌ 없음
- **사용 위치**:
  - `src/utils/kakao-script.tsx` (8줄) - 카카오 SDK 초기화

### 4. `NEXT_PUBLIC_API_URL`

- **용도**: 클라이언트에서 API 호출 시 사용하는 베이스 URL
- **검증**: ❌ 없음
- **사용 위치**:
  - `src/app/profile/edit/page.tsx` (175줄) - 사용자 정보 업데이트 API 호출

## Next.js 기본 환경변수

### 5. `NODE_ENV`

- **용도**: 실행 환경 구분 (development/production)
- **사용 위치**:
  - `src/lib/mongodb.tsx` (13줄) - 개발 환경에서 MongoDB 클라이언트 재사용 최적화

## 환경변수 파일 생성 필요

프로젝트 루트에 `.env.local` 파일을 생성하여 다음 환경변수들을 설정하세요:

```env
# MongoDB 연결 정보
MONGODB_URI=mongodb://localhost:27017/linkle
# 또는 MongoDB Atlas 연결 문자열
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkle

# JWT 토큰 서명용 시크릿 키 (강력한 랜덤 문자열 사용 권장)
JWT_SECRET=your-secret-key-here

# 카카오 JavaScript SDK 키
NEXT_PUBLIC_KAKAO_JS_KEY=your-kakao-js-key-here

# API 베이스 URL (프로덕션에서는 실제 도메인으로 변경)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 주의사항

1. `.env.local` 파일은 `.gitignore`에 포함되어 있어야 합니다 (기밀 정보 포함)
2. `.env.example` 파일을 생성하여 팀원들과 환경변수 목록을 공유하는 것을 권장합니다
3. `JWT_SECRET`은 강력한 랜덤 문자열을 사용해야 합니다
4. 프로덕션 환경에서는 환경변수가 올바르게 설정되었는지 확인하세요
