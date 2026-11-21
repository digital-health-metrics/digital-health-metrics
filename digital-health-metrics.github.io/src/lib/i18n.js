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
// Only 29 of the site's 37 public locales need an entry in TRANSLATIONS
// below: the 3 English variants (en-us, en-gb, en-001) all share this same
// base EN table with no per-variant overrides, same as they would for any
// other English-only difference (spelling, not vocabulary) — and the 8
// locales that share a language with another published locale (ar-eg, hi-in,
// es-es, pt-pt, ru-ru, fr-fr, cy-gb — country variants of an international
// `-001` locale — and de-001, the international copy of de-de) deliberately
// reuse that other locale's own translation object rather than
// getting a separate one, for the same reason their book content is reused
// verbatim (see spec/index.md §4). That leaves cy-001 (Welsh), zh-cn
// (Simplified Chinese), es-001 (Spanish), hi-001 (Hindi), ar-001 (Arabic),
// fr-001 (French), pt-001 (Portuguese), de-de (German), ru-001 (Russian),
// bn-bd (Bengali), ko-kr (Korean), ja-jp (Japanese), sv-se (Swedish),
// nl-nl (Dutch), ur-pk (Urdu), id-id (Indonesian), it-it (Italian),
// uk-ua (Ukrainian), fi-fi (Finnish), no-no (Norwegian), da-dk (Danish),
// pl-pl (Polish), vi-001 (Vietnamese), et-001 (Estonian), th-001 (Thai), and tr-tr (Turkish)
// with their own chrome translations.

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
 * @property {string} pickerLinks
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
	pickerLinks: 'Links',
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
	pickerLinks: 'Dolenni',
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
	pickerLinks: '链接',
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

/** @type {Messages} */
const es = {
	skipToContent: 'Saltar al contenido',
	navHome: 'Inicio',
	navContents: 'Contenido',
	navTopicsAZ: 'Temas A–Z',
	navSearch: 'Buscar',
	navAbout: 'Acerca de',
	footerSourceLink: 'Código fuente',
	footerTaglineSuffix:
		' — definiciones de métricas de salud digital, ejemplos y razonamiento para equipos que construyen, evalúan y encargan productos de salud digital.',
	footerNote:
		'Las cifras de este libro cambian con rapidez. Cada tema fecha sus valores de referencia en el texto; vuelva a verificarlos antes de usar cualquier cifra en un caso de negocio real.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Idioma',
	pickerTextSize: 'Tamaño del texto',
	pickerShare: 'Compartir',
	pickerLinks: 'Enlaces',
	shareCopyLink: 'Copiar enlace',
	shareCopied: 'Copiado',
	shareCopyFailed: 'Error al copiar',
	shareEmailLabel: 'Enviar enlace por correo',
	shareLinkedinLabel: 'Compartir en LinkedIn',
	shareRedditLabel: 'Compartir en Reddit',
	shareBlueskyLabel: 'Compartir en Bluesky',
	shareMastodonLabel: 'Compartir en Mastodon',
	startHere: 'Empiece aquí',
	startHereSubtitle: 'Las tres ideas sobre las que se basa todo lo demás.',
	contentsMetaDescription: (bookTitle) => `Todos los temas de ${bookTitle}, en orden de lectura.`,
	contentsIntro: (count, parts) =>
		`Los ${count} temas en orden de lectura, repartidos en ${parts} partes. Cada tema trata una métrica o concepto: definición, por qué importa, cómo se calcula, un ejemplo resuelto, fuentes de datos y advertencias, errores comunes y fuentes.`,
	topicsCountSubtitle: (n) => `${n} temas`,
	topicsMetaDescription: (bookTitle) => `Todos los temas de ${bookTitle}, listados de la A a la Z.`,
	topicsIntroPrefix: (count) => `Los ${count} temas en orden alfabético. Para el orden de lectura, consulte el`,
	contentsLinkText: 'contenido',
	jumpToLetter: 'Ir a la letra',
	searchMetaDescription: (bookTitle) => `Busque en todos los temas de ${bookTitle}.`,
	searchIntro: (count) =>
		`Busque entre los ${count} temas por título, parte, resumen y encabezado de sección. Todo se ejecuta en su navegador: nada de lo que escriba sale de esta página.`,
	searchInputLabel: 'Buscar temas',
	searchPlaceholder: 'DAU, retención, tasa de finalización de PROM…',
	searchHintEmptyHtml: 'Escriba para buscar. Pruebe con <em>DAU</em>, <em>retención</em> o <em>PROM</em>.',
	noResultsPrefix: 'Ningún tema coincide con ',
	noResultsMiddle: '. Pruebe con un término más amplio, o explore el ',
	resultsCountSingular: 'tema',
	resultsCountPlural: 'temas',
	topicPosition: (index, total) => `Tema ${index} de ${total}`,
	onThisPage: 'En esta página',
	paginationLabel: 'Libro',
	paginationPrevious: 'Anterior',
	paginationNext: 'Siguiente'
};

/** @type {Messages} */
const hi = {
	skipToContent: 'मुख्य सामग्री पर जाएं',
	navHome: 'होम',
	navContents: 'सामग्री',
	navTopicsAZ: 'विषय A–Z',
	navSearch: 'खोजें',
	navAbout: 'के बारे में',
	footerSourceLink: 'स्रोत कोड',
	footerTaglineSuffix:
		' — डिजिटल स्वास्थ्य उत्पादों का निर्माण, मूल्यांकन, और प्रबंधन करने वाली टीमों के लिए डिजिटल स्वास्थ्य मेट्रिक परिभाषाएँ, उदाहरण, और तर्क।',
	footerNote:
		'इस पुस्तक में दिए गए आंकड़े जल्दी पुराने हो जाते हैं। प्रत्येक विषय अपने बेंचमार्क को इन-लाइन दिनांकित करता है; किसी भी संख्या का उपयोग वास्तविक बिज़नेस केस में करने से पहले उसे फिर से सत्यापित करें।',
	pickerTheme: 'थीम',
	pickerLanguage: 'भाषा',
	pickerTextSize: 'टेक्स्ट आकार',
	pickerShare: 'साझा करें',
	pickerLinks: 'लिंक',
	shareCopyLink: 'लिंक कॉपी करें',
	shareCopied: 'कॉपी किया गया',
	shareCopyFailed: 'कॉपी विफल',
	shareEmailLabel: 'ईमेल लिंक भेजें',
	shareLinkedinLabel: 'LinkedIn पर साझा करें',
	shareRedditLabel: 'Reddit पर साझा करें',
	shareBlueskyLabel: 'Bluesky पर साझा करें',
	shareMastodonLabel: 'Mastodon पर साझा करें',
	startHere: 'यहाँ से शुरू करें',
	startHereSubtitle: 'तीन विचार जिन पर बाकी सब कुछ आधारित है।',
	contentsMetaDescription: (bookTitle) => `${bookTitle} के सभी विषय, पढ़ने के क्रम में।`,
	contentsIntro: (count, parts) =>
		`पढ़ने के क्रम में सभी ${count} विषय, ${parts} भागों में विभाजित। प्रत्येक विषय एक मेट्रिक या अवधारणा को कवर करता है: परिभाषा, यह क्यों महत्वपूर्ण है, इसकी गणना कैसे की जाती है, एक हल किया गया उदाहरण, डेटा स्रोत और सावधानियाँ, सामान्य गलतियाँ, और स्रोत।`,
	topicsCountSubtitle: (n) => `${n} विषय`,
	topicsMetaDescription: (bookTitle) => `${bookTitle} के सभी विषय, A से Z तक सूचीबद्ध।`,
	topicsIntroPrefix: (count) => `वर्णानुक्रम में सभी ${count} विषय। पढ़ने के क्रम के लिए, देखें`,
	contentsLinkText: 'सामग्री',
	jumpToLetter: 'अक्षर पर जाएं',
	searchMetaDescription: (bookTitle) => `${bookTitle} के सभी विषयों में खोजें।`,
	searchIntro: (count) =>
		`शीर्षक, भाग, सारांश, और अनुभाग शीर्षक द्वारा सभी ${count} विषयों में खोजें। सब कुछ आपके ब्राउज़र में चलता है — आप जो टाइप करते हैं वह इस पृष्ठ से बाहर नहीं जाता।`,
	searchInputLabel: 'विषय खोजें',
	searchPlaceholder: 'DAU, प्रतिधारण, PROM पूर्णता दर…',
	searchHintEmptyHtml: 'खोजने के लिए टाइप करें। <em>DAU</em>, <em>प्रतिधारण</em>, या <em>PROM</em> आज़माएं।',
	noResultsPrefix: 'कोई विषय मेल नहीं खाता ',
	noResultsMiddle: '। एक व्यापक शब्द आज़माएं, या ब्राउज़ करें ',
	resultsCountSingular: 'विषय',
	resultsCountPlural: 'विषय',
	topicPosition: (index, total) => `विषय ${index}, कुल ${total} में से`,
	onThisPage: 'इस पृष्ठ पर',
	paginationLabel: 'पुस्तक',
	paginationPrevious: 'पिछला',
	paginationNext: 'अगला'
};

/** @type {Messages} */
const ar = {
	skipToContent: 'تخطَّ إلى المحتوى',
	navHome: 'الرئيسية',
	navContents: 'المحتويات',
	navTopicsAZ: 'المواضيع أبجديًا',
	navSearch: 'البحث',
	navAbout: 'حول',
	footerSourceLink: 'المصدر',
	footerTaglineSuffix:
		' — تعريفات مقاييس الصحة الرقمية، وأمثلة، وتحليل منطقي لفرق بناء منتجات الصحة الرقمية وتقييمها وتكليفها.',
	footerNote:
		'تتغير الأرقام في هذا الكتاب بسرعة. يُؤرِّخ كل موضوع معاييره المرجعية ضمن النص؛ تحقق منها مجددًا قبل استخدام أي رقم في حالة عمل فعلية.',
	pickerTheme: 'المظهر',
	pickerLanguage: 'اللغة',
	pickerTextSize: 'حجم النص',
	pickerShare: 'مشاركة',
	pickerLinks: 'روابط',
	shareCopyLink: 'نسخ الرابط',
	shareCopied: 'تم النسخ',
	shareCopyFailed: 'فشل النسخ',
	shareEmailLabel: 'إرسال الرابط عبر البريد الإلكتروني',
	shareLinkedinLabel: 'مشاركة على LinkedIn',
	shareRedditLabel: 'مشاركة على Reddit',
	shareBlueskyLabel: 'مشاركة على Bluesky',
	shareMastodonLabel: 'مشاركة على Mastodon',
	startHere: 'ابدأ هنا',
	startHereSubtitle: 'الأفكار الثلاث التي يُبنى عليها كل شيء آخر.',
	contentsMetaDescription: (bookTitle) => `كل المواضيع في ${bookTitle}، بترتيب القراءة.`,
	contentsIntro: (count, parts) =>
		`كل المواضيع البالغ عددها ${count} بترتيب القراءة، عبر ${parts} أجزاء. يتناول كل موضوع مقياسًا أو مفهومًا واحدًا: التعريف، ولماذا يهم، وكيف يُحسب، ومثال محلول، ومصادر البيانات والتحذيرات، والأخطاء الشائعة، والمصادر.`,
	topicsCountSubtitle: (n) => `${n} موضوعًا`,
	topicsMetaDescription: (bookTitle) => `كل المواضيع في ${bookTitle}، مُرتَّبة أبجديًا.`,
	topicsIntroPrefix: (count) => `كل المواضيع البالغ عددها ${count} بالترتيب الأبجدي. لترتيب القراءة، راجع`,
	contentsLinkText: 'المحتويات',
	jumpToLetter: 'انتقل إلى الحرف',
	searchMetaDescription: (bookTitle) => `ابحث في كل مواضيع ${bookTitle}.`,
	searchIntro: (count) =>
		`ابحث في كل المواضيع البالغ عددها ${count} حسب العنوان والجزء والملخص وعنوان القسم. كل شيء يعمل داخل متصفحك — لا يغادر ما تكتبه هذه الصفحة أبدًا.`,
	searchInputLabel: 'ابحث في المواضيع',
	searchPlaceholder: 'DAU، الاحتفاظ، معدل إكمال PROM…',
	searchHintEmptyHtml: 'اكتب للبحث. جرّب <em>DAU</em>، أو <em>الاحتفاظ</em>، أو <em>PROM</em>.',
	noResultsPrefix: 'لا يوجد موضوع مطابق لـ ',
	noResultsMiddle: '. جرّب مصطلحًا أوسع، أو تصفَّح ',
	resultsCountSingular: 'موضوع',
	resultsCountPlural: 'مواضيع',
	topicPosition: (index, total) => `الموضوع ${index} من ${total}`,
	onThisPage: 'في هذه الصفحة',
	paginationLabel: 'الكتاب',
	paginationPrevious: 'السابق',
	paginationNext: 'التالي'
};

/** @type {Messages} */
const fr = {
	skipToContent: 'Passer au contenu',
	navHome: 'Accueil',
	navContents: 'Sommaire',
	navTopicsAZ: 'Sujets A–Z',
	navSearch: 'Recherche',
	navAbout: 'À propos',
	footerSourceLink: 'Source',
	footerTaglineSuffix:
		' — définitions de métriques de santé numérique, exemples et raisonnement pour les équipes qui conçoivent, évaluent et commandent des produits de santé numérique.',
	footerNote:
		'Les chiffres de ce livre évoluent rapidement. Chaque sujet date ses références directement dans le texte ; revérifiez-les avant d’utiliser un chiffre dans un dossier de justification réel.',
	pickerTheme: 'Thème',
	pickerLanguage: 'Langue',
	pickerTextSize: 'Taille du texte',
	pickerShare: 'Partager',
	pickerLinks: 'Liens',
	shareCopyLink: 'Copier le lien',
	shareCopied: 'Copié',
	shareCopyFailed: 'Échec de la copie',
	shareEmailLabel: 'Envoyer le lien par e-mail',
	shareLinkedinLabel: 'Partager sur LinkedIn',
	shareRedditLabel: 'Partager sur Reddit',
	shareBlueskyLabel: 'Partager sur Bluesky',
	shareMastodonLabel: 'Partager sur Mastodon',
	startHere: 'Commencez ici',
	startHereSubtitle: 'Les trois idées sur lesquelles tout le reste s’appuie.',
	contentsMetaDescription: (bookTitle) => `Tous les sujets de ${bookTitle}, dans l’ordre de lecture.`,
	contentsIntro: (count, parts) =>
		`Les ${count} sujets dans l’ordre de lecture, répartis en ${parts} parties. Chaque sujet traite une métrique ou un concept : définition, pourquoi c’est important, comment le calculer, un exemple résolu, les sources de données et mises en garde, les erreurs courantes, et les sources.`,
	topicsCountSubtitle: (n) => `${n} sujets`,
	topicsMetaDescription: (bookTitle) => `Tous les sujets de ${bookTitle}, classés de A à Z.`,
	topicsIntroPrefix: (count) => `Les ${count} sujets par ordre alphabétique. Pour l’ordre de lecture, voir le`,
	contentsLinkText: 'sommaire',
	jumpToLetter: 'Aller à la lettre',
	searchMetaDescription: (bookTitle) => `Recherchez parmi tous les sujets de ${bookTitle}.`,
	searchIntro: (count) =>
		`Recherchez parmi les ${count} sujets par titre, partie, résumé et titre de section. Tout s’exécute dans votre navigateur — rien de ce que vous tapez ne quitte cette page.`,
	searchInputLabel: 'Rechercher des sujets',
	searchPlaceholder: 'DAU, rétention, taux de complétion PROM…',
	searchHintEmptyHtml: 'Tapez pour rechercher. Essayez <em>DAU</em>, <em>rétention</em>, ou <em>PROM</em>.',
	noResultsPrefix: 'Aucun sujet ne correspond à ',
	noResultsMiddle: '. Essayez un terme plus large, ou parcourez le ',
	resultsCountSingular: 'sujet',
	resultsCountPlural: 'sujets',
	topicPosition: (index, total) => `Sujet ${index} sur ${total}`,
	onThisPage: 'Sur cette page',
	paginationLabel: 'Livre',
	paginationPrevious: 'Précédent',
	paginationNext: 'Suivant'
};

/** @type {Messages} */
const pt = {
	skipToContent: 'Saltar para o conteúdo',
	navHome: 'Início',
	navContents: 'Índice',
	navTopicsAZ: 'Tópicos A–Z',
	navSearch: 'Pesquisar',
	navAbout: 'Sobre',
	footerSourceLink: 'Código-fonte',
	footerTaglineSuffix:
		' — definições de métricas de saúde digital, exemplos e raciocínio para equipas que constroem, avaliam e encomendam produtos de saúde digital.',
	footerNote:
		'Os números deste livro mudam rapidamente. Cada tópico data as suas referências diretamente no texto; reverifique antes de utilizar qualquer número num caso de negócio real.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Idioma',
	pickerTextSize: 'Tamanho do texto',
	pickerShare: 'Partilhar',
	pickerLinks: 'Ligações',
	shareCopyLink: 'Copiar ligação',
	shareCopied: 'Copiado',
	shareCopyFailed: 'Falha ao copiar',
	shareEmailLabel: 'Enviar ligação por e-mail',
	shareLinkedinLabel: 'Partilhar no LinkedIn',
	shareRedditLabel: 'Partilhar no Reddit',
	shareBlueskyLabel: 'Partilhar no Bluesky',
	shareMastodonLabel: 'Partilhar no Mastodon',
	startHere: 'Comece aqui',
	startHereSubtitle: 'As três ideias sobre as quais tudo o resto se constrói.',
	contentsMetaDescription: (bookTitle) => `Todos os tópicos de ${bookTitle}, por ordem de leitura.`,
	contentsIntro: (count, parts) =>
		`Todos os ${count} tópicos por ordem de leitura, distribuídos por ${parts} partes. Cada tópico aborda uma métrica ou conceito: definição, porque importa, como se calcula, um exemplo resolvido, fontes de dados e ressalvas, erros comuns, e fontes.`,
	topicsCountSubtitle: (n) => `${n} tópicos`,
	topicsMetaDescription: (bookTitle) => `Todos os tópicos de ${bookTitle}, listados de A a Z.`,
	topicsIntroPrefix: (count) => `Todos os ${count} tópicos por ordem alfabética. Para a ordem de leitura, veja o`,
	contentsLinkText: 'índice',
	jumpToLetter: 'Ir para a letra',
	searchMetaDescription: (bookTitle) => `Pesquise em todos os tópicos de ${bookTitle}.`,
	searchIntro: (count) =>
		`Pesquise nos ${count} tópicos por título, parte, resumo e título de secção. Tudo funciona no seu navegador — nada do que escreve sai desta página.`,
	searchInputLabel: 'Pesquisar tópicos',
	searchPlaceholder: 'DAU, retenção, taxa de conclusão PROM…',
	searchHintEmptyHtml: 'Escreva para pesquisar. Experimente <em>DAU</em>, <em>retenção</em>, ou <em>PROM</em>.',
	noResultsPrefix: 'Nenhum tópico corresponde a ',
	noResultsMiddle: '. Experimente um termo mais abrangente, ou percorra o ',
	resultsCountSingular: 'tópico',
	resultsCountPlural: 'tópicos',
	topicPosition: (index, total) => `Tópico ${index} de ${total}`,
	onThisPage: 'Nesta página',
	paginationLabel: 'Livro',
	paginationPrevious: 'Anterior',
	paginationNext: 'Seguinte'
};

/** @type {Messages} */
const de = {
	skipToContent: 'Zum Inhalt springen',
	navHome: 'Startseite',
	navContents: 'Inhalt',
	navTopicsAZ: 'Themen A–Z',
	navSearch: 'Suche',
	navAbout: 'Über',
	footerSourceLink: 'Quelle',
	footerTaglineSuffix:
		' — Definitionen von Metriken für digitale Gesundheit, Beispiele und Begründungen für Teams, die digitale Gesundheitsprodukte entwickeln, bewerten und beauftragen.',
	footerNote:
		'Die Zahlen in diesem Buch ändern sich schnell. Jedes Thema datiert seine Referenzwerte direkt im Text; überprüfen Sie sie erneut, bevor Sie eine Zahl in einem realen Business Case verwenden.',
	pickerTheme: 'Design',
	pickerLanguage: 'Sprache',
	pickerTextSize: 'Textgröße',
	pickerShare: 'Teilen',
	pickerLinks: 'Links',
	shareCopyLink: 'Link kopieren',
	shareCopied: 'Kopiert',
	shareCopyFailed: 'Kopieren fehlgeschlagen',
	shareEmailLabel: 'Link per E-Mail senden',
	shareLinkedinLabel: 'Auf LinkedIn teilen',
	shareRedditLabel: 'Auf Reddit teilen',
	shareBlueskyLabel: 'Auf Bluesky teilen',
	shareMastodonLabel: 'Auf Mastodon teilen',
	startHere: 'Hier beginnen',
	startHereSubtitle: 'Die drei Ideen, auf denen alles andere aufbaut.',
	contentsMetaDescription: (bookTitle) => `Alle Themen in ${bookTitle}, in Lesereihenfolge.`,
	contentsIntro: (count, parts) =>
		`Alle ${count} Themen in Lesereihenfolge, aufgeteilt auf ${parts} Teile. Jedes Thema behandelt eine Metrik oder ein Konzept: Definition, warum es wichtig ist, wie es berechnet wird, ein gelöstes Beispiel, Datenquellen und Vorbehalte, häufige Fehler und Quellen.`,
	topicsCountSubtitle: (n) => `${n} Themen`,
	topicsMetaDescription: (bookTitle) => `Alle Themen in ${bookTitle}, von A bis Z aufgelistet.`,
	topicsIntroPrefix: (count) => `Alle ${count} Themen in alphabetischer Reihenfolge. Für die Lesereihenfolge siehe das`,
	contentsLinkText: 'Inhaltsverzeichnis',
	jumpToLetter: 'Zum Buchstaben springen',
	searchMetaDescription: (bookTitle) => `Durchsuchen Sie alle Themen in ${bookTitle}.`,
	searchIntro: (count) =>
		`Durchsuchen Sie alle ${count} Themen nach Titel, Teil, Zusammenfassung und Abschnittsüberschrift. Alles läuft in Ihrem Browser — nichts, was Sie eingeben, verlässt diese Seite.`,
	searchInputLabel: 'Themen durchsuchen',
	searchPlaceholder: 'DAU, Retention, PROM-Abschlussrate…',
	searchHintEmptyHtml: 'Zum Suchen tippen. Probieren Sie <em>DAU</em>, <em>Retention</em>, oder <em>PROM</em>.',
	noResultsPrefix: 'Kein Thema entspricht ',
	noResultsMiddle: '. Versuchen Sie einen weiter gefassten Begriff, oder durchsuchen Sie das ',
	resultsCountSingular: 'Thema',
	resultsCountPlural: 'Themen',
	topicPosition: (index, total) => `Thema ${index} von ${total}`,
	onThisPage: 'Auf dieser Seite',
	paginationLabel: 'Buch',
	paginationPrevious: 'Zurück',
	paginationNext: 'Weiter'
};

/** @type {Messages} */
const ru = {
	skipToContent: 'Перейти к содержимому',
	navHome: 'Главная',
	navContents: 'Содержание',
	navTopicsAZ: 'Темы А–Я',
	navSearch: 'Поиск',
	navAbout: 'О книге',
	footerSourceLink: 'Исходный код',
	footerTaglineSuffix:
		' — определения метрик цифрового здравоохранения, примеры и обоснования для команд, создающих, оценивающих и заказывающих продукты цифрового здравоохранения.',
	footerNote:
		'Цифры в этой книге быстро устаревают. Каждая тема датирует свои эталонные значения прямо в тексте; перепроверяйте их перед использованием любого числа в реальном бизнес-кейсе.',
	pickerTheme: 'Тема оформления',
	pickerLanguage: 'Язык',
	pickerTextSize: 'Размер текста',
	pickerShare: 'Поделиться',
	pickerLinks: 'Ссылки',
	shareCopyLink: 'Скопировать ссылку',
	shareCopied: 'Скопировано',
	shareCopyFailed: 'Не удалось скопировать',
	shareEmailLabel: 'Отправить ссылку по эл. почте',
	shareLinkedinLabel: 'Поделиться в LinkedIn',
	shareRedditLabel: 'Поделиться в Reddit',
	shareBlueskyLabel: 'Поделиться в Bluesky',
	shareMastodonLabel: 'Поделиться в Mastodon',
	startHere: 'Начните здесь',
	startHereSubtitle: 'Три идеи, на которых строится всё остальное.',
	contentsMetaDescription: (bookTitle) => `Все темы в «${bookTitle}» в порядке чтения.`,
	contentsIntro: (count, parts) =>
		`Все ${count} тем в порядке чтения, разделённые на ${parts} частей. Каждая тема охватывает одну метрику или понятие: определение, почему это важно, как рассчитывается, разобранный пример, источники данных и предостережения, распространённые ошибки и источники.`,
	topicsCountSubtitle: (n) => `${n} тем`,
	topicsMetaDescription: (bookTitle) => `Все темы в «${bookTitle}», перечисленные от А до Я.`,
	topicsIntroPrefix: (count) => `Все ${count} тем в алфавитном порядке. Порядок чтения см. в разделе`,
	contentsLinkText: 'содержание',
	jumpToLetter: 'Перейти к букве',
	searchMetaDescription: (bookTitle) => `Поиск по всем темам в «${bookTitle}».`,
	searchIntro: (count) =>
		`Ищите среди всех ${count} тем по заголовку, части, краткому описанию и заголовку раздела. Всё выполняется в вашем браузере — то, что вы вводите, никогда не покидает эту страницу.`,
	searchInputLabel: 'Поиск по темам',
	searchPlaceholder: 'DAU, удержание, показатель завершения PROM…',
	searchHintEmptyHtml: 'Введите текст для поиска. Попробуйте <em>DAU</em>, <em>удержание</em> или <em>PROM</em>.',
	noResultsPrefix: 'Ни одна тема не соответствует запросу ',
	noResultsMiddle: '. Попробуйте более общий термин или просмотрите ',
	resultsCountSingular: 'тема',
	resultsCountPlural: 'тем',
	topicPosition: (index, total) => `Тема ${index} из ${total}`,
	onThisPage: 'На этой странице',
	paginationLabel: 'Книга',
	paginationPrevious: 'Назад',
	paginationNext: 'Далее'
};

/** @type {Messages} */
const bn = {
	skipToContent: 'বিষয়বস্তুতে যান',
	navHome: 'হোম',
	navContents: 'সূচিপত্র',
	navTopicsAZ: 'বিষয় A–Z',
	navSearch: 'অনুসন্ধান',
	navAbout: 'সম্পর্কে',
	footerSourceLink: 'উৎস কোড',
	footerTaglineSuffix:
		' — ডিজিটাল স্বাস্থ্য পণ্য তৈরি, মূল্যায়ন ও নিয়োগকারী দলগুলোর জন্য ডিজিটাল স্বাস্থ্য মেট্রিক সংজ্ঞা, উদাহরণ, এবং যুক্তি।',
	footerNote:
		'এই বইয়ের সংখ্যাগুলো দ্রুত পরিবর্তিত হয়। প্রতিটি বিষয় তার রেফারেন্স মান সরাসরি টেক্সটে তারিখসহ উল্লেখ করে; একটি বাস্তব ব্যবসায়িক ক্ষেত্রে কোনো সংখ্যা ব্যবহারের আগে পুনরায় যাচাই করুন।',
	pickerTheme: 'থিম',
	pickerLanguage: 'ভাষা',
	pickerTextSize: 'টেক্সটের আকার',
	pickerShare: 'শেয়ার করুন',
	pickerLinks: 'লিঙ্ক',
	shareCopyLink: 'লিঙ্ক কপি করুন',
	shareCopied: 'কপি হয়েছে',
	shareCopyFailed: 'কপি ব্যর্থ হয়েছে',
	shareEmailLabel: 'ইমেইলে লিঙ্ক পাঠান',
	shareLinkedinLabel: 'LinkedIn-এ শেয়ার করুন',
	shareRedditLabel: 'Reddit-এ শেয়ার করুন',
	shareBlueskyLabel: 'Bluesky-তে শেয়ার করুন',
	shareMastodonLabel: 'Mastodon-এ শেয়ার করুন',
	startHere: 'এখান থেকে শুরু করুন',
	startHereSubtitle: 'তিনটি ধারণা যার উপর বাকি সবকিছু ভিত্তি করে গড়ে উঠেছে।',
	contentsMetaDescription: (bookTitle) => `${bookTitle}-এর সব বিষয়, পড়ার ক্রম অনুসারে।`,
	contentsIntro: (count, parts) =>
		`পড়ার ক্রম অনুসারে সব ${count}টি বিষয়, ${parts}টি অংশে বিভক্ত। প্রতিটি বিষয় একটি মেট্রিক বা ধারণা নিয়ে আলোচনা করে: সংজ্ঞা, কেন এটি গুরুত্বপূর্ণ, কীভাবে গণনা করা হয়, একটি সমাধানকৃত উদাহরণ, তথ্যের উৎস ও সতর্কতা, সাধারণ ভুলত্রুটি, এবং উৎসসমূহ।`,
	topicsCountSubtitle: (n) => `${n}টি বিষয়`,
	topicsMetaDescription: (bookTitle) => `${bookTitle}-এর সব বিষয়, A থেকে Z পর্যন্ত তালিকাভুক্ত।`,
	topicsIntroPrefix: (count) => `বর্ণানুক্রমিকভাবে সব ${count}টি বিষয়। পড়ার ক্রমের জন্য দেখুন`,
	contentsLinkText: 'সূচিপত্র',
	jumpToLetter: 'অক্ষরে যান',
	searchMetaDescription: (bookTitle) => `${bookTitle}-এর সব বিষয়ে অনুসন্ধান করুন।`,
	searchIntro: (count) =>
		`শিরোনাম, অংশ, সারাংশ, এবং বিভাগ শিরোনাম দ্বারা সব ${count}টি বিষয় অনুসন্ধান করুন। সবকিছু আপনার ব্রাউজারে চলে — আপনি যা টাইপ করেন তা এই পৃষ্ঠা ছেড়ে যায় না।`,
	searchInputLabel: 'বিষয় অনুসন্ধান করুন',
	searchPlaceholder: 'DAU, ধরে রাখা, PROM সমাপ্তির হার…',
	searchHintEmptyHtml: 'অনুসন্ধান করতে টাইপ করুন। <em>DAU</em>, <em>ধরে রাখা</em>, বা <em>PROM</em> চেষ্টা করুন।',
	noResultsPrefix: 'কোনো বিষয় মেলে না ',
	noResultsMiddle: '। একটি বিস্তৃত শব্দ চেষ্টা করুন, বা ব্রাউজ করুন ',
	resultsCountSingular: 'বিষয়',
	resultsCountPlural: 'বিষয়',
	topicPosition: (index, total) => `বিষয় ${index}, মোট ${total}টির মধ্যে`,
	onThisPage: 'এই পৃষ্ঠায়',
	paginationLabel: 'বই',
	paginationPrevious: 'পূর্ববর্তী',
	paginationNext: 'পরবর্তী'
};

/** @type {Messages} */
const ko = {
	skipToContent: '본문으로 건너뛰기',
	navHome: '홈',
	navContents: '목차',
	navTopicsAZ: '주제 A–Z',
	navSearch: '검색',
	navAbout: '소개',
	footerSourceLink: '소스',
	footerTaglineSuffix:
		' — 디지털 헬스 제품을 구축, 평가, 발주하는 팀을 위한 디지털 헬스 지표 정의, 예시, 근거.',
	footerNote:
		'이 책의 수치는 빠르게 변합니다. 각 주제는 본문에 직접 기준값의 날짜를 명시합니다. 실제 비즈니스 사례에서 수치를 사용하기 전에 다시 확인하십시오.',
	pickerTheme: '테마',
	pickerLanguage: '언어',
	pickerTextSize: '글자 크기',
	pickerShare: '공유',
	pickerLinks: '링크',
	shareCopyLink: '링크 복사',
	shareCopied: '복사됨',
	shareCopyFailed: '복사 실패',
	shareEmailLabel: '이메일로 링크 보내기',
	shareLinkedinLabel: 'LinkedIn에 공유',
	shareRedditLabel: 'Reddit에 공유',
	shareBlueskyLabel: 'Bluesky에 공유',
	shareMastodonLabel: 'Mastodon에 공유',
	startHere: '여기서 시작하세요',
	startHereSubtitle: '나머지 모든 것이 기반으로 삼는 세 가지 아이디어.',
	contentsMetaDescription: (bookTitle) => `${bookTitle}의 모든 주제를 읽기 순서대로.`,
	contentsIntro: (count, parts) =>
		`읽기 순서대로 정리된 전체 ${count}개 주제, ${parts}개 부로 구성. 각 주제는 하나의 지표나 개념을 다룹니다: 정의, 중요한 이유, 계산 방법, 해결된 예시, 데이터 출처와 주의사항, 흔한 실수, 출처.`,
	topicsCountSubtitle: (n) => `${n}개 주제`,
	topicsMetaDescription: (bookTitle) => `${bookTitle}의 모든 주제를 A부터 Z까지 나열.`,
	topicsIntroPrefix: (count) => `전체 ${count}개 주제를 알파벳순으로. 읽기 순서는`,
	contentsLinkText: '목차',
	jumpToLetter: '해당 글자로 이동',
	searchMetaDescription: (bookTitle) => `${bookTitle}의 모든 주제에서 검색.`,
	searchIntro: (count) =>
		`제목, 부, 요약, 섹션 제목으로 전체 ${count}개 주제를 검색합니다. 모든 것이 브라우저 안에서 실행됩니다 — 입력한 내용은 이 페이지를 벗어나지 않습니다.`,
	searchInputLabel: '주제 검색',
	searchPlaceholder: 'DAU, 리텐션, PROM 완료율…',
	searchHintEmptyHtml: '검색하려면 입력하세요. <em>DAU</em>, <em>리텐션</em>, <em>PROM</em>을 시도해 보세요.',
	noResultsPrefix: '일치하는 주제가 없습니다: ',
	noResultsMiddle: '. 더 넓은 검색어를 시도하거나 ',
	resultsCountSingular: '개 주제',
	resultsCountPlural: '개 주제',
	topicPosition: (index, total) => `주제 ${index} / ${total}`,
	onThisPage: '이 페이지에서',
	paginationLabel: '책',
	paginationPrevious: '이전',
	paginationNext: '다음'
};

/** @type {Messages} */
const ja = {
	skipToContent: 'コンテンツへスキップ',
	navHome: 'ホーム',
	navContents: '目次',
	navTopicsAZ: 'トピック A–Z',
	navSearch: '検索',
	navAbout: 'について',
	footerSourceLink: 'ソース',
	footerTaglineSuffix:
		' — デジタルヘルス製品を構築、評価、発注するチームのためのデジタルヘルス指標の定義、例、根拠。',
	footerNote:
		'この本の数字はすぐに古くなります。各トピックは本文中でベンチマークの日付を明記しています。実際のビジネスケースで数字を使用する前に、必ず再確認してください。',
	pickerTheme: 'テーマ',
	pickerLanguage: '言語',
	pickerTextSize: '文字サイズ',
	pickerShare: '共有',
	pickerLinks: 'リンク',
	shareCopyLink: 'リンクをコピー',
	shareCopied: 'コピーしました',
	shareCopyFailed: 'コピーに失敗しました',
	shareEmailLabel: 'メールでリンクを送信',
	shareLinkedinLabel: 'LinkedInで共有',
	shareRedditLabel: 'Redditで共有',
	shareBlueskyLabel: 'Blueskyで共有',
	shareMastodonLabel: 'Mastodonで共有',
	startHere: 'ここから始める',
	startHereSubtitle: '他のすべての基盤となる3つのアイデア。',
	contentsMetaDescription: (bookTitle) => `${bookTitle}のすべてのトピックを読む順に。`,
	contentsIntro: (count, parts) =>
		`読む順に並んだ全${count}件のトピック、${parts}のパートに分割。各トピックは1つの指標または概念を扱います: 定義、重要な理由、計算方法、解決済みの例、データソースと注意点、よくある間違い、出典。`,
	topicsCountSubtitle: (n) => `${n}件のトピック`,
	topicsMetaDescription: (bookTitle) => `${bookTitle}のすべてのトピックをAからZまで一覧表示。`,
	topicsIntroPrefix: (count) => `全${count}件のトピックをアルファベット順に。読む順については`,
	contentsLinkText: '目次',
	jumpToLetter: '文字にジャンプ',
	searchMetaDescription: (bookTitle) => `${bookTitle}のすべてのトピックを検索。`,
	searchIntro: (count) =>
		`タイトル、パート、概要、セクション見出しで全${count}件のトピックを検索できます。すべてお使いのブラウザ内で実行されます — 入力した内容がこのページの外に出ることはありません。`,
	searchInputLabel: 'トピックを検索',
	searchPlaceholder: 'DAU、リテンション、PROM完了率…',
	searchHintEmptyHtml: '入力して検索してください。<em>DAU</em>、<em>リテンション</em>、<em>PROM</em>などをお試しください。',
	noResultsPrefix: '一致するトピックがありません: ',
	noResultsMiddle: '。より広い検索語を試すか、',
	resultsCountSingular: '件のトピック',
	resultsCountPlural: '件のトピック',
	topicPosition: (index, total) => `トピック ${index} / ${total}`,
	onThisPage: 'このページの内容',
	paginationLabel: '本書',
	paginationPrevious: '前へ',
	paginationNext: '次へ'
};

/** @type {Messages} */
const sv = {
	skipToContent: 'Hoppa till innehåll',
	navHome: 'Start',
	navContents: 'Innehåll',
	navTopicsAZ: 'Ämnen A–Ö',
	navSearch: 'Sök',
	navAbout: 'Om',
	footerSourceLink: 'Källa',
	footerTaglineSuffix:
		' — definitioner av digitala hälsomått, exempel och resonemang för team som bygger, utvärderar och beställer digitala hälsoprodukter.',
	footerNote:
		'Siffrorna i den här boken förändras snabbt. Varje ämne daterar sina referensvärden direkt i texten; verifiera dem igen innan du använder ett tal i ett verkligt affärsfall.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Språk',
	pickerTextSize: 'Textstorlek',
	pickerShare: 'Dela',
	pickerLinks: 'Länkar',
	shareCopyLink: 'Kopiera länk',
	shareCopied: 'Kopierad',
	shareCopyFailed: 'Kopiering misslyckades',
	shareEmailLabel: 'Skicka länk via e-post',
	shareLinkedinLabel: 'Dela på LinkedIn',
	shareRedditLabel: 'Dela på Reddit',
	shareBlueskyLabel: 'Dela på Bluesky',
	shareMastodonLabel: 'Dela på Mastodon',
	startHere: 'Börja här',
	startHereSubtitle: 'De tre idéer som allt annat bygger på.',
	contentsMetaDescription: (bookTitle) => `Alla ämnen i ${bookTitle}, i läsordning.`,
	contentsIntro: (count, parts) =>
		`Alla ${count} ämnen i läsordning, uppdelade på ${parts} delar. Varje ämne täcker ett mått eller koncept: definition, varför det spelar roll, hur det beräknas, ett löst exempel, datakällor och förbehåll, vanliga misstag och källor.`,
	topicsCountSubtitle: (n) => `${n} ämnen`,
	topicsMetaDescription: (bookTitle) => `Alla ämnen i ${bookTitle}, listade från A till Ö.`,
	topicsIntroPrefix: (count) => `Alla ${count} ämnen i alfabetisk ordning. För läsordning, se`,
	contentsLinkText: 'innehållsförteckningen',
	jumpToLetter: 'Hoppa till bokstav',
	searchMetaDescription: (bookTitle) => `Sök bland alla ämnen i ${bookTitle}.`,
	searchIntro: (count) =>
		`Sök bland alla ${count} ämnen efter titel, del, sammanfattning och avsnittsrubrik. Allt körs i din webbläsare — det du skriver lämnar aldrig den här sidan.`,
	searchInputLabel: 'Sök ämnen',
	searchPlaceholder: 'DAU, retention, PROM-slutförandegrad…',
	searchHintEmptyHtml: 'Skriv för att söka. Prova <em>DAU</em>, <em>retention</em>, eller <em>PROM</em>.',
	noResultsPrefix: 'Inget ämne matchar ',
	noResultsMiddle: '. Prova en bredare term, eller bläddra i ',
	resultsCountSingular: 'ämne',
	resultsCountPlural: 'ämnen',
	topicPosition: (index, total) => `Ämne ${index} av ${total}`,
	onThisPage: 'På den här sidan',
	paginationLabel: 'Bok',
	paginationPrevious: 'Föregående',
	paginationNext: 'Nästa'
};

/** @type {Messages} */
const nl = {
	skipToContent: 'Naar inhoud',
	navHome: 'Home',
	navContents: 'Inhoud',
	navTopicsAZ: 'Onderwerpen A–Z',
	navSearch: 'Zoeken',
	navAbout: 'Over',
	footerSourceLink: 'Bron',
	footerTaglineSuffix:
		' — definities van digitale gezondheidsmetrieken, voorbeelden en onderbouwing voor teams die digitale gezondheidsproducten bouwen, beoordelen en aanbesteden.',
	footerNote:
		'De cijfers in dit boek veranderen snel. Elk onderwerp dateert zijn referentiewaarden rechtstreeks in de tekst; controleer ze opnieuw voordat u een getal in een echte business case gebruikt.',
	pickerTheme: 'Thema',
	pickerLanguage: 'Taal',
	pickerTextSize: 'Tekstgrootte',
	pickerShare: 'Delen',
	pickerLinks: 'Links',
	shareCopyLink: 'Link kopiëren',
	shareCopied: 'Gekopieerd',
	shareCopyFailed: 'Kopiëren mislukt',
	shareEmailLabel: 'Link per e-mail versturen',
	shareLinkedinLabel: 'Delen op LinkedIn',
	shareRedditLabel: 'Delen op Reddit',
	shareBlueskyLabel: 'Delen op Bluesky',
	shareMastodonLabel: 'Delen op Mastodon',
	startHere: 'Begin hier',
	startHereSubtitle: 'De drie ideeën waarop al het andere voortbouwt.',
	contentsMetaDescription: (bookTitle) => `Alle onderwerpen in ${bookTitle}, in leesvolgorde.`,
	contentsIntro: (count, parts) =>
		`Alle ${count} onderwerpen in leesvolgorde, verdeeld over ${parts} delen. Elk onderwerp behandelt één metriek of concept: definitie, waarom het belangrijk is, hoe het wordt berekend, een uitgewerkt voorbeeld, gegevensbronnen en aandachtspunten, veelgemaakte fouten, en bronnen.`,
	topicsCountSubtitle: (n) => `${n} onderwerpen`,
	topicsMetaDescription: (bookTitle) => `Alle onderwerpen in ${bookTitle}, van A tot Z.`,
	topicsIntroPrefix: (count) => `Alle ${count} onderwerpen op alfabetische volgorde. Voor de leesvolgorde, zie de`,
	contentsLinkText: 'inhoudsopgave',
	jumpToLetter: 'Ga naar letter',
	searchMetaDescription: (bookTitle) => `Doorzoek alle onderwerpen in ${bookTitle}.`,
	searchIntro: (count) =>
		`Doorzoek alle ${count} onderwerpen op titel, deel, samenvatting en sectiekop. Alles wordt in uw browser uitgevoerd — wat u typt verlaat deze pagina nooit.`,
	searchInputLabel: 'Onderwerpen zoeken',
	searchPlaceholder: 'DAU, retentie, PROM-voltooiingspercentage…',
	searchHintEmptyHtml: 'Typ om te zoeken. Probeer <em>DAU</em>, <em>retentie</em>, of <em>PROM</em>.',
	noResultsPrefix: 'Geen onderwerp komt overeen met ',
	noResultsMiddle: '. Probeer een bredere term, of blader door de ',
	resultsCountSingular: 'onderwerp',
	resultsCountPlural: 'onderwerpen',
	topicPosition: (index, total) => `Onderwerp ${index} van ${total}`,
	onThisPage: 'Op deze pagina',
	paginationLabel: 'Boek',
	paginationPrevious: 'Vorige',
	paginationNext: 'Volgende'
};

/** @type {Messages} */
const ur = {
	skipToContent: 'مواد کی طرف جائیں',
	navHome: 'ہوم',
	navContents: 'مشمولات',
	navTopicsAZ: 'موضوعات A–Z',
	navSearch: 'تلاش',
	navAbout: 'تعارف',
	footerSourceLink: 'ماخذ',
	footerTaglineSuffix:
		' — ڈیجیٹل ہیلتھ میٹرک کی تعریفات، مثالیں، اور استدلال، ان ٹیموں کے لیے جو ڈیجیٹل ہیلتھ پروڈکٹس تعمیر، جانچ، اور تفویض کرتی ہیں۔',
	footerNote:
		'اس کتاب میں اعداد جلد پرانے ہو جاتے ہیں۔ ہر موضوع اپنے بینچ مارکس کو متن میں ہی تاریخ کے ساتھ بیان کرتا ہے؛ کسی بھی عدد کو حقیقی بزنس کیس میں استعمال کرنے سے پہلے دوبارہ تصدیق کریں۔',
	pickerTheme: 'تھیم',
	pickerLanguage: 'زبان',
	pickerTextSize: 'متن کا سائز',
	pickerShare: 'شیئر کریں',
	pickerLinks: 'روابط',
	shareCopyLink: 'لنک کاپی کریں',
	shareCopied: 'کاپی ہو گیا',
	shareCopyFailed: 'کاپی ناکام',
	shareEmailLabel: 'ای میل لنک',
	shareLinkedinLabel: 'LinkedIn پر شیئر کریں',
	shareRedditLabel: 'Reddit پر شیئر کریں',
	shareBlueskyLabel: 'Bluesky پر شیئر کریں',
	shareMastodonLabel: 'Mastodon پر شیئر کریں',
	startHere: 'یہاں سے شروع کریں',
	startHereSubtitle: 'وہ تین خیالات جن پر باقی سب کچھ تعمیر ہوتا ہے۔',
	contentsMetaDescription: (bookTitle) => `${bookTitle} کا ہر موضوع، پڑھنے کی ترتیب میں۔`,
	contentsIntro: (count, parts) =>
		`تمام ${count} موضوعات پڑھنے کی ترتیب میں، ${parts} حصوں میں۔ ہر موضوع ایک میٹرک یا تصور کا احاطہ کرتا ہے: تعریف، یہ کیوں اہم ہے، اسے کیسے شمار کیا جاتا ہے، ایک عملی مثال، ڈیٹا کے ذرائع اور احتیاطیں، نقصانات، اور ذرائع۔`,
	topicsCountSubtitle: (n) => `${n} موضوعات`,
	topicsMetaDescription: (bookTitle) => `${bookTitle} کا ہر موضوع، A سے Z تک درج۔`,
	topicsIntroPrefix: (count) => `تمام ${count} موضوعات حروف تہجی کی ترتیب میں۔ پڑھنے کی ترتیب کے لیے، دیکھیں`,
	contentsLinkText: 'مشمولات',
	jumpToLetter: 'حرف پر جائیں',
	searchMetaDescription: (bookTitle) => `${bookTitle} کے ہر موضوع کو تلاش کریں۔`,
	searchIntro: (count) =>
		`تمام ${count} موضوعات کو عنوان، حصہ، خلاصہ، اور سیکشن کی سرخی سے تلاش کریں۔ ہر چیز آپ کے براؤزر میں چلتی ہے — جو کچھ آپ ٹائپ کرتے ہیں وہ اس صفحے سے کبھی باہر نہیں جاتا۔`,
	searchInputLabel: 'موضوعات تلاش کریں',
	searchPlaceholder: 'DAU، برقراری، PROM تکمیل کی شرح…',
	searchHintEmptyHtml: 'تلاش کے لیے ٹائپ کریں۔ آزمائیں <em>DAU</em>، <em>برقراری</em>، یا <em>PROM</em>۔',
	noResultsPrefix: 'کوئی موضوع مطابقت نہیں رکھتا ',
	noResultsMiddle: '۔ ایک وسیع اصطلاح آزمائیں، یا براؤز کریں ',
	resultsCountSingular: 'موضوع',
	resultsCountPlural: 'موضوعات',
	topicPosition: (index, total) => `موضوع ${index} از ${total}`,
	onThisPage: 'اس صفحے پر',
	paginationLabel: 'کتاب',
	paginationPrevious: 'پچھلا',
	paginationNext: 'اگلا'
};

/** @type {Messages} */
const id = {
	skipToContent: 'Lewati ke konten',
	navHome: 'Beranda',
	navContents: 'Daftar Isi',
	navTopicsAZ: 'Topik A–Z',
	navSearch: 'Cari',
	navAbout: 'Tentang',
	footerSourceLink: 'Sumber',
	footerTaglineSuffix:
		' — definisi, contoh, dan penalaran metrik kesehatan digital untuk tim yang membangun, mengevaluasi, dan menugaskan produk kesehatan digital.',
	footerNote:
		'Angka dalam buku ini cepat berubah. Setiap topik mencantumkan tanggal tolok ukurnya secara langsung; verifikasi ulang sebelum menggunakan angka apa pun dalam kasus bisnis nyata.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Bahasa',
	pickerTextSize: 'Ukuran teks',
	pickerShare: 'Bagikan',
	pickerLinks: 'Tautan',
	shareCopyLink: 'Salin tautan',
	shareCopied: 'Disalin',
	shareCopyFailed: 'Gagal menyalin',
	shareEmailLabel: 'Tautan Email',
	shareLinkedinLabel: 'Bagikan di LinkedIn',
	shareRedditLabel: 'Bagikan di Reddit',
	shareBlueskyLabel: 'Bagikan di Bluesky',
	shareMastodonLabel: 'Bagikan di Mastodon',
	startHere: 'Mulai di sini',
	startHereSubtitle: 'Tiga gagasan yang menjadi dasar semua hal lainnya.',
	contentsMetaDescription: (bookTitle) => `Setiap topik dalam ${bookTitle}, dalam urutan baca.`,
	contentsIntro: (count, parts) =>
		`Semua ${count} topik dalam urutan baca, di ${parts} bagian. Setiap topik mencakup satu metrik atau konsep: definisi, mengapa itu penting, cara menghitungnya, contoh penerapan, sumber data dan peringatan, kesalahan umum, dan sumber.`,
	topicsCountSubtitle: (n) => `${n} topik`,
	topicsMetaDescription: (bookTitle) => `Setiap topik dalam ${bookTitle}, terdaftar dari A hingga Z.`,
	topicsIntroPrefix: (count) => `Semua ${count} topik dalam urutan abjad. Untuk urutan baca, lihat`,
	contentsLinkText: 'daftar isi',
	jumpToLetter: 'Lompat ke huruf',
	searchMetaDescription: (bookTitle) => `Cari setiap topik dalam ${bookTitle}.`,
	searchIntro: (count) =>
		`Cari semua ${count} topik berdasarkan judul, bagian, ringkasan, dan judul bagian. Semuanya berjalan di browser Anda — apa pun yang Anda ketik tidak pernah meninggalkan halaman ini.`,
	searchInputLabel: 'Cari topik',
	searchPlaceholder: 'DAU, retensi, tingkat penyelesaian PROM…',
	searchHintEmptyHtml: 'Ketik untuk mencari. Coba <em>DAU</em>, <em>retensi</em>, atau <em>PROM</em>.',
	noResultsPrefix: 'Tidak ada topik yang cocok dengan ',
	noResultsMiddle: '. Coba istilah yang lebih luas, atau jelajahi ',
	resultsCountSingular: 'topik',
	resultsCountPlural: 'topik',
	topicPosition: (index, total) => `Topik ${index} dari ${total}`,
	onThisPage: 'Di halaman ini',
	paginationLabel: 'Buku',
	paginationPrevious: 'Sebelumnya',
	paginationNext: 'Berikutnya'
};

/** @type {Messages} */
const it = {
	skipToContent: 'Vai al contenuto',
	navHome: 'Home',
	navContents: 'Indice',
	navTopicsAZ: 'Argomenti A–Z',
	navSearch: 'Cerca',
	navAbout: 'Informazioni',
	footerSourceLink: 'Origine',
	footerTaglineSuffix:
		' — definizioni, esempi e ragionamenti sulle metriche di salute digitale per i team che costruiscono, valutano e commissionano prodotti di salute digitale.',
	footerNote:
		'Le cifre in questo libro diventano rapidamente obsolete. Ogni argomento indica la data dei propri parametri di riferimento direttamente nel testo; riverificare prima di utilizzare qualsiasi numero in un caso aziendale reale.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Lingua',
	pickerTextSize: 'Dimensione testo',
	pickerShare: 'Condividi',
	pickerLinks: 'Link',
	shareCopyLink: 'Copia link',
	shareCopied: 'Copiato',
	shareCopyFailed: 'Copia non riuscita',
	shareEmailLabel: 'Invia link via email',
	shareLinkedinLabel: 'Condividi su LinkedIn',
	shareRedditLabel: 'Condividi su Reddit',
	shareBlueskyLabel: 'Condividi su Bluesky',
	shareMastodonLabel: 'Condividi su Mastodon',
	startHere: 'Inizia qui',
	startHereSubtitle: 'Le tre idee su cui si basa tutto il resto.',
	contentsMetaDescription: (bookTitle) => `Ogni argomento in ${bookTitle}, in ordine di lettura.`,
	contentsIntro: (count, parts) =>
		`Tutti i ${count} argomenti in ordine di lettura, suddivisi in ${parts} parti. Ogni argomento tratta una metrica o un concetto: definizione, perché è importante, come si calcola, un esempio pratico, fonti dei dati e avvertenze, insidie e fonti.`,
	topicsCountSubtitle: (n) => `${n} argomenti`,
	topicsMetaDescription: (bookTitle) => `Ogni argomento in ${bookTitle}, elencato dalla A alla Z.`,
	topicsIntroPrefix: (count) => `Tutti i ${count} argomenti in ordine alfabetico. Per l'ordine di lettura, vedere l'`,
	contentsLinkText: 'indice',
	jumpToLetter: 'Vai alla lettera',
	searchMetaDescription: (bookTitle) => `Cerca ogni argomento in ${bookTitle}.`,
	searchIntro: (count) =>
		`Cerca tutti i ${count} argomenti per titolo, parte, riepilogo e titolo di sezione. Tutto viene eseguito nel tuo browser — ciò che digiti non lascia mai questa pagina.`,
	searchInputLabel: 'Cerca argomenti',
	searchPlaceholder: 'DAU, retention, tasso di completamento PROM…',
	searchHintEmptyHtml: 'Digita per cercare. Prova <em>DAU</em>, <em>retention</em>, o <em>PROM</em>.',
	noResultsPrefix: 'Nessun argomento corrisponde a ',
	noResultsMiddle: '. Prova un termine più ampio, oppure sfoglia l\'',
	resultsCountSingular: 'argomento',
	resultsCountPlural: 'argomenti',
	topicPosition: (index, total) => `Argomento ${index} di ${total}`,
	onThisPage: 'In questa pagina',
	paginationLabel: 'Libro',
	paginationPrevious: 'Precedente',
	paginationNext: 'Successivo'
};

/** @type {Messages} */
const uk = {
	skipToContent: 'Перейти до вмісту',
	navHome: 'Головна',
	navContents: 'Зміст',
	navTopicsAZ: 'Теми А–Я',
	navSearch: 'Пошук',
	navAbout: 'Про проєкт',
	footerSourceLink: 'Джерело',
	footerTaglineSuffix:
		' — визначення, приклади та обґрунтування метрик цифрового здоров\'я для команд, які створюють, оцінюють та замовляють продукти цифрового здоров\'я.',
	footerNote:
		'Цифри в цій книзі швидко застарівають. Кожна тема вказує дату своїх контрольних показників безпосередньо в тексті; перевіряйте повторно, перш ніж використовувати будь-яке число в реальному бізнес-кейсі.',
	pickerTheme: 'Тема',
	pickerLanguage: 'Мова',
	pickerTextSize: 'Розмір тексту',
	pickerShare: 'Поділитися',
	pickerLinks: 'Посилання',
	shareCopyLink: 'Копіювати посилання',
	shareCopied: 'Скопійовано',
	shareCopyFailed: 'Не вдалося скопіювати',
	shareEmailLabel: 'Надіслати посилання електронною поштою',
	shareLinkedinLabel: 'Поділитися в LinkedIn',
	shareRedditLabel: 'Поділитися в Reddit',
	shareBlueskyLabel: 'Поділитися в Bluesky',
	shareMastodonLabel: 'Поділитися в Mastodon',
	startHere: 'Почніть тут',
	startHereSubtitle: 'Три ідеї, на яких базується все інше.',
	contentsMetaDescription: (bookTitle) => `Кожна тема в ${bookTitle}, у порядку читання.`,
	contentsIntro: (count, parts) =>
		`Усі ${count} тем у порядку читання, у ${parts} частинах. Кожна тема охоплює одну метрику або концепцію: визначення, чому це важливо, як це обчислюється, практичний приклад, джерела даних і застереження, пастки та джерела.`,
	topicsCountSubtitle: (n) => `${n} тем`,
	topicsMetaDescription: (bookTitle) => `Кожна тема в ${bookTitle}, перелічена від А до Я.`,
	topicsIntroPrefix: (count) => `Усі ${count} тем в алфавітному порядку. Для порядку читання див.`,
	contentsLinkText: 'зміст',
	jumpToLetter: 'Перейти до букви',
	searchMetaDescription: (bookTitle) => `Шукайте кожну тему в ${bookTitle}.`,
	searchIntro: (count) =>
		`Шукайте всі ${count} тем за назвою, частиною, підсумком і заголовком розділу. Усе працює у вашому браузері — те, що ви вводите, ніколи не залишає цю сторінку.`,
	searchInputLabel: 'Пошук тем',
	searchPlaceholder: 'DAU, утримання, показник завершення PROM…',
	searchHintEmptyHtml: 'Введіть текст для пошуку. Спробуйте <em>DAU</em>, <em>утримання</em>, або <em>PROM</em>.',
	noResultsPrefix: 'Жодна тема не відповідає ',
	noResultsMiddle: '. Спробуйте ширший термін або перегляньте ',
	resultsCountSingular: 'тема',
	resultsCountPlural: 'теми',
	topicPosition: (index, total) => `Тема ${index} з ${total}`,
	onThisPage: 'На цій сторінці',
	paginationLabel: 'Книга',
	paginationPrevious: 'Попередня',
	paginationNext: 'Наступна'
};

/** @type {Messages} */
const fi = {
	skipToContent: 'Siirry sisältöön',
	navHome: 'Etusivu',
	navContents: 'Sisällys',
	navTopicsAZ: 'Aiheet A–Ö',
	navSearch: 'Haku',
	navAbout: 'Tietoa',
	footerSourceLink: 'Lähde',
	footerTaglineSuffix:
		' — digitaalisen terveydenhuollon mittareiden määritelmiä, esimerkkejä ja perusteluja tiimeille, jotka rakentavat, arvioivat ja tilaavat digitaalisia terveystuotteita.',
	footerNote:
		'Tämän kirjan luvut vanhenevat nopeasti. Jokainen aihe päivämäärittää vertailuarvonsa suoraan tekstissä; tarkista ne uudelleen ennen kuin käytät lukua todellisessa liiketoimintatapauksessa.',
	pickerTheme: 'Teema',
	pickerLanguage: 'Kieli',
	pickerTextSize: 'Tekstin koko',
	pickerShare: 'Jaa',
	pickerLinks: 'Linkit',
	shareCopyLink: 'Kopioi linkki',
	shareCopied: 'Kopioitu',
	shareCopyFailed: 'Kopiointi epäonnistui',
	shareEmailLabel: 'Lähetä linkki sähköpostitse',
	shareLinkedinLabel: 'Jaa LinkedInissä',
	shareRedditLabel: 'Jaa Redditissä',
	shareBlueskyLabel: 'Jaa Blueskyssä',
	shareMastodonLabel: 'Jaa Mastodonissa',
	startHere: 'Aloita tästä',
	startHereSubtitle: 'Kolme ideaa, joille kaikki muu rakentuu.',
	contentsMetaDescription: (bookTitle) => `Jokainen aihe teoksessa ${bookTitle}, lukujärjestyksessä.`,
	contentsIntro: (count, parts) =>
		`Kaikki ${count} aihetta lukujärjestyksessä, ${parts} osassa. Jokainen aihe kattaa yhden mittarin tai käsitteen: määritelmän, miksi se on tärkeää, miten se lasketaan, käytännön esimerkin, tietolähteet ja varaukset, sudenkuopat sekä lähteet.`,
	topicsCountSubtitle: (n) => `${n} aihetta`,
	topicsMetaDescription: (bookTitle) => `Jokainen aihe teoksessa ${bookTitle}, aakkosjärjestyksessä.`,
	topicsIntroPrefix: (count) => `Kaikki ${count} aihetta aakkosjärjestyksessä. Lukujärjestystä varten katso`,
	contentsLinkText: 'sisällys',
	jumpToLetter: 'Siirry kirjaimeen',
	searchMetaDescription: (bookTitle) => `Hae jokaista aihetta teoksessa ${bookTitle}.`,
	searchIntro: (count) =>
		`Hae kaikkia ${count} aihetta otsikon, osan, yhteenvedon ja osion otsikon perusteella. Kaikki toimii selaimessasi — mitään kirjoittamaasi ei koskaan lähetetä pois tältä sivulta.`,
	searchInputLabel: 'Hae aiheita',
	searchPlaceholder: 'DAU, säilyttäminen, PROM-suoritusaste…',
	searchHintEmptyHtml: 'Kirjoita hakeaksesi. Kokeile <em>DAU</em>, <em>säilyttäminen</em>, tai <em>PROM</em>.',
	noResultsPrefix: 'Yksikään aihe ei vastaa hakua ',
	noResultsMiddle: '. Kokeile laajempaa termiä tai selaa ',
	resultsCountSingular: 'aihe',
	resultsCountPlural: 'aihetta',
	topicPosition: (index, total) => `Aihe ${index}/${total}`,
	onThisPage: 'Tällä sivulla',
	paginationLabel: 'Kirja',
	paginationPrevious: 'Edellinen',
	paginationNext: 'Seuraava'
};

/** @type {Messages} */
const no = {
	skipToContent: 'Hopp til innhold',
	navHome: 'Hjem',
	navContents: 'Innhold',
	navTopicsAZ: 'Emner A–Å',
	navSearch: 'Søk',
	navAbout: 'Om',
	footerSourceLink: 'Kilde',
	footerTaglineSuffix:
		' — definisjoner, eksempler og resonnement om digitale helsemetrikker for team som bygger, evaluerer og bestiller digitale helseprodukter.',
	footerNote:
		'Tallene i denne boken blir raskt utdaterte. Hvert emne daterer sine referanseverdier direkte i teksten; verifiser på nytt før du bruker et tall i en reell forretningscase.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Språk',
	pickerTextSize: 'Tekststørrelse',
	pickerShare: 'Del',
	pickerLinks: 'Lenker',
	shareCopyLink: 'Kopier lenke',
	shareCopied: 'Kopiert',
	shareCopyFailed: 'Kopiering mislyktes',
	shareEmailLabel: 'Send lenke på e-post',
	shareLinkedinLabel: 'Del på LinkedIn',
	shareRedditLabel: 'Del på Reddit',
	shareBlueskyLabel: 'Del på Bluesky',
	shareMastodonLabel: 'Del på Mastodon',
	startHere: 'Start her',
	startHereSubtitle: 'De tre ideene alt annet bygger på.',
	contentsMetaDescription: (bookTitle) => `Hvert emne i ${bookTitle}, i leserekkefølge.`,
	contentsIntro: (count, parts) =>
		`Alle ${count} emner i leserekkefølge, fordelt på ${parts} deler. Hvert emne dekker én metrikk eller ett konsept: definisjon, hvorfor det er viktig, hvordan det beregnes, et gjennomarbeidet eksempel, datakilder og forbehold, fallgruver og kilder.`,
	topicsCountSubtitle: (n) => `${n} emner`,
	topicsMetaDescription: (bookTitle) => `Hvert emne i ${bookTitle}, oppført fra A til Å.`,
	topicsIntroPrefix: (count) => `Alle ${count} emner i alfabetisk rekkefølge. For leserekkefølge, se`,
	contentsLinkText: 'innholdsfortegnelsen',
	jumpToLetter: 'Hopp til bokstav',
	searchMetaDescription: (bookTitle) => `Søk i hvert emne i ${bookTitle}.`,
	searchIntro: (count) =>
		`Søk i alle ${count} emner etter tittel, del, sammendrag og seksjonsoverskrift. Alt kjører i nettleseren din — det du skriver forlater aldri denne siden.`,
	searchInputLabel: 'Søk i emner',
	searchPlaceholder: 'DAU, retensjon, PROM-fullføringsrate…',
	searchHintEmptyHtml: 'Skriv for å søke. Prøv <em>DAU</em>, <em>retensjon</em>, eller <em>PROM</em>.',
	noResultsPrefix: 'Ingen emner samsvarer med ',
	noResultsMiddle: '. Prøv et bredere begrep, eller bla gjennom ',
	resultsCountSingular: 'emne',
	resultsCountPlural: 'emner',
	topicPosition: (index, total) => `Emne ${index} av ${total}`,
	onThisPage: 'På denne siden',
	paginationLabel: 'Bok',
	paginationPrevious: 'Forrige',
	paginationNext: 'Neste'
};

/** @type {Messages} */
const da = {
	skipToContent: 'Gå til indhold',
	navHome: 'Hjem',
	navContents: 'Indhold',
	navTopicsAZ: 'Emner A–Å',
	navSearch: 'Søg',
	navAbout: 'Om',
	footerSourceLink: 'Kilde',
	footerTaglineSuffix:
		' — definitioner, eksempler og ræsonnementer om digitale sundhedsmetrikker for teams, der bygger, evaluerer og bestiller digitale sundhedsprodukter.',
	footerNote:
		'Tallene i denne bog bliver hurtigt forældede. Hvert emne daterer sine benchmarks direkte i teksten; genbekræft, før du bruger et tal i en reel forretningscase.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Sprog',
	pickerTextSize: 'Tekststørrelse',
	pickerShare: 'Del',
	pickerLinks: 'Links',
	shareCopyLink: 'Kopiér link',
	shareCopied: 'Kopieret',
	shareCopyFailed: 'Kopiering mislykkedes',
	shareEmailLabel: 'Send link via e-mail',
	shareLinkedinLabel: 'Del på LinkedIn',
	shareRedditLabel: 'Del på Reddit',
	shareBlueskyLabel: 'Del på Bluesky',
	shareMastodonLabel: 'Del på Mastodon',
	startHere: 'Start her',
	startHereSubtitle: 'De tre ideer, som alt andet bygger på.',
	contentsMetaDescription: (bookTitle) => `Hvert emne i ${bookTitle}, i læserækkefølge.`,
	contentsIntro: (count, parts) =>
		`Alle ${count} emner i læserækkefølge, fordelt på ${parts} dele. Hvert emne dækker én metrik eller ét koncept: definition, hvorfor det er vigtigt, hvordan det beregnes, et gennemarbejdet eksempel, datakilder og forbehold, faldgruber og kilder.`,
	topicsCountSubtitle: (n) => `${n} emner`,
	topicsMetaDescription: (bookTitle) => `Hvert emne i ${bookTitle}, angivet fra A til Å.`,
	topicsIntroPrefix: (count) => `Alle ${count} emner i alfabetisk rækkefølge. For læserækkefølge, se`,
	contentsLinkText: 'indholdsfortegnelsen',
	jumpToLetter: 'Gå til bogstav',
	searchMetaDescription: (bookTitle) => `Søg i hvert emne i ${bookTitle}.`,
	searchIntro: (count) =>
		`Søg i alle ${count} emner efter titel, del, resumé og sektionsoverskrift. Alt kører i din browser — det, du skriver, forlader aldrig denne side.`,
	searchInputLabel: 'Søg emner',
	searchPlaceholder: 'DAU, fastholdelse, PROM-fuldførelsesrate…',
	searchHintEmptyHtml: 'Skriv for at søge. Prøv <em>DAU</em>, <em>fastholdelse</em>, eller <em>PROM</em>.',
	noResultsPrefix: 'Intet emne matcher ',
	noResultsMiddle: '. Prøv en bredere term, eller gennemse ',
	resultsCountSingular: 'emne',
	resultsCountPlural: 'emner',
	topicPosition: (index, total) => `Emne ${index} af ${total}`,
	onThisPage: 'På denne side',
	paginationLabel: 'Bog',
	paginationPrevious: 'Forrige',
	paginationNext: 'Næste'
};

/** @type {Messages} */
const pl = {
	skipToContent: 'Przejdź do treści',
	navHome: 'Strona główna',
	navContents: 'Spis treści',
	navTopicsAZ: 'Tematy A–Z',
	navSearch: 'Szukaj',
	navAbout: 'O projekcie',
	footerSourceLink: 'Źródło',
	footerTaglineSuffix:
		' — definicje, przykłady i uzasadnienia metryk zdrowia cyfrowego dla zespołów budujących, oceniających i zlecających produkty zdrowia cyfrowego.',
	footerNote:
		'Liczby w tej książce szybko się dezaktualizują. Każdy temat datuje swoje wartości odniesienia bezpośrednio w tekście; zweryfikuj ponownie przed użyciem jakiejkolwiek liczby w rzeczywistym uzasadnieniu biznesowym.',
	pickerTheme: 'Motyw',
	pickerLanguage: 'Język',
	pickerTextSize: 'Rozmiar tekstu',
	pickerShare: 'Udostępnij',
	pickerLinks: 'Łącza',
	shareCopyLink: 'Kopiuj link',
	shareCopied: 'Skopiowano',
	shareCopyFailed: 'Kopiowanie nie powiodło się',
	shareEmailLabel: 'Wyślij link e-mailem',
	shareLinkedinLabel: 'Udostępnij na LinkedIn',
	shareRedditLabel: 'Udostępnij na Reddit',
	shareBlueskyLabel: 'Udostępnij na Bluesky',
	shareMastodonLabel: 'Udostępnij na Mastodon',
	startHere: 'Zacznij tutaj',
	startHereSubtitle: 'Trzy idee, na których opiera się wszystko inne.',
	contentsMetaDescription: (bookTitle) => `Każdy temat w ${bookTitle}, w kolejności czytania.`,
	contentsIntro: (count, parts) =>
		`Wszystkie ${count} tematy w kolejności czytania, w ${parts} częściach. Każdy temat obejmuje jedną metrykę lub koncepcję: definicję, dlaczego to ważne, jak to się oblicza, praktyczny przykład, źródła danych i zastrzeżenia, pułapki oraz źródła.`,
	topicsCountSubtitle: (n) => `${n} tematów`,
	topicsMetaDescription: (bookTitle) => `Każdy temat w ${bookTitle}, wymieniony od A do Z.`,
	topicsIntroPrefix: (count) => `Wszystkie ${count} tematy w porządku alfabetycznym. Aby zobaczyć kolejność czytania, zobacz`,
	contentsLinkText: 'spis treści',
	jumpToLetter: 'Przejdź do litery',
	searchMetaDescription: (bookTitle) => `Przeszukaj każdy temat w ${bookTitle}.`,
	searchIntro: (count) =>
		`Przeszukaj wszystkie ${count} tematy według tytułu, części, podsumowania i nagłówka sekcji. Wszystko działa w Twojej przeglądarce — to, co wpisujesz, nigdy nie opuszcza tej strony.`,
	searchInputLabel: 'Szukaj tematów',
	searchPlaceholder: 'DAU, retencja, wskaźnik ukończenia PROM…',
	searchHintEmptyHtml: 'Wpisz, aby wyszukać. Spróbuj <em>DAU</em>, <em>retencja</em>, lub <em>PROM</em>.',
	noResultsPrefix: 'Żaden temat nie pasuje do ',
	noResultsMiddle: '. Spróbuj szerszego terminu lub przeglądaj ',
	resultsCountSingular: 'temat',
	resultsCountPlural: 'tematy',
	topicPosition: (index, total) => `Temat ${index} z ${total}`,
	onThisPage: 'Na tej stronie',
	paginationLabel: 'Książka',
	paginationPrevious: 'Poprzedni',
	paginationNext: 'Następny'
};

/** @type {Record<string, Messages>} */
/** @type {Messages} */
const vi = {
	skipToContent: 'Bỏ qua đến nội dung',
	navHome: 'Trang chủ',
	navContents: 'Mục lục',
	navTopicsAZ: 'Chủ đề A–Z',
	navSearch: 'Tìm kiếm',
	navAbout: 'Giới thiệu',
	footerSourceLink: 'Nguồn',
	footerTaglineSuffix:
		' — định nghĩa, ví dụ, và lý giải về các chỉ số sức khỏe kỹ thuật số dành cho các đội ngũ xây dựng, đánh giá, và ủy quyền các sản phẩm sức khỏe kỹ thuật số.',
	footerNote:
		'Các con số trong cuốn sách này nhanh chóng trở nên lỗi thời. Mỗi chủ đề liệt kê ngày của các chuẩn mực của nó ngay trong văn bản; hãy xác minh lại trước khi sử dụng bất kỳ con số nào trong một trường hợp kinh doanh thực tế.',
	pickerTheme: 'Chủ đề giao diện',
	pickerLanguage: 'Ngôn ngữ',
	pickerTextSize: 'Cỡ chữ',
	pickerShare: 'Chia sẻ',
	pickerLinks: 'Liên kết',
	shareCopyLink: 'Sao chép liên kết',
	shareCopied: 'Đã sao chép',
	shareCopyFailed: 'Sao chép thất bại',
	shareEmailLabel: 'Liên kết Email',
	shareLinkedinLabel: 'Chia sẻ trên LinkedIn',
	shareRedditLabel: 'Chia sẻ trên Reddit',
	shareBlueskyLabel: 'Chia sẻ trên Bluesky',
	shareMastodonLabel: 'Chia sẻ trên Mastodon',
	startHere: 'Bắt đầu ở đây',
	startHereSubtitle: 'Ba ý tưởng mà mọi thứ khác đều dựa trên đó.',
	contentsMetaDescription: (bookTitle) => `Mọi chủ đề trong ${bookTitle}, theo thứ tự đọc.`,
	contentsIntro: (count, parts) =>
		`Tất cả ${count} chủ đề theo thứ tự đọc, trong ${parts} phần. Mỗi chủ đề bao gồm một chỉ số hoặc khái niệm: định nghĩa, tại sao nó quan trọng, cách tính toán nó, một ví dụ tính toán, nguồn dữ liệu và lưu ý, những cạm bẫy thường gặp, và nguồn.`,
	topicsCountSubtitle: (n) => `${n} chủ đề`,
	topicsMetaDescription: (bookTitle) => `Mọi chủ đề trong ${bookTitle}, được liệt kê từ A đến Z.`,
	topicsIntroPrefix: (count) => `Tất cả ${count} chủ đề theo thứ tự bảng chữ cái. Để xem theo thứ tự đọc, xem`,
	contentsLinkText: 'mục lục',
	jumpToLetter: 'Nhảy đến chữ cái',
	searchMetaDescription: (bookTitle) => `Tìm kiếm mọi chủ đề trong ${bookTitle}.`,
	searchIntro: (count) =>
		`Tìm kiếm tất cả ${count} chủ đề theo tiêu đề, phần, tóm tắt, và tiêu đề mục. Mọi thứ chạy trong trình duyệt của bạn — bất cứ điều gì bạn gõ không bao giờ rời khỏi trang này.`,
	searchInputLabel: 'Tìm kiếm chủ đề',
	searchPlaceholder: 'DAU, giữ chân, tỷ lệ hoàn thành PROM…',
	searchHintEmptyHtml: 'Gõ để tìm kiếm. Hãy thử <em>DAU</em>, <em>giữ chân</em>, hoặc <em>PROM</em>.',
	noResultsPrefix: 'Không có chủ đề nào khớp với ',
	noResultsMiddle: '. Hãy thử một thuật ngữ rộng hơn, hoặc duyệt qua ',
	resultsCountSingular: 'chủ đề',
	resultsCountPlural: 'chủ đề',
	topicPosition: (index, total) => `Chủ đề ${index} trong số ${total}`,
	onThisPage: 'Trên trang này',
	paginationLabel: 'Sách',
	paginationPrevious: 'Trước',
	paginationNext: 'Tiếp theo'
};

const et = {
	skipToContent: 'Liigu sisu juurde',
	navHome: 'Avaleht',
	navContents: 'Sisukord',
	navTopicsAZ: 'Teemad A–Z',
	navSearch: 'Otsing',
	navAbout: 'Teave',
	footerSourceLink: 'Lähtekood',
	footerTaglineSuffix:
		' — digitaalse tervishoiu mõõdikute definitsioonid, näited ja selgitused meeskondadele, kes ehitavad, haldavad ja hindavad digitaalseid terviseprodukte.',
	footerNote:
		'Selle raamatu arvud vananevad kiiresti. Iga teema märgib oma võrdlusaluste kuupäeva otse tekstis; kontrolli neid uuesti enne, kui kasutad mõnda arvu tegelikus äriotsuses.',
	pickerTheme: 'Teema',
	pickerLanguage: 'Keel',
	pickerTextSize: 'Teksti suurus',
	pickerShare: 'Jaga',
	pickerLinks: 'Lingid',
	shareCopyLink: 'Kopeeri link',
	shareCopied: 'Kopeeritud',
	shareCopyFailed: 'Kopeerimine ebaõnnestus',
	shareEmailLabel: 'E-posti link',
	shareLinkedinLabel: 'Jaga LinkedInis',
	shareRedditLabel: 'Jaga Redditis',
	shareBlueskyLabel: 'Jaga Blueskyl',
	shareMastodonLabel: 'Jaga Mastodonis',
	startHere: 'Alusta siit',
	startHereSubtitle: 'Kolm ideed, millel kõik muu põhineb.',
	contentsMetaDescription: (bookTitle) => `Iga teema raamatus ${bookTitle}, lugemisjärjekorras.`,
	contentsIntro: (count, parts) =>
		`Kõik ${count} teemat lugemisjärjekorras, ${parts} osas. Iga teema käsitleb ühte mõõdikut või mõistet: definitsioon, miks see on oluline, kuidas seda arvutada, läbitöötatud näide, andmeallikad ja hoiatused, levinud lõksud ning allikad.`,
	topicsCountSubtitle: (n) => `${n} teemat`,
	topicsMetaDescription: (bookTitle) => `Iga teema raamatus ${bookTitle}, loetletud tähestikulises järjekorras.`,
	topicsIntroPrefix: (count) => `Kõik ${count} teemat tähestikulises järjekorras. Lugemisjärjekorra nägemiseks vaata`,
	contentsLinkText: 'sisukorda',
	jumpToLetter: 'Hüppa tähe juurde',
	searchMetaDescription: (bookTitle) => `Otsi iga teemat raamatust ${bookTitle}.`,
	searchIntro: (count) =>
		`Otsi kõiki ${count} teemat pealkirja, osa, kokkuvõtte ja alapealkirjade järgi. Kõik toimub sinu brauseris — see, mida sa sisestad, ei lahku kunagi sellelt lehelt.`,
	searchInputLabel: 'Otsi teemasid',
	searchPlaceholder: 'DAU, püsimus, PROM-i täitmismäär…',
	searchHintEmptyHtml: 'Kirjuta otsimiseks. Proovi <em>DAU</em>, <em>püsimus</em> või <em>PROM</em>.',
	noResultsPrefix: 'Ühtegi teemat ei vastanud päringule ',
	noResultsMiddle: '. Proovi laiemat terminit või sirvi ',
	resultsCountSingular: 'teema',
	resultsCountPlural: 'teemat',
	topicPosition: (index, total) => `Teema ${index} / ${total}`,
	onThisPage: 'Sellel lehel',
	paginationLabel: 'Raamat',
	paginationPrevious: 'Eelmine',
	paginationNext: 'Järgmine'
};

const th = {
	skipToContent: 'ข้ามไปยังเนื้อหา',
	navHome: 'หน้าแรก',
	navContents: 'สารบัญ',
	navTopicsAZ: 'หัวข้อ ก-ฮ',
	navSearch: 'ค้นหา',
	navAbout: 'เกี่ยวกับ',
	footerSourceLink: 'ซอร์สโค้ด',
	footerTaglineSuffix:
		' — คำนิยาม ตัวอย่าง และคำอธิบายตัวชี้วัดด้านสุขภาพดิจิทัล สำหรับทีมที่สร้าง จัดการ และประเมินผลิตภัณฑ์สุขภาพดิจิทัล',
	footerNote:
		'ตัวเลขในหนังสือเล่มนี้ล้าสมัยได้อย่างรวดเร็ว แต่ละหัวข้อระบุวันที่ของเกณฑ์มาตรฐานไว้ในเนื้อหาโดยตรง โปรดตรวจสอบอีกครั้งก่อนนำตัวเลขใดๆ ไปใช้ในกรณีธุรกิจจริง',
	pickerTheme: 'ธีม',
	pickerLanguage: 'ภาษา',
	pickerTextSize: 'ขนาดตัวอักษร',
	pickerShare: 'แชร์',
	pickerLinks: 'ลิงก์',
	shareCopyLink: 'คัดลอกลิงก์',
	shareCopied: 'คัดลอกแล้ว',
	shareCopyFailed: 'คัดลอกไม่สำเร็จ',
	shareEmailLabel: 'ลิงก์อีเมล',
	shareLinkedinLabel: 'แชร์บน LinkedIn',
	shareRedditLabel: 'แชร์บน Reddit',
	shareBlueskyLabel: 'แชร์บน Bluesky',
	shareMastodonLabel: 'แชร์บน Mastodon',
	startHere: 'เริ่มที่นี่',
	startHereSubtitle: 'สามแนวคิดที่ทุกอย่างอื่นตั้งอยู่บนพื้นฐานนี้',
	contentsMetaDescription: (bookTitle) => `ทุกหัวข้อใน ${bookTitle} เรียงตามลำดับการอ่าน`,
	contentsIntro: (count, parts) =>
		`ทั้งหมด ${count} หัวข้อเรียงตามลำดับการอ่าน แบ่งเป็น ${parts} ส่วน แต่ละหัวข้อครอบคลุมตัวชี้วัดหรือแนวคิดหนึ่งอย่าง: คำนิยาม เหตุผลที่สำคัญ วิธีคำนวณ ตัวอย่างการคำนวณ แหล่งข้อมูลและข้อควรระวัง ข้อผิดพลาดที่พบบ่อย และแหล่งอ้างอิง`,
	topicsCountSubtitle: (n) => `${n} หัวข้อ`,
	topicsMetaDescription: (bookTitle) => `ทุกหัวข้อใน ${bookTitle} เรียงตามลำดับตัวอักษร`,
	topicsIntroPrefix: (count) => `ทั้งหมด ${count} หัวข้อเรียงตามลำดับตัวอักษร หากต้องการดูตามลำดับการอ่าน โปรดดู`,
	contentsLinkText: 'สารบัญ',
	jumpToLetter: 'ไปยังตัวอักษร',
	searchMetaDescription: (bookTitle) => `ค้นหาทุกหัวข้อใน ${bookTitle}`,
	searchIntro: (count) =>
		`ค้นหาทั้งหมด ${count} หัวข้อตามชื่อเรื่อง ส่วน บทสรุป และหัวข้อย่อย ทุกอย่างทำงานในเบราว์เซอร์ของคุณ — สิ่งที่คุณพิมพ์จะไม่ออกจากหน้านี้`,
	searchInputLabel: 'ค้นหาหัวข้อ',
	searchPlaceholder: 'DAU, การรักษาผู้ใช้, อัตราการทำแบบสอบถาม PROM…',
	searchHintEmptyHtml: 'พิมพ์เพื่อค้นหา ลองพิมพ์ <em>DAU</em>, <em>การรักษาผู้ใช้</em> หรือ <em>PROM</em>',
	noResultsPrefix: 'ไม่พบหัวข้อที่ตรงกับ ',
	noResultsMiddle: ' ลองใช้คำที่กว้างขึ้น หรือเรียกดูที่ ',
	resultsCountSingular: 'หัวข้อ',
	resultsCountPlural: 'หัวข้อ',
	topicPosition: (index, total) => `หัวข้อที่ ${index} จาก ${total}`,
	onThisPage: 'ในหน้านี้',
	paginationLabel: 'หนังสือ',
	paginationPrevious: 'ก่อนหน้า',
	paginationNext: 'ถัดไป'
};

const tr = {
	skipToContent: 'İçeriğe geç',
	navHome: 'Ana sayfa',
	navContents: 'İçindekiler',
	navTopicsAZ: 'Konular A–Z',
	navSearch: 'Ara',
	navAbout: 'Hakkında',
	footerSourceLink: 'Kaynak',
	footerTaglineSuffix:
		' — dijital sağlık ürünleri geliştiren, değerlendiren ve satın alan ekipler için dijital sağlık metriklerinin tanımları, örnekleri ve gerekçeleri.',
	footerNote:
		'Bu kitaptaki rakamlar hızla eskir. Her konu kıyaslama değerlerinin tarihini metin içinde belirtir; herhangi bir sayıyı gerçek bir iş senaryosunda kullanmadan önce yeniden doğrulayın.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Dil',
	pickerTextSize: 'Metin boyutu',
	pickerShare: 'Paylaş',
	pickerLinks: 'Bağlantılar',
	shareCopyLink: 'Bağlantıyı kopyala',
	shareCopied: 'Kopyalandı',
	shareCopyFailed: 'Kopyalanamadı',
	shareEmailLabel: 'Bağlantıyı e-postayla gönder',
	shareLinkedinLabel: 'LinkedIn’de paylaş',
	shareRedditLabel: 'Reddit’te paylaş',
	shareBlueskyLabel: 'Bluesky’da paylaş',
	shareMastodonLabel: 'Mastodon’da paylaş',

	startHere: 'Buradan başlayın',
	startHereSubtitle: 'Diğer her şeyin üzerine kurulduğu üç fikir.',

	contentsMetaDescription: (bookTitle) => `${bookTitle} içindeki tüm konular, okuma sırasına göre.`,
	contentsIntro: (count, parts) =>
		`Tüm ${count} konu okuma sırasıyla, ${parts} bölüm halinde. Her konu bir metriği veya kavramı ele alır: tanım, neden önemli olduğu, nasıl hesaplandığı, çözümlü örnek, veri kaynakları ve dikkat edilecek noktalar, sık yapılan hatalar ve kaynaklar.`,
	topicsCountSubtitle: (n) => `${n} konu`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} içindeki tüm konular, A’dan Z’ye sıralı.`,
	topicsIntroPrefix: (count) => `Tüm ${count} konu alfabetik sırayla. Okuma sırası için bkz.`,
	contentsLinkText: 'içindekiler',
	jumpToLetter: 'Harfe git',

	searchMetaDescription: (bookTitle) => `${bookTitle} içindeki tüm konularda arama yapın.`,
	searchIntro: (count) =>
		`Tüm ${count} konuyu başlık, bölüm, özet ve bölüm başlığına göre arayın. Her şey tarayıcınızda çalışır — yazdığınız hiçbir şey bu sayfadan çıkmaz.`,
	searchInputLabel: 'Konularda ara',
	searchPlaceholder: 'DAU, elde tutma, PROM tamamlama oranı…',
	searchHintEmptyHtml: 'Aramak için yazın. <em>DAU</em>, <em>elde tutma</em> veya <em>PROM</em> deneyin.',
	noResultsPrefix: 'Eşleşen konu yok: ',
	noResultsMiddle: '. Daha geniş bir terim deneyin veya şuna göz atın: ',
	resultsCountSingular: 'konu',
	resultsCountPlural: 'konu',

	topicPosition: (index, total) => `Konu ${index} / ${total}`,
	onThisPage: 'Bu sayfada',
	paginationLabel: 'Kitap',
	paginationPrevious: 'Önceki',
	paginationNext: 'Sonraki'
};

/** @type {Messages} */
const is = {
	skipToContent: 'Fara beint í efnið',
	navHome: 'Forsíða',
	navContents: 'Efnisyfirlit',
	navTopicsAZ: 'Efni A–Ö',
	navSearch: 'Leit',
	navAbout: 'Um bókina',
	footerSourceLink: 'Frumkóði',
	footerTaglineSuffix:
		' — skilgreiningar, dæmi og rök fyrir mælikvarða stafrænnar heilbrigðisþjónustu, fyrir teymi sem smíða, meta og panta stafrænar heilbrigðisvörur.',
	footerNote:
		'Tölur í þessari bók úreldast hratt. Hvert efni tímasetur viðmið sín í textanum; staðfestu þau upp á nýtt áður en þú notar tölu í raunverulegum viðskiptarökum.',
	pickerTheme: 'Þema',
	pickerLanguage: 'Tungumál',
	pickerTextSize: 'Textastærð',
	pickerShare: 'Deila',
	pickerLinks: 'Tenglar',
	shareCopyLink: 'Afrita tengil',
	shareCopied: 'Afritað',
	shareCopyFailed: 'Afritun mistókst',
	shareEmailLabel: 'Senda tengil í tölvupósti',
	shareLinkedinLabel: 'Deila á LinkedIn',
	shareRedditLabel: 'Deila á Reddit',
	shareBlueskyLabel: 'Deila á Bluesky',
	shareMastodonLabel: 'Deila á Mastodon',

	startHere: 'Byrjaðu hér',
	startHereSubtitle: 'Þrjár hugmyndir sem allt annað byggir á.',

	contentsMetaDescription: (bookTitle) => `Allt efni í „${bookTitle}“, í lesröð.`,
	contentsIntro: (count, parts) =>
		`Öll ${count} efnin í lesröð, í ${parts} hlutum. Hvert efni fjallar um einn mælikvarða eða hugtak: skilgreiningu, hvers vegna það skiptir máli, hvernig það er reiknað, dæmi útreiknað, gagnalindir og fyrirvara, gildrur og heimildir.`,
	topicsCountSubtitle: (n) => `${n} efni`,

	topicsMetaDescription: (bookTitle) => `Allt efni í „${bookTitle}“, í stafrófsröð.`,
	topicsIntroPrefix: (count) => `Öll ${count} efnin í stafrófsröð. Fyrir lesröð, sjá`,
	contentsLinkText: 'efnisyfirlit',
	jumpToLetter: 'Fara á staf',

	searchMetaDescription: (bookTitle) => `Leitaðu í öllu efni í „${bookTitle}“.`,
	searchIntro: (count) =>
		`Leitaðu í öllum ${count} efnunum eftir titli, hluta, samantekt og kaflaheiti. Allt keyrir í vafranum þínum — ekkert sem þú skrifar yfirgefur þessa síðu.`,
	searchInputLabel: 'Leita í efni',
	searchPlaceholder: 'DAU, viðhald, útfylling PROM…',
	searchHintEmptyHtml: 'Skrifaðu til að leita. Prófaðu <em>DAU</em>, <em>viðhald</em> eða <em>PROM</em>.',
	noResultsPrefix: 'Ekkert efni passar við ',
	noResultsMiddle: '. Prófaðu víðara hugtak, eða skoðaðu ',
	resultsCountSingular: 'efni',
	resultsCountPlural: 'efni',

	topicPosition: (index, total) => `Efni ${index} af ${total}`,
	onThisPage: 'Á þessari síðu',
	paginationLabel: 'Bók',
	paginationPrevious: 'Fyrra',
	paginationNext: 'Næsta'
};

/** @type {Messages} */
const sw = {
	skipToContent: 'Ruka hadi maudhui',
	navHome: 'Mwanzo',
	navContents: 'Yaliyomo',
	navTopicsAZ: 'Mada A–Z',
	navSearch: 'Tafuta',
	navAbout: 'Kuhusu',
	footerSourceLink: 'Chanzo',
	footerTaglineSuffix:
		' — fasili, mifano, na hoja za vipimo vya afya ya kidijitali kwa timu zinazojenga, kutathmini, na kuagiza bidhaa za afya ya kidijitali.',
	footerNote:
		'Takwimu katika kitabu hiki hupitwa na wakati haraka. Kila mada hutaja tarehe ya vigezo vyake ndani ya maandishi; zithibitishe upya kabla ya kutumia namba yoyote katika hoja halisi ya biashara.',
	pickerTheme: 'Mandhari',
	pickerLanguage: 'Lugha',
	pickerTextSize: 'Ukubwa wa maandishi',
	pickerShare: 'Shiriki',
	pickerLinks: 'Viungo',
	shareCopyLink: 'Nakili kiungo',
	shareCopied: 'Imenakiliwa',
	shareCopyFailed: 'Kunakili kumeshindwa',
	shareEmailLabel: 'Tuma kiungo kwa barua pepe',
	shareLinkedinLabel: 'Shiriki kwenye LinkedIn',
	shareRedditLabel: 'Shiriki kwenye Reddit',
	shareBlueskyLabel: 'Shiriki kwenye Bluesky',
	shareMastodonLabel: 'Shiriki kwenye Mastodon',

	startHere: 'Anzia hapa',
	startHereSubtitle: 'Mawazo matatu ambayo kila kitu kingine kinajengwa juu yake.',

	contentsMetaDescription: (bookTitle) => `Mada zote katika ${bookTitle}, kwa mpangilio wa kusoma.`,
	contentsIntro: (count, parts) =>
		`Mada zote ${count} kwa mpangilio wa kusoma, katika sehemu ${parts}. Kila mada inahusu kipimo au dhana moja: fasili, kwa nini ni muhimu, jinsi kinavyokokotolewa, mfano uliokokotolewa, vyanzo vya data na tahadhari, mitego, na vyanzo.`,
	topicsCountSubtitle: (n) => `Mada ${n}`,

	topicsMetaDescription: (bookTitle) => `Mada zote katika ${bookTitle}, zikiorodheshwa A hadi Z.`,
	topicsIntroPrefix: (count) => `Mada zote ${count} kwa mpangilio wa alfabeti. Kwa mpangilio wa kusoma, tazama`,
	contentsLinkText: 'yaliyomo',
	jumpToLetter: 'Ruka hadi herufi',

	searchMetaDescription: (bookTitle) => `Tafuta mada zote katika ${bookTitle}.`,
	searchIntro: (count) =>
		`Tafuta mada zote ${count} kwa kichwa, sehemu, muhtasari, na kichwa cha sehemu ndogo. Kila kitu kinafanya kazi kwenye kivinjari chako — hakuna unachoandika kinachoondoka kwenye ukurasa huu.`,
	searchInputLabel: 'Tafuta mada',
	searchPlaceholder: 'DAU, kubaki, kukamilisha PROM…',
	searchHintEmptyHtml: 'Andika kutafuta. Jaribu <em>DAU</em>, <em>kubaki</em>, au <em>PROM</em>.',
	noResultsPrefix: 'Hakuna mada zinazolingana na ',
	noResultsMiddle: '. Jaribu neno pana zaidi, au vinjari ',
	resultsCountSingular: 'mada',
	resultsCountPlural: 'mada',

	topicPosition: (index, total) => `Mada ${index} kati ya ${total}`,
	onThisPage: 'Kwenye ukurasa huu',
	paginationLabel: 'Kitabu',
	paginationPrevious: 'Iliyotangulia',
	paginationNext: 'Inayofuata'
};

/** @type {Messages} */
const zhTw = {
	skipToContent: '跳到主要內容',
	navHome: '首頁',
	navContents: '目錄',
	navTopicsAZ: '主題 A–Z',
	navSearch: '搜尋',
	navAbout: '關於',
	footerSourceLink: '原始碼',
	footerTaglineSuffix: ' —— 為構建、評估和採購數位健康產品的團隊提供的數位健康指標定義、案例與推理。',
	footerNote: '本書中的數位更新很快。每個主題都在正文中標註了其基準資料的日期；在實際業務案例中使用任何數位之前，請重新核實。',
	pickerTheme: '主題外觀',
	pickerLanguage: '語言',
	pickerTextSize: '字號',
	pickerShare: '分享',
	pickerLinks: '連結',
	shareCopyLink: '複製連結',
	shareCopied: '已複製',
	shareCopyFailed: '複製失敗',
	shareEmailLabel: '透過郵件傳送連結',
	shareLinkedinLabel: '分享到 LinkedIn',
	shareRedditLabel: '分享到 Reddit',
	shareBlueskyLabel: '分享到 Bluesky',
	shareMastodonLabel: '分享到 Mastodon',
	startHere: '從這裡開始',
	startHereSubtitle: '其餘一切都建立在這三個概念之上。',
	contentsMetaDescription: (bookTitle) => `《${bookTitle}》的全部主題，按閱讀順序排列。`,
	contentsIntro: (count, parts) =>
		`全部 ${count} 個主題按閱讀順序排列，共分為 ${parts} 個部分。每個主題涵蓋一個指標或概念：定義、為何重要、如何計算、一個例項解析、資料來源與注意事項、常見誤區，以及參考來源。`,
	topicsCountSubtitle: (n) => `${n} 個主題`,
	topicsMetaDescription: (bookTitle) => `《${bookTitle}》的全部主題，按字母順序排列。`,
	topicsIntroPrefix: (count) => `全部 ${count} 個主題按字母順序排列。如需閱讀順序，請檢視`,
	contentsLinkText: '目錄',
	jumpToLetter: '跳轉到字母',
	searchMetaDescription: (bookTitle) => `搜尋《${bookTitle}》中的所有主題。`,
	searchIntro: (count) =>
		`按標題、部分、摘要和小節標題搜尋全部 ${count} 個主題。一切都在你的瀏覽器中執行 —— 你輸入的內容不會離開此頁面。`,
	searchInputLabel: '搜尋主題',
	searchPlaceholder: 'DAU、留存率、PROM 完成率……',
	searchHintEmptyHtml: '開始輸入以搜尋。試試 <em>DAU</em>、<em>留存率</em> 或 <em>PROM</em>。',
	noResultsPrefix: '沒有主題匹配 ',
	noResultsMiddle: '。請嘗試更寬泛的詞語，或瀏覽',
	resultsCountSingular: '個主題',
	resultsCountPlural: '個主題',
	topicPosition: (index, total) => `第 ${index} 個主題，共 ${total} 個`,
	onThisPage: '本頁內容',
	paginationLabel: '全書',
	paginationPrevious: '上一篇',
	paginationNext: '下一篇'
};

/** @type {Messages} */
const chrome_kn = {
	skipToContent: 'ವಿಷಯಕ್ಕೆ ಹೋಗಿ',
	navHome: 'ಮುಖಪುಟ',
	navContents: 'ಪರಿವಿಡಿ',
	navTopicsAZ: 'ವಿಷಯಗಳು A–Z',
	navSearch: 'ಹುಡುಕಿ',
	navAbout: 'ಕುರಿತು',
	footerSourceLink: 'ಮೂಲ',
	footerTaglineSuffix:
		' — ಡಿಜಿಟಲ್ ಆರೋಗ್ಯ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸುವ, ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಮತ್ತು ನಿಯೋಜಿಸುವ ತಂಡಗಳಿಗಾಗಿ ಡಿಜಿಟಲ್ ಆರೋಗ್ಯ ಮಾಪನ ವ್ಯಾಖ್ಯಾನಗಳು, ಉದಾಹರಣೆಗಳು ಮತ್ತು ತರ್ಕ.',
	footerNote:
		'ಈ ಪುಸ್ತಕದ ಅಂಕಿಅಂಶಗಳು ಬೇಗನೆ ಹಳೆಯದಾಗುತ್ತವೆ. ಪ್ರತಿ ವಿಷಯವೂ ತನ್ನ ಮಾನದಂಡಗಳಿಗೆ ಪಠ್ಯದೊಳಗೇ ದಿನಾಂಕ ನಮೂದಿಸುತ್ತದೆ; ಜೀವಂತ ವ್ಯವಹಾರ ಪ್ರಕರಣದಲ್ಲಿ ಯಾವುದೇ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸುವ ಮೊದಲು ಮರುಪರಿಶೀಲಿಸಿ.',
	pickerTheme: 'ಥೀಮ್',
	pickerLanguage: 'ಭಾಷೆ',
	pickerTextSize: 'ಪಠ್ಯದ ಗಾತ್ರ',
	pickerShare: 'ಹಂಚಿಕೊಳ್ಳಿ',
	pickerLinks: 'ಲಿಂಕ್‌ಗಳು',
	shareCopyLink: 'ಲಿಂಕ್ ನಕಲಿಸಿ',
	shareCopied: 'ನಕಲಿಸಲಾಗಿದೆ',
	shareCopyFailed: 'ನಕಲಿಸಲು ವಿಫಲವಾಗಿದೆ',
	shareEmailLabel: 'ಲಿಂಕ್ ಅನ್ನು ಇಮೇಲ್ ಮಾಡಿ',
	shareLinkedinLabel: 'LinkedIn ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ',
	shareRedditLabel: 'Reddit ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ',
	shareBlueskyLabel: 'Bluesky ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ',
	shareMastodonLabel: 'Mastodon ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ',

	startHere: 'ಇಲ್ಲಿಂದ ಆರಂಭಿಸಿ',
	startHereSubtitle: 'ಉಳಿದೆಲ್ಲವೂ ಆಧರಿಸಿರುವ ಮೂರು ಕಲ್ಪನೆಗಳು.',

	contentsMetaDescription: (bookTitle) => `${bookTitle} ಪುಸ್ತಕದ ಪ್ರತಿಯೊಂದು ವಿಷಯ, ಓದುವ ಕ್ರಮದಲ್ಲಿ.`,
	contentsIntro: (count, parts) =>
		`ಎಲ್ಲಾ ${count} ವಿಷಯಗಳು ಓದುವ ಕ್ರಮದಲ್ಲಿ, ${parts} ಭಾಗಗಳಲ್ಲಿ. ಪ್ರತಿ ವಿಷಯವೂ ಒಂದು ಮಾಪನ ಅಥವಾ ಪರಿಕಲ್ಪನೆಯನ್ನು ಒಳಗೊಂಡಿದೆ: ವ್ಯಾಖ್ಯಾನ, ಅದು ಏಕೆ ಮುಖ್ಯ, ಅದನ್ನು ಹೇಗೆ ಲೆಕ್ಕ ಹಾಕುವುದು, ಕಾರ್ಯರೂಪದ ಉದಾಹರಣೆ, ದತ್ತಾಂಶ ಮೂಲಗಳು ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು, ಎಡವಟ್ಟುಗಳು ಮತ್ತು ಮೂಲಗಳು.`,
	topicsCountSubtitle: (n) => `${n} ವಿಷಯಗಳು`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} ಪುಸ್ತಕದ ಪ್ರತಿಯೊಂದು ವಿಷಯ, A ಯಿಂದ Z ವರೆಗೆ ಪಟ್ಟಿಮಾಡಲಾಗಿದೆ.`,
	topicsIntroPrefix: (count) => `ಎಲ್ಲಾ ${count} ವಿಷಯಗಳು ವರ್ಣಮಾಲೆಯ ಕ್ರಮದಲ್ಲಿ. ಓದುವ ಕ್ರಮಕ್ಕಾಗಿ ಇದನ್ನು ನೋಡಿ:`,
	contentsLinkText: 'ಪರಿವಿಡಿ',
	jumpToLetter: 'ಅಕ್ಷರಕ್ಕೆ ಹೋಗಿ',

	searchMetaDescription: (bookTitle) => `${bookTitle} ಪುಸ್ತಕದ ಎಲ್ಲಾ ವಿಷಯಗಳಲ್ಲಿ ಹುಡುಕಿ.`,
	searchIntro: (count) =>
		`ಎಲ್ಲಾ ${count} ವಿಷಯಗಳನ್ನು ಶೀರ್ಷಿಕೆ, ಭಾಗ, ಸಾರಾಂಶ ಮತ್ತು ವಿಭಾಗ ಶೀರ್ಷಿಕೆಯ ಮೂಲಕ ಹುಡುಕಿ. ಎಲ್ಲವೂ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ನಡೆಯುತ್ತದೆ — ನೀವು ಟೈಪ್ ಮಾಡುವ ಯಾವುದೂ ಈ ಪುಟವನ್ನು ಬಿಟ್ಟು ಹೋಗುವುದಿಲ್ಲ.`,
	searchInputLabel: 'ವಿಷಯಗಳನ್ನು ಹುಡುಕಿ',
	searchPlaceholder: 'DAU, ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ, PROM ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ದರ…',
	searchHintEmptyHtml: 'ಹುಡುಕಲು ಟೈಪ್ ಮಾಡಿ. <em>DAU</em>, <em>ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ</em> ಅಥವಾ <em>PROM</em> ಪ್ರಯತ್ನಿಸಿ.',
	noResultsPrefix: 'ಯಾವುದೇ ವಿಷಯವೂ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ ',
	noResultsMiddle: '. ವಿಶಾಲವಾದ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ, ಅಥವಾ ಇದನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ: ',
	resultsCountSingular: 'ವಿಷಯ',
	resultsCountPlural: 'ವಿಷಯಗಳು',

	topicPosition: (index, total) => `ವಿಷಯ ${index} / ${total}`,
	onThisPage: 'ಈ ಪುಟದಲ್ಲಿ',
	paginationLabel: 'ಪುಸ್ತಕ',
	paginationPrevious: 'ಹಿಂದಿನದು',
	paginationNext: 'ಮುಂದಿನದು'
};

/** @type {Messages} */
const chrome_kw = {
	skipToContent: 'Lemmel dhe\'n tekst',
	navHome: 'Hom',
	navContents: 'Rol',
	navTopicsAZ: 'Testennow A–Z',
	navSearch: 'Hwilas',
	navAbout: 'Adro dhe',
	footerSourceLink: 'Fenten',
	footerTaglineSuffix:
		' — styryansow musurow yeghes dijital, ensamplow, ha reson rag tus ow trehevel, ow rewlya, hag ow hwithra produktow yeghes dijital.',
	footerNote:
		'Niverow y\'n lyver ma a dheu hen yn skon. Pup testen a dhiskwa dydh y vensow ynno y honan; kwrewgh hwithra arta kyns usya niver vyth yn kas negys bew.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Yeth',
	pickerTextSize: 'Brys tekst',
	pickerShare: 'Kevrenna',
	pickerLinks: 'Kevrennow',
	shareCopyLink: 'Kopiya an kevren',
	shareCopied: 'Kopiys',
	shareCopyFailed: 'Kopiya a fyllis',
	shareEmailLabel: 'Danvon kevren dre bost-e',
	shareLinkedinLabel: 'Kevrenna war LinkedIn',
	shareRedditLabel: 'Kevrenna war Reddit',
	shareBlueskyLabel: 'Kevrenna war Bluesky',
	shareMastodonLabel: 'Kevrenna war Mastodon',

	startHere: 'Dallethewgh omma',
	startHereSubtitle: 'An tri ide a vydh puptra aral ow trehevel warnodhans.',

	contentsMetaDescription: (bookTitle) => `Pup testen yn ${bookTitle}, yn ordyr redya.`,
	contentsIntro: (count, parts) =>
		`An ${count} testen oll yn ordyr redya, dres ${parts} rann. Pup testen a dhelenwa unn vusur po kysyans: styr, prag y fydh posek, fatel y fydh kontys, ensampel oberys, fontynnow data ha gwarnyansow, trapow, ha fontynnow.`,
	topicsCountSubtitle: (n) => `${n} testen`,

	topicsMetaDescription: (bookTitle) => `Pup testen yn ${bookTitle}, rolys A bys Z.`,
	topicsIntroPrefix: (count) => `An ${count} testen oll yn ordyr an lytherenn. Rag ordyr redya, gwelewgh an`,
	contentsLinkText: 'rol',
	jumpToLetter: 'Lemmel dhe lytherenn',

	searchMetaDescription: (bookTitle) => `Hwilas pup testen yn ${bookTitle}.`,
	searchIntro: (count) =>
		`Hwilewgh an ${count} testen oll dre titel, rann, sommenn, ha penn-rann. Puptra a wra ober y\'th beusyer — nyns eus tra vyth a skrifowgh a asow an folen ma.`,
	searchInputLabel: 'Hwilas testennow',
	searchPlaceholder: 'DAU, gwithyans, kemeryans PROM…',
	searchHintEmptyHtml: 'Skrifewgh dhe hwilas. Previewgh <em>DAU</em>, <em>gwithyans</em>, po <em>PROM</em>.',
	noResultsPrefix: 'Nyns eus testen vyth ow kesstrif gans ',
	noResultsMiddle: '. Previewgh ger ledanna, po peuskwilewgh an ',
	resultsCountSingular: 'testen',
	resultsCountPlural: 'testennow',

	topicPosition: (index, total) => `Testen ${index} a ${total}`,
	onThisPage: 'Y\'n folen ma',
	paginationLabel: 'Lyver',
	paginationPrevious: 'A-rag',
	paginationNext: 'Nessa'
};

/** @type {Messages} */
const chrome_lb = {
	skipToContent: 'Direkt zum Inhalt',
	navHome: 'Startsäit',
	navContents: 'Inhaltsverzeechnes',
	navTopicsAZ: 'Themen A–Z',
	navSearch: 'Sichen',
	navAbout: 'Iwwer',
	footerSourceLink: 'Quellcode',
	footerTaglineSuffix:
		' — Definitioune, Beispiller a Iwwerleeungen zu Kennzuelen vun der digitaler Gesondheet fir Teams, déi digital Gesondheetsprodukter entwéckelen, evaluéieren a beauftragen.',
	footerNote:
		'D\'Zuelen an dësem Buch ginn séier iwwerholl. All Thema datéiert seng Benchmarken direkt am Text; préift se nach eng Kéier, ier der eng Zuel an engem richtege Business Case benotzt.',
	pickerTheme: 'Thema',
	pickerLanguage: 'Sprooch',
	pickerTextSize: 'Textgréisst',
	pickerShare: 'Deelen',
	pickerLinks: 'Links',
	shareCopyLink: 'Link kopéieren',
	shareCopied: 'Kopéiert',
	shareCopyFailed: 'Kopéiere feelgeschloen',
	shareEmailLabel: 'Link per E-Mail schécken',
	shareLinkedinLabel: 'Op LinkedIn deelen',
	shareRedditLabel: 'Op Reddit deelen',
	shareBlueskyLabel: 'Op Bluesky deelen',
	shareMastodonLabel: 'Op Mastodon deelen',

	startHere: 'Hei ufänken',
	startHereSubtitle: 'Déi dräi Iddien, op deenen alles anert opbaut.',

	contentsMetaDescription: (bookTitle) => `All Themen a(n) ${bookTitle}, an der Lies-Reiefolleg.`,
	contentsIntro: (count, parts) =>
		`All ${count} Themen an der Lies-Reiefolleg, opgedeelt a ${parts} Deeler. All Thema behandelt eng Kennzuel oder e Konzept: Definitioun, firwat si wichteg ass, wéi si berechent gëtt, e Beispill, Datequellen a Virbehalter, heefeg Fallen a Quellen.`,
	topicsCountSubtitle: (n) => `${n} Themen`,

	topicsMetaDescription: (bookTitle) => `All Themen a(n) ${bookTitle}, vun A bis Z opgelëscht.`,
	topicsIntroPrefix: (count) => `All ${count} Themen an alphabetescher Reiefolleg. Fir d'Lies-Reiefolleg kuckt den`,
	contentsLinkText: 'Inhaltsverzeechnes',
	jumpToLetter: 'Zum Buschtaf sprangen',

	searchMetaDescription: (bookTitle) => `All Themen a(n) ${bookTitle} duerchsichen.`,
	searchIntro: (count) =>
		`Duerchsicht all ${count} Themen no Titel, Deel, Resumé a Rubrikentitel. Alles leeft an Ärem Browser — näischt, wat der tippt, verléisst dës Säit.`,
	searchInputLabel: 'Themen sichen',
	searchPlaceholder: 'DAU, Retentioun, PROM-Ofschlossquote…',
	searchHintEmptyHtml: 'Tippt, fir ze sichen. Probéiert <em>DAU</em>, <em>Retentioun</em> oder <em>PROM</em>.',
	noResultsPrefix: 'Keng Themen passen zu ',
	noResultsMiddle: '. Probéiert e méi breede Begrëff, oder duerchstéiert d\'',
	resultsCountSingular: 'Thema',
	resultsCountPlural: 'Themen',

	topicPosition: (index, total) => `Thema ${index} vu ${total}`,
	onThisPage: 'Op dëser Säit',
	paginationLabel: 'Buch',
	paginationPrevious: 'Zréck',
	paginationNext: 'Weider'
};

/** @type {Messages} */
const chrome_lo = {
	skipToContent: 'ຂ້າມໄປຫາເນື້ອຫາ',
	navHome: 'ໜ້າຫຼັກ',
	navContents: 'ສາລະບານ',
	navTopicsAZ: 'ຫົວຂໍ້ A–Z',
	navSearch: 'ຄົ້ນຫາ',
	navAbout: 'ກ່ຽວກັບ',
	footerSourceLink: 'ແຫຼ່ງທີ່ມາ',
	footerTaglineSuffix:
		' — ນິຍາມ, ຕົວຢ່າງ ແລະ ເຫດຜົນຂອງຕົວຊີ້ວັດສຸຂະພາບດິຈິຕອນ ສຳລັບທີມທີ່ສ້າງ, ປະເມີນ ແລະ ວ່າຈ້າງຜະລິດຕະພັນສຸຂະພາບດິຈິຕອນ.',
	footerNote:
		'ຕົວເລກໃນປຶ້ມຫົວນີ້ລ້າສະໄໝໄວ. ແຕ່ລະຫົວຂໍ້ລະບຸວັນທີຂອງຄ່າອ້າງອີງໄວ້ໃນເນື້ອຫາ; ກະລຸນາກວດສອບຄືນກ່ອນນຳຕົວເລກໃດໆໄປໃຊ້ໃນກໍລະນີທາງທຸລະກິດຈິງ.',
	pickerTheme: 'ຮູບແບບສີ',
	pickerLanguage: 'ພາສາ',
	pickerTextSize: 'ຂະໜາດຕົວອັກສອນ',
	pickerShare: 'ແບ່ງປັນ',
	pickerLinks: 'ລິ້ງ',
	shareCopyLink: 'ສຳເນົາລິ້ງ',
	shareCopied: 'ສຳເນົາແລ້ວ',
	shareCopyFailed: 'ສຳເນົາບໍ່ສຳເລັດ',
	shareEmailLabel: 'ສົ່ງລິ້ງທາງອີເມວ',
	shareLinkedinLabel: 'ແບ່ງປັນທາງ LinkedIn',
	shareRedditLabel: 'ແບ່ງປັນທາງ Reddit',
	shareBlueskyLabel: 'ແບ່ງປັນທາງ Bluesky',
	shareMastodonLabel: 'ແບ່ງປັນທາງ Mastodon',

	startHere: 'ເລີ່ມຕົ້ນບ່ອນນີ້',
	startHereSubtitle: 'ສາມແນວຄິດທີ່ທຸກຢ່າງອື່ນສ້າງຢູ່ເທິງມັນ.',

	contentsMetaDescription: (bookTitle) => `ທຸກຫົວຂໍ້ໃນ ${bookTitle} ຕາມລຳດັບການອ່ານ.`,
	contentsIntro: (count, parts) =>
		`ທັງໝົດ ${count} ຫົວຂໍ້ຕາມລຳດັບການອ່ານ ໃນ ${parts} ພາກ. ແຕ່ລະຫົວຂໍ້ກວມເອົາຕົວຊີ້ວັດ ຫຼື ແນວຄິດໜຶ່ງ: ນິຍາມ, ເປັນຫຍັງຈຶ່ງສຳຄັນ, ຄຳນວນແນວໃດ, ຕົວຢ່າງການຄຳນວນ, ແຫຼ່ງຂໍ້ມູນ ແລະ ຂໍ້ຄວນລະວັງ, ຈຸດອ່ອນທີ່ພົບທົ່ວໄປ ແລະ ແຫຼ່ງອ້າງອີງ.`,
	topicsCountSubtitle: (n) => `${n} ຫົວຂໍ້`,

	topicsMetaDescription: (bookTitle) => `ທຸກຫົວຂໍ້ໃນ ${bookTitle} ລຽງຕາມ A ຫາ Z.`,
	topicsIntroPrefix: (count) => `ທັງໝົດ ${count} ຫົວຂໍ້ລຽງຕາມຕົວອັກສອນ. ສຳລັບລຳດັບການອ່ານ ເບິ່ງ `,
	contentsLinkText: 'ສາລະບານ',
	jumpToLetter: 'ຂ້າມໄປຫາຕົວອັກສອນ',

	searchMetaDescription: (bookTitle) => `ຄົ້ນຫາທຸກຫົວຂໍ້ໃນ ${bookTitle}.`,
	searchIntro: (count) =>
		`ຄົ້ນຫາທັງໝົດ ${count} ຫົວຂໍ້ຕາມຊື່ເລື່ອງ, ພາກ, ບົດສະຫຼຸບ ແລະ ຫົວຂໍ້ຍ່ອຍ. ທຸກຢ່າງເຮັດວຽກໃນບຣາວເຊີຂອງທ່ານ — ສິ່ງທີ່ທ່ານພິມຈະບໍ່ອອກຈາກໜ້ານີ້.`,
	searchInputLabel: 'ຄົ້ນຫາຫົວຂໍ້',
	searchPlaceholder: 'DAU, ການຮັກສາຜູ້ໃຊ້, ອັດຕາການສຳເລັດ PROM…',
	searchHintEmptyHtml: 'ພິມເພື່ອຄົ້ນຫາ. ລອງ <em>DAU</em>, <em>ການຮັກສາຜູ້ໃຊ້</em> ຫຼື <em>PROM</em>.',
	noResultsPrefix: 'ບໍ່ມີຫົວຂໍ້ທີ່ກົງກັບ ',
	noResultsMiddle: '. ລອງໃຊ້ຄຳທີ່ກວ້າງຂຶ້ນ ຫຼື ເລືອກເບິ່ງ ',
	resultsCountSingular: 'ຫົວຂໍ້',
	resultsCountPlural: 'ຫົວຂໍ້',

	topicPosition: (index, total) => `ຫົວຂໍ້ທີ ${index} ຈາກທັງໝົດ ${total}`,
	onThisPage: 'ໃນໜ້ານີ້',
	paginationLabel: 'ປຶ້ມ',
	paginationPrevious: 'ກ່ອນໜ້າ',
	paginationNext: 'ຕໍ່ໄປ'
};

/** @type {Messages} */
const chrome_lt = {
	skipToContent: 'Pereiti prie turinio',
	navHome: 'Pradžia',
	navContents: 'Turinys',
	navTopicsAZ: 'Temos A–Ž',
	navSearch: 'Paieška',
	navAbout: 'Apie',
	footerSourceLink: 'Šaltinio kodas',
	footerTaglineSuffix:
		' — skaitmeninės sveikatos rodiklių apibrėžtys, pavyzdžiai ir argumentai komandoms, kurios kuria, vertina ir užsako skaitmeninės sveikatos produktus.',
	footerNote:
		'Šioje knygoje pateikiami skaičiai greitai pasensta. Kiekvienoje temoje etaloniniai duomenys datuojami tekste; prieš naudodami bet kurį skaičių realiame verslo pagrindime, patikrinkite jį iš naujo.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Kalba',
	pickerTextSize: 'Teksto dydis',
	pickerShare: 'Bendrinti',
	pickerLinks: 'Nuorodos',
	shareCopyLink: 'Kopijuoti nuorodą',
	shareCopied: 'Nukopijuota',
	shareCopyFailed: 'Nukopijuoti nepavyko',
	shareEmailLabel: 'Siųsti nuorodą el. paštu',
	shareLinkedinLabel: 'Bendrinti „LinkedIn“',
	shareRedditLabel: 'Bendrinti „Reddit“',
	shareBlueskyLabel: 'Bendrinti „Bluesky“',
	shareMastodonLabel: 'Bendrinti „Mastodon“',

	startHere: 'Pradėkite čia',
	startHereSubtitle: 'Trys idėjos, ant kurių remiasi visa kita.',

	contentsMetaDescription: (bookTitle) => `Visos knygos „${bookTitle}“ temos skaitymo eilės tvarka.`,
	contentsIntro: (count, parts) =>
		`Visos temos (${count}) skaitymo eilės tvarka, suskirstytos į dalis (${parts}). Kiekviena tema aprėpia vieną rodiklį ar sąvoką: apibrėžtį, kodėl tai svarbu, kaip apskaičiuojama, pavyzdį su skaičiavimu, duomenų šaltinius ir apribojimus, dažniausias klaidas ir šaltinius.`,
	topicsCountSubtitle: (n) => `Temų: ${n}`,

	topicsMetaDescription: (bookTitle) => `Visos knygos „${bookTitle}“ temos abėcėlės tvarka.`,
	topicsIntroPrefix: (count) => `Visos temos (${count}) abėcėlės tvarka. Skaitymo eilės tvarką žr.:`,
	contentsLinkText: 'turinį',
	jumpToLetter: 'Pereiti prie raidės',

	searchMetaDescription: (bookTitle) => `Ieškokite visose knygos „${bookTitle}“ temose.`,
	searchIntro: (count) =>
		`Ieškokite visose temose (${count}) pagal pavadinimą, dalį, santrauką ir skyriaus antraštę. Viskas vyksta jūsų naršyklėje — niekas, ką įvedate, nepalieka šio puslapio.`,
	searchInputLabel: 'Ieškoti temų',
	searchPlaceholder: 'DAU, išlaikymas, PROM užbaigimo lygis…',
	searchHintEmptyHtml: 'Rašykite, kad ieškotumėte. Išbandykite <em>DAU</em>, <em>išlaikymas</em> arba <em>PROM</em>.',
	noResultsPrefix: 'Nėra temų, atitinkančių ',
	noResultsMiddle: '. Pabandykite platesnį terminą arba naršykite ',
	resultsCountSingular: 'tema',
	resultsCountPlural: 'temos',

	topicPosition: (index, total) => `Tema ${index} iš ${total}`,
	onThisPage: 'Šiame puslapyje',
	paginationLabel: 'Knyga',
	paginationPrevious: 'Ankstesnė',
	paginationNext: 'Kita'
};

/** @type {Messages} */
const chrome_lv = {
	skipToContent: 'Pāriet uz saturu',
	navHome: 'Sākums',
	navContents: 'Saturs',
	navTopicsAZ: 'Tēmas A–Z',
	navSearch: 'Meklēt',
	navAbout: 'Par grāmatu',
	footerSourceLink: 'Avots',
	footerTaglineSuffix:
		' — digitālās veselības rādītāju definīcijas, piemēri un pamatojums komandām, kas izstrādā, novērtē un pasūta digitālās veselības produktus.',
	footerNote:
		'Šīs grāmatas skaitļi ātri noveco. Katrā tēmā salīdzinošie rādītāji ir datēti tekstā; pirms jebkura skaitļa izmantošanas reālā uzņēmējdarbības pamatojumā pārbaudiet to vēlreiz.',
	pickerTheme: 'Motīvs',
	pickerLanguage: 'Valoda',
	pickerTextSize: 'Teksta izmērs',
	pickerShare: 'Kopīgot',
	pickerLinks: 'Saites',
	shareCopyLink: 'Kopēt saiti',
	shareCopied: 'Nokopēts',
	shareCopyFailed: 'Kopēšana neizdevās',
	shareEmailLabel: 'Nosūtīt saiti e-pastā',
	shareLinkedinLabel: 'Kopīgot vietnē LinkedIn',
	shareRedditLabel: 'Kopīgot vietnē Reddit',
	shareBlueskyLabel: 'Kopīgot vietnē Bluesky',
	shareMastodonLabel: 'Kopīgot vietnē Mastodon',

	startHere: 'Sāciet šeit',
	startHereSubtitle: 'Trīs idejas, uz kurām balstās viss pārējais.',

	contentsMetaDescription: (bookTitle) => `Visas grāmatas “${bookTitle}” tēmas lasīšanas secībā.`,
	contentsIntro: (count, parts) =>
		`Visas ${count} tēmas lasīšanas secībā, ${parts} daļās. Katra tēma aplūko vienu rādītāju vai jēdzienu: definīciju, nozīmi, aprēķinu, aprēķina piemēru, datu avotus un ierobežojumus, biežākās kļūdas un avotus.`,
	topicsCountSubtitle: (n) => `${n} tēmas`,

	topicsMetaDescription: (bookTitle) => `Visas grāmatas “${bookTitle}” tēmas alfabētiskā secībā.`,
	topicsIntroPrefix: (count) => `Visas ${count} tēmas alfabētiskā secībā. Lasīšanas secību skatiet sadaļā`,
	contentsLinkText: 'saturs',
	jumpToLetter: 'Pāriet uz burtu',

	searchMetaDescription: (bookTitle) => `Meklēt visās grāmatas “${bookTitle}” tēmās.`,
	searchIntro: (count) =>
		`Meklējiet visās ${count} tēmās pēc nosaukuma, daļas, kopsavilkuma un sadaļas virsraksta. Viss darbojas jūsu pārlūkprogrammā — nekas, ko ievadāt, neatstāj šo lapu.`,
	searchInputLabel: 'Meklēt tēmas',
	searchPlaceholder: 'DAU, noturēšana, PROM aizpildes līmenis…',
	searchHintEmptyHtml: 'Ierakstiet, lai meklētu. Izmēģiniet <em>DAU</em>, <em>noturēšana</em> vai <em>PROM</em>.',
	noResultsPrefix: 'Neviena tēma neatbilst vaicājumam ',
	noResultsMiddle: '. Izmēģiniet plašāku terminu vai pārlūkojiet sadaļu ',
	resultsCountSingular: 'tēma',
	resultsCountPlural: 'tēmas',

	topicPosition: (index, total) => `${index}. tēma no ${total}`,
	onThisPage: 'Šajā lapā',
	paginationLabel: 'Grāmata',
	paginationPrevious: 'Iepriekšējā',
	paginationNext: 'Nākamā'
};

/** @type {Messages} */
const chrome_mr = {
	skipToContent: 'मजकुरावर जा',
	navHome: 'मुखपृष्ठ',
	navContents: 'अनुक्रमणिका',
	navTopicsAZ: 'विषय अ–ज्ञ',
	navSearch: 'शोध',
	navAbout: 'माहिती',
	footerSourceLink: 'स्रोत',
	footerTaglineSuffix:
		' — डिजिटल आरोग्य मेट्रिक व्याख्या, उदाहरणे आणि तर्क, डिजिटल आरोग्य उत्पादने बांधणाऱ्या, त्यांचे मूल्यमापन करणाऱ्या आणि ती सुरू करवून घेणाऱ्या चमूंसाठी.',
	footerNote:
		'या पुस्तकातील आकडेवारी लवकर जुनी होते. प्रत्येक विषय आपले तुलनात्मक मानक मजकुरातच दिनांकित करतो; प्रत्यक्ष व्यवसाय प्रकरणात कोणताही आकडा वापरण्यापूर्वी तो पुन्हा पडताळा.',
	pickerTheme: 'थीम',
	pickerLanguage: 'भाषा',
	pickerTextSize: 'अक्षरांचा आकार',
	pickerShare: 'शेअर करा',
	pickerLinks: 'दुवे',
	shareCopyLink: 'दुवा कॉपी करा',
	shareCopied: 'कॉपी झाले',
	shareCopyFailed: 'कॉपी अयशस्वी',
	shareEmailLabel: 'दुवा ईमेल करा',
	shareLinkedinLabel: 'LinkedIn वर शेअर करा',
	shareRedditLabel: 'Reddit वर शेअर करा',
	shareBlueskyLabel: 'Bluesky वर शेअर करा',
	shareMastodonLabel: 'Mastodon वर शेअर करा',

	startHere: 'इथून सुरू करा',
	startHereSubtitle: 'बाकी सर्व ज्यावर उभे आहे अशा तीन कल्पना.',

	contentsMetaDescription: (bookTitle) => `${bookTitle} मधील प्रत्येक विषय, वाचन क्रमाने.`,
	contentsIntro: (count, parts) =>
		`सर्व ${count} विषय वाचन क्रमाने, ${parts} भागांमध्ये. प्रत्येक विषय एका मेट्रिकचा किंवा संकल्पनेचा आहे: व्याख्या, ते का महत्त्वाचे, त्याची गणना कशी करतात, सोडवलेले उदाहरण, डेटा स्रोत आणि सावधानता, सामान्य चुका आणि स्रोत.`,
	topicsCountSubtitle: (n) => `${n} विषय`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} मधील प्रत्येक विषय, अकारविल्हे.`,
	topicsIntroPrefix: (count) => `सर्व ${count} विषय अकारविल्हे. वाचन क्रमासाठी पाहा`,
	contentsLinkText: 'अनुक्रमणिका',
	jumpToLetter: 'अक्षराकडे जा',

	searchMetaDescription: (bookTitle) => `${bookTitle} मधील प्रत्येक विषय शोधा.`,
	searchIntro: (count) =>
		`सर्व ${count} विषय शीर्षक, भाग, सारांश आणि विभाग शीर्षकानुसार शोधा. सर्व काही तुमच्या ब्राउझरमध्येच चालते — तुम्ही टाइप केलेले काहीही या पानाबाहेर जात नाही.`,
	searchInputLabel: 'विषय शोधा',
	searchPlaceholder: 'DAU, टिकाव, PROM पूर्णता दर…',
	searchHintEmptyHtml: 'शोधण्यासाठी टाइप करा. <em>DAU</em>, <em>टिकाव</em> किंवा <em>PROM</em> वापरून पाहा.',
	noResultsPrefix: 'कोणताही विषय ',
	noResultsMiddle: ' शी जुळत नाही. अधिक व्यापक शब्द वापरून पाहा, किंवा पाहा ',
	resultsCountSingular: 'विषय',
	resultsCountPlural: 'विषय',

	topicPosition: (index, total) => `विषय ${index} / ${total}`,
	onThisPage: 'या पानावर',
	paginationLabel: 'पुस्तक',
	paginationPrevious: 'मागील',
	paginationNext: 'पुढील'
};

/** @type {Messages} */
const chrome_ms = {
	skipToContent: 'Langkau ke kandungan',
	navHome: 'Laman utama',
	navContents: 'Kandungan',
	navTopicsAZ: 'Topik A–Z',
	navSearch: 'Cari',
	navAbout: 'Perihal',
	footerSourceLink: 'Sumber',
	footerTaglineSuffix:
		' — takrifan metrik kesihatan digital, contoh dan penaakulan untuk pasukan yang membina, menilai dan menugaskan produk kesihatan digital.',
	footerNote:
		'Angka dalam buku ini cepat lapuk. Setiap topik menyatakan tarikh penanda aras secara sebaris; semak semula sebelum menggunakan sebarang angka dalam kes perniagaan sebenar.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Bahasa',
	pickerTextSize: 'Saiz teks',
	pickerShare: 'Kongsi',
	pickerLinks: 'Pautan',
	shareCopyLink: 'Salin pautan',
	shareCopied: 'Disalin',
	shareCopyFailed: 'Gagal menyalin',
	shareEmailLabel: 'E-mel pautan',
	shareLinkedinLabel: 'Kongsi di LinkedIn',
	shareRedditLabel: 'Kongsi di Reddit',
	shareBlueskyLabel: 'Kongsi di Bluesky',
	shareMastodonLabel: 'Kongsi di Mastodon',

	startHere: 'Mulakan di sini',
	startHereSubtitle: 'Tiga idea yang menjadi asas kepada semua yang lain.',

	contentsMetaDescription: (bookTitle) => `Setiap topik dalam ${bookTitle}, mengikut susunan bacaan.`,
	contentsIntro: (count, parts) =>
		`Kesemua ${count} topik mengikut susunan bacaan, merentasi ${parts} bahagian. Setiap topik merangkumi satu metrik atau konsep: takrifan, kepentingannya, cara pengiraan, contoh kerja, sumber data dan kaveat, perangkap, serta sumber rujukan.`,
	topicsCountSubtitle: (n) => `${n} topik`,

	topicsMetaDescription: (bookTitle) => `Setiap topik dalam ${bookTitle}, disenaraikan dari A hingga Z.`,
	topicsIntroPrefix: (count) => `Kesemua ${count} topik mengikut abjad. Untuk susunan bacaan, lihat`,
	contentsLinkText: 'kandungan',
	jumpToLetter: 'Lompat ke huruf',

	searchMetaDescription: (bookTitle) => `Cari setiap topik dalam ${bookTitle}.`,
	searchIntro: (count) =>
		`Cari dalam kesemua ${count} topik mengikut tajuk, bahagian, ringkasan dan tajuk seksyen. Semuanya berjalan dalam pelayar anda — tiada apa yang anda taip meninggalkan halaman ini.`,
	searchInputLabel: 'Cari topik',
	searchPlaceholder: 'DAU, pengekalan, kadar penyiapan PROM…',
	searchHintEmptyHtml: 'Taip untuk mencari. Cuba <em>DAU</em>, <em>pengekalan</em> atau <em>PROM</em>.',
	noResultsPrefix: 'Tiada topik sepadan dengan ',
	noResultsMiddle: '. Cuba istilah yang lebih luas, atau layari ',
	resultsCountSingular: 'topik',
	resultsCountPlural: 'topik',

	topicPosition: (index, total) => `Topik ${index} daripada ${total}`,
	onThisPage: 'Pada halaman ini',
	paginationLabel: 'Buku',
	paginationPrevious: 'Sebelumnya',
	paginationNext: 'Seterusnya'
};

/** @type {Messages} */
const chrome_mt = {
	skipToContent: 'Aqbeż għall-kontenut',
	navHome: 'Home',
	navContents: 'Werrej',
	navTopicsAZ: 'Suġġetti A–Ż',
	navSearch: 'Fittex',
	navAbout: 'Dwar',
	footerSourceLink: 'Sors',
	footerTaglineSuffix:
		' — definizzjonijiet ta\' metriki tas-saħħa diġitali, eżempji u raġunament għal timijiet li jibnu, jevalwaw u jikkummissjonaw prodotti tas-saħħa diġitali.',
	footerNote:
		'Iċ-ċifri f\'dan il-ktieb jiskadu malajr. Kull suġġett jipprovdi d-data tal-parametri ta\' paragun tiegħu fit-test; erġa\' vverifika qabel ma tuża xi numru f\'każ kummerċjali attwali.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Lingwa',
	pickerTextSize: 'Daqs tat-test',
	pickerShare: 'Aqsam',
	pickerLinks: 'Links',
	shareCopyLink: 'Ikkopja l-link',
	shareCopied: 'Ikkopjat',
	shareCopyFailed: 'Il-kopja falliet',
	shareEmailLabel: 'Ibgħat il-link bl-email',
	shareLinkedinLabel: 'Aqsam fuq LinkedIn',
	shareRedditLabel: 'Aqsam fuq Reddit',
	shareBlueskyLabel: 'Aqsam fuq Bluesky',
	shareMastodonLabel: 'Aqsam fuq Mastodon',

	startHere: 'Ibda hawn',
	startHereSubtitle: 'It-tliet ideat li kull ħaġa oħra tibni fuqhom.',

	contentsMetaDescription: (bookTitle) => `Kull suġġett f'${bookTitle}, f\'ordni tal-qari.`,
	contentsIntro: (count, parts) =>
		`Is-${count} suġġetti kollha f\'ordni tal-qari, maqsuma f'${parts} partijiet. Kull suġġett jittratta metrika jew kunċett wieħed: definizzjoni, għaliex hu importanti, kif jiġi kkalkulat, eżempju kkalkulat, sorsi tad-data u twissijiet, żbalji komuni u sorsi.`,
	topicsCountSubtitle: (n) => `${n} suġġetti`,

	topicsMetaDescription: (bookTitle) => `Kull suġġett f'${bookTitle}, elenkat minn A sa Ż.`,
	topicsIntroPrefix: (count) => `Is-${count} suġġetti kollha f\'ordni alfabetika. Għall-ordni tal-qari, ara`,
	contentsLinkText: 'il-werrej',
	jumpToLetter: 'Aqbeż għall-ittra',

	searchMetaDescription: (bookTitle) => `Fittex kull suġġett f'${bookTitle}.`,
	searchIntro: (count) =>
		`Fittex fost is-${count} suġġetti kollha skont it-titlu, il-parti, is-sommarju u l-intestaturi tat-taqsimiet. Kollox jaħdem fil-browser tiegħek — dak li tikteb ma joħroġx minn din il-paġna.`,
	searchInputLabel: 'Fittex suġġetti',
	searchPlaceholder: 'DAU, żamma, rata ta\' tlestija tal-PROM…',
	searchHintEmptyHtml: 'Ikteb biex tfittex. Ipprova <em>DAU</em>, <em>żamma</em> jew <em>PROM</em>.',
	noResultsPrefix: 'L-ebda suġġett ma jaqbel ma\' ',
	noResultsMiddle: '. Ipprova terminu usa\', jew ara ',
	resultsCountSingular: 'suġġett',
	resultsCountPlural: 'suġġetti',

	topicPosition: (index, total) => `Suġġett ${index} minn ${total}`,
	onThisPage: 'F\'din il-paġna',
	paginationLabel: 'Ktieb',
	paginationPrevious: 'Preċedenti',
	paginationNext: 'Li jmiss'
};

/** @type {Messages} */
const chrome_pcm = {
	skipToContent: 'Skip go di main content',
	navHome: 'Home',
	navContents: 'Contents',
	navTopicsAZ: 'Topiks A–Z',
	navSearch: 'Search',
	navAbout: 'About',
	footerSourceLink: 'Source',
	footerTaglineSuffix:
		' — definition, example, and reason for digital health metric, for teams wey dey build, evaluate, and commission digital health products.',
	footerNote:
		'Di figures for dis book dey old fast. Each topik dey put date for im benchmarks inside di text; check dem again before you use any number for real business case.',
	pickerTheme: 'Theme',
	pickerLanguage: 'Language',
	pickerTextSize: 'Text size',
	pickerShare: 'Share',
	pickerLinks: 'Links',
	shareCopyLink: 'Copy link',
	shareCopied: 'Don copy',
	shareCopyFailed: 'Copy no work',
	shareEmailLabel: 'Email di link',
	shareLinkedinLabel: 'Share for LinkedIn',
	shareRedditLabel: 'Share for Reddit',
	shareBlueskyLabel: 'Share for Bluesky',
	shareMastodonLabel: 'Share for Mastodon',

	startHere: 'Start here',
	startHereSubtitle: 'Di three ideas wey everything else dey stand on.',

	contentsMetaDescription: (bookTitle) => `Every topik for ${bookTitle}, for reading order.`,
	contentsIntro: (count, parts) =>
		`All ${count} topiks for reading order, across ${parts} parts. Each topik dey cover one metric or idea: definition, why e matter, how dem dey calculate am, worked example, data sources and caveats, pitfalls, and sources.`,
	topicsCountSubtitle: (n) => `${n} topiks`,

	topicsMetaDescription: (bookTitle) => `Every topik for ${bookTitle}, list from A go Z.`,
	topicsIntroPrefix: (count) => `All ${count} topiks for alphabetical order. For reading order, look di`,
	contentsLinkText: 'contents',
	jumpToLetter: 'Jump go letter',

	searchMetaDescription: (bookTitle) => `Search every topik for ${bookTitle}.`,
	searchIntro: (count) =>
		`Search all ${count} topiks by title, part, summary, and section heading. Everything dey run for your browser — nothing wey you type no dey leave dis page.`,
	searchInputLabel: 'Search topiks',
	searchPlaceholder: 'DAU, retention, PROM completion rate…',
	searchHintEmptyHtml: 'Type to search. Try <em>DAU</em>, <em>retention</em>, or <em>PROM</em>.',
	noResultsPrefix: 'No topik match ',
	noResultsMiddle: '. Try wider word, or browse di ',
	resultsCountSingular: 'topik',
	resultsCountPlural: 'topiks',

	topicPosition: (index, total) => `Topik ${index} for ${total}`,
	onThisPage: 'For dis page',
	paginationLabel: 'Book',
	paginationPrevious: 'Previous',
	paginationNext: 'Next'
};

/** @type {Messages} */
const chrome_ro = {
	skipToContent: 'Salt la conținut',
	navHome: 'Acasă',
	navContents: 'Cuprins',
	navTopicsAZ: 'Subiecte A–Z',
	navSearch: 'Căutare',
	navAbout: 'Despre',
	footerSourceLink: 'Sursă',
	footerTaglineSuffix:
		' — definiții, exemple și raționamente pentru metricile de sănătate digitală, destinate echipelor care construiesc, evaluează și comandă produse de sănătate digitală.',
	footerNote:
		'Cifrele din această carte se perimează rapid. Fiecare subiect datează reperele în text; verificați-le din nou înainte de a folosi o cifră într-un studiu de caz real.',
	pickerTheme: 'Temă',
	pickerLanguage: 'Limbă',
	pickerTextSize: 'Dimensiunea textului',
	pickerShare: 'Distribuie',
	pickerLinks: 'Linkuri',
	shareCopyLink: 'Copiază linkul',
	shareCopied: 'Copiat',
	shareCopyFailed: 'Copierea a eșuat',
	shareEmailLabel: 'Trimite linkul prin e-mail',
	shareLinkedinLabel: 'Distribuie pe LinkedIn',
	shareRedditLabel: 'Distribuie pe Reddit',
	shareBlueskyLabel: 'Distribuie pe Bluesky',
	shareMastodonLabel: 'Distribuie pe Mastodon',

	startHere: 'Începeți de aici',
	startHereSubtitle: 'Cele trei idei pe care se sprijină tot restul.',

	contentsMetaDescription: (bookTitle) => `Toate subiectele din ${bookTitle}, în ordinea lecturii.`,
	contentsIntro: (count, parts) =>
		`Toate cele ${count} subiecte, în ordinea lecturii, repartizate în ${parts} părți. Fiecare subiect tratează o metrică sau un concept: definiția, de ce contează, cum se calculează, un exemplu aplicat, sursele de date și limitările, capcanele frecvente și sursele.`,
	topicsCountSubtitle: (n) => `${n} subiecte`,

	topicsMetaDescription: (bookTitle) => `Toate subiectele din ${bookTitle}, în ordine alfabetică.`,
	topicsIntroPrefix: (count) => `Toate cele ${count} subiecte, în ordine alfabetică. Pentru ordinea lecturii, consultați`,
	contentsLinkText: 'cuprinsul',
	jumpToLetter: 'Salt la literă',

	searchMetaDescription: (bookTitle) => `Căutați în toate subiectele din ${bookTitle}.`,
	searchIntro: (count) =>
		`Căutați în toate cele ${count} subiecte după titlu, parte, rezumat și titlul secțiunii. Totul rulează în browserul dumneavoastră — nimic din ce tastați nu părăsește această pagină.`,
	searchInputLabel: 'Căutare în subiecte',
	searchPlaceholder: 'DAU, retenție, rata de finalizare PROM…',
	searchHintEmptyHtml: 'Tastați pentru a căuta. Încercați <em>DAU</em>, <em>retenție</em> sau <em>PROM</em>.',
	noResultsPrefix: 'Niciun subiect nu corespunde pentru ',
	noResultsMiddle: '. Încercați un termen mai general sau răsfoiți ',
	resultsCountSingular: 'subiect',
	resultsCountPlural: 'subiecte',

	topicPosition: (index, total) => `Subiectul ${index} din ${total}`,
	onThisPage: 'Pe această pagină',
	paginationLabel: 'Carte',
	paginationPrevious: 'Anterior',
	paginationNext: 'Următorul'
};

/** @type {Messages} */
const chrome_sco = {
	skipToContent: 'Skip tae content',
	navHome: 'Hame',
	navContents: 'Contents',
	navTopicsAZ: 'Tapics A–Z',
	navSearch: 'Seirch',
	navAbout: 'Aboot',
	footerSourceLink: 'Source',
	footerTaglineSuffix:
		' — digital health metric definitions, examples, an reasonin for teams biggin, evaluatin, an commissionin digital health products.',
	footerNote:
		'Figures in this beuk date quick. Ilka tapic dates its benchmarks in-line; check again afore uisin ony nummer in a live business case.',
	pickerTheme: 'Theme',
	pickerLanguage: 'Leid',
	pickerTextSize: 'Text size',
	pickerShare: 'Share',
	pickerLinks: 'Links',
	shareCopyLink: 'Copy link',
	shareCopied: 'Copied',
	shareCopyFailed: 'Copy failed',
	shareEmailLabel: 'Email link',
	shareLinkedinLabel: 'Share on LinkedIn',
	shareRedditLabel: 'Share on Reddit',
	shareBlueskyLabel: 'Share on Bluesky',
	shareMastodonLabel: 'Share on Mastodon',

	startHere: 'Stairt here',
	startHereSubtitle: 'The three ideas that aathin else is biggit on.',

	contentsMetaDescription: (bookTitle) => `Ilka tapic in ${bookTitle}, in readin order.`,
	contentsIntro: (count, parts) =>
		`Aa ${count} tapics in readin order, athort ${parts} pairts. Ilka tapic taks in ae metric or concept: definition, why it maitters, hoo it's caulculatit, a warked example, data sources an caveats, pitfaas, an sources.`,
	topicsCountSubtitle: (n) => `${n} tapics`,

	topicsMetaDescription: (bookTitle) => `Ilka tapic in ${bookTitle}, listit A tae Z.`,
	topicsIntroPrefix: (count) => `Aa ${count} tapics in alphabetical order. For readin order, see the`,
	contentsLinkText: 'contents',
	jumpToLetter: 'Lowp tae letter',

	searchMetaDescription: (bookTitle) => `Seirch ilka tapic in ${bookTitle}.`,
	searchIntro: (count) =>
		`Seirch aa ${count} tapics by title, pairt, summary, an section heidin. Aathing rins in yer brouser — naething ye type leaves this page.`,
	searchInputLabel: 'Seirch tapics',
	searchPlaceholder: 'DAU, retention, PROM completion rate…',
	searchHintEmptyHtml: 'Type tae seirch. Try <em>DAU</em>, <em>retention</em>, or <em>PROM</em>.',
	noResultsPrefix: 'Nae tapics match ',
	noResultsMiddle: '. Try a braider term, or broose the ',
	resultsCountSingular: 'tapic',
	resultsCountPlural: 'tapics',

	topicPosition: (index, total) => `Tapic ${index} o ${total}`,
	onThisPage: 'On this page',
	paginationLabel: 'Beuk',
	paginationPrevious: 'Previous',
	paginationNext: 'Neist'
};

/** @type {Messages} */
const chrome_sk = {
	skipToContent: 'Preskočiť na obsah',
	navHome: 'Domov',
	navContents: 'Obsah',
	navTopicsAZ: 'Témy A–Z',
	navSearch: 'Hľadať',
	navAbout: 'O knihe',
	footerSourceLink: 'Zdrojový kód',
	footerTaglineSuffix:
		' — definície metrík digitálneho zdravia, príklady a úvahy pre tímy, ktoré digitálne zdravotnícke produkty vytvárajú, hodnotia a objednávajú.',
	footerNote:
		'Čísla v tejto knihe rýchlo zastarávajú. Každá téma datuje svoje referenčné hodnoty priamo v texte; pred použitím akéhokoľvek čísla v reálnom podnikateľskom pláne ho znova overte.',
	pickerTheme: 'Vzhľad',
	pickerLanguage: 'Jazyk',
	pickerTextSize: 'Veľkosť textu',
	pickerShare: 'Zdieľať',
	pickerLinks: 'Odkazy',
	shareCopyLink: 'Kopírovať odkaz',
	shareCopied: 'Skopírované',
	shareCopyFailed: 'Kopírovanie zlyhalo',
	shareEmailLabel: 'Poslať odkaz e-mailom',
	shareLinkedinLabel: 'Zdieľať na LinkedIn',
	shareRedditLabel: 'Zdieľať na Reddit',
	shareBlueskyLabel: 'Zdieľať na Bluesky',
	shareMastodonLabel: 'Zdieľať na Mastodon',

	startHere: 'Začnite tu',
	startHereSubtitle: 'Tri myšlienky, na ktorých stavia všetko ostatné.',

	contentsMetaDescription: (bookTitle) => `Všetky témy knihy ${bookTitle} v poradí čítania.`,
	contentsIntro: (count, parts) =>
		`Všetkých ${count} tém v poradí čítania, rozdelených do ${parts} častí. Každá téma pokrýva jednu metriku alebo pojem: definíciu, prečo je dôležitá, ako sa počíta, prepracovaný príklad, zdroje údajov a výhrady, nástrahy a zdroje.`,
	topicsCountSubtitle: (n) => `${n} tém`,

	topicsMetaDescription: (bookTitle) => `Všetky témy knihy ${bookTitle} v abecednom poradí od A po Z.`,
	topicsIntroPrefix: (count) => `Všetkých ${count} tém v abecednom poradí. Poradie čítania nájdete v časti`,
	contentsLinkText: 'obsah',
	jumpToLetter: 'Prejsť na písmeno',

	searchMetaDescription: (bookTitle) => `Hľadajte vo všetkých témach knihy ${bookTitle}.`,
	searchIntro: (count) =>
		`Hľadajte vo všetkých ${count} témach podľa názvu, časti, zhrnutia a nadpisu sekcie. Všetko beží vo vašom prehliadači — nič, čo zadáte, neopustí túto stránku.`,
	searchInputLabel: 'Hľadať v témach',
	searchPlaceholder: 'DAU, udržanie používateľov, miera dokončenia PROM…',
	searchHintEmptyHtml: 'Začnite písať. Skúste <em>DAU</em>, <em>udržanie</em> alebo <em>PROM</em>.',
	noResultsPrefix: 'Žiadne témy nezodpovedajú výrazu ',
	noResultsMiddle: '. Skúste všeobecnejší výraz alebo prehľadajte ',
	resultsCountSingular: 'téma',
	resultsCountPlural: 'tém',

	topicPosition: (index, total) => `Téma ${index} z ${total}`,
	onThisPage: 'Na tejto stránke',
	paginationLabel: 'Kniha',
	paginationPrevious: 'Predchádzajúca',
	paginationNext: 'Ďalšia'
};

/** @type {Messages} */
const chrome_sl = {
	skipToContent: 'Preskoči na vsebino',
	navHome: 'Domov',
	navContents: 'Kazalo',
	navTopicsAZ: 'Teme A–Ž',
	navSearch: 'Iskanje',
	navAbout: 'O knjigi',
	footerSourceLink: 'Vir',
	footerTaglineSuffix:
		' — opredelitve kazalnikov digitalnega zdravja, primeri in utemeljitve za ekipe, ki razvijajo, vrednotijo in naročajo digitalne zdravstvene izdelke.',
	footerNote:
		'Podatki v tej knjigi hitro zastarajo. Vsaka tema v besedilu navaja datum svojih primerjalnih vrednosti; pred uporabo katere koli številke v dejanski poslovni utemeljitvi jih ponovno preverite.',
	pickerTheme: 'Tema videza',
	pickerLanguage: 'Jezik',
	pickerTextSize: 'Velikost besedila',
	pickerShare: 'Deli',
	pickerLinks: 'Povezave',
	shareCopyLink: 'Kopiraj povezavo',
	shareCopied: 'Kopirano',
	shareCopyFailed: 'Kopiranje ni uspelo',
	shareEmailLabel: 'Pošlji povezavo po e-pošti',
	shareLinkedinLabel: 'Deli na LinkedIn',
	shareRedditLabel: 'Deli na Reddit',
	shareBlueskyLabel: 'Deli na Bluesky',
	shareMastodonLabel: 'Deli na Mastodon',

	startHere: 'Začnite tukaj',
	startHereSubtitle: 'Tri zamisli, na katerih temelji vse ostalo.',

	contentsMetaDescription: (bookTitle) => `Vse teme v knjigi ${bookTitle} po vrstnem redu branja.`,
	contentsIntro: (count, parts) =>
		`Vseh ${count} tem po vrstnem redu branja, v ${parts} delih. Vsaka tema obravnava en kazalnik ali pojem: opredelitev, zakaj je pomemben, kako se izračuna, izračunani primer, viri podatkov in omejitve, pogoste pasti ter viri.`,
	topicsCountSubtitle: (n) => `Število tem: ${n}`,

	topicsMetaDescription: (bookTitle) => `Vse teme v knjigi ${bookTitle}, navedene od A do Ž.`,
	topicsIntroPrefix: (count) => `Vseh ${count} tem po abecednem vrstnem redu. Za vrstni red branja glejte`,
	contentsLinkText: 'kazalo',
	jumpToLetter: 'Skoči na črko',

	searchMetaDescription: (bookTitle) => `Poiščite katero koli temo v knjigi ${bookTitle}.`,
	searchIntro: (count) =>
		`Poiščite med vsemi ${count} temami po naslovu, delu, povzetku in naslovu razdelka. Vse poteka v vašem brskalniku — nič, kar vpišete, ne zapusti te strani.`,
	searchInputLabel: 'Iskanje tem',
	searchPlaceholder: 'DAU, zadržanje, stopnja izpolnitve PROM…',
	searchHintEmptyHtml: 'Vpišite iskani izraz. Poskusite <em>DAU</em>, <em>zadržanje</em> ali <em>PROM</em>.',
	noResultsPrefix: 'Nobena tema ne ustreza iskanju ',
	noResultsMiddle: '. Poskusite s širšim izrazom ali prebrskajte ',
	resultsCountSingular: 'tema',
	resultsCountPlural: 'tem',

	topicPosition: (index, total) => `Tema ${index} od ${total}`,
	onThisPage: 'Na tej strani',
	paginationLabel: 'Knjiga',
	paginationPrevious: 'Prejšnja',
	paginationNext: 'Naslednja'
};

/** @type {Messages} */
const chrome_ta = {
	skipToContent: 'உள்ளடக்கத்துக்குச் செல்',
	navHome: 'முகப்பு',
	navContents: 'உள்ளடக்கம்',
	navTopicsAZ: 'தலைப்புகள் அ–ஃ',
	navSearch: 'தேடல்',
	navAbout: 'பற்றி',
	footerSourceLink: 'மூலம்',
	footerTaglineSuffix:
		' - டிஜிட்டல் சுகாதாரப் பொருட்களை உருவாக்கும், மதிப்பிடும், ஆணையிடும் குழுக்களுக்கான டிஜிட்டல் சுகாதார அளவீட்டு வரையறைகள், எடுத்துக்காட்டுகள், தர்க்கம்.',
	footerNote:
		'இந்த நூலில் உள்ள புள்ளிவிவரங்கள் விரைவாகக் காலாவதியாகின்றன. ஒவ்வொரு தலைப்பும் தன் ஒப்பீட்டு மதிப்புகளுக்கு உரைக்குள்ளேயே தேதியிடுகிறது; நேரடி வணிக வழக்கில் எந்த எண்ணையும் பயன்படுத்தும் முன் மீண்டும் சரிபார்க்கவும்.',
	pickerTheme: 'தோற்றம்',
	pickerLanguage: 'மொழி',
	pickerTextSize: 'எழுத்தின் அளவு',
	pickerShare: 'பகிர்',
	pickerLinks: 'இணைப்புகள்',
	shareCopyLink: 'இணைப்பை நகலெடு',
	shareCopied: 'நகலெடுக்கப்பட்டது',
	shareCopyFailed: 'நகலெடுப்பு தோல்வி',
	shareEmailLabel: 'இணைப்பை மின்னஞ்சல் செய்',
	shareLinkedinLabel: 'LinkedIn இல் பகிர்',
	shareRedditLabel: 'Reddit இல் பகிர்',
	shareBlueskyLabel: 'Bluesky இல் பகிர்',
	shareMastodonLabel: 'Mastodon இல் பகிர்',

	startHere: 'இங்கிருந்து தொடங்குங்கள்',
	startHereSubtitle: 'மற்ற அனைத்தும் அடிப்படையாகக் கொள்ளும் மூன்று கருத்துகள்.',

	contentsMetaDescription: (bookTitle) => `${bookTitle} நூலின் அனைத்துத் தலைப்புகளும், வாசிப்பு வரிசையில்.`,
	contentsIntro: (count, parts) =>
		`மொத்தம் ${count} தலைப்புகளும் வாசிப்பு வரிசையில், ${parts} பகுதிகளாக. ஒவ்வொரு தலைப்பும் ஓர் அளவீட்டை அல்லது கருத்தை விளக்குகிறது: வரையறை, அது ஏன் முக்கியம், அது எவ்வாறு கணக்கிடப்படுகிறது, ஒரு செயல்விளக்க எடுத்துக்காட்டு, தரவு மூலங்களும் எச்சரிக்கைகளும், பொதுவான தவறுகள், மூலங்கள்.`,
	topicsCountSubtitle: (n) => `${n} தலைப்புகள்`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} நூலின் அனைத்துத் தலைப்புகளும், அகர வரிசையில்.`,
	topicsIntroPrefix: (count) => `மொத்தம் ${count} தலைப்புகளும் அகர வரிசையில். வாசிப்பு வரிசைக்கு, பார்க்க:`,
	contentsLinkText: 'உள்ளடக்கம்',
	jumpToLetter: 'எழுத்துக்குச் செல்',

	searchMetaDescription: (bookTitle) => `${bookTitle} நூலின் அனைத்துத் தலைப்புகளிலும் தேடுங்கள்.`,
	searchIntro: (count) =>
		`மொத்தம் ${count} தலைப்புகளிலும் தலைப்பு, பகுதி, சுருக்கம், பிரிவுத் தலைப்பு ஆகியவற்றின் மூலம் தேடுங்கள். அனைத்தும் உங்கள் உலாவியிலேயே இயங்குகின்றன - நீங்கள் தட்டச்சு செய்தது எதுவும் இந்தப் பக்கத்தை விட்டு வெளியேறாது.`,
	searchInputLabel: 'தலைப்புகளில் தேடு',
	searchPlaceholder: 'DAU, தக்கவைப்பு, PROM நிறைவு விகிதம்…',
	searchHintEmptyHtml: 'தேட தட்டச்சு செய்யுங்கள். <em>DAU</em>, <em>தக்கவைப்பு</em>, அல்லது <em>PROM</em> என முயலுங்கள்.',
	noResultsPrefix: 'பொருந்தும் தலைப்புகள் இல்லை: ',
	noResultsMiddle: '. பரந்த சொல்லை முயலுங்கள், அல்லது உலாவுங்கள்: ',
	resultsCountSingular: 'தலைப்பு',
	resultsCountPlural: 'தலைப்புகள்',

	topicPosition: (index, total) => `${total} தலைப்புகளில் ${index}-வது`,
	onThisPage: 'இந்தப் பக்கத்தில்',
	paginationLabel: 'நூல்',
	paginationPrevious: 'முந்தையது',
	paginationNext: 'அடுத்தது'
};

/** @type {Messages} */
const chrome_te = {
	skipToContent: 'కంటెంట్‌కు వెళ్లండి',
	navHome: 'హోమ్',
	navContents: 'విషయసూచిక',
	navTopicsAZ: 'అంశాలు A–Z',
	navSearch: 'శోధన',
	navAbout: 'గురించి',
	footerSourceLink: 'మూలం',
	footerTaglineSuffix:
		' — డిజిటల్ హెల్త్ ఉత్పత్తులను నిర్మించే, మూల్యాంకనం చేసే, కమిషన్ చేసే బృందాల కోసం డిజిటల్ హెల్త్ మెట్రిక్ నిర్వచనాలు, ఉదాహరణలు, వివరణ.',
	footerNote:
		'ఈ పుస్తకంలోని గణాంకాలు త్వరగా పాతబడతాయి. ప్రతి అంశం తన బెంచ్‌మార్క్‌ల తేదీని అక్కడక్కడే పేర్కొంటుంది; నిజమైన వ్యాపార ప్రతిపాదనలో ఏదైనా సంఖ్యను వాడే ముందు దాన్ని మళ్లీ ధృవీకరించండి.',
	pickerTheme: 'థీమ్',
	pickerLanguage: 'భాష',
	pickerTextSize: 'అక్షరాల పరిమాణం',
	pickerShare: 'షేర్ చేయండి',
	pickerLinks: 'లింక్‌లు',
	shareCopyLink: 'లింక్ కాపీ చేయండి',
	shareCopied: 'కాపీ అయింది',
	shareCopyFailed: 'కాపీ విఫలమైంది',
	shareEmailLabel: 'లింక్‌ను ఇమెయిల్ చేయండి',
	shareLinkedinLabel: 'LinkedInలో షేర్ చేయండి',
	shareRedditLabel: 'Redditలో షేర్ చేయండి',
	shareBlueskyLabel: 'Blueskyలో షేర్ చేయండి',
	shareMastodonLabel: 'Mastodonలో షేర్ చేయండి',

	startHere: 'ఇక్కడ మొదలుపెట్టండి',
	startHereSubtitle: 'మిగతా అన్నిటికీ పునాదిగా నిలిచే మూడు ఆలోచనలు.',

	contentsMetaDescription: (bookTitle) => `${bookTitle}లోని ప్రతి అంశం, చదివే క్రమంలో.`,
	contentsIntro: (count, parts) =>
		`మొత్తం ${count} అంశాలు చదివే క్రమంలో, ${parts} భాగాలుగా. ప్రతి అంశం ఒక మెట్రిక్ లేదా భావనను వివరిస్తుంది: నిర్వచనం, ఎందుకు ముఖ్యం, ఎలా లెక్కిస్తారు, ఒక ఉదాహరణ లెక్క, డేటా వనరులు మరియు పరిమితులు, సాధారణ తప్పులు, మూలాలు.`,
	topicsCountSubtitle: (n) => `${n} అంశాలు`,

	topicsMetaDescription: (bookTitle) => `${bookTitle}లోని ప్రతి అంశం, A నుండి Z వరకు.`,
	topicsIntroPrefix: (count) => `మొత్తం ${count} అంశాలు అక్షరక్రమంలో. చదివే క్రమం కోసం చూడండి: `,
	contentsLinkText: 'విషయసూచిక',
	jumpToLetter: 'అక్షరానికి వెళ్లండి',

	searchMetaDescription: (bookTitle) => `${bookTitle}లోని ప్రతి అంశాన్ని శోధించండి.`,
	searchIntro: (count) =>
		`మొత్తం ${count} అంశాలను శీర్షిక, భాగం, సారాంశం, విభాగ శీర్షికల ద్వారా శోధించండి. అంతా మీ బ్రౌజర్‌లోనే నడుస్తుంది — మీరు టైప్ చేసినది ఈ పేజీని దాటి వెళ్లదు.`,
	searchInputLabel: 'అంశాలను శోధించండి',
	searchPlaceholder: 'DAU, నిలుపుదల, PROM పూర్తి రేటు…',
	searchHintEmptyHtml: 'శోధించడానికి టైప్ చేయండి. <em>DAU</em>, <em>నిలుపుదల</em>, లేదా <em>PROM</em> ప్రయత్నించండి.',
	noResultsPrefix: 'సరిపోలే అంశాలు లేవు: ',
	noResultsMiddle: '. విస్తృతమైన పదాన్ని ప్రయత్నించండి, లేదా చూడండి: ',
	resultsCountSingular: 'అంశం',
	resultsCountPlural: 'అంశాలు',

	topicPosition: (index, total) => `అంశం ${index} / ${total}`,
	onThisPage: 'ఈ పేజీలో',
	paginationLabel: 'పుస్తకం',
	paginationPrevious: 'మునుపటి',
	paginationNext: 'తదుపరి'
};

/** @type {Messages} */
const chrome_tl = {
	skipToContent: 'Lumaktaw sa nilalaman',
	navHome: 'Home',
	navContents: 'Nilalaman',
	navTopicsAZ: 'Mga paksa A–Z',
	navSearch: 'Maghanap',
	navAbout: 'Tungkol dito',
	footerSourceLink: 'Source',
	footerTaglineSuffix:
		' — mga depinisyon ng sukatan sa digital health, mga halimbawa, at pangangatwiran para sa mga pangkat na bumubuo, sumusuri, at nag-uutos ng mga produkto sa digital health.',
	footerNote:
		'Mabilis maluma ang mga numero sa aklat na ito. Nilalagyan ng petsa ng bawat paksa ang mga benchmark nito sa mismong teksto; i-verify muli bago gumamit ng anumang numero sa isang aktuwal na business case.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Wika',
	pickerTextSize: 'Laki ng teksto',
	pickerShare: 'Ibahagi',
	pickerLinks: 'Mga link',
	shareCopyLink: 'Kopyahin ang link',
	shareCopied: 'Nakopya na',
	shareCopyFailed: 'Hindi nakopya',
	shareEmailLabel: 'I-email ang link',
	shareLinkedinLabel: 'Ibahagi sa LinkedIn',
	shareRedditLabel: 'Ibahagi sa Reddit',
	shareBlueskyLabel: 'Ibahagi sa Bluesky',
	shareMastodonLabel: 'Ibahagi sa Mastodon',
	startHere: 'Magsimula rito',
	startHereSubtitle: 'Ang tatlong ideyang pinagbabatayan ng lahat ng iba pa.',
	contentsMetaDescription: (bookTitle) => `Lahat ng paksa sa ${bookTitle}, ayon sa pagkakasunod-sunod ng pagbabasa.`,
	contentsIntro: (count, parts) =>
		`Lahat ng ${count} paksa ayon sa pagkakasunod-sunod ng pagbabasa, sa ${parts} bahagi. Sinasaklaw ng bawat paksa ang isang sukatan o konsepto: depinisyon, kung bakit mahalaga, paano ito kinakalkula, isang halimbawang kalkulasyon, mga pinagmumulan ng data at mga babala, mga karaniwang patibong, at mga sanggunian.`,
	topicsCountSubtitle: (n) => `${n} paksa`,
	topicsMetaDescription: (bookTitle) => `Lahat ng paksa sa ${bookTitle}, nakalista mula A hanggang Z.`,
	topicsIntroPrefix: (count) => `Lahat ng ${count} paksa ayon sa alpabeto. Para sa pagkakasunod-sunod ng pagbabasa, tingnan ang`,
	contentsLinkText: 'nilalaman',
	jumpToLetter: 'Lumundag sa titik',
	searchMetaDescription: (bookTitle) => `Hanapin ang bawat paksa sa ${bookTitle}.`,
	searchIntro: (count) =>
		`Hanapin ang lahat ng ${count} paksa ayon sa pamagat, bahagi, buod, at heading ng seksyon. Lahat ay tumatakbo sa iyong browser — walang lumalabas sa pahinang ito sa anumang tina-type mo.`,
	searchInputLabel: 'Maghanap ng mga paksa',
	searchPlaceholder: 'DAU, retention, antas ng pagkumpleto ng PROM…',
	searchHintEmptyHtml: 'Mag-type para maghanap. Subukan ang <em>DAU</em>, <em>retention</em>, o <em>PROM</em>.',
	noResultsPrefix: 'Walang paksang tumutugma sa ',
	noResultsMiddle: '. Subukan ang mas malawak na termino, o i-browse ang ',
	resultsCountSingular: 'paksa',
	resultsCountPlural: 'paksa',
	topicPosition: (index, total) => `Paksa ${index} sa ${total}`,
	onThisPage: 'Sa pahinang ito',
	paginationLabel: 'Aklat',
	paginationPrevious: 'Nakaraan',
	paginationNext: 'Susunod'
};

/** @type {Messages} */
const chrome_wuu = {
	skipToContent: '跳到正文',
	navHome: '首页',
	navContents: '目录',
	navTopicsAZ: '主题 A–Z',
	navSearch: '搜索',
	navAbout: '关于',
	footerSourceLink: '源码',
	footerTaglineSuffix:
		' —— 数字健康指标个定义、实例搭道理，为构建、评估搭委托数字健康产品个团队而编。',
	footerNote:
		'本书里向个数字过期快。每个主题里向个基准数据才标明年份；拿任何数字去做正式商业论证之前，请先重新核实。',
	pickerTheme: '主题配色',
	pickerLanguage: '语言',
	pickerTextSize: '字体大小',
	pickerShare: '分享',
	pickerLinks: '链接',
	shareCopyLink: '复制链接',
	shareCopied: '已复制',
	shareCopyFailed: '复制失败',
	shareEmailLabel: '邮件发链接',
	shareLinkedinLabel: '分享到 LinkedIn',
	shareRedditLabel: '分享到 Reddit',
	shareBlueskyLabel: '分享到 Bluesky',
	shareMastodonLabel: '分享到 Mastodon',

	startHere: '从迭搭开始',
	startHereSubtitle: '其他所有内容个根基：三个核心概念。',

	contentsMetaDescription: (bookTitle) => `《${bookTitle}》里向全部主题，按阅读顺序排列。`,
	contentsIntro: (count, parts) =>
		`全部 ${count} 个主题，按阅读顺序排列，分成 ${parts} 个部分。每个主题讲一个指标或者概念：定义、为啥重要、哪能计算、一个实例解析、数据来源搭注意事项、常见误区，还有参考来源。`,
	topicsCountSubtitle: (n) => `${n} 个主题`,

	topicsMetaDescription: (bookTitle) => `《${bookTitle}》里向全部主题，按 A 到 Z 排列。`,
	topicsIntroPrefix: (count) => `全部 ${count} 个主题，按字母顺序排列。要按阅读顺序看，请看`,
	contentsLinkText: '目录',
	jumpToLetter: '跳到字母',

	searchMetaDescription: (bookTitle) => `搜索《${bookTitle}》里向个所有主题。`,
	searchIntro: (count) =>
		`搜索全部 ${count} 个主题，可以按标题、部分、摘要搭小节标题搜。所有操作才勒浪浏览器里向完成——侬输入个内容勿会离开迭个页面。`,
	searchInputLabel: '搜索主题',
	searchPlaceholder: '日活、留存率、PROM 完成率……',
	searchHintEmptyHtml: '输入关键词搜索。可以试试 <em>日活</em>、<em>留存率</em>，或者 <em>PROM</em>。',
	noResultsPrefix: '呒没搭 ',
	noResultsMiddle: ' 匹配个主题。试试更宽泛个词，或者去看',
	resultsCountSingular: '个主题',
	resultsCountPlural: '个主题',

	topicPosition: (index, total) => `第 ${index} 个主题，共 ${total} 个`,
	onThisPage: '本页内容',
	paginationLabel: '本书',
	paginationPrevious: '上一页',
	paginationNext: '下一页'
};

/** @type {Messages} */
const chrome_yue = {
	skipToContent: '跳到主要內容',
	navHome: '首頁',
	navContents: '目錄',
	navTopicsAZ: '主題 A–Z',
	navSearch: '搜尋',
	navAbout: '關於',
	footerSourceLink: '原始碼',
	footerTaglineSuffix:
		' — 數碼健康指標嘅定義、示例同推理，為建立、評估同委託數碼健康產品嘅團隊而設。',
	footerNote:
		'本書嘅數字過時好快。每個主題都會喺正文入面標明基準數據嘅日期；喺真實商業個案使用任何數字之前，請先重新核實。',
	pickerTheme: '主題外觀',
	pickerLanguage: '語言',
	pickerTextSize: '字體大小',
	pickerShare: '分享',
	pickerLinks: '連結',
	shareCopyLink: '複製連結',
	shareCopied: '已複製',
	shareCopyFailed: '複製失敗',
	shareEmailLabel: '用電郵傳送連結',
	shareLinkedinLabel: '分享到 LinkedIn',
	shareRedditLabel: '分享到 Reddit',
	shareBlueskyLabel: '分享到 Bluesky',
	shareMastodonLabel: '分享到 Mastodon',
	startHere: '由呢度開始',
	startHereSubtitle: '其他一切所建基嘅三個概念。',
	contentsMetaDescription: (bookTitle) => `《${bookTitle}》嘅所有主題，按閱讀次序排列。`,
	contentsIntro: (count, parts) =>
		`全部 ${count} 個主題按閱讀次序排列，分為 ${parts} 個部分。每個主題講一個指標或概念：定義、點解重要、點計算、計算示例、數據來源同注意事項、常見陷阱，以及參考來源。`,
	topicsCountSubtitle: (n) => `${n} 個主題`,
	topicsMetaDescription: (bookTitle) => `《${bookTitle}》嘅所有主題，按字母次序列出。`,
	topicsIntroPrefix: (count) => `全部 ${count} 個主題按字母次序排列。如需閱讀次序，請睇`,
	contentsLinkText: '目錄',
	jumpToLetter: '跳到字母',
	searchMetaDescription: (bookTitle) => `搜尋《${bookTitle}》入面嘅所有主題。`,
	searchIntro: (count) =>
		`按標題、部分、摘要同章節標題搜尋全部 ${count} 個主題。一切都喺你嘅瀏覽器入面運行 — 你輸入嘅內容唔會離開呢一頁。`,
	searchInputLabel: '搜尋主題',
	searchPlaceholder: 'DAU、留存率、PROM 完成率……',
	searchHintEmptyHtml: '輸入關鍵字搜尋。試下 <em>DAU</em>、<em>留存率</em> 或 <em>PROM</em>。',
	noResultsPrefix: '冇主題符合 ',
	noResultsMiddle: '。試下用較闊嘅詞語，或者瀏覽',
	resultsCountSingular: '個主題',
	resultsCountPlural: '個主題',
	topicPosition: (index, total) => `第 ${index} 個主題，共 ${total} 個`,
	onThisPage: '本頁內容',
	paginationLabel: '全書',
	paginationPrevious: '上一篇',
	paginationNext: '下一篇'
};

/** @type {Messages} */
const chrome_bh = {
	skipToContent: 'सामग्री पर जाईं',
	navHome: 'मुख्य पन्ना',
	navContents: 'अनुक्रमणिका',
	navTopicsAZ: 'विषय अ से ह',
	navSearch: 'खोज',
	navAbout: 'परिचय',
	footerSourceLink: 'स्रोत',
	footerTaglineSuffix:
		' — डिजिटल स्वास्थ्य मीट्रिक के परिभाषा, उदाहरण, आ तर्क, डिजिटल स्वास्थ्य उत्पाद बनावे, आँके, आ चालू करावे वाला टीमन खातिर।',
	footerNote:
		'एह किताब के आँकड़ा जल्दी पुरान हो जाला। हर विषय अपना बेंचमार्क के तारीख ओही जगह दे देला; कौनो असली कारोबारी मामला में कौनो संख्या इस्तेमाल करे से पहिले फेर से जाँच लीं।',
	pickerTheme: 'थीम',
	pickerLanguage: 'भाषा',
	pickerTextSize: 'अक्षर के आकार',
	pickerShare: 'साझा करीं',
	pickerLinks: 'लिंक',
	shareCopyLink: 'लिंक कॉपी करीं',
	shareCopied: 'कॉपी हो गइल',
	shareCopyFailed: 'कॉपी ना हो सकल',
	shareEmailLabel: 'लिंक ईमेल करीं',
	shareLinkedinLabel: 'LinkedIn पर साझा करीं',
	shareRedditLabel: 'Reddit पर साझा करीं',
	shareBlueskyLabel: 'Bluesky पर साझा करीं',
	shareMastodonLabel: 'Mastodon पर साझा करीं',

	startHere: 'इहाँ से शुरू करीं',
	startHereSubtitle: 'तीन गो विचार जेकरा पर बाकी सब कुछ टिकल बा।',

	contentsMetaDescription: (bookTitle) => `${bookTitle} के हर विषय, पढ़े के क्रम में।`,
	contentsIntro: (count, parts) =>
		`सब ${count} विषय पढ़े के क्रम में, ${parts} भाग में। हर विषय में एगो मीट्रिक या अवधारणा बा: परिभाषा, काहें जरूरी ह, गणना कइसे होला, एगो काम कइल उदाहरण, डेटा के स्रोत आ सावधानी, आम गलती, आ स्रोत।`,
	topicsCountSubtitle: (n) => `${n} विषय`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} के हर विषय, अकारादि क्रम में।`,
	topicsIntroPrefix: (count) => `सब ${count} विषय अकारादि क्रम में। पढ़े के क्रम खातिर, देखीं `,
	contentsLinkText: 'अनुक्रमणिका',
	jumpToLetter: 'अक्षर पर जाईं',

	searchMetaDescription: (bookTitle) => `${bookTitle} के हर विषय में खोजीं।`,
	searchIntro: (count) =>
		`सब ${count} विषय में शीर्षक, भाग, सारांश, आ खंड के शीर्षक से खोजीं। सब कुछ रउरा ब्राउज़र में चलेला — रउआ जे टाइप करीले ऊ एह पन्ना से बाहर ना जाला।`,
	searchInputLabel: 'विषय खोजीं',
	searchPlaceholder: 'DAU, रिटेंशन, PROM पूरा होखे के दर…',
	searchHintEmptyHtml: 'खोजे खातिर टाइप करीं। <em>DAU</em>, <em>रिटेंशन</em>, या <em>PROM</em> आजमाईं।',
	noResultsPrefix: 'कौनो विषय ना मिलल ',
	noResultsMiddle: ' से मेल खात। कौनो बड़ शब्द आजमाईं, ना त देखीं ',
	resultsCountSingular: 'विषय',
	resultsCountPlural: 'विषय',

	topicPosition: (index, total) => `${total} में से विषय ${index}`,
	onThisPage: 'एह पन्ना पर',
	paginationLabel: 'किताब',
	paginationPrevious: 'पिछला',
	paginationNext: 'अगिला'
};

/** @type {Messages} */
const chrome_bg = {
	skipToContent: 'Към съдържанието',
	navHome: 'Начало',
	navContents: 'Съдържание',
	navTopicsAZ: 'Теми А–Я',
	navSearch: 'Търсене',
	navAbout: 'За книгата',
	footerSourceLink: 'Източник',
	footerTaglineSuffix:
		' — дефиниции на показатели за цифровото здраве, примери и обосновки за екипи, които създават, оценяват и възлагат цифрови здравни продукти.',
	footerNote:
		'Цифрите в тази книга остаряват бързо. Всяка тема датира сравнителните си стойности в самия текст; проверете ги отново, преди да използвате което и да е число в реален бизнес казус.',
	pickerTheme: 'Тема',
	pickerLanguage: 'Език',
	pickerTextSize: 'Размер на текста',
	pickerShare: 'Споделяне',
	pickerLinks: 'Връзки',
	shareCopyLink: 'Копиране на връзката',
	shareCopied: 'Копирано',
	shareCopyFailed: 'Копирането не успя',
	shareEmailLabel: 'Изпращане на връзката по имейл',
	shareLinkedinLabel: 'Споделяне в LinkedIn',
	shareRedditLabel: 'Споделяне в Reddit',
	shareBlueskyLabel: 'Споделяне в Bluesky',
	shareMastodonLabel: 'Споделяне в Mastodon',

	startHere: 'Започнете оттук',
	startHereSubtitle: 'Трите идеи, върху които стъпва всичко останало.',

	contentsMetaDescription: (bookTitle) => `Всички теми в „${bookTitle}“ по реда на четене.`,
	contentsIntro: (count, parts) =>
		`Всичките ${count} теми по реда на четене, разпределени в ${parts} части. Всяка тема разглежда един показател или понятие: дефиниция, защо е важен, как се изчислява, пример с изчисления, източници на данни и ограничения, клопки и източници.`,
	topicsCountSubtitle: (n) => `${n} теми`,

	topicsMetaDescription: (bookTitle) => `Всички теми в „${bookTitle}“ в азбучен ред.`,
	topicsIntroPrefix: (count) => `Всичките ${count} теми в азбучен ред. За реда на четене вижте`,
	contentsLinkText: 'съдържанието',
	jumpToLetter: 'Преминаване към буква',

	searchMetaDescription: (bookTitle) => `Търсене във всички теми в „${bookTitle}“.`,
	searchIntro: (count) =>
		`Търсене във всичките ${count} теми по заглавие, част, резюме и заглавие на раздел. Всичко се изпълнява във вашия браузър — нищо от въведеното не напуска тази страница.`,
	searchInputLabel: 'Търсене в темите',
	searchPlaceholder: 'DAU, задържане, ниво на попълване на PROM…',
	searchHintEmptyHtml: 'Въведете текст за търсене. Опитайте с <em>DAU</em>, <em>задържане</em> или <em>PROM</em>.',
	noResultsPrefix: 'Няма теми, които съответстват на ',
	noResultsMiddle: '. Опитайте с по-общ термин или прегледайте ',
	resultsCountSingular: 'тема',
	resultsCountPlural: 'теми',

	topicPosition: (index, total) => `Тема ${index} от ${total}`,
	onThisPage: 'На тази страница',
	paginationLabel: 'Книга',
	paginationPrevious: 'Предишна',
	paginationNext: 'Следваща'
};

/** @type {Messages} */
const chrome_cs = {
	skipToContent: 'Přeskočit na obsah',
	navHome: 'Domů',
	navContents: 'Obsah',
	navTopicsAZ: 'Témata A–Z',
	navSearch: 'Hledat',
	navAbout: 'O knize',
	footerSourceLink: 'Zdrojový kód',
	footerTaglineSuffix:
		' — definice metrik digitálního zdraví, příklady a úvahy pro týmy, které digitální zdravotní produkty vytvářejí, hodnotí a zadávají.',
	footerNote:
		'Čísla v této knize rychle zastarávají. Každé téma datuje své srovnávací hodnoty přímo v textu; před použitím jakéhokoli čísla v reálném obchodním případu je znovu ověřte.',
	pickerTheme: 'Motiv',
	pickerLanguage: 'Jazyk',
	pickerTextSize: 'Velikost textu',
	pickerShare: 'Sdílet',
	pickerLinks: 'Odkazy',
	shareCopyLink: 'Kopírovat odkaz',
	shareCopied: 'Zkopírováno',
	shareCopyFailed: 'Kopírování se nezdařilo',
	shareEmailLabel: 'Poslat odkaz e-mailem',
	shareLinkedinLabel: 'Sdílet na LinkedIn',
	shareRedditLabel: 'Sdílet na Reddit',
	shareBlueskyLabel: 'Sdílet na Bluesky',
	shareMastodonLabel: 'Sdílet na Mastodon',

	startHere: 'Začněte zde',
	startHereSubtitle: 'Tři myšlenky, na kterých stojí všechno ostatní.',

	contentsMetaDescription: (bookTitle) => `Všechna témata v knize ${bookTitle} v pořadí čtení.`,
	contentsIntro: (count, parts) =>
		`Všech ${count} témat v pořadí čtení, rozdělených do ${parts} částí. Každé téma se věnuje jedné metrice nebo pojmu: definice, proč je důležitý, jak se počítá, řešený příklad, zdroje dat a omezení, úskalí a zdroje.`,
	topicsCountSubtitle: (n) => (n === 1 ? `${n} téma` : n >= 2 && n <= 4 ? `${n} témata` : `${n} témat`),

	topicsMetaDescription: (bookTitle) => `Všechna témata v knize ${bookTitle} seřazená od A do Z.`,
	topicsIntroPrefix: (count) => `Všech ${count} témat v abecedním pořadí. Pořadí čtení najdete v části`,
	contentsLinkText: 'obsah',
	jumpToLetter: 'Přejít na písmeno',

	searchMetaDescription: (bookTitle) => `Hledejte ve všech tématech knihy ${bookTitle}.`,
	searchIntro: (count) =>
		`Hledejte ve všech ${count} tématech podle názvu, části, shrnutí a nadpisu oddílu. Vše běží ve vašem prohlížeči — nic, co napíšete, tuto stránku neopustí.`,
	searchInputLabel: 'Hledat témata',
	searchPlaceholder: 'DAU, udržení uživatelů, míra dokončení PROM…',
	searchHintEmptyHtml: 'Začněte psát. Zkuste <em>DAU</em>, <em>udržení</em> nebo <em>PROM</em>.',
	noResultsPrefix: 'Žádné téma neodpovídá výrazu ',
	noResultsMiddle: '. Zkuste obecnější výraz nebo si projděte ',
	resultsCountSingular: 'téma',
	resultsCountPlural: 'témat',

	topicPosition: (index, total) => `Téma ${index} z ${total}`,
	onThisPage: 'Na této stránce',
	paginationLabel: 'Kniha',
	paginationPrevious: 'Předchozí',
	paginationNext: 'Další'
};

/** @type {Messages} */
const chrome_el = {
	skipToContent: 'Μετάβαση στο περιεχόμενο',
	navHome: 'Αρχική',
	navContents: 'Περιεχόμενα',
	navTopicsAZ: 'Θέματα Α–Ω',
	navSearch: 'Αναζήτηση',
	navAbout: 'Σχετικά',
	footerSourceLink: 'Πηγή',
	footerTaglineSuffix:
		' — ορισμοί δεικτών ψηφιακής υγείας, παραδείγματα και σκεπτικό για ομάδες που δημιουργούν, αξιολογούν και αναθέτουν προϊόντα ψηφιακής υγείας.',
	footerNote:
		'Τα στοιχεία σε αυτό το βιβλίο παλιώνουν γρήγορα. Κάθε θέμα χρονολογεί τα συγκριτικά μεγέθη εντός κειμένου· επαληθεύστε ξανά πριν χρησιμοποιήσετε οποιονδήποτε αριθμό σε ενεργή επιχειρηματική μελέτη.',
	pickerTheme: 'Θέμα εμφάνισης',
	pickerLanguage: 'Γλώσσα',
	pickerTextSize: 'Μέγεθος κειμένου',
	pickerShare: 'Κοινοποίηση',
	pickerLinks: 'Σύνδεσμοι',
	shareCopyLink: 'Αντιγραφή συνδέσμου',
	shareCopied: 'Αντιγράφηκε',
	shareCopyFailed: 'Η αντιγραφή απέτυχε',
	shareEmailLabel: 'Αποστολή συνδέσμου με email',
	shareLinkedinLabel: 'Κοινοποίηση στο LinkedIn',
	shareRedditLabel: 'Κοινοποίηση στο Reddit',
	shareBlueskyLabel: 'Κοινοποίηση στο Bluesky',
	shareMastodonLabel: 'Κοινοποίηση στο Mastodon',

	startHere: 'Ξεκινήστε εδώ',
	startHereSubtitle: 'Οι τρεις ιδέες πάνω στις οποίες βασίζονται όλα τα υπόλοιπα.',

	contentsMetaDescription: (bookTitle) => `Όλα τα θέματα του βιβλίου «${bookTitle}», με τη σειρά ανάγνωσης.`,
	contentsIntro: (count, parts) =>
		`Και τα ${count} θέματα με τη σειρά ανάγνωσης, σε ${parts} ενότητες. Κάθε θέμα καλύπτει έναν δείκτη ή μια έννοια: ορισμό, γιατί έχει σημασία, πώς υπολογίζεται, ένα επεξεργασμένο παράδειγμα, πηγές δεδομένων και επιφυλάξεις, παγίδες και πηγές.`,
	topicsCountSubtitle: (n) => `${n} θέματα`,

	topicsMetaDescription: (bookTitle) => `Όλα τα θέματα του βιβλίου «${bookTitle}», με αλφαβητική σειρά.`,
	topicsIntroPrefix: (count) => `Και τα ${count} θέματα με αλφαβητική σειρά. Για τη σειρά ανάγνωσης, δείτε τα `,
	contentsLinkText: 'περιεχόμενα',
	jumpToLetter: 'Μετάβαση σε γράμμα',

	searchMetaDescription: (bookTitle) => `Αναζήτηση σε όλα τα θέματα του βιβλίου «${bookTitle}».`,
	searchIntro: (count) =>
		`Αναζητήστε σε όλα τα ${count} θέματα βάσει τίτλου, ενότητας, περίληψης και επικεφαλίδας. Όλα εκτελούνται στο πρόγραμμα περιήγησής σας — τίποτα από όσα πληκτρολογείτε δεν φεύγει από αυτή τη σελίδα.`,
	searchInputLabel: 'Αναζήτηση θεμάτων',
	searchPlaceholder: 'DAU, διατήρηση, ποσοστό ολοκλήρωσης PROM…',
	searchHintEmptyHtml: 'Πληκτρολογήστε για αναζήτηση. Δοκιμάστε <em>DAU</em>, <em>διατήρηση</em> ή <em>PROM</em>.',
	noResultsPrefix: 'Κανένα θέμα δεν ταιριάζει με ',
	noResultsMiddle: '. Δοκιμάστε έναν ευρύτερο όρο ή περιηγηθείτε στα ',
	resultsCountSingular: 'θέμα',
	resultsCountPlural: 'θέματα',

	topicPosition: (index, total) => `Θέμα ${index} από ${total}`,
	onThisPage: 'Σε αυτή τη σελίδα',
	paginationLabel: 'Βιβλίο',
	paginationPrevious: 'Προηγούμενο',
	paginationNext: 'Επόμενο'
};

/** @type {Messages} */
const chrome_eu = {
	skipToContent: 'Joan edukira',
	navHome: 'Hasiera',
	navContents: 'Aurkibidea',
	navTopicsAZ: 'Gaiak A–Z',
	navSearch: 'Bilatu',
	navAbout: 'Honi buruz',
	footerSourceLink: 'Iturria',
	footerTaglineSuffix:
		' — osasun digitaleko metriken definizioak, adibideak eta arrazoibideak, osasun digitaleko produktuak eraikitzen, ebaluatzen eta kontratatzen dituzten taldeentzat.',
	footerNote:
		'Liburu honetako zifrak azkar zaharkitzen dira. Gai bakoitzak bere erreferentziazko balioak datatzen ditu testuan bertan; egiaztatu berriro zenbaki bat benetako negozio-kasu batean erabili aurretik.',
	pickerTheme: 'Gaia',
	pickerLanguage: 'Hizkuntza',
	pickerTextSize: 'Testuaren tamaina',
	pickerShare: 'Partekatu',
	pickerLinks: 'Estekak',
	shareCopyLink: 'Kopiatu esteka',
	shareCopied: 'Kopiatu da',
	shareCopyFailed: 'Kopiatzeak huts egin du',
	shareEmailLabel: 'Bidali esteka posta elektronikoz',
	shareLinkedinLabel: 'Partekatu LinkedIn-en',
	shareRedditLabel: 'Partekatu Reddit-en',
	shareBlueskyLabel: 'Partekatu Bluesky-n',
	shareMastodonLabel: 'Partekatu Mastodon-en',

	startHere: 'Hasi hemen',
	startHereSubtitle: 'Gainerako guztiaren oinarri diren hiru ideiak.',

	contentsMetaDescription: (bookTitle) => `${bookTitle} liburuko gai guztiak, irakurketa-ordenan.`,
	contentsIntro: (count, parts) =>
		`${count} gai guztiak irakurketa-ordenan, ${parts} ataletan banatuta. Gai bakoitzak metrika edo kontzeptu bat jorratzen du: definizioa, zergatik den garrantzitsua, nola kalkulatzen den, adibide landu bat, datu-iturriak eta kontuan hartu beharrekoak, ohiko hutsuneak eta iturriak.`,
	topicsCountSubtitle: (n) => `${n} gai`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} liburuko gai guztiak, A-tik Z-ra zerrendatuta.`,
	topicsIntroPrefix: (count) => `${count} gai guztiak ordena alfabetikoan. Irakurketa-ordenarako, ikus `,
	contentsLinkText: 'aurkibidea',
	jumpToLetter: 'Joan letrara',

	searchMetaDescription: (bookTitle) => `Bilatu ${bookTitle} liburuko gai guztietan.`,
	searchIntro: (count) =>
		`Bilatu ${count} gai guztietan izenburuaren, atalaren, laburpenaren eta atal-goiburuaren arabera. Dena zure nabigatzailean exekutatzen da: idazten duzun ezerk ez du orri hau uzten.`,
	searchInputLabel: 'Bilatu gaiak',
	searchPlaceholder: 'DAU, atxikipena, PROM osatze-tasa…',
	searchHintEmptyHtml: 'Idatzi bilatzeko. Saiatu <em>DAU</em>, <em>atxikipena</em> edo <em>PROM</em> terminoekin.',
	noResultsPrefix: 'Ez dago honekin bat datorren gairik: ',
	noResultsMiddle: '. Saiatu termino zabalago batekin, edo arakatu ',
	resultsCountSingular: 'gai',
	resultsCountPlural: 'gai',

	topicPosition: (index, total) => `${index}. gaia, ${total} gaitatik`,
	onThisPage: 'Orri honetan',
	paginationLabel: 'Liburua',
	paginationPrevious: 'Aurrekoa',
	paginationNext: 'Hurrengoa'
};

/** @type {Messages} */
const chrome_fa = {
	skipToContent: 'پرش به محتوا',
	navHome: 'خانه',
	navContents: 'فهرست مطالب',
	navTopicsAZ: 'موضوعات الف تا ی',
	navSearch: 'جست‌وجو',
	navAbout: 'درباره',
	footerSourceLink: 'منبع',
	footerTaglineSuffix:
		' — تعریف سنجه‌های سلامت دیجیتال، مثال‌ها و استدلال‌ها برای تیم‌هایی که محصولات سلامت دیجیتال را می‌سازند، ارزیابی می‌کنند و سفارش می‌دهند.',
	footerNote:
		'ارقام این کتاب زود کهنه می‌شوند. هر موضوع تاریخ معیارهای خود را در متن ذکر می‌کند؛ پیش از استفاده از هر عدد در یک توجیه اقتصادی واقعی، آن را دوباره راستی‌آزمایی کنید.',
	pickerTheme: 'زمینه',
	pickerLanguage: 'زبان',
	pickerTextSize: 'اندازه متن',
	pickerShare: 'هم‌رسانی',
	pickerLinks: 'پیوندها',
	shareCopyLink: 'رونوشت پیوند',
	shareCopied: 'رونوشت شد',
	shareCopyFailed: 'رونوشت ناموفق بود',
	shareEmailLabel: 'ارسال پیوند با ایمیل',
	shareLinkedinLabel: 'هم‌رسانی در LinkedIn',
	shareRedditLabel: 'هم‌رسانی در Reddit',
	shareBlueskyLabel: 'هم‌رسانی در Bluesky',
	shareMastodonLabel: 'هم‌رسانی در Mastodon',

	startHere: 'از اینجا شروع کنید',
	startHereSubtitle: 'سه ایده‌ای که هر چیز دیگر بر آن‌ها بنا شده است.',

	contentsMetaDescription: (bookTitle) => `همه موضوعات ${bookTitle}، به ترتیب مطالعه.`,
	contentsIntro: (count, parts) =>
		`همه ${count} موضوع به ترتیب مطالعه، در ${parts} بخش. هر موضوع یک سنجه یا مفهوم را پوشش می‌دهد: تعریف، اهمیت، روش محاسبه، یک مثال کاربردی، منابع داده و ملاحظات، اشتباهات رایج و منابع.`,
	topicsCountSubtitle: (n) => `${n} موضوع`,

	topicsMetaDescription: (bookTitle) => `همه موضوعات ${bookTitle}، به ترتیب الفبایی.`,
	topicsIntroPrefix: (count) => `همه ${count} موضوع به ترتیب الفبایی. برای ترتیب مطالعه، به`,
	contentsLinkText: 'فهرست مطالب',
	jumpToLetter: 'پرش به حرف',

	searchMetaDescription: (bookTitle) => `جست‌وجو در همه موضوعات ${bookTitle}.`,
	searchIntro: (count) =>
		`در همه ${count} موضوع بر اساس عنوان، بخش، خلاصه و سرتیتر بخش‌ها جست‌وجو کنید. همه‌چیز در مرورگر شما اجرا می‌شود — هیچ‌چیزی از آنچه تایپ می‌کنید این صفحه را ترک نمی‌کند.`,
	searchInputLabel: 'جست‌وجوی موضوعات',
	searchPlaceholder: 'DAU، نگهداشت، نرخ تکمیل PROM…',
	searchHintEmptyHtml: 'برای جست‌وجو تایپ کنید. <em>DAU</em>، <em>نگهداشت</em> یا <em>PROM</em> را امتحان کنید.',
	noResultsPrefix: 'هیچ موضوعی با ',
	noResultsMiddle: ' مطابقت ندارد. عبارتی کلی‌تر را امتحان کنید یا ',
	resultsCountSingular: 'موضوع',
	resultsCountPlural: 'موضوع',

	topicPosition: (index, total) => `موضوع ${index} از ${total}`,
	onThisPage: 'در این صفحه',
	paginationLabel: 'کتاب',
	paginationPrevious: 'قبلی',
	paginationNext: 'بعدی'
};

/** @type {Messages} */
const chrome_ga = {
	skipToContent: 'Léim chuig an ábhar',
	navHome: 'Baile',
	navContents: 'Clár ábhair',
	navTopicsAZ: 'Topaicí A–Z',
	navSearch: 'Cuardach',
	navAbout: 'Maidir leis',
	footerSourceLink: 'Foinse',
	footerTaglineSuffix:
		' — sainmhínithe, samplaí agus réasúnaíocht ar mhéadrachtaí sláinte digití do fhoirne a thógann, a mheasann agus a choimisiúnaíonn táirgí sláinte digití.',
	footerNote:
		'Téann na figiúirí sa leabhar seo as dáta go tapa. Cuireann gach topaic dáta lena tagarmharcanna sa téacs; athdheimhnigh iad sula n-úsáidtear uimhir ar bith i gcás gnó beo.',
	pickerTheme: 'Téama',
	pickerLanguage: 'Teanga',
	pickerTextSize: 'Méid téacs',
	pickerShare: 'Comhroinn',
	pickerLinks: 'Naisc',
	shareCopyLink: 'Cóipeáil an nasc',
	shareCopied: 'Cóipeáilte',
	shareCopyFailed: 'Theip ar an gcóipeáil',
	shareEmailLabel: 'Seol an nasc r-phost',
	shareLinkedinLabel: 'Comhroinn ar LinkedIn',
	shareRedditLabel: 'Comhroinn ar Reddit',
	shareBlueskyLabel: 'Comhroinn ar Bluesky',
	shareMastodonLabel: 'Comhroinn ar Mastodon',

	startHere: 'Tosaigh anseo',
	startHereSubtitle: 'An trí smaoineamh a bhfuil gach rud eile bunaithe orthu.',

	contentsMetaDescription: (bookTitle) => `Gach topaic i ${bookTitle}, in ord léitheoireachta.`,
	contentsIntro: (count, parts) =>
		`Na ${count} topaic go léir in ord léitheoireachta, thar ${parts} chuid. Clúdaíonn gach topaic méadracht nó coincheap amháin: sainmhíniú, cén fáth a bhfuil tábhacht leis, conas a ríomhtar é, sampla oibrithe, foinsí sonraí agus rabhaidh, gaistí agus foinsí.`,
	topicsCountSubtitle: (n) => `${n} topaic`,

	topicsMetaDescription: (bookTitle) => `Gach topaic i ${bookTitle}, liostaithe ó A go Z.`,
	topicsIntroPrefix: (count) => `Na ${count} topaic go léir in ord aibítire. Chun an t-ord léitheoireachta a fheiceáil, féach an`,
	contentsLinkText: 'clár ábhair',
	jumpToLetter: 'Léim go litir',

	searchMetaDescription: (bookTitle) => `Cuardaigh gach topaic i ${bookTitle}.`,
	searchIntro: (count) =>
		`Cuardaigh na ${count} topaic go léir de réir teidil, cuid, achoimre agus ceannteidil rannóige. Ritheann gach rud i do bhrabhsálaí — ní fhágann aon rud a chlóscríobhann tú an leathanach seo.`,
	searchInputLabel: 'Cuardaigh topaicí',
	searchPlaceholder: 'DAU, coinneáil, ráta críochnaithe PROM…',
	searchHintEmptyHtml: 'Clóscríobh chun cuardach a dhéanamh. Bain triail as <em>DAU</em>, <em>coinneáil</em> nó <em>PROM</em>.',
	noResultsPrefix: 'Níl aon topaic ag teacht le ',
	noResultsMiddle: '. Bain triail as téarma níos leithne, nó brabhsáil an ',
	resultsCountSingular: 'topaic',
	resultsCountPlural: 'topaicí',

	topicPosition: (index, total) => `Topaic ${index} as ${total}`,
	onThisPage: 'Ar an leathanach seo',
	paginationLabel: 'Leabhar',
	paginationPrevious: 'Roimhe seo',
	paginationNext: 'Ar aghaidh'
};

/** @type {Messages} */
const chrome_gd = {
	skipToContent: 'Gearr-leum chun na susbaint',
	navHome: 'Dachaigh',
	navContents: 'Clàr-innse',
	navTopicsAZ: 'Cuspairean A–Z',
	navSearch: 'Lorg',
	navAbout: 'Mu dheidhinn',
	footerSourceLink: 'Tùs',
	footerTaglineSuffix:
		' — mìneachaidhean, eisimpleirean agus reusanachadh airson metrigean slàinte didseatach, dha sgiobaidhean a tha a’ togail, a’ measadh agus a’ coimiseanadh thoraidhean slàinte didseatach.',
	footerNote:
		'Bidh na figearan sa leabhar seo a’ dol à ceann-latha gu luath. Bidh gach cuspair a’ cur ceann-latha ri na slatan-tomhais aige sa chlò fhèin; dèan cinnteach às ùr mus cleachd thu àireamh sam bith ann an cùis-gnìomhachais bheò.',
	pickerTheme: 'Ùrlar',
	pickerLanguage: 'Cànan',
	pickerTextSize: 'Meud an teacsa',
	pickerShare: 'Co-roinn',
	pickerLinks: 'Ceanglaichean',
	shareCopyLink: 'Dèan lethbhreac den cheangal',
	shareCopied: 'Air lethbhreac a dhèanamh',
	shareCopyFailed: 'Cha deach leis an lethbhreac',
	shareEmailLabel: 'Cuir an ceangal air post-d',
	shareLinkedinLabel: 'Co-roinn air LinkedIn',
	shareRedditLabel: 'Co-roinn air Reddit',
	shareBlueskyLabel: 'Co-roinn air Bluesky',
	shareMastodonLabel: 'Co-roinn air Mastodon',

	startHere: 'Tòisich an seo',
	startHereSubtitle: 'An trì beachdan air a bheil a h-uile càil eile stèidhichte.',

	contentsMetaDescription: (bookTitle) => `A h-uile cuspair ann an ${bookTitle}, san òrdugh leughaidh.`,
	contentsIntro: (count, parts) =>
		`Na ${count} cuspair uile san òrdugh leughaidh, air an roinn ann an ${parts} pàirtean. Tha gach cuspair a’ còmhdach aon mheatrag no bun-bheachd: mìneachadh, carson a tha e cudromach, mar a thèid a chunntadh, eisimpleir obrachaidh, stòran dàta is rabhaidhean, cùisean ri sheachnadh, agus stòran.`,
	topicsCountSubtitle: (n) => `${n} cuspair`,

	topicsMetaDescription: (bookTitle) => `A h-uile cuspair ann an ${bookTitle}, air an liostadh A gu Z.`,
	topicsIntroPrefix: (count) => `Na ${count} cuspair uile san òrdugh aibidileach. Airson an òrdugh leughaidh, faic an`,
	contentsLinkText: 'clàr-innse',
	jumpToLetter: 'Leum chun an litreach',

	searchMetaDescription: (bookTitle) => `Lorg a h-uile cuspair ann an ${bookTitle}.`,
	searchIntro: (count) =>
		`Lorg am measg nan ${count} cuspair a-rèir tiotal, pàirt, geàrr-chunntas agus ceann-aithris earrainn. Bidh a h-uile càil a’ ruith anns a’ bhrobhsair agad — chan fhàg dad a sgrìobhas tu an duilleag seo.`,
	searchInputLabel: 'Lorg cuspairean',
	searchPlaceholder: 'DAU, gleidheadh, ìre crìochnachaidh PROM…',
	searchHintEmptyHtml: 'Sgrìobh gus lorg. Feuch <em>DAU</em>, <em>gleidheadh</em> no <em>PROM</em>.',
	noResultsPrefix: 'Chan eil cuspair sam bith a’ freagairt ri ',
	noResultsMiddle: '. Feuch teirm nas fharsainge, no rùraich an ',
	resultsCountSingular: 'chuspair',
	resultsCountPlural: 'cuspair',

	topicPosition: (index, total) => `Cuspair ${index} à ${total}`,
	onThisPage: 'Air an duilleag seo',
	paginationLabel: 'Leabhar',
	paginationPrevious: 'Roimhe',
	paginationNext: 'Air adhart'
};

/** @type {Messages} */
const chrome_gu = {
	skipToContent: 'સામગ્રી પર જાઓ',
	navHome: 'હોમ',
	navContents: 'અનુક્રમણિકા',
	navTopicsAZ: 'વિષયો A–Z',
	navSearch: 'શોધો',
	navAbout: 'વિશે',
	footerSourceLink: 'સ્ત્રોત',
	footerTaglineSuffix:
		' — ડિજિટલ હેલ્થ ઉત્પાદનો બનાવનાર, મૂલ્યાંકન કરનાર અને કમિશન કરનાર ટીમો માટે ડિજિટલ હેલ્થ મેટ્રિકની વ્યાખ્યાઓ, ઉદાહરણો અને તર્ક.',
	footerNote:
		'આ પુસ્તકમાંના આંકડા ઝડપથી જૂના થઈ જાય છે. દરેક વિષય તેના બેન્ચમાર્કની તારીખ લખાણમાં જ આપે છે; કોઈ પણ વાસ્તવિક બિઝનેસ કેસમાં કોઈ આંકડો વાપરતાં પહેલાં તેને ફરીથી ચકાસો.',
	pickerTheme: 'થીમ',
	pickerLanguage: 'ભાષા',
	pickerTextSize: 'ટેક્સ્ટનું કદ',
	pickerShare: 'શેર કરો',
	pickerLinks: 'લિંક્સ',
	shareCopyLink: 'લિંક કૉપિ કરો',
	shareCopied: 'કૉપિ થઈ',
	shareCopyFailed: 'કૉપિ નિષ્ફળ',
	shareEmailLabel: 'લિંક ઇમેઇલ કરો',
	shareLinkedinLabel: 'LinkedIn પર શેર કરો',
	shareRedditLabel: 'Reddit પર શેર કરો',
	shareBlueskyLabel: 'Bluesky પર શેર કરો',
	shareMastodonLabel: 'Mastodon પર શેર કરો',

	startHere: 'અહીંથી શરૂ કરો',
	startHereSubtitle: 'ત્રણ વિચારો, જેના પર બાકીનું બધું રચાયેલું છે.',

	contentsMetaDescription: (bookTitle) => `${bookTitle} ના બધા વિષયો, વાંચનક્રમમાં.`,
	contentsIntro: (count, parts) =>
		`વાંચનક્રમમાં બધા ${count} વિષયો, ${parts} ભાગોમાં. દરેક વિષય એક મેટ્રિક અથવા ખ્યાલ આવરી લે છે: વ્યાખ્યા, તે શા માટે મહત્ત્વનું છે, તેની ગણતરી કેવી રીતે થાય છે, એક ઉદાહરણ, ડેટા સ્ત્રોતો અને મર્યાદાઓ, સામાન્ય ભૂલો અને સ્ત્રોતો.`,
	topicsCountSubtitle: (n) => `${n} વિષયો`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} ના બધા વિષયો, A થી Z ક્રમમાં.`,
	topicsIntroPrefix: (count) => `બધા ${count} વિષયો મૂળાક્ષરક્રમમાં. વાંચનક્રમ માટે જુઓ`,
	contentsLinkText: 'અનુક્રમણિકા',
	jumpToLetter: 'અક્ષર પર જાઓ',

	searchMetaDescription: (bookTitle) => `${bookTitle} ના દરેક વિષયમાં શોધો.`,
	searchIntro: (count) =>
		`બધા ${count} વિષયોમાં શીર્ષક, ભાગ, સારાંશ અને વિભાગ મથાળા દ્વારા શોધો. બધું તમારા બ્રાઉઝરમાં જ ચાલે છે — તમે જે લખો છો તે આ પૃષ્ઠની બહાર જતું નથી.`,
	searchInputLabel: 'વિષયો શોધો',
	searchPlaceholder: 'DAU, રીટેન્શન, PROM પૂર્ણતા દર…',
	searchHintEmptyHtml: 'શોધવા માટે લખો. <em>DAU</em>, <em>રીટેન્શન</em> અથવા <em>PROM</em> અજમાવો.',
	noResultsPrefix: 'કોઈ વિષય મેળ ખાતો નથી: ',
	noResultsMiddle: '. વધુ વ્યાપક શબ્દ અજમાવો, અથવા બ્રાઉઝ કરો ',
	resultsCountSingular: 'વિષય',
	resultsCountPlural: 'વિષયો',

	topicPosition: (index, total) => `વિષય ${index} / ${total}`,
	onThisPage: 'આ પૃષ્ઠ પર',
	paginationLabel: 'પુસ્તક',
	paginationPrevious: 'પાછલું',
	paginationNext: 'આગળનું'
};

/** @type {Messages} */
const chrome_ha = {
	skipToContent: 'Tsallaka zuwa abubuwan da ke ciki',
	navHome: 'Shafin farko',
	navContents: 'Abubuwan da ke ciki',
	navTopicsAZ: 'Batutuwa A–Z',
	navSearch: 'Bincike',
	navAbout: 'Game da mu',
	footerSourceLink: 'Tushe',
	footerTaglineSuffix:
		' — ma\'anonin ma\'aunin lafiyar dijital, misalai, da hujjoji ga ƙungiyoyin da ke ginawa, tantancewa, da bayar da odar kayayyakin lafiyar dijital.',
	footerNote:
		'Alkaluman da ke cikin wannan littafi suna saurin tsufa. Kowane batu yana nuna kwanan watan ma\'aunin kwatance a cikin rubutun; a sake tabbatarwa kafin a yi amfani da kowane lamba a cikin hujjar kasuwanci ta gaske.',
	pickerTheme: 'Jigo',
	pickerLanguage: 'Harshe',
	pickerTextSize: 'Girman rubutu',
	pickerShare: 'Raba',
	pickerLinks: 'Hanyoyin haɗi',
	shareCopyLink: 'Kwafi hanyar haɗi',
	shareCopied: 'An kwafa',
	shareCopyFailed: 'Kwafin bai yi nasara ba',
	shareEmailLabel: 'Aika hanyar haɗi ta imel',
	shareLinkedinLabel: 'Raba a LinkedIn',
	shareRedditLabel: 'Raba a Reddit',
	shareBlueskyLabel: 'Raba a Bluesky',
	shareMastodonLabel: 'Raba a Mastodon',

	startHere: 'Fara daga nan',
	startHereSubtitle: 'Ra\'ayoyi uku da duk sauran abubuwa ke ginuwa a kansu.',

	contentsMetaDescription: (bookTitle) => `Kowane batu a cikin ${bookTitle}, bisa tsarin karatu.`,
	contentsIntro: (count, parts) =>
		`Dukkan batutuwa ${count} bisa tsarin karatu, a cikin sassa ${parts}. Kowane batu yana magana kan ma'auni ɗaya ko ra'ayi ɗaya: ma'ana, dalilin da ya sa yake da muhimmanci, yadda ake lissafa shi, misali da aka yi aiki, tushen bayanai da gargaɗi, kura-kurai, da madogara.`,
	topicsCountSubtitle: (n) => `Batutuwa ${n}`,

	topicsMetaDescription: (bookTitle) => `Kowane batu a cikin ${bookTitle}, an jera shi daga A zuwa Z.`,
	topicsIntroPrefix: (count) => `Dukkan batutuwa ${count} bisa tsarin haruffa. Domin tsarin karatu, duba `,
	contentsLinkText: 'abubuwan da ke ciki',
	jumpToLetter: 'Tsallaka zuwa harafi',

	searchMetaDescription: (bookTitle) => `Bincika kowane batu a cikin ${bookTitle}.`,
	searchIntro: (count) =>
		`Bincika dukkan batutuwa ${count} ta take, sashe, taƙaitaccen bayani, da taken ɓangare. Komai yana gudana a cikin burauzarku — babu abin da kuke rubutawa da ke fita daga wannan shafi.`,
	searchInputLabel: 'Bincika batutuwa',
	searchPlaceholder: 'DAU, riƙewa, adadin kammala PROM…',
	searchHintEmptyHtml: 'Rubuta domin bincike. Gwada <em>DAU</em>, <em>riƙewa</em>, ko <em>PROM</em>.',
	noResultsPrefix: 'Babu batutuwan da suka dace da ',
	noResultsMiddle: '. Gwada kalma mafi faɗi, ko ku duba ',
	resultsCountSingular: 'batu',
	resultsCountPlural: 'batutuwa',

	topicPosition: (index, total) => `Batu na ${index} cikin ${total}`,
	onThisPage: 'A kan wannan shafi',
	paginationLabel: 'Littafi',
	paginationPrevious: 'Na baya',
	paginationNext: 'Na gaba'
};

/** @type {Messages} */
const chrome_he = {
	skipToContent: 'דילוג לתוכן',
	navHome: 'דף הבית',
	navContents: 'תוכן העניינים',
	navTopicsAZ: 'נושאים א–ת',
	navSearch: 'חיפוש',
	navAbout: 'אודות',
	footerSourceLink: 'קוד מקור',
	footerTaglineSuffix:
		' — הגדרות של מדדי בריאות דיגיטלית, דוגמאות ונימוקים לצוותים שבונים, מעריכים ומזמינים מוצרי בריאות דיגיטלית.',
	footerNote:
		'המספרים בספר זה מתיישנים במהירות. כל נושא מתארך את נקודות ההשוואה שלו בגוף הטקסט; יש לאמת אותם מחדש לפני שימוש בכל מספר בתיק עסקי חי.',
	pickerTheme: 'ערכת נושא',
	pickerLanguage: 'שפה',
	pickerTextSize: 'גודל טקסט',
	pickerShare: 'שיתוף',
	pickerLinks: 'קישורים',
	shareCopyLink: 'העתקת קישור',
	shareCopied: 'הועתק',
	shareCopyFailed: 'ההעתקה נכשלה',
	shareEmailLabel: 'שליחת קישור בדוא״ל',
	shareLinkedinLabel: 'שיתוף ב-LinkedIn',
	shareRedditLabel: 'שיתוף ב-Reddit',
	shareBlueskyLabel: 'שיתוף ב-Bluesky',
	shareMastodonLabel: 'שיתוף ב-Mastodon',

	startHere: 'מתחילים כאן',
	startHereSubtitle: 'שלושת הרעיונות שכל השאר נשען עליהם.',

	contentsMetaDescription: (bookTitle) => `כל הנושאים ב${bookTitle}, לפי סדר הקריאה.`,
	contentsIntro: (count, parts) =>
		`כל ${count} הנושאים לפי סדר הקריאה, ב-${parts} חלקים. כל נושא עוסק במדד או במושג אחד: הגדרה, למה זה חשוב, איך מחשבים, דוגמה מחושבת, מקורות נתונים והסתייגויות, מלכודות ומקורות.`,
	topicsCountSubtitle: (n) => `${n} נושאים`,

	topicsMetaDescription: (bookTitle) => `כל הנושאים ב${bookTitle}, בסדר אלפביתי.`,
	topicsIntroPrefix: (count) => `כל ${count} הנושאים בסדר אלפביתי. לסדר הקריאה, ראו את `,
	contentsLinkText: 'תוכן העניינים',
	jumpToLetter: 'מעבר לאות',

	searchMetaDescription: (bookTitle) => `חיפוש בכל הנושאים ב${bookTitle}.`,
	searchIntro: (count) =>
		`חיפוש בכל ${count} הנושאים לפי כותרת, חלק, תקציר וכותרת סעיף. הכול פועל בדפדפן שלכם — דבר ממה שאתם מקלידים אינו יוצא מהדף הזה.`,
	searchInputLabel: 'חיפוש נושאים',
	searchPlaceholder: 'DAU, שימור, שיעור השלמת PROM…',
	searchHintEmptyHtml: 'הקלידו כדי לחפש. נסו <em>DAU</em>, <em>שימור</em> או <em>PROM</em>.',
	noResultsPrefix: 'אין נושאים התואמים את ',
	noResultsMiddle: '. נסו מונח רחב יותר, או פתחו את ',
	resultsCountSingular: 'נושא',
	resultsCountPlural: 'נושאים',

	topicPosition: (index, total) => `נושא ${index} מתוך ${total}`,
	onThisPage: 'בדף זה',
	paginationLabel: 'הספר',
	paginationPrevious: 'הקודם',
	paginationNext: 'הבא'
};

/** @type {Messages} */
const chrome_hr = {
	skipToContent: 'Preskoči na sadržaj',
	navHome: 'Početna',
	navContents: 'Sadržaj',
	navTopicsAZ: 'Teme A–Ž',
	navSearch: 'Pretraga',
	navAbout: 'O projektu',
	footerSourceLink: 'Izvorni kod',
	footerTaglineSuffix:
		' — definicije metrika digitalnog zdravlja, primjeri i obrazloženja za timove koji grade, vrednuju i naručuju digitalne zdravstvene proizvode.',
	footerNote:
		'Brojke u ovoj knjizi brzo zastarijevaju. Svaka tema datira svoje referentne vrijednosti u tekstu; ponovno ih provjerite prije nego što bilo koji broj upotrijebite u stvarnom poslovnom slučaju.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Jezik',
	pickerTextSize: 'Veličina teksta',
	pickerShare: 'Podijeli',
	pickerLinks: 'Poveznice',
	shareCopyLink: 'Kopiraj poveznicu',
	shareCopied: 'Kopirano',
	shareCopyFailed: 'Kopiranje nije uspjelo',
	shareEmailLabel: 'Pošalji poveznicu e-poštom',
	shareLinkedinLabel: 'Podijeli na LinkedInu',
	shareRedditLabel: 'Podijeli na Redditu',
	shareBlueskyLabel: 'Podijeli na Blueskyju',
	shareMastodonLabel: 'Podijeli na Mastodonu',

	startHere: 'Počnite ovdje',
	startHereSubtitle: 'Tri ideje na kojima se temelji sve ostalo.',

	contentsMetaDescription: (bookTitle) => `Sve teme u knjizi ${bookTitle}, redoslijedom čitanja.`,
	contentsIntro: (count, parts) =>
		`Svih ${count} tema redoslijedom čitanja, u ${parts} ${parts % 10 >= 2 && parts % 10 <= 4 && (parts % 100 < 12 || parts % 100 > 14) ? 'dijela' : 'dijelova'}. Svaka tema obrađuje jednu metriku ili pojam: definiciju, zašto je važna, kako se izračunava, razrađeni primjer, izvore podataka i ograničenja, uobičajene zamke i izvore.`,
	topicsCountSubtitle: (n) =>
		`${n} ${n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'teme' : n % 10 === 1 && n % 100 !== 11 ? 'tema' : 'tema'}`,

	topicsMetaDescription: (bookTitle) => `Sve teme u knjizi ${bookTitle}, abecednim redom.`,
	topicsIntroPrefix: (count) => `Svih ${count} tema abecednim redom. Za redoslijed čitanja pogledajte`,
	contentsLinkText: 'sadržaj',
	jumpToLetter: 'Idi na slovo',

	searchMetaDescription: (bookTitle) => `Pretražite sve teme u knjizi ${bookTitle}.`,
	searchIntro: (count) =>
		`Pretražite svih ${count} tema po naslovu, dijelu, sažetku i naslovu odjeljka. Sve se izvodi u vašem pregledniku — ništa što upišete ne napušta ovu stranicu.`,
	searchInputLabel: 'Pretraži teme',
	searchPlaceholder: 'DAU, zadržavanje, stopa ispunjavanja PROM-a…',
	searchHintEmptyHtml: 'Upišite za pretragu. Isprobajte <em>DAU</em>, <em>zadržavanje</em> ili <em>PROM</em>.',
	noResultsPrefix: 'Nijedna tema ne odgovara upitu ',
	noResultsMiddle: '. Pokušajte sa širim pojmom ili pregledajte ',
	resultsCountSingular: 'tema',
	resultsCountPlural: 'tema',

	topicPosition: (index, total) => `Tema ${index} od ${total}`,
	onThisPage: 'Na ovoj stranici',
	paginationLabel: 'Knjiga',
	paginationPrevious: 'Prethodna',
	paginationNext: 'Sljedeća'
};

/** @type {Messages} */
const chrome_hu = {
	skipToContent: 'Ugrás a tartalomra',
	navHome: 'Kezdőlap',
	navContents: 'Tartalom',
	navTopicsAZ: 'Témák A–Z',
	navSearch: 'Keresés',
	navAbout: 'Névjegy',
	footerSourceLink: 'Forrás',
	footerTaglineSuffix:
		' – digitális egészségügyi mutatók meghatározásai, példái és indoklásai digitális egészségügyi termékeket építő, értékelő és megrendelő csapatoknak.',
	footerNote:
		'A könyvben szereplő adatok gyorsan elavulnak. Minden téma a viszonyítási értékeit a szövegben datálja; élő üzleti indoklásban való felhasználás előtt ellenőrizze újra a számokat.',
	pickerTheme: 'Téma',
	pickerLanguage: 'Nyelv',
	pickerTextSize: 'Szövegméret',
	pickerShare: 'Megosztás',
	pickerLinks: 'Hivatkozások',
	shareCopyLink: 'Hivatkozás másolása',
	shareCopied: 'Másolva',
	shareCopyFailed: 'A másolás nem sikerült',
	shareEmailLabel: 'Hivatkozás küldése e-mailben',
	shareLinkedinLabel: 'Megosztás a LinkedInen',
	shareRedditLabel: 'Megosztás a Redditen',
	shareBlueskyLabel: 'Megosztás a Blueskyon',
	shareMastodonLabel: 'Megosztás a Mastodonon',

	startHere: 'Kezdje itt',
	startHereSubtitle: 'A három alapgondolat, amelyre minden más épül.',

	contentsMetaDescription: (bookTitle) => `A(z) ${bookTitle} minden témája olvasási sorrendben.`,
	contentsIntro: (count, parts) =>
		`Mind a(z) ${count} téma olvasási sorrendben, ${parts} részben. Minden téma egy mutatót vagy fogalmat tárgyal: meghatározás, miért fontos, hogyan számítjuk, kidolgozott példa, adatforrások és megszorítások, buktatók és források.`,
	topicsCountSubtitle: (n) => `${n} téma`,

	topicsMetaDescription: (bookTitle) => `A(z) ${bookTitle} minden témája A-tól Z-ig felsorolva.`,
	topicsIntroPrefix: (count) => `Mind a(z) ${count} téma betűrendben. Az olvasási sorrendet lásd itt: `,
	contentsLinkText: 'tartalom',
	jumpToLetter: 'Ugrás a betűhöz',

	searchMetaDescription: (bookTitle) => `Keresés a(z) ${bookTitle} minden témájában.`,
	searchIntro: (count) =>
		`Keressen mind a(z) ${count} témában cím, rész, összefoglaló és szakaszcím szerint. Minden a böngészőjében fut – semmi, amit beír, nem hagyja el ezt az oldalt.`,
	searchInputLabel: 'Témák keresése',
	searchPlaceholder: 'DAU, megtartás, PROM-kitöltési arány…',
	searchHintEmptyHtml: 'Kezdjen gépelni a kereséshez. Próbálja ki: <em>DAU</em>, <em>megtartás</em> vagy <em>PROM</em>.',
	noResultsPrefix: 'Nincs találat erre: ',
	noResultsMiddle: '. Próbáljon tágabb kifejezést, vagy lapozza át itt: ',
	resultsCountSingular: 'téma',
	resultsCountPlural: 'téma',

	topicPosition: (index, total) => `${index}. téma, összesen ${total}`,
	onThisPage: 'Ezen az oldalon',
	paginationLabel: 'Könyv',
	paginationPrevious: 'Előző',
	paginationNext: 'Következő'
};

/** @type {Messages} */
const chrome_jv = {
	skipToContent: 'Langsung menyang isi',
	navHome: 'Ngarep',
	navContents: 'Daftar isi',
	navTopicsAZ: 'Topik A–Z',
	navSearch: 'Golek',
	navAbout: 'Babagan',
	footerSourceLink: 'Sumber',
	footerTaglineSuffix:
		' — definisi metrik kesehatan digital, conto, lan alesan kanggo tim sing mbangun, ngevaluasi, lan mesen produk kesehatan digital.',
	footerNote:
		'Angka ing buku iki cepet kadaluwarsa. Saben topik nyathet tanggal patokane ing kalimat; priksa maneh sadurunge nggunakake angka apa wae ing business case sing nyata.',
	pickerTheme: 'Tema',
	pickerLanguage: 'Basa',
	pickerTextSize: 'Ukuran teks',
	pickerShare: 'Bagikan',
	pickerLinks: 'Pranala',
	shareCopyLink: 'Salin pranala',
	shareCopied: 'Wis disalin',
	shareCopyFailed: 'Gagal nyalin',
	shareEmailLabel: 'Kirim pranala liwat email',
	shareLinkedinLabel: 'Bagikan ing LinkedIn',
	shareRedditLabel: 'Bagikan ing Reddit',
	shareBlueskyLabel: 'Bagikan ing Bluesky',
	shareMastodonLabel: 'Bagikan ing Mastodon',

	startHere: 'Wiwiti ing kene',
	startHereSubtitle: 'Telung gagasan sing dadi dhasar kanggo kabeh liyane.',

	contentsMetaDescription: (bookTitle) => `Saben topik ing ${bookTitle}, miturut urutan maca.`,
	contentsIntro: (count, parts) =>
		`Kabeh ${count} topik miturut urutan maca, ing ${parts} bagean. Saben topik mbahas siji metrik utawa konsep: definisi, sebabe penting, carane diitung, conto petungan, sumber data lan pangati-ati, kesalahan umum, lan sumber.`,
	topicsCountSubtitle: (n) => `${n} topik`,

	topicsMetaDescription: (bookTitle) => `Saben topik ing ${bookTitle}, kadhaptar saka A nganti Z.`,
	topicsIntroPrefix: (count) => `Kabeh ${count} topik miturut urutan abjad. Kanggo urutan maca, deleng`,
	contentsLinkText: 'daftar isi',
	jumpToLetter: 'Mlumpat menyang aksara',

	searchMetaDescription: (bookTitle) => `Golek saben topik ing ${bookTitle}.`,
	searchIntro: (count) =>
		`Golek ing kabeh ${count} topik miturut judhul, bagean, ringkesan, lan judhul subbagean. Kabeh mlaku ing browser sampeyan — apa wae sing sampeyan ketik ora metu saka kaca iki.`,
	searchInputLabel: 'Golek topik',
	searchPlaceholder: 'DAU, retensi, tingkat panyelesaian PROM…',
	searchHintEmptyHtml: 'Ketik kanggo golek. Coba <em>DAU</em>, <em>retensi</em>, utawa <em>PROM</em>.',
	noResultsPrefix: 'Ora ana topik sing cocog karo ',
	noResultsMiddle: '. Coba tembung sing luwih jembar, utawa deleng ',
	resultsCountSingular: 'topik',
	resultsCountPlural: 'topik',

	topicPosition: (index, total) => `Topik ${index} saka ${total}`,
	onThisPage: 'Ing kaca iki',
	paginationLabel: 'Buku',
	paginationPrevious: 'Sadurunge',
	paginationNext: 'Sabanjure'
};

/** @type {Messages} */
const chrome_km = {
	skipToContent: 'រំលងទៅមាតិកា',
	navHome: 'ទំព័រដើម',
	navContents: 'មាតិកា',
	navTopicsAZ: 'ប្រធានបទ A–Z',
	navSearch: 'ស្វែងរក',
	navAbout: 'អំពី',
	footerSourceLink: 'កូដប្រភព',
	footerTaglineSuffix:
		' — និយមន័យរង្វាស់សុខភាពឌីជីថល ឧទាហរណ៍ និងហេតុផល សម្រាប់ក្រុមដែលកំពុងកសាង វាយតម្លៃ និងកម្មង់ផលិតផលសុខភាពឌីជីថល។',
	footerNote:
		'តួលេខក្នុងសៀវភៅនេះហួសសម័យលឿន។ ប្រធានបទនីមួយៗបញ្ជាក់កាលបរិច្ឆេទនៃខ្នាតគោលក្នុងអត្ថបទ។ សូមផ្ទៀងផ្ទាត់ម្តងទៀតមុននឹងប្រើលេខណាមួយក្នុងករណីអាជីវកម្មពិតប្រាកដ។',
	pickerTheme: 'រូបរាង',
	pickerLanguage: 'ភាសា',
	pickerTextSize: 'ទំហំអក្សរ',
	pickerShare: 'ចែករំលែក',
	pickerLinks: 'តំណ',
	shareCopyLink: 'ចម្លងតំណ',
	shareCopied: 'បានចម្លង',
	shareCopyFailed: 'ការចម្លងបរាជ័យ',
	shareEmailLabel: 'ផ្ញើតំណតាមអ៊ីមែល',
	shareLinkedinLabel: 'ចែករំលែកលើ LinkedIn',
	shareRedditLabel: 'ចែករំលែកលើ Reddit',
	shareBlueskyLabel: 'ចែករំលែកលើ Bluesky',
	shareMastodonLabel: 'ចែករំលែកលើ Mastodon',
	startHere: 'ចាប់ផ្តើមនៅទីនេះ',
	startHereSubtitle: 'គំនិតទាំងបីដែលអ្វីៗផ្សេងទៀតពឹងផ្អែកលើ។',
	contentsMetaDescription: (bookTitle) => `ប្រធានបទទាំងអស់ក្នុង ${bookTitle} តាមលំដាប់នៃការអាន។`,
	contentsIntro: (count, parts) =>
		`ប្រធានបទទាំង ${count} តាមលំដាប់នៃការអាន ចែកជា ${parts} ផ្នែក។ ប្រធានបទនីមួយៗគ្របដណ្តប់រង្វាស់ ឬគោលគំនិតមួយ៖ និយមន័យ ហេតុអ្វីបានសំខាន់ របៀបគណនា ឧទាហរណ៍អនុវត្តជាក់ស្តែង ប្រភពទិន្នន័យ និងចំណុចត្រូវប្រុងប្រយ័ត្ន កំហុសដែលតែងកើតមាន និងប្រភព។`,
	topicsCountSubtitle: (n) => `ប្រធានបទ ${n}`,
	topicsMetaDescription: (bookTitle) => `ប្រធានបទទាំងអស់ក្នុង ${bookTitle} រៀបតាមលំដាប់ A ដល់ Z។`,
	topicsIntroPrefix: (count) => `ប្រធានបទទាំង ${count} តាមលំដាប់អក្ខរក្រម។ សម្រាប់លំដាប់នៃការអាន សូមមើល`,
	contentsLinkText: 'មាតិកា',
	jumpToLetter: 'រំលងទៅអក្សរ',
	searchMetaDescription: (bookTitle) => `ស្វែងរកគ្រប់ប្រធានបទក្នុង ${bookTitle}។`,
	searchIntro: (count) =>
		`ស្វែងរកប្រធានបទទាំង ${count} តាមចំណងជើង ផ្នែក សេចក្តីសង្ខេប និងចំណងជើងផ្នែករង។ អ្វីៗទាំងអស់ដំណើរការក្នុងកម្មវិធីរុករករបស់អ្នក — អ្វីដែលអ្នកវាយមិនចេញពីទំព័រនេះឡើយ។`,
	searchInputLabel: 'ស្វែងរកប្រធានបទ',
	searchPlaceholder: 'DAU, ការរក្សាអ្នកប្រើប្រាស់, អត្រាបំពេញ PROM…',
	searchHintEmptyHtml: 'វាយដើម្បីស្វែងរក។ សាកល្បង <em>DAU</em>, <em>ការរក្សាអ្នកប្រើប្រាស់</em> ឬ <em>PROM</em>។',
	noResultsPrefix: 'គ្មានប្រធានបទត្រូវនឹង ',
	noResultsMiddle: '។ សូមសាកល្បងពាក្យទូលំទូលាយជាងនេះ ឬរកមើលក្នុង',
	resultsCountSingular: 'ប្រធានបទ',
	resultsCountPlural: 'ប្រធានបទ',
	topicPosition: (index, total) => `ប្រធានបទទី ${index} ក្នុងចំណោម ${total}`,
	onThisPage: 'ក្នុងទំព័រនេះ',
	paginationLabel: 'សៀវភៅ',
	paginationPrevious: 'មុន',
	paginationNext: 'បន្ទាប់'
};

/** @type {Messages} */
const chrome_pa = {
	skipToContent: 'ਸਮੱਗਰੀ ’ਤੇ ਜਾਓ',
	navHome: 'ਮੁੱਖ ਪੰਨਾ',
	navContents: 'ਵਿਸ਼ਾ-ਸੂਚੀ',
	navTopicsAZ: 'ਵਿਸ਼ੇ A–Z',
	navSearch: 'ਖੋਜ',
	navAbout: 'ਬਾਰੇ',
	footerSourceLink: 'ਸਰੋਤ',
	footerTaglineSuffix:
		' — ਡਿਜੀਟਲ ਸਿਹਤ ਉਤਪਾਦ ਬਣਾਉਣ, ਮੁਲਾਂਕਣ ਕਰਨ ਅਤੇ ਕਮਿਸ਼ਨ ਕਰਨ ਵਾਲੀਆਂ ਟੀਮਾਂ ਲਈ ਡਿਜੀਟਲ ਸਿਹਤ ਮੈਟ੍ਰਿਕ ਪਰਿਭਾਸ਼ਾਵਾਂ, ਉਦਾਹਰਨਾਂ ਅਤੇ ਤਰਕ।',
	footerNote:
		'ਇਸ ਪੁਸਤਕ ਦੇ ਅੰਕੜੇ ਜਲਦੀ ਪੁਰਾਣੇ ਹੋ ਜਾਂਦੇ ਹਨ। ਹਰ ਵਿਸ਼ਾ ਆਪਣੇ ਬੈਂਚਮਾਰਕਾਂ ਦੀ ਮਿਤੀ ਇਬਾਰਤ ਵਿੱਚ ਹੀ ਦਿੰਦਾ ਹੈ; ਕਿਸੇ ਲਾਈਵ ਵਪਾਰਕ ਕੇਸ ਵਿੱਚ ਕੋਈ ਵੀ ਅੰਕੜਾ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਉਸ ਨੂੰ ਮੁੜ ਪਰਖ ਲਓ।',
	pickerTheme: 'ਥੀਮ',
	pickerLanguage: 'ਭਾਸ਼ਾ',
	pickerTextSize: 'ਟੈਕਸਟ ਦਾ ਆਕਾਰ',
	pickerShare: 'ਸਾਂਝਾ ਕਰੋ',
	pickerLinks: 'ਲਿੰਕ',
	shareCopyLink: 'ਲਿੰਕ ਕਾਪੀ ਕਰੋ',
	shareCopied: 'ਕਾਪੀ ਹੋ ਗਿਆ',
	shareCopyFailed: 'ਕਾਪੀ ਨਹੀਂ ਹੋਇਆ',
	shareEmailLabel: 'ਲਿੰਕ ਈਮੇਲ ਕਰੋ',
	shareLinkedinLabel: 'LinkedIn ’ਤੇ ਸਾਂਝਾ ਕਰੋ',
	shareRedditLabel: 'Reddit ’ਤੇ ਸਾਂਝਾ ਕਰੋ',
	shareBlueskyLabel: 'Bluesky ’ਤੇ ਸਾਂਝਾ ਕਰੋ',
	shareMastodonLabel: 'Mastodon ’ਤੇ ਸਾਂਝਾ ਕਰੋ',

	startHere: 'ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ',
	startHereSubtitle: 'ਉਹ ਤਿੰਨ ਵਿਚਾਰ ਜਿਨ੍ਹਾਂ ਉੱਤੇ ਬਾਕੀ ਸਭ ਕੁਝ ਟਿਕਿਆ ਹੈ।',

	contentsMetaDescription: (bookTitle) => `${bookTitle} ਦੇ ਸਾਰੇ ਵਿਸ਼ੇ, ਪੜ੍ਹਨ ਦੇ ਕ੍ਰਮ ਵਿੱਚ।`,
	contentsIntro: (count, parts) =>
		`ਸਾਰੇ ${count} ਵਿਸ਼ੇ ਪੜ੍ਹਨ ਦੇ ਕ੍ਰਮ ਵਿੱਚ, ${parts} ਭਾਗਾਂ ਵਿੱਚ। ਹਰ ਵਿਸ਼ਾ ਇੱਕ ਮੈਟ੍ਰਿਕ ਜਾਂ ਸੰਕਲਪ ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੈ: ਪਰਿਭਾਸ਼ਾ, ਇਹ ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹੈ, ਇਸ ਦੀ ਗਣਨਾ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ, ਇੱਕ ਹੱਲ ਕੀਤੀ ਉਦਾਹਰਨ, ਡੇਟਾ ਸਰੋਤ ਅਤੇ ਸਾਵਧਾਨੀਆਂ, ਆਮ ਗਲਤੀਆਂ, ਅਤੇ ਸਰੋਤ।`,
	topicsCountSubtitle: (n) => `${n} ਵਿਸ਼ੇ`,

	topicsMetaDescription: (bookTitle) => `${bookTitle} ਦੇ ਸਾਰੇ ਵਿਸ਼ੇ, A ਤੋਂ Z ਤੱਕ ਸੂਚੀਬੱਧ।`,
	topicsIntroPrefix: (count) => `ਸਾਰੇ ${count} ਵਿਸ਼ੇ ਵਰਣਮਾਲਾ ਕ੍ਰਮ ਵਿੱਚ। ਪੜ੍ਹਨ ਦੇ ਕ੍ਰਮ ਲਈ, ਵੇਖੋ`,
	contentsLinkText: 'ਵਿਸ਼ਾ-ਸੂਚੀ',
	jumpToLetter: 'ਅੱਖਰ ’ਤੇ ਜਾਓ',

	searchMetaDescription: (bookTitle) => `${bookTitle} ਦੇ ਹਰ ਵਿਸ਼ੇ ਵਿੱਚ ਖੋਜ ਕਰੋ।`,
	searchIntro: (count) =>
		`ਸਾਰੇ ${count} ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਸਿਰਲੇਖ, ਭਾਗ, ਸਾਰ ਅਤੇ ਅਨੁਭਾਗ ਦੇ ਸਿਰਲੇਖ ਰਾਹੀਂ ਖੋਜ ਕਰੋ। ਸਭ ਕੁਝ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਚੱਲਦਾ ਹੈ — ਤੁਸੀਂ ਜੋ ਟਾਈਪ ਕਰਦੇ ਹੋ ਉਹ ਇਸ ਪੰਨੇ ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਜਾਂਦਾ।`,
	searchInputLabel: 'ਵਿਸ਼ੇ ਖੋਜੋ',
	searchPlaceholder: 'DAU, ਬਰਕਰਾਰੀ, PROM ਪੂਰਨ ਦਰ…',
	searchHintEmptyHtml: 'ਖੋਜਣ ਲਈ ਟਾਈਪ ਕਰੋ। <em>DAU</em>, <em>ਬਰਕਰਾਰੀ</em> ਜਾਂ <em>PROM</em> ਅਜ਼ਮਾਓ।',
	noResultsPrefix: 'ਕੋਈ ਵਿਸ਼ਾ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ ',
	noResultsMiddle: ' ਨਾਲ। ਕੋਈ ਵਿਆਪਕ ਸ਼ਬਦ ਅਜ਼ਮਾਓ, ਜਾਂ ਵੇਖੋ ',
	resultsCountSingular: 'ਵਿਸ਼ਾ',
	resultsCountPlural: 'ਵਿਸ਼ੇ',

	topicPosition: (index, total) => `ਵਿਸ਼ਾ ${index} / ${total}`,
	onThisPage: 'ਇਸ ਪੰਨੇ ’ਤੇ',
	paginationLabel: 'ਪੁਸਤਕ',
	paginationPrevious: 'ਪਿਛਲਾ',
	paginationNext: 'ਅਗਲਾ'
};

const TRANSLATIONS = {
	'cy-001': cy,
	'zh-cn': zh,
	'zh-th': zh,
	'es-001': es,
	'hi-001': hi,
	'ar-001': ar,
	'fr-001': fr,
	'pt-001': pt,
	'de-de': de,
	'de-at': de,
	'ru-001': ru,
	'bn-bd': bn,
	'bn-in': bn,
	'ko-kr': ko,
	'ja-jp': ja,
	'sv-se': sv,
	'nl-nl': nl,
	'ur-pk': ur,
	'id-id': id,
	'id-my': id,
	'it-it': it,
	'uk-ua': uk,
	'fi-fi': fi,
	'no-no': no,
	'da-dk': da,
	'pl-pl': pl,
	'vi-001': vi,
	'vi-vn': vi,
	'et-001': et,
	'et-et': et,
	'th-001': th,
	'th-th': th,
	'tr-tr': tr,
	'bn-001': bn,
	'id-001': id,
	'ja-001': ja,
	'ko-001': ko,
	'zh-001': zh,
	'sv-001': sv,
	'nl-001': nl,
	'ur-001': ur,
	'da-001': da,
	'fi-001': fi,
	'it-001': it,
	'tr-001': tr,
	'is-is': is,
	'is-001': is,
	'zh-tw': zhTw,
	'sw-001': sw,
	'sw-tz': sw,
	// Country-specific variants of a language already covered by an
	// international -001 locale reuse that locale's translation object.
	'de-001': de,
	'ar-eg': ar,
	'ar-dz': ar,
	'hi-in': hi,
	'hi-np': hi,
	'es-es': es,
	'pt-pt': pt,
	'pt-br': pt,
	'fr-ca': fr,
	'es-mx': es,
	'ru-ru': ru,
	'ru-by': ru,
	'fr-fr': fr,
	'cy-gb': cy,
	'nb-001': no,
	'nb-no': no,
	'pl-001': pl,
	'uk-001': uk,
	'fr-be': fr,
	'fr-lu': fr,
	'nl-be': nl,
	'et-ee': et,
	'kn-001': chrome_kn,
	'kw-001': chrome_kw,
	'lb-001': chrome_lb,
	'lo-001': chrome_lo,
	'lt-001': chrome_lt,
	'lv-001': chrome_lv,
	'mr-001': chrome_mr,
	'ms-001': chrome_ms,
	'mt-001': chrome_mt,
	'pcm-001': chrome_pcm,
	'ro-001': chrome_ro,
	'sco-001': chrome_sco,
	'sk-001': chrome_sk,
	'sl-001': chrome_sl,
	'ta-001': chrome_ta,
	'te-001': chrome_te,
	'tl-001': chrome_tl,
	'wuu-001': chrome_wuu,
	'yue-001': chrome_yue,
	'bh-001': chrome_bh,
	'bg-001': chrome_bg,
	'cs-001': chrome_cs,
	'el-001': chrome_el,
	'eu-001': chrome_eu,
	'fa-001': chrome_fa,
	'ga-001': chrome_ga,
	'gd-001': chrome_gd,
	'gu-001': chrome_gu,
	'ha-001': chrome_ha,
	'he-001': chrome_he,
	'hr-001': chrome_hr,
	'hu-001': chrome_hu,
	'jv-001': chrome_jv,
	'km-001': chrome_km,
	'pa-001': chrome_pa,
	'bg-bg': chrome_bg,
	'cs-cz': chrome_cs,
	'el-gr': chrome_el,
	'el-cy': chrome_el,
	'eu-es': chrome_eu,
	'ga-ie': chrome_ga,
	'gd-gb': chrome_gd,
	'hr-hr': chrome_hr,
	'hu-hu': chrome_hu,
	'km-kh': chrome_km,
	'kw-gb': chrome_kw,
	'lb-lu': chrome_lb,
	'lo-la': chrome_lo,
	'lt-lt': chrome_lt,
	'lv-lv': chrome_lv,
	'mt-mt': chrome_mt,
	'ro-ro': chrome_ro,
	'sco-gb': chrome_sco,
	'sk-sk': chrome_sk,
	'sl-si': chrome_sl
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
