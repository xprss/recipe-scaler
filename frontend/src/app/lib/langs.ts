export const DISPLAY_NAME = 'displayName';
export const LANG_CODE = 'langCode';

export const DEFAULT_LANGUAGE = 'it-IT';

export interface Lang {
  langCode: string;
  displayName: string;
}

export const Langs: Lang[] = [
  { langCode: 'it-IT', displayName: '🇮🇹' },
  { langCode: 'en-US', displayName: '🇬🇧' },
];
