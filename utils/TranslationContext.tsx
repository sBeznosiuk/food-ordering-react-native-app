import i18next from 'i18next';
import React, {createContext, FC, useContext} from 'react';
import {
  initReactI18next,
  TFunction,
  useTranslation,
} from 'react-i18next';

import englishJson from './lang/en.json';
import ukrainianJson from './lang/ua.json';

export const createTranslationInstance = async () => {
  await i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: {translation: englishJson},
      ua: {translation: ukrainianJson},
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {escapeValue: false},
  });
};

export enum Languages {
  Ua = 'ua',
  En = 'en',
}

interface TranslationContextType {
  t: TFunction<'translation', undefined>;
  changeLanguage: (lang: Languages) => void;
  language: string;
}

const TranslationContext =
  createContext<TranslationContextType>(
    {} as TranslationContextType,
  );

export const TranslationProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lang: Languages) =>
    i18n.changeLanguage(lang);
  const language = i18n.language;
  const value = {t, changeLanguage, language};

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useAppTranslation = () =>
  useContext(TranslationContext);
