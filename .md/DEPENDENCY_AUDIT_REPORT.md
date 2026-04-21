# 의존성 보안 점검 및 업데이트 분석 보고서

**작성일**: 2025년 1월  
**프로젝트**: Linkle  
**현재 Next.js 버전**: 14.2.22  
**현재 React 버전**: 18.x

---

## 🚨 긴급 보안 취약점 (즉시 수정 필요)

### 1. Next.js - **CRITICAL** 취약점들

**현재 버전**: `14.2.22`  
**권장 버전**: `14.2.35` 이상 (최신: `16.1.0`)

#### 발견된 취약점:

1. **GHSA-f82v-jwr5-mffw** - Authorization Bypass in Next.js Middleware (CRITICAL)

   - **심각도**: Critical (CVSS 9.1)
   - **영향 범위**: `>=14.0.0 <14.2.25`
   - **설명**: 미들웨어에서 권한 우회 가능
   - **현재 상태**: ⚠️ **영향받음** (14.2.22 < 14.2.25)

2. **GHSA-mwv6-3258-q52c** - Denial of Service with Server Components (HIGH)

   - **심각도**: High (CVSS 7.5)
   - **영향 범위**: `>=13.3.0 <14.2.34`
   - **현재 상태**: ⚠️ **영향받음** (14.2.22 < 14.2.34)

3. **GHSA-5j59-xgg2-r9c4** - Denial of Service with Server Components - Incomplete Fix (HIGH)

   - **심각도**: High (CVSS 7.5)
   - **영향 범위**: `>=13.3.1-canary.0 <14.2.35`
   - **현재 상태**: ⚠️ **영향받음** (14.2.22 < 14.2.35)

4. **GHSA-g5qg-72qw-gw5v** - Cache Key Confusion for Image Optimization API Routes (MODERATE)

   - **영향 범위**: `>=0.9.9 <14.2.31`

5. **GHSA-4342-x723-ch2f** - SSRF via Middleware Redirect Handling (MODERATE)

   - **영향 범위**: `>=0.9.9 <14.2.32`

6. **GHSA-xv57-4mr9-wg8v** - Content Injection Vulnerability for Image Optimization (MODERATE)
   - **영향 범위**: `>=0.9.9 <14.2.31`

#### 해결 방법:

```bash
# 즉시 패치 업데이트 (권장)
npm install next@14.2.35

# 또는 최신 버전 (메이저 업데이트 - 신중히 검토 필요)
npm install next@latest
```

⚠️ **주의**: Next.js 15.x 또는 16.x로 업그레이드 시 breaking changes가 있을 수 있으므로, 먼저 14.2.35로 패치 업데이트 후 점진적으로 업그레이드를 검토하세요.

---

### 2. form-data - **CRITICAL** 취약점

**취약점 ID**: GHSA-fjxv-7rqg-78g4  
**심각도**: Critical  
**영향 범위**: `4.0.0 - 4.0.3`  
**설명**: 안전하지 않은 랜덤 함수 사용으로 인한 경계값(boundary) 선택 취약점

#### 해결 방법:

```bash
npm audit fix
```

이 명령어로 자동 수정 가능합니다.

---

### 3. jws (jsonwebtoken 의존성) - **HIGH** 취약점

**취약점 ID**: GHSA-869p-cjfg-cm3x  
**심각도**: High (CVSS 7.5)  
**영향 범위**: `<3.2.3`  
**설명**: HMAC 서명 검증 부적절  
**현재 패키지**: `jsonwebtoken@9.0.2`

#### 해결 방법:

```bash
npm install jsonwebtoken@latest
npm audit fix
```

---

### 4. glob (eslint-config-next 의존성) - **HIGH** 취약점

**취약점 ID**: GHSA-5j98-mcp5-4vw2  
**심각도**: High (CVSS 7.5)  
**영향 범위**: `10.2.0 - 10.4.5`  
**설명**: Command injection via -c/--cmd  
**연관 패키지**: `eslint-config-next@14.2.14`

#### 해결 방법:

Next.js를 업데이트하면 함께 해결됩니다. 또는:

```bash
npm install eslint-config-next@latest
```

⚠️ **주의**: eslint-config-next를 최신 버전(16.1.0)으로 업데이트하면 breaking changes가 있을 수 있습니다.

---

## ⚠️ 중간 심각도 취약점

### 5. @babel/runtime - **MODERATE** 취약점

**취약점 ID**: GHSA-968p-4wvh-cqc8  
**심각도**: Moderate (CVSS 6.2)  
**영향 범위**: `<7.26.10`  
**설명**: 비효율적인 RegExp 복잡도

#### 해결 방법:

```bash
npm audit fix
```

---

### 6. js-yaml - **MODERATE** 취약점

**취약점 ID**: GHSA-mh29-5h37-fv8m  
**심각도**: Moderate (CVSS 5.3)  
**영향 범위**: `4.0.0 - 4.1.0`  
**설명**: Prototype pollution in merge (<<)

#### 해결 방법:

```bash
npm audit fix
```

---

### 7. brace-expansion - **LOW** 취약점

**취약점 ID**: GHSA-v6h2-p8h4-qcjw  
**심각도**: Low (CVSS 3.1)  
**설명**: Regular Expression Denial of Service

#### 해결 방법:

```bash
npm audit fix
```

---

## 📦 업데이트 권장 패키지 (보안 취약점 없으나 오래됨)

### React 및 React DOM

**현재**: `react@^18`, `react-dom@^18`  
**최신**: `react@19.2.3`, `react-dom@19.2.3`

⚠️ **React 19는 메이저 업그레이드**입니다. 주요 변경사항:

- 새로운 React Compiler
- Server Components 개선
- 새로운 Hooks (useFormState, useFormStatus 등)
- breaking changes 존재

**권장 접근 방법**:

1. 먼저 현재 패치 버전으로 업데이트: `npm install react@18.3.1 react-dom@18.3.1`
2. React 19 업그레이드는 별도 브랜치에서 충분한 테스트 후 진행

### 기타 주요 패키지 업데이트

| 패키지                  | 현재     | 최신     | 메이저 업데이트 | 권장 사항                         |
| ----------------------- | -------- | -------- | --------------- | --------------------------------- |
| `mongodb`               | 6.10.0   | 7.0.0    | ✅ Yes          | 신중히 업그레이드 (API 변경 가능) |
| `date-fns`              | 2.30.0   | 4.1.0    | ✅ Yes          | ESM 전환, breaking changes 확인   |
| `framer-motion`         | 11.11.17 | 12.23.26 | ✅ Yes          | 성능 개선, API 변경 확인          |
| `zod`                   | 3.23.8   | 4.2.1    | ✅ Yes          | TypeScript 5.5+ 필요              |
| `tailwind-merge`        | 2.5.5    | 3.4.0    | ✅ Yes          | API 변경 가능                     |
| `react-datepicker`      | 4.21.0   | 9.1.0    | ✅ Yes          | 완전한 재작성, 대폭 변경          |
| `@tanstack/react-query` | 5.61.3   | 5.90.12  | ❌ No           | 마이너 업데이트 (권장)            |
| `@fullcalendar/*`       | 6.1.15   | 6.1.19   | ❌ No           | 패치 업데이트 (권장)              |

---

## 🔧 권장 업데이트 단계

### Phase 1: 긴급 보안 패치 (즉시 실행)

```bash
# 1. Next.js 패치 업데이트 (가장 중요)
npm install next@14.2.35

# 2. 자동으로 수정 가능한 취약점 수정
npm audit fix

# 3. jsonwebtoken 업데이트
npm install jsonwebtoken@latest

# 4. 빌드 및 테스트
npm run build
npm test  # 테스트가 있다면
```

### Phase 2: 마이너/패치 업데이트 (이번 주 내)

```bash
# React 마이너 버전 업데이트
npm install react@18.3.1 react-dom@18.3.1

# TanStack Query 업데이트
npm install @tanstack/react-query@latest @tanstack/react-query-devtools@latest

# FullCalendar 패치 업데이트
npm install @fullcalendar/core@latest @fullcalendar/daygrid@latest @fullcalendar/interaction@latest @fullcalendar/react@latest

# Radix UI 업데이트
npm install @radix-ui/react-scroll-area@latest @radix-ui/react-separator@latest @radix-ui/react-slot@latest @radix-ui/react-switch@latest

# 기타 패치 업데이트
npm install lucide-react@latest jsonwebtoken@latest
```

### Phase 3: 메이저 업데이트 검토 (별도 브랜치에서 진행)

1. **React 19 업그레이드** - 별도 브랜치 생성 후 진행
2. **Next.js 15/16 업그레이드** - Next.js 14.2.35로 먼저 안정화 후 검토
3. **MongoDB 7.0** - API 변경사항 확인 후 업그레이드
4. **date-fns 4.x** - ESM 전환 영향 검토
5. **zod 4.x** - TypeScript 버전 확인 후 업그레이드

---

## 📊 취약점 요약

| 심각도       | 개수  | 패키지                   |
| ------------ | ----- | ------------------------ |
| **Critical** | 2     | Next.js, form-data       |
| **High**     | 4     | Next.js (DoS), jws, glob |
| **Moderate** | 2     | @babel/runtime, js-yaml  |
| **Low**      | 1     | brace-expansion          |
| **Total**    | **9** |                          |

---

## ⚡ 즉시 실행해야 할 명령어

```bash
# 1. 긴급 보안 패치
npm install next@14.2.35 jsonwebtoken@latest

# 2. 자동 수정 가능한 취약점 수정
npm audit fix

# 3. 변경사항 확인
npm audit

# 4. 빌드 테스트
npm run build
```

---

## 📝 주의사항

1. **백업**: 업데이트 전 반드시 코드 커밋 및 백업
2. **테스트**: 업데이트 후 모든 주요 기능 테스트 필수
3. **단계적 업데이트**: 한 번에 모든 패키지를 업데이트하지 말고 단계적으로 진행
4. **Breaking Changes**: 메이저 업데이트는 별도 브랜치에서 충분한 테스트 후 진행
5. **문서 확인**: 각 패키지의 changelog 및 migration guide 확인

---

## 🔗 참고 링크

- [Next.js Security Advisories](https://github.com/vercel/next.js/security/advisories)
- [npm Security Advisories](https://github.com/advisories)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/12/05/react-19)
- [Next.js Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading)
