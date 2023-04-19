export const getCookie = (cookie: string) => {
  return document.cookie
    .split("; ")
    .find((row) => {
      return row.startsWith(cookie + "=");
    })
    ?.split("=")[1];
};
