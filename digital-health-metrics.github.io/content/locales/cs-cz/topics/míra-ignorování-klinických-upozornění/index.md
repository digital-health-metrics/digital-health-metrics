# Míra ignorování klinických upozornění

Míra ignorování klinických upozornění (override rate) měří podíl upozornění klinické podpory rozhodování (CDS), například varování před lékovými interakcemi, upozornění na alergie a kontrol dávkovacích rozmezí generovaných systémem počítačového zadávání lékařských příkazů (CPOE), která lékař odmítne nebo přepíše, místo aby podle nich jednal. Je to standardní kvantitativní signál pro zjištění a řízení „únavy z upozornění“: dobře zdokumentovaného sklonu lékařů otupět vůči upozorněním, jakmile objem málo hodnotných varování přeroste únosnou míru.

## Proč na ní záleží

Zveřejněné míry ignorování upozornění na lékové interakce se běžně pohybují zhruba od poloviny po více než devadesát procent a vysoká míra není automaticky selháním bezpečnosti: mnohá přerušující upozornění se spouštějí kvůli interakcím, které jsou v daném kontextu klinicky nevýznamné, nebo opakují upozornění, na které lékař již reagoval dříve ve stejné sadě příkazů, takže dobře vyladěný systém záměrně spouští méně upozornění s vyšší hodnotou, místo aby se snažil snížit míru ignorování na nulu. Pro bezpečnost skutečně záleží na trendu v čase, rozložení podle úrovní závažnosti a na tom, zda lékaři při přepsání vysoce závažného upozornění zdokumentují důvod; rostoucí míra ignorování u vysoce závažných, dobře doložených interakcí je skutečným problémem řízení, i když průměr za všechna upozornění vypadá stabilně.

## Jak se počítá

```
Míra ignorování = ignorovaná upozornění / celkový počet spuštěných upozornění × 100

Členěte podle:
  - úrovně závažnosti (např. kontraindikováno, závažná, střední)
  - typu upozornění (lékové interakce, alergie, duplicitní terapie,
    dávkovací rozmezí)
  - toho, zda byl zdokumentován důvod přepsání

„Míra zdokumentovaného ignorování“ sleduje podíl přepsání, která
mají zaznamenané zdůvodnění, což je samo o sobě měřítkem řízení.
```

## Řešený příklad

Systém CPOE nemocnice spustí za měsíc 10 000 upozornění na lékové interakce, z nichž 8 700 je ignorováno, což dává celkovou míru ignorování 87 %. Členění podle závažnosti ukazuje, že z 500 upozornění „kontraindikováno“ je ignorováno 60 (12 %), zatímco ze 6 000 upozornění „střední“ je ignorováno 5 700 (95 %). Údaj za střední úroveň je zhruba v souladu se zveřejněnými srovnávacími hodnotami a sám o sobě není důvodem k obavám; údaj za úroveň kontraindikací vyžaduje přezkoumání jednotlivých případů a skutečnost, že jen 340 z 500 přepsání na této úrovni nese zdokumentovaný důvod, je akčnějším zjištěním z hlediska řízení.

## Zdroje dat a omezení

Auditní protokol elektronické zdravotní dokumentace nebo vlastní modul upozornění dodavatele CDS zaznamenává každou událost spuštění a reakce na upozornění, včetně toho, zda lékař zadal volný text nebo strukturované zdůvodnění. Porovnávání míry ignorování mezi organizacemi, nebo dokonce mezi odděleními téže organizace, vyžaduje ověření, že podkladové sady pravidel upozornění a členění závažnosti jsou stejné; nemocnice s agresivně vyladěnou sadou pravidel vykáže nižší míru ignorování z důvodů, které nemají s chováním lékařů nic společného.

## Úskalí

- **Chápání hrubé míry ignorování jako jediného bezpečnostního skóre**: slučuje dobře odůvodněná přepsání málo hodnotných upozornění s nebezpečnými přepsáními skutečně nebezpečných interakcí; vždy členěte podle závažnosti.
- **Nezaznamenávání důvodu přepsání**: bez zdokumentovaného důvodu nelze rozlišit „toto upozornění bylo chybné“ od „toto upozornění bylo správné a lékař učinil nebezpečné rozhodnutí“, což je právě to rozlišení, na kterém pro bezpečnost pacientů záleží.
- **Inflace pravidel upozornění v čase**: přidávání dalších upozornění „pro jistotu“ bez prořezávání málo hodnotných je přímou příčinou rostoucí míry ignorování a únavy z upozornění; řízení upozornění by mělo zahrnovat pravidelný přezkum a rušení nevýkonných pravidel, nikoli jen monitoring.
- **Porovnávání měr mezi systémy s odlišným návrhem přerušení**: přerušující upozornění s tvrdým zastavením vyvolává jiné chování při přepisování než pasivní, neblokující upozornění, takže obě nejsou přímo srovnatelnými metrikami.

## Zdroje

- Recenzovaná literatura o únavě z upozornění klinické podpory rozhodování, široce publikovaná v časopisech včetně JAMIA a npj Digital Medicine
- ONC / HealthIT.gov, pokyny k bezpečnosti zdravotnické informatiky týkající se klinické podpory rozhodování
- Institute for Safe Medication Practices (ISMP), pokyny k návrhu a řízení upozornění CDS
