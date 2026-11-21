# Čas obdelave digitalnih napotitev

Čas obdelave digitalnih napotitev je pretekli čas od oddaje elektronske napotitve s strani napotnega zdravnika do njene triaže in sprejema, zavrnitve ali naročitve s strani sprejemne službe. Je procesna (pretočna) mera, ločena od skupnega čakalnega časa pacienta, in je eno najjasnejših mest, kjer je mogoče pokazati, da sprememba digitalnega sistema (strukturirana e-napotnica, triaža na podlagi slik, standardizirani obrazci napotitev) premakne operativno številko in ne le oceno zadovoljstva.

## Zakaj je pomemben

Počasen ali zelo spremenljiv korak triaže doda zamudo, še preden se pacient sploh uvrsti na klinični čakalni seznam, in ker se ta zamuda zgodi pred začetkom kakršne koli klinične oskrbe, je čista procesna izguba, ki jo digitalna orodja dobro odpravijo. Sistemi napotitev, ki zahtevajo cikel »vrnitve napotitelju« zaradi manjkajočih informacij, ustvarjajo zanke ponovnega dela, ki jih je lahko spregledati, če se čas obdelave meri samo pri napotitvah, ki gladko opravijo prvi poskus. Kjer je služba uvedla strukturirane digitalne obrazce napotitev, obvezna polja ali triažo na podlagi slik (na primer pri teledermatologiji), je čas obdelave običajno najbolj prepričljiv kazalnik za prikaz koristi, ker ga je mogoče izmeriti pred spremembo in po njej z enako instrumentacijo.

## Kako se izračuna

```
Čas obdelave = časovni žig (odločitev o triaži) − časovni žig (oddaja napotitve)

Poročajte mediano in visok percentil (običajno 90.), ne le povprečja,
ker je porazdelitev močno asimetrična v desno zaradi vrnjenih ali
zapletenih napotitev.

Upoštevajte čase podfaz, kjer jih sistem beleži:
  Oddaja → prejem v službi
  Prejem → odločitev o triaži
  Odločitev o triaži → naročen termin (kjer je ustrezno)
```

## Izračunani primer

Revizijska sled sistema e-napotitev kaže mediani čas od oddaje do odločitve o triaži 1,8 dneva pri vseh specialnostih, s časom 90. percentila 6 dni, ki ga povzročajo predvsem napotitve, vrnjene napotitelju zaradi manjkajočih kliničnih informacij. Pot teledermatologije s triažo na podlagi slik na isti platformi doseže mediani čas obdelave 4 ure in 90. percentil 1 dan, ker sta fotografija in strukturirana anamneza skoraj vedno zadostna za odločitev o triaži brez dodatne korespondence.

## Viri podatkov in omejitve

Glavni vir je lastna revizijska sled sistema e-napotitev ali upravljanja napotitev, ki uporablja časovne žige oddaje in odločitve; organizacije bi morale potrditi, ali »ura« med vračanjem napotitve za dodatne informacije miruje ali teče neprekinjeno, saj ti dve opredelitvi dajeta bistveno različni številki za isti osnovni proces. Čas obdelave je treba dosledno poročati v koledarskem ali delovnem času, saj lahko učinki vikendov in praznikov sicer popačijo primerjave med službami z različnimi delovnimi vzorci.

## Pasti

- **Merjenje samo »čistih« napotitev**: izključitev zavrnjenih ali vrnjenih napotitev iz izračuna skrije breme ponovnega dela, ki ga digitalna orodja pogosto posebej želijo zmanjšati.
- **Poročanje povprečja namesto mediane in percentilov**: majhno število dolgotrajnih, vrnjenih napotitev potegne povprečje daleč nad dejansko izkušnjo tipičnega pacienta.
- **Mešanje časa obdelave s skupnim čakalnim časom**: čas obdelave zajema le korak triaže; celotna izkušnja pacienta vključuje tudi nadaljnji klinični čakalni seznam, ki je ločen kazalnik, podvržen ločenim omejitvam zmogljivosti.
- **Neločevanje podfaz**: služba, ki meri le čas od začetka do konca, ne more ugotoviti, ali počasno številko povzročajo napotitelji z nepopolnimi informacijami, triažna zmogljivost sprejemne službe ali oboje.

## Viri

- NHS England, statistika in specifikacije storitve e-Referral Service (e-RS)
- Recenzirana literatura o sistemih za upravljanje elektronskih napotitev in digitalnih poteh triaže, vključno s teledermatologijo
- ONC / HealthIT.gov, smernice o interoperabilnosti in usklajevanju napotitev
