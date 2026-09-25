<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { SearchInput, SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import { ui } from '$lib/i18n.js';

	let { data } = $props();
	const locale = $derived(page.params.locale);
	const t = $derived(ui(locale));

	let query = $state('');

	// Precomputed haystacks: one lowercased string per topic, so keystrokes do
	// no work beyond an indexOf per record. Derived, not a plain const, since
	// `data.topics` changes when switching locale without a full page reload.
	const haystacks = $derived(
		data.topics.map((topic) =>
			[topic.title, topic.part, topic.blurb, topic.summary, topic.sections.join(' ')]
				.join(' ')
				.toLowerCase()
		)
	);

	const terms = $derived(query.toLowerCase().split(/\s+/).filter(Boolean));

	const results = $derived(
		terms.length === 0
			? []
			: data.topics
					.map((topic, i) => ({ topic, haystack: haystacks[i] }))
					.filter(({ haystack }) => terms.every((term) => haystack.includes(term)))
					// A hit in the title beats a hit anywhere else.
					.map(({ topic }) => ({
						topic,
						score: terms.filter((term) => topic.title.toLowerCase().includes(term)).length
					}))
					.sort((a, b) => b.score - a.score || a.topic.title.localeCompare(b.topic.title, locale))
					.map(({ topic }) => topic)
	);
</script>

<svelte:head>
	<title>{t.navSearch} — {data.bookTitle}</title>
	<meta name="description" content={t.searchMetaDescription(data.bookTitle)} />
</svelte:head>

<div class="page page-search">
	<header class="page-header">
		<h1>{t.navSearch}</h1>
		<p>
			{t.searchIntro(data.topics.length)}
		</p>
	</header>

	<form class="search-form" role="search" onsubmit={(event) => event.preventDefault()}>
		<SearchInput
			class="search-input"
			label={t.searchInputLabel}
			bind:value={query}
			placeholder={t.searchPlaceholder}
			autocomplete="off"
		/>
	</form>

	<div class="search-results" aria-live="polite">
		{#if terms.length === 0}
			<p class="search-hint">{@html t.searchHintEmptyHtml}</p>
		{:else if results.length === 0}
			<p class="search-hint">
				{t.noResultsPrefix}<strong>{query}</strong>{t.noResultsMiddle}
				<a href="{base}/locales/{locale}/contents/">{t.contentsLinkText}</a>.
			</p>
		{:else}
			<p class="search-count">
				{results.length}
				{results.length === 1 ? t.resultsCountSingular : t.resultsCountPlural}
			</p>
			<SectionList class="search-list">
				{#each results as topic (topic.slug)}
					<SectionListItem class="search-item">
						<a class="search-link" href="{base}{topic.href}">{topic.title}</a>
						<span class="search-part">{topic.part}</span>
						<span class="search-summary">{topic.blurb || topic.summary}</span>
					</SectionListItem>
				{/each}
			</SectionList>
		{/if}
	</div>
</div>
