# Miera stabilizácie biometrických ukazovateľov

Miera stabilizácie biometrických ukazovateľov je podiel zaradených pacientov, ktorí pomocou pripojeného monitorovacieho zariadenia dosiahnu a udržia klinicky vymedzený cieľový rozsah biometrického ukazovateľa — najčastejšie krvného tlaku pod hranicou, ako je 130/80 mmHg — počas dlhšieho obdobia, a nie v jednom okamihu. Odlišuje sa od miery zlepšenia biometrických ukazovateľov (pozri danú tému): zlepšenie meria veľkosť zmeny oproti východiskovému stavu, zatiaľ čo stabilizácia meria, či sa pacient po začatí liečby alebo monitorovania spoľahlivo udržiava v bezpečnom rozsahu, čo je výsledok, ktorý je najdôležitejší pre pacientov, ktorí sú už blízko cieľa alebo už sú liečení.

## Prečo je dôležitá

Pre veľkú časť pacientov v programoch pre chronické ochorenia — najmä pri hypertenzii, kde sú usmernenia pre cieľový krvný tlak dobre ustálené a priamo súvisia s kardiovaskulárnym rizikom — nie je klinickým cieľom jednorazové zlepšenie, ale trvalá kontrola, a pacient, ktorý kolíše dovnútra a von z cieľového rozsahu, predstavuje podstatne iné riziko než ten, ktorý sa raz zlepší a zostane tam. Pripojené zariadenia (mobilné tlakomery, systémy kontinuálneho monitorovania glukózy) umožňujú merať stabilizáciu priebežne, nielen pri klinických návštevách, a odhaľujú pacientov, ktorých hodnoty v ambulancii vyzerajú kontrolované, no domáce hodnoty sú nestabilné — ide o vzorec známy ako maskovaná hypertenzia, ktorý samotné občasné meranie osobne nedokáže zachytiť. Vykazovanie miery stabilizácie namiesto samotného jednorazového záberu „na cieli“ núti program zamyslieť sa nad tým, ako konzistentne, a nie len ako často, udržiava pacientov v rozsahu.

## Ako sa počíta

```
Miera stabilizácie biometrických ukazovateľov = pacienti s ≥ 80 % hodnôt
                                                 v cieľovom rozsahu počas
                                                 sledovaného obdobia /
                                                 pacienti s minimálnym
                                                 počtom platných hodnôt
                                                 v tomto období × 100

Príklady hraníc:
  Krvný tlak — cieľ < 130/80 mmHg (alebo príslušná hranica klinického
               usmernenia pre rizikový profil pacienta)
  Glukóza    — cieľový rozsah podľa usmernení ku kontinuálnemu
               monitorovaniu glukózy, vykazovaný ako „čas v rozsahu“

Pred zaradením pacienta do menovateľa by sa mala stanoviť minimálna
hranica frekvencie meraní (napr. aspoň 3 merania týždenne), aby sa
predišlo tomu, že zriedkavo merajúci pacienti vyzerajú umelo stabilne.
```

## Prepracovaný príklad

Program vzdialeného monitorovania hypertenzie zaradí 600 pacientov s mobilnými tlakomermi, od ktorých sa očakáva aspoň 3 merania týždenne. Z nich 540 spĺňa minimálnu hranicu frekvencie meraní počas 3-mesačného sledovaného obdobia a je zaradených do menovateľa. Z týchto 540 má 350 aspoň 80 % hodnôt pod 130/80 mmHg, čo dáva mieru stabilizácie biometrických ukazovateľov 350 / 540 × 100 = 65 %. Šesťdesiat pacientov vylúčených pre nedostatočný počet meraní sa vykazuje osobitne ako medzera v úplnosti údajov a nezahŕňa sa ani do čitateľa, ani do skupiny „nestabilizovaných“, pretože ich skutočný stav kontroly je skutočne neznámy, a nie zlý.

## Zdroje údajov a výhrady

Hodnoty pochádzajú priamo z dátového toku pripojeného zariadenia, ktorý je objektívnejší a oveľa častejší než meranie v ambulancii, no chyby v umiestnení zariadenia a technike merania (nesprávne zvolená veľkosť alebo poloha manžety tlakomera) môžu vniesť systematické skreslenie, ktoré jedno validačné meranie v ambulancii nemusí zachytiť. Voľba cieľového rozsahu by sa mala riadiť aktuálnym platným klinickým usmernením pre konkrétny rizikový profil a komorbidity pacienta, a nie jednou univerzálnou hranicou, pretože cieľové hodnoty v usmerneniach sa líšia podľa veku pacienta, funkcie obličiek a kardiovaskulárneho rizika. Pacient s nízkou frekvenciou meraní by sa nikdy nemal automaticky ticho počítať ako „stabilný“; vylúčenie z menovateľa s transparentným vykázaním vylúčenia je čestnejšie než počítať ho ako kontrolovaného alebo nekontrolovaného na základe príliš malého množstva údajov.

## Nástrahy

- **Považovanie jedného nameraného údaja v rozsahu za stabilizáciu**: stabilizácia sa týka trvalej kontroly počas vymedzeného obdobia, nie okamžitého záberu; vždy vyžadujte minimálny podiel hodnôt v rozsahu počas tohto obdobia, nie jedno vyhovujúce meranie.
- **Tiché vylúčenie zriedka merajúcich pacientov bez vykázania**: pacienti, ktorí merajú zriedka, nie sú automaticky stabilní ani nestabilní; vylúčte ich z menovateľa transparentne a mieru vylúčenia vykazujte ako samostatnú metriku úplnosti údajov.
- **Ignorovanie kalibrácie zariadenia a chýb techniky**: zle nasadená manžeta alebo nekalibrované zariadenie môže systematicky skresľovať hodnoty jedným smerom, čo miera stabilizácie vypočítaná naivne zo surových údajov zo zariadenia bez pravidelnej validácie nezachytí.
- **Používanie jedného univerzálneho cieľového rozsahu pre všetkých pacientov**: cieľové hodnoty v klinických usmerneniach sa líšia podľa rizikového profilu a komorbidity pacienta; uplatnenie jednej plošnej hranice na klinicky heterogénnu populáciu nesprávne zaradí niektorých pacientov medzi stabilizovaných alebo nestabilizovaných vzhľadom na ich skutočný individualizovaný cieľ.

## Zdroje

- American Heart Association (AHA) / American College of Cardiology (ACC), cieľové hodnoty krvného tlaku v usmerneniach a usmernenia k domácemu monitorovaniu krvného tlaku
- International Diabetes Federation a American Diabetes Association (ADA), konsenzuálne usmernenia ku kontinuálnemu monitorovaniu glukózy a „času v rozsahu“
- Recenzovaná literatúra o vzdialenom biometrickom monitorovaní a trvalej kontrole ochorenia, napríklad štúdie publikované v npj Digital Medicine

Pozri tiež: [miera zlepšenia biometrických ukazovateľov](../miera-zlepšenia-biometrických-ukazovateľov/), príbuzná metrika veľkosti zmeny oproti východiskovému stavu, na rozdiel od trvalej kontroly po dosiahnutí cieľa.
