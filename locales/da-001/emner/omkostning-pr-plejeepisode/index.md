# Omkostning pr. Plejeepisode

Omkostning pr. plejeepisode er de samlede omkostninger ved at behandle en defineret klinisk episode, for eksempel en hofteoperation og den tilhørende rekonvalescens eller en periode med diabetesstyring, sammenlignet med en historisk baselinekohorte, der blev behandlet uden den digitale indsats, som evalueres. Det er den standardenhed for økonomisk sammenligning i værdibaseret pleje, fordi den fanger det fulde økonomiske billede af en episode i stedet for en enkelt omkostningspost isoleret set, og det er den metrik, betalere og sundhedssystemer oftest kræver, før de går med til at finansiere et digitalt sundhedsprogram i stor skala.

## Hvorfor dette er vigtigt

Kontrakter om værdibaseret pleje betaler i stigende grad for udfald og episoder frem for for enkeltstående ydelser, hvilket betyder, at et digitalt sundhedsprograms økonomiske argument skal fremføres i samme valuta: de samlede omkostninger pr. episode sammenlignet med, hvad den samme type episode kostede, før indsatsen fandtes. Et program, der mindsker én omkostningskategori (for eksempel færre opfølgende besøg ansigt til ansigt) og samtidig øger en anden (flere udgifter til enheder, mere tid for klinisk overvågningspersonale), har ikke nødvendigvis mindsket de samlede omkostninger pr. episode, og kun en fuld omkostningsopgørelse på episodeniveau fanger denne afvejning; at se på en enkelt omkostningslinje isoleret set risikerer en vildledende konklusion i begge retninger. Fordi episodedefinitioner og baselineperioder kan konstrueres på måder, der favoriserer en bestemt konklusion, kræver denne metrik mere metodisk gennemsigtighed end de fleste andre i denne bog for at være troværdig over for en skeptisk betaler eller økonomiafdeling.

## Hvordan det beregnes

```
Omkostning pr. plejeepisode = samlede omkostninger ved al pleje leveret
                              inden for et defineret episodevindue (alle
                              plejesettings, alle omkostningskategorier)
                              / antal episoder

Sammenlign med en historisk baselinekohortes omkostning pr. episode for
den samme klinisk definerede episodetype, justeret for case mix
(alder, komorbiditet, sværhedsgrad) mellem de to kohorter.

Medtag ikke blot direkte kliniske omkostninger: omkostninger til
teknologiplatform og enheder, ekstra klinisk bemanding og enhver
pleje, der er flyttet til et andet setting (fx fra indlæggelse til
hjemmet) i stedet for helt at forsvinde.
```

## Gennemarbejdet eksempel

Et sundhedssystems historiske baselineomkostning for en episode med total hofteoperation (operation til og med 90 dages rekonvalescens) er 28.000 USD pr. episode, baseret på 200 historiske episoder. Der indføres et nyt digitalt program til overvågning efter operation, og 150 nye episoder med programmet viser en gennemsnitlig omkostning på 24.500 USD pr. episode, et fald på 3.500 USD pr. episode, der primært skyldes færre besøg på skadestuen under rekonvalescensen og en kortere gennemsnitlig indlæggelsesvarighed. Efter risikojustering for et lidt yngre case mix med lavere komorbiditet i den digitalt overvågede kohorte sammenlignet med den historiske baseline indsnævres den justerede besparelse til 2.100 USD pr. episode — stadig en reel forbedring, men en væsentligt mindre end den rå, ujusterede sammenligning antydede.

## Datakilder og forbehold

De samlede episodeomkostninger sættes typisk sammen ud fra sundhedssystemets eget omkostningsregnskab eller økonomisystem og kombinerer hævedata, intern omkostningsfordeling og, hvor en digital platform er involveret, dens licens- og hardwareomkostninger. Det er normalt den sværeste og mest ressourcekrævende del af enhver analyse af værdien af digital sundhed at sammensætte dette tal nøjagtigt, da omkostninger ofte registreres i separate systemer, der aldrig er designet til at blive kombineret på episodeniveau. Justering for case mix er afgørende, når den digitalt styrede kohorte og den historiske baselinekohorte ikke er tildelt ved ægte randomisering, da digitale programmer ofte tilbydes først til mere engagerede, generelt sundere eller mere motiverede patienter, hvilket kan give en tilsyneladende omkostningsbesparelse, der i virkeligheden er en udvælgelseseffekt og ikke en reel programeffekt.

## Faldgruber

- **At sammenligne ujusterede omkostninger på tværs af kohorter med forskelligt case mix**: en digitalt styret kohorte, der tilfældigvis er sundere eller har lavere risiko end den historiske baseline, vil vise en lavere omkostning pr. episode af grunde, der ikke har med selve den digitale indsats at gøre; risikojustér altid, før der sammenlignes.
- **At udelade teknologi- og bemandingsomkostninger fra den "digitale" side af sammenligningen**: en omkostningsanalyse, der kun følger nedsat klinisk udnyttelse og ignorerer omkostningerne til platform, enheder og bemanding ved at drive det digitale program, vil overvurdere nettobesparelserne.
- **At definere episodevinduet uens mellem kohorter**: at sammenligne et episodevindue på 90 dage for den ene kohorte med et på 60 dage for en anden vil give en omkostningssammenligning, der i virkeligheden ikke måler det samme.
- **At behandle en omkostningsforskydning som en omkostningsreduktion**: omkostninger flyttet fra ét plejesetting til et andet (for eksempel fra indlæggelse til et overvåget hjemmesetting) er et ægte og værdifuldt fund, men analytisk set noget andet end en omkostning, der er helt forsvundet, og de to bør rapporteres separat.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), vejledning om Bundled Payments for Care Improvement (BPCI) og episodebaserede betalingsmodeller
- Healthcare Financial Management Association (HFMA), vejledning om metodik for omkostningsopgørelse pr. plejeepisode
- Peer reviewet litteratur om omkostningsanalyse af værdibaseret pleje inden for digital sundhed, for eksempel undersøgelser offentliggjort i Health Affairs og American Journal of Managed Care

Se også: [afkast på investering (ROI) og værdi på investering (VOI)](../afkast-på-investering-roi-og-værdi-på-investering-voi/), som bruger omkostning pr. plejeepisode som et af sine vigtigste input.
