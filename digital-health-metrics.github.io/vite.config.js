import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				// Every route is prerendered, so this fallback is only ever reached by a
				// URL that does not exist. GitHub Pages serves 404.html for those, which
				// replaces its default 404 page with this site's own.
				fallback: '404.html',
				strict: true
			}),

			paths: {
				// This repository is named <org>.github.io, so the site is served from
				// the domain root and the base path is empty. It stays configurable so
				// the same source can be deployed under a subpath — a project-repo
				// deploy, or a preview — by setting BASE_PATH at build time. Do not set
				// it to the repository name here: that is the docs' advice for a project
				// site, and would wrongly serve this one from
				// /digital-health-metrics.github.io.
				base: process.env.BASE_PATH ?? ''
			},
			prerender: {
				// Fail on any broken link, except /sitemap.xml: the link picker links to
				// it, but scripts/build-sitemap.mjs writes it after the build, so the
				// crawler cannot fetch it as a route.
				handleHttpError: ({ path, message }) => {
					if (path === '/sitemap.xml' || path === '/sitemap.xml/') return;
					throw new Error(message);
				},
				handleMissingId: 'fail'
			}
		})
	]
});
