# Project Linkle - IN MY LINK 1차 고도화 프로젝트

## 'IN MY LINK'의 1차 고도화 프로젝트입니다.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🛠️ Getting Started [DEV]

To get started with the development server, please follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Mt-NextJs/linkle.git
```

2. Navigate to the project directory:

```bash
cd linkle
```

3. Install the dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

The development server will start, and you can access it via:
http://localhost:3000

## 🗂️ Project Structure

```bash
/project
├── .github                # GitHub 설정 파일
│    ├── workflows         # GitHub Actions 설정 파일 (CI/CD 설정)
│    └── ISSUE_TEMPLATE    # GitHub 이슈 템플릿
│    └── PULL_REQUEST_TEMPLATE # GitHub PR 템플릿
├── .husky                 # Husky 설정 파일 (Git Hooks 설정)
├── .vscode                # Visual Studio Code 설정 파일 (TailwindCSS 하이라이트 애드온 포함)
├── .gitignore             # Git에서 무시할 파일 및 폴더 목록
├── README.md              # 프로젝트의 소개 및 문서 파일
├── build.sh               # 프로젝트 빌드 스크립트
├── next-env.d.ts          # Next.js 환경 변수 정의 파일
├── next.config.mjs        # Next.js 설정 파일 (프로젝트의 전역 설정)
├── package-lock.json      # 종속성 잠금 파일 (npm 설치 시 생성)
├── package.json           # 프로젝트 종속성 및 스크립트 정의
├── postcss.config.js      # PostCSS 설정 파일 (CSS 변환을 위한 설정)
├── public                 # 정적 파일들을 저장하는 폴더
│   └── assets             # 아이콘 및 이미지 같은 정적 자산을 저장
├── src                    # 소스 코드 디렉토리
│   ├── app                # Next.js 앱 디렉토리 (모든 페이지와 컴포넌트 관리)
│   ├── config             # 프로젝트의 라우팅 설정 및 타입 정의
│   └── styles             # 전역 스타일 파일 및 공통 CSS 파일들
├── tailwind.config.ts     # TailwindCSS 설정 파일 (CSS 유틸리티 관리)
└── tsconfig.json          # TypeScript 설정 파일 (타입스크립트 컴파일러 옵션 정의)
```

- app 디렉토리: Next.js의 페이지 및 컴포넌트를 포함하며, admin, profile, login 등 기능별로 모듈화되어 있습니다.
- public/assets: 정적 자산(아이콘 및 이미지)을 저장합니다.
- src/config: 라우팅과 사용자 정의 TypeScript 타입 설정 파일이 있습니다.
- styles: 글로벌 스타일 및 공통 CSS 파일이 포함되어 있습니다.

## ⚙️ 사용된 기술

- Next.js: 서버 사이드 렌더링 및 정적 생성을 지원하는 React 프레임워크.
- TypeScript: 강력한 타입 시스템을 사용하여 더 견고한 코드를 작성할 수 있도록 지원.
- Tailwind CSS: 유틸리티 기반의 빠른 UI 개발을 위한 CSS 프레임워크.

## 📊 프로젝트 워크플로우

우리 팀은 애자일(Agile) 프로세스를 기반으로, 데일리 스크럼과 주간 스프린트를 통해 원활한 협업과 지속적인 개선을 추구합니다.<br/>프로젝트의 모든 기록과 문서는 Linkle Wiki에 상세히 정리되어 있습니다.

- 데일리 스크럼: 매일의 진행 상황을 [Daily Scrum](https://github.com/Mt-NextJs/linkle/wiki#-daily-scrum) 캘린더에서 확인할 수 있습니다.
- 주간 스프린트: 스프린트 회고와 계획은 [Weekly Sprint](https://github.com/Mt-NextJs/linkle/wiki#-weekly-sprint-discussion) 섹션에 기록됩니다.

### 팀원 소개

<div align="center">
  <table>
    <tr>
      <th><a href="https://github.com/s-ja">안승지</a></th>
      <th><a href="https://github.com/cchaeyoung">김채영</a></th>
      <th><a href="https://github.com/Defor721">노지훈</a></th>
      <th><a href="https://github.com/lumpenop">김승원</a></th>
      <th><a href="https://github.com/wynter24">김민경</a></th>
    </tr>
    <tr>
      <td><img src="https://github.com/s-ja.png" width="100" height="100" alt="안승지"></td>
      <td><img src="https://github.com/cchaeyoung.png" width="100" height="100" alt="김채영"></td>
      <td><img src="https://github.com/Defor721.png" width="100" height="100" alt="노지훈"></td>
      <td><img src="https://github.com/lumpenop.png" width="100" height="100" alt="김승원"></td>
      <td><img src="https://github.com/wynter24.png" width="100" height="100" alt="김민경"></td>
    </tr>
  </table>
</div>

## 📦 배포

### [배포 링크](https://linkle-nine.vercel.app/)

이 프로젝트는 Vercel을 사용해 배포되며, 자동 CI/CD 파이프라인을 통해 항상 최신 상태로 유지됩니다. main 브랜치는 언제나 배포 가능한 상태로 유지되며, 모든 변경 사항은 Pull Request를 통해 검토됩니다.

## 🔗 링크

- [프로젝트 위키](https://github.com/Mt-NextJs/linkle/wiki#-weekly-sprint-discussion)
- [데일리 스크럼](https://github.com/Mt-NextJs/linkle/wiki#-daily-scrum)
- [주간 스프린트 회고](https://github.com/Mt-NextJs/linkle/wiki#-weekly-sprint-discussion)
- [이슈 트래커](https://github.com/Mt-NextJs/linkle/issues)
- [프로젝트 보드](https://github.com/orgs/Mt-NextJs/projects/2)

## 📝 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포됩니다.
