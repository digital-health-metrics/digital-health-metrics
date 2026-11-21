# Přesnost směrování triáže

Přesnost směrování triáže je podíl kontaktů s pacienty, při nichž automatizovaný nebo umělou inteligencí podporovaný triážní nástroj správně nasměruje pacienta na vhodnou úroveň a prostředí péče – například samoléčbu, primární péči, urgentní péči nebo akutní péči – posuzovanou proti klinicky validovanému referenčnímu standardu. Je to metrika bezpečnosti a účinnosti pro každou digitální „vstupní bránu“, kontrolu příznaků nebo systém triáže s umělou inteligencí: celá hodnota nástroje spočívá v tom, že pacienty směruje správně, rychle a důsledně.

## Proč na ní záleží

Nepřesný triážní nástroj způsobuje újmu v obou směrech: podtriáž (nasměrování pacienta na nižší úroveň péče, než potřebuje) může zpozdit léčbu skutečného akutního stavu, zatímco přetriáž (nasměrování pacienta na vyšší úroveň péče, než potřebuje) plýtvá vzácnou kapacitou akutní a urgentní péče a zvyšuje náklady i úzkost pacienta bez klinického přínosu. Protože mají tyto dva způsoby selhání tak odlišné důsledky, měla by se přesnost směrování triáže vždy vykazovat spolu se směrem chyb, a nikoli jako jediný souhrnný údaj o přesnosti, který skrývá, zda nástroj chybuje bezpečně, nebo nebezpečně. Regulátoři a zdravotnické systémy hodnotící nástroj triáže s umělou inteligencí k nasazení stále častěji vyžadují takto stratifikované vykazování přesnosti jako podmínku klinického schválení, zejména u nástrojů pracujících s jakýmkoli stupněm autonomie vůči lékaři.

## Jak se počítá

```
Přesnost směrování triáže = správně nasměrované kontakty / celkový počet
                            vytříděných kontaktů × 100

Podtriáž a přetriáž vykazujte zvlášť:
  Míra podtriáže = kontakty nasměrované na nižší úroveň naléhavosti,
                   než udává referenční standard / celkový počet
                   vytříděných kontaktů × 100
  Míra přetriáže = kontakty nasměrované na vyšší úroveň naléhavosti,
                   než udává referenční standard / celkový počet
                   vytříděných kontaktů × 100

Referenčním standardem je obvykle retrospektivní posouzení téhož
případu lékařem, pokud možno zaslepené vůči výstupu nástroje.
```

## Řešený příklad

Nástroj AI pro kontrolu příznaků vytřídí za měsíc 5 000 kontaktů s pacienty. Zaslepené posouzení lékařem u náhodného vzorku 500 z těchto kontaktů zjistí, že 430 bylo nasměrováno na správnou úroveň naléhavosti (přesnost 86 %), 45 bylo podtriážováno (9 %) a 25 bylo přetriážováno (5 %). Míra podtriáže 9 % je údaj, který nejnaléhavěji vyžaduje šetření, protože představuje kontakty, u nichž mohl být pacient nasměrován na méně naléhavou péči, než skutečně potřeboval; míra přetriáže 5 % je záležitostí kapacity a nákladů, ale ne přímo bezpečnosti.

## Zdroje dat a omezení

Referenční standard, vůči kterému se přesnost triáže měří, má obrovský význam: posouzení jedním lékařem vnáší proměnlivost úsudku tohoto lékaře, takže věrohodný údaj o přesnosti obvykle vyžaduje buď více nezávislých posuzovatelů s dokumentovanou shodou mezi posuzovateli, nebo srovnání s následným potvrzeným klinickým výsledkem (jakou péči pacient skutečně potřeboval, zjištěno zpětně). Záleží i na vzorkování: posuzování pouze pohodlného vzorku kontaktů nebo jen těch označených jako neobvyklé nevytvoří údaj, který lze zobecnit na celkový výkon nástroje. Údaje o přesnosti by se měly vykazovat zvlášť podle výchozího příznaku nebo kategorie potíží, kde to objem případů dovoluje, protože triážní nástroje málokdy fungují rovnoměrně napříč všemi stavy.

## Úskalí

- **Vykazování jediného smíšeného údaje o přesnosti**: sloučení podtriáže a přetriáže do jednoho čísla skrývá, zda chyby nástroje směřují k nebezpečnějšímu způsobu selhání; vždy je vykazujte zvlášť.
- **Použití jediného nezaslepeného posuzovatele jako referenčního standardu**: může to nenápadně vychýlit údaj o přesnosti směrem k tomu, co by udělal sám posuzovatel, místo nezávislého klinického standardu.
- **Validace pouze na retrospektivních, pohodlných datech**: skutečná přesnost směrování nástroje při živém, nejednoznačném vstupu pacienta se často podstatně liší od jeho přesnosti na kurátorované validační sadě sestavené během vývoje.
- **Ignorování driftu výkonu po nasazení**: přesnost modelu triáže s AI se může v čase zhoršovat, jak se mění populace pacientů, výchozí příznaky nebo dostupnost cest péče; přesnost je třeba měřit opakovaně, a nikoli jednou validovat a předpokládat za stabilní.

## Zdroje

- ONC / HealthIT.gov, pokyny k bezpečnosti a zajištění kvality klinické podpory rozhodování a nástrojů s umělou inteligencí
- Recenzovaná literatura o přesnosti nástrojů pro kontrolu příznaků a triáže s AI, například studie publikované v JAMIA, npj Digital Medicine a BMJ Health & Care Informatics
- NHS England, pokyny ke klinické bezpečnosti nástrojů digitální triáže a vzdálených konzultací (standardy řízení klinických rizik DCB0129/DCB0160)

Viz také: [doba vyřízení digitálního doporučení](../doba-vyřízení-digitálního-doporučení/), procesní metrika nejpřímněji navazující na rozhodnutí triáže.
