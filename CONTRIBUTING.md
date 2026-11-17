# Contributing to Digital Health Metrics

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.

## Layout

- `locales/en-gb-oxendict/topics/<slug>/index.md`: the canonical topics. `README.md` is the categorized index.
- `en-001`, `en-gb` and `en-us` are derived by `python3 tools/localize.py`; do not hand-edit them. Other locales translate the topics directory and slugs, and are matched by `.locale-peer-id`.
- `spec/`: the specifications. Read them before changing behaviour.
- `digital-health-metrics.github.io/`: the SvelteKit reading site; its `content/` is a vendored copy, refreshed with `pnpm run sync:content`.

## Checks

```sh
bin/test                          # structure validation; expect "All checks passed."
python3 tools/verify_locales.py   # full locale audit
cd digital-health-metrics.github.io && pnpm install && pnpm run sync && pnpm run check && pnpm run build
```

AI agents should also read [AGENTS.md](AGENTS.md).

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
