import React, { createContext, useContext, useState } from 'react';
import { type Locale, translations, type Translations } from './translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations; // curr translates
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //lcoal save 
  const [locale, setLocaleState] = useState<Locale>(
    () => (localStorage.getItem('locale') as Locale) ?? 'uk'
  );

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] as Translations }}>
      {children}
    </LocaleContext.Provider>
  );
};

// hook
export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) 
    throw new Error('useLocale must be used inside LocaleProvider');
  return ctx;
};