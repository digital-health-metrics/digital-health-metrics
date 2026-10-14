# Voodipäevade Vähenemine

Voodipäevade vähenemine mõõdab statsionaarse haigla voodipäevade koguarvu, mida on õnnestunud vältida, viies kindlaks määratud ravijuhtumi – kõige sagedamini operatsioonijärgse taastumise või ägeda seisundi ravi – traditsiooniliselt statsionaarselt ravilt üle digitaalselt toetatud alternatiivile, näiteks virtuaalosakonnale või haiglaravile kodus. See on virtuaalosakondade ja kodus osutatava haiglaravi algatuste peamine mahutavusmõõdik, mis tõlgib kliinilise raviviisi muutuse otse valuutasse (voodimahutavus), mille alusel haiglate tegevusjuhid ja süsteemi planeerijad tegelikult tegutsevad.

## Miks see on oluline

Statsionaarsete voodikohtade mahutavus on iga haiglasüsteemi üks kõige piiratumaid ja kallimaid ressursse ning virtuaalosakonna või kodus osutatava haiglaravi programmi põhiline väärtuspakkumine on see, et see suudab ohutult pakkuda kindlaksmääratud taset kliinilist ravi ilma füüsilist voodikohta hõivamata, vabastades selle mahutavuse patsientidele, keda ei saa muul viisil ravida. Voodipäevade vähenemine muudab sageli abstraktse väite ("see programm parandab ravi") konkreetseks operatiivnäitajaks, mille alusel haiglate mahutavuse planeerijad, rahandusmeeskonnad ja tellijad saavad otse tegutseda: seda saab kasutada modelleerimaks, kas investeering seireprogrammi tasub end vältitud voodikulude kaudu ära ja kui palju. Kuna voodipäevade vähenemisel on väärtus ainult siis, kui patsiendiohutus säilib, tuleks seda alati esitada koos – mitte selle asemel – sama populatsiooni ohutustulemuse mõõdikuga (näiteks haiglasse taastuvastuvõtmise või statsionaarsele ravile eskaleerimise määr).

## Kuidas seda arvutatakse

```
Voodipäevade vähenemine = oodatavad voodipäevad tavapärase
                          statsionaarse ravi korral (põhinevad sobitatud
                          patsiendikohordi ajaloolistel
                          haiglaravi kestuse andmetel) − virtuaalsel/
                          digitaalsel ravirajal olevate patsientide
                          tegelikult kasutatud voodipäevad

Esitage iga kliinilise ravitee kohta eraldi (nt operatsioonijärgne
taastumine, ägedad hingamisteede ägenemised), kuna oodatav haiglaravi
kestus varieerub seisundiga suuresti ja omavahel mitteseotud raviteede
koondnäitaja ei ole sisukas.
```

## Läbitöötatud näide

Haigla ajaloolised andmed näitavad, et teatud plaanilisest kirurgilisest protseduurist taastuvate patsientide keskmine statsionaarse ravi kestus on 4 päeva. Virtuaalosakonna programm kaasab 150 samast protseduurist taastuvat patsienti ja kirjutab nad välja keskmiselt 1,5 statsionaarse ravipäeva järel, jälgides ülejäänud taastumist kaugjälgimise teel. Voodipäevade vähenemine on (4 − 1,5) × 150 = 375 voodipäeva mõõteperioodi jooksul. Seda näitajat tuleks esitada koos virtuaalosakonna kohordi 30-päevase statsionaarsele ravile eskaleerimise määra ja haiglasse taastuvastuvõtmise määraga samade 150 patsiendi kohta, kuna voodipäevade kokkuhoid, mis tuleb märkimisväärselt kõrgema eskaleerimise või taastuvastuvõtmise määra hinnaga, ei ole kliiniline võit, nagu pealkirjanäitaja muidu viitaks.

## Andmeallikad ja hoiatused

Oodatavad voodipäevad nõuavad usaldusväärset ajaloolist lähtejoont, ideaaljuhul sobitatud patsiendikohorti, keda raviti tavapärase statsionaarse ravi korral ning kelle kliinilised omadused (vanus, kaasuvad haigused, protseduuri tüüp, raskusaste) on sarnased virtuaalosakonna populatsiooniga, kuna võrdlemine sobitamata ajaloolise keskmisega riskib tegeliku vähenemise üle- või alahindamisega, kui digitaalselt juhitud kohort on ajaloolisest võrdlusrühmast süstemaatiliselt tervem või haigem. Digitaalsel ravirajal tegelikult kasutatud voodipäevad pärinevad haigla enda vastuvõtu-väljakirjutamise-ülekande (ADT) süsteemist; igasugune eskaleerimine tagasi statsionaarsele ravile jälgitava taastumisperioodi jooksul tuleks ausalt programmi arvele lugeda (kasutatud voodipäevadena, mitte välja jättes), kuna eskaleerimiste väljajätmine arvutusest suurendaks näilist vähenemist kunstlikult.

## Lõksud

- **Voodipäevade vähenemise esitamine ilma sobitatud ohutusvõrdluseta**: virtuaalosakond, mis säästab voodipäevi, kuid mille eskaleerimise või taastuvastuvõtmise määr on tavapärasest ravist märkimisväärselt halvem, ei ole tõelist paranemist näidanud; esitage alati mõlemad koos.
- **Sobitamata või aegunud ajaloolise lähtejoone kasutamine**: võrdlemine ajaloolise kohordiga, kellel on erinev haigusjuhtude struktuur, kaasuvate haiguste koormus või kliinilise tava ajastu, võib tegelikku voodipäevade kokkuhoidu oluliselt üle- või alahinnata.
- **Statsionaarsele ravile tagasi eskaleerimiste väljajätmine arvutusest**: patsiendi, keda jälgitakse virtuaalselt, kuid kes taastumise keskel statsionaarsele voodile eskaleeritakse, need voodipäevad tuleks lugeda programmi kahjuks, mitte vaikides analüüsist välja jätta.
- **Väga erineva oodatava haiglaravi kestusega ravimarsruutide koondamine**: voodipäevade vähenemise liitmine kliiniliselt mitteseotud ravimarsruutide (näiteks operatsioonijärgne taastumine ja krooniline hingamisteede ravi) üle üheks näitajaks varjab, milline konkreetne ravitee tegelikult kokkuhoidu tekitab.

## Allikad

- NHS England, virtuaalosakondade ja kodus osutatava haiglaravi programmi juhised ning voodipäevade mõju aruandluse standardid
- Eelretsenseeritud kirjandus kodus osutatava haiglaravi ja virtuaalosakondade mudelite kohta, näiteks ajakirjades JAMA Internal Medicine ja npj Digital Medicine avaldatud uuringud
- Institute for Healthcare Improvement (IHI), mahutavuse juhtimise ja alternatiivsete raviviiside juhised

Vaata ka: [haiglasse taastuvastuvõtmise määr](../haiglasse-taastuvastuvõtmise-määr/), ohutusmõõdik, mida tuleks alati esitada koos mis tahes voodipäevade vähenemise väitega sama patsiendipopulatsiooni kohta.
