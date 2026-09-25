<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import { DEFAULT_LOCALE, localeLabel } from '$lib/locales.js';
	import { ui } from '$lib/i18n.js';

	let { data, children } = $props();

	// page.data is the merged data across the whole layout hierarchy, so on a
	// locale-scoped route this picks up that locale's own bookTitle (set by
	// locales/[locale]/+layout.server.js, overriding this root layout's own
	// canonical-locale one) instead of always showing the English title in
	// the header/footer. The 404.html fallback is rendered without layout
	// data at all, so this falls back to something sensible rather than
	// throwing on a page that exists to be shown when something has already
	// gone wrong.
	const bookTitle = $derived(page.data?.bookTitle ?? data?.bookTitle ?? 'Digital Health Metrics');
	const locales = $derived(data?.locales ?? []);
	const locale = $derived(page.params.locale);
	const t = $derived(ui(locale ?? DEFAULT_LOCALE));

	// Contents/Topics/Search only make sense once a locale is chosen; outside
	// a locale (the root picker, /about/) the nav only offers Home and About.
	const topLinks = $derived(
		locale
			? [
					{ href: `/locales/${locale}/`, label: t.navHome },
					{ href: `/locales/${locale}/contents/`, label: t.navContents },
					{ href: `/locales/${locale}/topics/`, label: t.navTopicsAZ },
					{ href: `/locales/${locale}/search/`, label: t.navSearch },
					{ href: '/about/', label: t.navAbout }
				]
			: [
					{ href: '/', label: t.navHome },
					{ href: '/about/', label: t.navAbout }
				]
	);

	/** @param {string} url @param {string} title */
	const mailtoHref = (url, title) =>
		`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
	/** @param {string} url */
	const linkedinHref = (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
	/** @param {string} url @param {string} title */
	const redditHref = (url, title) =>
		`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
	/** @param {string} url @param {string} title */
	const blueskyHref = (url, title) =>
		`https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`;
	/** @param {string} url @param {string} title */
	const mastodonHref = (url, title) =>
		`https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

	const shareTargets = $derived([
		{ id: 'email', label: t.shareEmailLabel, href: mailtoHref },
		{ id: 'linkedin', label: t.shareLinkedinLabel, href: linkedinHref },
		{ id: 'reddit', label: t.shareRedditLabel, href: redditHref },
		{ id: 'bluesky', label: t.shareBlueskyLabel, href: blueskyHref },
		{ id: 'mastodon', label: t.shareMastodonLabel, href: mastodonHref }
	]);

	const path = $derived(page.url.pathname);

	/** @param {string} href */
	function current(href) {
		return path === `${base}${href}` || path === href;
	}

	// The locale picker only changes `lang`/`dir` and calls this — it never
	// navigates on its own. On a topic page, `localeLinks` (from book.js, via
	// each topic's .locale-peer-id) gives the exact URL for the same topic in
	// the target locale, since slugs can differ by locale. Off a topic page,
	// swapping the `/locales/<code>/` prefix is exact (home/contents/topics/
	// search have no per-locale slug). With no locale in the URL at all
	// (the root picker, /about/), there's nothing to preserve — go to that
	// locale's home.
	/** @param {string} next */
	function navigateToLocale(next) {
		const links = page.data?.localeLinks;
		if (links?.[next]) {
			goto(`${base}${links[next]}`, { invalidateAll: true });
			return;
		}
		if (locale) {
			goto(`${base}${path.replace(/\/locales\/[\w-]+/, `/locales/${next}`)}`, { invalidateAll: true });
			return;
		}
		goto(`${base}/locales/${next}/`, { invalidateAll: true });
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<SkipLink class="skip-link" href="#main" label={t.skipToContent} />

<Header class="site-header" label="Site">
	<div class="site-header-inner">
		<a class="site-brand" href="{base}/">
			<span class="site-brand-mark" aria-hidden="true">⚕</span>
			<span class="site-brand-name">{bookTitle}</span>
		</a>

		<nav class="site-nav" aria-label="Main">
			{#each topLinks as link (link.href)}
				<a href="{base}{link.href}" aria-current={current(link.href) ? 'page' : undefined}>
					{link.label}
				</a>
			{/each}
			<a href="https://github.com/digital-health-metrics/digital-health-metrics">GitHub</a>
		</nav>

		{#snippet shareIcon()}
			<!-- Outline arrow: an explicit-size SVG (not an em-scaled text glyph),
			     so it sidesteps the --lily-picker-icon-scale font-size math entirely. -->
			<svg
				class="share-picker-icon"
				viewBox="0 0 16 16"
				width="1.05rem"
				height="1.05rem"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
			</svg>
		{/snippet}

		<PickerBar
			class="site-controls"
			labels={{ theme: t.pickerTheme, locale: t.pickerLanguage, textSize: t.pickerTextSize, share: t.pickerShare }}
			themesUrl="{base}/assets/themes/"
			themeProps={{ defaultValue: 'light', detectFromSystem: true, storageKey: 'digital-health-metrics.theme' }}
			{locales}
			localeProps={{
				value: locale ?? '',
				defaultValue: DEFAULT_LOCALE,
				storageKey: 'digital-health-metrics.locale',
				localeLabels: Object.fromEntries(locales.map((code) => [code, localeLabel(code)])),
				onChange: navigateToLocale
			}}
			textSizeProps={{ defaultValue: 'normal', storageKey: 'digital-health-metrics.text-size' }}
			{shareTargets}
			shareProps={{
				title: bookTitle,
				copyLabel: t.shareCopyLink,
				copiedLabel: t.shareCopied,
				copyFailedLabel: t.shareCopyFailed,
				children: shareIcon
			}}
		/>
	</div>
</Header>

<div class="site-body">
	<main id="main" class="site-main">
		{@render children()}
	</main>
</div>

<Footer class="site-footer" label="Site">
	<div class="site-footer-inner">
		<p>
			<strong>{bookTitle}</strong>{t.footerTaglineSuffix}
		</p>
		<p class="site-footer-note">
			{t.footerNote}
		</p>
		<nav class="site-footer-links" aria-label="Footer">
			{#if locale}
				<a href="{base}/locales/{locale}/contents/">{t.navContents}</a>
				<a href="{base}/locales/{locale}/topics/">{t.navTopicsAZ}</a>
				<a href="{base}/locales/{locale}/search/">{t.navSearch}</a>
			{/if}
			<a href="{base}/about/">{t.navAbout}</a>
			<a href="https://github.com/digital-health-metrics/digital-health-metrics">{t.footerSourceLink}</a>
		</nav>
	</div>
</Footer>
