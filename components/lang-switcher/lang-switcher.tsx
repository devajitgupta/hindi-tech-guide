"use client";

import { i18n, TLocale } from "@/i18n-config";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher({ currentLang }: { currentLang: TLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLangChange = (newLang: TLocale) => {
    if (newLang === currentLang) return;

    const cleanPath = pathname.replace(/^\/|\/$/g, "");
    const parts = cleanPath.split("/");

    const isLocale = i18n.locales.includes(parts[0] as TLocale);

    let newParts: string[];

    if (isLocale) {
      newParts = [newLang, ...parts.slice(1)];
    } else {
      newParts = newLang === i18n.defaultLocale ? parts : [newLang, ...parts];
    }

    router.push(`/${newParts.join("/")}`);
    setOpen(false);
  };

  const labels: Record<TLocale, string> = {
    en: "EN",
    hi: "HI",
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full max-w-[90px]">
      <button
        className="w-full px-3 py-2 text-sm text-white bg-black border border-white/30 rounded-md flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {labels[currentLang]}
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-black border border-white/20 rounded-md shadow-lg z-50">
          {i18n.locales.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLangChange(lang as TLocale)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                lang === currentLang ? "bg-white/20 text-white" : "text-white/70"
              } hover:bg-white/10`}
            >
              {labels[lang as TLocale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
