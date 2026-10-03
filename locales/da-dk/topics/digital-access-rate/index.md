# Digital Adgangsrate

Digital adgangsrate måler andelen af en patientpopulation, der har de grundlæggende forudsætninger, der kræves for at bruge et digitalt sundhedsværktøj overhovedet — pålidelig internetadgang, en kompatibel enhed og en grundlæggende konto eller portaladgang — til forskel fra om de rent faktisk bruger værktøjet effektivt. Den er forudsætningsmetrikken for hver anden digital sundhedsmetrik i denne bog: ingen anden metrik betyder noget for en patient, der aldrig har adgang til værktøjet overhovedet.

## Hvorfor det betyder noget

Digitale sundhedsprogrammer evalueres ofte udelukkende baseret på resultater blandt patienter, der rent faktisk bruger dem, hvilket systematisk ekskluderer de patienter, der aldrig fik adgang til værktøjet i første omgang — og disse ekskluderede patienter er ofte uforholdsmæssigt lavindkomst, ældre eller fra marginaliserede samfund, der allerede står over for sundhedsmæssige uligheder. En virksomhed, der rapporterer imponerende resultater udelukkende blandt sine digitalt forbundne brugere, mens den er tavs om, hvor stor en andel af sin målpopulation der aldrig fik adgang til værktøjet, maler et ufuldstændigt og potentielt vildledende billede af programmets samlede retfærdighedseffekt. At spore digital adgangsrate eksplicit tvinger organisationer til at konfrontere, hvem deres digitale værktøj rent faktisk tjener, versus hvem det ikke når, hvilket er særligt vigtigt, da sundhedssystemer i stigende grad er afhængige af digitale værktøjer som en primær plejeleveringskanal.

## Hvordan det beregnes

```
Digital adgangsrate = patienter med pålidelig internetadgang,
                      kompatibel enhed og aktiv kontoadgang /
                      samlet antal patienter i målpopulationen
                      × 100

Rapporter altid segmenteret efter demografiske faktorer kendt for
at korrelere med digital udelukkelse:
  Adgangsrate efter aldersgruppe
  Adgangsrate efter indkomstniveau eller forsikringstype
  Adgangsrate efter geografisk område (by/landdistrikt)
  Adgangsrate efter foretrukket sprog
```

## Et gennemarbejdet eksempel

Et sundhedssystem lancerer et digitalt kronisk sygdomsstyringsprogram for sin samlede diabetespatientpopulation på 10.000 patienter. En digital adgangsundersøgelse finder, at 7.500 patienter (75%) har pålidelig internetadgang og en kompatibel enhed. Men segmentering efter alder afslører, at adgangsraten blandt patienter over 65 år er kun 50%, sammenlignet med 90% blandt patienter under 50, og segmentering efter foretrukket sprog viser en adgangsrate på 60% blandt spansktalende patienter sammenlignet med 82% blandt engelsktalende patienter. Disse huller fik sundhedssystemet til at udvikle et supplerende telefonbaseret program specifikt for patienter uden digital adgang, i stedet for blot at rapportere sine kliniske resultater baseret på den digitalt forbundne delmængde af sin population.

## Datakilder og forbehold

At måle digital adgangsrate pålideligt kræver aktivt at undersøge eller på anden måde verificere adgang på tværs af hele målpopulationen, ikke blot blandt patienter, der allerede har tilmeldt sig det digitale program — en organisation, der kun måler adgang blandt tilmeldte brugere, lærer intet om den delmængde af sin population, der aldrig tilmeldte sig i første omgang, netop den gruppe, denne metrik er designet til at afsløre. Digital adgang er også en bevægelig målstreg, da enhedsejerskab og internetadgang ændrer sig over tid, hvilket betyder, at adgangsrater bør genvurderes periodisk snarere end målt én gang og antaget stabile.

## Faldgruber

- **Måling af adgang kun blandt allerede tilmeldte brugere**: dette ekskluderer netop den population, metrikken er designet til at afsløre — dem, der aldrig fik adgang overhovedet.
- **Rapportering af et samlet adgangstal uden demografisk segmentering**: digital udelukkelse er sjældent tilfældigt fordelt; segmentering efter alder, indkomst, geografi og sprog afslører, hvilke specifikke populationer der er udelukket.
- **Antagelse af, at enhedsejerskab svarer til funktionel adgang**: en patient kan eje en smartphone, men mangle tilstrækkelig dataplan, digital kompetence eller tillid til at bruge den til sundhedsformål.
- **Behandling af digital adgang som en statisk egenskab**: adgang ændrer sig over tid med enhedsejerskab, finansielle omstændigheder og teknologisk kompetence; genvurder periodisk snarere end at antage stabilitet.

## Kilder

- Pew Research Center, forskning i internet- og enhedsadgang på tværs af demografiske grupper
- Office of the National Coordinator for Health Information Technology (ONC), rapporter om digital sundhedsrelateret ulighed
- Collegialt bedømt litteratur om digital sundhedsrelateret ulighed, f.eks. undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR) og Health Affairs

Se også: [digital sundhedskompetencerate](../digital-literacy-rate/), den nært beslægtede metrik for, om patienter, der har adgang, rent faktisk kan bruge den uden hjælp.
