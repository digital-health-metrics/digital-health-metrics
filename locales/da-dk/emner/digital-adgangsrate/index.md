# Digital Adgangsrate

Den digitale adgangsrate måler andelen af en berettiget patientpopulation, der overhovedet har de praktiske midler til at bruge et digitalt sundhedsprodukt: en bredbåndsforbindelse eller pålidelig mobildata, en enhed med internetadgang og en aktiv konto på den relevante patientportal eller app. Det er forudsætningsmetrikken for alle andre digitale sundhedsmål i denne bog: en population kan ikke registrere sig til, engagere sig i eller få gavn af noget digitalt sundhedsprodukt, som den strukturelt ikke kan nå, uanset hvor godt produktet er designet.

## Hvorfor dette er vigtigt

Metrikker for adoption og engagement inden for digital sundhed forudsætter implicit en population, der allerede har digital adgang. Hvis man rapporterer adoptions- eller engagementsrater uden først at fastslå den underliggende adgangsrate, risikerer man i det stille at udelukke de patienter, der er mindst tilbøjelige til at have den adgang, og som ofte også er dem med det største sundhedsbehov. HIMSS' Digital Health Equity Measurement Framework (DHEMF) og lignende rammeværker behandler digital adgang som en grundlæggende ligheds-metrik af første orden, netop fordi indsatser, der er bygget uden hensyn til adgangsforskelle, har tendens til at forstærke i stedet for at udligne eksisterende sundhedsforskelle: en telehealth-først-strategi kan utilsigtet mindske adgangen til pleje for patienter uden en pålidelig forbindelse eller enhed, selv om den målbart forbedrer oplevelsen for patienter, der allerede havde begge dele. Den digitale adgangsrate bør følges og rapporteres opdelt på demografiske og geografiske segmenter, da landsdækkende gennemsnit eller gennemsnit for hele organisationen rutinemæssigt skjuler store forskelle for bestemte populationer.

## Hvordan det beregnes

```
Digital adgangsrate = patienter med bredbånds-/mobilforbindelse OG en enhed
                      med internetadgang OG en aktiv konto på patientportal
                      eller app / samlet berettiget patientpopulation × 100

Rapportér hver delkomponent separat ud over den samlede rate:
  Forbindelsesrate    = patienter med en pålidelig internetforbindelse /
                        berettiget population × 100
  Enhedsejerskabsrate = patienter med en enhed med internetadgang /
                        berettiget population × 100
  Portalaktiveringsrate = patienter med en aktiv portal-/appkonto /
                        berettiget population × 100 (se patientportal-
                        adoptionsraten for den fulde adoptionstragt)
```

## Gennemarbejdet eksempel

Et sundhedssystem betjener en berettiget population på 40.000 patienter. En patientundersøgelse og infrastrukturdata viser, at 34.000 (85 %) har en pålidelig bredbånds- eller mobilforbindelse, at 33.000 (82,5 %) har en enhed med internetadgang, og at 27.000 af de patienter, der opfylder begge betingelser (67,5 % af hele den berettigede population), har en aktiv konto på patientportalen. Opdeles der efter alder, har patienter på 65 år og derover en samlet digital adgangsrate på kun 48 % sammenlignet med 78 % for patienter under 65 år. Det er en forskel, som gennemsnittet på 67,5 % for hele organisationen helt skjuler, og som direkte bør afgøre, om en given tjeneste trygt kan tilbydes udelukkende digitalt til denne population.

## Datakilder og forbehold

Data om forbindelse og enhedsejerskab stammer typisk fra en kombination af patienternes egne oplysninger (via undersøgelse eller indskrivningsspørgeskema), nationale kortlægningsdata om bredbåndsdækning, fx fra Federal Communications Commission (FCC) eller tilsvarende, for patientens geografiske område, og data om portalaktivering fra organisationens egne systemer. Bredbåndsdækning på områdeniveau (om en udbyder tilbyder service i et givent postnummer) er en svagere stedfortræder end forbindelse på husstandsniveau, da data om områdedækning intet siger om, hvorvidt en bestemt patient faktisk har råd til eller har valgt at abonnere på tjenesten. Adgangsrater på områdeniveau og på husstandsniveau bør ikke blandes sammen. Adgang til enheder og forbindelse kan også deles i en husstand (fx én smartphone, som flere familiemedlemmer bruger), hvilket spørgeskemadata på husstandsniveau fanger bedre end data om portallogin på individniveau alene.

## Faldgruber

- **At rapportere kun et gennemsnit for hele organisationen**: det skjuler pålideligt store adgangsforskelle for ældre, lavindkomst-, landdistrikts- eller på anden måde digitalt marginaliserede patientsegmenter; opdel altid efter demografiske og geografiske segmenter.
- **At forveksle bredbåndsdækning på områdeniveau med faktisk adgang i husstanden**: at et postnummer "betjenes" af en bredbåndsudbyder betyder ikke, at hver husstand i området abonnerer på eller har råd til tjenesten.
- **At behandle enhedsejerskab som et engangsfaktum, der ikke ændrer sig**: adgang til en enhed kan være midlertidig (en aldrende enhed, en mistet eller beskadiget telefon, en delt familieenhed, der er givet til en anden), så adgangsraten bør måles løbende og ikke antages at være stabil, når den først er vurderet.
- **At designe et udelukkende digitalt forløb, før adgangsraten for den berørte population er fastlagt**: at flytte en tjeneste til udelukkende digital uden først at bekræfte målpopulationens faktiske digitale adgangsrate risikerer i det stille at udelukke netop de patienter, der har sværest ved at nå en alternativ kanal.

## Kilder

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), nationale data om bredbåndsdækning og digital ligestilling
- Pew Research Center, forskning i adgang til internet, bredbånd og enheder og i tendenser i den digitale kløft på tværs af demografiske grupper

Se også: [digital sundhedskompetencerate](../digital-sundhedskompetencerate/), den nært beslægtede metrik for, om patienter, der har adgang, faktisk kan bruge den uden hjælp.
