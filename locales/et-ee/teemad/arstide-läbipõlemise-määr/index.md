# Arstide Läbipõlemise Määr

Arstide läbipõlemise määr mõõdab nende kliinikute osakaalu, kes teatavad märkimisväärsetest läbipõlemise sümptomitest – tavaliselt hinnatakse seda emotsionaalse kurnatuse, depersonalisatsiooni või madala isikliku saavutustunde kaudu valideeritud küsitlusinstrumendi abil – ja digitaaltervise puhul jälgitakse seda koos kliinikutele suunatud digitaalsete tööriistade koormuse mõõdikutega, näiteks paberitööle või elektroonilise terviseandmete süsteemi (EHR) dokumenteerimisele kuluv aeg. See kuulub digitaaltervise mõõdikute raamistikku, kuna halvasti kavandatud kliiniline tarkvara on hästi dokumenteeritud, mõõdetav läbipõlemise põhjustaja ning digitaaltervise tööriista edu ei tohiks kunagi hinnata ainult patsiendile suunatud mõõdikute põhjal, jättes tähelepanuta selle mõju kliinikutele, kes peavad seda kasutama.

## Miks see on oluline

Digitaaltervise tööriistu võetakse sageli kasutusele selge eesmärgiga vähendada kliinikute halduskoormust, kuid halvasti kavandatud elektroonilise terviseandmete süsteemi töövoog, liigne hulk väikese väärtusega kliinilisi hoiatusi (vt kliiniliste hoiatuste tühistamise määr) või kohmakas telemeditsiini liides võivad läbipõlemist sama lihtsalt suurendada kui vähendada – ning tööriist, mis parandab patsiendile suunatud kaasatuse mõõdikut, suurendades vaikselt kliinikute dokumenteerimiskoormust, ei ole andnud kogu raviüsteemi jaoks netopositiivset tulemust. Läbipõlemine on kliinilises kirjanduses tugevalt seotud meditsiiniliste vigade, kliinikute voolavuse ja ravikvaliteedi languse, mistõttu toimib see allavoolu ohutus- ja tööjõu jätkusuutlikkuse probleemide eelnäitajana, mitte pelgalt töörahulolu meeldiva lisana. Iga digitaaltervise programm, mis väidab kliinilist koormust vähendavat, peaks suutma seda väidet näidata mõõdetud lähtejoone suhtes, mitte esitama seda kavandatud kavatsusena.

## Kuidas seda arvutatakse

```
Arstide läbipõlemise määr = kliinikud, kelle skoor ületab valideeritud
                            instrumendi läbipõlemise lävendi / küsitletud
                            kliinikud kokku × 100

Levinud valideeritud instrumendid: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index või ühe küsimusega läbipõlemise
sõeluuring, mis on valideeritud täielikuma instrumendi vastu.

Esitage koos digitaalse koormuse asendusnäitajaga, kui see on
olemas:
  EHR-is veedetud aeg ühe patsiendikontakti kohta
  Dokumenteerimisaeg väljaspool planeeritud kliinilist tööaega
  ("pidžaamaaeg")
```

## Läbitöötatud näide

Haiglasüsteem küsitleb enne ümbritseva kliinilise dokumenteerimise tööriista kasutuselevõttu, mis peaks vähendama märkmete kirjutamise aega, 300 arsti Maslach Burnout Inventory abil. Lähteolukorras ületab läbipõlemise lävendi 135 arsti (45%) ning EHR-i auditilogi andmed näitavad keskmiselt 58 minutit dokumenteerimisaega arsti kohta päevas väljaspool planeeritud kliinilist tööaega. Kuus kuud pärast tööriista kasutuselevõttu näitab samade arstide korduvküsitlus, et läbipõlemise lävendi ületab 108 (36%), koos väljaspool tööaega toimuva dokumenteerimisaja vähenemisega 34 minutini päevas. Läbipõlemise määra ja objektiivse EHR-ist tuletatud asendusnäitaja koos liikumine tugevdab argumenti, et tööriist aitab paranemisele kaasa, kuid ametlik enne/pärast võrdlus peaks siiski arvestama muid samal perioodil toimunud töökoormuse muutusi.

## Andmeallikad ja hoiatused

Läbipõlemise küsitluse andmed pärinevad valideeritud instrumendist, mida korraldatakse korduvalt (igal aastal või sagedamini), ning vastamismäär on oluline: madal vastamismäär riskib vastamata jätmise nihkega, kus kõige rohkem läbipõlenud kliinikud (kellel on kõige vähem võimekust täiendavat küsitlust täita) on süstemaatiliselt alaesindatud, alahinnates tegelikku määra. EHR-ist tuletatud digitaalse koormuse asendusnäitajad – süsteemis veedetud aeg, väljaspool tööaega dokumenteerimisele kuluv aeg, klikkide arv kontakti kohta – on kasulikud objektiivsete, pidevalt kättesaadavate täiendustena perioodilistele küsitlusandmetele, kuid neid tuleks enne usaldusväärse iseseisva läbipõlemise näitajana käsitlemist konkreetses organisatsioonis valideerida küsitluses teatatud läbipõlemise vastu, kuna süsteemis veedetud aja ja tegeliku läbipõlemise seos võib erialati ja üksikisiku töösuunitluse järgi varieeruda.

## Lõksud

- **Ainult EHR-ist tuletatud asendusnäitajatele toetumine**: süsteemis veedetud aeg ja klikkide arv korreleeruvad läbipõlemisega koondtasandil, kuid ei ole sama mis läbipõlemine ise ning võivad olla eksitavad üksikute kliinikute või erialade puhul, kellel on tegelikult erinevad dokumenteerimisvajadused.
- **Madal küsitluse vastamismäär, mis varjab tegelikku määra**: läbipõlemisest enim mõjutatud kliinikutel on sageli kõige vähem võimekust vabatahtlikule küsitlusele vastata, mis kallutab madala vastamismääraga tulemuse kunstlikult tervema väljanägemisega näitaja suunas.
- **Läbipõlemise muutuse omistamine ühele tööriistale ilma segavaid tegureid arvestamata**: läbipõlemist mõjutavad paljud samaaegsed tegurid (personali tase, patsientide maht, organisatsioonilised muutused); ühe tööriista kasutuselevõtu ümber tehtud enne/pärast võrdlus peaks neid võimaluse korral kontrollima, mitte eeldama ühte põhjust.
- **Läbipõlemise käsitlemine ainult üksikisiku vastupidavuse küsimusena**: läbipõlemise uuringud leiavad järjekindlalt, et töökoormus, süsteemi disain ja organisatsioonilised tegurid on peamised tõukejõud; selle esitamine ainult üksiku kliiniku probleemina suunab sekkumise eemale digitaalsetest tööriistadest ja töövoogudest, mis on sageli tegelik algpõhjus.

## Allikad

- Maslach Burnout Inventory (MBI), valideeritud küsitlusinstrument ja hindamisjuhised
- American Medical Association (AMA), arstide läbipõlemise uuringud ja STEPS Forward praktika parandamise programm
- Eelretsenseeritud kirjandus EHR-i kasutatavuse, dokumenteerimiskoormuse ja kliinikute läbipõlemise kohta, näiteks ajakirjades JAMIA ja Annals of Internal Medicine avaldatud uuringud

Vaata ka: [kliiniliste hoiatuste tühistamise määr](../kliiniliste-hoiatuste-tühistamise-määr/), kuna hoiatusväsimus on üks täpsemaid, mõõdetavaid kliinikute läbipõlemise põhjustajaid, millele digitaalsed tööriistad saavad otseselt lahendust pakkuda.
