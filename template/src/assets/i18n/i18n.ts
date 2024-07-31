import {initReactI18next} from 'react-i18next';

import {DEFAULT_FALLBACK_LNG_I18n} from '@env';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';

import {resources} from './locales';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  // flags below detection to be async
  async: true,
  detect: (callback: (lng: string | readonly string[] | undefined) => void) => {
    callback(DEFAULT_FALLBACK_LNG_I18n);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

/**
 * Config i18n for app
 */
i18n.use(languageDetector).use(initReactI18next).init({
  fallbackLng: DEFAULT_FALLBACK_LNG_I18n,
  compatibilityJSON: 'v3',
  resources: resources,
  // have a common namespace used around the full app
  debug: true,
});

export default i18n;
