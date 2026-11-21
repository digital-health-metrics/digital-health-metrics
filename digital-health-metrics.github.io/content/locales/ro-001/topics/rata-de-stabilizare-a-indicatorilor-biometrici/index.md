# Rata de stabilizare a indicatorilor biometrici

Rata de stabilizare a indicatorilor biometrici este ponderea pacienților înrolați care ating și mențin un interval țintă definit clinic pentru o măsură biometrică — cel mai frecvent tensiunea arterială sub un prag precum 130/80 mmHg — folosind un dispozitiv de monitorizare conectat, pe o perioadă susținută, nu într-un singur moment. Este distinctă de rata de îmbunătățire a indicatorilor biometrici (vezi acel subiect): îmbunătățirea măsoară mărimea unei schimbări față de valoarea inițială, în timp ce stabilizarea măsoară dacă un pacient este menținut în mod fiabil într-un interval sigur după începerea tratamentului sau a monitorizării, ceea ce este rezultatul care contează cel mai mult pentru pacienții aflați deja aproape de țintă sau deja în tratament.

## De ce contează

Pentru o mare parte dintre pacienții din programele pentru boli cronice — în special hipertensiunea, unde țintele ghidurilor privind tensiunea arterială sunt bine stabilite și direct legate de riscul cardiovascular — obiectivul clinic nu este o îmbunătățire punctuală, ci controlul susținut, iar un pacient care oscilează în și din intervalul țintă prezintă un risc semnificativ diferit de unul care se îmbunătățește o dată și rămâne acolo. Dispozitivele conectate (manșete celulare de tensiune arterială, monitoare continue ale glicemiei) fac posibilă măsurarea stabilizării continuu, nu doar la vizitele la clinică, scoțând la iveală pacienți ale căror valori din clinică par controlate, dar ale căror valori de acasă sunt instabile — un tipar cunoscut sub numele de hipertensiune mascată, pe care măsurarea periodică în persoană nu o poate detecta singură. Raportarea ratei de stabilizare, nu doar a unei singure instantanee „la țintă”, obligă un program să înfrunte cât de consecvent, nu doar cât de des, își menține pacienții în interval.

## Cum se calculează

```
Rata de stabilizare a indicatorilor biometrici = pacienți cu ≥ 80% dintre valori în
                                intervalul țintă pe perioada de măsurare /
                                pacienți cu un număr minim de valori
                                valide în acea perioadă × 100

Exemple de praguri:
  Tensiune arterială — țintă < 130/80 mmHg (sau pragul ghidului clinic
                       aplicabil profilului de risc al pacientului)
  Glicemie           — interval țintă conform ghidurilor de monitorizare
                       continuă a glicemiei, raportat ca „timp în interval”

Un prag minim al frecvenței măsurătorilor (de exemplu cel puțin 3 valori pe
săptămână) ar trebui stabilit înainte ca un pacient să fie inclus la numitor,
pentru a evita ca cei care măsoară rar să pară artificial stabili.
```

## Exemplu aplicat

Un program de monitorizare la distanță a hipertensiunii înrolează 600 de pacienți cu manșete celulare de tensiune arterială, de la fiecare dintre care se așteaptă cel puțin 3 măsurători pe săptămână. Dintre aceștia, 540 îndeplinesc pragul minim al frecvenței măsurătorilor pe o perioadă de măsurare de 3 luni și sunt incluși la numitor. Dintre acești 540, 350 au cel puțin 80% dintre valori sub 130/80 mmHg, ceea ce dă o rată de stabilizare a indicatorilor biometrici de 350 / 540 × 100 = 65%. Cei 60 de pacienți excluși pentru măsurători insuficiente sunt raportați separat ca lacună de completitudine a datelor, nu incluși nici la numărător, nici în grupul „nestabilizat”, deoarece statusul lor real de control este cu adevărat necunoscut, nu slab.

## Surse de date și limitări

Valorile provin direct din fluxul de date al dispozitivului conectat, care este mai obiectiv și mult mai frecvent decât măsurarea la clinică, dar erorile de poziționare și de tehnică ale dispozitivului (o manșetă de tensiune de mărime sau poziție incorectă) pot introduce o părtinire sistematică pe care o singură măsurătoare de validare la clinică nu o va depista neapărat. Alegerea intervalului țintă ar trebui să urmeze ghidul clinic actual aplicabil profilului de risc și comorbidităților specifice ale pacientului, nu un singur prag universal, deoarece țintele din ghiduri diferă în funcție de vârsta pacientului, funcția renală și riscul cardiovascular. Un pacient cu frecvență scăzută a măsurătorilor nu ar trebui niciodată numărat tacit ca „stabil” implicit; excluderea lui de la numitor, cu raportarea transparentă a excluderii, este mai onestă decât a-l număra drept controlat sau necontrolat pe baza prea puține date.

## Capcane

- **Tratarea unei singure valori în interval ca stabilizare**: stabilizarea înseamnă control susținut pe o perioadă definită, nu o instantanee; cereți întotdeauna o proporție minimă de valori în interval pe acea perioadă, nu o singură măsurătoare calificantă.
- **Excluderea tacită a celor care măsoară rar, fără a raporta**: pacienții care rareori fac măsurători nu sunt automat stabili sau instabili; excludeți-i transparent de la numitor și raportați rata excluderii ca metrică separată de completitudine a datelor.
- **Ignorarea calibrării dispozitivului și a erorilor de tehnică**: o manșetă prost ajustată sau un dispozitiv necalibrat poate părtini sistematic valorile într-o direcție, ceea ce o rată de stabilizare calculată naiv din datele brute ale dispozitivului nu va depista fără validare periodică.
- **Folosirea unui singur interval țintă universal pentru toți pacienții**: țintele din ghidurile clinice variază în funcție de profilul de risc și comorbiditatea pacientului; aplicarea unui singur prag global unei populații eterogene clinic va clasifica greșit unii pacienți ca stabilizați sau nestabilizați față de ținta lor individualizată reală.

## Surse

- American Heart Association (AHA) / American College of Cardiology (ACC), ținte din ghidurile privind tensiunea arterială și ghiduri privind monitorizarea tensiunii arteriale la domiciliu
- International Diabetes Federation și American Diabetes Association (ADA), ghiduri de consens privind „timpul în interval” în monitorizarea continuă a glicemiei
- Literatura evaluată de specialiști privind monitorizarea biometrică la distanță și controlul susținut al afecțiunii, de exemplu studii publicate în npj Digital Medicine

Vezi și: [rata de îmbunătățire a indicatorilor biometrici](../rata-de-îmbunătățire-a-indicatorilor-biometrici/), metrica conexă a mărimii schimbării față de valoarea inițială, spre deosebire de controlul susținut după atingerea unei ținte.
