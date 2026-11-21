# Net Promoter Score pacientov

Net Promoter Score (NPS) pacientov meria ochotu pacientov odporučiť digitálny zdravotnícky produkt alebo telemedicínsku službu ďalším ľuďom na základe jedinej otázky z prieskumu — „Aká je pravdepodobnosť, že túto službu odporučíte priateľovi alebo kolegovi?“ — hodnotenej od 0 do 10. Respondenti so skóre 9 – 10 sú „promótori“, 7 – 8 „pasívni“ a 0 – 6 „kritici“; NPS je percento promótorov mínus percento kritikov. Je to najpoužívanejšia, a zároveň najkritizovanejšia metrika spokojnosti pacientov v digitálnom zdraví, cenená pre svoju jednoduchosť, no samotná obmedzená v tom, čo dokáže diagnostikovať.

## Prečo je dôležitý

NPS dáva tímom digitálneho zdravia jednoduchý, štandardizovaný, medzi sebou porovnateľný signál spokojnosti, ktorý je lacné zbierať a pre nešpecialistov (vedenie, správne rady, objednávateľov) ľahko interpretovať na prvý pohľad, a preto zostáva obľúbený napriek dobre zdokumentovaným metodologickým obmedzeniam. Špeciálne pri telemedicíne a produktoch „digitálnych vstupných dverí“ je NPS často predstihovým ukazovateľom toho, či budú pacienti naďalej uprednostňovať digitálny kanál pred osobnou alternatívou, keď sú k dispozícii obe, čo má priame dôsledky pre plánovanie mixu kanálov a kapacity. NPS je však jedno vysokoúrovňové súhrnné číslo: klesajúci NPS tímu povie, že niečo nie je v poriadku, no nie čo, a malo by sa preto vždy dopĺňať voľnotextovou spätnou väzbou alebo podrobnejším nástrojom použiteľnosti, aby bolo použiteľné na konanie, a nie len číslom na výsledkovej tabuli.

## Ako sa počíta

```
NPS = % promótorov (skóre 9 – 10) − % kritikov (skóre 0 – 6)

Výsledok je číslo od −100 do +100, nie percento, hoci sa odvodzuje
z percent — k číslu NPS nikdy nepripájajte znak „%“.

Vykazujte spolu s:
  mierou odpovedí (% oslovených pacientov, ktorí odpovedali)
  veľkosťou vzorky
  presným znením použitej otázky
```

## Prepracovaný príklad

Telemedicínska platforma osloví po videokonzultácii 1 000 pacientov a získa 400 odpovedí (miera odpovedí 40 %). Z týchto 400 respondentov 220 hodnotí 9 – 10 (promótori, 55 %), 100 hodnotí 7 – 8 (pasívni, 25 %) a 80 hodnotí 0 – 6 (kritici, 20 %). NPS je 55 − 20 = 35. Toto číslo má význam len v kontexte: NPS 35 môže byť silný výsledok v porovnaní so širším odvetvím telemedicíny alebo znepokojivý pokles oproti vlastnému skóre tej istej platformy 48 v predchádzajúcom štvrťroku — NPS je oveľa užitočnejší ako trend jedného produktu v čase než ako absolútna jednorazová referenčná hodnota voči inému produktu.

## Zdroje údajov a výhrady

NPS sa zbiera prostredníctvom prieskumu po interakcii, zvyčajne spusteného bezprostredne po videonávšteve, relácii v aplikácii alebo epizóde starostlivosti, a miera odpovedí je mimoriadne dôležitá: nízka miera odpovedí (výrazne pod približne 40 % z prepracovaného príkladu) riskuje skreslenie z neodpovedania, keď odpovedajú len silne spokojní alebo silne nespokojní pacienti, čo ťahá skóre k extrémom a od skutočného postoja populácie. Porovnávanie NPS medzi organizáciami, ba aj medzi rôznymi kanálmi jednej organizácie (napríklad telemedicína oproti osobnej starostlivosti), je platné len vtedy, ak sú znenie otázky, načasovanie a populácia prieskumu skutočne porovnateľné; malé zmeny v znení sú známe tým, že merateľne posúvajú skóre. NPS by sa mal považovať za výsledok, ktorý treba vysvetliť, a nie za cieľ sám osebe — voľnotextové komentáre, ktoré zvyčajne sprevádzajú prieskum NPS, sú zvyčajne použiteľnejšie než samotné skóre.

## Nástrahy

- **Porovnávanie čísel NPS zozbieraných s odlišným znením otázky alebo načasovaním**: aj drobné rozdiely v návrhu prieskumu môžu posunúť skóre o niekoľko bodov, čo robí medziorganizačné porovnávanie NPS oveľa menej spoľahlivým, než sa zdá.
- **Ignorovanie miery odpovedí**: hlavné číslo NPS vypočítané z 10 % miery odpovedí je oveľa menej dôveryhodné než vypočítané zo 60 % miery odpovedí, keďže nízke miery odpovedí sú náchylné na skreslenie z neodpovedania smerom k najextrémnejším názorom.
- **Považovanie NPS za diagnostický nástroj namiesto súhrnnej metriky**: klesajúci NPS povie, že niečo nie je v poriadku, no nikdy nepovie čo; vždy by sa mal dopĺňať kvalitatívnou spätnou väzbou alebo podrobnejším nástrojom spokojnosti či použiteľnosti na zistenie príčiny.
- **Naháňanie NPS ako cieľa samého o sebe**: úzka optimalizácia čísla NPS (napríklad oslovovaním pacientov len po mimoriadne pozitívnych interakciách) môže zlepšiť vykázané skóre, no urobiť základnú skúsenosť pacienta nie lepšou, alebo dokonca horšou.

## Zdroje

- Bain & Company, pôvodná metodika Net Promoter System a usmernenia k referenčným porovnaniam
- Agency for Healthcare Research and Quality (AHRQ), program prieskumov skúsenosti pacientov CAHPS (Consumer Assessment of Healthcare Providers and Systems), ako doplnková, podrobnejšia alternatíva
- Recenzovaná literatúra o používaní a obmedzeniach Net Promoter Score v zdravotníckych prostrediach, napríklad štúdie publikované v Journal of Medical Internet Research (JMIR)

Pozri tiež: [miera udržania používateľov](../miera-udržania-používateľov/), keďže spokojnosť hlásená pacientmi a skutočné pokračujúce používanie produktu sa často rozchádzajú a oplatí sa sledovať ich ako samostatné signály.
