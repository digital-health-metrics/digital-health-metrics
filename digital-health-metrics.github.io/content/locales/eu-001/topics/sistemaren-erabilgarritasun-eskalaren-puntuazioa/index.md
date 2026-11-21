# Sistemaren erabilgarritasun-eskalaren puntuazioa

Sistemaren Erabilgarritasun Eskalaren (SUS) puntuazioa 10 itemeko galdetegi estandarizatu bat da, software baten erabilgarritasuna kuantifikatzeko erabiltzen dena, industriako arau ondo ezarriekin alderatu daitekeen 0tik 100era doan puntuazio bakarra ematen duena. Net Promoter Score-ren ez bezala, gomendatzeko borondatea neurtzen duena, edo pazienteak jakinarazitako emaitza-neurriena, egoera kliniko edo funtzionala neurtzen dutenena, SUSek gauza zehatz bakar bat neurtzen du: softwarea bera ikasteko eta erabiltzeko zein erraza den, pazienteentzat zein langile klinikoentzat.

## Zergatik den garrantzitsua

Osasun digitaleko tresna batek ebidentzia kliniko sendoa eta negozio-kasu erakargarria izan ditzake eta, hala ere, praktikan huts egin pazienteek edo klinikoek interfazea nahasgarri, motel edo frustragarri aurkitzen dutelako; eta SUS instrumentu baliozkotua eta zabal erabilia denez, industrietan zeharreko hamarkadetako erreferentziazko datu argitaratuekin, osasun digitaleko talde batek bere produktuaren erabilgarritasuna banaketa ezagun batekin alderatzeko aukera ematen dio, inpresio informalen edo kexa anekdotikoen gainean oinarritu beharrean. SUS nahita teknologiarekiko agnostikoa eta administratzeko azkarra da (normalean bost minutu baino gutxiago), eta horrek praktikoa egiten du diseinu-iterazioetan zehar behin eta berriz egitea, erabilgarritasun-azterlan oso batek edo entsegu kliniko formal batek ez bezala. Klinikoei begirako erabilgarritasun-hutsegiteak ahituraren laguntzaile dokumentatua direnez (ikus medikuen ahitura tasa) eta pazienteei begirakoak uzte eta alfabetatze digitalaren emaitza kaskarren laguntzaile dokumentatua (ikus alfabetatze digitalaren tasa), SUSek ondorengo metrika garrantzitsuago horietan agertu aurretik diseinu-arazo bat harrapa dezakeen erabilgarritasun-abisu aurreratu eta kostu baxuko seinale gisa funtzionatzen du.

## Nola kalkulatzen den

```
SUS puntuazioa = ((zenbaki bakoitiko itemen puntuazioen batura − 5) +
                  (25 − zenbaki bikoitiko itemen puntuazioen batura))
                 × 2,5

Emaitza 0tik 100era doan puntuazio bakar bat da (ez ehuneko bat,
eskala arren, ez baitu "zuzenen ehunekoa" edo antzekorik adierazten).

Argitaratutako erreferentzia-interpretazioa (Bangor et al.):
  80tik gora  — erabilgarritasun bikaina
  68          — batez bestekoa, industriako arau zabalean oinarrituta
  51tik behera — erabilgarritasun txarra, ikerketa eskatzen duena
```

## Adibide landua

Telemedikuntza-plataforma batek 10 itemeko SUS galdetegi estandarra administratzen die 150 pazienteri lehen bideo-bisitaren ondoren. Erantzule guztien SUS puntuazio batez bestekoa 74 da. Industriako batez besteko zabal aipatuarekin (68) alderatuta, honek batez besteko gaineko erabilgarritasuna adierazten du paziente-populazio eta erabilera-kasu espezifiko honetarako, nahiz eta oraindik nabarmen "bikain"eko 80ko atalasearen azpitik dagoen, erabilgarritasun-oztopo gutxi geratzen direla iradokiko lukeena. Erantzun berberak adinaren arabera segmentatuta, 50 urtetik beherako pazienteentzat 81eko batez besteko puntuazioa eta 65 urteko eta zaharragoentzat 62koa erakusten dira; hutsune honek adineko pazienteentzako erabilgarritasun-arazo zehatz eta bideragarri baterantz seinalatzen du, produktuaren erabilgarritasun-arazo orokor baterantz baino, eta batez besteko nahastu bakar batek ezkutatuko zukeen zerbait.

## Datu-iturriak eta kontuan hartu beharrekoak

SUS datuak 10 itemeko galdetegi estandarizatua osatzen duten pazienteetatik edo klinikoetatik zuzenean datoz, eta instrumentua baliozkotu bezala zehazki administratu behar da (10 item berberak, 5 puntuko adostasun-eskala bera, puntuazio-formula bera) lortutako puntuazioa argitaratutako erreferentziekin alderagarria izan dadin; galdetegiaren bertsio aldatu edo laburtu batek, asmo onekoa izan arren, erreferentzia-banaketa estandarraren aurka fidagarritasunez interpretatu ezin den puntuazioa sortzen du. SUSek hautemandako erabilgarritasuna neurtzen du, zeregin-osaketaren arrakasta objektiboarekin korrelazionatzen dena baina berdina ez dena (ikus alfabetatze digitalaren tasa zeregin-osaketan oinarritutako neurri baterako); produktu batek SUS puntuazio ona izan dezake ezaugarri konplexuagoak saiatu ez zituzten pazienteengandik, beraz SUS zeregin-osaketako datu objektiboekin parekatzeak biak bakarrik baino irudi osoagoa ematen du. Erantzunaren unea garrantzitsua da: SUS gertakari zehatz frustragarri baten (konexio hutsegite bat, urrats nahasgarri bat) ondoren berehala administratzeak, saio leun baten ondoren baino, puntuazioak alda ditzake produktuaren erabilgarritasun orokorrarekin zerikusirik gabe.

## Hutsuneak

- **Galdetegi estandarraren itemak edo puntuazioa aldatzea**: hitzen edo eskalaren aldaketa txikiek ere baliogabetzen dute ondo ezarritako erreferentzia-banaketa argitaratuarekiko alderaketa; erabili 10 itemeko instrumentu estandarra baliozkotu bezala zehazki.
- **Batez besteko puntuazioa soilik jakinaraztea segmentaziorik gabe**: erabilgarritasuna sarritan nabarmen aldatzen da erabiltzailearen adinaren, alfabetatze digitalaren edo rolaren arabera (pazientea eta klinikoa); segmentatu jakinarazpena batez besteko bakar batek ezkutatzen dituen erabilgarritasun-hutsune espezifiko eta bideragarriak aurkitzeko.
- **SUS eraginkortasun klinikoaren neurritzat hartzea**: SUSek erabilgarritasuna neurtzen du zehazki, ez emaitza klinikoa edo arretarekiko asebetetzea; oso erabilgarria den tresna batek emaitza klinikoak hobetzeko huts egin dezake, eta hauek ez dira inoiz nahastu edo bata bestearen ordez erabili behar.
- **Inkesta ezohiko saio leunen edo ezohiko saio frustragarrien ondoren soilik administratzea**: administrazioaren denborak eta testuinguruak puntuazioa alboratu dezake; administratu koherentziaz benetako munduko saioen lagin ordezkari batean, ez erosoak edo hautatuak diren batzuetan soilik.

## Iturriak

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", argitaratutako jatorrizko instrumentua
- Bangor, Kortum eta Miller, SUSen erreferentzia-ikerketa argitaratua, zabal aipatutako puntuazio-interpretazioko bandak ezartzen dituena
- SUSen erabilerari buruzko literatura aditu-berrikusia osasun digitaleko eta telemedikuntzaren erabilgarritasun-ebaluazioan, adibidez JMIR Human Factors aldizkarian argitaratutako ikerketak

Ikus, halaber: [pazientearen Net Promoter Score](../pazientearen-net-promoter-score/), softwarearen erabilgarritasuna zehazki baino asebetetzea eta leialtasuna neurtzen dituen pazienteak jakinarazitako metrika erlazionatu baina desberdina.
