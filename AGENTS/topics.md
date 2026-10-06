# Agents: topics

Writing and editing topics. Canonical rules: [`spec/index.md`](../spec/index.md) §3, §5, §6. Step-by-step
workflow: [`skills/digital-health-metrics-maintainer-skill/SKILL.md`](../skills/digital-health-metrics-maintainer-skill/SKILL.md).

## Template

Every topic uses these headings, in order: `# Title`, an intro paragraph, `## Why it matters`,
`## How it's calculated`, `## Worked example`, `## Data sources and caveats`, `## Pitfalls`,
`## Sources`. Evaluation-framework topics (RE-AIM, WHO, ISO/TS 82304-2) retitle the calculation
section `## How it's applied`.

## Rules

- Draft in `locales/en-gb-oxendict/topics/<slug>/index.md` only, then run `python3 tools/localize.py`.
- Slug: lower-case, hyphenated, English, stable once published.
- New topic id: `python3 -c "import uuid; print(uuid.uuid4().hex)"` into `.locale-peer-id`.
- Cross-link siblings as `../<slug>/`; never `.md`, never absolute.
- Real, checkable sources only. If a figure is not confidently known, name the publisher type
  ("NHS England published statistics") instead of inventing an author, year or number. Date quoted
  figures in-line.
- Add the topic to the root `README.md` and to every locale's `index.md`.
- Finish with `bin/test`.
