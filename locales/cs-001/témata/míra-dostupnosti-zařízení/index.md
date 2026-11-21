# Míra dostupnosti zařízení

Míra dostupnosti zařízení (uptime) měří podíl plánovaného monitorovacího času, po který je připojené zdravotní zařízení – senzor pro vzdálený monitoring pacientů, nositelné zařízení nebo domácí telemedicínská jednotka – skutečně online, přenáší data a funguje správně, nikoli offline, odpojené či porouchané. Je to základní infrastrukturní metrika pod každým programem vzdáleného monitoringu či připojených zařízení: klinické upozornění, biometrický trend nebo údaj o zapojení vypočtený ze zařízení, které bylo často offline, je jen tak spolehlivý jako připojení, které za ním stojí.

## Proč na ní záleží

Celá klinická hodnota programu vzdáleného monitoringu pacientů závisí na nepřetržitém či téměř nepřetržitém sběru dat; zařízení se špatnou dostupností vytváří tiché mezery v klinickém obrazu pacienta, které lze zaměnit za stabilitu (žádné upozornění, protože nejsou data, nikoli protože se nic nezměnilo), místo aby byly správně rozpoznány jako selhání monitoringu. Dostupnost zařízení je také předstihovým ukazatelem nákladů programu a zkušenosti pacientů: zařízení, které často ztrácí spojení, generuje telefonáty na podporu, frustraci pacientů a potenciálně zbytečné klinické oslovování pacientů, aby se ověřilo, zda mezera v datech odráží skutečnou klinickou událost, nebo pouhou technickou závadu. Protože výpadky dostupnosti zařízení lze často přičíst infrastruktuře, kterou organizace ovládá (špatně nakonfigurovaná mobilní brána, slabé pokrytí Wi-Fi v domácnosti pacienta, nedostatečně udržovaná flotila zařízení), a nikoli pacientovi, patří tato metrika přímo dodavateli a technickému provoznímu týmu a neměla by se bezhlavě slévat s metrikami zapojení pacientů.

## Jak se počítá

```
Míra dostupnosti zařízení = čas, kdy bylo zařízení online a přenášelo
                            platná data / celkový plánovaný čas
                            monitoringu × 100

Příčiny výpadků členěte, kde to data dovolují:
  Závada na straně zařízení  (baterie, hardwarová porucha, pád firmwaru)
  Selhání připojení          (výpadek mobilní sítě/Wi-Fi/VPN)
  Faktory na straně pacienta (zařízení vypnuto, přesunuto mimo dosah)

Podpůrné technické parametry sledované vedle dostupnosti:
  Průměrné využití CPU, využití paměti a stav baterie na zařízení
  Střední doba mezi selháními připojení
  Střední doba opětovného připojení po výpadku
```

## Řešený příklad

Program vzdáleného kardiologického monitoringu nasazuje 1 000 připojených zařízení, od nichž se očekává nepřetržitý přenos. Za 30denní měsíc (720 plánovaných monitorovacích hodin na zařízení) zaznamená flotila celkem 705 600 skutečných online hodin oproti plánovaným 720 000 hodinám, což dává celoflotilovou míru dostupnosti 705 600 / 720 000 × 100 = 98 %. Rozbor příčin 14 400 hodin výpadku ukazuje, že 60 % lze přičíst výpadkům mobilního připojení soustředěným v konkrétním venkovském regionu, 25 % zařízením se stárnoucími bateriemi označenými k výměně a 15 % pacientům, kteří zařízení dočasně vypnuli. Toto členění ukazuje na dva jasné, odlišné zásahy – opravu připojení v dotčeném regionu a proaktivní program výměny baterií – které by jediný souhrnný údaj o dostupnosti nerozlišil.

## Zdroje dat a omezení

Data o dostupnosti pocházejí ze systému správy zařízení a telemetrie výrobce nebo dodavatele platformy, který zaznamenává události připojení a „heartbeat“ pro každé zařízení. Organizace by měla potvrdit, co přesně dodavatel počítá jako „online“ (zařízení může hlásit připojení k síti, a přesto nepřenášet platná klinická data, což by se pro klinické účely mělo počítat jako výpadek, i když dashboard dodavatele uvádí zařízení jako připojené). Dostupnost by se měla vykazovat po kohortách zařízení nebo geografických oblastech, kde to objem dovoluje, protože kvalita připojení je často geograficky seskupená (mobilní pokrytí na venkově, Wi-Fi ve starších budovách), a nikoli rovnoměrně rozložená v populaci pacientů, a souhrnný údaj za celou flotilu může zakrýt závažný a řešitelný regionální problém.

## Úskalí

- **Směšování síťového připojení s přenosem platných dat**: zařízení se může na dashboardu dodavatele jevit jako „připojené“, a přesto nepřenášet použitelná klinická data; dostupnost definujte a měřte podle skutečného příjmu platných dat, nikoli jen podle samotného síťového připojení.
- **Vykazování pouze celoflotilového průměru**: ten může skrýt závažný problém s výpadky specifický pro geografickou oblast či kohortu zařízení, který by cílený průměr odhalil a který má konkrétní řešitelnou nápravu.
- **Nerozlišování příčin výpadků**: výpadky na straně zařízení, připojení a pacienta vyžadují zcela odlišný zásah; jediné procento výpadků bez členění příčin nelze využít k jednání.
- **Chápání mezery v datech jako klinické stability ve výchozím stavu**: chybějící datový tok z offline zařízení by měl vyvolat kontrolu technického připojení, a nikoli být tiše vykládán jako „žádné zprávy jsou dobré zprávy“ o klinickém stavu pacienta.

## Zdroje

- Continua Design Guidelines / Personal Connected Health Alliance, technické standardy interoperability připojených zdravotnických zařízení
- ONC / HealthIT.gov, pokyny k zavádění programů vzdáleného monitoringu pacientů a technickým požadavkům
- Recenzovaná literatura o spolehlivosti zařízení pro vzdálený monitoring pacientů a úplnosti dat, například studie publikované v npj Digital Medicine

Viz také: [přesnost směrování triáže](../přesnost-směrování-triáže/), která závisí na přijímání úplných a spolehlivých dat ze zařízení, aby bylo vůbec možné učinit správné rozhodnutí triáže.
