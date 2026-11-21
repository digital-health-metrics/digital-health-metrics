# Miera dostupnosti zariadení

Miera dostupnosti zariadení meria podiel plánovaného času monitorovania, počas ktorého je pripojené zdravotnícke zariadenie — senzor vzdialeného monitorovania pacienta, nositeľné zariadenie alebo domáca telemedicínska jednotka — skutočne online, prenáša údaje a funguje správne, a nie je offline, odpojené alebo poruchové. Je to základná infraštruktúrna metrika, na ktorej stojí každý program vzdialeného monitorovania alebo pripojených zariadení: klinické upozornenie, biometrický trend alebo číslo o zapojení vypočítané zo zariadenia, ktoré bolo často offline, je len taký spoľahlivý ako pripojenie, ktoré za ním stojí.

## Prečo je dôležitá

Celá klinická hodnota programu vzdialeného monitorovania pacientov závisí od nepretržitého alebo takmer nepretržitého zberu údajov; zariadenie so slabou dostupnosťou vytvára v klinickom obraze pacienta tiché medzery, ktoré možno zamieňať so stabilitou (žiadne upozornenie, pretože neprišli údaje, a nie preto, že sa nič nezmenilo), namiesto toho, aby sa správne identifikovali ako zlyhanie monitorovania. Dostupnosť zariadení je zároveň popredným ukazovateľom nákladov programu a skúsenosti pacienta: zariadenie, ktoré často stráca spojenie, vyvoláva hovory na podporu, frustráciu pacientov a potenciálne zbytočné klinické oslovenia na overenie, či medzera v údajoch odráža skutočnú klinickú udalosť, alebo len technickú poruchu. Keďže zlyhania dostupnosti zariadení sa často dajú pripísať infraštruktúre, ktorú organizácia ovláda (zle nakonfigurovaná mobilná brána, slabé pokrytie Wi-Fi v domácnosti pacienta, nedostatočne udržiavaný park zariadení), a nie pacientovi, patrí táto metrika jednoznačne dodávateľovi a tímu technickej prevádzky, nie bez rozdielu medzi metriky zapojenia pacientov.

## Ako sa počíta

```
Miera dostupnosti zariadení = čas, počas ktorého bolo zariadenie online
                               a prenášalo platné údaje / celkový plánovaný
                               čas monitorovania × 100

Ak to údaje umožňujú, člente príčiny výpadkov:
  Porucha na strane zariadenia (batéria, hardvérová chyba, pád firmvéru)
  Porucha pripojenia (výpadok mobilnej siete/Wi-Fi/VPN)
  Faktory na strane pacienta (zariadenie vypnuté, presunuté mimo dosahu)

Podporné technické parametre, ktoré sa majú sledovať popri dostupnosti:
  Priemerné využitie CPU, využitie pamäte a úroveň batérie na zariadenie
  Priemerný čas medzi poruchami pripojenia
  Priemerný čas na opätovné pripojenie po výpadku
```

## Prepracovaný príklad

Program vzdialeného monitorovania srdca nasadí 1 000 pripojených zariadení, od každého sa očakáva nepretržitý prenos. Za 30-dňový mesiac (720 plánovaných hodín monitorovania na zariadenie) flotila zaznamená spolu 705 600 skutočných hodín online oproti plánovaným 720 000 hodinám, čo dáva mieru dostupnosti zariadení pre celú flotilu 705 600 / 720 000 × 100 = 98 %. Analýza príčin 14 400 hodín výpadku ukazuje, že 60 % možno pripísať výpadkom mobilného pripojenia sústredeným v konkrétnom vidieckom regióne služby, 25 % zariadeniam so starnúcimi batériami označenými na výmenu a 15 % pacientom, ktorí svoje zariadenie dočasne vypli. Toto rozdelenie poukazuje na dva jasné, odlišné zásahy — nápravu pripojenia pre dotknutý región a proaktívny program výmeny batérií —, ktoré by jedno súhrnné číslo dostupnosti nerozlíšilo.

## Zdroje údajov a výhrady

Údaje o dostupnosti pochádzajú z vlastného systému správy zariadení a telemetrie výrobcu zariadenia alebo dodávateľa platformy, ktorý zaznamenáva udalosti pripojenia a „heartbeat“ pre každé zariadenie; organizácia by mala presne potvrdiť, čo dodávateľ počíta ako „online“ (zariadenie sa môže hlásiť ako pripojené k sieti, a pritom neprenášať platné klinické údaje, čo by sa pre klinické účely malo počítať ako výpadok, aj keď ho vlastný panel dodávateľa vykazuje ako pripojené). Dostupnosť by sa mala vykazovať podľa kohorty zariadení alebo geografie, ak to objem umožňuje, pretože kvalita pripojenia je často geograficky zoskupená (vidiecke pokrytie mobilnou sieťou, Wi-Fi v starších budovách), a nie rovnomerne rozložená v populácii pacientov, a súhrnné číslo za celú flotilu môže zakryť závažný, riešiteľný regionálny problém.

## Nástrahy

- **Zamieňanie pripojenia k sieti s prenosom platných údajov**: zariadenie sa môže na paneli dodávateľa javiť ako „pripojené“, no neprenášať použiteľné klinické údaje; vymedzte a merajte dostupnosť podľa skutočného prijatia platných údajov, nie len podľa surového sieťového pripojenia.
- **Vykazovanie iba priemeru za celú flotilu**: môže to skryť závažný problém výpadkov špecifický pre geografickú oblasť alebo kohortu zariadení, ktorý by cielený priemer odhalil a ktorý má konkrétne, riešiteľné nápravné opatrenie.
- **Nerozlišovanie príčiny výpadku**: výpadky na strane zariadenia, pripojenia a pacienta vyžadujú každý úplne iný zásah; jedno percento výpadkov bez členenia podľa príčiny nie je použiteľné na konanie.
- **Považovanie medzery v údajoch automaticky za klinickú stabilitu**: chýbajúci tok údajov z offline zariadenia by mal spustiť kontrolu technického pripojenia, nie sa ticho vykladať ako „žiadna správa je dobrá správa“ pre klinický stav pacienta.

## Zdroje

- Continua Design Guidelines / Personal Connected Health Alliance, technické štandardy interoperability pre pripojené zdravotnícke zariadenia
- ONC / HealthIT.gov, usmernenia k implementácii programov vzdialeného monitorovania pacientov a technickým požiadavkám
- Recenzovaná literatúra o spoľahlivosti zariadení vzdialeného monitorovania pacientov a úplnosti údajov, napríklad štúdie publikované v npj Digital Medicine

Pozri tiež: [presnosť smerovania triáže](../presnosť-smerovania-triáže/), ktorá závisí od prijatia úplných, spoľahlivých údajov zo zariadení, aby sa vôbec dalo urobiť správne rozhodnutie o triáži.
