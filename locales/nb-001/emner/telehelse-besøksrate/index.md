# Telehelse-besøksrate

Telehelse-besøksrate er andelen av en tjenestes totale kontakter som leveres eksternt, via video eller telefon, i stedet for personlig. Det er en metrikk for leveringskanal-miks, ikke en aktivitetsmetrikk: den forteller hvordan omsorg leveres, noe som er viktig for kapasitetsplanlegging, tilgang og klinisk hensiktsmessighet, helt separat fra hvor mye omsorg som leveres totalt.

## Hvorfor dette er viktig

Andelen omsorg levert eksternt endret driftsmodellen til mange tjenester etter den raske ekspansjonen av virtuelle konsultasjoner under covid-19-pandemien, og organisasjoner trenger en stabil måte å overvåke om dette skiftet opprettholdes, glir tilbake mot normer fra før pandemien, eller aktivt styres av politikk. Telehelse er ikke en enhetlig erstatning for et personlig besøk: hensiktsmessighet varierer etter spesialitet, etter type konsultasjon (en medisingjennomgang oppfører seg svært annerledes enn en fysisk undersøkelse), og etter pasientpreferanse, så den "riktige" raten er en klinisk og operasjonell vurdering, ikke et mål å maksimere. Finansiører og tilsynsmyndigheter bruker også denne raten, sammen med resultat- og sikkerhetsmål, for å avgjøre refusjonspolitikk og for å sjekke at ekstern omsorg ikke bare erstatter saker som må ses personlig.

## Hvordan det beregnes

```
Telehelse-besøksrate = telehelsekontakter / (telehelsekontakter + personlige kontakter) × 100

Rapporter separat etter modalitet der det er mulig:
  Videorate    = videokontakter / totale kontakter × 100
  Telefonrate  = kun telefonkontakter / totale kontakter × 100

Nevneren bør kun telle fullførte kontakter (se fallgruver), for en
definert tjeneste, spesialitet og tidsperiode.
```

## Gjennomarbeidet eksempel

En kommunal psykisk helsetjeneste registrerer 4 000 fullførte poliklinikkontakter i et kvartal: 1 200 personlig, 1 600 via video og 1 200 via telefon. Telehelse-besøksraten er (1 600 + 1 200) / 4 000 × 100 = 70 %, med en videorate på 40 % og en telefonrate på 30 %. Å rapportere bare det kombinerte 70 %-tallet ville skjule at en stor andel av "telehelse" her kun er lyd, som vanligvis bærer en annen klinisk risikoprofil og pasientopplevelse enn video.

## Datakilder og forbehold

Kontakttype registreres vanligvis enten som et strukturert felt i den elektroniske pasientjournalen (besøkstype eller sted) eller utledes fra faktureringskoder, som en tjenestestedkode eller en telehelse-modifikator på et krav. Kodepraksis varierer betydelig mellom organisasjoner og til og med mellom klinikere i samme organisasjon, så en ratesammenligning mellom steder bør først bekrefte at "telehelse" kodes likt på hvert sted. Et besøk som starter som video, men går over til telefon på grunn av et teknisk problem, bør kodes konsekvent (vanligvis som modaliteten som bar mesteparten av det kliniske innholdet), og denne regelen bør dokumenteres i stedet for å overlates til individuell vurdering.

## Fallgruver

- **Telle forsøkte i stedet for fullførte besøk**: en telehelsetime som ikke klarer å koble til og bookes på nytt, bør ikke doble opp telehelse-nevneren.
- **Behandle video og telefon som utskiftbare**: de har ulike kliniske og likhetsmessige implikasjoner (telefon utelukker visuell vurdering, men er mer tilgjengelig for pasienter uten smarttelefon, pålitelig data, eller privat rom for video); rapporter dem alltid separat der det er mulig.
- **Ignorere sammenhengen med uteblivelser**: uteblivelsesatferd varierer ofte etter modalitet; se [uteblivelsesrate for avtaler](../uteblivelsesrate-for-avtaler/) før du trekker konklusjoner om "bedret tilgang" bare fra en stigende telehelserate.
- **Behandle en høy rate som iboende bra**: for noen tilstander og konsultasjonstyper er en passende telehelserate lav på grunn av klinisk design, ikke på grunn av digital modenhetssvikt.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), Medicare-data om telehelsebruk og politikkpublikasjoner
- NHS England, aktivitetsstatistikk for poliklinikk- og kommunale tjenester, inkludert fordelinger av virtuelt/eksternt oppmøte
- Fagfellevurdert litteratur om telehelsebruk og modalitetsspesifikke resultater
