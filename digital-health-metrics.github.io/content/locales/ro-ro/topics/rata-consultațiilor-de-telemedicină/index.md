# Rata consultațiilor de telemedicină

Rata consultațiilor de telemedicină este ponderea din totalul întâlnirilor unui serviciu care sunt furnizate la distanță, prin video sau telefon, în loc de față în față. Este o metrică a mixului canalelor de furnizare, nu o metrică de activitate: arată cum este furnizată îngrijirea, ceea ce contează pentru planificarea capacității, accesul și caracterul adecvat clinic, independent de cât de multă îngrijire se furnizează în total.

## De ce contează

Proporția îngrijirii furnizate la distanță a schimbat modelul operațional al multor servicii după extinderea rapidă a consultațiilor virtuale în timpul pandemiei de COVID-19, iar organizațiile au nevoie de o modalitate stabilă de a monitoriza dacă această schimbare se menține, revine spre normele de dinaintea pandemiei sau este orientată activ prin politici publice. Telemedicina nu este un substitut uniform pentru o consultație față în față: caracterul adecvat variază în funcție de specialitate, de tipul consultației (o revizuire a medicației se comportă foarte diferit de un examen fizic) și de preferințele pacientului, astfel că rata „potrivită” este o decizie clinică și operațională, nu o țintă de maximizat. Finanțatorii și autoritățile de reglementare folosesc, de asemenea, această rată, alături de măsuri de rezultat și de siguranță, pentru a decide politica de rambursare și pentru a verifica dacă îngrijirea la distanță nu este pur și simplu aplicată cazurilor care trebuie văzute față în față.

## Cum se calculează

```
Rata consultațiilor de telemedicină = întâlniri de telemedicină / (întâlniri de telemedicină + întâlniri față în față) × 100

Raportați separat pe modalități, acolo unde este posibil:
  Rata video     = întâlniri video / total întâlniri × 100
  Rata telefonică = întâlniri exclusiv telefonice / total întâlniri × 100

Numitorul trebuie să includă numai întâlnirile finalizate (vezi capcanele), pentru
un serviciu, o specialitate și o perioadă definite.
```

## Exemplu aplicat

Un serviciu comunitar de sănătate mintală înregistrează 4.000 de contacte ambulatorii finalizate într-un trimestru: 1.200 față în față, 1.600 prin video și 1.200 prin telefon. Rata consultațiilor de telemedicină este (1.600 + 1.200) / 4.000 × 100 = 70%, cu o rată video de 40% și o rată exclusiv telefonică de 30%. Raportarea doar a cifrei combinate de 70% ar ascunde faptul că o pondere mare din „telemedicina” de aici este exclusiv audio, ceea ce implică de obicei un profil de risc clinic și o experiență a pacientului diferite față de video.

## Surse de date și limitări

Tipul întâlnirii este de obicei înregistrat fie ca un câmp structurat în dosarul medical electronic (tipul sau locul vizitei), fie dedus din codurile de facturare, precum un cod de loc al serviciului sau un modificator de telemedicină pe o cerere de decontare. Practica de codificare variază semnificativ între organizații și chiar între clinicieni din aceeași organizație, așa că o comparație a ratelor între locații ar trebui să confirme mai întâi că „telemedicina” este codificată la fel în fiecare. O consultație care începe ca video, dar trece la telefon din cauza unei probleme tehnice, ar trebui codificată consecvent (de regulă ca modalitatea care a purtat cea mai mare parte a conținutului clinic), iar această regulă ar trebui documentată, nu lăsată la aprecierea individuală.

## Capcane

- **Numărarea consultațiilor încercate în loc de cele finalizate**: o programare de telemedicină care nu reușește să se conecteze și este reprogramată nu ar trebui să umfle de două ori numitorul telemedicinei.
- **Tratarea video și a telefonului ca interschimbabile**: au implicații clinice și de echitate diferite (telefonul exclude evaluarea vizuală, dar este mai accesibil pacienților fără smartphone, date fiabile sau un spațiu privat pentru video); raportați-le separat ori de câte ori este posibil.
- **Ignorarea relației cu neprezentarea**: comportamentul de neprezentare diferă adesea în funcție de modalitate; vezi [rata de neprezentare la programări](../rata-de-neprezentare-la-programări/) înainte de a trage concluzii despre „accesul îmbunătățit” doar din creșterea ratei de telemedicină.
- **Tratarea unei rate ridicate ca fiind inerent bună**: pentru unele afecțiuni și tipuri de consultație, o rată adecvată de telemedicină este scăzută prin design clinic, nu printr-un eșec al maturității digitale.

## Surse

- Centers for Medicare & Medicaid Services (CMS), date privind utilizarea telemedicinei în Medicare și publicații de politici
- NHS England, statistici privind activitatea serviciilor ambulatorii și comunitare, inclusiv defalcările prezențelor virtuale/la distanță
- Literatura evaluată de specialiști privind tendințele de utilizare a telemedicinei și rezultatele specifice fiecărei modalități
