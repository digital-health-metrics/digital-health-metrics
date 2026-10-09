#!/usr/bin/env python3
"""Write locales/<locale>/sitemap.xml for every locale: a sitemap of that
locale's routes on the published site (home, contents, topics A-Z, one URL per
topic directory). Generated: do not hand-edit; rerun after any locales/ change.

Usage: python3 tools/build_locale_sitemaps.py [--check]
Env:   SITE_URL  (default https://digital-health-metrics.github.io)
"""
import os
import sys
import unicodedata
from urllib.parse import quote
from xml.sax.saxutils import escape

TOP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCALES = os.path.join(TOP, "locales")
SITE = os.environ.get("SITE_URL", "https://digital-health-metrics.github.io").rstrip("/")
ROUTES = ("", "contents/", "topics/")  # per-locale pages besides the topic pages


def url(*segs):
    path = "/".join(quote(unicodedata.normalize("NFC", s), safe="") for s in segs if s)
    return escape(f"{SITE}/{path}" + ("/" if path else ""))


def render(loc):
    d = os.path.join(LOCALES, loc)
    subs = [x for x in os.listdir(d) if os.path.isdir(os.path.join(d, x)) and not x.startswith(".")]
    tdir = "topics" if "topics" in subs else [x for x in subs if os.path.exists(os.path.join(d, x, os.listdir(os.path.join(d, x))[0], "index.md"))][0]
    slugs = sorted(s for s in os.listdir(os.path.join(d, tdir)) if os.path.isdir(os.path.join(d, tdir, s)))
    locs = [url(loc), url(loc, "contents"), url(loc, "topics")] + [url(loc, "topics", s) for s in slugs]
    body = "\n".join(f"  <url><loc>{u}</loc></url>" for u in locs)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{body}\n</urlset>\n'


def main():
    check = "--check" in sys.argv
    bad = 0
    for loc in sorted(os.listdir(LOCALES)):
        if not os.path.isdir(os.path.join(LOCALES, loc)):
            continue
        out = os.path.join(LOCALES, loc, "sitemap.xml")
        text = render(loc)
        if check:
            if not os.path.exists(out) or open(out, encoding="utf-8").read() != text:
                print(f"stale or missing: locales/{loc}/sitemap.xml")
                bad += 1
        else:
            with open(out, "w", encoding="utf-8") as f:
                f.write(text)
    sys.exit(1 if bad else 0)


main()
