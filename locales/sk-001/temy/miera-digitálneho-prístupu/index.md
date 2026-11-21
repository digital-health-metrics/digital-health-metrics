# Miera digitálneho prístupu

Miera digitálneho prístupu meria podiel oprávnenej populácie pacientov, ktorá má praktické prostriedky na použitie digitálneho zdravotníckeho produktu vôbec: širokopásmové alebo spoľahlivé mobilné dátové pripojenie, zariadenie schopné pripojenia na internet a aktívny účet na príslušnom pacientskom portáli alebo v aplikácii. Je to predpokladová metrika pre každé ďalšie meranie digitálneho zdravia v tejto knihe — populácia sa nemôže zaregistrovať, zapojiť ani profitovať z digitálneho zdravotníckeho produktu, ktorý je pre ňu štrukturálne nedostupný, nech je produkt navrhnutý akokoľvek dobre.

## Prečo je dôležitá

Metriky prijatia a zapojenia v digitálnom zdraví implicitne predpokladajú populáciu, ktorá už má digitálny prístup, a vykazovanie mier prijatia alebo zapojenia bez predchádzajúceho zistenia základnej miery prístupu hrozí tichým vylúčením pacientov, u ktorých je najmenej pravdepodobné, že ho majú — a ktorí často majú aj najväčšiu zdravotnú potrebu. Rámec HIMSS Digital Health Equity Measurement Framework (DHEMF) a podobné rámce považujú digitálny prístup za základnú metriku rovnosti prvého rádu práve preto, že intervencie postavené bez zohľadnenia medzier v prístupe majú tendenciu posilňovať, a nie zmenšovať existujúce zdravotné nerovnosti: stratégia „telemedicína na prvom mieste“ môže neúmyselne znížiť prístup k starostlivosti pre pacientov bez spoľahlivého pripojenia alebo zariadenia, aj keď merateľne zlepšuje skúsenosť pacientov, ktorí oboje už mali. Mieru digitálneho prístupu by sa malo sledovať a vykazovať podľa demografických a geografických segmentov, pretože celoštátne alebo celoorganizačné priemery bežne zakrývajú veľké medzery pre konkrétne populácie.

## Ako sa počíta

```
Miera digitálneho prístupu = pacienti s širokopásmovým/mobilným pripojením
                              A zariadením schopným pripojenia na internet
                              A aktívnym účtom na pacientskom portáli alebo
                              v aplikácii / celá oprávnená populácia
                              pacientov × 100

Každú čiastkovú zložku vykazujte aj osobitne, nielen kombinovanú mieru:
  Miera pripojenia       = pacienti so spoľahlivým internetovým
                            pripojením / oprávnená populácia × 100
  Miera vlastníctva zariadení = pacienti so zariadením schopným
                            pripojenia na internet / oprávnená
                            populácia × 100
  Miera aktivácie portálu = pacienti s aktívnym účtom na portáli/v aplikácii /
                            oprávnená populácia × 100 (pozri mieru prijatia
                            pacientskeho portálu pre úplnejší lievik prijatia)
```

## Prepracovaný príklad

Zdravotnícky systém obsluhuje oprávnenú populáciu 40 000 pacientov. Prieskum medzi pacientmi a údaje o infraštruktúre ukazujú, že 34 000 (85 %) má spoľahlivé širokopásmové alebo mobilné pripojenie, 33 000 (82,5 %) má zariadenie schopné pripojenia na internet a z pacientov spĺňajúcich obe podmienky má 27 000 (67,5 % celej oprávnenej populácie) aktívny účet na pacientskom portáli. Rozčlenenie podľa veku ukazuje, že pacienti vo veku 65 a viac rokov majú kombinovanú mieru digitálneho prístupu iba 48 %, v porovnaní so 78 % u pacientov mladších ako 65 rokov — medzeru, ktorú celoorganizačný priemer 67,5 % úplne zakrýva a ktorá by mala priamo ovplyvniť, či možno danú službu pre túto populáciu bezpečne ponúknuť výlučne digitálne.

## Zdroje údajov a výhrady

Údaje o pripojení a vlastníctve zariadení zvyčajne pochádzajú z kombinácie vlastného hlásenia pacientov (prostredníctvom prieskumu alebo vstupného dotazníka), údajov o mapovaní dostupnosti širokopásmového pripojenia Federal Communications Commission (FCC) alebo ekvivalentného národného orgánu pre geografickú oblasť pacienta a údajov o aktivácii portálu z vlastných systémov organizácie. Dostupnosť širokopásmového pripojenia na úrovni oblasti (či poskytovateľ ponúka službu v danom PSČ) je slabším ukazovateľom než pripojenie na úrovni domácnosti, pretože údaje o dostupnosti na úrovni oblasti nehovoria nič o tom, či si konkrétny pacient službu môže dovoliť alebo sa rozhodol ju predplatiť — miery prístupu na úrovni oblasti a domácnosti by sa nemali zamieňať. Prístup k zariadeniu a pripojeniu sa môže v domácnosti aj zdieľať (napríklad jeden smartfón používaný viacerými členmi rodiny), čo údaje z prieskumu na úrovni domácností zachytávajú lepšie než samotné údaje o prihlásení na portál na úrovni jednotlivca.

## Nástrahy

- **Vykazovanie iba celoorganizačného priemeru**: spoľahlivo skrýva veľké medzery v prístupe pre starších, nízkopríjmových, vidieckych alebo inak digitálne marginalizovaných pacientov; vždy člente podľa demografických a geografických segmentov.
- **Zamieňanie dostupnosti širokopásmového pripojenia na úrovni oblasti so skutočným prístupom domácnosti**: to, že PSČ je „obsluhované“ poskytovateľom širokopásmového pripojenia, neznamená, že každá domácnosť v ňom službu odoberá alebo si ju môže dovoliť.
- **Považovanie vlastníctva zariadenia za jednorazový, statický fakt**: prístup k zariadeniu môže byť prechodný (starnúce zariadenie, stratený alebo poškodený telefón, prerozdelené rodinné zariadenie), a mieru prístupu preto treba merať opakovane, nepredpokladať ju za stabilnú po jednom posúdení.
- **Návrh výlučne digitálnej trasy pred zistením miery prístupu dotknutej populácie**: presun služby na výlučne digitálnu bez predchádzajúceho potvrdenia skutočnej miery digitálneho prístupu cieľovej populácie hrozí tichým vylúčením práve tých pacientov, ktorí majú najmenšiu možnosť dostať sa k alternatívnemu kanálu.

## Zdroje

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), národné údaje o dostupnosti širokopásmového pripojenia a digitálnej rovnosti
- Pew Research Center, výskum prístupu k internetu, širokopásmovému pripojeniu a zariadeniam a trendov digitálnej priepasti v demografických skupinách

Pozri tiež: [miera digitálnej gramotnosti](../miera-digitálnej-gramotnosti/), úzko súvisiaca metrika toho, či pacienti, ktorí prístup majú, ho dokážu účinne používať.
