export const SUPPORTED_LOCALES = ['en', 'zh', 'zh-TW', 'ja', 'es', 'gl'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export function getLanguageName(locale: SupportedLocale): string;
export function getLanguageName(locale: string): string;
export function getLanguageName(locale: string | SupportedLocale): string {
  switch (locale) {
    case 'zh':
      return '简体中文';
    case 'zh-TW':
      return '繁體中文';
    case 'ja':
      return '日本語';
    case 'es':
      return 'Español';
    case 'gl':
      return 'Galego';
    case 'en':
      return 'English';
    default:
      return locale;
  }
}
