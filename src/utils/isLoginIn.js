export const sessions =
  typeof window !== "undefined" && window.localStorage.getItem("session");
