# Rate o Biometric Steadiness

The rate o biometric steadiness is the share o enrolled patients that reach an haud a clinically defined target range for a biometric measure — maist commonly bluid pressure unner a threshold like 130/80 mmHg — uisin a connectit monitorin device, ower a sustainit period raither than at a single pynt in time. It's no the same as the rate o biometric betterment (see that tapic): betterment measures the size o a chynge frae baseline, while steadiness measures whether a patient is bein keepit reliably inside a safe range ance treatment or monitorin haes stairtit, which is the outcome that maitters maist for patients that are aareadies near target or aareadies on treatment.

## Why it maitters

For a lairge share o patients in chronic-disease programmes — hypertension in particular, whaur guideline bluid pressure targets are weel established an straucht linked tae cardiovascular risk — the clinical goal isnae a yin-aff improvement but sustainit control, an a patient that swings in an oot o target range poses a muckle different risk frae yin that improves ance an bides there. Connectit devices (cellular bluid pressure cuffs, continuous glucose monitors) mak it possible tae measure steadiness continuously raither than juist at clinic visits, pickin oot patients whase in-clinic readins look controlled but whase hame readins are unsteady — a pattern kent as masked hypertension that periodic in-person measurement alane canna detect. Reportin the steadiness rate raither than juist a single "at target" snapshot forces a programme tae face up tae hoo consistently, no juist hoo aften, it keeps patients in range.

## Hoo it's caulculatit

```
Biometric stabilization rate = patients with ≥ 80% of readings within
                                target range over the measurement period /
                                patients with a minimum number of valid
                                readings in that period × 100

Example thresholds:
  Blood pressure — target < 130/80 mmHg (or the applicable clinical
                   guideline threshold for the patient's risk profile)
  Glucose        — target range per continuous glucose monitoring
                   guidance, reported as "time in range"

A minimum reading-frequency threshold (e.g. at least 3 readings per
week) should be set before a patient is included in the denominator,
to avoid infrequent readers appearing artificially stable.
```

## Warked example

A hypertension remote-monitorin programme enrols 600 patients wi cellular bluid pressure cuffs, ilka ane expectit tae tak at least 3 readins a week. O thae, 540 meet the minimum readin-frequency threshold ower a 3-month measurement period an are includit in the denominator. O thae 540, 350 hae at least 80% o their readins unner 130/80 mmHg, giein a rate o biometric steadiness o 350 / 540 × 100 = 65%. The 60 patients left oot for no enough readins are reportit separately as a data-completeness gap, no lumped intae either the numerator or the "unsteady" group, sin their true control status is genuinely unkent raither than puir.

## Data sources an caveats

Readins come straucht frae the connectit device's ain data stream, which is mair objective an faur mair frequent than in-clinic measurement, but device placement an technique mistaks (a bluid pressure cuff that's the wrang size or in the wrang place) can bring in systematic bias that a single in-clinic validation readin winna necessarily catch. The choice o target range shuid follae the current applicable clinical guideline for the patient's specific risk profile an comorbidities raither than a single universal threshold, sin guideline targets differ bi patient age, kidney function, an cardiovascular risk. A patient that disnae tak readins aften shuid niver be quietly coontit as "steady" bi default; leavin them oot o the denominator wi open reportin o the exclusion is mair honest than coontin them as controlled or uncontrolled on ower little data.

## Pitfalls

- **Takkin a single in-range readin as steadiness**: steadiness is aboot sustainit control ower a defined period, no a snapshot; aye require a minimum proportion o in-range readins ower that period, no juist a single qualifyin measurement.
- **Quietly leavin oot patients that tak readins seldom wioot reportin it**: patients that rarely tak readins arenae automatically steady or unsteady; leave them oot o the denominator openly an report the exclusion rate as a separate data-completeness metric.
- **Ignorin device calibration an technique mistaks**: a cuff that fits puirly or a device that's no calibratit can bias readins ae wey systematically, which a steadiness rate caulculatit naively frae raw device data winna catch wioot periodic validation.
- **Uisin a single universal target range for aabody**: clinical guideline targets vary bi patient risk profile an comorbidity; applyin ae blanket threshold tae a clinically mixed population'll wrangly sort some patients as steady or unsteady against their actual individualised target.

## Sources

- American Heart Association (AHA) / American College of Cardiology (ACC), blood pressure guideline targets and home blood pressure monitoring guidance
- International Diabetes Federation and American Diabetes Association (ADA), continuous glucose monitoring "time in range" consensus guidance
- Peer-reviewed literature on remote biometric monitoring and sustained condition control, for example studies published in npj Digital Medicine

See also: [rate o biometric betterment](../rate-o-biometric-betterment/), the related metric o the size o chynge frae baseline, as distinct frae sustainit control ance a target is reached.
