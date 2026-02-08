export const DISPLAY_NAME = 'displayName';
export const LANG_CODE = 'langCode';

export const DEFAULT_LANGUAGE = 'it-IT';

export interface Lang {
  langCode: string;
  displayName: string;
}

export const Langs: Lang[] = [
  { langCode: 'it-IT', displayName: '🇮🇹' },
  { langCode: 'en-UK', displayName: '🇬🇧' },
  { langCode: 'es-ES', displayName: '🇪🇸' },
  { langCode: 'fr-FR', displayName: '🇫🇷' },
  { langCode: 'de-DE', displayName: '🇩🇪' },
  { langCode: 'ja-JP', displayName: '🇯🇵' },
  { langCode: 'zh-CH', displayName: '🇨🇳' },
  { langCode: 'ar-PS', displayName: '🇵🇸' },
  { langCode: 'da-DK', displayName: '🇩🇰' },
  { langCode: 'fi-FI', displayName: '🇫🇮' },
  { langCode: 'hi-IN', displayName: '🇮🇳' },
  { langCode: 'no-NO', displayName: '🇳🇴' },
  { langCode: 'pl-PL', displayName: '🇵🇱' },
  { langCode: 'sv-SE', displayName: '🇸🇪' },
  { langCode: 'en-US', displayName: '🇺🇸' },
  { langCode: 'wo-SN', displayName: '🇸🇳' }
];
