# Míra vyplnění ePROM

Míra vyplnění ePROM měří podíl plánovaných elektronických měřítek výsledků hlášených pacientem (ePROM) – standardizovaných, validovaných dotazníků zachycujících vlastní popis pacienta o jeho příznacích, funkci či kvalitě života, doručovaných digitálně namísto na papíře – které jsou skutečně vyplněny. Je to stejně tolik metrika kvality dat jako zapojení: klinická i výzkumná hodnota programu PROM zcela závisí na dostatečně vysoké míře vyplnění, aby shromážděné odpovědi byly reprezentativní pro celou zapsanou populaci, a nikoli jen pro nejvíce zapojenou či nejméně symptomatickou podmnožinu.

## Proč na ní záleží

Výsledky hlášené pacientem jsou přímým, pacientem potvrzeným doplňkem dat zaznamenaných lékařem nebo měřených zařízením, zachycují dimenze zdraví – bolest, funkci, kvalitu života –, které přezkum dokumentace ani biometrické měření nezachytí; digitalizace sběru PROM existuje právě proto, aby tato data bylo možné shromažďovat ve velkém levněji a snáze, než kdy umožňovalo papírové podávání. Program PROM s nízkou mírou vyplnění však riskuje specifické a vážné zkreslení: pacienti, kterým je hůř, jsou často méně ochotni vyplnit dlouhý dotazník, takže klesající míra vyplnění může být sama o sobě časným varovným signálem zhoršujícího se zdraví populace a nízká celková míra vyplnění může způsobit, že shromážděné odpovědi vypadají lépe než skutečná zkušenost populace, jednoduše proto, že nejvíce symptomatičtí pacienti jsou mezi vyplněnými nedostatečně zastoupeni. Proto by se míra vyplnění měla vždy vykazovat spolu se samotnými skóre PROM a nikoli ji považovat za druhotný provozní detail.

## Jak se počítá

```
Míra vyplnění ePROM = plně vyplněné ePROM / odeslané nebo plánované ePROM × 100

Vykazujte zvlášť pro:
  Počáteční míru vyplnění       (první dotazník v monitorovací sekvenci)
  Longitudinální míru vyplnění  (následné dotazníky v probíhající
                                 monitorovací sekvenci, která se obvykle
                                 v čase snižuje a měla by se sledovat
                                 jako trend, nikoli jako jediný údaj)

„Částečně vyplněný“ dotazník je třeba definovat a vykazovat zvlášť
od „plně vyplněného“ i „nezahájeného“.
```

## Řešený příklad

Onkologická klinika odešle validovaný ePROM zátěže příznaky 400 pacientům před každou měsíční kontrolní návštěvou. V prvním měsíci plně vyplní dotazník 340 pacientů (míra vyplnění 85 %), 30 jej vyplní částečně a 30 jej nezahájí. V šestém měsíci téže monitorovací sekvence klesnou úplné odpovědi na 260 ze stejné 400členné kohorty (65 %), což je významný longitudinální pokles, který by zcela unikl, kdyby se jako statická celková metrika vykazoval pouze údaj 85 % z prvního měsíce. Zkoumání, kteří pacienti vypadávají (podle závažnosti příznaků, stadia onemocnění či věku), může odhalit, zda pokles odráží únavu z dotazování, zhoršující se příznaky, které vyplnění dotazníku ztěžují, nebo technickou bariéru přístupu.

## Zdroje dat a omezení

Data o vyplnění pocházejí z vlastních protokolů doručení a odpovědí platformy ePROM, které dokážou rozlišit stavy „nezahájeno“, „částečně vyplněno“ a „plně vyplněno“ – rozlišení, které by se mělo vždy zachovat a vykazovat, nikoli sloučit do binárního údaje vyplněno/nevyplněno, protože částečné vyplnění často ukazuje na konkrétní místo v dotazníku, kde pacienti narážejí na potíže nebo ztrácejí zájem. Míru vyplnění je třeba interpretovat spolu se způsobem doručení dotazníku (odkaz v textové zprávě, oznámení v aplikaci nebo způsob vyžadující přihlášení do portálu), protože tření při doručení samo ovlivňuje vyplnění nezávisle na obsahu dotazníku či základním stavu pacienta. Pro samotné PROM by se měl vždy použít validovaný nástroj (a nikoli ad hoc sada otázek), protože míra vyplnění nevalidovaného nástroje neříká nic spolehlivého o klinické užitečnosti výsledných dat, i když je vyplnění vysoké.

## Úskalí

- **Chápání klesající míry vyplnění pouze jako problému doručení**: longitudinální pokles vyplnění může odrážet skutečně zhoršující se příznaky pacientů (příliš nemocných na vyplnění dotazníku), nikoli únavu z dotazování nebo technický problém, a toto rozlišení má pro klinickou interpretaci obrovský význam.
- **Sloučení částečného a plného vyplnění do jedné kategorie**: částečně vyplněný dotazník je z hlediska kvality dat významně odlišný od plně vyplněného; vykazujte je zvlášť a zkoumejte, kde v průběhu dotazníku jej pacienti obvykle opouštějí.
- **Vykazování míry vyplnění bez uvedení rizika zkreslení odpovědí**: střední míra vyplnění by měla vést ke zkoumání, zda se odpovídající systematicky liší (závažností příznaků, věkem, digitální gramotností) od neodpovídajících, protože skóre PROM vypočtená jen z odpovídajících mohou zkreslit obraz celé populace.
- **Používání nevalidovaného nebo domácího dotazníku**: míra vyplnění je jako signál kvality dat bezvýznamná, pokud vyplňovaný nástroj sám nebyl klinicky validován pro měřené onemocnění a populaci.

## Zdroje

- International Consortium for Health Outcomes Measurement (ICHOM), vývoj standardních sad a pokyny k zavádění PROM
- U.S. Food and Drug Administration (FDA), pokyny k měřítkům výsledků hlášeným pacientem v klinických studiích a regulačních podáních
- Recenzovaná literatura o zavádění elektronických PROM a míře vyplnění, například studie publikované v Quality of Life Research a Journal of Medical Internet Research (JMIR)

Viz také: [net promoter score pacientů](../net-promoter-score-pacientů/), související, ale odlišná metrika hlášená pacientem, která měří spokojenost, nikoli klinický výsledek.
