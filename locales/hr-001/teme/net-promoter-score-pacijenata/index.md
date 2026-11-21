# Net Promoter Score pacijenata

Net Promoter Score (NPS) pacijenata mjeri spremnost pacijenata da digitalni zdravstveni proizvod ili telemedicinsku uslugu preporuče drugima, na temelju jednog pitanja iz ankete — „Koliko je vjerojatno da ćete ovu uslugu preporučiti prijatelju ili kolegi?” — ocijenjenog od 0 do 10. Ispitanici s ocjenom 9–10 su „promotori”, 7–8 „pasivni”, a 0–6 „kritičari”; NPS je postotak promotora minus postotak kritičara. To je najšire korištena, ali i najšire kritizirana metrika zadovoljstva pacijenata u digitalnom zdravlju, cijenjena zbog jednostavnosti, ali ograničena u onome što sama može dijagnosticirati.

## Zašto je važan

NPS digitalnim zdravstvenim timovima daje jednostavan, standardiziran, međusobno usporediv signal zadovoljstva koji je jeftin za prikupljanje i lako ga je nespecijalističkim dionicima (rukovoditeljima, upravnim odborima, naručiteljima) protumačiti na prvi pogled, zbog čega ostaje popularan unatoč dobro dokumentiranim metodološkim ograničenjima. Za telemedicinu i digitalna „ulazna vrata” zdravstvenog sustava posebno, NPS je često vodeći pokazatelj hoće li pacijenti i dalje birati digitalni kanal umjesto osobne alternative kada su dostupna oba, što ima izravne posljedice za planiranje mješavine kanala i kapaciteta. No NPS je jedan, sažeti broj visoke razine: pad NPS-a govori timu da nešto nije u redu, ali ne što, pa ga uvijek treba upariti s otvorenim tekstualnim povratnim informacijama ili detaljnijim instrumentom upotrebljivosti kako bi bio djelotvoran, a ne samo broj na tablici rezultata.

## Kako se izračunava

```
NPS = % promotora (ocjena 9–10) − % kritičara (ocjena 0–6)

Rezultat je broj od −100 do +100, a ne postotak, iako je izveden iz
postotaka — uz NPS nikada ne dodavajte znak „%”.

Prijavite uz:
  stopu odgovora (% anketiranih pacijenata koji su odgovorili)
  veličinu uzorka
  točan korišteni tekst pitanja
```

## Razrađeni primjer

Telemedicinska platforma anketira 1 000 pacijenata nakon videokonzultacije i dobiva 400 odgovora (stopa odgovora 40 %). Od tih 400 ispitanika, 220 daje ocjenu 9–10 (promotori, 55 %), 100 daje 7–8 (pasivni, 25 %), a 80 daje 0–6 (kritičari, 20 %). NPS iznosi 55 − 20 = 35. Taj broj ima smisla samo u kontekstu: NPS od 35 može biti snažan rezultat u usporedbi sa širom industrijom telemedicine ili zabrinjavajući pad u odnosu na raniji rezultat iste platforme od 48 u prethodnom tromjesečju — NPS je mnogo korisniji kao trend jednog proizvoda tijekom vremena nego kao apsolutno jednokratno mjerilo u odnosu na drugi proizvod.

## Izvori podataka i ograničenja

NPS se prikuplja anketom nakon interakcije, obično pokrenutom odmah nakon videoposjeta, sesije u aplikaciji ili epizode skrbi, a stopa odgovora iznimno je važna: niska stopa odgovora (znatno ispod otprilike 40 % iz razrađenog primjera) riskira pristranost zbog neodgovaranja, pri čemu odgovaraju samo snažno zadovoljni ili snažno nezadovoljni pacijenti, što rezultat povlači prema krajnostima i od stvarnog raspoloženja populacije. Usporedba NPS-a među organizacijama ili čak među različitim kanalima jedne organizacije (na primjer telemedicina naspram osobnog posjeta) valjana je samo ako su tekst pitanja, vrijeme i populacija ankete uistinu usporedivi; poznato je da male promjene formulacije mjerljivo pomiču rezultate. NPS treba tretirati kao ishod koji treba objasniti, a ne kao cilj sam po sebi — otvoreni tekstualni komentari koji obično prate NPS anketu obično su djelotvorniji od samog rezultata.

## Zamke

- **Usporedba NPS vrijednosti prikupljenih uz različit tekst pitanja ili vrijeme**: čak i male razlike u dizajnu ankete mogu pomaknuti rezultate za nekoliko bodova, zbog čega je usporedno mjerenje NPS-a među organizacijama mnogo manje pouzdano nego što se čini.
- **Zanemarivanje stope odgovora**: glavni NPS izračunan iz stope odgovora od 10 % mnogo je manje pouzdan od onog izračunanog iz stope od 60 %, jer su niske stope odgovora sklone pristranosti zbog neodgovaranja prema najekstremnijim mišljenjima.
- **Tretiranje NPS-a kao dijagnostičkog alata, a ne sažete metrike**: pad NPS-a govori da nešto nije u redu, ali nikada ne govori što; uvijek ga treba upariti s kvalitativnim povratnim informacijama ili detaljnijim instrumentom zadovoljstva ili upotrebljivosti kako bi se utvrdio uzrok.
- **Jurenje NPS-a kao cilja samog po sebi**: uska optimizacija broja NPS (na primjer anketiranjem pacijenata samo nakon neobično pozitivnih interakcija) može poboljšati prijavljeni rezultat, a da temeljno iskustvo pacijenata ne postane bolje ili čak postane lošije.

## Izvori

- Bain & Company, izvorna metodologija sustava Net Promoter i smjernice za usporedno mjerenje
- Agency for Healthcare Research and Quality (AHRQ), program anketa o iskustvu pacijenata CAHPS (Consumer Assessment of Healthcare Providers and Systems), kao komplementarna, detaljnija alternativa
- Recenzirana literatura o uporabi i ograničenjima Net Promoter Scorea u zdravstvenim okruženjima, na primjer studije objavljene u časopisu Journal of Medical Internet Research (JMIR)

Vidi također: [stopa zadržavanja korisnika](../stopa-zadržavanja-korisnika/), jer se zadovoljstvo koje prijavljuju pacijenti i stvarna nastavljena uporaba proizvoda često razilaze i vrijedi ih pratiti kao zasebne signale.
