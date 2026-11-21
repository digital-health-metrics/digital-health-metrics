# Pazienteen atariaren erabilera tasa

Pazienteen atariaren erabilera tasak neurtzen du zenbat paziente eskuragarrik izena eman duten eta aktiboki erabiltzen duten lineako pazienteen ataria (adibidez NHS App, Patient Access edo MyChart bezalako HCE-ari lotutako ataria) historiala ikusteko, hitzorduak eskatzeko edo zaintza-taldeari mezuak bidaltzeko. Konpromiso digitalaren sarrera-mailako adierazlea da: inoiz kontua aktibatu ez duen pazienteak ezin du atarian oinarritutako beheko zerbitzu digitalik aprobetxatu.

## Zergatik den garrantzitsua

Atari batek erabiltzen denean soilik sortzen du balioa; beraz, erakundeek erabilera hodi gisa jarraitu behar dute, ez zenbaki bakar gisa: erregistroa, aktibazioa (lehen ekintza esanguratsua) eta erabilera aktiboa (azken leiho batean egindako erabilera) hiru tasa desberdin dira, eta askotan gehiegi nahasten dira. Zerbitzu digitalen taldeei maiz presioa egiten zaie zifra nagusi bakar eta onuragarri bat jakinarazteko, eta diziplina behar da banakapen zailago eta zintzoagoa eskatzeko. Erabilera baxuak edo desorekatuki banatuak ere ekitate-seinale bat dira: adinduagoak diren, literatura digital txikiagoa duten, hizkuntza nagusia hitz egiten ez duten edo banda zabal fidagarririk edo telefono adimendunik ez duten pazienteek sistematikoki probabilitate txikiagoa dute zenbakitzailean zenbatzeko; beraz, batez besteko erabileraren igoerak ezkutatu egin dezake zerbitzuekin kontaktu gehien behar dutenentzako arrakala zabaltzea.

## Nola kalkulatzen den

Hiru faseak jakinarazi, ez erregistroa bakarrik, eta izendatzailea beti esplizituki adierazi:

```
Erregistro tasa = ataria-kontua sortu duten pazienteak / paziente-populazio eskuragarria × 100
Aktibazio tasa  = lehen ekintza esanguratsua burutu duten pazienteak (emaitza bat ikusi,
                   txanda bat erreserbatu, mezu bat bidali) / kontua duten pazienteak × 100
Erabilera aktibo tasa = azken 12 hilabeteetan gutxienez behin saioa hasi duten pazienteak /
                   paziente-populazio eskuragarria × 100
```

Paziente-populazio eskuragarria, normalean, atzera begirako denbora-tarte jakin batean (normalean 24 hilabete) erakundearekin gutxienez kontaktu bat izan duten pazienteak dira, beren kontua edukitzeko adin eta adostasun-egoera egokia dutenak.

## Adibide landua

Lehen mailako arreta sare batek 50.000 paziente zerbitzatzen ditu, eskuragarritasun-definizioa betetzen dutenak. Horietatik, 32.000 atarian erregistratu dira (erregistro tasa % 64). 32.000 erregistro horietatik, 27.000k gutxienez ekintza esanguratsu bat burutu dute, adibidez proba-emaitza bat ikustea (aktibazio tasa erregistratuen % 84). Azken 12 hilabeteetan, jatorrizko 50.000 paziente eskuragarrietatik 21.000k gutxienez behin saioa hasi dute (erabilera aktibo tasa % 42). % 64ko erregistro zifra soilik jakinaraziz gero, benetako konpromisoa nabarmen gainestimatuko litzateke; % 42ko erabilera aktiboaren zifra da ataria-programaren baliabide-erabakiak gidatu behar dituena.

## Datu-iturriak eta kontuan hartu beharrekoak

Atariaren analitikak, normalean, saltzailearen plataformatik bertatik datoz (saio-hasierak, funtzioen erabilera) edo historia kliniko elektronikoaren auditoria-erregistrotik; erakundeek zuhurtziaz jokatu behar dute erregistro-zenbaketak soilik erakusten dituzten saltzaileen panelekin. Proxy-sarbidea (guraso batek edo zaintzaile batek pazientearen izenean kontu bat kudeatzea) etiketatu eta bereizita jakinarazi behar da, "erabiltzailea" nor den aldatzen duelako. Izendatzailearen aukerak ikaragarrizko garrantzia du: erregistratutako paziente-zerrenda osoaren aurka zenbatzeak, benetan eskuragarria eta kontaktagarria den populazioaren aurka zenbatu beharrean, beti gutxiestea ekarriko du, eta aktiboki gonbidatutako pazienteen aurka soilik zenbatzeak beti gainestimatuko du; hortaz, eskuragarritasun-definizioa finkatu eta argitaratu behar da jakinarazitako tasa bakoitzarekin batera.

## Hutsuneak

- **Erregistroa erabilera gisa zenbatzea**: sortu baina inoiz erabili ez den kontu batek ia baliorik ez du; erregistroarekin batera jakinarazi aktibazioa eta erabilera aktiboa, ez haien ordez.
- **Bazterketa digitala alde batera uztea**: erabilera-zifra agregatuak igo daitezke, baina inklusio digital handiena eta txikiena duten taldeen arteko arrakala zabaldu; segmentatu beti adinaren, pobreziaren, hizkuntzaren eta desgaitasunaren arabera, datuen gobernantzak onartzen duenean.
- **Eskuragarritasun-definizio desberdinak dituzten erakundeak alderatzea**: posta elektronikoa erregistratuta duten pazienteak soilik gonbidatzen dituen atari-programak tasa altuagoa jakinaraziko du erregistratutako zerrenda osoaren aurka neurtzen duenak baino, errendimenduan benetako alderik gabe.
- **Behin-behineko saio-hasiera etengabeko konpromisotzat hartzea**: 12 hilabeteko atzera begirako leihoa ohikoa da, baina leiho laburragoak (adibidez 90 egun) erabilera-beherakadaren aurreneko abisua ematen du.

## Iturriak

- NHS England, NHS App-en erabilera eta erregistro estatistikak (nhs.uk / digital.nhs.uk argitalpenak)
- ONC / HealthIT.gov, Promoting Interoperability Program neurriak, View, Download, Transmit (VDT) pazienteen sarbide-neurriak barne
- Pazienteen atarien erabilerari eta osasun digitaleko desberdintasunei buruzko literatura aditu-berrikusia, adibidez Journal of the American Medical Informatics Association (JAMIA) aldizkarian argitaratutako ikerketak

Ikus, halaber: [hitzorduei huts egiteen tasa](../hitzorduei-huts-egite-tasa/), atarian oinarritutako autoprogramazioak eta gogorarazpenek zuzenean eragiten diotelako.
