# Míra konzistence zapojení pacientů

Míra konzistence zapojení pacientů měří, jak pravidelně zapsaný pacient pracuje s produktem digitálního zdraví v čase – například zaznamenává stravu nebo příznaky, eviduje fyzickou aktivitu či si prohlíží zdravotní data – nikoli pouze to, zda jej vůbec použil. Je to longitudinální metrika, odlišná od okamžitého počtu aktivních uživatelů: dva pacienti mohou mít shodný stav „použil aplikaci tento měsíc“, přičemž jeden zapisuje důsledně každý den a druhý zapíše jednou a na tři týdny zmizí; rozlišit je dokáže jedině metrika konzistence.

## Proč na ní záleží

Trvalá, pravidelná práce s digitálním zdravotním nástrojem patří k spolehlivějším předstihovým ukazatelům klinického přínosu, zejména u onemocnění závislých na chování, jako je diabetes, řízení hmotnosti a duševní zdraví, kde hodnota nástroje plyne z návyku, který podporuje, a nikoli z jednotlivé relace. Produkt může vykazovat zdravý měsíční počet aktivních uživatelů, a přitom obsluhovat populaci, která se jednou přihlásí a odpluje, protože měsíční aktivní používání je nízká laťka, která nic neříká o vzorci používání v rámci měsíce; metriky konzistence to zachytí způsobem, jakým prosté počty aktivity nemohou. Protože konzistence je také jednou z těžších věcí, které se dají udržet po měsíce místo týdnů, je poctivějším signálem kvality produktu a klinické vhodnosti než údaje o zapojení v krátkém okně, které jsou náchylné k efektům novosti bezprostředně po zaškolení.

## Jak se počítá

```
Míra konzistence zapojení = týdny alespoň s jednou kvalifikující interakcí
                            / celkový počet týdnů zápisu × 100

„Kvalifikující interakci“ je třeba definovat výslovně a důsledně
(např. záznam jídla, kontrola příznaků nebo dokončená synchronizace
aktivity) – nikdy ne pasivní událost, jako je otevření aplikace bez
zaznamenané akce.

Vykazujte jako rozdělení, nejen jako populační průměr:
  např. podíl pacientů s týdenní konzistencí ≥ 80 %,
        podíl s 50–79 %, podíl s < 50 %
```

## Řešený příklad

Aplikace pro výživový koučink zapíše pacienta na 12 týdnů. Pacient zaznamená alespoň jeden kvalifikující záznam jídla v 9 z těchto 12 týdnů, což dává individuální míru konzistence zapojení 9 / 12 × 100 = 75 %. V celé kohortě 2 000 pacientů zapsaných alespoň 12 týdnů si 600 pacientů (30 %) udržuje týdenní konzistenci ≥ 80 %, 900 (45 %) spadá do pásma 50–79 % a 500 (25 %) pod 50 %. Vykazování pouze kohortního průměru (který by mohl vyjít kolem 65 %) by zakrylo, že celá čtvrtina pacientů se zapojuje sotva vůbec – segment, který stojí za samostatné zkoumání, a nikoli za rozředění v celkovém průměru.

## Zdroje dat a omezení

Data o konzistenci pocházejí z vlastních protokolů událostí produktu (záznamy jídla, synchronizace aktivity, kontroly) a definice „kvalifikující interakce“ má na výslednou míru obrovský vliv – shovívavá definice (jakékoli otevření aplikace) bude vždy vypadat lépe než přísná (dokončený, smysluplný záznam), a proto je třeba k jakémukoli uváděnému údaji jasně uvést použitou definici. Automaticky synchronizovaná data (například propojený fitness tracker synchronizující aktivitu na pozadí) by se měla vykazovat odděleně od ručně zaznamenaných dat, protože automatická synchronizace může nafouknout zdánlivou konzistenci, aniž by odrážela jakékoli aktivní úsilí pacienta nebo zapojení s pokyny produktu.

## Úskalí

- **Směšování otevření aplikace se smysluplným zapojením**: pasivní otevření aplikace (například vyvolané push oznámením) není totéž co zaznamenaný záznam jídla nebo dokončená kontrola; definujte a vykazujte jen kvalifikující interakce.
- **Vykazování pouze populačního průměru**: zdravě vypadající průměrná míra konzistence může skrývat bimodální populaci vysoce zapojených a téměř zcela nezapojených pacientů; vykazujte rozdělení do pásem konzistence, nikoli jen průměr.
- **Ignorování jmenovatele délky zápisu**: porovnávání měr konzistence mezi pacienty zapsanými po velmi odlišně dlouhou dobu bez zohlednění délky zápisu zvýhodní skupinu s kratším, snáze udržitelným měřicím oknem.
- **Automatická synchronizace na pozadí nafukující míru**: pasivně synchronizovaný tok dat z nositelného zařízení může způsobit, že se nezapojený pacient jeví jako důsledně aktivní bez jakékoli skutečné změny chování či zapojení s produktem.

## Zdroje

- Recenzovaná literatura o vzorcích zapojení do digitálního zdraví a jejich vztahu ke klinickým výsledkům, například studie publikované v Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), pokyny ke kvalitě dat generovaných pacienty a měření zapojení
- Digital Therapeutics Alliance, doporučené postupy pro měření zapojení a výsledků u digitálních terapeutik

Viz také: [míra udržení uživatelů](../míra-udržení-uživatelů/), úzce související metrika toho, zda pacient zůstává zapsán vůbec, na rozdíl od toho, jak důsledně se zapojuje, dokud zapsán je.
