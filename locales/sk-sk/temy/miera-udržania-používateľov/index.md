# Miera udržania používateľov

Miera udržania používateľov je podiel používateľov aktívnych v počiatočnom období, ktorí zostávajú aktívni v neskoršom období, a jej opakom je miera odchodu (alebo predčasného ukončenia), teda podiel tých, ktorí produkt prestanú používať úplne. Kým miera prijatia pacientskeho portálu (pozri danú tému) meria, či pacient digitálny zdravotnícky produkt vôbec zmysluplne aktivuje, udržanie meria, či ho naďalej používa — a pre každý digitálny zdravotnícky produkt predplatiteľského typu alebo produkt priebežnej starostlivosti je udržanie zvyčajne jedinou metrikou najtesnejšie spojenou s klinickým vplyvom aj komerčnou udržateľnosťou.

## Prečo je dôležitá

Digitálny zdravotnícky produkt, ktorý nedokáže udržať používateľov, nemôže priniesť trvalý klinický prínos, nech sú jeho počiatočné čísla prijatia alebo aktivácie akokoľvek silné: nástroj na zvládanie chronického ochorenia používaný dva týždne a potom opustený pravdepodobne neposunie biometrický výsledok, ktorý závisí od mesiacov trvalej zmeny správania. Udržanie je aj jednou z komerčne najdôležitejších metrík, ktoré spoločnosť digitálneho zdravia vykazuje investorom a platiteľom, pretože krivky udržania (tvar poklesu v čase, nielen jedno percento udržania) odhaľujú, či produkt našiel skutočne udržateľný vzorec používania, alebo len zachytáva počiatočný záujem poháňaný novosťou, ktorý predvídateľne vyprchá. Krivka udržania, ktorá sa po počiatočnom poklese vyrovná (pacienti, ktorí prekonajú prvý mesiac, majú tendenciu zostať), je veľmi odlišným, a oveľa zdravším signálom než taká, ktorá neustále stabilne klesá bez spodnej hranice.

## Ako sa počíta

```
Miera udržania (obdobie N) = používatelia aktívni v období N, ktorí boli
                              aktívni aj v počiatočnom období kohorty /
                              používatelia v počiatočnom období kohorty × 100

Miera odchodu = 1 − miera udržania (za rovnaké obdobie)

Vykazujte ako kohortovú krivku udržania (udržanie v deň/týždeň/mesiac
1, 2, 3 …), nie jedno číslo v jednom časovom bode, pretože jeden záber
zamieňa nedávno pripojených používateľov (ktorí ešte nemali príležitosť
odísť) s dlhodobými.
```

## Prepracovaný príklad

Aplikácia digitálneho zdravia zaradí v januári kohortu 1 000 nových používateľov. Do konca 1. mesiaca zostáva z týchto pôvodných 1 000 aktívnych 640 (udržanie v 1. mesiaci 64 %). Do konca 3. mesiaca zostáva aktívnych 410 (udržanie v 3. mesiaci 41 %). Do 6. mesiaca zostáva aktívnych 380 (udržanie v 6. mesiaci 38 %). Tvar tejto krivky — strmý počiatočný pokles nasledovaný vyrovnaním medzi 3. a 6. mesiacom — naznačuje, že produkt udrží stabilné jadro používateľov po prekonaní počiatočnej prekážky prijatia, čo je podstatne odlišný a povzbudivejší signál, než keby pokles od 3. do 6. mesiaca pokračoval rovnakým tempom ako v 1. až 3. mesiaci.

## Zdroje údajov a výhrady

Udržanie sa počíta z vlastných záznamov udalostí prihlásenia alebo aktivity produktu, pričom „aktívny“ sa vymedzuje konzistentne (napríklad aspoň jedna kvalifikujúca relácia v období) vo všetkých porovnávaných kohortách. Kohorty by sa mali porovnávať na báze „jablká s jablkami“ — rovnaká počiatočná definícia „aktívneho“, rovnaká dĺžka pozorovacieho okna —, pretože aj malé definičné rozdiely (30-dňové oproti 28-dňovým mesiacom alebo prísnejšia oproti voľnejšej hranici „aktívneho“) môžu posunúť vykázané percento udržania o niekoľko bodov bez skutočného rozdielu v správaní používateľov. Sezónne efekty sú pri zdravotných aplikáciách viazaných na novoročné predsavzatia alebo konkrétne obdobia zdravotného povedomia bežné, takže medziročné porovnanie kohort je zvyčajne informatívnejšie než porovnanie susedných kohort z rôznych období roka.

## Nástrahy

- **Vykazovanie jedného zábera udržania namiesto krivky**: jedno číslo „X % používateľov je stále aktívnych“ bez tvaru poklesu v čase nedokáže rozlíšiť produkt, ktorý sa vyrovná (zdravý), od produktu v nepretržitom poklese (nezdravý).
- **Zmena definície „aktívneho“ medzi obdobiami vykazovania**: uvoľnenie definície aktívneho používateľa (napríklad započítanie pasívneho otvorenia aplikácie namiesto dokončenej akcie) môže spôsobiť, že udržanie sa javí ako zlepšené, hoci skutočné používanie sa vôbec nezmenilo.
- **Ignorovanie sezónnosti kohort**: porovnanie udržania januárovej kohorty (často nafúknutej zaradením z novoročných predsavzatí, ktoré v priemere prináša menej motivovanú kohortu) s kohortou získanou v inom období roka môže vytvoriť zavádzajúce závery o trende.
- **Zmiešavanie organických a platene získaných kohort**: používatelia získaní cez rôzne kanály sa často udržia veľmi odlišne; zmiešanie do jedného súhrnného čísla udržania môže skryť problém udržania špecifický pre kanál.

## Zdroje

- Recenzovaná literatúra o zapojení a odpadávaní používateľov aplikácií digitálneho zdravia, napríklad štúdie publikované v Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, usmernenia osvedčených postupov k meraniu zapojenia a udržania pri digitálnych terapeutikách
- Odvetvové referenčné správy o udržaní používateľov mobilných zdravotných aplikácií od analytických platforiem a organizácií výskumu trhu digitálneho zdravia

Pozri tiež: [miera konzistentnosti zapojenia pacientov](../miera-konzistentnosti-zapojenia-pacientov/), ktorá meria kvalitu zapojenia medzi udržanými používateľmi, na rozdiel od otázky, či zostávajú zaradení vôbec.
