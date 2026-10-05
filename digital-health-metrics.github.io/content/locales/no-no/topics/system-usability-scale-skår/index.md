# System Usability Scale-skår

System Usability Scale-skår (SUS-skår) er et standardisert spørreskjema med 10 punkter som brukes til å kvantifisere hvor brukervennlig en programvare er, og som gir én enkelt skår fra 0 til 100 som kan sammenlignes mot veletablerte bransjenormer. I motsetning til Net Promoter Score, som måler vilje til å anbefale, eller pasientrapporterte utfallsmål, som måler klinisk eller funksjonell status, måler SUS én spesifikk ting: hvor lett selve programvaren er å lære og bruke, enten for pasienter eller klinisk personell.

## Hvorfor dette er viktig

Et digitalt helseverktøy kan ha sterk klinisk dokumentasjon og et overbevisende forretningscase og likevel svikte i praksis fordi pasienter eller klinikere finner grensesnittet forvirrende, tregt eller frustrerende å bruke. Og fordi SUS er et validert, mye brukt instrument med tiår av publiserte referansedata på tvers av bransjer, lar det et digitalt helseteam sammenligne eget produkts brukervennlighet mot en kjent fordeling i stedet for å stole på uformelle inntrykk eller anekdotiske klager. SUS er bevisst teknologiagnostisk og raskt å gjennomføre (vanligvis under fem minutter), noe som gjør det praktisk å kjøre gjentatte ganger gjennom designiterasjoner, i motsetning til en full brukbarhetsstudie eller en formell klinisk studie. Fordi svikt i brukervennlighet for klinikere er et dokumentert bidrag til utbrenthet (se utbrenthetsrate blant leger), og svikt i brukervennlighet for pasienter er et dokumentert bidrag til frafall og dårlige utfall for digital kompetanse (se digital kompetanserate), fungerer SUS som et billig tidlig varselsignal om brukervennlighet som kan fange et designproblem før det viser seg i disse mer konsekvensrike nedstrøms metrikkene.

## Hvordan det beregnes

```
SUS-skår = ((sum av skårene for oddetallspunktene − 5) +
            (25 − sum av skårene for partallspunktene)) × 2,5

Resultatet er én enkelt skår fra 0 til 100 (ikke en prosentandel,
til tross for skalaen, siden den ikke representerer "prosent riktig"
eller lignende).

Publisert tolkning av referansenivåer (Bangor m.fl.):
  Over 80  — utmerket brukervennlighet
  68       — gjennomsnittlig, basert på den brede bransjenormen
  Under 51 — dårlig brukervennlighet, som krever undersøkelse
```

## Gjennomarbeidet eksempel

En telehelseplattform deler ut det standard SUS-spørreskjemaet med 10 punkter til 150 pasienter etter deres første videokonsultasjon. Den beregnede gjennomsnittlige SUS-skåren på tvers av alle respondenter er 74. Sammenlignet med det mye siterte bransjegjennomsnittet på 68 indikerer dette over gjennomsnittet god brukervennlighet for denne spesifikke pasientpopulasjonen og dette bruksområdet, men fortsatt vesentlig under den "utmerkede" terskelen på 80 som ville tyde på få gjenværende barrierer for brukervennlighet. Segmentering av de samme 150 svarene etter alder viser en gjennomsnittsskår på 81 for pasienter under 50 og 62 for pasienter på 65 år og eldre, et gap som peker mot et spesifikt, håndterbart brukervennlighetsproblem for eldre pasienter snarere enn et generelt problem med produktets brukervennlighet, og som et enkelt blandet gjennomsnitt ville skjult.

## Datakilder og forbehold

SUS-data kommer direkte fra pasienter eller klinikere som fyller ut det standardiserte spørreskjemaet med 10 punkter, og instrumentet må administreres nøyaktig slik det er validert (de samme 10 punktene, den samme 5-punkts samsvarsskalaen, den samme skåringsformelen) for at den resulterende skåren skal være sammenlignbar mot publiserte referansenivåer; en modifisert eller forkortet versjon av spørreskjemaet, uansett hvor velment, gir en skår som ikke kan tolkes pålitelig mot den standard referansefordelingen. SUS måler opplevd brukervennlighet, som korrelerer med, men ikke er identisk med, objektiv suksess i oppgavefullføring (se digital kompetanserate for et mål basert på oppgavefullføring); et produkt kan ha en god SUS-skår fra pasienter som ikke forsøkte de mer komplekse funksjonene, så å kombinere SUS med objektive data om oppgavefullføring gir et fyldigere bilde enn hvert av dem alene. Tidspunktet for svar betyr noe: å administrere SUS rett etter en frustrerende spesifikk hendelse (en mislykket tilkobling, et forvirrende trinn) i stedet for etter en smidig økt kan forskyve skårene uavhengig av produktets samlede brukervennlighet.

## Fallgruver

- **Endre standardspørsmålene eller skåringen**: selv små endringer i formulering eller skala ugyldiggjør sammenligning mot den veletablerte publiserte referansefordelingen; bruk standardinstrumentet med 10 punkter nøyaktig slik det er validert.
- **Rapportere bare gjennomsnittsskåren uten segmentering**: brukervennlighet varierer ofte betydelig etter brukerens alder, digitale kompetanse eller rolle (pasient mot kliniker); segmenter rapporteringen for å finne spesifikke, håndterbare brukervennlighetsgap som et enkelt gjennomsnitt skjuler.
- **Behandle SUS som et mål på klinisk effektivitet**: SUS måler spesifikt brukervennlighet, ikke kliniske utfall eller tilfredshet med behandlingen; et svært brukervennlig verktøy kan likevel svikte i å forbedre kliniske utfall, og disse bør aldri blandes sammen eller erstatte hverandre.
- **Administrere undersøkelsen bare etter uvanlig smidige eller uvanlig frustrerende økter**: tidspunkt og kontekst for administrasjonen kan skjeve skåren; administrer konsekvent på tvers av et representativt utvalg av reelle økter, ikke bare praktiske eller selektivt valgte.

## Kilder

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", det opprinnelig publiserte instrumentet
- Bangor, Kortum og Miller, publisert referanseforskning om SUS som etablerte de mye siterte tolkningsbåndene for skårer
- Fagfellevurdert litteratur om bruk av SUS i evaluering av brukervennlighet i digital helse og telehelse, for eksempel studier publisert i JMIR Human Factors

Se også: [pasientens net promoter score](../pasientens-net-promoter-score/), en beslektet, men distinkt pasientrapportert metrikk som måler tilfredshet og lojalitet snarere enn brukervennlighet i programvaren spesifikt.
