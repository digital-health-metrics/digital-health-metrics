// Client-side search over /search-index.json. See spec/search/index.md.

/** The search target from a query string, or '' when there is none. */
export function targetFromSearch(search) {
	let s = search.replace(/^\?/, '');
	if (!s) return '';
	const params = new URLSearchParams(s);
	if (params.has('q') && [...params.keys()].length === 1) return params.get('q').trim();
	try {
		return decodeURIComponent(s.replace(/\+/g, ' ')).trim();
	} catch {
		return s.replace(/\+/g, ' ').trim();
	}
}

const count = (hay, needle) => {
	let n = 0;
	for (let i = hay.indexOf(needle); i !== -1; i = hay.indexOf(needle, i + needle.length)) n++;
	return n;
};

export const escapeHtml = (s) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function snippet(text, words) {
	const lower = text.toLowerCase();
	let at = -1;
	for (const w of words) {
		const i = lower.indexOf(w);
		if (i !== -1 && (at === -1 || i < at)) at = i;
	}
	if (at === -1) return escapeHtml(text.slice(0, 160));
	const start = Math.max(0, at - 70);
	let out = escapeHtml(text.slice(start, at + 130));
	for (const w of words) out = out.replace(new RegExp(escapeHtml(w).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), (m) => `<mark>${m}</mark>`);
	return (start > 0 ? '… ' : '') + out + ' …';
}

/** Every word must match; ranked by title, heading then body hits. */
export function search(index, target, limit = 50) {
	const words = target.toLowerCase().split(/\s+/).filter(Boolean);
	if (!words.length) return [];
	const results = [];
	for (const e of index) {
		const t = e.t.toLowerCase();
		const h = e.h.toLowerCase();
		const x = e.x.toLowerCase();
		let score = 0;
		let ok = true;
		for (const w of words) {
			const tc = count(t, w);
			const hc = count(h, w);
			const xc = count(x, w);
			if (!tc && !hc && !xc) {
				ok = false;
				break;
			}
			score += 10 * tc + 4 * hc + xc;
		}
		if (ok) results.push({ url: e.u, title: e.t || e.u, score, snippet: snippet(e.x, words) });
	}
	results.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
	return results.slice(0, limit);
}
