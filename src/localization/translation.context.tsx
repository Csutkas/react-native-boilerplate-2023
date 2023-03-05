import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import LocalizedStrings, { LocalizedStrings as LocalizedStringsType } from 'react-native-localization';

import { AppLanguage, setSelectedLanguage, useAppDispatch, useAppSelector } from '../redux';
import { createMandatoryContext, useMandatoryContext } from '../utils';
import en from './translation-keys/en';
import hu from './translation-keys/hu';

export const translationKeys = {
  en,
  hu,
};

const DISPLAY_NAME = 'TranslationContext';

export type TranslationType = LocalizedStringsType<typeof en | typeof hu>;

interface ContextValue
  extends Readonly<{
    translations: TranslationType;
    isLanguageSet: boolean;
    setAppLanguage: (language: AppLanguage) => void;
    appLanguage: AppLanguage;
  }> {}

const Context = createMandatoryContext<ContextValue>(DISPLAY_NAME);

interface ContextProviderProps
  extends Readonly<{
    children?: React.ReactNode;
  }> {}

export const TranslationsContextProvider = memo<ContextProviderProps>((props) => {
  const { children } = props;

  const storedAppLanguage = useAppSelector((state: { settings: { selectedLanguage: any } }) => state.settings.selectedLanguage);
  const [isLanguageSet, setIsLanguageSet] = useState(false);
  const dispatch = useAppDispatch();

  const [translations, setTranslations] = useState(new LocalizedStrings(translationKeys));

  // Effect: sets the language initially
  useEffect(() => {
    const newTranslations = new LocalizedStrings(translationKeys);
    newTranslations.setLanguage(storedAppLanguage);
    setTranslations(newTranslations);
    setIsLanguageSet(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Note: Sets the language runtime.
  const setAppLanguage = useCallback(
    (language: AppLanguage) => {
      const newTranslations = new LocalizedStrings(translationKeys);
      newTranslations.setLanguage(language);
      setTranslations(newTranslations);
      dispatch(setSelectedLanguage(language));
    },
    [dispatch]
  );

  const ContextValue = useMemo<ContextValue>(
    () => ({
      translations,
      isLanguageSet,
      appLanguage: storedAppLanguage,
      setAppLanguage,
    }),
    [isLanguageSet, setAppLanguage, storedAppLanguage, translations]
  );

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
});

// The hook that the components can use to get the translation values
export const useTranslationsContext = (): ContextValue => useMandatoryContext<ContextValue>(Context);
