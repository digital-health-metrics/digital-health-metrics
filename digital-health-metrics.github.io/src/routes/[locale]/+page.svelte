<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import { ui } from '#lib/i18n.js';
	import { HERO } from '#lib/hero.js';

	let { data } = $props();
	const t = $derived(ui(page.params.locale));
	const subheadline = $derived(HERO[page.params.locale]?.tagline ?? HERO['en-001'].tagline);
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-subheadline">{subheadline}</p>
		<p class="book-hero-summary">{data.summary}</p>
		<p class="book-hero-translations">
			{HERO[page.params.locale]?.translations ?? HERO['en-001'].translations}{#each data.translations as locale, i (locale.code)}{i ? ', ' : ''}<a
					href={resolve(`/${locale.code}/`)}>{locale.label}</a
				>{/each}
		</p>
	</header>

	{#if data.startHere.length}
		<section class="start-here" aria-labelledby="start-here">
			<h2 id="start-here">{t.startHere}</h2>
			<p>{t.startHereSubtitle}</p>
			<SectionList class="start-list">
				{#each data.startHere as item (item.href)}
					<SectionListItem class="start-item">
						<a class="start-link" href={resolve(item.href.slice(1))}>{item.title}</a>
						<span class="start-blurb">{item.blurb}</span>
					</SectionListItem>
				{/each}
			</SectionList>
		</section>
	{/if}

	<article class="prose">
		{@html data.html}
	</article>
</div>

<style>
	.book-hero-subheadline {
		margin: 0 0 1rem;
		font-size: 1.3em;
		font-weight: 600;
	}
	.book-hero-translations {
		margin: 0;
		font-size: 0.9em;
	}
</style>
