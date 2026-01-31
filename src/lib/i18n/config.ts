"use client";

import { createContext, useContext } from "react";
import en from "./en.json";
import ja from "./ja.json";

export type Locale = "en" | "ja";

const translations = { en, ja } as const;

type TranslationKeys = typeof en;

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale];
}

interface I18nContextType {
  locale: Locale;
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function useI18n() {
  return useContext(I18nContext);
}
