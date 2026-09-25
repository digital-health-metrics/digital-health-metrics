<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import { ui } from '$lib/i18n.js';

	let { data } = $props();
	const locale = $derived(page.params.locale);
	const t = $derived(ui(locale));
</script>

<svelte:head>
	<title>{t.navTopicsAZ} — {data.bookTitle}</title>
	<meta name="description" content={t.topicsMetaDescription(data.bookTitle)} />
</svelte:head>

<div class="page page-topics">
	<header class="page-header">
		<h1>{t.navTopicsAZ}</h1>
		<p>{t.topicsIntroPrefix(data.topicCount)} <a href="{base}/locales/{locale}/contents/">{t.contentsLinkText}</a>.</p>
		<nav class="alphabet" aria-label={t.jumpToLetter}>
			{#each data.groups as group (group.letter)}
				<a href="#letter-{group.letter}">{group.letter}</a>
			{/each}
		</nav>
	</header>

	{#each data.groups as group (group.letter)}
		<section class="letter-group" aria-labelledby="letter-{group.letter}">
			<h2 class="letter-heading" id="letter-{group.letter}">{group.letter}</h2>
			<SectionList class="letter-list">
				{#each group.topics as topic (topic.slug)}
					<SectionListItem class="letter-item">
						<a class="letter-link" href="{base}{topic.href}">{topic.title}</a>
						<span class="letter-part">{topic.part}</span>
						{#if topic.blurb}
							<span class="letter-blurb">{topic.blurb}</span>
						{/if}
					</SectionListItem>
				{/each}
			</SectionList>
		</section>
	{/each}
</div>
