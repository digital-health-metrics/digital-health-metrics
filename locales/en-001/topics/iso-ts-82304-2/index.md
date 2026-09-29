# ISO/TS 82304-2

ISO/TS 82304-2 is an international technical specification, published under ISO Technical Committee 215 (Health Informatics), that defines a structured method for assessing the quality of health and wellness applications — spanning usability, technical robustness and reliability, interoperability, content quality, and data security and privacy — for products that fall outside the scope of full medical device regulation but still materially affect a user's health decisions or behaviour. It exists to fill a specific gap: the large majority of consumer-facing health and wellness apps (fitness trackers, symptom diaries, wellness coaching apps) are not regulated as medical devices, yet no common, structured way previously existed to assess or compare their basic quality and safety.

## Why it matters

App stores host hundreds of thousands of health and wellness apps with enormously variable quality, and before a common technical specification existed, a patient, clinician, or health system had no structured, comparable way to judge one app's basic quality and safety against another beyond star ratings and marketing claims — a gap that matters because a poorly designed health app can still cause real harm (inaccurate content, poor data security, misleading claims) even without meeting the regulatory threshold of a medical device. ISO/TS 82304-2 is deliberately structured around domains a non-specialist reviewer can assess consistently, which has made it the technical basis for several national and commercial health app quality-labelling and curation services, giving health systems and app libraries a defensible, standardized way to include or exclude apps from a recommended list rather than relying on ad hoc judgement.

## How it's applied

```
Assessment is organized around defined quality domains, evaluated
by structured review rather than a single numeric formula:

Usability                        — clarity, accessibility, and ease
                                    of use for the intended user group
Technical robustness/reliability — stability, performance, and
                                    freedom from technical defects
Interoperability                 — ability to exchange data with other
                                    systems where relevant to the app's
                                    function
Content quality and safety       — accuracy, currency, and absence of
                                    harmful or misleading health claims
Security and privacy             — data protection practice and
                                    transparency about data use

Each domain is scored via structured review criteria and combined
into an overall quality assessment, which several health app
quality-labelling schemes use as the technical basis for a public
quality label or curated-library inclusion decision.
```

## Worked example

A health system's digital app library programme wants to curate a recommended list of wellness apps for patients rather than leaving app selection entirely to app-store search. Each candidate app is assessed against the ISO/TS 82304-2 domains: a sleep-tracking app scores well on usability and technical robustness, adequately on content quality, but is flagged during the security and privacy review for sharing user data with third-party advertisers without clear disclosure — a finding significant enough to exclude the app from the recommended list despite its otherwise strong usability score. This domain-by-domain outcome is more actionable for both the curation team and, if shared, the app's own developer than a single blended quality score would be, since it identifies precisely which aspect needs remediation before the app could be reconsidered.

## Data sources and caveats

Assessment against ISO/TS 82304-2 is typically carried out by a trained reviewer or an accredited assessment service, following the specification's structured review criteria for each domain, and several national and commercial initiatives (health app quality-labelling and curation organizations, some operating under formal national health system endorsement) use the standard as the technical basis for their own public-facing app quality labels — meaning an app's "certified" or "labelled" status in practice often reflects a specific labelling scheme's implementation of the standard, not necessarily an identical process across every scheme, so the specific assessing organization and its methodology should be checked and disclosed alongside any quality label cited. The specification assesses quality and basic safety characteristics of an app as software; it is not a substitute for medical device regulatory clearance where an app's claims or functions actually meet a medical device threshold, and using it as one would be a category error.

## Pitfalls

- **Treating a quality label as regulatory clearance**: an app assessed and labelled under ISO/TS 82304-2 has not thereby received medical device regulatory approval; the two serve different purposes and should never be conflated in how an app is described or marketed.
- **Assuming all labelling schemes based on the standard are equivalent**: different organizations implement ISO/TS 82304-2-based assessment with their own specific review processes and rigour; check which organization performed an assessment and how, rather than treating any "ISO/TS 82304-2-based" label as interchangeable with any other.
- **Assessing only usability while neglecting security and privacy**: usability issues are the most visible to an end user and the easiest to assess informally, which can lead reviewers to under-weight the less visible but potentially more consequential security and privacy domain.
- **Treating the assessment as a one-time, permanent certification**: an app's content, security practices, and third-party data-sharing arrangements can all change after an initial assessment; a credible quality-labelling programme re-assesses periodically rather than treating an initial pass as permanent.

## Sources

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), publication and working group information
- National and commercial health app quality-labelling and curation organizations that publish their assessment methodology based on this standard

See also: [system usability scale score](../system-usability-scale-score/), a complementary, narrower usability-specific instrument often used alongside a broader ISO/TS 82304-2 quality assessment.
