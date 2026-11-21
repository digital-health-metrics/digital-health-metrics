# Raportul LTV-CAC

Raportul LTV-CAC compară valoarea pe durata de viață a unui client (LTV) — venitul sau marja totală pe care o organizație se așteaptă să o câștige de la un pacient sau client pe întreaga relație cu produsul — cu costul real de achiziție a acelui client (vezi costul real de achiziție a clienților). Este cea mai importantă metrică de economie unitară pentru a judeca dacă creșterea unei organizații de sănătate digitală este sustenabilă financiar, deoarece o bază de clienți în creștere, achiziționată în pierdere, nu este un semn de sănătate, oricât de pozitivă ar părea curba de creștere.

## De ce contează

O organizație de sănătate digitală își poate crește constant baza de utilizatori distrugând discret valoare la fiecare client nou, dacă costul de achiziție depășește valoarea pe durata de viață; raportul LTV-CAC este metrica ce face acest lucru vizibil într-un mod în care nici ritmul de creștere, nici numărul brut de clienți nu pot. Un raport de 3:1 (valoarea pe durata de viață de cel puțin trei ori costul de achiziție) este reperul larg citat pentru o afacere sustenabilă bazată pe abonament sau venituri recurente, permițând o marjă suficientă pentru a acoperi costurile operaționale dincolo de achiziție și a genera totuși un randament; un raport sub 1:1 înseamnă că organizația pierde bani la fiecare client achiziționat, iar un raport mult peste 3:1 (de exemplu 10:1 sau mai mult) poate indica de fapt subinvestiție în creștere, deoarece sugerează că organizația ar putea achiziționa profitabil mai mulți clienți decât o face în prezent. Investitorii, consiliile de administrație și plătitorii care evaluează sustenabilitatea financiară a unei companii de sănătate digitală tratează acest raport ca unul dintre primele numere pe care le cer.

## Cum se calculează

```
LTV = venit mediu (sau marjă) per client per perioadă × durata medie
      de viață a clientului, în aceeași unitate de perioadă

Raportul LTV-CAC = LTV / CAC real

Un raport de 3:1 este pragul de sustenabilitate cel mai des citat; sub 1:1
indică faptul că organizația pierde bani la achiziție; mult peste 3:1
(de exemplu 10:1+) poate indica subinvestiție în creștere.
```

## Exemplu aplicat

Un serviciu de abonament de sănătate digitală generează un venit lunar mediu de 40 USD per pacient, iar pacientul mediu rămâne abonat 18 luni, ceea ce dă un LTV de 40 × 18 = 720 USD. CAC real pentru acest serviciu (vezi abordarea din exemplul aplicat al acelui subiect) este calculat la 180 USD per pacient achiziționat. Raportul LTV-CAC este 720 / 180 = 4:1, confortabil peste pragul de sustenabilitate de 3:1. Dacă CAC real ar fi calculat doar cu costul raportat de platforma publicitară (120 USD, înainte de încărcarea onorariilor agențiilor și a muncii de preluare), raportul ar apărea ca 6:1 — o imagine semnificativ mai favorabilă, și înșelătoare, a economiei unitare decât cifra reală de 4:1.

## Surse de date și limitări

LTV depinde de o ipoteză privind durata medie de viață a clientului, care este ea însăși derivată din datele proprii ale organizației privind retenția sau abandonul (vezi rata de retenție a utilizatorilor) — o afacere cu abandon ridicat are o durată medie efectivă de viață mai scurtă și, prin urmare, un LTV mai mic, chiar dacă venitul pe perioadă per client pare sănătos. Deoarece LTV este o estimare orientată spre viitor, nu un fapt istoric observat, ar trebui recalculat periodic pe măsură ce se acumulează date de retenție și revizuit dacă ipotezele privind abandonul se dovedesc greșite, nu fixat o singură dată și lăsat să se perimeze. Folosirea CAC raportat de platformă în loc de CAC real în acest raport este unul dintre cele mai frecvente moduri în care o organizație se poate convinge că economia ei unitară este mai sănătoasă decât este, deoarece un CAC subestimat umflă mecanic raportul.

## Capcane

- **Folosirea CAC raportat de platformă în loc de CAC real**: umflă mecanic raportul și poate face ca o strategie de achiziție nesustenabilă să pară sustenabilă; folosiți întotdeauna cifra CAC real complet încărcată.
- **Folosirea unei ipoteze vechi sau optimiste privind durata medie de viață a clientului**: un LTV calculat dintr-o curbă de retenție depășită nu va reflecta comportamentul actual de abandon, în special după o schimbare de produs, de preț sau de piață care deplasează retenția.
- **Tratarea unui raport foarte ridicat ca fiind lipsit de ambiguitate bun**: un raport mult peste 3:1 poate semnala subinvestiție în creștere, nu o eficiență excepțională, deoarece implică faptul că organizația ar putea probabil achiziționa profitabil mai mulți clienți decât o face în prezent.
- **Calcularea unui singur raport combinat pentru segmente de clienți foarte diferite**: un segment cu venituri mari și abandon scăzut poate masca un alt segment cu economie unitară slabă; calculați raportul pe segmente semnificative (de exemplu pe canal de achiziție sau linie de produs) acolo unde volumul o permite.

## Surse

- Literatura academică și din industrie privind economia unitară a abonamentelor și a veniturilor recurente, cadre de benchmarking larg utilizate din capitalul de risc și din organizații de cercetare a metricilor SaaS
- Healthcare Financial Management Association (HFMA), ghiduri privind metricile de sustenabilitate financiară pentru organizațiile de sănătate digitală
- Rock Health și organizații similare de cercetare de piață în sănătatea digitală, benchmarking din industrie privind economia unitară în sănătatea digitală

Vezi și: [costul real de achiziție a clienților](../costul-real-de-achiziție-a-clienților/) și [raportul de eficiență a marketingului](../raportul-de-eficiență-a-marketingului/), celelalte două metrici de bază ale economiei creșterii, alături de care este raportat de obicei acest raport.
