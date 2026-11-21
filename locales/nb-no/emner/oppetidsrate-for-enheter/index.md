# Oppetidsrate for Enheter

Oppetidsrate for enheter måler andelen av planlagt overvåkingstid som en tilkoblet helseenhet, en sensor for fjernovervåking av pasienter, en bærbar enhet eller en hjemmetelehelseenhet, faktisk er pålogget, sender data og fungerer korrekt, i stedet for å være frakoblet, koblet fra eller defekt. Det er den grunnleggende infrastrukturmetrikken under ethvert program for fjernovervåking eller tilkoblede enheter: et klinisk varsel, en biometrisk trend eller et engasjementstall beregnet fra en enhet som ofte var frakoblet, er bare så pålitelig som tilkoblingen bak.

## Hvorfor dette er viktig

Hele den kliniske verdien i et program for fjernovervåking av pasienter avhenger av kontinuerlig eller nesten kontinuerlig datafangst; en enhet med dårlig oppetid skaper stille hull i en pasients kliniske bilde som kan forveksles med stabilitet (intet varsel fordi det ikke finnes data, ikke fordi ingenting har endret seg) i stedet for å bli korrekt identifisert som en overvåkingssvikt. Enhetens oppetid er også en ledende indikator på programkostnad og pasientopplevelse: en enhet som ofte mister tilkoblingen genererer supporthenvendelser, pasientfrustrasjon og potensielt unødvendig klinisk oppfølging for å sjekke om et datahull skyldes en reell klinisk hendelse eller bare en teknisk feil. Fordi brudd på enhetens oppetid ofte kan tilskrives infrastruktur organisasjonen selv kontrollerer (en dårlig konfigurert mobilgateway, svak Wi-Fi-dekning i en pasients hjem, en dårlig vedlikeholdt enhetspark) snarere enn pasienten, hører denne metrikken hjemme hos leverandøren og det tekniske driftsteamet, og bør ikke vilkårlig slås sammen med metrikker for pasientengasjement.

## Hvordan det beregnes

```
Oppetidsrate for enheter = tid enheten var pålogget og sendte gyldige data /
                           total planlagt overvåkingstid × 100

Segmenter rotårsaker til nedetid der dataene tillater det:
  Feil på enheten       (batteri, maskinvarefeil, krasj i firmware)
  Tilkoblingsfeil       (frafall i mobilnett/Wi-Fi/VPN)
  Pasientrelaterte forhold (enheten slått av, flyttet utenfor rekkevidde)

Støttende tekniske parametere å følge sammen med oppetid:
  Gjennomsnittlig CPU-bruk, minnebruk og batterinivå per enhet
  Gjennomsnittlig tid mellom tilkoblingsfeil
  Gjennomsnittlig tid til gjenoppkobling etter et frafall
```

## Gjennomarbeidet eksempel

Et program for fjernovervåking av hjertet tar i bruk 1 000 tilkoblede enheter, som hver forventes å sende kontinuerlig. Over en måned på 30 dager (720 planlagte overvåkingstimer per enhet) logger flåten til sammen 705 600 faktiske påloggede timer mot 720 000 planlagte timer, noe som gir en oppetidsrate for hele flåten på 705 600 / 720 000 × 100 = 98 %. Rotårsaksanalyse av de 14 400 nedetidstimene viser at 60 % kan tilskrives frafall i mobiltilkobling konsentrert i en bestemt landlig tjenesteregion, 25 % til enheter med aldrende batterier flagget for utskifting, og 15 % til pasienter som midlertidig slo av enheten sin. Denne fordelingen peker på to tydelige, ulike tiltak, en tilkoblingsløsning for den berørte regionen og et proaktivt batteriutskiftingsprogram, som et enkelt aggregert oppetidstall ikke ville ha skilt fra hverandre.

## Datakilder og forbehold

Oppetidsdata kommer fra enhetsprodusentens eller plattformleverandørens eget system for enhetsadministrasjon og telemetri, som logger tilkoblings- og hjerteslagshendelser per enhet; organisasjonen bør bekrefte nøyaktig hva leverandøren teller som "pålogget" (en enhet kan melde seg selv som tilkoblet et nettverk mens den ikke klarer å sende gyldige kliniske data, noe som bør regnes som nedetid for kliniske formål selv om leverandørens eget dashbord rapporterer den som tilkoblet). Oppetid bør rapporteres per enhetskohort eller geografi der volumet tillater det, siden tilkoblingskvalitet ofte er geografisk klynget (landlig mobildekning, Wi-Fi i eldre bygninger) i stedet for jevnt fordelt over en pasientpopulasjon, og et aggregert tall for hele flåten kan skjule et alvorlig, håndterbart regionalt problem.

## Fallgruver

- **Blande sammen nettverkstilkobling og gyldig dataoverføring**: en enhet kan fremstå som "tilkoblet" på et leverandørdashbord mens den ikke klarer å sende brukbare kliniske data; definer og mål oppetid mot faktisk mottak av gyldige data, ikke bare rå nettverkstilkobling.
- **Rapportere bare et gjennomsnitt for hele flåten**: dette kan skjule et alvorlig nedetidsproblem som er spesifikt for en geografi eller enhetskohort, som et målrettet gjennomsnitt ville avdekket og som har en spesifikk, håndterbar løsning.
- **Ikke skille mellom rotårsaker til nedetid**: nedetid på enhetssiden, i tilkoblingen og på pasientsiden krever hver sitt helt forskjellige tiltak; en enkelt nedetidsprosent uten segmentering etter rotårsak kan ikke handles på.
- **Å behandle et datahull som klinisk stabilitet som standard**: en manglende datastrøm fra en frakoblet enhet bør utløse en teknisk tilkoblingssjekk, ikke stille tolkes som "ingen nyheter er gode nyheter" for pasientens kliniske status.

## Kilder

- Continua Design Guidelines / Personal Connected Health Alliance, tekniske standarder for interoperabilitet for tilkoblede helseenheter
- ONC / HealthIT.gov, veiledning om implementering av og tekniske krav til programmer for fjernovervåking av pasienter
- Fagfellevurdert litteratur om pålitelighet og datakompletthet for enheter til fjernovervåking av pasienter, for eksempel studier publisert i npj Digital Medicine

Se også: [treffsikkerhet i triageruting](../treffsikkerhet-i-triageruting/), som er avhengig av å motta komplette, pålitelige enhetsdata for i det hele tatt å kunne ta en riktig triagebeslutning.
