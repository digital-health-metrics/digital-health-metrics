# Stopa izgaranja liječnika

Stopa izgaranja liječnika mjeri udio kliničara koji prijavljuju značajne simptome izgaranja — obično procijenjene kao emocionalna iscrpljenost, depersonalizacija ili nizak osjećaj osobnog postignuća pomoću validiranog upitnika — a u digitalnom zdravlju posebno se prati uz mjere opterećenja kliničara digitalnim alatima, poput vremena utrošenog na administraciju ili dokumentiranje u elektroničkom zdravstvenom zapisu (EHR). Dio je okvira metrika digitalnog zdravlja jer je loše dizajniran klinički softver dobro dokumentiran, mjerljiv čimbenik izgaranja, a uspjeh digitalnog zdravstvenog alata nikada ne bi trebalo ocjenjivati isključivo metrikama usmjerenima na pacijente uz zanemarivanje učinka na kliničare koji njime moraju rukovati.

## Zašto je važna

Digitalni zdravstveni alati često se uvode s izričitim ciljem smanjenja administrativnog opterećenja kliničara, ali loše dizajniran tijek rada elektroničkog zdravstvenog zapisa, prekomjerna količina kliničkih upozorenja male vrijednosti (vidi stopu zanemarivanja kliničkih upozorenja) ili nezgrapno telemedicinsko sučelje mogu jednako lako povećati izgaranje kao i smanjiti ga — a alat koji poboljšava metriku angažmana usmjerenu na pacijente, a tiho povećava opterećenje kliničara dokumentiranjem, nije donio neto pozitivan ishod za sustav skrbi u cjelini. Izgaranje je u kliničkoj literaturi snažno povezano s medicinskim pogreškama, fluktuacijom kliničara i smanjenom kvalitetom skrbi, pa funkcionira kao vodeći pokazatelj nizvodnih problema sigurnosti i održivosti radne snage, a ne samo kao ljubaznost oko zadovoljstva na radu. Svaki program digitalnog zdravlja koji tvrdi da smanjuje kliničko opterećenje trebao bi moći tu tvrdnju pokazati u odnosu na izmjerenu osnovicu, a ne iznositi je kao projektnu namjeru.

## Kako se izračunava

```
Stopa izgaranja liječnika = kliničari s rezultatom iznad praga izgaranja
                            validiranog instrumenta / ukupni anketirani
                            kliničari × 100

Uobičajeni validirani instrumenti: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index ili jednostavno probirno pitanje o
izgaranju validirano u odnosu na potpuniji instrument.

Prijavite uz zamjensku mjeru digitalnog opterećenja gdje je dostupna:
  vrijeme u EHR sustavu po susretu s pacijentom
  vrijeme dokumentiranja izvan zakazanog kliničkog radnog vremena
  („pidžama vrijeme”)
```

## Razrađeni primjer

Bolnički sustav anketira 300 liječnika pomoću Maslach Burnout Inventoryja prije uvođenja alata za ambijentalno kliničko dokumentiranje namijenjenog skraćivanju vremena pisanja bilješki. Na početku 135 liječnika (45 %) ima rezultat iznad praga izgaranja, a podaci revizijskog dnevnika EHR-a pokazuju prosječno 58 minuta dnevnog vremena dokumentiranja po liječniku izvan zakazanog kliničkog radnog vremena. Šest mjeseci nakon uvođenja alata, ponovljena anketa istih liječnika pokazuje da je 108 (36 %) iznad praga izgaranja, uz pad vremena dokumentiranja izvan radnog vremena na 34 minute dnevno. Povezano kretanje i stope izgaranja i objektivne zamjenske mjere izvedene iz EHR-a jača argument da alat doprinosi poboljšanju, iako formalna usporedba prije/poslije i dalje treba uzeti u obzir druge istodobne promjene opterećenja u istom razdoblju.

## Izvori podataka i ograničenja

Podaci ankete o izgaranju dolaze iz validiranog instrumenta koji se provodi periodički (godišnje ili češće), a stopa odgovora je važna: niska stopa odgovora riskira pristranost zbog neodgovaranja, pri čemu su najizgoreniji kliničari (s najmanje kapaciteta za ispunjavanje dodatne ankete) sustavno podzastupljeni, što podcjenjuje stvarnu stopu. Zamjenske mjere digitalnog opterećenja izvedene iz EHR-a — vrijeme u sustavu, vrijeme dokumentiranja izvan radnog vremena, broj klikova po susretu — korisne su kao objektivne, kontinuirano dostupne dopune povremenim podacima ankete, ali ih za pojedinu organizaciju treba validirati u odnosu na izgaranje prijavljeno u anketi prije nego što se tretiraju kao pouzdan samostalan pokazatelj izgaranja, jer odnos između vremena u sustavu i stvarnog izgaranja može varirati prema specijalnosti i individualnom stilu rada.

## Zamke

- **Oslanjanje samo na zamjenske mjere izvedene iz EHR-a**: vrijeme u sustavu i broj klikova koreliraju s izgaranjem u zbiru, ali nisu isto što i izgaranje i mogu zavarati kod pojedinih kliničara ili specijalnosti sa stvarno različitim potrebama dokumentiranja.
- **Niska stopa odgovora na anketu prikriva stvarnu stopu**: kliničari koje izgaranje najviše pogađa često su najmanje skloni imati kapaciteta odgovoriti na dobrovoljnu anketu, što rezultat s niskom stopom odgovora pristrano pomiče prema umjetno zdravije izgledajućem broju.
- **Pripisivanje promjene izgaranja jednom alatu bez uzimanja u obzir zbunjujućih čimbenika**: na izgaranje utječu mnogi istodobni čimbenici (razina popunjenosti osoblja, broj pacijenata, organizacijske promjene); usporedba prije/poslije oko uvođenja jednog alata treba ih kontrolirati gdje je moguće, a ne pretpostavljati jedan uzrok.
- **Tretiranje izgaranja isključivo kao pitanja individualne otpornosti**: istraživanja izgaranja dosljedno nalaze da su glavni pokretači opterećenje, dizajn sustava i organizacijski čimbenici; uokvirivanje kao isključivo problema pojedinog kliničara skreće intervenciju s digitalnih alata i tijekova rada koji su često stvarni korijenski uzrok.

## Izvori

- Maslach Burnout Inventory (MBI), validirani upitnik i smjernice za bodovanje
- American Medical Association (AMA), istraživanja izgaranja liječnika i program poboljšanja prakse STEPS Forward
- Recenzirana literatura o upotrebljivosti EHR-a, opterećenju dokumentiranjem i izgaranju kliničara, na primjer studije objavljene u časopisima JAMIA i Annals of Internal Medicine

Vidi također: [stopa zanemarivanja kliničkih upozorenja](../stopa-zanemarivanja-kliničkih-upozorenja/), jer je zamor od upozorenja jedan od specifičnijih, mjerljivih čimbenika izgaranja kliničara na koje digitalni alati mogu izravno utjecati.
