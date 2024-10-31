export const checkUrl = (strUrl: string) => {
  const reg = /^http[s]?\:\/\//i;
  return reg.test(strUrl);
};
