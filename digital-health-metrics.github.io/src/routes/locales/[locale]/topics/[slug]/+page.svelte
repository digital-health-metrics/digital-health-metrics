<script>
	import { base } from '$app/paths';
	import {
		ArticleLayout,
		BreadcrumbList,
		BreadcrumbListItem,
		BreadcrumbNav,
		ContentsList,
		ContentsListItem,
		ContentsNav,
		PaginationList,
		PaginationListItem,
		PaginationNav
	} from '@lilydesignsystem/svelte-headless';
	import { ui } from '$lib/i18n.js';

	let { data } = $props();
	const t = $derived(ui(data.locale));

	// Only h2s make the on-this-page list; h3s are linkable but would make the
	// list longer than some of the sections it points at.
	const sections = $derived(data.headings.filter((heading) => heading.depth === 2));
</script>

<svelte:head>
	<title>{data.title} — {data.bookTitle}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-topic">
	<BreadcrumbNav class="breadcrumb" label="Breadcrumb">
		<BreadcrumbList>
			<BreadcrumbListItem><a href="{base}/locales/{data.locale}/">{t.navHome}</a></BreadcrumbListItem>
			<BreadcrumbListItem><a href="{base}/locales/{data.locale}/contents/">{t.navContents}</a></BreadcrumbListItem>
			{#if data.part}
				<BreadcrumbListItem>{data.part}</BreadcrumbListItem>
			{/if}
			<BreadcrumbListItem current>{data.title}</BreadcrumbListItem>
		</BreadcrumbList>
	</BreadcrumbNav>

	<ArticleLayout class="topic" label={data.title}>
		<header class="topic-header">
			<p class="topic-position">
				{t.topicPosition(data.index + 1, data.total)}{#if data.part}&nbsp;· {data.part}{/if}
			</p>
			<h1>{data.title}</h1>
		</header>

		{#if sections.length}
			<ContentsNav class="topic-contents" label={t.onThisPage}>
				<p class="topic-contents-title">{t.onThisPage}</p>
				<ContentsList>
					{#each sections as section (section.id)}
						<ContentsListItem><a href="#{section.id}">{section.text}</a></ContentsListItem>
					{/each}
				</ContentsList>
			</ContentsNav>
		{/if}

		<div class="prose">
			{@html data.html}
		</div>
	</ArticleLayout>

	<PaginationNav class="topic-pagination" label={t.paginationLabel}>
		<PaginationList>
			<PaginationListItem class="pagination-previous">
				{#if data.previous}
					<a href="{base}{data.previous.href}" rel="prev">
						<span class="pagination-direction">{t.paginationPrevious}</span>
						<span class="pagination-title">{data.previous.title}</span>
					</a>
				{/if}
			</PaginationListItem>
			<PaginationListItem class="pagination-next">
				{#if data.next}
					<a href="{base}{data.next.href}" rel="next">
						<span class="pagination-direction">{t.paginationNext}</span>
						<span class="pagination-title">{data.next.title}</span>
					</a>
				{/if}
			</PaginationListItem>
		</PaginationList>
	</PaginationNav>
</div>
