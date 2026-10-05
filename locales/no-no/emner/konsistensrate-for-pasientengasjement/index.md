# Konsistensrate for Pasientengasjement

Konsistensrate for pasientengasjement måler hvor regelmessig en innrullert pasient samhandler med et digitalt helseprodukt over tid, for eksempel ved å logge mat eller symptomer, registrere fysisk aktivitet eller se på helsedata, i stedet for bare om vedkommende har brukt det i det hele tatt. Det er en longitudinell metrikk, forskjellig fra et øyeblikkstall for aktiv bruk: to pasienter kan ha identisk status "brukte appen denne måneden" mens den ene logger konsekvent hver dag og den andre logger én gang og forsvinner i tre uker, og bare konsistensmetrikken skiller dem.

## Hvorfor dette er viktig

Vedvarende, regelmessig samhandling med et digitalt helseverktøy er en av de mer pålitelige ledende indikatorene på klinisk nytte, særlig ved atferdsavhengige tilstander som diabetes, vektkontroll og psykisk helse, der verktøyets verdi kommer fra vanen det støtter snarere enn fra en enkelt økt. Et produkt kan rapportere et sunt antall månedlige aktive brukere mens det i virkeligheten betjener en populasjon som logger inn én gang og driver bort, fordi månedlig aktiv bruk er en lav terskel som ikke sier noe om bruksmønsteret i løpet av måneden; konsistensmetrikker fanger dette på en måte enkle aktivitetstall ikke kan. Fordi konsistens også er en av de vanskeligere tingene å opprettholde over måneder i stedet for uker, er den et mer ærlig signal om produktkvalitet og klinisk passform enn engasjementstall i korte vinduer, som er utsatt for nyhetseffekter rett etter introduksjonen.

## Hvordan det beregnes

```
Konsistensrate for engasjement = uker med minst én kvalifiserende
                                 samhandling / totalt antall uker
                                 innrullert × 100

En "kvalifiserende samhandling" bør defineres eksplisitt og konsekvent
(f.eks. en matlogg, en symptominnsjekking eller en fullført
aktivitetssynkronisering), aldri en passiv hendelse som en åpning av
appen uten noen logget handling.

Rapporter som en fordeling, ikke bare som et populasjonsgjennomsnitt:
  f.eks. andel pasienter med ≥ 80 % ukentlig konsistens,
         andel med 50–79 %, andel med < 50 %
```

## Gjennomarbeidet eksempel

En app for ernæringsveiledning rullerer inn en pasient i 12 uker. Pasienten logger minst én kvalifiserende matoppføring i 9 av de 12 ukene, noe som gir en individuell konsistensrate for engasjement på 9 / 12 × 100 = 75 %. På tvers av appens fulle kohort på 2 000 pasienter innrullert i minst 12 uker opprettholder 600 pasienter (30 %) ≥ 80 % ukentlig konsistens, 900 (45 %) faller i båndet 50–79 %, og 500 (25 %) faller under 50 %. Å rapportere bare kohortgjennomsnittet (som kanskje havner rundt 65 %) ville skjult at en hel fjerdedel av pasientene knapt engasjerer seg i det hele tatt, et segment det er verdt å undersøke separat i stedet for å fortynne det i et samlet gjennomsnitt.

## Datakilder og forbehold

Konsistensdata kommer fra produktets egne hendelseslogger (matoppføringer, aktivitetssynkroniseringer, innsjekkinger), og definisjonen av en "kvalifiserende samhandling" har enorm effekt på den resulterende raten; en lemfeldig definisjon (enhver åpning av appen) vil alltid se bedre ut enn en streng (en fullført, meningsfull loggoppføring), så definisjonen som brukes må oppgis tydelig sammen med ethvert rapportert tall. Automatisk synkroniserte data (for eksempel en tilkoblet treningssporer som synkroniserer aktivitet i bakgrunnen) bør rapporteres separat fra manuelt loggede data, siden automatisk synkronisering kan blåse opp tilsynelatende konsistens uten å gjenspeile noen aktiv innsats eller noe engasjement fra pasienten med produktets veiledning.

## Fallgruver

- **Blande sammen åpning av appen og meningsfullt engasjement**: en passiv åpning av appen (for eksempel utløst av et push-varsel) er ikke det samme som en logget matoppføring eller fullført innsjekking; definer og rapporter bare kvalifiserende samhandlinger.
- **Rapportere bare populasjonsgjennomsnittet**: en sunt utseende gjennomsnittlig konsistensrate kan skjule en bimodal populasjon av høyt engasjerte og nesten helt uengasjerte pasienter; rapporter fordelingen over konsistensbånd, ikke bare gjennomsnittet.
- **Ignorere nevneren for innrulleringens lengde**: å sammenligne konsistensrater mellom pasienter innrullert i svært ulik tid uten å ta hensyn til innrulleringens varighet vil skjeve i retning av den gruppen som hadde et kortere, lettere opprettholdbart målevindu.
- **Automatisk synkronisering i bakgrunnen som blåser opp raten**: en passivt synkronisert datastrøm fra en bærbar enhet kan få en uengasjert pasient til å fremstå som konsekvent aktiv uten noen reell atferdsendring eller noe engasjement med produktet fra vedkommendes side.

## Kilder

- Fagfellevurdert litteratur om mønstre for engasjement i digital helse og deres forhold til kliniske utfall, for eksempel studier publisert i Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), veiledning om kvalitet på pasientgenererte helsedata og måling av engasjement
- Digital Therapeutics Alliance, veiledning om beste praksis for måling av engasjement og utfall i digital terapi

Se også: [brukerretensjonsrate](../brukerretensjonsrate/), den nært beslektede metrikken for om en pasient i det hele tatt forblir innrullert, i motsetning til hvor konsekvent vedkommende engasjerer seg mens vedkommende er innrullert.
