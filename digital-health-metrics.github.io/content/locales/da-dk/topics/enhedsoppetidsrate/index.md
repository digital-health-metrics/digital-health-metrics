# Enhedsoppetidsrate

Enhedsoppetidsraten måler andelen af den planlagte overvågningstid, hvor en tilsluttet sundhedsenhed (en sensor til fjernovervågning af patienter, en bærbar enhed eller en telehealth-enhed i hjemmet) faktisk er online, sender data og fungerer korrekt, i stedet for at være offline, frakoblet eller fejlbehæftet. Det er den grundlæggende infrastrukturmetrik under ethvert program for fjernovervågning eller tilsluttede enheder: en klinisk alarm, en biometrisk tendens eller et engagementstal, der er beregnet ud fra en enhed, som ofte var offline, er kun så pålidelig som den forbindelse, der ligger bag.

## Hvorfor dette er vigtigt

Hele den kliniske værdi af et program for fjernovervågning af patienter afhænger af kontinuerlig eller næsten kontinuerlig dataindsamling. En enhed med dårlig oppetid skaber lydløse huller i en patients kliniske billede, som kan forveksles med stabilitet (ingen alarm, fordi der ingen data er, ikke fordi intet har ændret sig), i stedet for korrekt at blive identificeret som en svigtende overvågning. Enhedsoppetid er også en ledende indikator for programmets omkostninger og patientoplevelsen: en enhed, der ofte mister forbindelsen, giver supportopkald, frustrerede patienter og potentielt unødvendig klinisk kontakt for at undersøge, om et datahul afspejler en reel klinisk hændelse eller blot en teknisk fejl. Fordi svigt i enhedsoppetid ofte kan føres tilbage til infrastruktur, som organisationen selv kontrollerer (en dårligt konfigureret mobil gateway, svag wi-fi-dækning i patientens hjem, en dårligt vedligeholdt enhedsflåde), snarere end til patienten, hører denne metrik klart hjemme hos leverandøren og det tekniske driftsteam og bør ikke vilkårligt blandes ind i metrikker for patientengagement.

## Hvordan det beregnes

```
Enhedsoppetidsrate = tid, enheden var online og sendte gyldige data /
                     samlet planlagt overvågningstid × 100

Opdel årsagerne til nedetid, hvor data tillader det:
  Fejl på enhedssiden       (batteri, hardwarefejl, firmwarenedbrud)
  Forbindelsesfejl          (udfald af mobil/wi-fi/VPN)
  Faktorer på patientsiden  (enhed slukket, flyttet uden for rækkevidde)

Understøttende tekniske parametre, der bør følges ved siden af oppetid:
  Gennemsnitligt CPU-forbrug, hukommelsesforbrug og batteriniveau pr. enhed
  Gennemsnitlig tid mellem forbindelsesfejl
  Gennemsnitlig tid til genetablering af forbindelsen efter et udfald
```

## Gennemarbejdet eksempel

Et program for kardiologisk fjernovervågning udruller 1.000 tilsluttede enheder, som hver forventes at sende kontinuerligt. Over en måned på 30 dage (720 planlagte overvågningstimer pr. enhed) registrerer flåden i alt 705.600 faktiske onlinetimer mod 720.000 planlagte timer, hvilket giver en oppetidsrate for hele flåden på 705.600 / 720.000 × 100 = 98 %. En årsagsanalyse af de 14.400 timers nedetid viser, at 60 % skyldes udfald i mobilforbindelsen, koncentreret i en bestemt landdistriktsregion, 25 % skyldes enheder med aldrende batterier, der er markeret til udskiftning, og 15 % skyldes, at patienter midlertidigt har slukket deres enhed. Denne opdeling peger på to klare, forskellige indsatser, nemlig en løsning på forbindelsesproblemet i den berørte region og et proaktivt program til udskiftning af batterier, som et enkelt samlet oppetidstal ikke ville have kunnet skelne mellem.

## Datakilder og forbehold

Oppetidsdata kommer fra enhedsproducentens eller platformleverandørens eget system til enhedsstyring og telemetri, som logger forbindelses- og hjerteslagshændelser pr. enhed. Organisationen bør bekræfte præcis, hvad leverandøren tæller som "online": en enhed kan rapportere, at den er forbundet til et netværk, og alligevel undlade at sende gyldige kliniske data, og det bør tælle som nedetid i klinisk sammenhæng, selv om leverandørens eget dashboard viser den som forbundet. Oppetid bør rapporteres pr. enhedskohorte eller geografi, hvor volumen tillader det, da forbindelseskvaliteten ofte er geografisk koncentreret (landdistrikternes mobildækning, ældre bygningers wi-fi) i stedet for jævnt fordelt over en patientpopulation, og et samlet tal for hele flåden kan skjule et alvorligt regionalt problem, som man kan gøre noget ved.

## Faldgruber

- **At forveksle netværksforbindelse med gyldig dataoverførsel**: en enhed kan se "forbundet" ud på en leverandørs dashboard, mens den ikke sender brugbare kliniske data; definér og mål oppetid ud fra faktisk modtagne gyldige data og ikke blot rå netværksforbindelse.
- **Kun at rapportere et gennemsnit for hele flåden**: det kan skjule et alvorligt nedetidsproblem, der er knyttet til en bestemt geografi eller enhedskohorte, og som et målrettet gennemsnit ville afsløre, og som har en konkret løsning.
- **Ikke at skelne mellem årsagerne til nedetid**: nedetid på enhedssiden, nedetid i forbindelsen og nedetid på patientsiden kræver hver en helt forskellig indsats; en enkelt nedetidsprocent uden opdeling efter årsag kan man ikke handle på.
- **Som standard at behandle et datahul som klinisk stabilitet**: en manglende datastrøm fra en offlineenhed bør udløse en teknisk kontrol af forbindelsen og ikke i det stille fortolkes som "ingen nyheder er gode nyheder" for patientens kliniske tilstand.

## Kilder

- Continua Design Guidelines / Personal Connected Health Alliance, tekniske interoperabilitetsstandarder for tilsluttede sundhedsenheder
- ONC / HealthIT.gov, vejledning om implementering og tekniske krav for programmer til fjernovervågning af patienter
- Peer reviewet litteratur om pålidelighed og datafuldstændighed ved enheder til fjernovervågning af patienter, for eksempel undersøgelser offentliggjort i npj Digital Medicine

Se også: [nøjagtighed af triage-henvisning](../nøjagtighed-af-triage-henvisning/), som afhænger af at modtage fuldstændige og pålidelige enhedsdata for overhovedet at kunne træffe en korrekt triageringsbeslutning.
