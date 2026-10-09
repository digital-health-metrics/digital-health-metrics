# Brugerfastholdelsesrate

Brugerfastholdelsesraten er andelen af brugere, der var aktive i en startperiode, og som forbliver aktive i en senere periode. Dens modsætning, frafaldsraten (churn), er andelen, der helt holder op med at bruge produktet. Patientportal-adoptionsraten (se det emne) måler, om en patient nogensinde meningsfuldt aktiverer et digitalt sundhedsprodukt, mens fastholdelse måler, om vedkommende bliver ved med at bruge det, og for ethvert digitalt sundhedsprodukt på abonnement eller med løbende pleje er fastholdelse som regel den metrik, der er allertættest knyttet til både klinisk effekt og kommerciel bæredygtighed.

## Hvorfor dette er vigtigt

Et digitalt sundhedsprodukt, der ikke kan fastholde brugere, kan ikke levere vedvarende klinisk gavn, uanset hvor stærke dets tal for adoption eller aktivering er i begyndelsen: et værktøj til håndtering af en kronisk tilstand, der bruges i to uger og så opgives, flytter næppe et biometrisk udfald, der afhænger af måneders vedvarende adfærdsændring. Fastholdelse er også en af de kommercielt mest betydningsfulde metrikker, et digitalt sundhedsfirma rapporterer til investorer og betalere, fordi fastholdelseskurver (formen på frafaldet over tid og ikke blot en enkelt fastholdelsesprocent) afslører, om produktet har fundet et reelt bæredygtigt brugsmønster, eller blot fanger en nyhedsdrevet begyndende interesse, der forudsigeligt falmer. En fastholdelseskurve, der flader ud efter et indledende fald (patienter, der kommer forbi den første måned, bliver typisk), er et helt andet og langt sundere signal end en, der fortsætter med at falde jævnt uden bund.

## Hvordan det beregnes

```
Fastholdelsesrate (periode N) = brugere, der var aktive i periode N og
                                også i startkohortens periode /
                                brugere i startkohortens periode × 100

Frafaldsrate = 1 − fastholdelsesraten (for den samme periode)

Rapportér som en kohortefastholdelseskurve (fastholdelse ved dag/uge/
måned 1, 2, 3 …) og ikke som ét øjebliksbillede, da et enkelt
øjebliksbillede blander nyligt tilmeldte brugere (som endnu ikke har
haft mulighed for at falde fra) med brugere, der har været med længe.
```

## Gennemarbejdet eksempel

En digital sundhedsapp indskriver en kohorte på 1.000 nye brugere i januar. Ved udgangen af måned 1 er 640 af de oprindelige 1.000 stadig aktive (fastholdelse efter måned 1: 64 %). Ved udgangen af måned 3 er 410 stadig aktive (fastholdelse efter måned 3: 41 %). I måned 6 er 380 stadig aktive (fastholdelse efter måned 6: 38 %). Kurvens form, et stejlt indledende fald efterfulgt af en udfladning mellem måned 3 og 6, tyder på, at produktet fastholder en stabil kerne af brugere, når de først er kommet over en indledende adoptionshindring, hvilket er et væsentligt andet og mere opmuntrende signal, end hvis faldet fra måned 3 til måned 6 var fortsat i samme takt som i månederne 1 til 3.

## Datakilder og forbehold

Fastholdelse beregnes ud fra produktets egne log- eller aktivitetshændelser, hvor "aktiv" defineres konsekvent (fx mindst én kvalificerende session i perioden) på tværs af alle kohorter, der sammenlignes. Kohorter bør sammenlignes på samme grundlag, med den samme startdefinition af "aktiv" og den samme længde af observationsvinduet, da selv små definitionsforskelle (måneder på 30 dage mod 28 dage, eller en strengere mod en mere lempelig tærskel for "aktiv") kan flytte en rapporteret fastholdelsesprocent med flere point uden nogen reel forskel i brugernes adfærd. Sæsoneffekter er almindelige i sundhedsapps, der er knyttet til nytårsforsæt eller særlige perioder med sundhedsoplysning, så en sammenligning af kohorter fra år til år er normalt mere informativ end en sammenligning af nabokohorter fra forskellige tider på året.

## Faldgruber

- **At rapportere et enkelt fastholdelsesøjebliksbillede i stedet for en kurve**: et enkelt tal af typen "X % af brugerne er stadig aktive" uden formen på frafaldet over tid kan ikke skelne mellem et produkt, der flader ud (sundt), og et, der er i vedvarende tilbagegang (usundt).
- **At ændre definitionen af "aktiv" mellem rapporteringsperioder**: at lempe definitionen af en aktiv bruger (for eksempel ved at tælle en passiv åbning af appen i stedet for en gennemført handling) kan få fastholdelsen til at se ud til at forbedres, selv om den faktiske brug ikke har ændret sig.
- **At ignorere kohortesæsonudsving**: at sammenligne fastholdelsen i en januarkohorte (som ofte blæses op af tilmelding i forbindelse med nytårsforsæt, der i gennemsnit bringer en mindre motiveret kohorte ind) med en kohorte erhvervet på en anden tid af året kan give vildledende konklusioner om tendenser.
- **At blande organiske kohorter og kohorter erhvervet via betalt annoncering**: brugere erhvervet gennem forskellige kanaler fastholdes ofte meget forskelligt; at blande dem i ét samlet fastholdelsestal kan skjule et kanalspecifikt fastholdelsesproblem.

## Kilder

- Peer reviewet litteratur om engagement og frafald i digitale sundhedsapps, for eksempel undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, vejledning i bedste praksis for måling af engagement og fastholdelse for digitale terapeutiske produkter
- Brancherapporter om benchmarking af fastholdelse i mobile sundhedsapps fra analyseplatforme og markedsundersøgelsesorganisationer inden for digital sundhed

Se også: [konsistensrate for patientengagement](../konsistensrate-for-patientengagement/), som måler kvaliteten af engagementet blandt fastholdte brugere i modsætning til, om de overhovedet forbliver indskrevet.
