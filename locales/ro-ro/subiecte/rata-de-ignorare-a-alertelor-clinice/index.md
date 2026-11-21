# Rata de ignorare a alertelor clinice

Rata de ignorare a alertelor clinice (clinical alert override rate) măsoară ponderea alertelor de suport decizional clinic (CDS), precum avertismentele privind interacțiunile medicamentoase, alertele de alergie și verificările intervalului de doze generate de un sistem de introducere computerizată a comenzilor medicale (CPOE), pe care un clinician le respinge sau le ignoră în loc să acționeze conform lor. Este semnalul cantitativ standard folosit pentru a detecta și gestiona „oboseala față de alerte”: tendința bine documentată a clinicienilor de a deveni desensibilizați la alerte odată ce volumul avertismentelor de valoare redusă devine copleșitor.

## De ce contează

Ratele de ignorare publicate pentru alertele de interacțiuni medicamentoase variază de obicei de la aproximativ jumătate până la peste nouăzeci la sută, iar o rată ridicată nu este automat un eșec de siguranță: multe alerte întreruptive se declanșează pentru interacțiuni nesemnificative clinic în context sau repetă o alertă la care clinicianul a reacționat deja mai devreme în același set de comenzi, astfel că un sistem bine reglat declanșează în mod deliberat mai puține alerte, de valoare mai mare, în loc să încerce să aducă rata de ignorare la zero. Ceea ce contează cu adevărat pentru siguranță este tendința în timp, distribuția pe niveluri de severitate și dacă clinicienii documentează un motiv atunci când ignoră o alertă de severitate mare; o rată de ignorare în creștere pentru interacțiuni de severitate mare, bine documentate, este o îngrijorare reală de guvernanță chiar și atunci când media tuturor alertelor pare stabilă.

## Cum se calculează

```
Rata de ignorare = alerte ignorate / total alerte declanșate × 100

Segmentați după:
  - nivelul de severitate (de exemplu contraindicat, major, moderat)
  - tipul alertei (interacțiune medicament-medicament, alergie, terapie duplicată, interval de doze)
  - dacă a fost documentat un motiv al ignorării

O „rată de ignorare documentată” urmărește ponderea ignorărilor care au
o justificare înregistrată, ceea ce este o măsură de guvernanță în sine.
```

## Exemplu aplicat

Sistemul CPOE al unui spital declanșează 10.000 de alerte de interacțiune medicament-medicament într-o lună, dintre care 8.700 sunt ignorate, ceea ce dă o rată generală de ignorare de 87%. Segmentarea după severitate arată că, dintre 500 de alerte „contraindicat”, 60 sunt ignorate (12%), în timp ce dintre 6.000 de alerte „moderat”, 5.700 sunt ignorate (95%). Cifra nivelului moderat este în linii mari consecventă cu reperele publicate și nu constituie, prin ea însăși, un motiv de îngrijorare; cifra nivelului contraindicat justifică revizuirea individuală a cazurilor, iar faptul că doar 340 dintre cele 500 de ignorări de la acel nivel au un motiv documentat este constatarea de guvernanță cea mai acționabilă.

## Surse de date și limitări

Jurnalul de audit al dosarului medical electronic sau modulul de alertare al furnizorului CDS înregistrează fiecare eveniment de alertă declanșată și de răspuns la alertă, inclusiv dacă clinicianul a introdus o justificare în text liber sau structurată. Compararea ratelor de ignorare între organizații, sau chiar între departamente din aceeași organizație, necesită verificarea faptului că seturile de reguli de alertare și nivelurile de severitate sunt aceleași; un spital cu un set de reguli reglat agresiv va afișa o rată de ignorare mai scăzută din motive care nu au nicio legătură cu comportamentul clinicienilor.

## Capcane

- **Tratarea ratei brute de ignorare ca un singur scor de siguranță**: amestecă ignorările bine justificate ale alertelor de valoare redusă cu ignorările nesigure ale unor interacțiuni cu adevărat periculoase; segmentați întotdeauna după severitate.
- **Lipsa înregistrării motivului ignorării**: fără un motiv documentat, este imposibil să distingi „această alertă a fost greșită” de „această alertă era corectă, iar clinicianul a luat o decizie nesigură”, adică exact distincția care contează pentru siguranța pacientului.
- **Inflația regulilor de alertare în timp**: adăugarea de tot mai multe alerte pentru „a fi în siguranță”, fără eliminarea celor de valoare redusă, este cauza directă a creșterii ratelor de ignorare și a oboselii față de alerte; guvernanța alertelor ar trebui să includă revizuirea regulată și retragerea regulilor cu performanță slabă, nu doar monitorizarea.
- **Compararea ratelor între sisteme cu design diferit al întreruperii**: o alertă întreruptivă, cu blocare, produce un comportament de ignorare diferit de una pasivă, fără blocare, așa că cele două nu sunt metrici direct comparabile.

## Surse

- Literatura evaluată de specialiști privind oboseala față de alertele de suport decizional clinic, publicată pe larg în reviste precum JAMIA și npj Digital Medicine
- ONC / HealthIT.gov, ghiduri de siguranță a IT-ului medical privind suportul decizional clinic
- Institute for Safe Medication Practices (ISMP), ghiduri privind proiectarea și guvernanța alertelor CDS
