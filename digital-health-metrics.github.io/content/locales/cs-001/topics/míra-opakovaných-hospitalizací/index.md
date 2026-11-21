# Míra opakovaných hospitalizací

Míra opakovaných hospitalizací (readmisí) je podíl propuštěných pacientů, kteří jsou neplánovaně znovu přijati do nemocnice v definovaném okně po propuštění – nejčastěji 30 dní. Pro digitální zdraví je to metrika nejpřímněji spojená s ekonomikou plátců a smlouvami o péči založené na hodnotě: program vzdáleného monitoringu, následné péče po propuštění nebo digitální podpory přechodů péče, který nedokáže prokázat věrohodný vliv na opakované hospitalizace, pravděpodobně nezíská trvalou podporu úhrad, ať vypadají jeho čísla zapojení sebelépe.

## Proč na ní záleží

Neplánovaná opakovaná hospitalizace je nákladná, pro pacienta rušivá a v mnoha zdravotnických systémech je dnes přímo penalizována: schémata jako americký Hospital Readmissions Reduction Program snižují platby nemocnicím s vyšší, než očekávanou mírou opakovaných hospitalizací u vybraných diagnóz, a proto nemocnice aktivně zadávají digitální programy po propuštění a vzdáleného monitoringu zaměřené na jejich snížení. Významná část opakovaných hospitalizací je považována za potenciálně předcházitelnou – způsobenou nedostatečnými pokyny při propuštění, zmeškanými kontrolními návštěvami, nepochopením léčby nebo nezachycenou zhoršující se symptomatikou, kterou může dobře navržený digitální kontaktní bod zachytit dříve – a právě tuto mezeru cílí digitální nástroje přechodné péče. Míru opakovaných hospitalizací je třeba vždy číst spolu se skladbou případů (case mix): program obsluhující nemocnější a složitější populaci bude mít strukturálně vyšší základní míru než program obsluhující zdravější populaci, nezávisle na kvalitě programu.

## Jak se počítá

```
30denní míra opakovaných hospitalizací = neplánované readmise do 30 dnů
                                          od propuštění / celkový počet
                                          indexových propuštění × 100

Z čitatele vyloučte: plánované readmise (např. naplánovaný následný
výkon) a převody, které jsou pokračováním téže epizody péče, nikoli
novým přijetím.

Pokud je to možné, proveďte úpravu na riziko pomocí akceptovaného
indexu case mixu nebo komorbidit, než budete porovnávat míry mezi
různými populacemi pacientů nebo časovými obdobími.
```

## Řešený příklad

Nemocnice propustí za čtvrtletí 1 200 pacientů se srdečním selháním. Z nich je 210 znovu přijato do 30 dnů, přičemž 15 jsou plánované readmise kvůli naplánovanému výkonu a jsou vyloučeny. Neplánovaná 30denní míra opakovaných hospitalizací je (210 − 15) / 1 200 × 100 = 16,25 %. Program vzdáleného monitoringu je zaveden u podskupiny 400 z těchto pacientů (vybraných podle klinického rizika, nikoli náhodně) a jejich neplánovaná míra opakovaných hospitalizací je 14 %, oproti 18 % u 800 nezařazených pacientů. Protože zařazení vycházelo z klinického rizika, a nikoli z náhodného přidělení, je tento rozdíl spíše naznačující než přesvědčivým důkazem účinku programu a je třeba jej interpretovat spolu s analýzou úpravy na riziko, nikoli brát doslova.

## Zdroje dat a omezení

Data o opakovaných hospitalizacích se obvykle čerpají z vlastního toku přijetí–propuštění–převod (ADT) nemocnice pro readmise do téhož zařízení, ale pacient znovu přijatý do jiné nemocnice se v tomto toku vůbec neobjeví, takže sledování readmisí v jediné nemocnici systematicky podhodnocuje skutečnou míru, pokud se nedoplní daty z regionální výměny zdravotních informací, nárokovými daty plátců nebo celostátními databázemi všech plátců. Přisouzení digitálnímu programu vyžaduje opatrnost: pacienti, kteří se dobrovolně přihlásí do programu vzdáleného monitoringu, jsou jen zřídka náhodným vzorkem propuštěné populace, takže naivní srovnání míry readmisí zařazených a nezařazených pacientů bude mít tendenci být zkresleno právě selekčními efekty, které činily některé pacienty ochotnějšími se zapojit.

## Úskalí

- **Porovnávání hrubých měr bez úpravy na riziko mezi populacemi**: program obsluhující nemocnější populaci vykáže vyšší hrubou míru readmisí než program obsluhující zdravější populaci, i když je samotný program účinnější; před porovnáním vždy proveďte úpravu na riziko.
- **Podhodnocování readmisí do jiných zařízení**: spoléhání pouze na vlastní data ADT jedné nemocnice přehlédne readmise jinde a podhodnotí skutečnou míru, zejména v oblastech s více konkurenčními nemocničními systémy.
- **Selekční zkreslení při dobrovolném zařazení do programu**: pacienti, kteří se rozhodnou zapojit do digitálního následného programu, se často systematicky liší (zdravotní gramotností, sociální oporou či motivací) od těch, kteří ne, což zkresluje jakékoli naivní srovnání před/po nebo zařazení/nezařazení.
- **Počítání každého návratu do téhož zařízení jako readmise**: plánovaná readmise (například plánovaný druhý krok výkonu) není signálem selhání propuštění a měla by být vyloučena z čitatele, nikoli smíchána se skutečně neplánovanými návraty.

## Zdroje

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program a specifikace míry Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), pokyny ke snižování předcházitelných readmisí
- Recenzovaná literatura o digitálním vzdáleném monitoringu a intervencích přechodné péče ke snížení readmisí, například studie publikované v JAMA Network Open a npj Digital Medicine

Viz také: [přesnost směrování triáže](../přesnost-směrování-triáže/), protože nevhodné počáteční směrování může být samo o sobě následným hybatelem předcházitelných přijetí.
