# Timpul de procesare a trimiterilor digitale

Timpul de procesare a trimiterilor digitale este timpul scurs de la depunerea unei trimiteri electronice de către clinicianul care trimite până la triajul ei și acceptarea, respingerea sau programarea ei de către serviciul primitor. Este o metrică de proces (de flux), distinctă de timpul total de așteptare al pacientului, și este unul dintre cele mai clare locuri în care o schimbare a sistemului digital (e-trimitere structurată, triaj bazat pe imagini, formulare standardizate de trimitere) poate arăta că mișcă un număr operațional, nu doar un scor de satisfacție.

## De ce contează

O etapă de triaj lentă sau foarte variabilă adaugă întârziere înainte ca pacientul să intre măcar pe o listă clinică de așteptare, iar deoarece această întârziere apare înainte de începerea oricărei îngrijiri clinice, este o risipă pură de proces pe care instrumentele digitale sunt bine plasate să o elimine. Sistemele de trimitere care impun un ciclu de „returnare către trimițător” pentru informații lipsă creează bucle de refacere ușor de ratat dacă timpul de procesare este măsurat doar pe trimiterile care trec curat din prima. Acolo unde un serviciu a introdus formulare digitale structurate de trimitere, câmpuri obligatorii sau triaj bazat pe imagini (de exemplu în teledermatologie), timpul de procesare este de obicei singura metrică cea mai convingătoare pentru a demonstra beneficiul, deoarece poate fi măsurat înainte și după schimbare cu aceeași instrumentare.

## Cum se calculează

```
Timp de procesare = marcaj temporal(decizia de triaj) − marcaj temporal(depunerea trimiterii)

Raportați mediana și un percentil ridicat (de regulă al 90-lea), nu doar media,
deoarece distribuția este puternic asimetrică la dreapta din cauza trimiterilor
returnate sau complexe.

Luați în considerare duratele pe subetape, acolo unde sistemul le înregistrează:
  Depunere → primită de serviciu
  Primită → decizia de triaj
  Decizia de triaj → programare fixată (acolo unde este relevant)
```

## Exemplu aplicat

Pista de audit a unui sistem de e-trimitere arată o mediană a timpului de la depunere până la decizia de triaj de 1,8 zile pentru toate specialitățile, cu un timp la percentila 90 de 6 zile, determinat în principal de trimiterile returnate către trimițător pentru informații clinice lipsă. O cale de teledermatologie care folosește triaj bazat pe imagini, pe aceeași platformă, atinge o mediană a timpului de procesare de 4 ore și o percentilă 90 de 1 zi, deoarece o fotografie și un istoric structurat sunt aproape întotdeauna suficiente pentru decizia de triaj fără a fi nevoie de corespondență suplimentară.

## Surse de date și limitări

Pista de audit a sistemului de e-trimitere sau de gestiune a trimiterilor este sursa principală, folosind marcajele temporale ale depunerii și deciziei; organizațiile ar trebui să confirme dacă „ceasul” se oprește cât timp o trimitere este returnată pentru informații suplimentare sau rulează continuu, deoarece cele două definiții produc cifre semnificativ diferite pentru același proces de bază. Timpul de procesare ar trebui raportat consecvent fie în timp calendaristic, fie în ore lucrătoare, deoarece efectele weekendurilor și ale sărbătorilor pot altfel distorsiona comparațiile între servicii cu programe de lucru diferite.

## Capcane

- **Măsurarea doar a trimiterilor „curate”**: excluderea din calcul a trimiterilor respinse sau returnate ascunde povara refacerii pe care instrumentele digitale sunt adesea special concepute să o reducă.
- **Raportarea mediei în loc de mediană și percentile**: un număr mic de trimiteri returnate, de lungă durată, va trage media mult peste experiența reală a pacientului obișnuit.
- **Confundarea timpului de procesare cu timpul total de așteptare**: timpul de procesare acoperă doar etapa de triaj; experiența totală a pacientului include și lista clinică de așteptare ulterioară, care este o metrică separată, guvernată de constrângeri de capacitate separate.
- **Nedistingerea subetapelor**: un serviciu care măsoară doar timpul de la un capăt la altul nu poate spune dacă o cifră lentă este cauzată de trimițători care depun informații incomplete, de capacitatea de triaj a serviciului primitor sau de ambele.

## Surse

- NHS England, statistici și specificații de serviciu pentru e-Referral Service (e-RS)
- Literatura evaluată de specialiști privind sistemele electronice de gestiune a trimiterilor și căile de triaj digital, inclusiv teledermatologia
- ONC / HealthIT.gov, ghiduri privind interoperabilitatea și coordonarea trimiterilor
