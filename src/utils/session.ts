const LANGUAGE_KEY = "language";

export const setLanguage = (lang: string): void => {
  localStorage.setItem(LANGUAGE_KEY, lang);
};

export const getLanguage = (): string => {
  return localStorage.getItem(LANGUAGE_KEY) || "en";
};

export const removeLanguage = (): void => {
  localStorage.removeItem(LANGUAGE_KEY);
};
