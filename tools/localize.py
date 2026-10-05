#!/usr/bin/env python3
"""
Derives the en-001, en-gb, and en-us locale trees under locales/ from
locales/en-gb-oxendict/, this project's hand-authored source. Never edit
those three locales directly; edit en-gb-oxendict and rerun this script.

Two other locales, cy-001 (Welsh) and zh-cn (Simplified Chinese), are
hand-translated and are never touched by this script. Only the four English
locales are related by mechanical spelling derivation; see spec/locales-for-global-sharing-with-svelte/
for the full six-locale policy.

Adapted from software-engineering-metrics' tools/localize.py: same
substitution-with-protected-regions approach, extended here to also mirror
each topic's .locale-peer-id (byte-identical across locales -- it identifies
the topic, not the translation) and its README.md -> index.md symlink into
every derived locale, since this project's content lives one directory
deeper (locales/<code>/topics/<slug>/index.md) than that book's flat
topic files.

Run:

    python3 tools/localize.py
"""
import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCALES_DIR = os.path.join(ROOT, "locales")
REFERENCE_LOCALE = "en-gb-oxendict"
TARGET_LOCALES = ["en-001", "en-gb", "en-us"]

# ---------------------------------------------------------------------------
# Protected zones: fenced code blocks, inline code spans, and markdown link
# targets never get spelling-converted, so a locale conversion can never
# change a formula, a URL, or a cross-link.
# ---------------------------------------------------------------------------
_PROTECT_RE = re.compile(
    r"(```.*?```|~~~.*?~~~|`[^`\n]+`|\]\([^)]*\))",
    re.S,
)


def _apply_outside_protected(text, fn):
    out = []
    last = 0
    for m in _PROTECT_RE.finditer(text):
        out.append(fn(text[last:m.start()]))
        out.append(m.group(0))
        last = m.end()
    out.append(fn(text[last:]))
    return "".join(out)


def _case_like(model, word):
    if model.isupper():
        return word.upper()
    if model[:1].isupper():
        return word[:1].upper() + word[1:]
    return word


def _word_sub(mapping):
    """Case-preserving, word-boundary substitution from a lowercase ->
    lowercase mapping."""
    pattern = re.compile(
        r"\b(" + "|".join(sorted(mapping, key=len, reverse=True)) + r")\b",
        re.I,
    )

    def repl(m):
        return _case_like(m.group(0), mapping[m.group(0).lower()])

    return lambda text: pattern.sub(repl, text)


def _chain(*fns):
    def run(text):
        for fn in fns:
            text = _apply_outside_protected(text, fn)
        return text
    return run


# ---------------------------------------------------------------------------
# en-gb is the reference with Oxford "-ize/-ization" converted to mainstream
# British "-ise/-isation" -- the one axis that actually distinguishes the
# two British spelling variants (see spec/locales-for-global-sharing-with-svelte/). This list is the
# -ize/-ization family actually used in this project's content (verified by
# grepping the source for every word containing "iz"), not the full
# theoretical vocabulary of the suffix.
# ---------------------------------------------------------------------------
_IZE_WORDS = [
    "computerized", "desensitized", "maximize", "organization",
    "organizations", "organized", "randomized", "standardized",
    "utilization",
]
_ize_to_ise = _word_sub({w: w.replace("iz", "is", 1) for w in _IZE_WORDS})


def to_en_gb(text):
    return _chain(_ize_to_ise)(text)


# ---------------------------------------------------------------------------
# en-001 (international English). Oxford spelling is itself the style
# standard of the UN System and most international standards bodies, so
# international English mirrors the Oxford reference rather than mainstream
# British or American spelling (see spec/locales-for-global-sharing-with-svelte/). The two stay separate
# locales for discoverability in a locale picker, not because their
# spelling differs.
# ---------------------------------------------------------------------------
def to_en_001(text):
    return text


# ---------------------------------------------------------------------------
# en-us. Full Americanization of the Oxford reference. Word lists are
# restricted to forms actually present in this project's content (verified
# against the source), not the full theoretical British vocabulary.
# ---------------------------------------------------------------------------
_US_OUR = {
    "behaviour": "behavior", "behavioural": "behavioral",
    "favourable": "favorable",
}
_US_DOUBLE_L_TO_SINGLE = {"cancelled": "canceled"}
_US_MME = {"programme": "program"}
_US_MISC = {"judgement": "judgment", "sceptical": "skeptical"}

_us_word_sub = _word_sub({
    **_US_OUR, **_US_DOUBLE_L_TO_SINGLE, **_US_MME, **_US_MISC,
})


def to_en_us(text):
    return _chain(_us_word_sub)(text)


LOCALIZERS = {
    "en-001": to_en_001,
    "en-gb": to_en_gb,
    "en-us": to_en_us,
}


def _index_relpaths(base_dir):
    """Every index.md under base_dir, relative to base_dir. Deliberately
    excludes README.md, which is always a symlink to its sibling index.md
    and must never be treated as independent content to localize."""
    return sorted(
        os.path.relpath(f, base_dir)
        for f in glob.glob(os.path.join(base_dir, "**", "index.md"), recursive=True)
    )


def _sync_peer_ids_and_symlinks(reference_dir, locale_dir, rels):
    """For every directory that holds a reference index.md, mirror its
    .locale-peer-id (byte-identical -- it identifies the topic across
    locales, not the translation) and its README.md -> index.md symlink
    into locale_dir."""
    dirs = sorted({os.path.dirname(rel) for rel in rels})
    for d in dirs:
        src_dir = os.path.join(reference_dir, d)
        dst_dir = os.path.join(locale_dir, d)
        os.makedirs(dst_dir, exist_ok=True)

        peer_src = os.path.join(src_dir, ".locale-peer-id")
        if os.path.isfile(peer_src):
            peer_dst = os.path.join(dst_dir, ".locale-peer-id")
            content = open(peer_src, encoding="utf-8").read()
            if not os.path.isfile(peer_dst) or open(peer_dst, encoding="utf-8").read() != content:
                open(peer_dst, "w", encoding="utf-8").write(content)

        readme_dst = os.path.join(dst_dir, "README.md")
        if not os.path.islink(readme_dst):
            if os.path.lexists(readme_dst):
                os.remove(readme_dst)
            os.symlink("index.md", readme_dst)


def main():
    reference_dir = os.path.join(LOCALES_DIR, REFERENCE_LOCALE)
    rels = _index_relpaths(reference_dir)
    reference = {
        rel: open(os.path.join(reference_dir, rel), encoding="utf-8").read()
        for rel in rels
    }

    for locale in TARGET_LOCALES:
        fn = LOCALIZERS[locale]
        locale_dir = os.path.join(LOCALES_DIR, locale)
        existing = set(_index_relpaths(locale_dir)) if os.path.isdir(locale_dir) else set()
        for rel in existing - set(reference):
            stale = os.path.join(locale_dir, rel)
            os.remove(stale)
            peer = os.path.join(os.path.dirname(stale), ".locale-peer-id")
            readme = os.path.join(os.path.dirname(stale), "README.md")
            for f in (peer, readme):
                if os.path.lexists(f):
                    os.remove(f)

        for rel, text in reference.items():
            dst = os.path.join(locale_dir, rel)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            open(dst, "w", encoding="utf-8").write(fn(text))

        _sync_peer_ids_and_symlinks(reference_dir, locale_dir, rels)

    print(f"derived {REFERENCE_LOCALE} plus {', '.join(TARGET_LOCALES)} "
          f"from {len(rels)} source files")


if __name__ == "__main__":
    main()
