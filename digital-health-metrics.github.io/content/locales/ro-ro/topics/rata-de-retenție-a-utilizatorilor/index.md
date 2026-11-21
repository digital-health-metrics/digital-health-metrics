# Rata de retenție a utilizatorilor

Rata de retenție a utilizatorilor este ponderea utilizatorilor activi într-o perioadă de pornire care rămân activi într-o perioadă ulterioară, iar inversa ei, rata de abandon (churn), este ponderea celor care încetează cu totul să folosească produsul. În timp ce rata de adoptare a portalului pentru pacienți (vezi acel subiect) măsoară dacă un pacient activează vreodată în mod semnificativ un produs de sănătate digitală, retenția măsoară dacă continuă să îl folosească — iar pentru orice produs de sănătate digitală de tip abonament sau de îngrijire continuă, retenția este de obicei singura metrică cel mai strâns legată atât de impactul clinic, cât și de sustenabilitatea comercială.

## De ce contează

Un produs de sănătate digitală care nu poate reține utilizatori nu poate oferi un beneficiu clinic susținut, oricât de bune ar fi cifrele inițiale de adoptare sau activare: un instrument de gestionare a unei afecțiuni cronice folosit două săptămâni și apoi abandonat este puțin probabil să miște un rezultat biometric care depinde de luni de schimbare susținută a comportamentului. Retenția este, de asemenea, una dintre cele mai importante metrici comerciale pe care o companie de sănătate digitală le raportează investitorilor și plătitorilor, deoarece curbele de retenție (forma scăderii în timp, nu doar un singur procent de retenție) arată dacă produsul a găsit un tipar de utilizare cu adevărat sustenabil sau doar captează un interes inițial alimentat de noutate, care se estompează previzibil. O curbă de retenție care se aplatizează după o scădere inițială (pacienții care trec de prima lună tind să rămână) este un semnal foarte diferit, și mult mai sănătos, decât una care continuă să scadă constant, fără un prag.

## Cum se calculează

```
Rata de retenție (perioada N) = utilizatori activi în perioada N care au fost
                                activi și în perioada cohortei de pornire /
                                utilizatori din perioada cohortei de pornire × 100

Rata de abandon = 1 − rata de retenție (pentru aceeași perioadă)

Raportați ca o curbă de retenție pe cohorte (retenția la ziua/săptămâna/luna 1, 2, 3…),
nu ca o cifră punctuală, deoarece o singură instantanee amestecă
utilizatorii recent înscriși (care nu au avut încă ocazia să abandoneze) cu
cei vechi.
```

## Exemplu aplicat

O aplicație de sănătate digitală înrolează o cohortă de 1.000 de utilizatori noi în ianuarie. Până la sfârșitul lunii 1, 640 dintre cei 1.000 inițiali sunt încă activi (retenția în luna 1: 64%). Până la sfârșitul lunii 3, 410 rămân activi (retenția în luna 3: 41%). Până în luna 6, 380 rămân activi (retenția în luna 6: 38%). Forma acestei curbe — o scădere inițială abruptă urmată de o aplatizare între lunile 3 și 6 — sugerează că produsul păstrează un nucleu stabil de utilizatori odată ce aceștia trec de un prag inițial de adoptare, ceea ce este un semnal semnificativ diferit și mai încurajator decât dacă scăderea din luna 3 până în luna 6 ar fi continuat în același ritm ca în lunile 1-3.

## Surse de date și limitări

Retenția se calculează din jurnalele de evenimente de autentificare sau de activitate ale produsului, definind „activ” în mod consecvent (de exemplu, cel puțin o sesiune calificantă în perioadă) pentru fiecare cohortă comparată. Cohortele ar trebui comparate pe baze echivalente — aceeași definiție de pornire a „activului”, aceeași lungime a ferestrei de observare — deoarece chiar și diferențe mici de definiție (luni de 30 de zile față de 28 de zile sau un prag „activ” mai strict față de unul mai lax) pot deplasa un procent raportat de retenție cu mai multe puncte, fără nicio diferență reală în comportamentul utilizatorilor. Efectele sezoniere sunt frecvente în aplicațiile de sănătate legate de rezoluțiile de Anul Nou sau de anumite perioade de conștientizare a sănătății, astfel că o comparație a cohortelor de la an la an este de obicei mai informativă decât compararea cohortelor adiacente din perioade diferite ale anului.

## Capcane

- **Raportarea unei singure instantanee de retenție în loc de o curbă**: o singură cifră „X% dintre utilizatori sunt încă activi”, fără forma scăderii în timp, nu poate distinge un produs care se stabilizează (sănătos) de unul aflat în declin continuu (nesănătos).
- **Schimbarea definiției „activului” între perioadele de raportare**: relaxarea definiției unui utilizator activ (de exemplu numărând o deschidere pasivă a aplicației în loc de o acțiune finalizată) poate face ca retenția să pară că se îmbunătățește, deși utilizarea reală nu s-a schimbat deloc.
- **Ignorarea sezonalității cohortelor**: compararea retenției unei cohorte din ianuarie (adesea umflată de înrolările din rezoluțiile de Anul Nou, care aduc în medie o cohortă mai puțin motivată) cu o cohortă achiziționată în altă perioadă a anului poate duce la concluzii înșelătoare privind tendința.
- **Amestecarea cohortelor organice cu cele achiziționate contra cost**: utilizatorii achiziționați prin canale diferite rețin adesea foarte diferit; amestecarea lor într-o singură cifră agregată de retenție poate ascunde o problemă de retenție specifică unui canal.

## Surse

- Literatura evaluată de specialiști privind implicarea și abandonul în aplicațiile de sănătate digitală, de exemplu studii publicate în Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, ghiduri de bune practici privind măsurarea implicării și a retenției pentru terapiile digitale
- Rapoarte de benchmarking din industrie privind retenția în aplicațiile de sănătate mobilă, de la platforme de analitică și organizații de cercetare de piață în sănătatea digitală

Vezi și: [rata de constanță a implicării pacienților](../rata-de-constanță-a-implicării-pacienților/), care măsoară calitatea implicării în rândul utilizatorilor reținuți, spre deosebire de faptul că rămân sau nu înrolați.
