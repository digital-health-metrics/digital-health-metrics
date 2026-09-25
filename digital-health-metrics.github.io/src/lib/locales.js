// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`$lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.
//
// Exactly 5 locales are published by this site. The content monorepo also
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
	'zh-cn': '中文 - 中国大陆'
};

export const DEFAULT_LOCALE = 'en-gb';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}
