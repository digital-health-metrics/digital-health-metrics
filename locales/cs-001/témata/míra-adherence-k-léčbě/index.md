# Míra adherence k léčbě

Míra adherence k léčbě měří, do jaké míry pacient užívá předepsaný lék podle pokynů; nejčastěji se vyjadřuje jako podíl dnů v definovaném období, kdy měl pacient lék k dispozici tak, jak byl předepsán. Patří k nejvýznamnějším metrikám digitálního zdraví, protože neadherence je častá, s vhodnou podporou do značné míry předcházitelná a přímo spojená s horšími klinickými výsledky a vyššími následnými náklady – právě tuto mezeru mají zaplnit aplikace s připomínkami léků, chytré lékovky a upomínky k vyzvednutí léku v lékárně.

## Proč na ní záleží

Orgány veřejného zdraví odhadují, že neadherence k léčbě chronických onemocnění dosahuje u některých diagnóz až 50 %. Je to jedna z hlavních předcházitelných příčin zbytečných hospitalizací, progrese onemocnění a selhání léčby, které se mylně připisuje samotnému léku, a nikoli nekonzistentnímu užívání. Digitální nástroje adherence existují právě proto, aby tuto mezeru uzavřely, takže pro každý program s léčebnou složkou je míra adherence obvykle nejdůležitější metrikou pro rozhodování: příčinně stojí před zlepšením biometrických ukazatelů, opakovanou hospitalizací a většinou dalších metrik klinických výsledků, které by program mohl vykazovat. Program, který zlepšuje zapojení nebo spokojenost, ale nehne adherencí, pravděpodobně dosud neprokázal věrohodný mechanismus klinického přínosu.

## Jak se počítá

```
Podíl pokrytých dnů (Proportion of Days Covered, PDC) = dny v období,
                                    kdy byl lék k dispozici (podle počtu
                                    dnů zásoby z vyzvednutí) / dny
                                    v období měření × 100

Poměr držení léku (Medication Possession Ratio, MPR) = celkový počet dnů
                                    zásoby získaný během období / dny
                                    v období × 100 (při předčasném
                                    vyzvednutí může přesáhnout 100 %;
                                    proto se obecně dává přednost PDC)

Pacient se obvykle považuje za „adherentního“ při PDC ≥ 80 %,
podle široce používané konvence měření kvality.
```

## Řešený příklad

Pacientovi je předepsán denně užívaný chronický lék na 90denní období měření. Záznamy z lékárny ukazují, že pacient získal dostatek léku na pokrytí 76 z těchto 90 dnů, se dvěma mezerami: 9denní mezera po vyčerpání zásoby před vyzvednutím dalšího balení a 5denní mezera kolem hospitalizace. PDC je 76 / 90 × 100 = 84 %, což překračuje konvenční práh adherence 80 %. Pokud by se stejné mezery měřily pomocí MPR založeného na dnech zásoby vydaných, a nikoli skutečně pokrytých, mohlo by předčasné vyzvednutí jinde v období zvýšit poměr nad 100 %, což ukazuje, proč je PDC konzervativnějším a obecně preferovaným měřítkem.

## Zdroje dat a omezení

Standardním zdrojem jsou lékárenské nároky nebo data o vyzvednutí (buď od správce lékárenských dávek, nebo z propojeného lékárenského systému), protože odrážejí, co pacient skutečně získal, a nikoli co mu bylo předepsáno; samotná data o receptech adherenci nadhodnocují, protože nepotvrzují, že pacient lék vůbec vyzvedl. Digitální nástroje adherence – chytré lékovky, polykatelné senzory, propojené chytré inhalátory zaznamenávající každé použití u respiračních onemocnění, jako je astma a CHOPN, a kontroly přes aplikaci – poskytují data s vyšším rozlišením o tom, zda byla dávka skutečně užita, a nikoli jen získána. Používá je však malá, potenciálně nereprezentativní menšina pacientů, takže při smíchání adherence potvrzené zařízením s PDC z nároků napříč populací je třeba opatrnosti při interpretaci. Adherenci je třeba měřit po dobu dostatečně dlouhou, aby vyhladila jednotlivé vynechané dávky, ale dostatečně krátkou, aby odhalila významný pokles dříve, než způsobí klinickou újmu; u chronických léků jsou běžná 90denní klouzavá okna.

## Úskalí

- **Používání MPR bez upozornění, že může přesáhnout 100 %**: nevysvětlené poměry nad 100 % z předčasných vyzvednutí nebo hromadění zásob činí srovnání mezi pacienty i obdobími nespolehlivým, pokud se nepoužije PDC nebo není poměr výslovně omezen shora.
- **Považování dat o receptech či objednávkách za důkaz adherence**: recept vystavený nebo zaslaný do lékárny neříká nic o tom, zda pacient lék vyzvedl či užil; mezeru uzavírají jen data o vyzvednutí nebo ze zařízení.
- **Bezhlavé uplatňování jednoho prahu adherence na všechna onemocnění**: klinický důsledek vynechání 20 % dávek se mezi skupinami léčiv enormně liší (např. antikoagulancia versus statiny), takže jediný univerzální práh 80 % může u některých léků klinické riziko podhodnotit či nadhodnotit.
- **Ignorování změn a vysazení léků**: pacient, kterému byl klinicky opodstatněně změněn lék, se může jevit jako velký pokles adherence u původního léku, pokud výpočet změnu nezohledňuje.

## Zdroje

- Pharmacy Quality Alliance (PQA), specifikace míry Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), míry adherence k léčbě v hodnocení Star Ratings
- Recenzovaná literatura o měření adherence k léčbě a digitálních intervencích adherence, například studie publikované v Journal of Managed Care & Specialty Pharmacy

Viz také: [míra zlepšení biometrických ukazatelů](../míra-zlepšení-biometrických-ukazatelů/), jejímž hlavním hybatelem je adherence k léčbě chronických onemocnění.
