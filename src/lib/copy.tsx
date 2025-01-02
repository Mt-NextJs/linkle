export const copyText = async (textToCopy: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert("프로필 주소가 클립보드에 복사되었어요\n 친구들에게 공유해보세요😊");
  } catch (err) {
    console.error("Copy failed: ", err);
  }
};
