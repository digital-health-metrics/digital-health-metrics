# Udeblivelsesrate for Aftaler

Udeblivelsesrate for aftaler (også kaldet "did not attend"- eller DNA-rate) er andelen af planlagte aftaler, hvor patienten hverken mødte op eller aflyste med rimeligt varsel. Det er en af de ældste operationelle metrikker i sundhedsvæsenet, og digitale værktøjer, især påmindelser, selvbetjent ombooking og portalbaseret booking, er nu blandt de mest effektive og bedst dokumenterede løftestænger til at reducere den.

## Hvorfor dette er vigtigt

Hver udeblivelse er en enhed klinisk kapacitet, der normalt ikke kan genvindes, da de fleste tjenester ikke kan fylde et samme-dags hul med kort varsel, så raten driver direkte ventelisternes længde, omkostning pr. fuldført aftale og tabt klinikertid. Udeblivelsesadfærd er ikke jævnt fordelt: den korrelerer med deprivation, transportadgang, omsorgsforpligtelser og byrden ved at håndtere flere langvarige tilstande, så at behandle en høj rate rent som et patientadfærdsproblem, i stedet for delvist som et signal om adgangsbarrierer, har en tendens til at producere interventioner (såsom generelle sanktioner), der forankrer ulighed i stedet for at reducere den. Digitale påmindelser og let digital ombooking er konsekvent blandt de mest effektive, lavomkostningsinterventioner, der er tilgængelige, hvilket er grunden til, at denne metrik klart hører hjemme i et digitalt sundhedsmålingsprogram, ikke kun i operationel rapportering.

## Hvordan det beregnes

```
Udeblivelsesrate = aftaler markeret "did not attend" / samlede planlagte aftaler × 100
```

En planlagt aftale udelukkes normalt fra nævneren, eller flyttes til en separat kategori, hvis den blev aflyst af en af parterne med mere end en defineret varselsperiode (almindeligvis 24 timer). Sene aflysninger (under denne varselsperiode) rapporteres normalt separat fra egentlige udeblivelser, da de operationelle og adfærdsmæssige implikationer er forskellige.

## Gennemarbejdet eksempel

En kommunal klinik planlægger 2.000 aftaler på en måned. Heraf aflyses 140 med mere end 24 timers varsel (ombooket og udelukket fra nævneren), 60 aflyses sent (under 24 timer), og 180 registreres som egentlig udeblivelse uden nogen kontakt overhovedet. Udeblivelsesraten er 180 / 2.000 × 100 = 9%. Hvis de 60 sene aflysninger blev lagt sammen i samme kategori som egentlige udeblivelser, ville den rapporterede rate stige til 12%, hvilket er grunden til, at den anvendte definition altid bør angives sammen med tallet.

## Datakilder og forbehold

Planlægnings- eller praksisstyringssystemet er hovedkilden, ved brug af dets aftalestatuskoder; metrikkens kvalitet afhænger helt af, at personalet konsekvent bruger den korrekte status i stedet for en generisk "aflyst"-kategori til alt. Organisationer, der indfører digitale påmindelser (sms, app-pushnotifikation eller portaladvarsler), bør måle udeblivelsesraten før og efter ændringen for en sammenlignelig patient- og servicesammensætning, da påmindelseseffektivitet er velunderbygget i randomiserede og observationelle studier, men varierer efter population og kanal.

## Faldgruber

- **At sammenligne rå rater på tværs af klinikker med forskellig overbookingspraksis**: en klinik, der bevidst overbooker for at kompensere for en forventet udeblivelsesrate, vil vise en anden tilsyneladende rate end en, der ikke gør det, uafhængigt af faktisk patientadfærd.
- **At sammenblande sene aflysninger med egentlige udeblivelser**: de to har forskellige årsager og forskellige digitale løsninger (et problem med sen aflysning løses ofte med lettere selvbetjent ombooking; et problem med egentlig udeblivelse løses ofte med bedre påmindelser og kontaktnøjagtighed).
- **Overlevelsesbias fra udskrivningspolitikker**: tjenester, der udskriver patienter efter gentagne udeblivelser, vil se deres egen rate forbedres mekanisk, mens de blot flytter de samme patienter et andet sted i systemet.
- **At give patienten skylden for digital eksklusion**: en patient uden smartphone eller pålidelig sms-tjeneste vil ikke drage fordel af en udelukkende digital påmindelsesstrategi, så en flerkanaltilgang (brev, opkald, sms, app) er normalt nødvendig for at undgå at udvide adgangskløfterne.

## Kilder

- NHS England, udeblevne aftaler i almen praksis og ambulant pleje, offentliggjort statistik og vejledning
- Cochrane systematiske oversigter over interventioner til at reducere udeblevne sundhedsaftaler, herunder påmindelsessystemer
- Fagfællebedømt litteratur om socioøkonomiske og demografiske korrelater til udeblivelse fra aftaler

Se også: [telemedicinsk besøgsrate](../telemedicinsk-besøgsrate/), da udeblivelsesadfærd almindeligvis varierer efter konsultationsmodalitet, og [patientportal-adoptionsrate](../patientportal-adoptionsrate/), da portalbaseret selvbetjent tidsbestilling og påmindelser er en primær digital intervention.
