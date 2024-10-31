export const checkUrl = (strUrl: string) => {
  const reg = /^http[s]?\:\/\//i;
  return reg.test(strUrl);
};

export const checkImage = (strUrl: string) => {
  const reg = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
  return reg.test(strUrl);
};
