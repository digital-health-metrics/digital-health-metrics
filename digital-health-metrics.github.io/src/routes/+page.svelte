<script>
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import { DEFAULT_LOCALE } from '#lib/locales.js';

	let { data } = $props();

	const defaultLocaleHref = resolve(`${DEFAULT_LOCALE}/`);

	// Site search lives on this page, driven by the query string (see
	// SearchGate.svelte) — a server-side redirect here would drop that query
	// and break search, so this only redirects client-side, and only when
	// there's no query to preserve. With a query, the page stays put so
	// search still works. With JavaScript disabled this effect never runs
	// (prerendered, no hydration), so the <noscript> meta-refresh below does
	// the same redirect unconditionally — the query-string search itself
	// requires JavaScript regardless, so there's nothing to preserve there.
	$effect(() => {
		if (!page.url.search) goto(defaultLocaleHref, { replaceState: true });
	});
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
	<noscript>
		<meta http-equiv="refresh" content={`0; url=${defaultLocaleHref}`} />
	</noscript>
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-summary">{data.summary}</p>
	</header>

	<section class="locale-picker" aria-labelledby="choose-locale">
		<h2 id="choose-locale">Choose a language</h2>
		<p>
			The same {data.topicCount} topics, translated across English (US, UK, and International),
			Welsh, and Simplified Chinese. Translations beyond the default English are AI-assisted and
			have not been reviewed by a fluent speaker.
		</p>
		<SectionList class="locale-list">
			{#each data.locales as locale (locale.code)}
				<SectionListItem class="locale-item">
					<a
						class="locale-link"
						href={resolve(`${locale.code}/`)}
					>
						{locale.label} 
						{#if locale.isDefault}<span class="locale-default-tag">default</span>{/if}
					</a>
				</SectionListItem>
			{/each}
		</SectionList>
	</section>
</div>
