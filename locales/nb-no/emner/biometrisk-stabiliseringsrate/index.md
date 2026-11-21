# Biometrisk Stabiliseringsrate

Biometrisk stabiliseringsrate er andelen innrullerte pasienter som oppnår og opprettholder et klinisk definert målområde for en biometrisk måling, oftest blodtrykk under en terskel som 130/80 mmHg, ved hjelp av en tilkoblet overvåkingsenhet, over en vedvarende periode i stedet for på et enkelt tidspunkt. Den er forskjellig fra biometrisk forbedringsrate (se det emnet): forbedring måler størrelsen på en endring fra baseline, mens stabilisering måler om en pasient holdes pålitelig innenfor et trygt område etter at behandling eller overvåking har startet, noe som er utfallet som betyr mest for pasienter som allerede er nær målet eller allerede er i behandling.

## Hvorfor dette er viktig

For en stor andel av pasientene i programmer for kroniske sykdommer, særlig hypertensjon, der retningslinjenes blodtrykksmål er veletablerte og direkte knyttet til kardiovaskulær risiko, er det kliniske målet ikke en engangsforbedring, men vedvarende kontroll, og en pasient som svinger inn og ut av målområdet utgjør en vesentlig annen risiko enn en som forbedres én gang og blir der. Tilkoblede enheter (blodtrykksmansjetter med mobilnett, kontinuerlige glukosemålere) gjør det mulig å måle stabilisering kontinuerlig i stedet for bare ved klinikkbesøk, og avdekker pasienter hvis målinger på klinikken ser kontrollerte ut, men hvis hjemmemålinger er ustabile, et mønster kjent som maskert hypertensjon som periodiske målinger ved personlig oppmøte alene ikke kan oppdage. Å rapportere stabiliseringsrate i stedet for bare et enkelt "på målet"-øyeblikksbilde tvinger et program til å ta stilling til hvor konsekvent, ikke bare hvor ofte, det holder pasientene innenfor området.

## Hvordan det beregnes

```
Biometrisk stabiliseringsrate = pasienter med ≥ 80 % av målingene innenfor
                                målområdet i måleperioden /
                                pasienter med et minimumsantall gyldige
                                målinger i den perioden × 100

Eksempler på terskler:
  Blodtrykk — mål < 130/80 mmHg (eller gjeldende klinisk
              retningslinjeterskel for pasientens risikoprofil)
  Glukose   — målområde i henhold til veiledning for kontinuerlig
              glukosemåling, rapportert som "tid i området"

En terskel for minimum målefrekvens (f.eks. minst 3 målinger per
uke) bør settes før en pasient inkluderes i nevneren, for å unngå
at pasienter som måler sjelden fremstår kunstig stabile.
```

## Gjennomarbeidet eksempel

Et program for fjernovervåking av hypertensjon rullerer inn 600 pasienter med blodtrykksmansjetter med mobilnett, som hver forventes å ta minst 3 målinger per uke. Av disse oppfyller 540 minstekravet til målefrekvens over en måleperiode på 3 måneder og inkluderes i nevneren. Av de 540 har 350 minst 80 % av målingene sine under 130/80 mmHg, noe som gir en biometrisk stabiliseringsrate på 350 / 540 × 100 = 65 %. De 60 pasientene som er ekskludert på grunn av for få målinger rapporteres separat som et hull i datakompletthet, og slås ikke sammen med verken telleren eller gruppen "ikke stabilisert", siden deres reelle kontrollstatus er ukjent snarere enn dårlig.

## Datakilder og forbehold

Målingene kommer direkte fra den tilkoblede enhetens egen datastrøm, som er mer objektiv og langt hyppigere enn måling på klinikken, men feil i plassering og teknikk (en feil dimensjonert eller plassert blodtrykksmansjett) kan introdusere systematisk skjevhet som en enkelt valideringsmåling på klinikken ikke nødvendigvis fanger opp. Valget av målområde bør følge gjeldende klinisk retningslinje for pasientens spesifikke risikoprofil og komorbiditet i stedet for en enkelt universell terskel, siden retningslinjenes mål varierer etter pasientens alder, nyrefunksjon og kardiovaskulære risiko. En pasient som måler sjelden bør aldri stilltiende telles som "stabil" som standard; å ekskludere vedkommende fra nevneren med åpen rapportering av ekskluderingen er mer ærlig enn å telle vedkommende som kontrollert eller ukontrollert på grunnlag av for lite data.

## Fallgruver

- **Å behandle én enkelt måling innenfor området som stabilisering**: stabilisering handler om vedvarende kontroll over en definert periode, ikke et øyeblikksbilde; krev alltid en minimumsandel målinger innenfor området over perioden, ikke én enkelt kvalifiserende måling.
- **Stille ekskludere pasienter som måler sjelden uten å rapportere det**: pasienter som sjelden tar målinger er ikke automatisk stabile eller ustabile; ekskluder dem åpent fra nevneren og rapporter ekskluderingsraten som en separat metrikk for datakompletthet.
- **Ignorere kalibrering av enheten og feil i teknikk**: en dårlig tilpasset mansjett eller en ukalibrert enhet kan systematisk skjeve målingene i én retning, noe en stabiliseringsrate beregnet naivt fra rå enhetsdata ikke vil fange opp uten periodisk validering.
- **Bruke ett enkelt universelt målområde for alle pasienter**: kliniske retningslinjers mål varierer etter pasientens risikoprofil og komorbiditet; å bruke én generell terskel på en klinisk heterogen populasjon vil feilklassifisere noen pasienter som stabilisert eller ikke stabilisert i forhold til deres faktiske individualiserte mål.

## Kilder

- American Heart Association (AHA) / American College of Cardiology (ACC), blodtrykksmål i retningslinjer og veiledning for hjemmeblodtrykksmåling
- International Diabetes Federation og American Diabetes Association (ADA), konsensusveiledning om kontinuerlig glukosemåling og "tid i området"
- Fagfellevurdert litteratur om biometrisk fjernovervåking og vedvarende kontroll av tilstander, for eksempel studier publisert i npj Digital Medicine

Se også: [biometrisk forbedringsrate](../biometrisk-forbedringsrate/), den beslektede metrikken for størrelsen på endringen fra baseline, i motsetning til vedvarende kontroll når et mål er nådd.
