# Behandlingstid for Digital Henvisning

Behandlingstid for digital henvisning er den forløbne tid fra en elektronisk henvisning indsendes af en henvisende kliniker, til den er triageret og enten accepteret, afvist eller booket af den modtagende tjeneste. Det er en proces- (flow-) metrik, adskilt fra patientens samlede ventetid, og det er et af de tydeligste steder, hvor en digital systemændring (struktureret e-henvisning, billedbaseret triage, standardiserede henvisningsskemaer) kan vises at flytte et operationelt tal, ikke blot en tilfredshedsscore.

## Hvorfor dette er vigtigt

Et langsomt eller meget varierende triage-trin tilføjer forsinkelse, allerede før patienten overhovedet kommer på en klinisk venteliste, og fordi denne forsinkelse sker, før nogen klinisk pleje starter, er det ren processpild, som digitale værktøjer er godt placeret til at fjerne. Henvisningssystemer, der tvinger en "tilbage til henviser"-cyklus frem på grund af manglende information, skaber genarbejdssløjfer, der er lette at overse, hvis behandlingstid kun måles på henvisninger, der går rent igennem første gang. Hvor en tjeneste har indført strukturerede digitale henvisningsskemaer, obligatoriske felter eller billedbaseret triage (for eksempel inden for teledermatologi), er behandlingstid normalt den enkelt mest overbevisende metrik til at demonstrere fordelen, fordi den kan måles før og efter ændringen med den samme instrumentering.

## Hvordan det beregnes

```
Behandlingstid = tidsstempel(triage-beslutning) − tidsstempel(henvisning indsendt)

Rapportér medianen og en høj percentil (almindeligvis den 90.), ikke kun
gennemsnittet, fordi fordelingen er kraftigt højreskæv på grund af
returnerede eller komplekse henvisninger.

Overvej deltrinstider, hvor systemet fanger dem:
  Indsendelse → modtaget af tjeneste
  Modtaget → triage-beslutning
  Triage-beslutning → booket aftale (hvor relevant)
```

## Gennemarbejdet eksempel

Et e-henvisningssystems revisionsspor viser en mediantid fra indsendelse til triage-beslutning på 1,8 dage på tværs af alle specialer, med en 90.-percentil-tid på 6 dage, hovedsageligt drevet af henvisninger, der returneres til henviser på grund af manglende klinisk information. Et teledermatologiforløb, der bruger billedbaseret triage på samme platform, opnår en median behandlingstid på 4 timer og en 90.-percentil på 1 dag, fordi et fotografi og en struktureret anamnese næsten altid er tilstrækkelige til triage-beslutningen uden behov for yderligere korrespondance.

## Datakilder og forbehold

E-henvisnings- eller henvisningsstyringssystemets eget revisionsspor er hovedkilden, ved brug af indsendelses- og beslutningstidsstempler; organisationer bør bekræfte, om "uret" stopper, mens en henvisning returneres for yderligere information, eller om det kører kontinuerligt, da de to definitioner giver væsentligt forskellige tal for den samme underliggende proces. Behandlingstid bør rapporteres konsekvent i kalendertid eller arbejdstidstid, da weekend- og helligdagseffekter ellers kan forvrænge sammenligninger mellem tjenester med forskellige arbejdsmønstre.

## Faldgruber

- **At måle kun "rene" henvisninger**: at udelukke afviste eller returnerede henvisninger fra beregningen skjuler den genarbejdsbyrde, som digitale værktøjer ofte specifikt er beregnet til at reducere.
- **At rapportere gennemsnittet i stedet for medianen og percentiler**: et lille antal langvarige, returnerede henvisninger vil trække gennemsnittet langt over den typiske patients faktiske oplevelse.
- **At forveksle behandlingstid med samlet ventetid**: behandlingstid dækker kun triage-trinnet; patientens samlede oplevelse inkluderer også den efterfølgende kliniske venteliste, som er en separat metrik styret af separate kapacitetsbegrænsninger.
- **Ikke at skelne mellem deltrin**: en tjeneste, der kun måler ende-til-ende-tid, kan ikke afgøre, om et langsomt tal skyldes henvisere, der indsender ufuldstændig information, den modtagende tjenestes triage-kapacitet, eller begge dele.

## Kilder

- NHS England, e-Referral Service (e-RS)-statistik og servicespecifikationer
- Fagfællebedømt litteratur om elektroniske henvisningsstyringssystemer og digitale triage-forløb, herunder teledermatologi
- ONC / HealthIT.gov, vejledning om interoperabilitet og henvisningskoordinering
