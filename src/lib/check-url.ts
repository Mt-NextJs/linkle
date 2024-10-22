export const checkUrl = (strUrl: string) => {
  const exp = /^http[s]?\:\/\//i;
  return exp.test(strUrl);
};
