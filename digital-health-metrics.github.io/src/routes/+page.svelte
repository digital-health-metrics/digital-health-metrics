<script>
	import { base } from '$app/paths';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
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
					<a class="locale-link" href="{base}/locales/{locale.code}/">
						{locale.label}
						{#if locale.isDefault}<span class="locale-default-tag">default</span>{/if}
					</a>
				</SectionListItem>
			{/each}
		</SectionList>
	</section>
</div>
