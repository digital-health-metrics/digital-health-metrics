# Omdirigeringsrate fra Akuttmottak

Omdirigeringsrate fra akuttmottak måler andelen pasientkontakter håndtert av et digitalt triageverktøy eller virtuelt behandlingsverktøy som med rimelig sannsynlighet ville ha resultert i et akuttmottaksbesøk uten dette tiltaket, men i stedet ble trygt håndtert gjennom et pasientforløp med lavere hastegrad: råd om egenomsorg, en fastlegetime eller et planlagt legevaktbesøk. Det er en spesifikk, høyverdig delmengde av treffsikkerhet i triageruting (se det emnet) som utelukkende fokuserer på unngått bruk av akuttmottak, som er utfallet som er mest direkte knyttet til både helsekostnader og avlastning av akuttmottakenes kapasitet.

## Hvorfor dette er viktig

Akuttmottak er blant de dyreste behandlingsstedene per konsultasjon og brukes ofte for problemer som trygt kunne vært håndtert andre steder, så et digitalt triageverktøys evne til trygt å omdirigere egnede tilfeller bort fra akuttmottaket er en av dets mest kommersielt og operasjonelt verdifulle egenskaper, og en av de enkleste å kommunisere til en betaler eller et helsesystem som vurderer verktøyets avkastning på investeringen. Men omdirigering har bare verdi dersom den er trygg: et verktøy som aggressivt omdirigerer pasienter bort fra akuttmottaket på bekostning av å overse ekte nødssituasjoner, har optimalisert feil side av avveiningen, og derfor må omdirigeringsrate fra akuttmottak alltid rapporteres sammen med en sikkerhetsmetrikk som følger oversette eller forsinkede akuttpresentasjoner blant omdirigerte pasienter, og ikke rapporteres isolert som en ren effektivitetsgevinst.

## Hvordan det beregnes

```
Omdirigeringsrate fra akuttmottak = pasientkontakter trygt omdirigert bort
                                    fra akuttmottaket til et egnet
                                    forløp med lavere hastegrad / totalt
                                    antall pasientkontakter vurdert som
                                    potensielt på vei til akuttmottak × 100

"Trygt omdirigert" krever bekreftelse, via oppfølging eller koblede
journaldata, på at pasientens tilstand faktisk ikke krevde
akuttbehandling innenfor et definert oppfølgingsvindu (f.eks. 72
timer): en omdirigeringsbeslutning er ikke validert som trygg bare
fordi pasienten ikke gikk direkte til akuttmottaket etterpå.

Rapporter sammen med:
  Rate for oversette nødstilfeller = omdirigerte pasienter som trengte
                                     akuttbehandling innenfor
                                     oppfølgingsvinduet / totalt antall
                                     omdirigerte pasienter × 100
```

## Gjennomarbeidet eksempel

En digital triagetjeneste vurderer 3 000 pasientkontakter i en måned som den kliniske algoritmen bedømmer som potensielt på vei til akuttmottak uten intervensjon. Av disse omdirigeres 1 800 til et forløp med lavere hastegrad (en omdirigeringsrate på 60 %). Oppfølging av den omdirigerte kohorten etter 72 timer ved bruk av koblede journaldata viser at 45 av de 1 800 omdirigerte pasientene deretter kom til et akuttmottak innenfor dette vinduet (en rate for oversette nødstilfeller på 45 / 1 800 × 100 = 2,5 %). Å rapportere omdirigeringstallet på 60 % uten raten for oversette nødstilfeller på 2,5 % ville bare presentert halvparten av avveiningen mellom sikkerhet og effektivitet som faktisk avgjør om verktøyets omdirigeringsatferd er hensiktsmessig kalibrert.

## Datakilder og forbehold

Å bekrefte at en omdirigert pasient ikke senere trengte akuttbehandling avhenger av koblede data, enten samme helsesystems egne akuttmottaksjournaler, en regional helseinformasjonsutveksling, eller en strukturert oppfølgingssamtale eller undersøkelse av pasienten, og et omdirigeringsprogram som opererer uten noen av disse datakildene kan faktisk ikke validere sin egen sikkerhet, bare anta den basert på fravær av en klage. Hensiktsmessig omdirigeringsrate og akseptabel rate for oversette nødstilfeller er kliniske policybeslutninger, ikke rent statistiske, og bør settes bevisst av klinisk ledelse i stedet for å få oppstå som en bieffekt av den terskelen en triagealgoritme tilfeldigvis bruker som standard. Omdirigeringsrate bør rapporteres etter presenterende symptom eller klagekategori, siden hensiktsmessige omdirigeringsrater varierer enormt etter tilstand (et mindre kutt og brystsmerter krever svært ulike omdirigeringsterskler).

## Fallgruver

- **Rapportere omdirigeringsrate uten en koblet sikkerhetsmetrikk for oversette nødstilfeller**: en høy omdirigeringsrate oppnådd ved å undertriagere ekte nødssituasjoner er ingen suksess; de to metrikkene må alltid rapporteres sammen.
- **Anta at fravær av akuttmottaksbesøk betyr at omdirigeringen var trygg**: en pasient kan komme til akuttmottaket i et annet, ukoblet sykehussystem, eller kan få et reelt skadelig utfall uten noensinne å møte opp på noe akuttmottak; valider sikkerhet gjennom koblede data eller strukturert oppfølging, ikke bare fravær av et akuttmottaksbesøk i samme system.
- **Sette omdirigeringsterskelen utelukkende for å maksimere omdirigeringsraten**: en algoritme eller policy innstilt for å maksimere omdirigering uten en tilsvarende sikkerhetsbegrensning vil bytte pasientsikkerhet mot et bedre utseende effektivitetstall.
- **Blande omdirigeringsrate på tvers av alle klagetyper**: hensiktsmessige omdirigeringsrater varierer enormt etter presenterende klage; en enkelt blandet rate kan ikke vise om verktøyet presterer trygt og effektivt for de spesifikke tilstandene som betyr mest klinisk.

## Kilder

- Agency for Healthcare Research and Quality (AHRQ), forskning på bruk av akuttmottak og hensiktsmessig omdirigering til riktig behandlingssted
- NHS England, veiledning om NHS 111 og standarder for sikkerhet og effektivitet i digital triage ved hastetilfeller
- Fagfellevurdert litteratur om utfall av digital triage og omdirigering fra akuttmottak ved virtuell behandling, for eksempel studier publisert i Annals of Emergency Medicine og npj Digital Medicine

Se også: [treffsikkerhet i triageruting](../treffsikkerhet-i-triageruting/), den bredere treffsikkerhetsmetrikken dette er en spesifikk, sikkerhetskritisk delmengde av.
