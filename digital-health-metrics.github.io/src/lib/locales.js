// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`#lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.
//
// Exactly 37 locales are published by this site. The content monorepo also
// authors in `en-gb-oxendict`, an internal, unpublished locale used to draft
// content before it is translated out to the locales below — it is
// deliberately absent here, from i18n.js, and from scripts/sync-content.mjs,
// so it never reaches a visitor.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-us': 'English - United States',
	'en-gb': 'English - Great Britain',
	'en-001': 'English',
	'cy-001': 'Cymraeg',
	'cy-gb': 'Cymraeg - Prydain Fawr',
	'zh-cn': '中文 - 中国大陆',
	'es-001': 'Español',
	'hi-001': 'हिन्दी',
	'ar-001': 'العربية',
	'fr-001': 'Français',
	'pt-001': 'Português',
	'de-001': 'Deutsch',
	'de-de': 'Deutsch - Deutschland',
	'ru-001': 'Русский',
	'ar-eg': 'العربية - مصر',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'hi-in': 'हिन्दी - भारत',
	'ko-kr': '한국어',
	'es-es': 'Español - España',
	'pt-pt': 'Português - Portugal',
	'ja-jp': '日本語',
	'ru-ru': 'Русский - Россия',
	'fr-fr': 'Français - France',
	'sv-se': 'Svenska',
	'nl-nl': 'Nederlands',
	'ur-pk': 'اردو - پاکستان',
	'id-id': 'Bahasa Indonesia',
	'it-it': 'Italiano',
	'uk-ua': 'Українська',
	'fi-fi': 'Suomi',
	'no-no': 'Norsk',
	'da-dk': 'Dansk',
	'pl-pl': 'Polski',
	'vi-001': 'Tiếng Việt',
	'et-001': 'Eesti',
	'th-001': 'ไทย',
	'tr-tr': 'Türkçe'
};

export const DEFAULT_LOCALE = 'en-gb';

/**
 * Locale codes that read right-to-left. `src/hooks.server.js` uses this to
 * set `dir="rtl"` on `<html>` for these locales — the site's own CSS is
 * already written entirely with logical properties (inset-inline-start/end,
 * padding-inline-start, etc.), so it flips correctly once `dir` is actually
 * set; nothing else needs to change per RTL locale.
 */
export const RTL_LOCALES = new Set(['ar-001', 'ar-eg', 'ur-pk']);

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}

/**
 * Two-letter alias -> this site's "-001" (International/World) code for that
 * language, e.g. `'en' -> 'en-001'`, derived from LOCALE_LABELS so any future
 * "-001" locale gets one automatically. `/<alias>/...` renders exactly the
 * same content as `/<code>/...` (resolved in each route's own load(), see
 * `[locale]/+layout.server.js`) — every link the site itself generates still
 * uses the full code, so an alias is an additional way in, not a second copy
 * of the site's own navigation.
 */
export const LOCALE_ALIASES = Object.fromEntries(
	Object.keys(LOCALE_LABELS)
		.filter((code) => code.endsWith('-001'))
		.map((code) => [code.slice(0, -'-001'.length), code])
);

/** Resolve a URL locale segment (alias or already-real code) to its real code. */
export function canonicalLocale(code) {
	return LOCALE_ALIASES[code] ?? code;
}
