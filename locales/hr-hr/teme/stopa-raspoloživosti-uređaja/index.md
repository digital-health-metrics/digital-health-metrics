# Stopa raspoloživosti uređaja

Stopa raspoloživosti uređaja mjeri udio planiranog vremena praćenja u kojem je povezani zdravstveni uređaj — senzor za praćenje pacijenata na daljinu, nosivi uređaj ili kućna telemedicinska jedinica — doista na mreži, prenosi podatke i ispravno radi, a ne da je izvan mreže, odspojen ili neispravan. To je temeljna infrastrukturna metrika ispod svakog programa praćenja na daljinu ili povezanih uređaja: klinički alarm, biometrijski trend ili broj angažmana izračunan s uređaja koji je često bio izvan mreže pouzdan je samo koliko i povezivost na kojoj počiva.

## Zašto je važna

Cjelokupna klinička vrijednost programa praćenja pacijenata na daljinu ovisi o kontinuiranom ili gotovo kontinuiranom prikupljanju podataka; uređaj s lošom raspoloživošću stvara tihe praznine u kliničkoj slici pacijenta koje se mogu zamijeniti sa stabilnošću (nema alarma jer nema podataka, a ne zato što se ništa nije promijenilo), umjesto da se ispravno prepoznaju kao propust praćenja. Raspoloživost uređaja ujedno je pokazatelj troška programa i iskustva pacijenta: uređaj koji često gubi vezu stvara pozive podršci, frustraciju pacijenata i potencijalno nepotrebno kliničko javljanje radi provjere odražava li praznina u podacima stvaran klinički događaj ili samo tehničku grešku. Budući da se neuspjesi raspoloživosti uređaja često mogu pripisati infrastrukturi koju organizacija kontrolira (loše konfiguriran mobilni pristupnik, slaba pokrivenost Wi-Fi mrežom u domu pacijenta, slabo održavana flota uređaja), a ne pacijentu, ova metrika pripada izravno dobavljaču i timu tehničkih operacija, a ne da se bez razlike uklapa u metrike angažmana pacijenata.

## Kako se izračunava

```
Stopa raspoloživosti uređaja = vrijeme u kojem je uređaj bio na mreži i
                               prenosio valjane podatke /
                               ukupno planirano vrijeme praćenja × 100

Segmentirajte uzroke prekida rada gdje podaci to dopuštaju:
  Kvar na strani uređaja  (baterija, hardverski kvar, pad firmwarea)
  Kvar povezivosti        (ispad mobilne mreže/Wi-Fi-ja/VPN-a)
  Čimbenici na strani pacijenta (uređaj isključen, izvan dometa)

Prateći tehnički parametri za praćenje uz raspoloživost:
  Prosječno opterećenje procesora, uporaba memorije i razina baterije
  po uređaju
  Prosječno vrijeme između kvarova povezivosti
  Prosječno vrijeme ponovnog povezivanja nakon ispada
```

## Razrađeni primjer

Program kardiološkog praćenja na daljinu uvodi 1 000 povezanih uređaja, od kojih se svaki treba kontinuirano prenositi. Tijekom mjeseca od 30 dana (720 planiranih sati praćenja po uređaju) flota bilježi ukupno 705 600 stvarnih sati na mreži naspram planiranih 720 000 sati, što daje stopu raspoloživosti uređaja za cijelu flotu od 705 600 / 720 000 × 100 = 98 %. Analiza uzroka za 14 400 sati prekida rada pokazuje da se 60 % može pripisati ispadima mobilne povezivosti koncentriranima u određenoj ruralnoj regiji usluge, 25 % uređajima s dotrajalim baterijama označenima za zamjenu, a 15 % pacijentima koji su privremeno isključili uređaj. Ova raščlamba upućuje na dvije jasne, različite intervencije — popravak povezivosti u zahvaćenoj regiji i proaktivan program zamjene baterija — koje jedan zbirni broj raspoloživosti ne bi razlikovao.

## Izvori podataka i ograničenja

Podaci o raspoloživosti dolaze iz vlastitog sustava za upravljanje uređajima i telemetriju proizvođača uređaja ili dobavljača platforme, koji bilježi događaje povezivanja i „otkucaja srca” po uređaju; organizacija treba potvrditi što točno dobavljač računa kao „na mreži” (uređaj može sam javiti da je povezan s mrežom, a pritom ne prenositi valjane kliničke podatke, što se za kliničke svrhe treba računati kao prekid rada, čak i ako ga nadzorna ploča dobavljača prikazuje kao povezan). Raspoloživost treba prijavljivati po kohorti uređaja ili zemljopisnom području gdje opseg to dopušta, jer je kvaliteta povezivosti često zemljopisno grupirana (ruralna pokrivenost mobilnom mrežom, Wi-Fi u starijim zgradama), a ne ravnomjerno raspoređena po populaciji pacijenata, a zbirni broj za cijelu flotu može prikriti ozbiljan regionalni problem koji se može riješiti.

## Zamke

- **Miješanje mrežne veze s valjanim prijenosom podataka**: uređaj može na nadzornoj ploči dobavljača izgledati „povezan”, a ne prenositi upotrebljive kliničke podatke; definirajte i mjerite raspoloživost prema stvarnom primitku valjanih podataka, a ne samo prema sirovoj mrežnoj povezanosti.
- **Prijavljivanje samo prosjeka za cijelu flotu**: to može sakriti ozbiljan problem prekida rada specifičan za zemljopisno područje ili kohortu uređaja, koji bi ciljani prosjek otkrio i koji ima određeno rješenje.
- **Nerazlikovanje uzroka prekida rada**: prekid rada na strani uređaja, povezivosti i pacijenta zahtijevaju potpuno različite intervencije; jedan postotak prekida bez segmentacije po uzroku ne može se pretvoriti u djelovanje.
- **Praznina u podacima smatra se zadano kliničkom stabilnošću**: nedostajući tok podataka s uređaja izvan mreže treba pokrenuti tehničku provjeru povezivosti, a ne da se prešutno tumači kao „nema vijesti, dobre vijesti” za klinički status pacijenta.

## Izvori

- Continua Design Guidelines / Personal Connected Health Alliance, tehnički standardi interoperabilnosti za povezane zdravstvene uređaje
- ONC / HealthIT.gov, smjernice o uvođenju programa praćenja pacijenata na daljinu i tehničkim zahtjevima
- Recenzirana literatura o pouzdanosti uređaja za praćenje pacijenata na daljinu i potpunosti podataka, na primjer studije objavljene u časopisu npj Digital Medicine

Vidi također: [točnost usmjeravanja trijaže](../točnost-usmjeravanja-trijaže/), koja ovisi o primanju potpunih, pouzdanih podataka s uređaja kako bi se uopće mogla donijeti ispravna odluka o trijaži.
