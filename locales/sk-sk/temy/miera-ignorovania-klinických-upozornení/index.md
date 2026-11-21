# Miera ignorovania klinických upozornení

Miera ignorovania klinických upozornení meria podiel upozornení klinickej podpory rozhodovania (CDS), ako sú varovania pred liekovými interakciami, upozornenia na alergie a kontroly rozsahu dávok generované systémom počítačového zadávania lekárskych príkazov (CPOE), ktoré klinický pracovník zruší alebo ignoruje, namiesto aby podľa nich konal. Je to štandardný kvantitatívny signál na zisťovanie a riadenie „únavy z upozornení“: dobre zdokumentovanej tendencie klinických pracovníkov otupieť voči upozorneniam, keď objem málo hodnotných varovaní začne byť ohromujúci.

## Prečo je dôležitá

Publikované miery ignorovania upozornení na liekové interakcie sa bežne pohybujú zhruba od polovice po viac než deväťdesiat percent a vysoká miera nie je automaticky zlyhaním bezpečnosti: mnohé prerušujúce upozornenia sa zobrazujú pri interakciách, ktoré sú v danom kontexte klinicky nevýznamné, alebo opakujú upozornenie, na ktoré klinický pracovník už skôr v tom istom súbore príkazov zareagoval, a dobre vyladený systém preto zámerne zobrazuje menej upozornení s vyššou hodnotou, a nesnaží sa dostať mieru ignorovania na nulu. Z hľadiska bezpečnosti skutočne záleží na trende v čase, rozdelení podľa úrovní závažnosti a na tom, či klinickí pracovníci pri ignorovaní upozornenia s vysokou závažnosťou zdokumentujú dôvod; rastúca miera ignorovania pri závažných, dobre podložených interakciách je skutočným problémom riadenia aj vtedy, keď priemer za všetky upozornenia vyzerá stabilne.

## Ako sa počíta

```
Miera ignorovania = ignorované upozornenia / všetky zobrazené upozornenia × 100

Členenie podľa:
  - úrovne závažnosti (napr. kontraindikované, závažné, stredné)
  - typu upozornenia (liekové interakcie, alergia, duplicitná liečba,
    rozsah dávky)
  - toho, či bol zdokumentovaný dôvod ignorovania

„Miera zdokumentovaného ignorovania“ sleduje podiel ignorovaných
upozornení so zaznamenaným zdôvodnením, čo je samo osebe miera
riadenia.
```

## Prepracovaný príklad

Systém CPOE nemocnice zobrazí za mesiac 10 000 upozornení na liekové interakcie, z ktorých je 8 700 ignorovaných, čo dáva celkovú mieru ignorovania 87 %. Členenie podľa závažnosti ukazuje, že z 500 upozornení „kontraindikované“ je ignorovaných 60 (12 %), zatiaľ čo zo 6 000 upozornení „stredné“ je ignorovaných 5 700 (95 %). Údaj pre strednú úroveň je vcelku v súlade s publikovanými referenčnými hodnotami a sám o sebe nie je dôvodom na obavy; údaj pre kontraindikovanú úroveň si zaslúži posúdenie jednotlivých prípadov a to, že len 340 z 500 ignorovaní na tejto úrovni má zdokumentovaný dôvod, je zistenie z oblasti riadenia, s ktorým sa dá lepšie pracovať.

## Zdroje údajov a výhrady

Auditný záznam elektronickej zdravotnej dokumentácie alebo vlastný modul upozornení dodávateľa CDS zaznamenáva každú udalosť zobrazenia upozornenia a reakcie naň vrátane toho, či klinický pracovník zadal voľný text alebo štruktúrované zdôvodnenie. Porovnávanie mier ignorovania medzi organizáciami, ba aj medzi oddeleniami tej istej organizácie, vyžaduje overiť, že podkladové súbory pravidiel upozornení a členenie závažnosti sú rovnaké; nemocnica s agresívne vyladeným súborom pravidiel vykáže nižšiu mieru ignorovania z dôvodov, ktoré nemajú nič spoločné so správaním klinických pracovníkov.

## Nástrahy

- **Považovanie hrubej miery ignorovania za jediné bezpečnostné skóre**: zamieňa dobre odôvodnené ignorovanie málo hodnotných upozornení s nebezpečným ignorovaním skutočne nebezpečných interakcií; vždy člente podľa závažnosti.
- **Nezaznamenávanie dôvodu ignorovania**: bez zdokumentovaného dôvodu nemožno rozlíšiť „toto upozornenie bolo nesprávne“ od „toto upozornenie bolo správne a klinický pracovník urobil nebezpečný úsudok“, a práve to je rozdiel, na ktorom skutočne záleží z hľadiska bezpečnosti pacienta.
- **Inflácia pravidiel upozornení v čase**: pridávanie ďalších upozornení „pre istotu“ bez odstraňovania málo hodnotných je priamou príčinou rastúcej miery ignorovania a únavy z upozornení; riadenie upozornení by malo zahŕňať pravidelné preskúmavanie a vyraďovanie slabo fungujúcich pravidiel, nielen monitorovanie.
- **Porovnávanie mier medzi systémami s odlišným dizajnom prerušenia**: prerušujúce upozornenie so striktným zastavením vyvoláva odlišné správanie pri ignorovaní než pasívne neblokujúce upozornenie, a obe preto nie sú priamo porovnateľné metriky.

## Zdroje

- Recenzovaná literatúra o únave z upozornení v klinickej podpore rozhodovania, široko publikovaná v časopisoch vrátane JAMIA a npj Digital Medicine
- ONC / HealthIT.gov, usmernenia k bezpečnosti zdravotníckej IT v oblasti klinickej podpory rozhodovania
- Institute for Safe Medication Practices (ISMP), usmernenia k dizajnu a riadeniu upozornení CDS
