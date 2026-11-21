# Behandlingstid for Digital Henvisning

Behandlingstid for digital henvisning er den forløpte tiden fra en elektronisk henvisning sendes av en henvisende kliniker til den er triagert og enten godkjent, avvist, eller booket av den mottakende tjenesten. Det er en prosess- (flyt-) metrikk, atskilt fra pasientens totale ventetid, og det er et av de tydeligste stedene der en digital systemendring (strukturert e-henvisning, bildebasert triage, standardiserte henvisningsskjemaer) kan vises å flytte et operasjonelt tall, ikke bare en tilfredshetsscore.

## Hvorfor dette er viktig

Et sakte eller svært variabelt triage-trinn legger til forsinkelse før pasienten i det hele tatt blir med i en klinisk venteliste, og fordi denne forsinkelsen skjer før noen klinisk omsorg starter, er det ren prosesshukommelse som digitale verktøy er godt egnet til å fjerne. Henvisningssystemer som tvinger frem en "tilbake til henviser"-syklus for manglende informasjon, skaper omarbeidingssløyfer som er lette å overse hvis behandlingstid bare måles på henvisninger som går rent gjennom første gang. Der en tjeneste har innført strukturerte digitale henvisningsskjemaer, obligatoriske felt, eller bildebasert triage (for eksempel i teledermatologi), er behandlingstid vanligvis den enkeltmest overbevisende metrikken for å demonstrere fordelen, fordi den kan måles før og etter endringen med samme instrumentering.

## Hvordan det beregnes

```
Behandlingstid = tidsstempel(triage-beslutning) − tidsstempel(henvisning sendt)

Rapporter median og en høy persentil (vanligvis 90.), ikke bare
gjennomsnittet, fordi fordelingen er kraftig høyreskjev av returnerte
eller komplekse henvisninger.

Vurder deltrinnstider der systemet fanger dem:
  Innsending → mottatt av tjeneste
  Mottatt → triage-beslutning
  Triage-beslutning → booket time (der relevant)
```

## Gjennomarbeidet eksempel

Et e-henvisningssystems revisjonsspor viser en median tid fra innsending til triage-beslutning på 1,8 dager på tvers av alle spesialiteter, med en 90.-persentil tid på 6 dager, hovedsakelig drevet av henvisninger som returneres til henviser for manglende klinisk informasjon. En teledermatologibane som bruker bildebasert triage på samme plattform, oppnår en median behandlingstid på 4 timer og en 90.-persentil på 1 dag, fordi et fotografi og strukturert historie nesten alltid er tilstrekkelig for triage-beslutningen uten behov for videre korrespondanse.

## Datakilder og forbehold

E-henvisnings- eller henvisningsstyringssystemets eget revisjonsspor er hovedkilden, ved bruk av innsendings- og beslutningstidsstempler; organisasjoner bør bekrefte om "klokken" stopper mens en henvisning returneres for mer informasjon eller går kontinuerlig, siden de to definisjonene gir vesentlig forskjellige tall for samme underliggende prosess. Behandlingstid bør rapporteres konsekvent i kalendertid eller arbeidstidstid, siden helge- og helligdagseffekter ellers kan forvrenge sammenligninger mellom tjenester med ulike arbeidsmønstre.

## Fallgruver

- **Måle bare "rene" henvisninger**: å ekskludere avviste eller returnerte henvisninger fra beregningen skjuler omarbeidingsbelastningen som digitale verktøy ofte spesifikt er ment å redusere.
- **Rapportere gjennomsnittet i stedet for medianen og persentiler**: et lite antall langvarige, returnerte henvisninger vil trekke gjennomsnittet langt over den typiske pasientens faktiske opplevelse.
- **Forveksle behandlingstid med total ventetid**: behandlingstid dekker bare triage-trinnet; pasientens totale opplevelse inkluderer også den nedstrøms kliniske ventelisten, som er en separat metrikk styrt av separate kapasitetsbegrensninger.
- **Ikke skille deltrinn**: en tjeneste som bare måler ende-til-ende-tid, kan ikke fortelle om et sakte tall skyldes at henvisere sender inn ufullstendig informasjon, den mottakende tjenestens triage-kapasitet, eller begge deler.

## Kilder

- NHS England, e-Referral Service (e-RS)-statistikk og tjenestespesifikasjoner
- Fagfellevurdert litteratur om elektroniske henvisningsstyringssystemer og digitale triage-baner, inkludert teledermatologi
- ONC / HealthIT.gov, veiledning om interoperabilitet og henvisningskoordinering
