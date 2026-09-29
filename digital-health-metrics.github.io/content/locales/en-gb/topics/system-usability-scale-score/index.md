# System Usability Scale Score

System Usability Scale (SUS) score is a standardised, 10-item questionnaire used to quantify how usable a piece of software is, producing a single score from 0 to 100 that can be benchmarked against well-established industry norms. Unlike Net Promoter Score, which measures willingness to recommend, or patient-reported outcome measures, which measure clinical or functional status, SUS measures one specific thing: how easy the software itself is to learn and use, for either patients or clinical staff.

## Why it matters

A digital health tool can have strong clinical evidence and a compelling business case while still failing in practice because patients or clinicians find the interface confusing, slow, or frustrating to use — and because SUS is a validated, widely used instrument with decades of published benchmarking data across industries, it lets a digital health team compare their own product's usability against a known distribution rather than relying on informal impressions or anecdotal complaints. SUS is deliberately technology-agnostic and quick to administer (typically under five minutes), which makes it practical to run repeatedly across design iterations, unlike a full usability study or formal clinical trial. Because clinician-facing usability failures are a documented contributor to burnout (see physician burnout rate) and patient-facing usability failures are a documented contributor to abandonment and poor digital literacy outcomes (see digital literacy rate), SUS functions as an early-warning, low-cost usability signal that can catch a design problem before it shows up in those more consequential downstream metrics.

## How it's calculated

```
SUS score = ((sum of odd-numbered item scores − 5) +
             (25 − sum of even-numbered item scores)) × 2.5

Result is a single score from 0 to 100 (not a percentage, despite the
scale, since it does not represent "percent correct" or similar).

Published benchmark interpretation (Bangor et al.):
  Above 80  — excellent usability
  68        — average, based on the broad industry norm
  Below 51  — poor usability, warranting investigation
```

## Worked example

A telehealth platform administers the standard 10-item SUS questionnaire to 150 patients after their first video visit. The calculated average SUS score across all respondents is 74. Benchmarked against the widely cited industry average of 68, this indicates above-average usability for this specific patient population and use case, though still meaningfully below the "excellent" threshold of 80 that would suggest few remaining usability barriers. Segmenting the same 150 responses by age shows an average score of 81 for patients under 50 and 62 for patients 65 and older — a gap that points toward a specific, addressable usability issue for older patients rather than a general product usability problem, and one that a single blended average would have hidden.

## Data sources and caveats

SUS data comes directly from patients or clinicians completing the standardised 10-item questionnaire, and the instrument must be administered exactly as validated (same 10 items, same 5-point agreement scale, same scoring formula) for the resulting score to be comparable against published benchmarks; a modified or shortened version of the questionnaire, however well-intentioned, produces a score that cannot be reliably interpreted against the standard benchmark distribution. SUS measures perceived usability, which correlates with but is not identical to objective task-completion success (see digital literacy rate for a task-completion-based measure); a product can have a good SUS score from patients who did not attempt the more complex features, so pairing SUS with objective task-completion data gives a fuller picture than either alone. Response timing matters: administering SUS immediately after a frustrating specific incident (a failed connection, a confusing step) versus after a smooth session can shift scores independent of the product's overall usability.

## Pitfalls

- **Modifying the standard questionnaire items or scoring**: even small wording or scale changes invalidate comparison against the well-established published benchmark distribution; use the standard 10-item instrument exactly as validated.
- **Reporting only the average score without segmentation**: usability often varies substantially by user age, digital literacy, or role (patient versus clinician); segment reporting to find specific, addressable usability gaps that a single average conceals.
- **Treating SUS as a measure of clinical effectiveness**: SUS measures usability specifically, not clinical outcome or satisfaction with care; a highly usable tool can still fail to improve clinical outcomes, and these should never be conflated or substituted for one another.
- **Administering the survey only after unusually smooth or unusually frustrating sessions**: timing and context of administration can bias the score; administer consistently across a representative sample of real-world sessions, not only convenient or selectively chosen ones.

## Sources

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", the original published instrument
- Bangor, Kortum, and Miller, published SUS benchmarking research establishing the widely cited score interpretation bands
- Peer-reviewed literature on SUS use in digital health and telehealth usability evaluation, for example studies published in JMIR Human Factors

See also: [patient net promoter score](../patient-net-promoter-score/), a related but distinct patient-reported metric measuring satisfaction and loyalty rather than software usability specifically.
