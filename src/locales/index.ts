import fr from './fr.json';
import en from './en.json';

type Locale = 'fr' | 'en';

const locales = { fr, en };

export function getTranslations(locale: Locale = 'fr') {
  return locales[locale];
}

