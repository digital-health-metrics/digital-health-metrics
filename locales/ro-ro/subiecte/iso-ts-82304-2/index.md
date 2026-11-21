# ISO/TS 82304-2

ISO/TS 82304-2 este o specificație tehnică internațională, publicată sub Comitetul Tehnic ISO 215 (Informatică medicală), care definește o metodă structurată de evaluare a calității aplicațiilor de sănătate și bunăstare — acoperind uzabilitatea, robustețea și fiabilitatea tehnică, interoperabilitatea, calitatea conținutului și securitatea și confidențialitatea datelor — pentru produse aflate în afara domeniului de aplicare al reglementării complete a dispozitivelor medicale, dar care afectează totuși în mod material deciziile sau comportamentul de sănătate al unui utilizator. Există pentru a umple o lacună specifică: marea majoritate a aplicațiilor de sănătate și bunăstare destinate consumatorilor (trackere de fitness, jurnale de simptome, aplicații de coaching pentru bunăstare) nu sunt reglementate ca dispozitive medicale, totuși nu exista anterior o modalitate comună, structurată, de a evalua sau compara calitatea și siguranța lor de bază.

## De ce contează

Magazinele de aplicații găzduiesc sute de mii de aplicații de sănătate și bunăstare cu o calitate extrem de variabilă, iar înainte să existe o specificație tehnică comună, un pacient, un clinician sau un sistem de sănătate nu avea o modalitate structurată și comparabilă de a judeca calitatea și siguranța de bază a unei aplicații față de alta, dincolo de evaluările cu stele și afirmațiile de marketing — o lacună care contează deoarece o aplicație de sănătate prost concepută poate provoca totuși daune reale (conținut inexact, securitate slabă a datelor, afirmații înșelătoare) chiar și fără a atinge pragul de reglementare al unui dispozitiv medical. ISO/TS 82304-2 este deliberat structurată în jurul unor domenii pe care un evaluator nespecializat le poate evalua consecvent, ceea ce a făcut-o baza tehnică a mai multor servicii naționale și comerciale de etichetare a calității și de curatare a aplicațiilor de sănătate, oferind sistemelor de sănătate și bibliotecilor de aplicații o modalitate standardizată, apărabilă, de a include sau exclude aplicații dintr-o listă recomandată, în loc să se bazeze pe judecăți ad-hoc.

## Cum se aplică

```
Evaluarea este organizată în jurul unor domenii de calitate definite,
evaluate prin revizuire structurată, nu printr-o singură formulă numerică:

Uzabilitate                        — claritate, accesibilitate și ușurința
                                      utilizării pentru grupul de utilizatori
                                      vizat
Robustețe/fiabilitate tehnică      — stabilitate, performanță și absența
                                      defectelor tehnice
Interoperabilitate                 — capacitatea de a schimba date cu alte
                                      sisteme, acolo unde este relevant
                                      pentru funcția aplicației
Calitatea și siguranța conținutului — acuratețe, actualitate și absența
                                      afirmațiilor de sănătate dăunătoare
                                      sau înșelătoare
Securitate și confidențialitate    — practica de protecție a datelor și
                                      transparența privind utilizarea datelor

Fiecare domeniu este punctat prin criterii structurate de revizuire și
combinat într-o evaluare generală a calității, pe care mai multe scheme
de etichetare a calității aplicațiilor de sănătate o folosesc ca bază
tehnică pentru o etichetă publică de calitate sau o decizie de includere
într-o bibliotecă curată.
```

## Exemplu aplicat

Programul de bibliotecă de aplicații digitale al unui sistem de sănătate dorește să curateze o listă recomandată de aplicații de bunăstare pentru pacienți, în loc să lase selecția aplicațiilor în întregime pe seama căutării în magazinul de aplicații. Fiecare aplicație candidată este evaluată în raport cu domeniile ISO/TS 82304-2: o aplicație de urmărire a somnului obține scoruri bune la uzabilitate și robustețe tehnică, adecvate la calitatea conținutului, dar este semnalată în timpul revizuirii de securitate și confidențialitate pentru partajarea datelor utilizatorilor cu agenți de publicitate terți fără o informare clară — o constatare suficient de semnificativă pentru a exclude aplicația din lista recomandată, în pofida scorului ei altfel puternic de uzabilitate. Acest rezultat pe domenii este mai acționabil atât pentru echipa de curatare, cât și, dacă este partajat, pentru dezvoltatorul aplicației, decât ar fi un singur scor combinat de calitate, deoarece identifică exact ce aspect necesită remediere înainte ca aplicația să poată fi reconsiderată.

## Surse de date și limitări

Evaluarea în raport cu ISO/TS 82304-2 este realizată de obicei de un evaluator instruit sau de un serviciu de evaluare acreditat, urmând criteriile structurate de revizuire ale specificației pentru fiecare domeniu, iar mai multe inițiative naționale și comerciale (organizații de etichetare a calității și de curatare a aplicațiilor de sănătate, unele operând sub o susținere oficială a sistemului național de sănătate) folosesc standardul ca bază tehnică pentru propriile etichete publice de calitate a aplicațiilor — ceea ce înseamnă că statutul „certificat” sau „etichetat” al unei aplicații reflectă adesea în practică implementarea standardului de către o anumită schemă de etichetare, nu neapărat un proces identic în fiecare schemă, astfel că organizația evaluatoare specifică și metodologia ei ar trebui verificate și dezvăluite alături de orice etichetă de calitate citată. Specificația evaluează caracteristicile de calitate și siguranță de bază ale unei aplicații ca software; nu înlocuiește autorizarea reglementară a dispozitivelor medicale acolo unde afirmațiile sau funcțiile unei aplicații ating efectiv pragul unui dispozitiv medical, iar folosirea ei ca atare ar fi o eroare de categorie.

## Capcane

- **Tratarea unei etichete de calitate ca autorizare reglementară**: o aplicație evaluată și etichetată conform ISO/TS 82304-2 nu a primit prin aceasta aprobarea reglementară pentru dispozitive medicale; cele două servesc scopuri diferite și nu ar trebui confundate niciodată în modul în care o aplicație este descrisă sau comercializată.
- **Presupunerea că toate schemele de etichetare bazate pe standard sunt echivalente**: organizații diferite implementează evaluarea bazată pe ISO/TS 82304-2 cu propriile procese și rigoare de revizuire; verificați care organizație a efectuat o evaluare și cum, în loc să tratați orice etichetă „bazată pe ISO/TS 82304-2” ca interschimbabilă cu oricare alta.
- **Evaluarea doar a uzabilității, neglijând securitatea și confidențialitatea**: problemele de uzabilitate sunt cele mai vizibile pentru un utilizator final și cel mai ușor de evaluat informal, ceea ce poate duce evaluatorii să subpondereze domeniul mai puțin vizibil, dar potențial mai consecvent, al securității și confidențialității.
- **Tratarea evaluării ca o certificare unică, permanentă**: conținutul unei aplicații, practicile de securitate și acordurile de partajare a datelor cu terți se pot schimba după o evaluare inițială; un program credibil de etichetare a calității reevaluează periodic, nu tratează o trecere inițială ca permanentă.

## Surse

- International Organization for Standardization, ISO/TS 82304-2:2021, „Health software — Part 2: Health and wellness apps — Quality and reliability”
- ISO Technical Committee 215 (Health Informatics), informații despre publicații și grupuri de lucru
- Organizații naționale și comerciale de etichetare a calității și de curatare a aplicațiilor de sănătate care își publică metodologia de evaluare bazată pe acest standard

Vezi și: [scorul Scalei de Uzabilitate a Sistemului](../scorul-scalei-de-uzabilitate-a-sistemului/), un instrument complementar, mai îngust, specific uzabilității, adesea folosit alături de o evaluare mai largă a calității ISO/TS 82304-2.
