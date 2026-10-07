# Kasutajate Püsimuse Määr

Kasutajate püsimuse määr on algperioodil aktiivsete kasutajate osakaal, kes jäävad aktiivseks hilisemal perioodil, ning selle pöördväärtus, väljalangemise määr (churn), on nende osakaal, kes lõpetavad toote kasutamise täielikult. Kus patsiendiportaali kasutuselevõtu määr (vt see teema) mõõdab, kas patsient üldse digitaaltervise toote sisuliselt aktiveerib, mõõdab püsimus seda, kas ta jätkab selle kasutamist – ning iga tellimuspõhise või jätkuva ravi digitaaltervise toote puhul on püsimus tavaliselt üks mõõdik, mis on kõige tihedamalt seotud nii kliinilise mõju kui ka kaubandusliku jätkusuutlikkusega.

## Miks see on oluline

Digitaaltervise toode, mis ei suuda kasutajaid hoida, ei suuda pakkuda püsivat kliinilist kasu, olenemata sellest, kui tugevad on selle algsed kasutuselevõtu või aktiveerimise näitajad: kaks nädalat kasutatud ja seejärel hüljatud kroonilise seisundi juhtimise tööriist ei muuda tõenäoliselt biomeetrilist tulemust, mis sõltub kuude pikkusest püsivast käitumise muutusest. Püsimus on ka üks kaubanduslikult olulisemaid mõõdikuid, mida digitaaltervise ettevõte investoritele ja maksjatele esitab, kuna püsimuskõverad (väljalangemise kuju aja jooksul, mitte ainult üksik püsimusprotsent) paljastavad, kas toode on leidnud tõeliselt jätkusuutliku kasutusmustri või püüab lihtsalt uudsusest tingitud esialgset huvi, mis ennustatavalt hääbub. Püsimuskõver, mis tasandub pärast algset langust (patsiendid, kes jõuavad üle esimese kuu, kipuvad jääma), on väga erinev ja palju tervislikum signaal kui kõver, mis jätkab püsivat langust ilma põhjata.

## Kuidas seda arvutatakse

```
Püsimuse määr (periood N) = perioodil N aktiivsed kasutajad, kes olid
                            aktiivsed ka algkohordi perioodil /
                            algkohordi perioodi kasutajad × 100

Väljalangemise määr = 1 − püsimuse määr (sama perioodi kohta)

Esitage kohordi püsimuskõverana (püsimus päeval/nädalal/kuul 1, 2,
3…), mitte ühe ajahetke näitajana, kuna üksik hetktõmmis segab
hiljuti liitunud kasutajad (kellel pole veel olnud võimalust
välja langeda) pikaajaliste kasutajatega.
```

## Läbitöötatud näide

Digitaaltervise rakendus kaasab jaanuaris 1 000 uue kasutaja kohordi. Kuu 1 lõpuks on neist algsest 1 000-st endiselt aktiivsed 640 (kuu 1 püsimus 64%). Kuu 3 lõpuks jääb aktiivseks 410 (kuu 3 püsimus 41%). Kuuks 6 jääb aktiivseks 380 (kuu 6 püsimus 38%). Selle kõvera kuju – järsk algne langus, millele järgneb tasandumine kuu 3 ja kuu 6 vahel – viitab sellele, et toode hoiab stabiilset kasutajate tuumikut, kui nad on ületanud algse kasutuselevõtu tõkke, mis on oluliselt erinev ja julgustavam signaal, kui langus kuult 3 kuule 6 oleks jätkunud samas tempos kui kuudel 1 kuni 3.

## Andmeallikad ja hoiatused

Püsimus arvutatakse toote enda sisselogimis- või tegevussündmuste logidest, määratledes "aktiivse" järjepidevalt (näiteks vähemalt üks kvalifitseeruv seanss perioodil) kõigi võrreldavate kohortide puhul. Kohorte tuleks võrrelda võrdsel alusel – sama "aktiivse" algdefinitsioon, sama pikkusega vaatlusaken –, kuna isegi väikesed definitsioonilised erinevused (30-päevased versus 28-päevased kuud või rangem versus leebem "aktiivse" lävend) võivad nihutada esitatud püsimusprotsenti mitme punkti võrra ilma kasutajate käitumises tegeliku erinevuseta. Hooajalised mõjud on tavalised tervise rakendustes, mis on seotud uusaasta lubaduste või konkreetsete tervisealase teadlikkuse perioodidega, mistõttu on aastate vaheline kohortide võrdlus tavaliselt informatiivsem kui eri aastaaegadest pärit kõrvuti kohortide võrdlemine.

## Lõksud

- **Ühe püsimuse hetktõmmise esitamine kõvera asemel**: üksik "X% kasutajatest on endiselt aktiivsed" näitaja ilma väljalangemise kujuta aja jooksul ei suuda eristada toodet, mis tasandub (tervislik), tootest, mis on pidevas languses (ebatervislik).
- **"Aktiivse" definitsiooni muutmine aruandlusperioodide vahel**: aktiivse kasutaja definitsiooni leevendamine (näiteks passiivse rakenduse avamise lugemine lõpetatud toimingu asemel) võib panna püsimuse paranema paistma, kui tegelik kasutus pole üldse muutunud.
- **Kohordi hooajalisuse tähelepanuta jätmine**: jaanuarikohordi püsimuse võrdlemine (mida sageli täidab uusaasta lubaduste tõttu kaasamine, mis toob keskmiselt vähem motiveeritud kohordi) teisel aastaajal hangitud kohordiga võib anda eksitavaid trendijäreldusi.
- **Orgaaniliste ja tasulise hankimise kohortide segamine**: erinevate kanalite kaudu hangitud kasutajad püsivad sageli väga erinevalt; nende segamine üheks koondnäitajaks võib varjata kanalispetsiifilist püsimusprobleemi.

## Allikad

- Eelretsenseeritud kirjandus digitaaltervise rakenduste kaasatuse ja väljalangemise kohta, näiteks ajakirjas Journal of Medical Internet Research (JMIR mHealth and uHealth) avaldatud uuringud
- Digital Therapeutics Alliance, parimate tavade juhised digitaalsete terapeutikumide kaasatuse ja püsimuse mõõtmiseks
- Mobiilse tervise rakenduste püsimuse tööstuse võrdlusaruanded analüütikaplatvormidelt ja digitaaltervise turu-uuringute organisatsioonidelt

Vaata ka: [patsiendi kaasatuse järjepidevuse määr](../patsiendi-kaasatuse-järjepidevuse-määr/), mis mõõdab kaasatuse kvaliteeti püsivate kasutajate seas, erinevalt sellest, kas nad üldse kaasatuks jäävad.
