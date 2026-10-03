# Medicinefterlevelsesrate

Medicinefterlevelsesraten måler, i hvilket omfang en patient indtager en ordineret medicin som foreskrevet, typisk udtrykt som andelen af dage i en defineret periode, hvor patienten havde adgang til medicinen som ordineret. Det er en af de mest konsekvensfulde digitale sundhedsmetrikker, fordi manglende efterlevelse er udbredt, stort set forebyggelig med den rette støtte, og direkte forbundet med dårligere kliniske resultater og højere nedstrøms omkostninger — præcis det hul, som medicinpåmindelsesapps, intelligente pilledåser og apoteksgenbestillingsmeddelelser er bygget til at lukke.

## Hvorfor det betyder noget

Manglende medicinefterlevelse er forbundet med en betydelig andel af forebyggelige hospitalsindlæggelser og forværrede kroniske tilstande, hvilket gør den til et af de mest målbare og handlingsorienterede mål for digital sundhedsintervention. I modsætning til mange digitale sundhedsresultater, der kræver langsigtet opfølgning for at vurdere, kan efterlevelse måles næsten i realtid gennem tilsluttede pilledåser, apoteksgenbestillingsdata eller elektroniske overvågningssystemer, hvilket gør det muligt for et program at identificere og gribe ind over for faldende efterlevelse, før det fører til et klinisk resultat. Fordi efterlevelse er så tæt knyttet til omkostninger nedstrøms — en patient, der ikke tager sin blodtryksmedicin, har en forhøjet risiko for et dyrt akut besøg — er det også en af de lettest kommunikerede forretningscases for digital sundhedsinvestering over for en betaler eller sundhedssystem.

## Hvordan det beregnes

```
Medicinefterlevelsesrate = dage med adgang til medicin som
                           ordineret / samlet antal dage i den
                           målte periode × 100

Den mest almindelige konkrete beregning er Proportion of Days
Covered (PDC):
  PDC = dage dækket af genbestilt medicin / dage i måleperioden
        × 100

En PDC på 80% eller derover anvendes bredt som den klinisk
accepterede tærskel for "tilstrækkelig efterlevelse" for de fleste
kroniske medicintyper, selvom den passende tærskel varierer efter
tilstand og medicinklasse.
```

## Et gennemarbejdet eksempel

En patient ordineres en blodtrykssænkende medicin til daglig indtagelse i en måleperiode på 90 dage. Apoteksgenbestillingsdata viser, at patienten hentede nok medicin til at dække 72 af de 90 dage, hvilket giver en PDC på 80% — lige ved den almindeligt anvendte tilstrækkelighedstærskel. Et digitalt påmindelsesprogram griber ind med dagligt sms-baserede påmindelser til patienter, hvis genbestillingsmønster antyder forestående huller, og ved den næste måleperiode stiger patientens PDC til 94%. At rapportere denne forbedring kræver sammenligning af den samme patients PDC over tid eller sammenligning af en interventionsgruppe mod en matchet kontrolgruppe, ikke blot en øjebliksbilledemåling.

## Datakilder og forbehold

Apoteksgenbestillingsdata (Proportion of Days Covered) er den mest almindeligt anvendte og skalerbare kilde, men den måler kun, om patienten hentede medicinen, ikke om de rent faktisk indtog den som ordineret — en patient kan hente en genbestilling og alligevel springe doser over. Tilsluttede pilledåser og elektroniske overvågningssystemer giver mere præcise data om faktisk indtagelse, men er dyrere at implementere og kræver patientens aktive deltagelse i overvågningssystemet, hvilket kan introducere sin egen selektionsbias mod mere engagerede patienter.

## Faldgruber

- **Forveksling af genbestilling med faktisk indtagelse**: apoteksgenbestillingsdata beviser kun, at patienten fik medicinen, ikke at de indtog den som ordineret; vær eksplicit om, hvilken slags efterlevelse der måles.
- **Anvendelse af en enkelt universel tærskel på tværs af medicintyper**: den klinisk meningsfulde efterlevelsestærskel varierer betydeligt efter medicinklasse og tilstand; en 80%-tærskel passende til en statin er muligvis ikke passende for et antibiotikum.
- **Ignorering af primær manglende efterlevelse**: en patient, der aldrig henter en ny ordination overhovedet, vises ikke i genbestillingsbaserede efterlevelsesdata, hvilket betyder, at disse metrikker systematisk kan overvurdere den sande efterlevelsesrate for en population.
- **Rapportering af efterlevelsesforbedring uden en sammenligningsgruppe**: efterlevelse svinger naturligt over tid af årsager, der ikke er relateret til en intervention; en før-efter-sammenligning uden kontrolgruppe kan tilskrive en interventions tilfældig variation.

## Kilder

- Pharmacy Quality Alliance (PQA), standarddefinitioner og -metoder for Proportion of Days Covered
- World Health Organization, rapport om efterlevelse ved langtidsbehandling
- Collegialt bedømt litteratur om digitale interventioners indvirkning på medicinefterlevelse, f.eks. undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR) og npj Digital Medicine

Se også: [biometrisk forbedringsrate](../biometric-improvement-rate/), for hvilken medicinefterlevelse ved kroniske sygdomme er en vigtig drivkraft.
