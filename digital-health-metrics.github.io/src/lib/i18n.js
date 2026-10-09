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

const TRANSLATIONS = {
	'cy-001': cy,
	'zh-cn': zh,
	'es-001': es,
	'hi-001': hi,
	'ar-001': ar,
	'fr-001': fr,
	'pt-001': pt,
	'de-de': de,
	'ru-001': ru,
	'bn-bd': bn,
	'ko-kr': ko,
	'ja-jp': ja,
	'sv-se': sv,
	'nl-nl': nl,
	'ur-pk': ur,
	'id-id': id,
	'it-it': it,
	'uk-ua': uk,
	'fi-fi': fi,
	'no-no': no,
	'da-dk': da,
	'pl-pl': pl,
	'vi-001': vi,
	'et-001': et,
	'th-001': th,
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
	// Country-specific variants of a language already covered by an
	// international -001 locale reuse that locale's translation object.
	'de-001': de,
	'ar-eg': ar,
	'hi-in': hi,
	'es-es': es,
	'pt-pt': pt,
	'ru-ru': ru,
	'fr-fr': fr,
	'cy-gb': cy
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
