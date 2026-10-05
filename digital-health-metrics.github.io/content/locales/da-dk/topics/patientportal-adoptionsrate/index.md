# Patientportal-adoptionsrate

Patientportal-adoptionsrate måler andelen af berettigede patienter, der har registreret sig til og aktivt bruger en digital patientportal (for eksempel NHS App, Patient Access, eller en EHR-tilknyttet portal som MyChart) til at se journaler, booke aftaler eller sende beskeder til deres plejeteam. Det er indikatoren på begynderniveau for digitalt engagement: en patient, der aldrig har aktiveret en konto, kan ikke drage fordel af nogen efterfølgende digital tjeneste bygget oven på portalen.

## Hvorfor dette er vigtigt

En portal skaber først værdi, når en patient bruger den, så organisationer bør spore adoption som en tragt frem for et enkelt tal: registrering, aktivering (første meningsfulde handling) og aktiv brug (brug inden for et defineret tidsvindue) er tre forskellige rater, der alt for ofte sammenblandes. Digitale servicehold er ofte under pres for at rapportere ét gunstigt hovedtal, og det kræver disciplin at insistere på den sværere, mere ærlige opdeling. Lav eller ujævnt fordelt adoption er også et lighedssignal: patienter, der er ældre, har lavere digital kompetence, ikke taler majoritetssproget, eller mangler pålidelig bredbånd eller smartphone, bliver systematisk mindre tilbøjelige til at blive talt med i tælleren, så en stigende gennemsnitlig adoptionsrate kan skjule en voksende kløft for de patienter, der ofte har mest brug for kontakt med tjenesterne.

## Hvordan det beregnes

Rapporter alle tre faser, ikke kun registrering, og angiv altid nævneren eksplicit:

```
Registreringsrate = patienter med oprettet portalkonto / berettiget patientpopulation × 100
Aktiveringsrate     = patienter, der gennemførte en første meningsfuld handling (så
                      et resultat, bookede en tid, sendte en besked) / patienter
                      med konto × 100
Aktiv brugsrate      = patienter, der loggede ind mindst én gang inden for de
                      seneste 12 måneder / berettiget patientpopulation × 100
```

Berettiget patientpopulation defineres normalt som patienter med mindst én kontakt med organisationen inden for en defineret tilbageblikperiode (almindeligvis 24 måneder), som er i en alder og samtykkestatus, der tillader dem at have deres egen konto.

## Gennemarbejdet eksempel

Et primærsundhedsnetværk betjener 50.000 patienter, der opfylder berettigelsesdefinitionen. Af disse har 32.000 registreret sig til portalen (registreringsrate 64%). Af de 32.000 registreringer har 27.000 gennemført mindst én meningsfuld handling, såsom at se et prøvesvar (aktiveringsrate 84% af de registrerede). I løbet af de seneste 12 måneder har 21.000 af de oprindelige 50.000 berettigede patienter logget ind mindst én gang (aktiv brugsrate 42%). At rapportere kun 64%-registreringstallet ville i betydelig grad overvurdere det reelle engagement; 42%-tallet for aktiv brug er det tal, der bør drive ressourcebeslutninger for portalprogrammet.

## Datakilder og forbehold

Portalanalyser kommer typisk enten fra selve leverandørplatformen (login-hændelser, funktionsbrug) eller fra den underliggende elektroniske patientjournals revisionslog, og organisationer bør være skeptiske over for leverandør-dashboards, der kun viser registreringstal. Fuldmagtsadgang (en forælder eller omsorgsperson, der administrerer en konto på en patients vegne) bør mærkes og rapporteres separat, da det ændrer, hvem der faktisk er "brugeren". Valg af nævner betyder enormt meget: at tælle mod den fulde liste over registrerede patienter i stedet for en reelt berettiget, kontaktbar population vil altid undervurdere adoption, mens at tælle kun mod patienter, der aktivt blev inviteret, altid vil overvurdere den, så berettigelsesdefinitionen bør fastsættes og offentliggøres sammen med hver rapporteret rate.

## Faldgruber

- **Registrering talt som adoption**: en oprettet, men aldrig brugt konto har næsten nul værdi; rapporter aktivering og aktiv brug sammen med registrering, ikke i stedet for den.
- **Ignorere digital eksklusion**: samlede adoptionstal kan stige, mens kløften mellem de mest og mindst digitalt inkluderede grupper udvides; segmenter altid efter alder, deprivation, sprog og handicap, hvor datastyring tillader det.
- **Sammenligne organisationer med forskellige berettigelsesdefinitioner**: et portalprogram, der kun inviterer patienter med registreret e-mailadresse, vil rapportere en højere rate end et, der måler mod hele den registrerede liste, uden nogen reel forskel i ydeevne.
- **Behandle et engangslogin som løbende engagement**: en 12-måneders tilbageblikperiode er almindelig, men et kortere vindue (for eksempel 90 dage) giver en tidligere advarsel om faldende brug.

## Kilder

- NHS England, statistik over brug og registrering af NHS App (nhs.uk / digital.nhs.uk-publikationer)
- ONC / HealthIT.gov, mål fra Promoting Interoperability Program, herunder View, Download, Transmit (VDT)-mål for patientadgang
- Fagfællebedømt litteratur om adoption af patientportaler og digitale sundhedsuligheder, for eksempel studier publiceret i Journal of the American Medical Informatics Association (JAMIA)

Se også: [udeblivelsesrate for aftaler](../udeblivelsesrate-for-aftaler/), som portalbaseret selvbetjent tidsbestilling og påmindelser direkte påvirker.
