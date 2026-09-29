# Digital Access Rate

Digital access rate measures the share of an eligible patient population that has the practical means to use a digital health product at all: a broadband or reliable mobile data connection, an internet-capable device, and an active account on the relevant patient portal or app. It is the precondition metric for every other digital health measure in this book — a population cannot register, engage with, or benefit from any digital health product it structurally cannot reach, however well designed that product is.

## Why it matters

Digital health adoption and engagement metrics implicitly assume a population that already has digital access, and reporting adoption or engagement rates without first establishing the underlying access rate risks quietly excluding the patients least likely to have that access — who are frequently also the patients with the greatest health need. The HIMSS Digital Health Equity Measurement Framework (DHEMF) and similar frameworks treat digital access as a foundational, first-order equity metric precisely because interventions built without accounting for access gaps tend to reinforce, rather than close, existing health disparities: a telehealth-first strategy can inadvertently reduce access to care for patients without a reliable connection or device, even while it measurably improves the experience for patients who already had both. Digital access rate should be tracked and reported by demographic and geographic segment, since national or organization-wide averages routinely mask large gaps for specific populations.

## How it's calculated

```
Digital access rate = patients with broadband/mobile connectivity AND an
                       internet-capable device AND an active patient portal
                       or app account / total eligible patient population × 100

Report each sub-component separately as well as the combined rate:
  Connectivity rate     = patients with a reliable internet connection /
                           eligible population × 100
  Device ownership rate = patients with an internet-capable device /
                           eligible population × 100
  Portal activation rate = patients with an active portal/app account /
                           eligible population × 100 (see patient portal
                           adoption rate for the fuller adoption funnel)
```

## Worked example

A health system serves an eligible population of 40,000 patients. A patient survey and infrastructure data indicate 34,000 (85%) have reliable broadband or mobile connectivity, 33,000 (82.5%) have an internet-capable device, and of the patients meeting both conditions, 27,000 (67.5% of the full eligible population) have an active patient portal account. Disaggregating by age shows patients aged 65+ have a combined digital access rate of only 48%, compared with 78% for patients under 65 — a gap the organization-wide 67.5% average completely obscures, and one that should directly inform whether a given service can safely be offered digital-only for this population.

## Data sources and caveats

Connectivity and device ownership data typically come from a combination of patient self-report (via survey or intake questionnaire), Federal Communications Commission (FCC) or equivalent national broadband availability mapping data for a patient's geographic area, and portal activation data from the organization's own systems. Broadband availability at an area level (whether a provider offers service in a given ZIP code or postcode) is a weaker proxy than household-level connectivity, since area-level availability data says nothing about whether a specific patient can actually afford or has chosen to subscribe to that service — area-level and household-level access rates should not be conflated. Device and connectivity access can also be shared within a household (for example, one smartphone used by multiple family members), which household-level survey data captures better than individual-level portal login data alone.

## Pitfalls

- **Reporting only an organization-wide average**: this reliably conceals large access gaps for older, lower-income, rural, or otherwise digitally marginalized patient segments; always disaggregate by demographic and geographic segment.
- **Conflating area-level broadband availability with actual household access**: a ZIP code or postcode being "served" by a broadband provider does not mean every household within it subscribes to or can afford that service.
- **Treating device ownership as a one-time, static fact**: device access can be transient (an aging device, a lost or damaged phone, a shared family device reassigned), so access rate should be measured on a recurring basis, not assumed stable once assessed.
- **Designing a digital-only pathway before establishing the access rate for the affected population**: shifting a service to digital-only without first confirming the target population's actual digital access rate risks silently excluding exactly the patients least able to reach an alternative channel.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), national broadband availability and digital equity data
- Pew Research Center, research on internet, broadband, and device access and digital divide trends across demographic groups

See also: [digital literacy rate](../digital-literacy-rate/), the closely related metric of whether patients who do have access can effectively use it.
