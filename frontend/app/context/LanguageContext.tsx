"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../../dictionaries/en.json";
import am from "../../dictionaries/am.json";

type LanguageContextType = {
  locale: "en" | "am";
  dict: any;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<"en" | "am">("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "am" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const next = locale === "en" ? "am" : "en";
    setLocale(next);
    localStorage.setItem("locale", next);
  };

  const dict = locale === "en" ? en : am;

  return (
    <LanguageContext.Provider value={{ locale, dict, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}