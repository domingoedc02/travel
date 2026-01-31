"use client";

import { useState, useCallback, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { japaneseTheme } from "@/styles/styled-components/JapaneseTheme";
import { I18nContext, Locale, getTranslation } from "@/lib/i18n/config";

export function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = getTranslation(locale);

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t, setLocale: handleSetLocale }}>
      <ThemeProvider theme={japaneseTheme}>{children}</ThemeProvider>
    </I18nContext.Provider>
  );
}
