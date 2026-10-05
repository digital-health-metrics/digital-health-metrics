# Digital Tilgangsrate

Digital tilgangsrate måler andelen av en kvalifisert pasientpopulasjon som har de praktiske forutsetningene for å bruke et digitalt helseprodukt i det hele tatt: en bredbånds- eller pålitelig mobildataforbindelse, en internettkompatibel enhet og en aktiv konto på den aktuelle pasientportalen eller appen. Det er forutsetningsmetrikken for alle andre digitale helsemål i denne boken: en populasjon kan ikke registrere seg for, engasjere seg i eller dra nytte av et digitalt helseprodukt den strukturelt ikke kan nå, uansett hvor godt produktet er utformet.

## Hvorfor dette er viktig

Adopsjons- og engasjementsmetrikker for digital helse forutsetter implisitt en populasjon som allerede har digital tilgang, og å rapportere adopsjons- eller engasjementsrater uten først å fastslå den underliggende tilgangsraten risikerer stille å utelukke pasientene som er minst tilbøyelige til å ha slik tilgang, og som ofte også er pasientene med størst helsebehov. HIMSS Digital Health Equity Measurement Framework (DHEMF) og lignende rammeverk behandler digital tilgang som en grunnleggende likhetsmetrikk av første orden, nettopp fordi tiltak som er bygget uten å ta hensyn til tilgangsgap, har en tendens til å forsterke, snarere enn å tette, eksisterende helseforskjeller: en telehelse-først-strategi kan utilsiktet redusere tilgangen til helsehjelp for pasienter uten pålitelig tilkobling eller enhet, selv mens den målbart forbedrer opplevelsen for pasienter som allerede hadde begge deler. Digital tilgangsrate bør følges og rapporteres etter demografisk og geografisk segment, siden nasjonale eller organisasjonsomfattende gjennomsnitt rutinemessig skjuler store gap for spesifikke populasjoner.

## Hvordan det beregnes

```
Digital tilgangsrate = pasienter med bredbånds-/mobiltilkobling OG en
                       internettkompatibel enhet OG en aktiv konto på
                       pasientportal eller app / total kvalifisert
                       pasientpopulasjon × 100

Rapporter hver delkomponent separat i tillegg til den samlede raten:
  Tilkoblingsrate        = pasienter med en pålitelig internettforbindelse /
                           kvalifisert populasjon × 100
  Enhetseierskapsrate    = pasienter med en internettkompatibel enhet /
                           kvalifisert populasjon × 100
  Portalaktiveringsrate  = pasienter med en aktiv portal-/appkonto /
                           kvalifisert populasjon × 100 (se
                           portaladopsjonsrate for pasienter for den
                           fullstendige adopsjonstrakten)
```

## Gjennomarbeidet eksempel

Et helsesystem betjener en kvalifisert populasjon på 40 000 pasienter. En pasientundersøkelse og infrastrukturdata viser at 34 000 (85 %) har pålitelig bredbånds- eller mobiltilkobling, 33 000 (82,5 %) har en internettkompatibel enhet, og av pasientene som oppfyller begge vilkår har 27 000 (67,5 % av hele den kvalifiserte populasjonen) en aktiv pasientportalkonto. Disaggregering etter alder viser at pasienter på 65 år og eldre har en samlet digital tilgangsrate på bare 48 %, sammenlignet med 78 % for pasienter under 65, et gap som organisasjonens gjennomsnitt på 67,5 % fullstendig skjuler, og som direkte bør påvirke om en gitt tjeneste trygt kan tilbys kun digitalt for denne populasjonen.

## Datakilder og forbehold

Data om tilkobling og enhetseierskap kommer vanligvis fra en kombinasjon av pasientens egenrapportering (via undersøkelse eller innledende spørreskjema), kartdata fra Federal Communications Commission (FCC) eller tilsvarende nasjonal kartlegging av bredbåndstilgjengelighet for pasientens geografiske område, og portalaktiveringsdata fra organisasjonens egne systemer. Bredbåndstilgjengelighet på områdenivå (om en leverandør tilbyr tjeneste i et gitt postnummer) er en svakere indikator enn tilkobling på husholdningsnivå, siden tilgjengelighetsdata på områdenivå ikke sier noe om hvorvidt en bestemt pasient faktisk har råd til eller har valgt å abonnere på tjenesten. Tilgangsrater på områdenivå og husholdningsnivå bør ikke blandes sammen. Enhets- og tilkoblingstilgang kan også deles innenfor en husholdning (for eksempel én smarttelefon brukt av flere familiemedlemmer), noe som undersøkelsesdata på husholdningsnivå fanger bedre enn portalinnloggingsdata på individnivå alene.

## Fallgruver

- **Rapportere bare et organisasjonsomfattende gjennomsnitt**: dette skjuler pålitelig store tilgangsgap for eldre, lavinntekts-, landlige eller på annen måte digitalt marginaliserte pasientsegmenter; disaggreger alltid etter demografisk og geografisk segment.
- **Blande sammen bredbåndstilgjengelighet på områdenivå med faktisk husholdningstilgang**: at et postnummer er "dekket" av en bredbåndsleverandør betyr ikke at alle husholdninger i området abonnerer på eller har råd til tjenesten.
- **Behandle enhetseierskap som et engangs, statisk faktum**: enhetstilgang kan være forbigående (en aldrende enhet, en mistet eller skadet telefon, en delt familieenhet som omfordeles), så tilgangsraten bør måles jevnlig, ikke antas å være stabil når den først er vurdert.
- **Utforme et rent digitalt pasientforløp før tilgangsraten for den berørte populasjonen er fastslått**: å flytte en tjeneste til kun digital uten først å bekrefte målpopulasjonens faktiske digitale tilgangsrate risikerer stille å utelukke nettopp de pasientene som har minst mulighet til å nå en alternativ kanal.

## Kilder

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), nasjonale data om bredbåndstilgjengelighet og digital likhet
- Pew Research Center, forskning på tilgang til internett, bredbånd og enheter og trender i det digitale skillet mellom demografiske grupper

Se også: [digital kompetanserate](../digital-kompetanserate/), den nært beslektede metrikken for om pasienter som har tilgang også kan bruke den effektivt.
