# Utbrenthetsrate blant Leger

Utbrenthetsrate blant leger måler andelen klinikere som rapporterer betydelige symptomer på utbrenthet, vanligvis vurdert som emosjonell utmattelse, depersonalisering eller en lav følelse av personlig mestring via et validert spørreskjema, og for digital helse spesielt følges den sammen med mål på belastningen fra digitale verktøy for klinikere, som tid brukt på papirarbeid eller dokumentasjon i elektronisk pasientjournal (EPJ). Den hører hjemme i et rammeverk for digitale helsemetrikker fordi dårlig utformet klinisk programvare er et veldokumentert, målbart bidrag til utbrenthet, og et digitalt helseverktøys suksess bør aldri vurderes utelukkende ut fra pasientvendte metrikker mens effekten på klinikerne som må betjene det ignoreres.

## Hvorfor dette er viktig

Digitale helseverktøy innføres ofte med det eksplisitte målet å redusere klinikernes administrative byrde, men en dårlig utformet arbeidsflyt i elektronisk pasientjournal, et overdrevent volum av kliniske varsler med lav verdi (se overstyringsrate for kliniske varsler) eller et klønete telehelsegrensesnitt kan like gjerne øke utbrentheten som redusere den, og et verktøy som forbedrer en pasientvendt engasjementsmetrikk mens det stille øker klinikernes dokumentasjonsbyrde har ikke levert et netto positivt utfall for helsetjenesten som helhet. Utbrenthet er i den kliniske litteraturen sterkt knyttet til medisinske feil, turnover blant klinikere og redusert kvalitet på behandlingen, så den fungerer som en ledende indikator på nedstrøms problemer med sikkerhet og bærekraft i arbeidsstyrken, og ikke bare som en triviell side ved arbeidsplasstilfredshet. Ethvert digitalt helseprogram som hevder å redusere klinisk byrde bør kunne vise dette mot en målt baseline, i stedet for å hevde det som en designintensjon.

## Hvordan det beregnes

```
Utbrenthetsrate blant leger = klinikere som skårer over det validerte
                              instrumentets utbrenthetsterskel / totalt
                              antall undersøkte klinikere × 100

Vanlige validerte instrumenter: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index, eller et screeningspørsmål med ett
enkelt punkt om utbrenthet validert mot et fyldigere instrument.

Rapporter sammen med en indikator for digital byrde der det er mulig:
  EPJ-tid i systemet per pasientkonsultasjon
  Dokumentasjonstid utenfor planlagt klinisk arbeidstid
  ("pyjamastid")
```

## Gjennomarbeidet eksempel

Et sykehussystem undersøker 300 leger med Maslach Burnout Inventory før innføringen av et verktøy for ambient klinisk dokumentasjon som skal redusere tiden brukt på notatskriving. Ved baseline skårer 135 leger (45 %) over utbrenthetsterskelen, og revisjonsloggdata fra EPJ viser i gjennomsnitt 58 minutter dokumentasjonstid per lege utenfor planlagt klinisk arbeidstid per dag. Seks måneder etter utrullingen av verktøyet viser en gjentatt undersøkelse av de samme legene at 108 (36 %) er over utbrenthetsterskelen, sammen med et fall i dokumentasjonstid utenom arbeidstid til 34 minutter per dag. Den korrelerte bevegelsen i både utbrenthetsraten og den objektive EPJ-avledede indikatoren styrker argumentet for at verktøyet bidrar til forbedringen, men en formell sammenligning før/etter bør likevel ta hensyn til andre samtidige endringer i arbeidsbelastning i samme periode.

## Datakilder og forbehold

Data om utbrenthet kommer fra et validert instrument som administreres jevnlig (årlig eller hyppigere), og svarprosenten er viktig: en lav svarprosent risikerer skjevhet fra manglende svar, der de mest utbrente klinikerne (med minst kapasitet til å fullføre en ekstra undersøkelse) systematisk er underrepresentert, noe som undervurderer den reelle raten. EPJ-avledede indikatorer for digital byrde, som tid i systemet, dokumentasjonstid utenom arbeidstid og antall klikk per konsultasjon, er nyttige som objektive, kontinuerlig tilgjengelige supplementer til periodiske undersøkelsesdata, men bør valideres mot undersøkelsesrapportert utbrenthet for den aktuelle organisasjonen før de behandles som en pålitelig selvstendig indikator på utbrenthet, siden forholdet mellom tid i systemet og faktisk utbrenthet kan variere etter spesialitet og individuell arbeidsstil.

## Fallgruver

- **Stole bare på EPJ-avledede indikatorer**: tid i systemet og antall klikk korrelerer med utbrenthet samlet sett, men er ikke det samme som utbrenthet i seg selv, og kan være misvisende for enkeltklinikere eller spesialiteter med reelt ulike dokumentasjonsbehov.
- **Lav svarprosent som maskerer den reelle raten**: klinikerne som er mest berørt av utbrenthet er ofte de minst tilbøyelige til å ha kapasitet til å svare på en frivillig undersøkelse, noe som skjeve et resultat med lav svarprosent mot et kunstig friskere utseende tall.
- **Tilskrive en endring i utbrenthet til ett enkelt verktøy uten å ta hensyn til forstyrrende faktorer**: utbrenthet påvirkes av mange samtidige faktorer (bemanningsnivå, pasientvolum, organisatorisk endring); en sammenligning før/etter rundt utrullingen av ett verktøy bør kontrollere for disse der det er mulig i stedet for å anta én enkelt årsak.
- **Behandle utbrenthet utelukkende som et spørsmål om individuell motstandskraft**: forskning på utbrenthet finner konsekvent at arbeidsbelastning, systemdesign og organisatoriske faktorer er primære drivere; å fremstille det som utelukkende et problem for den enkelte kliniker leder tiltak bort fra de digitale verktøyene og arbeidsflytene som ofte er den faktiske rotårsaken.

## Kilder

- Maslach Burnout Inventory (MBI), validert spørreskjema og veiledning for skåring
- American Medical Association (AMA), forskning på utbrenthet blant leger og programmet STEPS Forward for praksisforbedring
- Fagfellevurdert litteratur om brukervennlighet i EPJ, dokumentasjonsbyrde og utbrenthet blant klinikere, for eksempel studier publisert i JAMIA og Annals of Internal Medicine

Se også: [overstyringsrate for kliniske varsler](../overstyringsrate-for-kliniske-varsler/), siden varslingstretthet er et av de mer spesifikke, målbare bidragene til utbrenthet blant klinikere som digitale verktøy direkte kan adressere.
