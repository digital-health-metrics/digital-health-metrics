# Míra digitálního přístupu

Míra digitálního přístupu měří podíl způsobilé populace pacientů, který má praktické prostředky k použití produktu digitálního zdraví vůbec: širokopásmové nebo spolehlivé mobilní datové připojení, zařízení schopné připojení k internetu a aktivní účet v příslušném pacientském portálu nebo aplikaci. Je to předpokladová metrika pro každé další měřítko digitálního zdraví v této knize – populace se nemůže registrovat, zapojit ani těžit z žádného produktu digitálního zdraví, ke kterému se strukturálně nedostane, ať je produkt navržen sebelépe.

## Proč na ní záleží

Metriky přijetí a zapojení v digitálním zdraví implicitně předpokládají populaci, která už digitální přístup má. Vykazovat míru přijetí či zapojení bez předchozího stanovení základní míry přístupu hrozí tichým vyloučením pacientů, kteří takový přístup mají nejméně pravděpodobně, a tedy často i těch s největší zdravotní potřebou. Rámec HIMSS Digital Health Equity Measurement Framework (DHEMF) a podobné rámce považují digitální přístup za základní metriku rovnosti prvního řádu, právě proto, že zásahy navržené bez zohlednění mezer v přístupu mívají existující zdravotní nerovnosti spíše prohlubovat než zmenšovat: strategie „telemedicína na prvním místě“ může nechtěně snížit dostupnost péče pro pacienty bez spolehlivého připojení či zařízení, i když měřitelně zlepšuje zkušenost pacientů, kteří obojí již měli. Míru digitálního přístupu je třeba sledovat a vykazovat podle demografických a geografických segmentů, protože celostátní nebo celoorganizační průměry běžně zakrývají velké mezery u konkrétních populací.

## Jak se počítá

```
Míra digitálního přístupu = pacienti s širokopásmovým/mobilním připojením
                            A zařízením schopným připojení k internetu
                            A aktivním účtem v pacientském portálu či
                            aplikaci / celková způsobilá populace pacientů × 100

Každou dílčí složku vykazujte i samostatně vedle kombinované míry:
  Míra připojení         = pacienti se spolehlivým připojením k internetu /
                           způsobilá populace × 100
  Míra vlastnictví zařízení = pacienti se zařízením schopným připojení
                           k internetu / způsobilá populace × 100
  Míra aktivace portálu  = pacienti s aktivním účtem v portálu/aplikaci /
                           způsobilá populace × 100 (podrobnější trychtýř
                           přijetí viz míra využívání pacientského portálu)
```

## Řešený příklad

Zdravotnický systém obsluhuje způsobilou populaci 40 000 pacientů. Průzkum mezi pacienty a data o infrastruktuře ukazují, že 34 000 (85 %) má spolehlivé širokopásmové nebo mobilní připojení, 33 000 (82,5 %) má zařízení schopné připojení k internetu a z pacientů splňujících obě podmínky má 27 000 (67,5 % celé způsobilé populace) aktivní účet v pacientském portálu. Členění podle věku ukazuje, že pacienti ve věku 65 a více let mají kombinovanou míru digitálního přístupu pouhých 48 % oproti 78 % u pacientů do 65 let – rozdíl, který celoorganizační průměr 67,5 % zcela zakrývá a který by měl přímo ovlivnit rozhodnutí, zda lze danou službu pro tuto populaci bezpečně nabízet pouze digitálně.

## Zdroje dat a omezení

Data o připojení a vlastnictví zařízení obvykle pocházejí z kombinace sebehlášení pacientů (prostřednictvím průzkumu nebo vstupního dotazníku), dat Federal Communications Commission (FCC) či ekvivalentních národních map dostupnosti širokopásmového připojení pro geografickou oblast pacienta a dat o aktivaci portálu z vlastních systémů organizace. Dostupnost širokopásmového připojení na úrovni oblasti (zda poskytovatel nabízí službu v daném PSČ) je slabší aproximací než připojení na úrovni domácnosti, protože data o dostupnosti na úrovni oblasti neříkají nic o tom, zda si konkrétní pacient službu může dovolit nebo se k jejímu odběru rozhodl; míry přístupu na úrovni oblasti a domácnosti by se neměly směšovat. Přístup k zařízením a připojení může být také sdílený v rámci domácnosti (například jeden chytrý telefon používaný více členy rodiny), což data z průzkumu na úrovni domácnosti zachytí lépe než samotná data o přihlášení do portálu na úrovni jednotlivce.

## Úskalí

- **Vykazování pouze celoorganizačního průměru**: ten spolehlivě zakrývá velké mezery v přístupu u starších, nízkopříjmových, venkovských či jinak digitálně marginalizovaných segmentů pacientů; vždy členěte podle demografických a geografických segmentů.
- **Směšování dostupnosti širokopásmového připojení na úrovni oblasti se skutečným přístupem domácností**: skutečnost, že PSČ je „pokryto“ poskytovatelem širokopásmového připojení, neznamená, že každá domácnost v něm službu odebírá nebo si ji může dovolit.
- **Chápání vlastnictví zařízení jako jednorázového, statického faktu**: přístup k zařízením může být přechodný (stárnoucí zařízení, ztracený či poškozený telefon, přeřazené sdílené rodinné zařízení), proto je třeba míru přístupu měřit opakovaně, a nepředpokládat ji po jednom posouzení za stabilní.
- **Návrh čistě digitální cesty před zjištěním míry přístupu dotčené populace**: přesun služby na čistě digitální bez předchozího ověření skutečné míry digitálního přístupu cílové populace hrozí tichým vyloučením právě těch pacientů, kteří mají nejmenší možnost dosáhnout alternativního kanálu.

## Zdroje

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), národní data o dostupnosti širokopásmového připojení a digitální rovnosti
- Pew Research Center, výzkum přístupu k internetu, širokopásmovému připojení a zařízením a trendů digitální propasti napříč demografickými skupinami

Viz také: [míra digitální gramotnosti](../míra-digitální-gramotnosti/), úzce související metrika toho, zda pacienti, kteří přístup mají, jej dokážou efektivně využívat.
