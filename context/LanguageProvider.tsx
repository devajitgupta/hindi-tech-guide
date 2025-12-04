"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n, TLocale } from "@/i18n-config";

type LanguageContextType = {
  lang: TLocale;
  changeLanguage: (newLang: TLocale) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: i18n.defaultLocale,
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<TLocale>(i18n.defaultLocale);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname) return;
    
    const segments = pathname.split("/");
    const maybeLang = segments[1] as TLocale;
    
    // Handle root path (/) as English
    if (pathname === "/") {
      setLang(i18n.defaultLocale);
      return;
    }
    
    // Handle other languages (/es/...)
    if (i18n.locales.includes(maybeLang)) {
      setLang(maybeLang);
    }
  }, [pathname]);

  const changeLanguage = (newLang: TLocale) => {
    const segments = pathname.split("/");
    let newPath: string;

    // Case 1: Switching from root (English) to another language
    if (pathname === "/") {
      newPath = `/${newLang}`;
    } 
    // Case 2: Switching from a language to English (go to root)
    else if (newLang === i18n.defaultLocale) {
      newPath = segments.slice(2).join("/") || "/";
    } 
    // Case 3: Switching between non-default languages (/es/ → /fr/)
    else {
      segments[1] = newLang;
      newPath = segments.join("/");
    }

    router.push(newPath);
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};