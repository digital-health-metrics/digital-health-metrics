# Reducerea zilelor de spitalizare

Reducerea zilelor de spitalizare măsoară numărul total de zile de pat de spital în regim de internare evitate prin mutarea unui episod definit de îngrijire — cel mai frecvent recuperarea postchirurgicală sau gestionarea unei afecțiuni acute — de la o internare tradițională la o alternativă susținută digital, precum un salon virtual sau un program de spitalizare la domiciliu. Este metrica principală de capacitate pentru inițiativele de saloane virtuale și de spitalizare la domiciliu, traducând o schimbare a modelului clinic de îngrijire direct în moneda (capacitatea de paturi) cu care operează efectiv operațiunile spitalicești și planificatorii de sistem.

## De ce contează

Capacitatea de paturi pentru internare este una dintre cele mai constrânse și mai scumpe resurse din orice sistem spitalicesc, iar propunerea centrală de valoare a unui salon virtual sau a unui program de spitalizare la domiciliu este că poate furniza în siguranță un nivel definit de îngrijire clinică fără a ocupa un pat fizic, eliberând acea capacitate pentru pacienții care nu pot fi gestionați altfel. Reducerea zilelor de spitalizare transformă o afirmație adesea abstractă („acest program îmbunătățește îngrijirea”) într-un număr operațional concret, pe care planificatorii de capacitate ai spitalului, echipele financiare și comisarii pot acționa direct: poate fi folosită pentru a modela dacă o investiție într-un program de monitorizare se amortizează prin costurile de pat evitate și cu cât. Deoarece reducerea zilelor de spitalizare are valoare doar dacă siguranța pacientului este menținută, ea ar trebui raportată întotdeauna alături de, niciodată în locul, unei metrici de rezultat de siguranță (precum rata de reinternare sau rata de escaladare către îngrijire în regim de internare) pentru aceeași populație.

## Cum se calculează

```
Reducerea zilelor de spitalizare = zile de pat așteptate în îngrijirea standard în regim de internare
                                   (pe baza datelor istorice privind durata internării pentru o
                                   cohortă de pacienți asortată) − zilele de pat efectiv utilizate de
                                   pacienții de pe calea virtuală/digitală

Raportați pe cale clinică (de exemplu recuperare postchirurgicală, exacerbare
respiratorie acută), deoarece durata așteptată a internării variază enorm
în funcție de afecțiune, iar o cifră combinată pentru căi fără legătură nu
are sens.
```

## Exemplu aplicat

Datele istorice ale unui spital arată că pacienții care își revin după o anumită procedură chirurgicală electivă au o durată medie de internare de 4 zile. Un program de salon virtual înrolează 150 de pacienți care își revin după aceeași procedură, externându-i după în medie 1,5 zile de internare, restul recuperării fiind monitorizat la distanță. Reducerea zilelor de spitalizare este (4 − 1,5) × 150 = 375 de zile de pat în perioada de măsurare. Această cifră ar trebui raportată alături de rata de escaladare către îngrijire în regim de internare la 30 de zile și de rata de reinternare ale cohortei din salonul virtual pentru aceiași 150 de pacienți, deoarece o economie de zile de pat obținută cu prețul unei rate semnificativ mai mari de escaladare sau reinternare nu este victoria clinică pe care ar sugera-o altfel cifra de titlu.

## Surse de date și limitări

Zilele de pat așteptate necesită o linie de bază istorică credibilă, ideal dintr-o cohortă de pacienți asortată, tratată în îngrijire standard în regim de internare, cu caracteristici clinice similare (vârstă, comorbiditate, tip de procedură, severitate) cu cele ale populației din salonul virtual, deoarece compararea cu o medie istorică neasortată riscă să supraestimeze sau să subestimeze reducerea reală dacă cohorta gestionată digital este sistematic mai sănătoasă sau mai bolnavă decât grupul istoric de comparație. Zilele de pat efectiv utilizate pe calea digitală provin din propriul sistem de admitere-externare-transfer (ADT) al spitalului; orice escaladare înapoi către îngrijirea în regim de internare în perioada de recuperare monitorizată ar trebui contabilizată cinstit în defavoarea programului (ca zile de pat utilizate, nu excluse), deoarece excluderea escaladărilor din calcul ar umfla artificial reducerea aparentă.

## Capcane

- **Raportarea reducerii zilelor de spitalizare fără o comparație de siguranță asortată**: un salon virtual care economisește zile de pat, dar are o rată de escaladare sau reinternare semnificativ mai rea decât îngrijirea standard nu a demonstrat o îmbunătățire reală; raportați întotdeauna ambele împreună.
- **Folosirea unei linii de bază istorice neasortate sau depășite**: compararea cu o cohortă istorică cu alt amestec de cazuri, altă povară a comorbidităților sau altă epocă a practicii clinice poate supraestima sau subestima semnificativ economia reală de zile de pat.
- **Excluderea din calcul a escaladărilor înapoi către îngrijirea în regim de internare**: un pacient monitorizat virtual, dar escaladat apoi către un pat de internare la jumătatea recuperării, ar trebui să aibă acele zile de pat contabilizate în defavoarea programului, nu eliminate discret din analiză.
- **Amestecarea căilor cu durate așteptate foarte diferite ale internării**: agregarea reducerii zilelor de spitalizare pe căi fără legătură clinică (de exemplu combinarea recuperării postchirurgicale cu gestionarea afecțiunilor respiratorii cronice) într-o singură cifră ascunde care cale anume determină de fapt economia.

## Surse

- NHS England, ghiduri pentru programele de saloane virtuale și spitalizare la domiciliu și standarde de raportare a impactului asupra zilelor de pat
- Literatura evaluată de specialiști privind modelele de spitalizare la domiciliu și saloane virtuale, de exemplu studii publicate în JAMA Internal Medicine și npj Digital Medicine
- Institute for Healthcare Improvement (IHI), ghiduri privind gestionarea capacității și modelele alternative de îngrijire

Vezi și: [rata de reinternare în spital](../rata-de-reinternare-în-spital/), metrica de siguranță care ar trebui raportată întotdeauna alături de orice afirmație privind reducerea zilelor de spitalizare pentru aceeași populație de pacienți.
