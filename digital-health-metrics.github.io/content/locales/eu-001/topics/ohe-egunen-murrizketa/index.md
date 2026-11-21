# Ohe-egunen murrizketa

Ohe-egunen murrizketak neurtzen du ospitaleko barne-ohe egunen guztizko kopuru zenbat saihesten den, arreta-episodio zehatz bat (gehienetan ebakuntza ondoko errekuperazioa edo egoera akutuen kudeaketa) ohiko ospitaleratzetik alternatiba digitalki lagundu batera aldatzean, hala nola ospitale birtualera edo etxeko ospitaleratze-programara. Ospitale birtualen eta etxeko ospitaleratzearen ekimenen gaitasun-metrika nagusia da, eta arreta-eredu klinikoaren aldaketa zuzenean ospitaleen eragiketek eta sistemaren planifikatzaileek benetan kudeatzen duten moneta bihurtzen du: ohe-gaitasuna.

## Zergatik den garrantzitsua

Ospitaleratzeko ohe-gaitasuna da edozein ospitale-sistematan baliabide mugatu eta garestienetako bat, eta ospitale birtual edo etxeko ospitaleratze-programa baten balio-proposamen nagusia da maila klinikoko arreta zehatz bat segurtasunez eman daitekeela ohe fisikorik okupatu gabe, eta gaitasun hori beste inola ere kudea ezin daitezkeen pazienteentzat askatu. Ohe-egunen murrizketak sarritan abstraktua den baieztapena ("programa honek arreta hobetzen du") ospitaleko gaitasun-planifikatzaileek, finantza-taldeek eta komisionatzaileek zuzenean erabil dezaketen zenbaki operatibo konkretu bihurtzen du: monitorizazio-programa batean egindako inbertsioak saihestutako ohe-kostuetan bere burua ordaintzen duen eta zenbat ordaintzen duen eredutzeko erabil daiteke. Ohe-egunen murrizketak pazientearen segurtasuna mantentzen bada soilik duenez balioa, beti jakinarazi behar da populazio berarentzako segurtasun-emaitzaren metrika baten ondoan (adibidez, ospitaleratze berrien tasa edo ospitaleratze-arretara eskalatzeko tasa), inoiz ez haren ordez.

## Nola kalkulatzen den

```
Ohe-egunen murrizketa = ohiko ospitaleratze-arretan espero diren ohe-egunak
                        (pazienteen kohorte parekatu baten egonaldiaren
                        iraupenaren datu historikoetan oinarrituta) −
                        bide birtual/digitaleko pazienteek erabilitako
                        benetako ohe-egunak

Arreta-bide klinikoko bakoitzeko jakinarazi (adibidez, ebakuntza ondoko
errekuperazioa, arnas-larriagotze akutua), espero den egonaldiaren iraupena
asko aldatzen baita egoeraren arabera, eta elkarrekin zerikusirik ez duten
bideen arteko zifra nahastua ez baita esanguratsua.
```

## Adibide landua

Ospitale baten datu historikoek erakusten dute berariazko ebakuntza hautazko prozedura batetik errekuperatzen ari diren pazienteek batez beste 4 eguneko ospitaleratze-egonaldia dutela. Ospitale birtualeko programa batek prozedura bereko errekuperazioan dauden 150 paziente izena ematen ditu, batez beste 1,5 ospitaleratze-egunen ondoren altan emanez, eta errekuperazioaren gainerakoa urrutitik monitorizatuz. Ohe-egunen murrizketa (4 − 1,5) × 150 = 375 ohe-egun da neurketa-aldian. Zifra hau ospitale birtualeko kohorteko 150 pazienteen 30 eguneko ospitaleratze-arretara eskalatzeko tasarekin eta ospitaleratze berrien tasarekin batera jakinarazi behar da, eskalatze- edo ospitaleratze berrien tasa nabarmen altuagoaren truke lortzen den ohe-egunen aurrezkia ez baita titularreko zenbakiak iradokiko lukeen garaipen klinikoa.

## Datu-iturriak eta kontuan hartu beharrekoak

Espero diren ohe-egunek oinarri historiko sinesgarria behar dute, ahal bada ohiko ospitaleratze-arretan tratatutako kohorte parekatu batetik, ospitale birtualeko populazioaren ezaugarri kliniko antzekoekin (adina, komorbilitatea, prozedura mota, larritasuna), kudeaketa digitaleko kohortea sistematikoki osasuntsuagoa edo gaixoagoa bada alderaketa-talde historikoa baino, parekatu gabeko batez besteko historiko batekin alderatzeak benetako murrizketa gehiegi edo gutxiegi adierazteko arriskua baitu. Bide digitalean erabilitako benetako ohe-egunak ospitaleko sarrera-altaren-transferentziaren (ADT) sistematik datoz; monitorizatutako errekuperazio-aldian ospitaleratze-arretara itzulerako edozein eskalatze zintzotasunez zenbatu behar da programaren aurka (erabilitako ohe-egun gisa, ez baztertuta), eskalatzeak kalkulutik kanpo uzteak itxurazko murrizketa artifizialki puztuko bailuke.

## Hutsuneak

- **Ohe-egunen murrizketa segurtasun-konparaziorik gabe jakinaraztea**: ohe-egunak aurrezten dituen baina ohiko arretak baino eskalatze- edo ospitaleratze berrien tasa nabarmen okerragoa duen ospitale birtual batek ez du benetako hobekuntzarik frogatu; beti jakinarazi biak batera.
- **Oinarri historiko parekatu gabea edo zaharkitua erabiltzea**: kasu-nahasketa, komorbilitate-zama edo jardunbide klinikoaren aro desberdina duen kohorte historiko batekin alderatzeak ohe-egunen benetako aurrezkia nabarmen gehiegi edo gutxiegi adieraz dezake.
- **Ospitaleratze-arretara eskalatzeak kalkulutik kanpo uztea**: urrutitik monitorizatzen den baina errekuperazioaren erdian ospitaleratze-ohe batera eskalatzen den pazienteak ohe-egun horiek programaren aurka zenbatuta izan behar ditu, ez isilean analisitik kenduta.
- **Espero den egonaldiaren iraupen oso desberdina duten bideak nahastea**: elkarrekin klinikoki zerikusirik ez duten bideen arteko ohe-egunen murrizketa zifra bakarrean batzeak (adibidez, ebakuntza ondoko errekuperazioa eta arnas-gaixotasun kronikoaren kudeaketa) ezkutatzen du zein bide zehatzek eragiten duen benetan aurrezkia.

## Iturriak

- NHS England, ospitale birtualen eta etxeko ospitaleratze-programen gidalerroak eta ohe-egunen eraginaren txostenen arauak
- Etxeko ospitaleratze- eta ospitale birtual-ereduei buruzko literatura aditu-berrikusia, adibidez JAMA Internal Medicine eta npj Digital Medicine aldizkarietan argitaratutako ikerketak
- Institute for Healthcare Improvement (IHI), gaitasunaren kudeaketari eta arreta-eredu alternatiboei buruzko gidalerroak

Ikus, halaber: [ospitaleratze berrien tasa](../ospitaleratze-berrien-tasa/), ohe-egunen murrizketa-aldarrikapen oro populazio bereko pazienteentzat beti jakinarazi beharreko segurtasun-metrika.
