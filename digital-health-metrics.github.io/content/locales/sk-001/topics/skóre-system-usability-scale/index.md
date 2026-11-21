# Skóre System Usability Scale

Skóre System Usability Scale (SUS) je štandardizovaný 10-položkový dotazník používaný na kvantifikáciu toho, aký použiteľný je softvér, ktorý vytvára jedno skóre od 0 do 100, ktoré možno porovnať s dobre zavedenými odvetvovými normami. Na rozdiel od Net Promoter Score, ktorý meria ochotu odporučiť, alebo mier výsledkov hlásených pacientmi, ktoré merajú klinický alebo funkčný stav, SUS meria jednu konkrétnu vec: aké ľahké je softvér samotný naučiť sa a používať, a to pre pacientov alebo klinický personál.

## Prečo je dôležité

Digitálny zdravotnícky nástroj môže mať silné klinické dôkazy a presvedčivý obchodný prípad, a napriek tomu v praxi zlyhať, pretože pacienti alebo klinickí pracovníci považujú rozhranie za mätúce, pomalé alebo frustrujúce — a keďže SUS je validovaný, široko používaný nástroj s desaťročiami publikovaných referenčných údajov naprieč odvetviami, umožňuje tímu digitálneho zdravia porovnať použiteľnosť vlastného produktu so známym rozdelením, namiesto spoliehania sa na neformálne dojmy alebo anekdotické sťažnosti. SUS je zámerne technologicky neutrálny a rýchly na administráciu (zvyčajne pod päť minút), čo umožňuje prakticky ho opakovane vykonávať počas iterácií návrhu, na rozdiel od úplnej štúdie použiteľnosti alebo formálnej klinickej skúšky. Keďže zlyhania použiteľnosti smerom ku klinickým pracovníkom sú zdokumentovaným prispievateľom k vyhoreniu (pozri mieru vyhorenia lekárov) a zlyhania použiteľnosti smerom k pacientom sú zdokumentovaným prispievateľom k opusteniu a slabým výsledkom digitálnej gramotnosti (pozri mieru digitálnej gramotnosti), SUS funguje ako lacný signál skorého varovania o použiteľnosti, ktorý dokáže zachytiť problém návrhu predtým, než sa prejaví v týchto dôležitejších následných metrikách.

## Ako sa počíta

```
Skóre SUS = ((súčet skóre nepárnych položiek − 5) +
             (25 − súčet skóre párnych položiek)) × 2,5

Výsledkom je jedno skóre od 0 do 100 (nie percento, napriek škále, keďže
nepredstavuje „percento správnych“ ani nič podobné).

Publikovaná interpretácia referenčných hodnôt (Bangor a kol.):
  Nad 80  — výborná použiteľnosť
  68      — priemer, podľa širokej odvetvovej normy
  Pod 51  — slabá použiteľnosť, ktorá si vyžaduje preskúmanie
```

## Prepracovaný príklad

Telemedicínska platforma podáva štandardný 10-položkový dotazník SUS 150 pacientom po ich prvej videonávšteve. Vypočítané priemerné skóre SUS všetkých respondentov je 74. V porovnaní s široko citovaným odvetvovým priemerom 68 to naznačuje nadpriemernú použiteľnosť pre túto konkrétnu populáciu pacientov a prípad použitia, hoci stále podstatne pod hranicou „výborná“ 80, ktorá by naznačovala, že zostáva málo bariér použiteľnosti. Členenie tých istých 150 odpovedí podľa veku ukazuje priemerné skóre 81 u pacientov mladších ako 50 rokov a 62 u pacientov vo veku 65 rokov a viac — rozdiel, ktorý poukazuje na konkrétny, riešiteľný problém použiteľnosti pre starších pacientov, a nie na všeobecný problém použiteľnosti produktu, a ktorý by jeden zmiešaný priemer skryl.

## Zdroje údajov a výhrady

Údaje SUS pochádzajú priamo od pacientov alebo klinických pracovníkov vypĺňajúcich štandardizovaný 10-položkový dotazník a nástroj sa musí podávať presne tak, ako bol validovaný (rovnakých 10 položiek, rovnaká 5-bodová škála súhlasu, rovnaký vzorec hodnotenia), aby bolo výsledné skóre porovnateľné s publikovanými referenčnými hodnotami; upravená alebo skrátená verzia dotazníka, aj keď dobre mienená, vytvára skóre, ktoré nemožno spoľahlivo interpretovať voči štandardnému referenčnému rozdeleniu. SUS meria vnímanú použiteľnosť, ktorá koreluje s objektívnym úspechom dokončenia úloh, no nie je s ním totožná (pre mieru založenú na dokončení úloh pozri mieru digitálnej gramotnosti); produkt môže mať dobré skóre SUS od pacientov, ktorí nevyskúšali zložitejšie funkcie, a spárovanie SUS s objektívnymi údajmi o dokončení úloh preto dáva úplnejší obraz než ktorékoľvek samostatne. Záleží na načasovaní odpovedí: podanie SUS bezprostredne po frustrujúcom konkrétnom incidente (zlyhané pripojenie, mätúci krok) oproti podaniu po hladkej relácii môže posunúť skóre nezávisle od celkovej použiteľnosti produktu.

## Nástrahy

- **Úprava položiek alebo hodnotenia štandardného dotazníka**: aj malé zmeny znenia alebo škály zneplatňujú porovnanie s dobre zavedeným publikovaným referenčným rozdelením; používajte štandardný 10-položkový nástroj presne tak, ako bol validovaný.
- **Vykazovanie iba priemerného skóre bez členenia**: použiteľnosť sa často podstatne líši podľa veku používateľa, digitálnej gramotnosti alebo úlohy (pacient oproti klinickému pracovníkovi); vykazujte členenie, aby ste našli konkrétne, riešiteľné medzery v použiteľnosti, ktoré jeden priemer skrýva.
- **Považovanie SUS za mieru klinickej účinnosti**: SUS meria konkrétne použiteľnosť, nie klinický výsledok ani spokojnosť so starostlivosťou; vysoko použiteľný nástroj môže stále nezlepšiť klinické výsledky a tieto dve veci by sa nikdy nemali zamieňať ani nahrádzať.
- **Podávanie prieskumu iba po mimoriadne hladkých alebo mimoriadne frustrujúcich reláciách**: načasovanie a kontext podania môže skresliť skóre; podávajte konzistentne naprieč reprezentatívnou vzorkou reálnych relácií, nie len pohodlných alebo selektívne vybraných.

## Zdroje

- Brooke, J., „SUS: A Quick and Dirty Usability Scale“, pôvodný publikovaný nástroj
- Bangor, Kortum a Miller, publikovaný výskum referenčných hodnôt SUS, ktorý stanovil široko citované pásma interpretácie skóre
- Recenzovaná literatúra o použití SUS pri hodnotení použiteľnosti digitálneho zdravia a telemedicíny, napríklad štúdie publikované v JMIR Human Factors

Pozri tiež: [net promoter score pacientov](../net-promoter-score-pacientov/), príbuzná, no odlišná metrika hlásená pacientmi, ktorá meria spokojnosť a lojalitu, a nie konkrétne použiteľnosť softvéru.
