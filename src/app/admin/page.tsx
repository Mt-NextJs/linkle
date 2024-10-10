import Block from '@app/admin/(block)/block';

export default function Admin() {
  return (
    <div className="flex flex-col items-center">
      <h1>로그인 후 메인 페이지 - 프로필, 등록한 링크 편집</h1>
      <Block />
    </div>
  );
}
