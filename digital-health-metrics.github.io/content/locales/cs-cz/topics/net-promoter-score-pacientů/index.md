# Net Promoter Score pacientů

Net Promoter Score (NPS) pacientů měří ochotu pacientů doporučit produkt digitálního zdraví nebo telemedicínskou službu dalším lidem na základě jediné otázky průzkumu – „Jak pravděpodobné je, že tuto službu doporučíte příteli nebo kolegovi?“ – hodnocené 0 až 10. Respondenti hodnotící 9–10 jsou „promotéři“, 7–8 „pasivní“ a 0–6 „kritici“ (detractors); NPS je procento promotérů minus procento kritiků. Je to nejpoužívanější, a zároveň nejkritizovanější metrika spokojenosti pacientů v digitálním zdraví, cenná pro svou jednoduchost, ale omezená v tom, co sama o sobě dokáže diagnostikovat.

## Proč na ní záleží

NPS poskytuje týmům digitálního zdraví jednoduchý, standardizovaný a vzájemně srovnatelný signál spokojenosti, který je levné sbírat a snadno pochopitelný na první pohled i pro nespecialisty (vedení, správní rady, zadavatele), a proto zůstává oblíbený navzdory dobře zdokumentovaným metodologickým omezením. U telemedicíny a digitálních „vstupních bran“ je NPS často předstihovým ukazatelem toho, zda pacienti budou digitální kanál nadále volit místo osobní alternativy, jsou-li k dispozici obě, což má přímé důsledky pro plánování skladby kanálů a kapacit. NPS je však jediné, souhrnné číslo na vysoké úrovni: klesající NPS týmu říká, že je něco špatně, ale ne co, takže by se měl vždy spojit s volnotextovou zpětnou vazbou nebo podrobnějším nástrojem použitelnosti, aby byl využitelný k jednání a nebyl pouhým číslem ve skóre kartě.

## Jak se počítá

```
NPS = % promotérů (skóre 9–10) − % kritiků (skóre 0–6)

Výsledkem je číslo od −100 do +100, nikoli procento, přestože je
odvozeno z procent – k údaji NPS nikdy nepřipisujte znak „%“.

Vykazujte spolu s:
  mírou odpovědí (% oslovených pacientů, kteří odpověděli)
  velikostí vzorku
  přesným zněním použité otázky
```

## Řešený příklad

Telemedicínská platforma osloví po video konzultaci 1 000 pacientů a obdrží 400 odpovědí (míra odpovědí 40 %). Z těchto 400 respondentů 220 hodnotí 9–10 (promotéři, 55 %), 100 hodnotí 7–8 (pasivní, 25 %) a 80 hodnotí 0–6 (kritici, 20 %). NPS je 55 − 20 = 35. Tento údaj má smysl jen v kontextu: NPS 35 může být silný výsledek ve srovnání s celým odvětvím telemedicíny, nebo znepokojivý pokles oproti vlastnímu skóre téže platformy 48 v předchozím čtvrtletí – NPS je mnohem užitečnější jako trend v čase u jednoho produktu než jako absolutní jednorázové srovnání s jiným.

## Zdroje dat a omezení

NPS se sbírá prostřednictvím průzkumu po interakci, obvykle spouštěného bezprostředně po video návštěvě, relaci v aplikaci nebo epizodě péče, a míra odpovědí má obrovský význam: nízká míra odpovědí (hluboko pod zhruba 40 % z řešeného příkladu) riskuje zkreslení z neodpovědi, kdy odpovídají jen silně spokojení nebo silně nespokojení pacienti, což táhne skóre ke krajnostem a pryč od skutečného postoje populace. Porovnávání NPS mezi organizacemi, nebo dokonce mezi různými kanály jedné organizace (například telemedicína versus osobní návštěva), je platné pouze tehdy, jsou-li znění otázky, načasování a populace průzkumu skutečně srovnatelné; je známo, že i malé změny formulace měřitelně posouvají skóre. NPS je třeba chápat jako výsledek, který je třeba vysvětlit, nikoli jako cíl sám o sobě – volnotextové komentáře, které obvykle doprovázejí průzkum NPS, jsou většinou použitelnější než samotné skóre.

## Úskalí

- **Porovnávání údajů NPS sebraných s odlišným zněním otázky či načasováním**: i drobné rozdíly v návrhu průzkumu mohou posunout skóre o několik bodů, což činí srovnávání NPS mezi organizacemi mnohem méně spolehlivým, než se zdá.
- **Ignorování míry odpovědí**: hlavní NPS vypočtené z 10% míry odpovědí je mnohem méně důvěryhodné než z 60% míry, protože nízké míry odpovědí jsou náchylné ke zkreslení z neodpovědi ve prospěch nejextrémnějších názorů.
- **Chápání NPS jako diagnostického nástroje místo souhrnné metriky**: klesající NPS říká, že je něco špatně, ale nikdy co; vždy by se měl spojit s kvalitativní zpětnou vazbou nebo podrobnějším nástrojem spokojenosti či použitelnosti, aby se zjistila příčina.
- **Honba za NPS jako cílem samým o sobě**: úzká optimalizace čísla NPS (například oslovováním pacientů jen po mimořádně pozitivních interakcích) může zlepšit vykázané skóre, aniž by se skutečná zkušenost pacientů zlepšila, nebo dokonce se zhoršila.

## Zdroje

- Bain & Company, původní metodika Net Promoter System a pokyny k srovnávání
- Agency for Healthcare Research and Quality (AHRQ), program průzkumů zkušenosti pacientů CAHPS (Consumer Assessment of Healthcare Providers and Systems) jako doplňková, podrobnější alternativa
- Recenzovaná literatura o využití a omezeních Net Promoter Score v prostředí zdravotní péče, například studie publikované v Journal of Medical Internet Research (JMIR)

Viz také: [míra udržení uživatelů](../míra-udržení-uživatelů/), protože spokojenost hlášená pacienty a skutečné trvalé používání produktu se často rozcházejí a stojí za sledování jako samostatné signály.
