const LANGUAGE = "language";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE) || "en";
};

export const setLanguage = (lang: string) => {
  localStorage.setItem(LANGUAGE, lang);
};
export const removeLanguage = (): void => {
  localStorage.removeItem(LANGUAGE);
};
