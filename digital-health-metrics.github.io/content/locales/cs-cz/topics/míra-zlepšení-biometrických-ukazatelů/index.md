# Míra zlepšení biometrických ukazatelů

Míra zlepšení biometrických ukazatelů je podíl zařazených pacientů v programu digitálního zdraví, kteří v průběhu vymezeného období zařazení dosáhnou klinicky významného zlepšení sledovaného biometrického ukazatele — nejčastěji glykovaného hemoglobinu (HbA1c) v programech pro diabetes a kardiometabolická onemocnění nebo indexu tělesné hmotnosti (BMI) v programech řízení hmotnosti. Je to výsledková metrika, která nakonec ospravedlňuje klinická tvrzení digitálního zdravotnického produktu: čísla o zapojení a využívání popisují, jak se produkt používá, ale biometrické zlepšení je blíže důkazu, že funguje.

## Proč na ní záleží

Programy digitálního zdraví se často prodávají a zadávají na základě příslibu lepších zdravotních výsledků a míra zlepšení biometrických ukazatelů je nejpřímějším a kvantifikovatelným způsobem, jak tento příslib ověřit vůči konkrétní, klinicky uznávané hranici místo vágního tvrzení o „lepším zdraví". Plátci, zaměstnavatelé a zdravotnické systémy stále častěji vážou úhradu nebo prodloužení smlouvy na prokázanou biometrickou změnu, takže program, který tuto míru nedokáže věrohodně vykázat, je v nevýhodě komerční i klinické. Metrika je také kontrolou disciplíny při návrhu programu: vykazovat zapojení (přihlášení, odeslané zprávy) je mnohem snazší než výsledky a tým by měl být podezřívavý k programu, který o prvním nadšeně referuje a o druhém mluví vágně.

## Jak se počítá

```
Míra zlepšení biometrických ukazatelů = pacienti, kteří dosáhli vymezeného
                                        klinicky významného zlepšení /
                                        pacienti s platným výchozím a
                                        následným měřením × 100

Běžné klinicky významné hranice:
  HbA1c   — pokles o ≥ 0,5 procentního bodu, nebo dosažení vymezeného
            cíle (např. < 7,0 %) z výchozí hodnoty mimo rozmezí
  BMI     — pokles o ≥ 5 % výchozí tělesné hmotnosti, udržený až do
            časového bodu následného měření

Vykazujte zvlášť pro každý sledovaný biometrický ukazatel; nikdy
nesměšujte zlepšení HbA1c a BMI do jednoho souhrnného procenta „zlepšení".
```

## Řešený příklad

Kardiometabolický program digitálního zdraví zařadí 800 pacientů s výchozím HbA1c mimo rozmezí. Z nich má 620 platné výchozí i následné měření po 6 měsících (180 je ztraceno z dalšího sledování a je vyřazeno ze jmenovatele, nepočítá se jako selhání). Z 620 s párovými měřeními dosáhne poklesu nejméně o 0,5 procentního bodu 340. Míra zlepšení biometrických ukazatelů je 340 / 620 × 100 = 55 %. Vykázání vůči všem 800 zařazeným (340 / 800 = 42,5 %) by směšovalo ztrátu z dalšího sledování se selháním léčby a podhodnotilo by míru u pacientů, kteří měření skutečně dokončili.

## Zdroje dat a omezení

Výchozí a následné biometrické hodnoty obvykle pocházejí z připojeného zařízení (glukometr nebo chytrá váha s Bluetooth), z laboratorního výsledku importovaného z elektronické zdravotní dokumentace, nebo z hodnoty, kterou zadal sám pacient — a tyto tři zdroje mají velmi odlišnou spolehlivost, proto by se zdroj měl uvádět spolu s mírou. Ztráta z dalšího sledování je zřídka náhodná: pacienti, kteří se programu přestanou věnovat, jsou často také těmi, u nichž je nejméně pravděpodobné zlepšení, takže vysoká míra zlepšení vypočtená pouze z pacientů, kteří následné sledování dokončili, může skutečný účinek programu na úrovni populace nadhodnotit. Sezónní efekty a regrese k průměru jsou reálné jak u HbA1c, tak u hmotnosti, proto by program měl pokud možno srovnávat s paralelní nebo historickou kontrolní skupinou, a nepovažovat jakékoli zlepšení za důkaz účinku programu.

## Úskalí

- **Vyřazení ztracených z dalšího sledování místo jejich vykázání**: tiché vypuštění pacientů bez následného měření ze jmenovatele může zdánlivou míru zlepšení podstatně nadhodnotit; vždy uvádějte spolu s mírou zlepšení také míru dokončení následného měření.
- **Míšení měření zadaných pacientem a měření ze zařízení bez označení**: hmotnost zadaná pacientem je systematicky méně spolehlivá než údaj z připojené chytré váhy a smíšení obou zdrojů zakrývá, jak velká část zdánlivého zlepšení je měřicí šum.
- **Žádná kontrola ani kontrafaktuál**: mnohé chronické biometrické ukazatele samy kolísají nebo se vracejí k průměru; míra zlepšení v jedné větvi bez srovnávací skupiny je nápověda, nikoli přesvědčivý důkaz účinku programu.
- **Pokládání skromného průměrného posunu za důkaz širokého zlepšení**: malé průměrné zlepšení na úrovni populace může být tažené několika málo výraznými respondéry, zatímco většina pacientů nezaznamená žádnou změnu; vykazujte rozložení (např. podíl překračující klinicky významnou hranici), nikoli jen průměrný posun.

## Zdroje

- American Diabetes Association (ADA), Standards of Care in Diabetes, pokyny k cílovým hodnotám HbA1c a klinicky významné změně
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, pokyny k hodnocení programů
- Recenzovaná literatura o výsledcích digitálních programů pro diabetes a řízení hmotnosti, například studie publikované v npj Digital Medicine a Diabetes Care

Viz také: [míra adherence k léčbě](../míra-adherence-k-léčbě/), častý předchozí faktor biometrického zlepšení v programech pro chronická onemocnění.
