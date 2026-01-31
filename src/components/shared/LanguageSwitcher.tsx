"use client";

import { useI18n } from "@/lib/i18n/config";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ja" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-white text-sumi-700 border border-sumi-200 hover:border-aka-400 hover:text-aka-600 transition-colors duration-300"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "en" ? "日本語" : "EN"}</span>
    </button>
  );
}
