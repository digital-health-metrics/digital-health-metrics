# Sekkumiseni Kuluv Aeg

Sekkumiseni kuluv aeg on automaatse terviseteavituse genereerimisest – näiteks kaugjälgimisseade tuvastab vahemikust väljas oleva elutähtsa näitaja või digitaalne triaažitööriist märgib halveneva patsiendi – kuni kliinilise meeskonna liikme tegeliku reageerimise algatamiseni möödunud aeg. See on protsessimõõdik, mis määrab, kas automaatne hoiatussüsteem täidab oma põhilubaduse: tabada probleem varem, kui seda oleks teinud traditsiooniline planeeritud kontrollide või patsiendi algatatud telefonikõnede mudel.

## Miks see on oluline

Hoiatussüsteem, mis genereerib kliiniliselt õige hoiatuse, kuid millele ei järgne õigeaegset reageerimist, ei ole tegelikult patsiendiohutust parandanud; kaugjälgimise ja automaatsete hoiatuste kogu väärtuspakkumine põhineb ringi sulgemisel kiiremini, kui seda teeks alternatiivne jälgimata ravitee. Kuna erinevate hoiatuste raskusastmed õigustavad erinevat reageerimise kiireloomulisust, tuleks sekkumiseni kuluvat aega alati esitada raskusastme taseme kaupa, mitte ühe keskmisena, kuna kiire keskmine kõigi hoiatuste lõikes võib varjata ohtlikult aeglast reageerimist väikesele arvule kõige tõsisematele. See mõõdik on ka üks selgemaid ja veenvamaid viise automaatse jälgimisprogrammi väärtuse tõestamiseks kliinilisele juhtkonnale ja maksjatele, kuna seda saab otse võrrelda sama organisatsiooni varasema, mitteautomatiseeritud reageerimisajaga sarnase kliinilise stsenaariumi puhul.

## Kuidas seda arvutatakse

```
Sekkumiseni kuluv aeg = ajatempel(kliiniline reageerimine algatatud) −
                        ajatempel(hoiatus genereeritud)

Esitage mediaan ja kõrge protsentiil (nt 90.), segmenteerituna
hoiatuse raskusastme taseme järgi, mitte ühe segatud keskmisena.

"Kliiniline reageerimine algatatud" tuleks defineerida täpselt ja
järjepidevalt – nt kliinik avab patsiendi kirje ja tegutseb või
dokumenteeritud väljuva kontakti katse – mitte ainult hoiatuse
vaatamine või kinnitamine ilma toiminguta.
```

## Läbitöötatud näide

Südame kaugjälgimise programmi hoiatussüsteem märgib kuu jooksul 200 kõrge raskusastmega arütmiahoiatust. Mediaanaeg hoiatuse genereerimisest kuni kliiniku väljuva kontakti algatamiseni on 12 minutit, 90. protsentiili aeg on 38 minutit. Sama populatsiooni varasema, jälgimata ravitee ajaloolised andmed (kus sarnane sündmus tuleks tavaliselt esile alles järgmisel planeeritud kliinikuvisiidil või haiglasse pöördumisel) näitavad mediaanaega mis tahes kliinilise reageerimiseni, mida mõõdetakse päevades, mitte minutites. See võrdlus – mitte 12-minutiline näitaja üksi – näitab jälgimisprogrammi kliinilist väärtust; 90. protsentiili näitaja on sama oluline, kuna see tuvastab hoiatuste saba, mille peale tegutsemine võttis üle poole tunni ja mis väärib oma algpõhjuste ülevaatust.

## Andmeallikad ja hoiatused

Hoiatuse genereerimise ajatemplid pärinevad jälgimisplatvormi enda sündmuslogist; kliinilise reageerimise ajatemplid pärinevad tavaliselt elektroonilise terviseandmete süsteemi auditijäljest või hooldusmeeskonna enda töövoo- või ülesannete haldussüsteemist ning need kaks süsteemi peavad olema täpselt ajaliselt sünkroniseeritud, et arvutatud intervall oleks usaldusväärne. "Reageerimine algatatud" vajab ranget, dokumenteeritud definitsiooni, kuna kliinik, kes hoiatust lihtsalt vaatab või tühistab ilma edasise toiminguta, on põhimõtteliselt erinev ja palju vähem rahustav sündmus kui see, mis käivitab tegeliku väljuva kontakti või sekkumise – nende kahe segamine paneb reageerimisaja paistma parem kui kliiniline tegelikkus. Öise ja nädalavahetuse personali tase mõjutab sageli oluliselt sekkumiseni kuluvat aega, mistõttu tuleks seda mõõdikut esitada kellaaja ja nädalapäeva segmendi kaupa, kui hoiatuste maht seda lubab, mitte ainult ööpäevaringse segatud keskmisena, mis võib varjata tõsist tööajavälist reageerimislünka.

## Lõksud

- **Hoiatuse kinnitamise lugemine reageerimiseks**: hoiatuse vaatamine või tühistamine kliiniku poolt ei ole sama mis kliinilise reageerimise algatamine; defineerige reageerimine rangelt dokumenteeritud toiminguna, mitte passiivse kinnitamisena.
- **Ühe segatud aja esitamine kõigi raskusastmete lõikes**: kiire keskmine madala ja kõrge raskusastmega hoiatuste kokku lõikes võib varjata ohtlikult aeglast reageerimisaega just kõrgeima raskusastmega hoiatuste puhul, mis on kõige olulisemad.
- **Personalimustrite mõjude tähelepanuta jätmine**: reageerimisaeg varieerub sageli oluliselt kellaaja ja nädalapäeva järgi personali taseme tõttu; üks üldine keskmine võib varjata süstemaatilist tööajavälist või nädalavahetuse reageerimislünka.
- **Sekkumiseni kuluva aja võrdlemine organisatsioonide vahel, millel on erinevad hoiatuslävendid**: konservatiivsema (tundlikuma) hoiatuslävendiga organisatsioon genereerib rohkem madala kiireloomulisusega hoiatusi, mis võivad lahjendada tema keskmist reageerimisaega võrreldes organisatsiooniga, mis kasutab rangemat lävendit, sõltumata tegelikust kliinilisest reageerimisvõimest.

## Allikad

- NHS England, kaugjälgimise ja virtuaalosakondade kliinilise reageerimise standardite juhised
- ONC / HealthIT.gov, kliiniliste hoiatussüsteemide disaini ja ohutuse juhised
- Eelretsenseeritud kirjandus patsiendi kaugjälgimise hoiatuste reageerimisaegade ja kliiniliste tulemuste kohta, näiteks ajakirjas npj Digital Medicine avaldatud uuringud

Vaata ka: [seadme tööaja määr](../seadme-tööaja-määr/), kuna usaldusväärne sekkumiseni kuluva aja näitaja sõltub sellest, et aluseks olev jälgimisseade on tegelikult võrgus, et hoiatust üldse genereerida.
