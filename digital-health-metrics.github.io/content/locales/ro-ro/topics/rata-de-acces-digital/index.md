# Rata de acces digital

Rata de acces digital măsoară ponderea dintr-o populație eligibilă de pacienți care are mijloacele practice de a folosi măcar un produs de sănătate digitală: o conexiune la bandă largă sau o conexiune mobilă de date fiabilă, un dispozitiv cu acces la internet și un cont activ în portalul sau aplicația relevantă pentru pacienți. Este metrica de precondiție pentru fiecare altă măsură de sănătate digitală din această carte — o populație nu se poate înregistra, implica sau beneficia de niciun produs de sănătate digitală pe care structural nu îl poate atinge, oricât de bine proiectat ar fi acel produs.

## De ce contează

Metricile de adoptare și implicare în sănătatea digitală presupun implicit o populație care are deja acces digital, iar raportarea ratelor de adoptare sau implicare fără a stabili mai întâi rata de acces de bază riscă să excludă discret pacienții cei mai puțin probabil să aibă acel acces — care sunt adesea și pacienții cu cea mai mare nevoie de sănătate. HIMSS Digital Health Equity Measurement Framework (DHEMF) și cadre similare tratează accesul digital ca o metrică fundamentală, de echitate de ordinul întâi, tocmai pentru că intervențiile construite fără a ține cont de lacunele de acces tind să întărească, nu să închidă, disparitățile existente în sănătate: o strategie orientată întâi spre telemedicină poate reduce din neatenție accesul la îngrijire pentru pacienții fără o conexiune sau un dispozitiv fiabil, chiar dacă îmbunătățește măsurabil experiența pacienților care aveau deja ambele. Rata de acces digital ar trebui urmărită și raportată pe segmente demografice și geografice, deoarece mediile naționale sau la nivel de organizație maschează în mod curent lacune mari pentru anumite populații.

## Cum se calculează

```
Rata de acces digital = pacienți cu conectivitate la bandă largă/mobilă ȘI un
                         dispozitiv cu acces la internet ȘI un cont activ în
                         portalul sau aplicația pentru pacienți / total populație
                         eligibilă de pacienți × 100

Raportați separat fiecare subcomponentă, precum și rata combinată:
  Rata de conectivitate  = pacienți cu o conexiune fiabilă la internet /
                            populația eligibilă × 100
  Rata de deținere a dispozitivelor = pacienți cu un dispozitiv cu acces la
                            internet / populația eligibilă × 100
  Rata de activare a portalului = pacienți cu un cont activ în portal/aplicație /
                            populația eligibilă × 100 (vezi rata de adoptare
                            a portalului pentru pacienți pentru pâlnia de
                            adoptare mai completă)
```

## Exemplu aplicat

Un sistem de sănătate deservește o populație eligibilă de 40.000 de pacienți. Un sondaj în rândul pacienților și datele de infrastructură indică faptul că 34.000 (85%) au conectivitate fiabilă la bandă largă sau mobilă, 33.000 (82,5%) au un dispozitiv cu acces la internet, iar dintre pacienții care îndeplinesc ambele condiții, 27.000 (67,5% din întreaga populație eligibilă) au un cont activ în portalul pentru pacienți. Dezagregarea pe vârstă arată că pacienții de 65 de ani și peste au o rată combinată de acces digital de doar 48%, față de 78% pentru pacienții sub 65 de ani — un decalaj pe care media de 67,5% la nivel de organizație îl ascunde complet și care ar trebui să informeze direct dacă un anumit serviciu poate fi oferit în siguranță exclusiv digital pentru această populație.

## Surse de date și limitări

Datele privind conectivitatea și deținerea de dispozitive provin de obicei dintr-o combinație de autoraportare a pacientului (prin sondaj sau chestionar de admitere), date de cartografiere a disponibilității benzii largi ale Federal Communications Commission (FCC) sau ale unui organism național echivalent pentru zona geografică a pacientului și date de activare a portalului din propriile sisteme ale organizației. Disponibilitatea benzii largi la nivel de zonă (dacă un furnizor oferă serviciu într-un anumit cod poștal) este un indicator mai slab decât conectivitatea la nivel de gospodărie, deoarece datele de disponibilitate la nivel de zonă nu spun nimic despre dacă un anumit pacient își permite sau a ales să se aboneze la acel serviciu — ratele de acces la nivel de zonă și de gospodărie nu ar trebui confundate. Accesul la dispozitive și conectivitate poate fi, de asemenea, partajat în cadrul unei gospodării (de exemplu un smartphone folosit de mai mulți membri ai familiei), ceea ce datele de sondaj la nivel de gospodărie surprind mai bine decât datele de autentificare în portal la nivel individual.

## Capcane

- **Raportarea doar a unei medii la nivel de organizație**: aceasta ascunde în mod fiabil lacune mari de acces pentru segmentele de pacienți vârstnici, cu venituri mici, din mediul rural sau marginalizați digital în alt mod; dezagregați întotdeauna pe segmente demografice și geografice.
- **Confundarea disponibilității benzii largi la nivel de zonă cu accesul real al gospodăriei**: faptul că un cod poștal este „deservit” de un furnizor de bandă largă nu înseamnă că fiecare gospodărie din el se abonează sau își permite acel serviciu.
- **Tratarea deținerii unui dispozitiv ca un fapt static, o singură dată**: accesul la dispozitive poate fi trecător (un dispozitiv îmbătrânit, un telefon pierdut sau deteriorat, un dispozitiv familial partajat realocat), astfel că rata de acces ar trebui măsurată periodic, nu presupusă stabilă după o evaluare.
- **Proiectarea unei căi exclusiv digitale înainte de a stabili rata de acces a populației afectate**: mutarea unui serviciu în regim exclusiv digital fără a confirma mai întâi rata reală de acces digital a populației țintă riscă să excludă discret exact pacienții cel mai puțin capabili să ajungă la un canal alternativ.

## Surse

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), date naționale privind disponibilitatea benzii largi și echitatea digitală
- Pew Research Center, cercetări privind accesul la internet, bandă largă și dispozitive și tendințele diviziunii digitale între grupuri demografice

Vezi și: [rata de alfabetizare digitală](../rata-de-alfabetizare-digitală/), metrica strâns legată care arată dacă pacienții care au acces îl pot folosi efectiv.
