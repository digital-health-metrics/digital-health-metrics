# Fullføringsrate for ePROM

Fullføringsrate for ePROM måler andelen planlagte elektroniske pasientrapporterte utfallsmål (ePROM), standardiserte, validerte spørreskjemaer som fanger pasientens egen beskrivelse av symptomer, funksjon eller livskvalitet, levert digitalt i stedet for på papir, som faktisk fullføres. Det er like mye en datakvalitetsmetrikk som en engasjementsmetrikk: et PROM-programs kliniske og forskningsmessige verdi avhenger helt av at fullføringsraten er høy nok til at svarene som samles inn er representative for hele den innrullerte populasjonen, ikke bare den mest engasjerte eller minst symptomtyngede delmengden.

## Hvorfor dette er viktig

Pasientrapporterte utfall er det direkte, pasientbekreftede supplementet til klinikerregistrerte eller enhetsmålte data, og fanger dimensjoner av helse, som smerte, funksjon og livskvalitet, som en journalgjennomgang eller en biometrisk måling ikke kan; digitalisering av PROM-innsamling finnes nettopp for å gjøre disse dataene billigere og enklere å samle inn i stor skala enn papirbasert gjennomføring noen gang tillot. Men et PROM-program med lav fullføringsrate risikerer en spesifikk og alvorlig skjevhet: pasienter som føler seg dårligere er ofte mindre tilbøyelige til å fullføre et langt spørreskjema, så en fallende fullføringsrate kan i seg selv være et tidlig varselsignal om forverret populasjonshelse, og en lav samlet fullføringsrate kan få de innsamlede svarene til å se bedre ut enn den reelle populasjonens opplevelse, rett og slett fordi de mest symptomtyngede pasientene er underrepresentert blant dem som fullfører. Dette er grunnen til at fullføringsrate alltid bør rapporteres sammen med selve PROM-skårene, og ikke behandles som en sekundær operasjonell detalj.

## Hvordan det beregnes

```
Fullføringsrate for ePROM = fullstendig fullførte ePROM / sendte eller
                            planlagte ePROM × 100

Rapporter separat for:
  Innledende fullføringsrate  (første spørreskjema i en
                               overvåkingssekvens)
  Longitudinell fullføringsrate (påfølgende spørreskjemaer i en
                               pågående overvåkingssekvens, som
                               vanligvis synker over tid og bør følges
                               som en trend, ikke som ett enkelt tall)

Et "delvis fullført" spørreskjema bør defineres og rapporteres
separat fra både "fullstendig fullført" og "ikke påbegynt".
```

## Gjennomarbeidet eksempel

En onkologisk klinikk sender et validert ePROM om symptombyrde til 400 pasienter før hver månedlige oppfølgingskonsultasjon. I den første måneden fullfører 340 pasienter spørreskjemaet fullstendig (fullføringsrate 85 %), 30 fullfører det delvis og 30 starter det ikke. Ved den sjette måneden i samme overvåkingssekvens har fullstendige svar falt til 260 av den samme kohorten på 400 pasienter (65 %), et meningsfullt longitudinelt fall som ville blitt fullstendig oversett om bare tallet fra første måned på 85 % ble rapportert som en statisk samlet metrikk. Å undersøke hvilke pasienter som faller fra (etter symptomalvorlighet, sykdomsstadium eller alder) kan avsløre om fallet gjenspeiler undersøkelsestretthet, forverrede symptomer som gjør spørreskjemaet vanskeligere å fullføre, eller en teknisk tilgangsbarriere.

## Datakilder og forbehold

Fullføringsdata kommer fra ePROM-plattformens egne leverings- og svarlogger, som kan skille mellom tilstandene "ikke påbegynt", "delvis fullført" og "fullstendig fullført"; dette skillet bør alltid bevares og rapporteres i stedet for å slås sammen til et binært tall for fullført/ikke fullført, siden delvis fullføring ofte indikerer et spesifikt punkt i spørreskjemaet der pasienter sliter eller mister interessen. Fullføringsrate bør tolkes sammen med hvordan spørreskjemaet leveres (en lenke i tekstmelding, et appvarsel eller en leveringsmetode som krever innlogging på portalen), siden friksjon i leveringen i seg selv påvirker fullføringen uavhengig av spørreskjemaets innhold eller pasientens underliggende tilstand. Et validert instrument (i stedet for et ad hoc-sett med spørsmål) bør alltid brukes for selve PROM-en, siden fullføringsrate for et ikke-validert instrument ikke sier noe pålitelig om de resulterende dataenes kliniske nytteverdi, selv om fullføringen er høy.

## Fallgruver

- **Å behandle en fallende fullføringsrate bare som et leveringsproblem**: et longitudinelt fall i fullføring kan gjenspeile reelt forverrede pasientsymptomer (pasienter som er for syke til å fullføre undersøkelsen) i stedet for undersøkelsestretthet eller et teknisk problem, og dette skillet er av enorm betydning for klinisk tolkning.
- **Slå sammen delvis og full fullføring i én kategori**: et delvis fullført spørreskjema er data av meningsfullt annen kvalitet enn et fullstendig fullført; rapporter dem separat, og undersøk hvor i spørreskjemaets flyt pasientene har en tendens til å forlate det.
- **Rapportere fullføringsrate uten å rapportere risiko for svarskjevhet**: en moderat fullføringsrate bør føre til en undersøkelse av om respondentene systematisk skiller seg (i symptomalvorlighet, alder, digital kompetanse) fra ikke-respondentene, siden PROM-skårer beregnet bare fra respondenter kan gi et skjevt bilde av hele populasjonen.
- **Bruke et ikke-validert eller hjemmelaget spørreskjema**: fullføringsrate er meningsløs som datakvalitetssignal dersom instrumentet som fullføres ikke selv er klinisk validert for tilstanden og populasjonen som måles.

## Kilder

- International Consortium for Health Outcomes Measurement (ICHOM), utvikling av standardsett og veiledning for implementering av PROM
- U.S. Food and Drug Administration (FDA), veiledning om pasientrapporterte utfallsmål i kliniske studier og regulatoriske søknader
- Fagfellevurdert litteratur om implementering av elektronisk PROM og fullføringsrater, for eksempel studier publisert i Quality of Life Research og Journal of Medical Internet Research (JMIR)

Se også: [pasientens net promoter score](../pasientens-net-promoter-score/), en beslektet, men distinkt pasientrapportert metrikk som måler tilfredshet snarere enn kliniske utfall.
