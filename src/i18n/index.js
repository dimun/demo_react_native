import LocalizedStrings from 'react-native-localization';
import moment from 'moment';
import es from './locales/es';
import en from './locales/en';
import momentEs  from 'moment/locale/es';
import momentEn from 'moment/locale/en-gb';

momentConfig = {
  es: momentEs,
  en: momentEn,
}

const strings = new LocalizedStrings({
  en,
  es,
});

const lang = strings.getLanguage();

moment.updateLocale(lang, momentConfig[lang] || momentEn);

export const i18nMessage = (key) => {
  return strings[key] || key;
}
