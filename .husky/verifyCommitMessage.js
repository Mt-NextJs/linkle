#!/usr/bin/env node
const fs = require("fs");

// 커밋 메시지 파일 경로를 가져옵니다.
const commitMessageFilePath = process.argv[2];

// 커밋 메시지를 읽어옵니다.
const commitMessage = fs.readFileSync(commitMessageFilePath, "utf-8").trim();

// 병합 커밋 메시지 검증 제외
if (commitMessage.startsWith("Merge branch")) {
  process.exit(0); // 병합 커밋 메시지는 검증을 건너뜁니다.
}

// 이모지를 무시하고 나머지 내용을 검증하기 위한 정규 표현식
const commitMessagePattern = /^\[([A-Za-z ]+)\] .{1,80} #\d+$/;

// 이모지 제거: 이모지가 있다면 제거하고, 나머지 텍스트만 검증
const sanitizedCommitMessage = commitMessage.replace(/^[^\[]*/, "").trim(); // 이모지 부분을 제거

// 커밋 메시지 형식을 검증합니다.
if (!commitMessagePattern.test(sanitizedCommitMessage)) {
  console.error(`
  사용가능한 commit의 형식은 아래와 같습니다.
  
  ===================== [태그이름] + 설명 + #이슈번호 =====================
  [Feat]           새로운 기능 추가
  [Fix]            버그 수정
  [Style]          코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
  [Design]         CSS 등 사용자 UI 변경 및 설계
  [BREAKING CHANGE] 커다란 API 변경의 경우
  [HOTFIX]         급하게 치명적인 버그를 고쳐야하는 경우
  [Refactor]       코드 리팩토링
  [Docs]           문서 수정
  [Chore]          빌드 업무, 패키지 매니저 수정
  [Lint]           린트 에러 수정
  [Deploy]         배포 관련 작업
  [Test]           테스트 코드 추가 및 수정
  [Rename]         파일 혹은 폴더명 수정
  [Remove]         파일 삭제
  [Type]           타입 수정
  [Comment]        주석 추가 및 변경
  ==================================================================
  형식에 맞춰 커밋 메시지를 다시 작성해주세요. 커밋 메시지는 설명 뒤에 이슈 번호도 포함해야 합니다. 예시: [Feat] 기능 추가 설명 #123
  `);
  process.exit(1); // 검증 실패 시 프로세스를 종료합니다.
}

// 성공적으로 완료되면 프로세스를 종료합니다.
process.exit(0);
