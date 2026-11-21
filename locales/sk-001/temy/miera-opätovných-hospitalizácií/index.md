# Miera opätovných hospitalizácií

Miera opätovných hospitalizácií je podiel prepustených pacientov, ktorí sú neplánovane opätovne prijatí do nemocnice v rámci vymedzeného obdobia po prepustení — najčastejšie do 30 dní. Pre digitálne zdravie je to metrika najpriamejšie spojená s ekonomikou platiteľov a zmluvami o starostlivosti založenej na hodnote: program vzdialeného monitorovania, následnej starostlivosti po prepustení alebo digitálneho prechodu starostlivosti, ktorý nedokáže preukázať dôveryhodný vplyv na opätovné hospitalizácie, pravdepodobne nezíska trvalú podporu úhrad, nech vyzerajú jeho čísla o zapojení akokoľvek dobre.

## Prečo je dôležitá

Neplánovaná opätovná hospitalizácia je nákladná, narúša život pacienta a v mnohých zdravotníckych systémoch sa už priamo penalizuje: schémy, ako americký Hospital Readmissions Reduction Program, znižujú platby nemocniciam s vyššou, než sa očakáva, mierou opätovných hospitalizácií pri vybraných stavoch, a preto nemocnice aktívne objednávajú digitálne programy po prepustení a vzdialeného monitorovania zamerané na ich znižovanie. Významný podiel opätovných hospitalizácií sa považuje za potenciálne preventabilný — spôsobený nedostatočnými pokynmi pri prepustení, zmeškanými kontrolnými termínmi, nepochopením liečby alebo nezachyteným zhoršením príznakov, ktoré dobre navrhnutý digitálny kontaktný bod dokáže odhaliť skôr — a práve túto medzeru digitálne nástroje prechodnej starostlivosti cielia. Mieru opätovných hospitalizácií treba vždy čítať spolu so skladbou prípadov: program obsluhujúci chorejšiu, komplexnejšiu populáciu bude mať štrukturálne vyššiu základnú mieru než program obsluhujúci zdravšiu populáciu, a to nezávisle od kvality programu.

## Ako sa počíta

```
30-dňová miera opätovných hospitalizácií = neplánované opätovné
                          hospitalizácie do 30 dní od prepustenia /
                          všetky indexové prepustenia × 100

Z čitateľa vylúčte: plánované opätovné hospitalizácie (napr. plánovaný
následný výkon) a presuny, ktoré sú pokračovaním tej istej epizódy
starostlivosti, a nie novým prijatím.

Ak je to možné, upravte o riziko pomocou uznávaného indexu skladby
prípadov alebo komorbidity predtým, než porovnáte miery medzi
rôznymi populáciami pacientov alebo obdobiami.
```

## Prepracovaný príklad

Nemocnica prepustí za štvrťrok 1 200 pacientov so srdcovým zlyhaním. Z nich 210 je opätovne hospitalizovaných do 30 dní, pričom 15 sú plánované opätovné hospitalizácie na plánovaný výkon a vylučujú sa. Neplánovaná 30-dňová miera opätovných hospitalizácií je (210 − 15) / 1 200 × 100 = 16,25 %. Pre podskupinu 400 týchto pacientov (vybraných podľa klinického rizika, nie náhodne) sa zavedie program vzdialeného monitorovania a ich miera neplánovaných opätovných hospitalizácií je 14 % v porovnaní s 18 % u 800 pacientov, ktorí zaradení neboli. Keďže zaradenie vychádzalo z klinického rizika, a nie z náhodného pridelenia, tento rozdiel je skôr indíciou než presvedčivým dôkazom účinku programu a mal by sa interpretovať spolu s analýzou úpravy o riziko, a nie brať doslovne.

## Zdroje údajov a výhrady

Údaje o opätovných hospitalizáciách sa zvyčajne čerpajú z vlastného toku ADT (príjem-prepustenie-presun) nemocnice pre opätovné prijatia do toho istého zariadenia, no pacient opätovne prijatý do inej nemocnice sa v tomto toku vôbec neobjaví, takže sledovanie opätovných hospitalizácií v jednej nemocnici systematicky podhodnocuje skutočné miery, pokiaľ sa nedoplní údajmi z regionálnej výmeny zdravotných informácií, údajmi z nárokov platiteľov alebo celoštátnymi databázami všetkých platiteľov. Pripísanie účinku digitálnemu programu si vyžaduje opatrnosť: pacienti, ktorí sa dobrovoľne zapoja do programu vzdialeného monitorovania, sú len zriedka náhodnou vzorkou prepustenej populácie, takže naivné porovnanie mier opätovných hospitalizácií zaradených a nezaradených pacientov bude mať tendenciu byť skreslené práve efektmi výberu, ktoré spôsobili, že niektorí pacienti sa s väčšou pravdepodobnosťou zapojili.

## Nástrahy

- **Porovnávanie surových mier bez úpravy o riziko medzi populáciami**: program obsluhujúci chorejšiu populáciu vykáže vyššiu surovú mieru opätovných hospitalizácií než program obsluhujúci zdravšiu populáciu, aj keď je samotný program účinnejší; pred porovnaním vždy upravte o riziko.
- **Podhodnocovanie opätovných hospitalizácií v iných zariadeniach**: spoliehanie sa len na vlastné údaje ADT jednej nemocnice prehliadne opätovné prijatia inde, čím sa podhodnotí skutočná miera, najmä v oblastiach s viacerými konkurenčnými nemocničnými systémami.
- **Výberové skreslenie pri dobrovoľnom zaradení do programu**: pacienti, ktorí sa rozhodnú zapojiť do digitálneho programu následnej starostlivosti, sa často systematicky líšia (zdravotnou gramotnosťou, sociálnou podporou alebo motiváciou) od tých, ktorí nie, čo skresľuje každé naivné porovnanie pred/po alebo zaradení/nezaradení.
- **Počítanie každého návratu do toho istého zariadenia ako opätovnej hospitalizácie**: plánovaná opätovná hospitalizácia (napríklad plánovaný druhý stupeň výkonu) nie je signálom zlyhaného prepustenia a mala by sa z čitateľa vylúčiť, nie miešať so skutočne neplánovanými návratmi.

## Zdroje

- Centers for Medicare & Medicaid Services (CMS), špecifikácie Hospital Readmissions Reduction Program a miery Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), usmernenia k znižovaniu predchádzateľných opätovných hospitalizácií
- Recenzovaná literatúra o digitálnom vzdialenom monitorovaní a intervenciách prechodnej starostlivosti na zníženie opätovných hospitalizácií, napríklad štúdie publikované v JAMA Network Open a npj Digital Medicine

Pozri tiež: [presnosť smerovania triáže](../presnosť-smerovania-triáže/), keďže nevhodné počiatočné smerovanie môže byť samo následným faktorom predchádzateľných prijatí.
