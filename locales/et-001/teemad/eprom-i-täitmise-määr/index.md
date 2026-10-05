# ePROM-i Täitmise Määr

ePROM-i täitmise määr mõõdab nende planeeritud elektrooniliste patsiendi teatatud tulemusnäitajate (ePROM) osakaalu, mida patsiendid tegelikult täidavad määratletud kogumisperioodi jooksul. ePROM-id on struktureeritud küsimustikud, mis jäädvustavad patsiendi enda hinnangut oma sümptomitele, funktsioonile või elukvaliteedile, ning kuna kogu ePROM-programmi väärtus sõltub sellest, et patsiendid tegelikult vastavad, on täitmise määr aluseks olev mõõdik, mis määrab, kas kogutud andmeid saab üldse usaldada.

## Miks see on oluline

Madal ePROM-i täitmise määr ei õõnesta mitte ainult andmekvaliteeti statistiliselt, vaid toob kaasa ka konkreetse kliinilise murekoha: patsiendid, kellel läheb kõige halvemini, on sageli need, kes kõige vähem tõenäoliselt küsimustiku täidavad, mis tähendab, et langev täitmise määr võib iseenesest olla kliiniline signaal, mitte lihtsalt andmetöötlusprobleem. Tervishoiusüsteem, mis ehitab kliinilisi otsuseid või kvaliteediaruandlust ePROM-andmetele madala või langeva täitmise määraga, riskib nende otsuste tuginemisega oma patsiendipopulatsiooni mitte-esindusliku alamhulga peale, mis on tüüpiliselt kaldu patsientide poole, kellel läheb suhteliselt paremini. Kuna ePROM-e kasutatakse üha enam kliiniliste otsuste reaalajas juhtimiseks (näiteks kliinilise ülevaatuse käivitamiseks, kui patsiendi teatatud sümptomite skoor halveneb), on täitmise määr ka otsene määrav tegur selle kohta, kui usaldusväärselt need automatiseeritud kliinilised töövood toimivad.

## Kuidas seda arvutatakse

```
ePROM-i täitmise määr = täidetud ePROM-vastused / planeeritud
                        ePROM-taotlused kokku kogumisperioodis
                        × 100

Esitage alati koos:
  Täitmise määr patsiendi alamrühma järgi (vanus, haiguse raskusaste,
  diagnoosimisest möödunud aeg), et paljastada, kas puuduvad vastused
  on juhuslikult jaotunud või koondunud teatud patsiendirühmadesse
```

## Läbitöötatud näide

Onkoloogiaosakond rakendab iganädalasi ePROM-küsimustikke, et jälgida sümptomite koormust aktiivses ravis olevatel patsientidel. Esimesel kuul on koond täitmise määr 75%, mis kõlab mõistlikult, kuid jaotamine haiguse raskusastme järgi paljastab, et täitmise määr patsientide seas, kellel on kõrgeim teatatud sümptomite koormus viimases vastuses, on vaid 55%, võrreldes 85%-ga madala sümptomite koormusega patsientide seas. See muster viitab, et patsiendid, keda on kõige rohkem vaja tähelepanelikult jälgida, on just need, kes kõige vähem tõenäoliselt vastavad — kriitiline teadmine, mis oleks täielikult varjatud 75% koondtäitmise näitaja poolt, ning mis sundis osakonda lisama telefoni järelkontrolli protokolli patsientidele, kes jätavad ePROM-taotluse vahele.

## Andmeallikad ja hoiatused

ePROM-i täitmise andmed pärinevad tavaliselt otse digitaalsest platvormist, mis küsimustikke edastab, muutes selle mõõdiku arvutamise suhteliselt lihtsaks võrreldes paljude teistega selles raamatus, kuid tõlgendamine nõuab hoolikat tähelepanu sellele, miks vastused puuduvad. Langev täitmise määr võib olla tingitud küsimustiku väsimusest (liiga sagedased või liiga pikad küsimustikud), tehnilisest juurdepääsuraskusest (patsiendid ilma usaldusväärse internetiühenduseta) või tõelisest kliinilisest signaalist (patsiendid, kellel on liiga halb olla, et vastata), ning need kolm põhjust nõuavad väga erinevaid sekkumisi.

## Lõksud

- **Koondtäitmise näitaja esitamine ilma jaotamiseta**: see võib varjata, et puuduvad vastused on koondunud patsientide seas, kelle andmed on kliiniliselt kõige olulisemad koguda.
- **Eeldamine, et langev täitmise määr on puhtalt tehniline probleem**: langev määr võib olla kliiniline signaal halveneva patsiendi seisundi kohta, mitte ainult kasutajakogemuse hõõrdumine.
- **Küsimustiku väsimuse ignoreerimine põhjusena**: liiga sagedased või liiga pikad ePROM-taotlused vähendavad täitmise määra aja jooksul sõltumata patsientide kliinilisest seisundist.
- **Mittetäielike andmete käsitlemine, nagu need oleksid juhuslikult puuduvad**: ainult täidetud ePROM-ide analüüsimine ilma kaalumata, miks ülejäänud puuduvad, võib viia süstemaatiliselt moonutatud kliiniliste järeldusteni.

## Allikad

- International Society for Quality of Life Research (ISOQOL), elektrooniliste patsiendi teatatud tulemuste rakendamise juhised
- U.S. Food and Drug Administration (FDA), patsiendi teatatud tulemusnäitajate juhised kliiniliseks kasutamiseks
- Eelretsenseeritud kirjandus ePROM-i täitmise ja puuduvate andmete kohta, näiteks uuringud, mis on avaldatud ajakirjades Journal of Clinical Oncology ja Quality of Life Research

Vaata ka: [patsiendi Net Promoter Score](../patsiendi-net-promoter-score/), seotud, kuid eraldiseisev patsiendi teatatud mõõdik, mis mõõdab rahulolu, mitte kliinilist tulemust.
