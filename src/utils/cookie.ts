export const getCookie = (cookie: string) => {
  return document.cookie
    .split("; ")
    .find((row) => {
      return row.startsWith(cookie + "=");
    })
    ?.split("=")[1];
};
export const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value}`
};
