# Biometrisk Stabiliseringsrate

Biometrisk stabiliseringsrate måler andelen af patienter, der opretholder en sporet biometrisk værdi inden for et klinisk målinterval over en vedvarende periode, i modsætning til biometrisk forbedringsrate, som måler en engangsændring fra baseline. Den eksisterer, fordi en enkelt forbedret måling ikke beviser varig kontrol — en patient kan vise en god værdi ved ét opfølgningsbesøg og derefter glide tilbage, og det er vedvarende stabilisering over tid, der rent faktisk forudsiger bedre langsigtede kliniske resultater.

## Hvorfor det betyder noget

Kroniske tilstande som diabetes og hypertension kræver vedvarende kontrol, ikke en enkelt god måling, for at reducere risikoen for komplikationer, hvilket betyder, at et digitalt sundhedsprogram, der kun rapporterer forbedring ved ét opfølgningstidspunkt, kan male et ufuldstændigt eller endda vildledende billede af sin kliniske effekt. Biometrisk stabiliseringsrate tvinger evalueringen til at se på hele forløbet af en patients data snarere end et enkelt øjebliksbillede, hvilket gør den til en strengere og mere klinisk meningsfuld test af, om et program leverer vedvarende værdi. Den er særligt vigtig for programmer, der retfærdiggør løbende abonnements- eller medlemsgebyrer, da værdiforslaget for vedvarende engagement afhænger af at demonstrere vedvarende, ikke blot indledende, fordel.

## Hvordan det beregnes

```
Biometrisk stabiliseringsrate = patienter, der opretholder
                                biometrisk værdi inden for
                                målinterval ved alle planlagte
                                målinger i en defineret periode /
                                samlet antal patienter med
                                fuldstændige planlagte målinger
                                × 100

Dette kræver flere datapunkter pr. patient over tid, ikke blot
baseline og én opfølgning — typisk minimum tre målinger over en
periode på seks til tolv måneder, afhængigt af tilstanden.
```

## Et gennemarbejdet eksempel

Et hypertensionsstyringsprogram sporer blodtryk for 300 patienter over en periode på tolv måneder med kvartalsvise målinger (fire datapunkter pr. patient). Af disse har 180 patienter alle fire målinger inden for det kliniske målinterval, hvilket giver en biometrisk stabiliseringsrate på 60%. Separat analyse viser, at yderligere 90 patienter opnåede en god måling ved mindst ét tidspunkt, men faldt uden for intervallet ved mindst ét andet tidspunkt — disse patienter ville tælle som "forbedret" under en simpel baseline-til-opfølgning-måling, men afslører en betydeligt mindre overbevisende historie, når hele deres forløb overvejes, hvilket viser præcis den slags skjult variabilitet, som stabiliseringsmetrikken er designet til at fange.

## Datakilder og forbehold

At måle stabilisering kræver konsistente, regelmæssigt planlagte målinger for hver patient over tid, hvilket betyder, at programmer med uregelmæssig eller patientinitieret målingsplanlægning vil have sværere ved at beregne denne metrik pålideligt, og manglende målinger skal håndteres eksplicit (enten ekskluderet fra nævneren eller behandlet som en fejl) snarere end stiltiende ignoreret. Det kliniske målinterval og det krævede antal konsistente målinger bør fastsættes ud fra etablerede kliniske retningslinjer for den specifikke tilstand, ikke valgt bagudrettet for at producere et gunstigt tal.

## Faldgruber

- **Rapportering af kun forbedring uden stabilisering**: en engangsforbedring fra baseline beviser ikke vedvarende kontrol; begge metrikker bør rapporteres sammen for et fuldstændigt billede.
- **Stiltiende ekskludering af patienter med manglende målinger**: at ekskludere patienter, der gik glip af en planlagt måling, fra nævneren kan kunstigt hæve stabiliseringsraten, hvis de manglende målinger uforholdsmæssigt kommer fra patienter, der klarer sig dårligere.
- **Brug af et for kort måleforløb**: at kræve kun to datapunkter for at erklære "stabilisering" fanger ikke den variabilitet, som et længere forløb ville afsløre.
- **Anvendelse af et generisk målinterval i stedet for et klinisk fastsat**: det passende stabiliseringsinterval varierer efter tilstand, patientalder og komorbiditeter; et generisk interval kan både overvurdere og undervurdere reel klinisk kontrol.

## Kilder

- American Heart Association, retningslinjer for vedvarende blodtrykskontrol
- American Diabetes Association, standarder for langsigtet glykæmisk kontrol
- Collegialt bedømt litteratur om vedvarende resultater af digital kronisk sygdomsstyring, f.eks. undersøgelser offentliggjort i Diabetes Care og Hypertension

Se også: [biometrisk forbedringsrate](../biometrisk-forbedringsrate/), den relaterede metrik for omfanget af ændring fra baseline, i modsætning til vedvarende kontrol efter opnåelse af et mål.
