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
 * Language -> this site's "-001" (International/World) code for that language,
 * e.g. `'en' -> 'en-001'`, derived from LOCALE_LABELS so any future "-001"
 * locale gets one automatically. Used only by matchLocale() to map a browser
 * language to a locale; two-letter URLs such as `/en/` are not routes (404).
 */
export const LOCALE_ALIASES = Object.fromEntries(
	Object.keys(LOCALE_LABELS)
		.filter((code) => code.endsWith('-001'))
		.map((code) => [code.slice(0, -'-001'.length), code])
);

/** localStorage key under which the locale picker saves the visitor's locale. */
export const LOCALE_STORAGE_KEY = 'digital-health-metrics.locale';

/** Language subtags browsers send that this site files under another code. */
const LANGUAGE_ALIASES = { nb: 'no', nn: 'no' };

/**
 * The published locale that best matches the browser's language preferences,
 * or undefined if none does. `languages` is `navigator.languages` (or
 * `[navigator.language]`); each tag is tried in order and the first tag that
 * matches anything wins. Per tag:
 *   1. exact locale: `cy_GB` / `cy-GB` -> `cy-gb`, `de-DE` -> `de-de`
 *   2. no exact locale, but the language's international (`-001`) locale:
 *      `en-AU` -> `en-001` (not the `/en/` alias), `de-AT` -> `de-001`,
 *      `pt-BR` -> `pt-001`, bare `cy` -> `cy-001`
 *   3. otherwise any published locale of that language: `ja` -> `ja-jp`,
 *      `nb` -> `no-no`
 * Traditional Chinese (`zh-TW`, `zh-HK`, `zh-Hant`) deliberately matches
 * nothing: the only Chinese locale is Simplified (`zh-cn`).
 *
 * @param {readonly string[] | null | undefined} languages
 * @param {readonly string[]} available published locale codes
 */
export function matchLocale(languages, available) {
	const have = new Set(available);
	for (const raw of languages ?? []) {
		const tag = String(raw ?? '').trim().toLowerCase().replace(/_/g, '-');
		if (!tag) continue;
		if (have.has(tag)) return tag;
		const parts = tag.split('-');
		const language = LANGUAGE_ALIASES[parts[0]] ?? parts[0];
		if (language === 'zh' && (parts.includes('hant') || ['tw', 'hk', 'mo'].includes(parts.at(-1)))) {
			continue;
		}
		const international = LOCALE_ALIASES[language];
		if (international && have.has(international)) return international;
		const sameLanguage = available.find((code) => code.startsWith(`${language}-`));
		if (sameLanguage) return sameLanguage;
	}
	return undefined;
}

/**
 * Where "/" should send this visitor (browser only): the locale matching the
 * browser's language (see matchLocale), else the locale they last used, else
 * the default.
 * @param {readonly string[]} available published locale codes
 */
export function preferredLocale(available) {
	if (typeof navigator !== 'undefined') {
		const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
		const match = matchLocale(languages, available);
		if (match) return match;
	}
	try {
		const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (saved && available.includes(saved)) return saved;
	} catch {
		// private mode or blocked storage: fall through to the default
	}
	return DEFAULT_LOCALE;
}
