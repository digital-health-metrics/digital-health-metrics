// UI chrome strings — everything in the site frame that isn't book content
// (nav labels, page headings/hints, pagination, share/picker labels). These
// live here, not in the book, because they're this site's interface text,
// not translated book content — the book stays reusable outside this site.
//
// Falls back to English per-key for any locale (or key) without its own
// translation, same fallback discipline as book.js's readmeSource/
// localizedIndex: an untranslated locale still renders correctly in English
// rather than crashing or showing blanks.
//
// Only 2 of the site's 5 public locales need an entry in TRANSLATIONS below:
// the 3 English variants (en-us, en-gb, en-001) all share this same base EN
// table with no per-variant overrides, same as they would for any other
// English-only difference (spelling, not vocabulary) — only cy-001 (Welsh)
// and zh-cn (Simplified Chinese) need their own chrome translations.

/**
 * @typedef {object} Messages
 * @property {string} skipToContent
 * @property {string} navHome
 * @property {string} navContents
 * @property {string} navTopicsAZ
 * @property {string} navSearch
 * @property {string} navAbout
 * @property {string} footerSourceLink
 * @property {string} footerTaglineSuffix
 * @property {string} footerNote
 * @property {string} pickerTheme
 * @property {string} pickerLanguage
 * @property {string} pickerTextSize
 * @property {string} pickerShare
 * @property {string} shareCopyLink
 * @property {string} shareCopied
 * @property {string} shareCopyFailed
 * @property {string} shareEmailLabel
 * @property {string} shareLinkedinLabel
 * @property {string} shareRedditLabel
 * @property {string} shareBlueskyLabel
 * @property {string} shareMastodonLabel
 * @property {string} startHere
 * @property {string} startHereSubtitle
 * @property {(bookTitle: string) => string} contentsMetaDescription
 * @property {(count: number, parts: number) => string} contentsIntro
 * @property {(n: number) => string} topicsCountSubtitle
 * @property {(bookTitle: string) => string} topicsMetaDescription
 * @property {(count: number) => string} topicsIntroPrefix
 * @property {string} contentsLinkText
 * @property {string} jumpToLetter
 * @property {(bookTitle: string) => string} searchMetaDescription
 * @property {(count: number) => string} searchIntro
 * @property {string} searchInputLabel
 * @property {string} searchPlaceholder
 * @property {string} searchHintEmptyHtml
 * @property {string} noResultsPrefix
 * @property {string} noResultsMiddle
 * @property {string} resultsCountSingular
 * @property {string} resultsCountPlural
 * @property {(index: number, total: number) => string} topicPosition
 * @property {string} onThisPage
 * @property {string} paginationLabel
 * @property {string} paginationPrevious
 * @property {string} paginationNext
 */

/** @type {Messages} */
const EN = {
	skipToContent: 'Skip to content',
	navHome: 'Home',
	navContents: 'Contents',
	navTopicsAZ: 'Topics A–Z',
	navSearch: 'Search',
	navAbout: 'About',
	footerSourceLink: 'Source',
	footerTaglineSuffix:
		' — digital health metric definitions, examples, and reasoning for teams building, evaluating, and commissioning digital health products.',
	footerNote:
		'Figures in this book date quickly. Each topic dates its benchmarks in-line; re-verify before using any number in a live business case.',
	pickerTheme: 'Theme',
	pickerLanguage: 'Language',
	pickerTextSize: 'Text size',
	pickerShare: 'Share',
	shareCopyLink: 'Copy link',
	shareCopied: 'Copied',
	shareCopyFailed: 'Copy failed',
	shareEmailLabel: 'Email Link',
	shareLinkedinLabel: 'Share on LinkedIn',
	shareRedditLabel: 'Share on Reddit',
	shareBlueskyLabel: 'Share on Bluesky',
	shareMastodonLabel: 'Share on Mastodon',

	startHere: 'Start here',
	startHereSubtitle: 'The three ideas everything else builds on.',

	contentsMetaDescription: (bookTitle) => `Every topic in ${bookTitle}, in reading order.`,
	contentsIntro: (count, parts) =>
		`All ${count} topics in reading order, across ${parts} parts. Each topic covers one metric or concept: definition, why it matters, how it's calculated, a worked example, data sources and caveats, pitfalls, and sources.`,
	topicsCountSubtitle: (n) => `${n} topics`,

	topicsMetaDescription: (bookTitle) => `Every topic in ${bookTitle}, listed A to Z.`,
	topicsIntroPrefix: (count) => `All ${count} topics in alphabetical order. For reading order, see the`,
	contentsLinkText: 'contents',
	jumpToLetter: 'Jump to letter',

	searchMetaDescription: (bookTitle) => `Search every topic in ${bookTitle}.`,
	searchIntro: (count) =>
		`Search all ${count} topics by title, part, summary, and section heading. Everything runs in your browser — nothing you type leaves this page.`,
	searchInputLabel: 'Search topics',
	searchPlaceholder: 'DAU, retention, PROM completion rate…',
	searchHintEmptyHtml: 'Type to search. Try <em>DAU</em>, <em>retention</em>, or <em>PROM</em>.',
	noResultsPrefix: 'No topics match ',
	noResultsMiddle: '. Try a broader term, or browse the ',
	resultsCountSingular: 'topic',
	resultsCountPlural: 'topics',

	topicPosition: (index, total) => `Topic ${index} of ${total}`,
	onThisPage: 'On this page',
	paginationLabel: 'Book',
	paginationPrevious: 'Previous',
	paginationNext: 'Next'
};

/** @type {Messages} */
const cy = {
	skipToContent: 'Neidio i’r cynnwys',
	navHome: 'Hafan',
	navContents: 'Cynnwys',
	navTopicsAZ: 'Pynciau A–Z',
	navSearch: 'Chwilio',
	navAbout: 'Amdanom',
	footerSourceLink: 'Cod ffynhonnell',
	footerTaglineSuffix:
		' — diffiniadau metrigau iechyd digidol, enghreifftiau, a rhesymu ar gyfer timau sy’n adeiladu, gwerthuso, a chomisiynu cynhyrchion iechyd digidol.',
	footerNote:
		'Mae ffigurau’r llyfr hwn yn dyddio’n gyflym. Mae pob pwnc yn dyddio ei feincnodau yn y testun; gwiriwch eto cyn defnyddio unrhyw rif mewn achos busnes byw.',
	pickerTheme: 'Thema',
	pickerLanguage: 'Iaith',
	pickerTextSize: 'Maint testun',
	pickerShare: 'Rhannu',
	shareCopyLink: 'Copïo’r cyswllt',
	shareCopied: 'Wedi copïo',
	shareCopyFailed: 'Methodd y copïo',
	shareEmailLabel: 'Anfon cyswllt drwy e-bost',
	shareLinkedinLabel: 'Rhannu ar LinkedIn',
	shareRedditLabel: 'Rhannu ar Reddit',
	shareBlueskyLabel: 'Rhannu ar Bluesky',
	shareMastodonLabel: 'Rhannu ar Mastodon',
	startHere: 'Dechreuwch yma',
	startHereSubtitle: 'Y tri syniad y mae popeth arall yn adeiladu arnynt.',
	contentsMetaDescription: (bookTitle) => `Pob pwnc yn ${bookTitle}, yn nhrefn darllen.`,
	contentsIntro: (count, parts) =>
		`Pob un o’r ${count} pwnc yn nhrefn darllen, ar draws ${parts} rhan. Mae pob pwnc yn ymdrin ag un metrig neu gysyniad: diffiniad, pam mae’n bwysig, sut mae’n cael ei gyfrifo, enghraifft wedi’i datrys, ffynonellau data a rhybuddion, peryglon, a ffynonellau.`,
	topicsCountSubtitle: (n) => `${n} pwnc`,
	topicsMetaDescription: (bookTitle) => `Pob pwnc yn ${bookTitle}, wedi’u rhestru o A i Z.`,
	topicsIntroPrefix: (count) => `Pob un o’r ${count} pwnc yn nhrefn yr wyddor. Ar gyfer trefn darllen, gweler y`,
	contentsLinkText: 'cynnwys',
	jumpToLetter: 'Neidio i lythyren',
	searchMetaDescription: (bookTitle) => `Chwilio pob pwnc yn ${bookTitle}.`,
	searchIntro: (count) =>
		`Chwiliwch drwy’r ${count} pwnc yn ôl teitl, rhan, crynodeb, a phennawd adran. Mae popeth yn rhedeg yn eich porwr — nid yw dim byd a deipiwch yn gadael y dudalen hon.`,
	searchInputLabel: 'Chwilio pynciau',
	searchPlaceholder: 'DAU, cadw defnyddwyr, cyfradd cwblhau PROM…',
	searchHintEmptyHtml: 'Teipiwch i chwilio. Rhowch gynnig ar <em>DAU</em>, <em>cadw defnyddwyr</em>, neu <em>PROM</em>.',
	noResultsPrefix: 'Dim pynciau yn cyfateb i ',
	noResultsMiddle: '. Rhowch gynnig ar derm ehangach, neu bori’r ',
	resultsCountSingular: 'pwnc',
	resultsCountPlural: 'pwnc',
	topicPosition: (index, total) => `Pwnc ${index} o ${total}`,
	onThisPage: 'Ar y dudalen hon',
	paginationLabel: 'Llyfr',
	paginationPrevious: 'Blaenorol',
	paginationNext: 'Nesaf'
};

/** @type {Messages} */
const zh = {
	skipToContent: '跳到主要内容',
	navHome: '首页',
	navContents: '目录',
	navTopicsAZ: '主题 A–Z',
	navSearch: '搜索',
	navAbout: '关于',
	footerSourceLink: '源代码',
	footerTaglineSuffix: ' —— 为构建、评估和采购数字健康产品的团队提供的数字健康指标定义、案例与推理。',
	footerNote: '本书中的数字更新很快。每个主题都在正文中标注了其基准数据的日期；在实际业务案例中使用任何数字之前，请重新核实。',
	pickerTheme: '主题外观',
	pickerLanguage: '语言',
	pickerTextSize: '字号',
	pickerShare: '分享',
	shareCopyLink: '复制链接',
	shareCopied: '已复制',
	shareCopyFailed: '复制失败',
	shareEmailLabel: '通过邮件发送链接',
	shareLinkedinLabel: '分享到 LinkedIn',
	shareRedditLabel: '分享到 Reddit',
	shareBlueskyLabel: '分享到 Bluesky',
	shareMastodonLabel: '分享到 Mastodon',
	startHere: '从这里开始',
	startHereSubtitle: '其余一切都建立在这三个概念之上。',
	contentsMetaDescription: (bookTitle) => `《${bookTitle}》的全部主题，按阅读顺序排列。`,
	contentsIntro: (count, parts) =>
		`全部 ${count} 个主题按阅读顺序排列，共分为 ${parts} 个部分。每个主题涵盖一个指标或概念：定义、为何重要、如何计算、一个实例解析、数据来源与注意事项、常见误区，以及参考来源。`,
	topicsCountSubtitle: (n) => `${n} 个主题`,
	topicsMetaDescription: (bookTitle) => `《${bookTitle}》的全部主题，按字母顺序排列。`,
	topicsIntroPrefix: (count) => `全部 ${count} 个主题按字母顺序排列。如需阅读顺序，请查看`,
	contentsLinkText: '目录',
	jumpToLetter: '跳转到字母',
	searchMetaDescription: (bookTitle) => `搜索《${bookTitle}》中的所有主题。`,
	searchIntro: (count) =>
		`按标题、部分、摘要和小节标题搜索全部 ${count} 个主题。一切都在你的浏览器中运行 —— 你输入的内容不会离开此页面。`,
	searchInputLabel: '搜索主题',
	searchPlaceholder: 'DAU、留存率、PROM 完成率……',
	searchHintEmptyHtml: '开始输入以搜索。试试 <em>DAU</em>、<em>留存率</em> 或 <em>PROM</em>。',
	noResultsPrefix: '没有主题匹配 ',
	noResultsMiddle: '。请尝试更宽泛的词语，或浏览',
	resultsCountSingular: '个主题',
	resultsCountPlural: '个主题',
	topicPosition: (index, total) => `第 ${index} 个主题，共 ${total} 个`,
	onThisPage: '本页内容',
	paginationLabel: '全书',
	paginationPrevious: '上一篇',
	paginationNext: '下一篇'
};

/** @type {Record<string, Messages>} */
const TRANSLATIONS = {
	'cy-001': cy,
	'zh-cn': zh
};

/**
 * This locale's UI strings, falling back to English for any missing key.
 * @param {string} locale
 * @returns {Messages}
 */
export function ui(locale) {
	const overrides = TRANSLATIONS[locale];
	return overrides ? { ...EN, ...overrides } : EN;
}
