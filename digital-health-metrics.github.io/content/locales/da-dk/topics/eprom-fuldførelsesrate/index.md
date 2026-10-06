# ePROM-Fuldførelsesrate

ePROM-fuldførelsesraten måler andelen af planlagte elektroniske patientrapporterede resultatmål (ePROM), som patienter rent faktisk udfylder, inden for et defineret indsamlingsvindue. ePROM'er er strukturerede spørgeskemaer, der indfanger en patients egen vurdering af deres symptomer, funktion eller livskvalitet, og fordi hele værdien af et ePROM-program afhænger af, at patienter rent faktisk svarer, er fuldførelsesraten den grundlæggende metrik, der bestemmer, om de indsamlede data overhovedet kan stoles på.

## Hvorfor det betyder noget

En lav ePROM-fuldførelsesrate underminerer ikke kun datakvaliteten statistisk, men introducerer også en specifik klinisk bekymring: patienter, der har det dårligst, er ofte dem, der er mindst tilbøjelige til at udfylde et spørgeskema, hvilket betyder, at en faldende fuldførelsesrate i sig selv kan være et klinisk signal snarere end blot et databehandlingsproblem. Et sundhedssystem, der bygger kliniske beslutninger eller kvalitetsrapportering på ePROM-data med en lav eller faldende fuldførelsesrate, risikerer at basere disse beslutninger på en ikke-repræsentativ delmængde af sin patientpopulation, typisk skævvredet mod patienter, der har det relativt bedre. Fordi ePROM'er i stigende grad bruges til at drive kliniske beslutninger i realtid (f.eks. at udløse en klinisk gennemgang, når en patients rapporterede symptomscore forværres), er fuldførelsesraten også en direkte afgørende faktor for, hvor pålideligt disse automatiserede kliniske arbejdsgange fungerer.

## Hvordan det beregnes

```
ePROM-fuldførelsesrate = udfyldte ePROM-besvarelser / samlet
                         antal planlagte ePROM-anmodninger i
                         indsamlingsvinduet × 100

Rapporter altid sammen med:
  Fuldførelsesrate efter patientundergruppe (alder, sygdomsalvor,
  tid siden diagnose) for at afsløre, om manglende besvarelser er
  tilfældigt fordelt eller koncentreret blandt bestemte
  patientgrupper
```

## Et gennemarbejdet eksempel

Et onkologiafdeling implementerer ugentlige ePROM-spørgeskemaer for at spore symptombyrde hos patienter i aktiv behandling. I den første måned er den samlede fuldførelsesrate 75%, hvilket lyder rimeligt, men segmentering efter sygdomsalvor afslører, at fuldførelsesraten blandt patienter med den højeste rapporterede symptombyrde ved deres seneste besvarelse er kun 55%, sammenlignet med 85% blandt patienter med lav symptombyrde. Dette mønster antyder, at de patienter, der har mest brug for at blive overvåget tæt, er netop dem, der er mindst tilbøjelige til at svare — en kritisk indsigt, der ville have været fuldstændig skjult af det samlede fuldførelsestal på 75%, og som fik afdelingen til at tilføje et telefonopfølgningsprotokol for patienter, der går glip af en ePROM-anmodning.

## Datakilder og forbehold

ePROM-fuldførelsesdata kommer typisk direkte fra den digitale platform, der leverer spørgeskemaerne, hvilket gør denne metrik relativt ligetil at beregne sammenlignet med mange andre i denne bog, men fortolkningen kræver omhyggelig opmærksomhed på, hvorfor besvarelser mangler. En faldende fuldførelsesrate kan skyldes spørgeskematræthed (for hyppige eller for lange spørgeskemaer), teknisk adgangsbesvær (patienter uden pålidelig internetadgang) eller et reelt klinisk signal (patienter, der har det for dårligt til at svare), og disse tre årsager kræver meget forskellige interventioner.

## Faldgruber

- **Rapportering af et samlet fuldførelsestal uden segmentering**: dette kan skjule, at manglende besvarelser er koncentreret blandt de patienter, hvis data er mest klinisk vigtige at indsamle.
- **Antagelse af, at en faldende fuldførelsesrate udelukkende er et teknisk problem**: en faldende rate kan være et klinisk signal om forværrende patienttilstand snarere end blot brugeroplevelsesfriktion.
- **Ignorering af spørgeskematræthed som en årsag**: for hyppige eller for lange ePROM-anmodninger reducerer fuldførelsesraten over tid uafhængigt af patienternes kliniske tilstand.
- **Behandling af ufuldstændige data, som om de var tilfældigt manglende**: at analysere kun fuldførte ePROM'er uden at overveje, hvorfor de resterende mangler, kan føre til systematisk skæve kliniske konklusioner.

## Kilder

- International Society for Quality of Life Research (ISOQOL), retningslinjer for implementering af elektroniske patientrapporterede resultater
- U.S. Food and Drug Administration (FDA), retningslinjer for patientrapporterede resultatmål til klinisk brug
- Collegialt bedømt litteratur om ePROM-fuldførelse og manglende data, f.eks. undersøgelser offentliggjort i Journal of Clinical Oncology og Quality of Life Research

Se også: [patientens nettoanbefalingsscore](../patientens-nettoanbefalingsscore/), en relateret men adskilt patientrapporteret metrik, der måler tilfredshed snarere end klinisk resultat.
