# Stopnja razpoložljivosti naprav

Stopnja razpoložljivosti naprav meri delež načrtovanega časa spremljanja, v katerem je povezana zdravstvena naprava – senzor za oddaljeno spremljanje pacientov, nosljiva naprava ali domača enota za telezdravje – dejansko na spletu, prenaša podatke in pravilno deluje, in ne brez povezave, odklopljena ali v okvari. Je temeljni infrastrukturni kazalnik pod vsakim programom oddaljenega spremljanja ali povezanih naprav: klinično opozorilo, biometrični trend ali številka vključenosti, izračunana iz naprave, ki je bila pogosto brez povezave, je zanesljiva le toliko, kolikor je zanesljiva povezava za njo.

## Zakaj je pomembna

Celotna klinična vrednostna ponudba programa oddaljenega spremljanja pacientov je odvisna od neprekinjenega ali skoraj neprekinjenega zajema podatkov; naprava s slabo razpoložljivostjo ustvarja tihe vrzeli v pacientovi klinični sliki, ki jih je mogoče zamenjati za stabilnost (ni opozorila, ker ni podatkov, ne ker se ni nič spremenilo) in ne pravilno prepoznati kot okvaro spremljanja. Razpoložljivost naprav je tudi vodilni kazalnik stroškov programa in izkušnje pacientov: naprava, ki pogosto izgubi povezavo, ustvarja klice podpori, frustracijo pacientov in potencialno nepotreben klinični stik za preverjanje, ali vrzel v podatkih odraža resničen klinični dogodek ali preprosto tehnično napako. Ker so okvare razpoložljivosti naprav pogosto pripisljive infrastrukturi, ki jo organizacija nadzoruje (slabo konfiguriran celični prehod, šibka pokritost Wi-Fi v pacientovem domu, slabo vzdrževana flota naprav), in ne pacientu, ta kazalnik spada povsem k ponudniku in ekipi tehničnih operacij, ne pa neločljivo v kazalnike vključenosti pacientov.

## Kako se izračuna

```
Stopnja razpoložljivosti naprav = čas, ko je bila naprava na spletu in prenašala
                                   veljavne podatke / skupni načrtovani čas
                                   spremljanja × 100

Segmentirajte temeljne vzroke izpadov, kjer podatki dopuščajo:
  Okvara na strani naprave   (baterija, strojna okvara, zrušitev strojne programske opreme)
  Okvara povezljivosti       (izpad celične/Wi-Fi/VPN povezave)
  Dejavniki na strani pacienta (naprava izklopljena, premaknjena izven dosega)

Podporni tehnični parametri za spremljanje ob razpoložljivosti:
  Povprečna obremenitev CPE, uporaba pomnilnika in raven baterije na napravo
  Povprečni čas med okvarami povezljivosti
  Povprečni čas do ponovne povezave po izpadu
```

## Izračunani primer

Program oddaljenega spremljanja srca namesti 1.000 povezanih naprav, od katerih se pričakuje neprekinjeno prenašanje. V 30-dnevnem mesecu (720 načrtovanih ur spremljanja na napravo) flota zabeleži skupno 705.600 dejanskih ur na spletu glede na načrtovanih 720.000 ur, kar da stopnjo razpoložljivosti naprav na ravni flote 705.600 / 720.000 × 100 = 98 %. Analiza temeljnih vzrokov 14.400 ur izpada pokaže, da jih je 60 % pripisljivih izpadom celične povezljivosti, osredotočenim v določeni podeželski regiji storitve, 25 % napravam s starajočimi se baterijami, označenimi za zamenjavo, in 15 % pacientom, ki so napravo začasno izklopili. Ta razčlenitev kaže na dva jasna, različna ukrepa – popravek povezljivosti za prizadeto regijo in proaktiven program zamenjave baterij – ki ju ena sama skupna številka razpoložljivosti ne bi ločila.

## Viri podatkov in omejitve

Podatki o razpoložljivosti prihajajo iz lastnega sistema za upravljanje naprav in telemetrije proizvajalca naprave ali ponudnika platforme, ki beleži dogodke povezave in »srčnega utripa« na napravo; organizacija bi morala natančno potrditi, kaj ponudnik šteje za »na spletu« (naprava lahko poroča, da je povezana v omrežje, a ne prenaša veljavnih kliničnih podatkov, kar bi se za klinične namene moralo šteti kot izpad, tudi če nadzorna plošča ponudnika poroča, da je povezana). Razpoložljivost je treba poročati po kohorti naprav ali geografiji, kjer obseg to dopušča, saj je kakovost povezljivosti pogosto geografsko združena (podeželsko celično pokritje, Wi-Fi v starejših zgradbah) in ne enakomerno porazdeljena po populaciji pacientov, skupna številka na ravni flote pa lahko prikrije resno, odpravljivo regionalno težavo.

## Pasti

- **Mešanje omrežne povezave z veljavnim prenosom podatkov**: naprava je lahko na nadzorni plošči ponudnika videti »povezana«, a ne prenaša uporabnih kliničnih podatkov; razpoložljivost opredelite in merite glede na dejanski prejem veljavnih podatkov, ne le surove omrežne povezljivosti.
- **Poročanje samo povprečja flote**: to lahko prikrije resno težavo z izpadi, značilno za geografsko območje ali kohorto naprav, ki bi jo ciljno povprečje razkrilo in ki ima specifično, odpravljivo rešitev.
- **Neločevanje temeljnega vzroka izpada**: izpadi na strani naprave, povezljivosti in pacienta zahtevajo povsem različne ukrepe; en sam odstotek izpada brez segmentacije temeljnih vzrokov ni uporaben za ukrepanje.
- **Obravnavanje vrzeli v podatkih privzeto kot klinične stabilnosti**: manjkajoč tok podatkov iz naprave brez povezave bi moral sprožiti tehnično preverjanje povezljivosti in ne biti tiho razložen kot »ni novic, dobre novice« za pacientov klinični status.

## Viri

- Continua Design Guidelines / Personal Connected Health Alliance, tehnični standardi interoperabilnosti za povezane zdravstvene naprave
- ONC / HealthIT.gov, smernice o izvajanju programov oddaljenega spremljanja pacientov in tehničnih zahtevah
- Recenzirana literatura o zanesljivosti naprav za oddaljeno spremljanje pacientov in popolnosti podatkov, na primer študije, objavljene v reviji npj Digital Medicine

Glej tudi: [natančnost triaže in usmerjanja pacientov](../natančnost-triaže-in-usmerjanja-pacientov/), ki je odvisna od prejemanja popolnih, zanesljivih podatkov naprav, da je sploh mogoče sprejeti pravilno odločitev o triaži.
