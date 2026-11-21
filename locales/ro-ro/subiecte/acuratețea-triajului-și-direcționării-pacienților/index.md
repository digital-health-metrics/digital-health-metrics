# Acuratețea triajului și direcționării pacienților

Acuratețea triajului și direcționării pacienților este ponderea întâlnirilor cu pacienții în care un instrument de triaj automat sau asistat de IA direcționează corect pacientul către nivelul și locul adecvat de îngrijire — de exemplu autoîngrijire, asistență medicală primară, îngrijire de urgență imediată sau îngrijire de urgență — judecat față de un standard de referință validat clinic. Este metrica de siguranță și eficacitate pentru orice „ușă digitală de intrare”, verificator de simptome sau sistem de triaj bazat pe IA: întreaga propunere de valoare a instrumentului se bazează pe direcționarea corectă, rapidă și consecventă a pacienților.

## De ce contează

Un instrument de triaj inexact provoacă daune în ambele direcții: subtriajul (direcționarea unui pacient către un nivel de îngrijire mai scăzut decât cel de care are nevoie) poate întârzia tratamentul unei urgențe reale, în timp ce supratriajul (direcționarea unui pacient către un nivel de îngrijire mai ridicat decât cel de care are nevoie) irosește capacitatea rară de urgență și îngrijire imediată și crește costul și anxietatea pacientului fără niciun beneficiu clinic. Deoarece aceste două moduri de eșec au consecințe atât de diferite, acuratețea triajului și direcționării ar trebui raportată întotdeauna împreună cu direcția erorilor, nu ca o singură cifră agregată de acuratețe care ascunde dacă instrumentul greșește în siguranță sau periculos. Autoritățile de reglementare și sistemele de sănătate care evaluează un instrument de triaj bazat pe IA pentru implementare cer tot mai des acest tip de raportare stratificată a acurateței ca o condiție a aprobării clinice, în special pentru instrumentele care operează cu orice grad de autonomie față de un clinician.

## Cum se calculează

```
Acuratețea triajului și direcționării = întâlniri direcționate corect / total întâlniri triate × 100

Raportați separat subtriajul și supratriajul:
  Rata de subtriaj  = întâlniri direcționate către un nivel de acuitate mai
                      scăzut decât standardul de referință / total întâlniri
                      triate × 100
  Rata de supratriaj = întâlniri direcționate către un nivel de acuitate mai
                       ridicat decât standardul de referință / total întâlniri
                       triate × 100

Standardul de referință este de obicei o revizuire retrospectivă a aceluiași
caz de către un clinician, în orb față de rezultatul instrumentului, acolo
unde este posibil.
```

## Exemplu aplicat

Un instrument de verificare a simptomelor bazat pe IA triază 5.000 de întâlniri cu pacienți într-o lună. O revizuire clinică în orb a unui eșantion aleatoriu de 500 dintre aceste întâlniri constată că 430 au fost direcționate la nivelul corect de acuitate (acuratețe 86%), 45 au fost subtriate (9%), iar 25 au fost supratriate (5%). Rata de subtriaj de 9% este cifra care necesită investigare cel mai urgent, deoarece reprezintă întâlniri în care un pacient poate fi fost îndrumat către o îngrijire mai puțin urgentă decât avea de fapt nevoie; rata de supratriaj de 5% este o problemă de capacitate și cost, dar nu una directă de siguranță.

## Surse de date și limitări

Standardul de referință față de care se măsoară acuratețea triajului contează enorm: o revizuire de către un singur clinician introduce variabilitatea propriei judecăți a acelui clinician, astfel că o cifră credibilă de acuratețe necesită de obicei fie mai mulți evaluatori independenți cu un acord interevaluatori documentat, fie compararea cu un rezultat clinic ulterior, confirmat (de ce îngrijire a avut de fapt nevoie pacientul, stabilit ulterior). Și eșantionarea contează: revizuirea doar a unui eșantion de conveniență al întâlnirilor, sau doar a celor semnalate ca neobișnuite, nu va produce o cifră care să se generalizeze la performanța generală a instrumentului. Cifrele de acuratețe ar trebui raportate separat pe categorii de simptome sau acuze de prezentare, acolo unde volumul de cazuri o permite, deoarece instrumentele de triaj rareori performează uniform pentru toate afecțiunile.

## Capcane

- **Raportarea unei singure cifre combinate de acuratețe**: reducerea subtriajului și supratriajului la un singur număr ascunde dacă erorile instrumentului înclină spre modul de eșec mai periculos; raportați-le întotdeauna separat.
- **Folosirea unui singur evaluator, fără orb, ca standard de referință**: poate părtini discret cifra de acuratețe spre ceea ce ar fi făcut acel evaluator, nu spre un standard clinic independent.
- **Validarea doar pe date retrospective, de conveniență**: acuratețea reală a direcționării unui instrument pe intrări reale, ambigue, ale pacienților diferă adesea semnificativ de acuratețea pe un set de validare curatat, asamblat în timpul dezvoltării.
- **Ignorarea derivei performanței după implementare**: acuratețea unui model de triaj bazat pe IA se poate degrada în timp pe măsură ce se schimbă populațiile de pacienți, simptomele de prezentare sau disponibilitatea căilor de îngrijire; acuratețea ar trebui remăsurată periodic, nu validată o singură dată și presupusă stabilă.

## Surse

- ONC / HealthIT.gov, ghiduri privind siguranța și asigurarea calității suportului decizional clinic și a instrumentelor bazate pe IA
- Literatura evaluată de specialiști privind acuratețea verificatoarelor de simptome și a instrumentelor de triaj bazate pe IA, de exemplu studii publicate în JAMIA, npj Digital Medicine și BMJ Health & Care Informatics
- NHS England, ghiduri privind siguranța clinică a instrumentelor de triaj digital și consultație la distanță (standardele de management al riscului clinic DCB0129/DCB0160)

Vezi și: [timpul de procesare a trimiterilor digitale](../timpul-de-procesare-a-trimiterilor-digitale/), metrica de proces aflată cel mai direct în aval de o decizie de triaj.
