# System Usability Scale Score

System Usability Scale (SUS) score na standardized, 10-item questionnaire wey dem dey use to quantify how usable piece of software be, wey dey produce single score from 0 to 100 wey dem fit benchmark against well-established industry norms. Different from Net Promoter Score, wey dey measure willingness to recommend, or patient-reported outcome measures, wey dey measure clinical or functional status, SUS dey measure one specific thing: how easy di software itself dey to learn and use, for either patients or clinical staff.

## Why e matter

Digital health tool fit get strong clinical evidence and compelling business case while e still dey fail for practice because patients or clinicians find di interface confusing, slow, or frustrating to use — and because SUS na validated, widely used instrument wey get decades of published benchmarking data across industries, e dey let digital health team compare dia own product usability against known distribution instead of to rely on informal impressions or anecdotal complaints. SUS dey deliberately technology-agnostic and quick to administer (typically under five minutes), wey make am practical to run repeatedly across design iterations, unlike full usability study or formal clinical trial. Because clinician-facing usability failures na documented contributor to burnout (see physician burnout rate) and patient-facing usability failures na documented contributor to abandonment and poor digital literacy outcomes (see digital literacy rate), SUS dey function as early-warning, low-cost usability signal wey fit catch design problem before e show up for those more consequential downstream metrics.

## How dem dey calculate am

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

One telehealth platform administer di standard 10-item SUS questionnaire to 150 patients after dia first video visit. Di calculated average SUS score across all respondents na 74. Benchmarked against di widely cited industry average of 68, dis indicate above-average usability for dis specific patient population and use case, though e still dey meaningfully below di "excellent" threshold of 80 wey go suggest say few usability barriers remain. If dem segment di same 150 responses by age, e show average score of 81 for patients under 50 and 62 for patients 65 and older — gap wey point toward specific, addressable usability issue for older patients instead of general product usability problem, and one wey single blended average for hide.

## Data sources and caveats

SUS data dey come directly from patients or clinicians wey complete di standardized 10-item questionnaire, and dem must administer di instrument exactly as dem validate am (di same 10 items, di same 5-point agreement scale, di same scoring formula) before di resulting score go fit compare against published benchmarks; modified or shortened version of di questionnaire, no matter how well-intentioned, dey produce score wey no fit reliably interpret against di standard benchmark distribution. SUS dey measure perceived usability, wey correlate with but no be identical to objective task-completion success (see digital literacy rate for task-completion-based measure); product fit get good SUS score from patients wey no attempt di more complex features, so to pair SUS with objective task-completion data dey give fuller picture than either one alone. Response timing matter: to administer SUS immediately after frustrating specific incident (failed connection, confusing step) versus after smooth session fit shift scores no matter di product overall usability.

## Pitfalls

- **To modify di standard questionnaire items or scoring**: even small wording or scale changes dey invalidate comparison against di well-established published benchmark distribution; use di standard 10-item instrument exactly as dem validate am.
- **To report only di average score without segmentation**: usability dey often vary substantially by user age, digital literacy, or role (patient versus clinician); segment reporting to find specific, addressable usability gaps wey single average dey hide.
- **To treat SUS as measure of clinical effectiveness**: SUS dey measure usability specifically, no be clinical outcome or satisfaction with care; highly usable tool fit still fail to improve clinical outcomes, and dem no suppose ever mix dese two or substitute one for di other.
- **To administer di survey only after unusually smooth or unusually frustrating sessions**: timing and context of administration fit bias di score; administer consistently across representative sample of real-world sessions, no be only convenient or selectively chosen ones.

## Sources

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", the original published instrument
- Bangor, Kortum, and Miller, published SUS benchmarking research establishing the widely cited score interpretation bands
- Peer-reviewed literature on SUS use in digital health and telehealth usability evaluation, for example studies published in JMIR Human Factors

See also: [patient net promoter score](../pesho-net-promota-skor/), related but distinct patient-reported metric wey dey measure satisfaction and loyalty instead of software usability specifically.
