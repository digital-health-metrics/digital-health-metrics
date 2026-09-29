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
// Only 9 of the site's 12 public locales need an entry in TRANSLATIONS below:
// the 3 English variants (en-us, en-gb, en-001) all share this same base EN
// table with no per-variant overrides, same as they would for any other
// English-only difference (spelling, not vocabulary) — only cy-001 (Welsh),
// zh-cn (Simplified Chinese), es-001 (Spanish), hi-001 (Hindi), ar-001
// (Arabic), fr-001 (French), pt-001 (Portuguese), de-de (German), and
// ru-001 (Russian) need their own chrome translations.

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
	'ru-001': ru
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
