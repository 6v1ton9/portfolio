import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale, Translations } from "./locales";
import { locales, getTranslatedProject, getTranslatedProjects } from "./locales";

export { getTranslatedProject, getTranslatedProjects };

const STORAGE_KEY = "portfolio_locale";

type LangCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const Ctx = createContext<LangCtx | null>(null);

function getStoredLocale(): Locale {
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "pt-BR" || v === "en") return v;
  // detect browser language
  const navLang = navigator.language?.slice(0, 2);
  return navLang === "en" ? "en" : "pt-BR";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  useEffect(() => {
    setLocaleState(getStoredLocale());
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = locales[locale];

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTranslation() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTranslation must be used inside <LanguageProvider />");
  return ctx;
}
