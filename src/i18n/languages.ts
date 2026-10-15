export type LanguageCode =
  | 'en'
  | 'hi'
  | 'gu'
  | 'mr'
  | 'bn'
  | 'ta'
  | 'te'
  | 'kn'
  | 'ml'
  | 'pa'
  | 'or'
  | 'as';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  region: string;
  badge?: string;
  script: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    region: 'Pan-India',
    badge: 'Default',
    script: 'Latin'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    region: 'National / North',
    badge: 'राजभाषा',
    script: 'Devanagari'
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    region: 'West (Baroda)',
    badge: 'BOB Origin',
    script: 'Gujarati'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    region: 'West (Mumbai HQ)',
    badge: 'BKC HQ',
    script: 'Devanagari'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    region: 'East (Kolkata/WB)',
    script: 'Bengali'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    region: 'South (Chennai/TN)',
    script: 'Tamil'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    region: 'South (Hyderabad/AP/TS)',
    script: 'Telugu'
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    region: 'South (Bengaluru/KA)',
    script: 'Kannada'
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    region: 'South (Kerala/KL)',
    script: 'Malayalam'
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    region: 'North (Punjab/CHD)',
    script: 'Gurmukhi'
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    region: 'East (Odisha/OR)',
    script: 'Odia'
  },
  {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    region: 'North-East (Assam/NE)',
    script: 'Bengali-Assamese'
  }
];
