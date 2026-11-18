Here is a **prioritized, actionable backlog** of quality improvement tasks for this open-source project, organized by your categories. Each task is scoped, specific, and references the actual project context I reviewed.

---

---

# 🎯 **NEW VISITOR EXPERIENCE** (Onboarding & Discovery)

### High Priority
1. **Fix bin/test to cover all 31 topics** — Currently only validates the first 5 topics (`patient-portal-adoption-rate telehealth-visit-rate appointment-no-show-rate clinical-alert-override-rate digital-referral-turnaround-time`). Update line 20 in `bin/test` to include all 31 topic slugs. *Critical: validation is incomplete.*

2. **Add a "New here?" section to every locale's home page** — The English README has "New here? Start with [patient portal adoption rate] and [appointment no-show rate]". Many locales likely lack this translated guidance. Run `python3 tools/verify_locales.py` with `--strict` to confirm, then add translations.

3. **Create a visual topic sitemap/taxonomy** — Generate a Mermaid or D2 diagram showing all 31 topics grouped by category (Patient engagement, Digital care operations, Clinical outcomes, etc.). Add to `README.md` and each locale's `index.md` as a collapsible section.

4. **Add a "Quick Start" guide** — Create `docs/QUICK-START.md` with:
   - 30-second summary of what this project is
   - How to navigate the book
   - How to contribute (link to CONTRIBUTING.md)
   - How to cite (link to CITATION.cff)

5. **Improve cross-topic linking** — Audit topics for missing "See also" links. For example, `appointment-no-show-rate` should link to `digital-referral-turnaround-time` (both are operational metrics). Use a script to detect topics that reference other metrics in text but don't have explicit links.

### Medium Priority
6. **Add topic difficulty ratings** — Tag each topic as Beginner/Intermediate/Advanced based on complexity. Display in topic lists and allow filtering.

7. **Create a glossary page** — Extract all technical terms (e.g., "denominator", "cohort", "HbA1c") into a dedicated glossary with definitions. Link from each topic.

8. **Add a "Most Popular" section** — Track GitHub traffic or create a curated list of top 5 most-accessed topics for the home page.

9. **Implement breadcrumb navigation on the site** — Currently users may not know their location in the category hierarchy. Add breadcrumbs to the SvelteKit site.

10. **Add a search autocomplete** — The site has search (`spec/search/index.md`), but autocomplete would help users discover topics faster. Implement using the existing search index.

---

# 📢 **PROMOTION & VISIBILITY**

### High Priority
11. **Fix the bin/test topic list** — *Same as #1 above, but promoted here because broken validation affects all contributions.* The test only checks 5 of 31 topics, so contributors adding new topics may miss validation errors.

12. **Create a project roadmap** — Add `ROADMAP.md` outlining:
    - Target: 50 topics by end of 2025
    - New locales planned (e.g., Swedish, Dutch are present; what's missing?)
    - Upcoming features (search improvements, PDF export, etc.)
    - How contributors can help

13. **Add social media cards** — Generate Open Graph images for each topic. Use a template with the project logo, topic title, and category. Store in `digital-health-metrics.github.io/static/`.

14. **Create shareable topic summaries** — For each topic, generate a 280-character tweet-sized summary and a LinkedIn post template. Add to each topic directory as `share.md` or include in frontmatter.

15. **Publish to additional platforms** — Set up automated publishing to:
    - Dev.to articles (one per topic, with canonical links back)
    - Medium publication
    - Hashnode blog

### Medium Priority
16. **Add a newsletter signup** — Integrate a simple newsletter signup (e.g., via Buttondown or ConvertKit) to the site for updates on new topics/locales.

17. **Create a contributor spotlight** — Add a `CONTRIBUTORS.md` page profiling active contributors with their GitHub avatars, roles, and contributions.

18. **Add a "Powered by" section** — Showcase organizations using these metrics (e.g., "Used by NHS trusts, US health systems"). Add a call-to-action for organizations to add themselves.

19. **Create language-specific landing pages** — For each locale, add a localized landing page explaining the project's value in that language context (e.g., how it applies to NHS for `en-gb`, to European healthcare for `de-de`).

20. **Add a press kit** — Create a `press/` directory with:
    - Project logo (SVG + PNG)
    - Screenshots of the site
    - Boilerplate descriptions
    - Key statistics (31 topics, 53 locales, X contributors)

---

# 📚 **UPSKILLING & KNOWLEDGE SHARING**

### High Priority
21. **Create a translation guide** — Write `docs/TRANSLATION-GUIDE.md` with:
    - Step-by-step translation workflow
    - Common pitfalls (don't translate numbers in worked examples, keep code blocks intact)
    - How to test translations (`python3 tools/verify_locales.py`)
    - How to request native speaker review

22. **Add a "Contributing Topics" tutorial** — Create a step-by-step guide in `docs/` showing:
    - How to research a new metric
    - How to structure it using the template
    - How to find sources
    - How to test it (`bin/test`, `verify_locales.py`)

23. **Create a style guide** — Document the Oxford English spelling rules from `tools/localize.py` in `docs/STYLE-GUIDE.md`. Include examples of correct/incorrect usage.

24. **Add a FAQ page** — Create `docs/FAQ.md` addressing common questions:
    - "Why Oxford spelling?"
    - "How do I add a new locale?"
    - "Why are some locales byte-copies of others?"
    - "How do I report an error in a metric definition?"

25. **Create video walkthroughs** — Record short videos (5-10 min) covering:
    - Adding a new topic
    - Translating a topic
    - Running validation tests
    - Publishing the site

### Medium Priority
26. **Add a metrics glossary** — Create a dedicated page explaining common metric terminology (numerator, denominator, cohort, segmentation, etc.) for non-technical readers.

27. **Create comparison tables** — For related metrics (e.g., all engagement metrics), create comparison tables showing:
    - What each measures
    - When to use each
    - How they relate to each other

28. **Add case studies** — Document real-world examples of how organizations used these metrics. Create `case-studies/` directory.

29. **Create a "Metrics 101" guide** — A beginner-friendly introduction to digital health metrics, explaining:
    - What is a metric?
    - How to choose the right metric
    - Common mistakes to avoid

30. **Add a resources page** — Curate external resources:
    - Recommended reading
    - Related projects
    - Industry reports
    - Conferences and events

---

# 🔧 **ENGINEERING & ARCHITECTURE**

### High Priority
31. **Fix bin/test topic list** — *Critical. The test only validates 5 of 31 topics.* Update line 20 in `bin/test` to include all topic slugs. This is a blocker for quality assurance.

32. **Add GitHub Actions workflow for validation** — Create `.github/workflows/validate.yml` that runs:
    - `bin/test`
    - `python3 tools/verify_locales.py`
    - `pnpm run check` (in the site directory)
    - On every PR and push to main

33. **Fix the stale locale peer-id issue** — `python3 tools/verify_locales.py` reports 3 warnings. Investigate and resolve these. They indicate structural issues that need attention.

34. **Add dependency scanning** — Set up Dependabot for:
    - GitHub Actions dependencies
    - Site dependencies (`digital-health-metrics.github.io/package.json`)

35. **Implement continuous deployment** — Currently `bin/publish` is manual. Set up GitHub Actions to automatically publish the site when `digital-health-metrics.github.io/` content changes.

### Medium Priority
36. **Create a Docker setup** — Add `Dockerfile` and `docker-compose.yml` for local development, making it easier for contributors to run the full validation and build pipeline.

37. **Add a Makefile** — Simplify common tasks:
    - `make validate`: Run all validation tests
    - `make build`: Build the site
    - `make publish`: Publish the site
    - `make test`: Run all tests

38. **Implement caching for validation** — The `bin/test` and `verify_locales.py` scripts can be slow with 65 locales × 31 topics. Add caching for intermediate results.

39. **Add a pre-commit hook** — Use `pre-commit` framework to run:
    - `bin/test`
    - `python3 tools/verify_locales.py`
    - Spell checking (for English locales)
    - Markdown linting

40. **Create a configuration file** — Move hardcoded values (locale lists, topic lists) from scripts into a central config file (e.g., `config.yaml` or `package.json`).

41. **Add error handling to shell scripts** — `bin/test` uses `set -euf` but could benefit from better error messages and logging.

42. **Implement parallel processing** — In `bin/test`, the `test_topic_files` function processes locales and topics sequentially. Parallelize where possible.

43. **Add a health check endpoint** — For the published site, add a `/health` endpoint that verifies:
    - All locales are accessible
    - All topics are reachable
    - Search index is up to date

44. **Create a monitoring dashboard** — Use GitHub Pages analytics or a simple script to track:
    - Site traffic
    - Popular topics
    - Error rates

45. **Add a backup system** — Set up automated backups of:
    - The GitHub repository
    - The published site (GitHub Pages)

---

# 💻 **CODING & FEATURE DEVELOPMENT**

### High Priority
46. **Add PDF export** — Implement PDF generation for:
    - Individual topics
    - Entire book (per locale)
    - Categories
    Use Puppeteer or similar in the site build process.

47. **Add a download page** — Create a page where users can download:
    - Complete book (per locale, as PDF or Markdown)
    - Individual topics
    - All topics as a single file

48. **Implement versioning** — Add version tags to releases. Create `CHANGELOG.md` tracking:
    - New topics
    - Updated topics
    - New locales
    - Site improvements

49. **Add a changelog generator** — Automatically generate `CHANGELOG.md` from Git history, grouping changes by:
    - New features
    - Bug fixes
    - Documentation
    - Locales

50. **Create an API** — Expose the content as a JSON API:
    - `/api/locales` - List all locales
    - `/api/locales/{locale}/topics` - List all topics in a locale
    - `/api/locales/{locale}/topics/{slug}` - Get a topic
    - Rate-limited, cached

### Medium Priority
51. **Add a favorites/bookmark system** — Allow users to bookmark topics for quick access. Store in localStorage or via a simple backend.

52. **Implement dark mode** — The site uses Lily Design System. Ensure dark mode is properly supported and test across all locales.

53. **Add a table of contents sidebar** — For each topic, show a sticky TOC with headings for easier navigation.

54. **Create a comparison tool** — Allow users to compare two or more metrics side-by-side.

55. **Add a calculator for metrics** — For metrics with formulas (e.g., LTV:CAC ratio), add interactive calculators that users can fill in with their own numbers.

56. **Implement topic ratings** — Allow users to rate topics (usefulness, clarity). Display average ratings and collect feedback.

57. **Add a feedback system** — Allow users to submit feedback on:
    - Individual topics (report errors, suggest improvements)
    - The site (bug reports, feature requests)
    - Translations (report translation errors)

58. **Create a metric template generator** — A tool that generates a starter `index.md` file with the correct template, proper frontmatter, and placeholder content.

59. **Add a search filter** — Allow filtering search results by:
    - Category
    - Difficulty level
    - Locale
    - Date added

60. **Implement infinite scroll** — For the topic list on the home page, implement infinite scroll or pagination for better performance with many topics.

---

# 🧪 **TESTING & VALIDATION**

### High Priority
61. **Fix bin/test to cover all 31 topics** — *Critical repetition.* Currently only tests 5 topics. This means 26 topics are not validated by the primary test script.

62. **Add unit tests for Python scripts** — Create tests for:
    - `tools/localize.py` (spelling substitution)
    - `tools/verify_locales.py` (locale validation)
    - `tools/build_locale_sitemaps.py` (sitemap generation)

63. **Add integration tests** — Create tests that verify:
    - The site builds successfully
    - All routes are accessible
    - All links work
    - Search functionality works

64. **Implement property-based testing** — Use Hypothesis (Python) to test:
    - Locale validation with randomly generated content
    - Peer ID uniqueness
    - Link integrity

65. **Add snapshot testing** — For the site, create snapshot tests that capture:
    - Home page (per locale)
    - Topic pages
    - Search results

### Medium Priority
66. **Add performance tests** — Test:
    - Site build time
    - Page load time
    - Search response time
    - Validation script performance

67. **Implement accessibility testing** — Run:
    - axe-core
    - Lighthouse
    - Pa11y
    Against the built site.

68. **Add security testing** — Run:
    - OWASP ZAP
    - Snyk
    - Dependabot
    Against the site and repository.

69. **Create a test coverage report** — For:
    - Shell scripts
    - Python scripts
    - Site code
    Aim for >80% coverage.

70. **Add mutation testing** — For critical validation scripts, use mutation testing to verify test quality.

71. **Implement contract testing** — For the API (if implemented), verify that:
    - Response formats are correct
    - Error handling works
    - Rate limiting works

72. **Add end-to-end tests** — Test the full workflow:
    - Add a topic
    - Translate a topic
    - Run validation
    - Build the site
    - Publish the site

73. **Create a regression test suite** — Based on the watch-list in `spec/locales-for-global-sharing-with-svelte/`, create tests that prevent known bugs from reappearing.

74. **Add property tests for translations** — Verify that:
    - All translations have the same number of headings as the source
    - All code blocks are preserved
    - All numbers in worked examples are preserved
    - All links are valid

75. **Implement fuzz testing** — For validation scripts, test with:
    - Invalid input
    - Malformed files
    - Missing files
    - Edge cases

---

# 🔍 **AUDITING & QUALITY ASSURANCE**

### High Priority
76. **Run a full repository audit** — Use:
    - `bin/test` (fix the topic list first)
    - `python3 tools/verify_locales.py --strict`
    - `pnpm run check` (in site directory)
    - `pnpm run build` (in site directory)
    Document all issues found and create tickets.

77. **Audit all locale home pages** — Verify that:
    - Every locale's `index.md` lists all 31 topics
    - Category headings are translated
    - Blurbs are translated
    - Links work

78. **Audit all cross-topic links** — Verify that:
    - All `../<slug>/` links resolve correctly
    - Links use translated slugs in non-English locales
    - No broken links exist

79. **Audit all .locale-peer-id files** — Verify that:
    - All are 32-character lowercase hex
    - All are unique
    - All are byte-identical across locales for the same topic

80. **Audit the site's build process** — Verify that:
    - `pnpm run sync:content` works correctly
    - `pnpm run sync:lily` works correctly
    - `pnpm run build` completes without errors
    - All routes are prerendered

### Medium Priority
81. **Audit translation quality** — For each locale, verify:
    - Faithfulness to source (paragraph structure, figures)
    - Terminology consistency (use `tools/cy-glossary.tsv` as a model)
    - Readability

82. **Audit source citations** — Verify that:
    - All sources in topics are real and verifiable
    - No fabricated citations exist
    - Dates are included for time-sensitive figures

83. **Audit the spec compliance** — Verify that:
    - All topics follow the template (§3)
    - All locales follow the rules (§4)
    - All voice/style rules are followed (§5)

84. **Audit the site's accessibility** — Verify:
    - All images have alt text
    - All pages have proper heading structure
    - Color contrast meets WCAG standards
    - Keyboard navigation works

85. **Audit the site's SEO** — Verify:
    - All pages have proper meta tags
    - All pages have proper titles
    - Sitemap is up to date
    - Robots.txt is correct

86. **Create an audit checklist** — Document all audit items in `docs/AUDIT-CHECKLIST.md` for regular use.

87. **Implement automated audits** — Create scripts that:
    - Run all validation tests
    - Check for broken links
    - Verify spec compliance
    - Check translation quality

88. **Add a code review checklist** — For PRs, create a checklist that includes:
    - Validation tests pass
    - Spec compliance
    - Translation quality
    - Source citations
    - Link integrity

89. **Implement a quality gate** — Before merging PRs, require:
    - All validation tests pass
    - All checks in the code review checklist are complete
    - At least one approval from a maintainer

90. **Create a quality dashboard** — Display:
    - Test coverage
    - Number of open issues
    - Number of open PRs
    - Last audit date
    - Known issues

---
---
---
# 📊 **SUMMARY & PRIORITIZATION**

## **CRITICAL (Do First)**

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 1 | Fix `bin/test` to cover all 31 topics | ⭐⭐⭐⭐⭐ | ⭐ |
| 31 | Add GitHub Actions workflow for validation | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| 33 | Fix the 3 stale locale warnings | ⭐⭐⭐⭐ | ⭐⭐ |
| 32 | Add GitHub Actions workflow | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| 61 | Add unit tests for Python scripts | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## **HIGH IMPACT (Next)**

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 2 | Add "New here?" to all locales | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 21 | Create translation guide | ⭐⭐⭐⭐ | ⭐⭐ |
| 22 | Add contributing tutorial | ⭐⭐⭐⭐ | ⭐⭐ |
| 46 | Add PDF export | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 12 | Create project roadmap | ⭐⭐⭐⭐ | ⭐⭐ |

## **QUICK WINS (Low Effort, High Value)**

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 4 | Create visual topic taxonomy | ⭐⭐⭐ | ⭐ |
| 3 | Create quick start guide | ⭐⭐⭐ | ⭐⭐ |
| 23 | Create style guide | ⭐⭐⭐ | ⭐⭐ |
| 24 | Add FAQ page | ⭐⭐⭐ | ⭐⭐ |
| 37 | Add Makefile | ⭐⭐⭐ | ⭐ |

---
---
---

# 🎯 **RECOMMENDED STARTING POINT**

**Start with Task #1: Fix `bin/test` to cover all 31 topics.**

This is the foundation. Currently, the primary validation script only checks 5 of 31 topics, meaning 26 topics are not being validated. This affects:
- Contributor confidence
- Code quality
- Release reliability

**Action:**
```bash
# In bin/test, line 20, update the topics variable to include all 31:
topics="patient-portal-adoption-rate telehealth-visit-rate appointment-no-show-rate patient-engagement-consistency-rate user-retention-rate dau-mau-stickiness-ratio patient-net-promoter-score system-usability-scale-score clinical-alert-override-rate digital-referral-turnaround-time time-to-intervention-rate bed-day-reduction biometric-improvement-rate biometric-stabilization-rate triage-routing-accuracy medication-adherence-rate hospital-readmission-rate epro-completion-rate digital-access-rate digital-literacy-rate physician-burnout-rate device-uptime-rate true-customer-acquisition-cost ltv-to-cac-ratio marketing-efficiency-ratio cost-per-episode-of-care ed-diversion-rate roi-and-voi re-aim-framework who-digital-health-assessment-framework iso-ts-82304-2"
```

**Then:**
1. Run `bin/test` to verify it works with all topics
2. Fix any issues it uncovers
3. Commit the fix
4. Move to Task #32 (GitHub Actions) to automate this validation

---
---
**Need me to elaborate on any task, create implementation details, or prioritize differently?**
