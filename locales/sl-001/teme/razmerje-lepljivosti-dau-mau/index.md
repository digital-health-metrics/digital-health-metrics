# Razmerje lepljivosti DAU/MAU

Razmerje lepljivosti DAU/MAU primerja dnevne aktivne uporabnike (DAU) z mesečnimi aktivnimi uporabniki (MAU) – isto osnovno mero uporabljamo tudi za tedenske aktivne uporabnike (WAU) v primerjavi z MAU – da izrazi, kolikšen delež širše baze uporabnikov izdelka ga uporablja na posamezen dan. Je standardna produktno-analitična mera intenzivnosti vključenosti, ki se razlikuje od tega, ali je uporabnik sploh zadržan (glej stopnjo zadržanja uporabnikov) ali kako dosledno se določen vključen pacient vključuje skozi čas (glej stopnjo doslednosti vključenosti pacientov): lepljivost opisuje ritem uporabe na ravni populacije, ne vzorca posameznika.

## Zakaj je pomembno

Dva digitalna zdravstvena izdelka lahko sporočata enako število mesečnih aktivnih uporabnikov, a imata zelo različno osnovno intenzivnost vključenosti: pri enem večina teh uporabnikov odpre aplikacijo skoraj vsak dan, pri drugem pa jo večina odpre enkrat mesečno tik preden bi sicer veljali za neaktivne. Razmerje lepljivosti DAU/MAU loči ti dve zelo različni situaciji z eno samo, preprosto in dobro razumljeno primerjalno številko, ki jo lahko produktne in klinične ekipe spremljajo skozi čas in primerjajo z znanimi industrijskimi razponi – razmerje okoli 20 % je pogosto navedena razumna primerjalna vrednost za številne potrošniške aplikacije, izdelki z vsakodnevno navado (dnevnik hrane ali simptomov, ki ga mora pacient uporabljati vsak dan) pa bi morali biti ocenjeni po bistveno višji merici. Ker je lepljivost občutljiva na to, kako je opredeljen »aktiven«, je najbolj uporabna kot trend za en izdelek skozi čas in kot primerjava z izdelki, zgrajenimi za podoben vzorec uporabe, ne kot absolutna primerjalna vrednost med panogami.

## Kako se izračuna

```
Razmerje lepljivosti DAU/MAU = povprečno število dnevnih aktivnih uporabnikov v obdobju /
                                mesečni aktivni uporabniki v istem obdobju × 100

Razmerje WAU/MAU (tedensko, isto načelo) je mehkejša različica, primernejša
za izdelke, ki naj bi se uporabljali nekajkrat na teden in ne vsak dan.

»Aktiven« mora biti opredeljen natančno in dosledno (npr. dokončano
kvalificirano dejanje, ne pasivno odprtje aplikacije) tako v števcu
kot v imenovalcu.
```

## Izračunani primer

Digitalna aplikacija za obvladovanje sladkorne bolezni ima v danem mesecu 10.000 mesečnih aktivnih uporabnikov, opredeljenih kot vsak uporabnik, ki v tistem mesecu opravi vsaj eno kvalificirano dejanje (vnos glukoze, vnos obroka ali odkljukanje zdravila). Povprečje števila dnevnih aktivnih uporabnikov v 30 dneh meseca je povprečen DAU 2.200. Razmerje lepljivosti DAU/MAU je 2.200 / 10.000 × 100 = 22 %, kar pomeni, da se na tipičen dan okoli 22 % mesečne baze uporabnikov aplikacije vključi vanjo – razumna številka za orodje za kronično bolezen z dnevno navado, čeprav bi produktna ekipa želela videti, da se skozi čas povečuje, ko idealno vedenje (dnevno beleženje) postaja za vključene paciente bolj vsakdanje.

## Viri podatkov in omejitve

DAU, WAU in MAU se vsi izračunajo iz istih osnovnih dnevnikov dogodkov, z eno dosledno opredelitvijo »kvalificiranega aktivnega« dogodka v vseh oknih; spreminjanje te opredelitve med izračunoma števca in imenovalca (na primer štetje katerega koli odprtja aplikacije za DAU, a samo dokončanega dejanja za MAU) bo dalo popačeno razmerje, ki ne odraža resnične intenzivnosti vključenosti. Ustrezna primerjalna vrednost za lepljivost je močno odvisna od predvidenega vzorca uporabe izdelka: orodje, namenjeno uporabi enkrat tedensko (tedenski vnos simptomov), bo imelo in mora imeti nižje razmerje DAU/MAU kot orodje, namenjeno vsakodnevni uporabi (spremljevalna aplikacija za neprekinjeni merilnik glukoze), zato je treba lepljivost vedno razlagati glede na predvideno kadenco uporabe izdelka, ne glede na en sam univerzalen cilj.

## Pasti

- **Primerjava razmerij lepljivosti med izdelki z različno predvideno pogostostjo uporabe**: orodje za tedensko uporabo bo strukturno kazalo nižje razmerje DAU/MAU kot orodje za dnevno uporabo, tudi če oba delujeta natanko tako, kot je predvideno za njuna primera uporabe; primerjajte z lastno predvideno kadenco izdelka, ne z enim univerzalnim ciljem.
- **Uporaba nedoslednih opredelitev dejavnosti v števcu in imenovalcu**: to lahko da razmerje lepljivosti, ki ne odraža resnične intenzivnosti vključenosti in ga ni mogoče smiselno primerjati skozi čas ali z drugimi izdelki.
- **Obravnavanje naraščajočega razmerja lepljivosti kot nedvoumno pozitivnega brez preverjanja skupnega trenda MAU**: naraščajoče razmerje, ki ga povzroča krčeča se, bolj navajena jedrna baza uporabnikov ob upadanju skupnega MAU, je zelo drugačna – in zaskrbljujočejša – situacija kot razmerje, ki ga povzroča resnično naraščajoča dnevna vključenost v stabilni ali rastoči bazi uporabnikov.
- **Spregledani učinki dneva v tednu in sezone na DAU**: DAU se lahko pri mnogih zdravstvenih izdelkih bistveno spreminja glede na dan v tednu (delovnik proti vikendu) ali sezono; uporabite povprečni DAU v obdobju, ki zajame celoten naravni cikel, in ne kratkega okna, ki bi ga lahko popačili.

## Viri

- Recenzirana in industrijska literatura o merah vključenosti v mobilne in digitalne izdelke, splošno uporabljeni primerjalni okviri iz platform za mobilno analitiko
- Digital Therapeutics Alliance, smernice dobre prakse za merjenje vključenosti pri digitalnih terapevtikih
- Recenzirana literatura o merjenju vključenosti v digitalno zdravje, na primer študije, objavljene v reviji Journal of Medical Internet Research (JMIR mHealth and uHealth)

Glej tudi: [stopnja zadržanja uporabnikov](../stopnja-zadržanja-uporabnikov/) in [stopnja doslednosti vključenosti pacientov](../stopnja-doslednosti-vključenosti-pacientov/), dve sorodni meri vključenosti, s katerima se to razmerje najpogosteje zamenjuje.
