export function getCookie(name: string): string | undefined {
  const cookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return cookies ? cookies.split("=")[1] : undefined;
}
