# Esku-hartzerako denbora

Esku-hartzerako denbora osasun-alerta automatiko bat sortzen denetik (adibidez, urrutiko monitorizazio-gailu batek tarte-kanpoko konstante bizi bat detektatzen duenetik, edo triaje digitaleko tresna batek paziente baten okertzea markatzen duenetik) taldeko kliniko batek benetan erantzuna hasten duen arte igarotako denbora da. Alerta automatikoen sistema batek bere promesa nagusia betetzen duen ala ez zehazten duen prozesu-metrika da: arazo bat lehenago harrapatzea, aldizkako jarraipen-bisiten edo pazienteak abiarazitako telefono-deien eredu tradizionalak egingo lukeena baino.

## Zergatik den garrantzitsua

Alerta klinikoki zuzena sortzen duen baina denbora egokian erantzunik ez duen alerta-sistemak ez du benetan pazientearen segurtasuna hobetu; urrutiko monitorizazioaren eta alerta automatikoen balio-proposamen osoa begizta alternatibo ez-monitorizatuak baino azkarrago ixtean oinarritzen da. Alerta-larritasun desberdinek erantzun-premia desberdina merezi dutenez, esku-hartzerako denbora beti larritasun-maila bakoitzeko jakinarazi behar da batez besteko bakar gisa baino, alerta guztien batez besteko azkar batek larritasun handieneko alerta gutxiei erantzun arriskutsuki motela ezkutatu dezakeelako. Metrika hau urrutiko monitorizazio-programa automatiko baten balioa zuzendaritza klinikoari eta ordaintzaileei frogatzeko modurik argienetako eta sinesgarrienetako bat ere bada, erakunde bereko aurreko erantzun-denbora ez-automatikoarekin zuzenean alderatu daitekeelako antzeko egoera klinikorako.

## Nola kalkulatzen den

```
Esku-hartzerako denbora = denbora-zigilua(erantzun klinikoa hasia) −
                          denbora-zigilua(alerta sortua)

Mediana eta pertzentil altu bat (adib. 90.a) jakinarazi, alerta-
larritasun mailaren arabera segmentatuta, ez batez besteko nahastu
bakar gisa.

"Erantzun klinikoa hasia" zehatz eta koherentziaz definitu behar da —
adib. klinikoak pazientearen erregistroa ireki eta jarduten duela, edo
dokumentatutako irteerako kontaktu-saiakera — ez alerta ikusi edo
onartu izana soilik, ekintzarik hartu gabe.
```

## Adibide landua

Urrutiko monitorizazio kardiakoko programa baten alerta-sistemak larritasun handiko 200 arritmia-alerta markatzen ditu hilabete batean. Alerta sortzetik klinikoak irteerako kontaktua hasten duen arteko denboraren mediana 12 minutukoa da, 90. pertzentilaren denbora 38 minutukoa izanik. Populazio bereko aurreko bide ez-monitorizatuaren datu historikoek (antzeko gertaera bat, normalean, hurrengo programatutako kontsultan edo ospitaleko aurkezpenean bakarrik azaleratuko litzatekeena) erantzun kliniko ororen denbora medianoa egunetan neurtua erakusten dute, ez minututan. Konparaketa hau (ez 12 minutuko zifra isolatuta) da monitorizazio-programaren balio klinikoa frogatzen duena; 90. pertzentilaren zifra berdin garrantzitsua da, erantzuteko ordu erdi baino gehiago hartu zuten alerten isatsa identifikatzen baitu eta bere kausa-azterketa propioa merezi du.

## Datu-iturriak eta kontuan hartu beharrekoak

Alerta sortzearen denbora-zigiluak monitorizazio-plataformaren bere gertaera-erregistrotik datoz; erantzun klinikoaren denbora-zigiluak, normalean, historia kliniko elektronikoaren auditoria-arrastotik edo arreta-taldearen bere lan-fluxu edo zeregin-kudeaketa sistematik datoz, eta bi sistema hauek zehaztasunez sinkronizatuta egon behar dute kalkulatutako tartea fidagarria izan dadin. "Erantzuna hasia"k definizio zorrotz eta dokumentatua behar du, klinikoak alerta ikusi edo baztertzea ekintza gehiagorik gabe funtsean desberdina eta askoz lasaigarriagoa ez den gertaera delako, benetako irteerako kontaktua edo esku-hartzea abiarazten duenarekin alderatuta; biak nahasteak erantzun-denbora errealitate klinikoa baino hobea dirudien moduan utziko luke. Gaueko eta asteburuko langile-mailek, ohi, esku-hartzerako denboran eragin nabarmena dute, beraz metrika hau eguneko ordu eta asteko egun segmentuen arabera jakinarazi behar da alerta-bolumenak ahalbidetzen duenean, 24/7 batez besteko nahastu bakar gisa baino, lanaldi-ondoko erantzun-hutsune larri bat ezkutatu dezakeena.

## Hutsuneak

- **Alertaren aitorpena erantzuntzat zenbatzea**: klinikoak alerta ikustea edo baztertzea ez da erantzun kliniko bat hastea bezalakoa; definitu erantzuna zorrotz dokumentatutako ekintza gisa, ez aitorpen pasibo gisa.
- **Larritasun guztien gaineko denbora nahastu bakarra jakinaraztea**: larritasun baxuko eta altuko alertak konbinatuen batez besteko azkar batek erantzun-denbora arriskutsuki motela ezkutatu dezake bereziki larritasun handieneko alertentzat, gehien axola dutenak direnak.
- **Langile-ereduen efektuak alde batera uztea**: erantzun-denbora sarritan nabarmen aldatzen da eguneko orduaren eta asteko egunaren arabera, langile-mailengatik; batez besteko orokor bakar batek lanaldi-ondoko edo asteburuko erantzun-hutsune sistematikoa ezkutatu dezake.
- **Esku-hartzerako denbora alerta-atalase desberdineko erakundeen artean alderatzea**: alerta-atalase kontserbadoreagoa (sentikorragoa) duen erakunde batek larritasun baxuko alerta gehiago sortuko ditu, eta horrek bere batez besteko erantzun-denbora diluitu dezake atalase zorrotzagoa erabiltzen duen erakunde batekin alderatuta, benetako erantzun klinikoarekin zerikusirik gabe.

## Iturriak

- NHS England, urrutiko monitorizazioari eta ospitale birtualen erantzun klinikoko arauei buruzko gidalerroak
- ONC / HealthIT.gov, alerta klinikoen sistemen diseinuari eta segurtasunari buruzko gidalerroak
- Urrutiko pazienteen monitorizazioaren alerta-erantzun denborei eta emaitza klinikoei buruzko literatura aditu-berrikusia, adibidez npj Digital Medicine aldizkarian argitaratutako ikerketak

Ikus, halaber: [gailuen erabilgarritasun tasa](../gailuen-erabilgarritasun-tasa/), esku-hartzerako denbora fidagarri bat azpiko monitorizazio-gailuak benetan lineaz egotearen mende dagoelako, hasteko alerta sortzeko.
