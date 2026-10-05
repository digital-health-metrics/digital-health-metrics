# Telemedicinsk Besøgsrate

Telemedicinsk besøgsrate er den andel af en tjenestes samlede kontakter, der leveres på afstand, via video eller telefon, i stedet for personligt fremmøde. Det er en metrik for leveringskanal-mix, ikke en aktivitetsmetrik: den fortæller, hvordan pleje leveres, hvilket er vigtigt for kapacitetsplanlægning, adgang og klinisk hensigtsmæssighed, helt adskilt fra hvor meget pleje der leveres i alt.

## Hvorfor dette er vigtigt

Andelen af pleje leveret på afstand ændrede driftsmodellen for mange tjenester efter den hurtige udvidelse af virtuelle konsultationer under covid-19-pandemien, og organisationer har brug for en stabil måde at overvåge, om dette skift opretholdes, glider tilbage mod førpandemiske normer, eller aktivt styres af politik. Telemedicin er ikke en ensartet erstatning for et personligt besøg: hensigtsmæssighed varierer efter speciale, efter type konsultation (en medicingennemgang forløber meget anderledes end en fysisk undersøgelse), og efter patientpræference, så den "rigtige" rate er en klinisk og operationel vurdering, ikke et mål, der skal maksimeres. Finansieringskilder og tilsynsmyndigheder bruger også denne rate sammen med resultat- og sikkerhedsmål til at fastlægge refusionspolitik og til at kontrollere, at fjernpleje ikke blot erstattes ind i sager, der skal ses personligt.

## Hvordan det beregnes

```
Telemedicinsk besøgsrate = telemedicinske kontakter / (telemedicinske kontakter + personlige kontakter) × 100

Rapportér separat efter modalitet, hvor det er muligt:
  Videorate    = videokontakter / samlede kontakter × 100
  Telefonrate  = kun telefonkontakter / samlede kontakter × 100

Nævneren bør kun tælle fuldførte kontakter (se faldgruber), for en
defineret tjeneste, speciale og tidsperiode.
```

## Gennemarbejdet eksempel

En kommunal psykiatrisk tjeneste registrerer 4.000 fuldførte ambulante kontakter i et kvartal: 1.200 personligt, 1.600 via video og 1.200 via telefon. Den telemedicinske besøgsrate er (1.600 + 1.200) / 4.000 × 100 = 70%, med en videorate på 40% og en ren telefonrate på 30%. At rapportere kun det kombinerede 70%-tal ville skjule, at en stor andel af "telemedicin" her udelukkende er lyd, hvilket typisk medfører en anden klinisk risikoprofil og patientoplevelse end video.

## Datakilder og forbehold

Kontakttype registreres normalt enten som et struktureret felt i den elektroniske patientjournal (besøgstype eller lokation) eller udledes fra faktureringskoder, såsom en servicestedskode eller en telemedicin-modifikator på et krav. Kodningspraksis varierer betydeligt mellem organisationer og endda mellem klinikere i samme organisation, så en ratesammenligning på tværs af lokationer bør først bekræfte, at "telemedicin" kodes på samme måde alle steder. Et besøg, der starter som video, men skifter til telefon på grund af et teknisk problem, bør kodes konsekvent (normalt som den modalitet, der bar det meste af det kliniske indhold), og denne regel bør dokumenteres frem for at blive overladt til individuel vurdering.

## Faldgruber

- **At tælle forsøgte i stedet for fuldførte besøg**: en telemedicinsk aftale, der ikke kan forbinde og bookes om, bør ikke fordoble den telemedicinske nævner.
- **At behandle video og telefon som ombyttelige**: de har forskellige kliniske og lighedsmæssige implikationer (telefon udelukker visuel vurdering, men er mere tilgængelig for patienter uden smartphone, pålidelig data eller et privat rum til video); rapportér dem altid separat, hvor det er muligt.
- **At ignorere sammenhængen med udeblivelser**: udeblivelsesadfærd varierer ofte efter modalitet; se [udeblivelsesrate for aftaler](../udeblivelsesrate-for-aftaler/), før du drager konklusioner om "forbedret adgang" udelukkende fra en stigende telemedicinsk rate.
- **At behandle en høj rate som iboende god**: for nogle tilstande og konsultationstyper er en passende telemedicinsk rate lav på grund af klinisk design, ikke på grund af digital modenhedssvigt.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), Medicare-data om telemedicinanvendelse og politikpublikationer
- NHS England, aktivitetsstatistik for ambulant og kommunal service, herunder opdelinger af virtuelt/fjernfremmøde
- Fagfællebedømt litteratur om trends i telemedicinanvendelse og modalitetsspecifikke resultater
