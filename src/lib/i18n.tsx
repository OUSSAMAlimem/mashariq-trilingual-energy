import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DICT, LANGS, type Dict, type Lang } from "./content";

const KEY = "mashariq-lang";
type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };
const I18n = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const url = new URL(window.location.href).searchParams.get("lang");
    const saved = (url || localStorage.getItem(KEY)) as Lang | null;
    if (saved && LANGS.includes(saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(KEY, l);
  };

  return <I18n.Provider value={{ lang, t: DICT[lang], setLang }}>{children}</I18n.Provider>;
}

export function useI18n() {
  const c = useContext(I18n);
  if (!c) throw new Error("useI18n outside provider");
  return c;
}
