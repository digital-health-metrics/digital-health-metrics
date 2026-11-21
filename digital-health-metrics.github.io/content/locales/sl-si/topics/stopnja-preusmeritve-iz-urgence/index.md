# Stopnja preusmeritve iz urgence

Stopnja preusmeritve iz urgence (oddelka za nujno medicinsko pomoč, ED) meri delež stikov s pacienti, obravnavanih z orodjem za digitalno triažo ali virtualno oskrbo, ki bi brez te intervencije verjetno povzročili obisk urgence, pa so bili namesto tega varno obravnavani po poti nižje nujnosti – nasvet za samooskrbo, termin v primarni oskrbi ali načrtovan obisk nujne oskrbe. Je specifična, visoko vredna podmnožica natančnosti triaže in usmerjanja (glej to temo), osredotočena izključno na preprečeno uporabo urgence, kar je izid, ki je najbolj neposredno povezan s stroški zdravstva in razbremenitvijo zmogljivosti urgence.

## Zakaj je pomembna

Urgence so med najdražjimi okolji oskrbe na stik in se pogosto uporabljajo za težave, ki bi jih bilo mogoče varno obravnavati drugje, zato je zmožnost orodja za digitalno triažo, da ustrezne primere varno preusmeri stran od urgence, ena njegovih komercialno in operativno najvrednejših zmožnosti – in ena najlažjih za sporočanje plačniku ali zdravstvenemu sistemu, ki ocenjuje donosnost naložbe v orodje. Vendar ima preusmeritev vrednost le, če je varna: orodje, ki agresivno preusmerja paciente stran od urgence za ceno zgrešitve resničnih nujnih primerov, je optimiziralo povsem napačno stran izravnave, zato je treba stopnjo preusmeritve iz urgence vedno poročati skupaj z varnostnim kazalnikom, ki spremlja zgrešene ali zakasnjene nujne primere med preusmerjenimi pacienti, ne izolirano kot čisto zmago v učinkovitosti.

## Kako se izračuna

```
Stopnja preusmeritve iz urgence = stiki s pacienti, varno preusmerjeni iz urgence
                                   na ustrezno pot nižje nujnosti / vsi stiki
                                   s pacienti, ocenjeni kot potencialno namenjeni
                                   urgenci × 100

»Varno preusmerjen« zahteva potrditev, prek nadaljnjega spremljanja ali
povezanih podatkov zdravstvenega zapisa, da stanje pacienta v opredeljenem
oknu spremljanja (npr. 72 ur) dejansko ni zahtevalo nujne oskrbe –
odločitev o preusmeritvi ni potrjena kot varna že zato, ker pacient po tem
ni takoj odšel na urgenco.

Poročajte skupaj z:
  Stopnjo zgrešenih nujnih primerov = preusmerjeni pacienti, ki so v oknu
                           spremljanja zahtevali nujno oskrbo / vsi
                           preusmerjeni pacienti × 100
```

## Izračunani primer

Storitev digitalne triaže v mesecu oceni 3.000 stikov s pacienti, za katere njen klinični algoritem presodi, da bi brez intervencije potencialno šli na urgenco. Od teh jih je 1.800 preusmerjenih na pot nižje nujnosti (stopnja preusmeritve 60 %). Nadaljnje spremljanje preusmerjene kohorte po 72 urah s povezanimi podatki zdravstvenega zapisa ugotovi, da se je 45 od 1.800 preusmerjenih pacientov v tem oknu vendarle zglasilo na urgenci (stopnja zgrešenih nujnih primerov 45 / 1.800 × 100 = 2,5 %). Poročanje številke preusmeritve 60 % brez stopnje zgrešenih nujnih primerov 2,5 % bi prikazalo le polovico izravnave med varnostjo in učinkovitostjo, ki dejansko določa, ali je vedenje orodja pri preusmerjanju ustrezno umerjeno.

## Viri podatkov in omejitve

Potrditev, da preusmerjeni pacient pozneje ni potreboval nujne oskrbe, je odvisna od povezanih podatkov – bodisi lastnih zapisov urgence istega zdravstvenega sistema, regionalne izmenjave zdravstvenih informacij ali strukturiranega nadaljnjega klica ali ankete pacienta – program preusmeritve, ki deluje brez katerega koli od teh virov podatkov, dejansko ne more potrditi lastne varnosti, ampak jo le predpostavlja na podlagi odsotnosti pritožbe. Ustrezna stopnja preusmeritve in sprejemljiva stopnja zgrešenih nujnih primerov sta kliničnopolitični odločitvi, ne zgolj statistični, in bi ju moralo namensko določiti klinično vodstvo in ne dovoliti, da nastaneta kot stranski učinek praga, ki ga algoritem triaže po naključju privzeto uporablja. Stopnjo preusmeritve je treba poročati po kategoriji prisotnega simptoma ali težave, saj se ustrezne stopnje preusmeritve izjemno razlikujejo po stanju (majhna rana in bolečina v prsih zahtevata zelo različna praga preusmeritve).

## Pasti

- **Poročanje stopnje preusmeritve brez povezanega varnostnega kazalnika zgrešenih nujnih primerov**: visoka stopnja preusmeritve, dosežena s podtriažo resničnih nujnih primerov, ni uspeh; kazalnika je treba vedno poročati skupaj.
- **Predpostavka, da brez obiska urgence preusmeritev ni bila varna**: pacient se lahko zglasi na urgenci drugega, nepovezanega bolnišničnega sistema ali ima resnično škodljiv izid, ne da bi se kdaj zglasil na kateri koli urgenci; varnost potrdite s povezanimi podatki ali strukturiranim nadaljnjim spremljanjem, ne le z odsotnostjo obiska urgence v istem sistemu.
- **Postavitev praga preusmeritve zgolj za povečanje stopnje preusmeritve**: algoritem ali politika, prilagojena maksimiranju preusmeritve brez ustrezne varnostne omejitve, bo menjala varnost pacientov za lepše videti številko učinkovitosti.
- **Mešanje stopnje preusmeritve čez vse vrste težav**: ustrezne stopnje preusmeritve se izjemno razlikujejo glede na prisotno težavo; ena mešana stopnja ne more pokazati, ali orodje deluje varno in učinkovito za specifična stanja, ki so klinično najpomembnejša.

## Viri

- Agency for Healthcare Research and Quality (AHRQ), raziskave o uporabi urgenc in ustreznem preusmerjanju v okolje oskrbe
- NHS England, smernice o varnosti in standardih učinkovitosti storitev NHS 111 in digitalne triaže nujne oskrbe
- Recenzirana literatura o izidih preusmeritve iz urgence z digitalno triažo in virtualno oskrbo, na primer študije, objavljene v revijah Annals of Emergency Medicine in npj Digital Medicine

Glej tudi: [natančnost triaže in usmerjanja pacientov](../natančnost-triaže-in-usmerjanja-pacientov/), širši kazalnik natančnosti, katerega specifična, za varnost ključna podmnožica je ta.
