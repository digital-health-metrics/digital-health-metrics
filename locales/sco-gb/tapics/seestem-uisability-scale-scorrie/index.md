# System Usability Scale Score

The System Usability Scale (SUS) score is a standardised, 10-item questionnaire uised tae quantify hoo uisable a piece o software is, producin a single score frae 0 tae 100 that can be benchmarkit again weel-established industry norms. No like Net Promoter Score, which measures willingness tae recommend, or patient-reportit outcome measures, which measure clinical or functional status, SUS measures ae specific thing: hoo easy the software itsel is tae learn an uise, for either patients or clinical staff.

## Why it maitters

A digital health tool can hae strang clinical evidence an a compellin business case while still failin in practice because patients or clinicians find the interface confusin, slaw, or frustratin tae uise — an because SUS is a validatit, widely uised instrument wi decades o publisht benchmarkin data athort industries, it lets a digital health team compare their ain product's usability again a kent distribution raither than relyin on informal impressions or anecdotal complaints. SUS is deliberately technology-agnostic an quick tae administer (typically unner five minutes), which maks it practical tae rin again an again athort design iterations, unlike a full usability study or formal clinical trial. Because clinician-facin usability failures are a documentit contributor tae burnout (see rate o physician burnout) an patient-facin usability failures are a documentit contributor tae abandonment an puir digital literacy outcomes (see rate o digital literacy), SUS functions as an early-warnin, law-cost usability signal that can catch a design problem afore it shaws up in thae mair consequential doonstream metrics.

## Hoo it's caulculatit

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

## Warked example

A telehealth platform administers the standard 10-item SUS questionnaire tae 150 patients efter their first video visit. The caulculatit average SUS score athort aa respondents is 74. Benchmarkit again the widely citit industry average o 68, this shaws abune-average usability for this specific patient population an uise case, though still meaningfully unner the "excellent" threshold o 80 that wid suggest few remainin usability barriers. Segmentin the same 150 responses bi age shaws an average score o 81 for patients unner 50 an 62 for patients 65 an aulder — a gap that pynts taewards a specific, fixable usability issue for aulder patients raither than a general product usability problem, an ane that a single blendit average wid hae hid.

## Data sources an caveats

SUS data comes straucht frae patients or clinicians completin the standardised 10-item questionnaire, an the instrument maun be administert exactly as validatit (the same 10 items, the same 5-pynt agreement scale, the same scorin formula) for the resultin score tae be comparable again publisht benchmarks; a modifiet or shortent version o the questionnaire, hooever weel-meanin, gies a score that canna be reliably interpretit again the standard benchmark distribution. SUS measures perceived usability, which correlates wi but isnae identical tae objective task-completion success (see rate o digital literacy for a task-completion-based measure); a product can hae a guid SUS score frae patients wha didnae try the mair complex features, sae pairin SUS wi objective task-completion data gies a fuller picture than either alane. Response timin maitters: administerin SUS richt efter a frustratin specific incident (a failed connection, a confusin step) versus efter a smooth session can shift scores nae maitter the product's owerall usability.

## Pitfalls

- **Modifyin the standard questionnaire items or scorin**: even sma wordin or scale chynges invalidate comparison again the weel-established publisht benchmark distribution; uise the standard 10-item instrument exactly as validatit.
- **Reportin only the average score wioot segmentation**: usability aften varies a lot bi user age, digital literacy, or role (patient versus clinician); segment reportin tae find specific, fixable usability gaps that a single average hides.
- **Takkin SUS as a measure o clinical effectiveness**: SUS measures usability specifically, no clinical outcome or satisfaction wi care; a heichly uisable tool can still fail tae improve clinical outcomes, an thae shuid niver be mixed up or swapped for ane anither.
- **Administerin the survey only efter unusually smooth or unusually frustratin sessions**: timin an context o administration can bias the score; administer consistently athort a representative sample o real-warld sessions, no juist convenient or selectively chosen anes.

## Sources

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", the original published instrument
- Bangor, Kortum, and Miller, published SUS benchmarking research establishing the widely cited score interpretation bands
- Peer-reviewed literature on SUS use in digital health and telehealth usability evaluation, for example studies published in JMIR Human Factors

See also: [patient net promoter score](../patient-net-promoter-scorrie/), a relatit but separate patient-reportit metric measurin satisfaction an loyalty raither than software usability specifically.
