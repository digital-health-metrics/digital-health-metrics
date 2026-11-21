# Rate of Digital Access

Digital access rate dey measure di share of eligible patient population wey get di practical means to use digital health product at all: broadband or reliable mobile data connection, internet-capable device, and active account for di relevant patient portal or app. Na di precondition metric for every other digital health measure for dis book — population no fit register, engage with, or benefit from any digital health product wey e structurally no fit reach, no matter how well dem design dat product.

## Why e matter

Digital health adoption and engagement metrics dey implicitly assume population wey already get digital access, and to report adoption or engagement rates without first to establish di underlying access rate dey risk to quietly exclude di patients wey least likely to get dat access — wey frequently also be di patients wey get di greatest health need. Di HIMSS Digital Health Equity Measurement Framework (DHEMF) and similar frameworks dey treat digital access as foundational, first-order equity metric precisely because interventions wey dem build without to account for access gaps dey tend to reinforce, instead of to close, existing health disparities: telehealth-first strategy fit inadvertently reduce access to care for patients wey no get reliable connection or device, even while e measurably improve di experience for patients wey already get both. Dem suppose track and report digital access rate by demographic and geographic segment, because national or organization-wide averages routinely hide large gaps for specific populations.

## How dem dey calculate am

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

One health system dey serve eligible population of 40,000 patients. Patient survey and infrastructure data show say 34,000 (85%) get reliable broadband or mobile connectivity, 33,000 (82.5%) get internet-capable device, and out of di patients wey meet both conditions, 27,000 (67.5% of di full eligible population) get active patient portal account. If dem disaggregate by age, e show say patients wey age 65+ get combined digital access rate of only 48%, compared with 78% for patients wey under 65 — gap wey di organization-wide 67.5% average completely hide, and one wey suppose directly inform whether dem fit safely offer given service digital-only for dis population.

## Data sources and caveats

Connectivity and device ownership data dey typically come from combination of patient self-report (through survey or intake questionnaire), Federal Communications Commission (FCC) or equivalent national broadband availability mapping data for patient geographic area, and portal activation data from di organization own systems. Broadband availability for area level (whether provider dey offer service for given ZIP code or postcode) na weaker proxy than household-level connectivity, because area-level availability data no talk anything about whether specific patient fit actually afford or don choose to subscribe to dat service — dem no suppose mix area-level and household-level access rates. Device and connectivity access fit also dem share inside household (for example, one smartphone wey many family members dey use), wey household-level survey data dey capture better than individual-level portal login data alone.

## Pitfalls

- **To report only organization-wide average**: dis reliably dey hide large access gaps for older, lower-income, rural, or otherwise digitally marginalized patient segments; always disaggregate by demographic and geographic segment.
- **To mix area-level broadband availability with actual household access**: ZIP code or postcode wey broadband provider "serve" no mean say every household inside am dey subscribe to or fit afford dat service.
- **To treat device ownership as one-time, static fact**: device access fit be temporary (device wey dey age, phone wey loss or spoil, shared family device wey dem reassign), so dem suppose measure access rate on recurring basis, no be to assume say e stable once dem don assess am.
- **To design digital-only pathway before to establish di access rate for di affected population**: to shift service to digital-only without first to confirm di target population actual digital access rate dey risk to silently exclude exactly di patients wey least able to reach alternative channel.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), national broadband availability and digital equity data
- Pew Research Center, research on internet, broadband, and device access and digital divide trends across demographic groups

See also: [digital literacy rate](../rate-of-digital-literacy/), di closely related metric of whether patients wey get access fit effectively use am.
