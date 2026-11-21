# ISO/TS 82304-2

ISO/TS 82304-2 je mezinárodní technická specifikace vydaná technickou komisí ISO TC 215 (Zdravotnická informatika), která definuje strukturovanou metodu hodnocení kvality zdravotních a wellness aplikací – zahrnující použitelnost, technickou odolnost a spolehlivost, interoperabilitu, kvalitu obsahu a zabezpečení a ochranu soukromí – u produktů, které spadají mimo rozsah plné regulace zdravotnických prostředků, ale přesto podstatně ovlivňují zdravotní rozhodování nebo chování uživatele. Vznikla, aby vyplnila konkrétní mezeru: naprostá většina spotřebitelských zdravotních a wellness aplikací (fitness náramky, deníky příznaků, aplikace pro wellness koučink) se nereguluje jako zdravotnické prostředky, přesto dříve neexistoval společný strukturovaný způsob, jak hodnotit nebo porovnávat jejich základní kvalitu a bezpečnost.

## Proč na ní záleží

Obchody s aplikacemi nabízejí statisíce zdravotních a wellness aplikací s enormně proměnlivou kvalitou. Dokud neexistovala společná technická specifikace, neměl pacient, lékař ani zdravotnický systém strukturovaný a srovnatelný způsob, jak posoudit základní kvalitu a bezpečnost jedné aplikace oproti jiné, kromě hodnocení hvězdičkami a marketingových tvrzení. To je podstatné, protože špatně navržená zdravotní aplikace může způsobit skutečnou újmu (nepřesný obsah, slabé zabezpečení dat, zavádějící tvrzení), i když nedosahuje regulačního prahu zdravotnického prostředku. ISO/TS 82304-2 je záměrně strukturována kolem oblastí, které může nespecialista posuzovat konzistentně, což z ní učinilo technický základ několika národních i komerčních služeb označování kvality a kurátorování zdravotních aplikací. Zdravotnickým systémům a knihovnám aplikací tak poskytuje obhajitelný standardizovaný způsob, jak aplikace zařadit do doporučeného seznamu nebo z něj vyloučit, namísto ad hoc úsudku.

## Jak se používá

```
Hodnocení je uspořádáno kolem definovaných oblastí kvality
a provádí se strukturovanou revizí, nikoli jediným číselným vzorcem:

Použitelnost                    — srozumitelnost, přístupnost a snadnost
                                  používání pro zamýšlenou skupinu uživatelů
Technická odolnost/spolehlivost — stabilita, výkon a absence technických
                                  vad
Interoperabilita                — schopnost vyměňovat si data s dalšími
                                  systémy, pokud je to pro funkci aplikace
                                  relevantní
Kvalita a bezpečnost obsahu     — přesnost, aktuálnost a absence
                                  škodlivých či zavádějících zdravotních
                                  tvrzení
Zabezpečení a soukromí          — praxe ochrany dat a transparentnost
                                  ohledně využití dat

Každá oblast se hodnotí podle strukturovaných revizních kritérií
a výsledky se spojují do celkového hodnocení kvality, které několik
schémat označování kvality zdravotních aplikací používá jako technický
základ veřejné známky kvality nebo rozhodnutí o zařazení do kurátorované
knihovny.
```

## Řešený příklad

Program knihovny digitálních aplikací zdravotnického systému chce pro pacienty vytvořit doporučený seznam wellness aplikací, místo aby výběr aplikací zcela ponechal na vyhledávání v obchodě s aplikacemi. Každá kandidátní aplikace se hodnotí podle oblastí ISO/TS 82304-2: aplikace pro sledování spánku dosáhne dobrého skóre v použitelnosti a technické odolnosti, přiměřeného v kvalitě obsahu, ale při revizi zabezpečení a soukromí se označí za sdílení uživatelských dat s inzerenty třetích stran bez jasného upozornění. Toto zjištění je dost závažné na to, aby aplikaci vyloučilo z doporučeného seznamu navzdory jinak vysokému skóre použitelnosti. Výsledek po jednotlivých oblastech je pro kurátorský tým i (pokud je sdílen) pro vývojáře samotné aplikace použitelnější než jediné smíšené skóre kvality, protože přesně určuje, který aspekt je třeba napravit, než bude možné aplikaci znovu zvážit.

## Zdroje dat a omezení

Hodnocení podle ISO/TS 82304-2 obvykle provádí vyškolený hodnotitel nebo akreditovaná hodnoticí služba podle strukturovaných revizních kritérií specifikace pro každou oblast. Několik národních i komerčních iniciativ (organizace pro označování kvality a kurátorování zdravotních aplikací, některé působící pod formálním schválením národního zdravotnického systému) používá tuto normu jako technický základ vlastních veřejných známek kvality aplikací. Stav „certifikováno“ nebo „označeno“ u aplikace tedy v praxi často odráží implementaci normy konkrétním schématem označování, nikoli nutně totožný proces ve všech schématech, a proto je třeba ke každé uváděné známce kvality ověřit a uvést hodnotící organizaci a její metodiku. Specifikace hodnotí kvalitu a základní bezpečnostní vlastnosti aplikace jako softwaru; nenahrazuje regulační schválení zdravotnického prostředku tam, kde tvrzení nebo funkce aplikace práh zdravotnického prostředku skutečně splňují, a její použití jako náhrady by byla kategoriální chyba.

## Úskalí

- **Pokládání známky kvality za regulační schválení**: aplikace posouzená a označená podle ISO/TS 82304-2 tím nezískala regulační schválení zdravotnického prostředku; obojí slouží odlišným účelům a nikdy by se nemělo zaměňovat při popisu či marketingu aplikace.
- **Předpoklad, že všechna schémata označování založená na normě jsou rovnocenná**: různé organizace provádějí hodnocení založené na ISO/TS 82304-2 s vlastními revizními postupy a mírou důkladnosti; ověřte, která organizace hodnocení provedla a jak, místo abyste jakoukoli známku „založenou na ISO/TS 82304-2“ pokládali za zaměnitelnou s jinou.
- **Posuzování pouze použitelnosti při zanedbání zabezpečení a soukromí**: problémy s použitelností jsou pro koncového uživatele nejviditelnější a nejsnáze se hodnotí neformálně, což může vést hodnotitele k podhodnocení méně viditelné, ale potenciálně závažnější oblasti zabezpečení a soukromí.
- **Chápání hodnocení jako jednorázové, trvalé certifikace**: obsah aplikace, bezpečnostní praxe i ujednání o sdílení dat třetím stranám se po úvodním hodnocení mohou změnit; důvěryhodný program označování kvality hodnotí opakovaně, a nepovažuje úvodní úspěšné posouzení za trvalé.

## Zdroje

- International Organization for Standardization, ISO/TS 82304-2:2021, „Health software — Part 2: Health and wellness apps — Quality and reliability“
- ISO Technical Committee 215 (Health Informatics), informace o publikacích a pracovních skupinách
- Národní a komerční organizace pro označování kvality a kurátorování zdravotních aplikací, které zveřejňují svou hodnoticí metodiku založenou na této normě

Viz také: [skóre System Usability Scale](../skóre-system-usability-scale/), doplňkový, užší nástroj zaměřený na použitelnost, který se často používá spolu s širším hodnocením kvality podle ISO/TS 82304-2.
