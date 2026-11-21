// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`#lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.
//
// Exactly 53 locales are published by this site. The content monorepo also
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
	'cy-ar': 'Cymraeg - Ariannin',
	'zh-cn': '中文 - 中国大陆',
	'zh-th': '中文 - 泰国',
	'es-001': 'Español',
	'hi-001': 'हिन्दी',
	'ar-001': 'العربية',
	'fr-001': 'Français',
	'pt-001': 'Português',
	'de-001': 'Deutsch',
	'de-de': 'Deutsch - Deutschland',
	'de-at': 'Deutsch - Österreich',
	'ru-001': 'Русский',
	'ar-eg': 'العربية - مصر',
	'ar-dz': 'العربية - الجزائر',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'bn-in': 'বাংলা - ভারত',
	'hi-in': 'हिन्दी - भारत',
	'hi-np': 'हिन्दी - नेपाल',
	'ko-kr': '한국어 - 대한민국',
	'es-es': 'Español - España',
	'pt-pt': 'Português - Portugal',
	'pt-br': 'Português - Brasil',
	'fr-ca': 'Français - Canada',
	'es-mx': 'Español - México',
	'ja-jp': '日本語 - 日本',
	'ru-ru': 'Русский - Россия',
	'ru-by': 'Русский - Беларусь',
	'fr-fr': 'Français - France',
	'sv-se': 'Svenska - Sverige',
	'nl-nl': 'Nederlands - Nederland',
	'ur-pk': 'اردو - پاکستان',
	'id-id': 'Bahasa Indonesia - Indonesia',
	'id-my': 'Bahasa Indonesia - Malaysia',
	'it-it': 'Italiano - Italia',
	'uk-ua': 'Українська',
	'fi-fi': 'Suomi - Suomi',
	'no-no': 'Norsk',
	'da-dk': 'Dansk - Danmark',
	'pl-pl': 'Polski',
	'vi-001': 'Tiếng Việt',
	'vi-vn': 'Tiếng Việt - Việt Nam',
	'et-001': 'Eesti',
	'et-et': 'Eesti - Eesti',
	'th-001': 'ไทย',
	'th-th': 'ไทย - ประเทศไทย',
	'tr-tr': 'Türkçe - Türkiye',
	'bn-001': 'বাংলা',
	'id-001': 'Bahasa Indonesia',
	'ja-001': '日本語',
	'ko-001': '한국어',
	'zh-001': '中文',
	'sv-001': 'Svenska',
	'nl-001': 'Nederlands',
	'ur-001': 'اردو',
	'da-001': 'Dansk',
	'fi-001': 'Suomi',
	'it-001': 'Italiano',
	'tr-001': 'Türkçe',
	'is-is': 'Íslenska - Ísland',
	'is-001': 'Íslenska',
	'zh-tw': '中文 - 台灣',
	'sw-001': 'Kiswahili',
	'sw-tz': 'Kiswahili - Tanzania',
	'kn-001': 'ಕನ್ನಡ',
	'kw-001': 'Kernewek',
	'kw-gb': 'Kernewek - Breten Veur',
	'lb-001': 'Lëtzebuergesch',
	'lb-lu': 'Lëtzebuergesch - Lëtzebuerg',
	'lo-001': 'ລາວ',
	'lo-la': 'ລາວ - ສປປ ລາວ',
	'lt-001': 'Lietuvių',
	'lt-lt': 'Lietuvių - Lietuva',
	'lv-001': 'Latviešu',
	'lv-lv': 'Latviešu - Latvija',
	'mr-001': 'मराठी',
	'ms-001': 'Bahasa Melayu',
	'mt-001': 'Malti',
	'mt-mt': 'Malti - Malta',
	'pcm-001': 'Naijá',
	'ro-001': 'Română',
	'ro-ro': 'Română - România',
	'sco-001': 'Scots',
	'sco-gb': 'Scots - Unitit Kinrick',
	'sk-001': 'Slovenčina',
	'sk-sk': 'Slovenčina - Slovensko',
	'sl-001': 'Slovenščina',
	'sl-si': 'Slovenščina - Slovenija',
	'ta-001': 'தமிழ்',
	'te-001': 'తెలుగు',
	'tl-001': 'Tagalog',
	'wuu-001': '吴语',
	'yue-001': '粵語',
	'bh-001': 'भोजपुरी',
	'nb-001': 'Norsk bokmål',
	'nb-no': 'Norsk bokmål - Norge',
	'pl-001': 'Polski',
	'uk-001': 'Українська',
	'fr-be': 'Français - Belgique',
	'fr-lu': 'Français - Luxembourg',
	'nl-be': 'Nederlands - België'
};

export const DEFAULT_LOCALE = 'en-gb';

/**
 * Locale codes that read right-to-left. `src/hooks.server.js` uses this to
 * set `dir="rtl"` on `<html>` for these locales — the site's own CSS is
 * already written entirely with logical properties (inset-inline-start/end,
 * padding-inline-start, etc.), so it flips correctly once `dir` is actually
 * set; nothing else needs to change per RTL locale.
 */
export const RTL_LOCALES = new Set(['ar-001', 'ar-eg', 'ar-dz', 'ur-pk', 'ur-001']);

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
 *      `es-AR` -> `es-001`, bare `cy` -> `cy-001`
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
