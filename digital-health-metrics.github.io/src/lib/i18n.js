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
// Only 14 of the site's 23 public locales need an entry in TRANSLATIONS
// below: the 3 English variants (en-us, en-gb, en-001) all share this same
// base EN table with no per-variant overrides, same as they would for any
// other English-only difference (spelling, not vocabulary) — and the 6
// country-specific variants of a language already covered by an
// international `-001` locale (ar-eg, hi-in, es-es, pt-pt, ru-ru, fr-fr)
// deliberately reuse that locale's own translation object rather than
// getting a separate one, for the same reason their book content is reused
// verbatim (see spec/index.md §4). That leaves cy-001 (Welsh), zh-cn
// (Simplified Chinese), es-001 (Spanish), hi-001 (Hindi), ar-001 (Arabic),
// fr-001 (French), pt-001 (Portuguese), de-de (German), ru-001 (Russian),
// bn-bd (Bengali), ko-kr (Korean), ja-jp (Japanese), sv-se (Swedish), and
// nl-nl (Dutch) with their own chrome translations.

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

/** @type {Record<string, Messages>} */
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
	// Country-specific variants of a language already covered by an
	// international -001 locale reuse that locale's translation object.
	'ar-eg': ar,
	'hi-in': hi,
	'es-es': es,
	'pt-pt': pt,
	'ru-ru': ru,
	'fr-fr': fr
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
