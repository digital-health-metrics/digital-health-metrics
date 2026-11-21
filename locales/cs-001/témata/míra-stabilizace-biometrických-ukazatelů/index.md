# Míra stabilizace biometrických ukazatelů

Míra stabilizace biometrických ukazatelů je podíl zařazených pacientů, kteří pomocí připojeného monitorovacího zařízení dosáhnou klinicky vymezeného cílového rozmezí biometrického ukazatele — nejčastěji krevního tlaku pod hranicí, jako je 130/80 mmHg — a udrží se v něm po delší dobu, nikoli jen v jediném okamžiku. Liší se od míry zlepšení biometrických ukazatelů (viz toto téma): zlepšení měří velikost změny oproti výchozímu stavu, zatímco stabilizace měří, zda je pacient po zahájení léčby či monitorování spolehlivě udržován v bezpečném rozmezí, což je výsledek nejdůležitější pro pacienty, kteří jsou již blízko cíle nebo již léčeni.

## Proč na ní záleží

U velké části pacientů v programech pro chronická onemocnění — zejména u hypertenze, kde jsou cílové hodnoty krevního tlaku podle doporučených postupů dobře stanoveny a přímo spjaty s kardiovaskulárním rizikem — není klinickým cílem jednorázové zlepšení, ale trvalá kompenzace. Pacient, který kolísá mezi cílovým rozmezím a mimo ně, představuje podstatně jiné riziko než pacient, který se jednou zlepší a zůstane. Připojená zařízení (tonometry s mobilním připojením, systémy kontinuálního monitorování glukózy) umožňují měřit stabilizaci nepřetržitě, a nikoli jen při návštěvách ambulance, a odhalit pacienty, jejichž ambulantní hodnoty vypadají kompenzovaně, ale domácí hodnoty jsou nestabilní — jev známý jako maskovaná hypertenze, který samotné občasné měření při osobní návštěvě odhalit nedokáže. Vykazování míry stabilizace namísto pouhého jednorázového snímku „v cíli" nutí program čelit tomu, jak konzistentně, a nejen jak často, udržuje pacienty v rozmezí.

## Jak se počítá

```
Míra stabilizace biometrických ukazatelů = pacienti s ≥ 80 % hodnot v cílovém
                                           rozmezí za sledované období /
                                           pacienti s minimálním počtem
                                           platných měření v tomto období × 100

Příklady hranic:
  Krevní tlak — cíl < 130/80 mmHg (nebo příslušná hranice podle klinického
                doporučeného postupu pro rizikový profil pacienta)
  Glukóza     — cílové rozmezí podle doporučení pro kontinuální monitorování
                glukózy, vykazované jako „čas v rozmezí"

Před zařazením pacienta do jmenovatele by se měla stanovit minimální
četnost měření (např. alespoň 3 měření týdně), aby pacienti s měřením
jen zřídka nevypadali uměle stabilně.
```

## Řešený příklad

Program vzdáleného monitorování hypertenze zařadí 600 pacientů s tonometry s mobilním připojením, od každého se očekávají alespoň 3 měření týdně. Z nich 540 splní minimální četnost měření za 3měsíční sledované období a je zařazeno do jmenovatele. Z těchto 540 má 350 nejméně 80 % hodnot pod 130/80 mmHg, což dává míru stabilizace biometrických ukazatelů 350 / 540 × 100 = 65 %. Šedesát pacientů vyřazených pro nedostatečný počet měření se vykazuje samostatně jako mezera v úplnosti dat, nezahrnuje se ani do čitatele, ani do skupiny „nestabilizovaných", protože jejich skutečný stav kompenzace je skutečně neznámý, nikoli špatný.

## Zdroje dat a omezení

Hodnoty pocházejí přímo z datového toku připojeného zařízení, který je objektivnější a mnohem častější než měření v ambulanci, ale chyby v umístění zařízení a technice (nesprávně velká nebo špatně umístěná manžeta tonometru) mohou zavést systematické zkreslení, které jediné validační měření v ambulanci nemusí odhalit. Volba cílového rozmezí by se měla řídit aktuálním platným klinickým doporučeným postupem pro konkrétní rizikový profil a komorbidity pacienta, a nikoli jedinou univerzální hranicí, protože cílové hodnoty v doporučených postupech se liší podle věku, funkce ledvin a kardiovaskulárního rizika. Pacient s nízkou četností měření by nikdy neměl být mlčky považován za „stabilního" jako výchozí stav; transparentní vyřazení ze jmenovatele s vykázáním tohoto vyřazení je poctivější než jeho započtení jako kompenzovaného či nekompenzovaného na základě příliš malého množství dat.

## Úskalí

- **Považování jediné hodnoty v rozmezí za stabilizaci**: stabilizace se týká trvalé kompenzace během vymezeného období, nikoli momentky; vždy požadujte minimální podíl hodnot v rozmezí za dané období, nikoli jediné splňující měření.
- **Tiché vyřazení pacientů s řídkým měřením bez vykázání**: pacienti, kteří měří jen zřídka, nejsou automaticky stabilní ani nestabilní; vyřaďte je transparentně ze jmenovatele a míru vyřazení vykazujte jako samostatnou metriku úplnosti dat.
- **Ignorování kalibrace zařízení a chyb techniky**: špatně nasazená manžeta nebo nekalibrované zařízení může hodnoty systematicky zkreslovat jedním směrem, což míra stabilizace spočtená naivně ze surových dat zařízení bez pravidelné validace nezachytí.
- **Použití jediného univerzálního cílového rozmezí pro všechny pacienty**: cíle v klinických doporučených postupech se liší podle rizikového profilu a komorbidity pacienta; plošná hranice aplikovaná na klinicky heterogenní populaci některé pacienty nesprávně zařadí mezi stabilizované či nestabilizované vzhledem k jejich skutečnému individualizovanému cíli.

## Zdroje

- American Heart Association (AHA) / American College of Cardiology (ACC), cílové hodnoty krevního tlaku v doporučených postupech a pokyny k domácímu měření krevního tlaku
- International Diabetes Federation a American Diabetes Association (ADA), konsenzuální doporučení ke „času v rozmezí" při kontinuálním monitorování glukózy
- Recenzovaná literatura o vzdáleném biometrickém monitorování a trvalé kompenzaci onemocnění, například studie publikované v npj Digital Medicine

Viz také: [míra zlepšení biometrických ukazatelů](../míra-zlepšení-biometrických-ukazatelů/), související metrika velikosti změny oproti výchozímu stavu, odlišná od trvalé kompenzace po dosažení cíle.
