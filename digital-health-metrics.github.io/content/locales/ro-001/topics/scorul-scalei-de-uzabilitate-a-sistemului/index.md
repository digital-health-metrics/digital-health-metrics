# Scorul Scalei de Uzabilitate a Sistemului

Scorul Scalei de Uzabilitate a Sistemului (System Usability Scale, SUS) este un chestionar standardizat cu 10 itemi, folosit pentru a cuantifica cât de ușor de utilizat este un software, producând un singur scor de la 0 la 100 care poate fi comparat cu norme consacrate din industrie. Spre deosebire de Net Promoter Score, care măsoară disponibilitatea de a recomanda, sau de măsurile rezultatelor raportate de pacient, care măsoară starea clinică sau funcțională, SUS măsoară un singur lucru specific: cât de ușor se învață și se folosește software-ul în sine, fie de către pacienți, fie de către personalul clinic.

## De ce contează

Un instrument de sănătate digitală poate avea dovezi clinice solide și un caz de afaceri convingător și totuși să eșueze în practică deoarece pacienții sau clinicienii găsesc interfața confuză, lentă sau frustrantă — iar deoarece SUS este un instrument validat, larg utilizat, cu decenii de date de benchmarking publicate din diverse industrii, el permite unei echipe de sănătate digitală să compare uzabilitatea propriului produs cu o distribuție cunoscută, în loc să se bazeze pe impresii informale sau pe plângeri anecdotice. SUS este deliberat agnostic față de tehnologie și rapid de administrat (de obicei sub cinci minute), ceea ce îl face practic de rulat în mod repetat pe parcursul iterațiilor de design, spre deosebire de un studiu complet de uzabilitate sau de un studiu clinic formal. Deoarece defecțiunile de uzabilitate orientate către clinicieni sunt un factor contributiv documentat la epuizarea profesională (vezi rata de epuizare profesională a medicilor), iar defecțiunile de uzabilitate orientate către pacienți sunt un factor contributiv documentat la abandon și la rezultate slabe privind alfabetizarea digitală (vezi rata de alfabetizare digitală), SUS funcționează ca un semnal de avertizare timpurie, de cost redus, care poate surprinde o problemă de design înainte să apară în acele metrici ulterioare, mai consecvente.

## Cum se calculează

```
Scor SUS = ((suma scorurilor itemilor impari − 5) +
            (25 − suma scorurilor itemilor pari)) × 2,5

Rezultatul este un singur scor de la 0 la 100 (nu un procent, în ciuda
scalei, deoarece nu reprezintă „procent de răspunsuri corecte” sau similar).

Interpretarea publicată a reperelor (Bangor et al.):
  Peste 80  — uzabilitate excelentă
  68        — medie, pe baza normei largi din industrie
  Sub 51    — uzabilitate slabă, care justifică investigarea
```

## Exemplu aplicat

O platformă de telemedicină administrează chestionarul SUS standard cu 10 itemi la 150 de pacienți după prima lor consultație video. Scorul SUS mediu calculat pentru toți respondenții este 74. Comparat cu media din industrie, larg citată, de 68, aceasta indică o uzabilitate peste medie pentru această populație de pacienți și acest caz de utilizare, deși încă semnificativ sub pragul „excelent” de 80, care ar sugera puține bariere de uzabilitate rămase. Segmentarea acelorași 150 de răspunsuri după vârstă arată un scor mediu de 81 pentru pacienții sub 50 de ani și de 62 pentru pacienții de 65 de ani și peste — un decalaj care indică o problemă specifică, abordabilă, de uzabilitate pentru pacienții vârstnici, nu o problemă generală de uzabilitate a produsului, și unul pe care o medie unică, combinată, l-ar fi ascuns.

## Surse de date și limitări

Datele SUS provin direct de la pacienți sau clinicieni care completează chestionarul standardizat cu 10 itemi, iar instrumentul trebuie administrat exact așa cum a fost validat (aceiași 10 itemi, aceeași scală de acord în 5 puncte, aceeași formulă de scorare) pentru ca scorul rezultat să fie comparabil cu reperele publicate; o versiune modificată sau prescurtată a chestionarului, oricât de bine intenționată, produce un scor care nu poate fi interpretat fiabil față de distribuția standard de referință. SUS măsoară uzabilitatea percepută, care se corelează cu succesul obiectiv al finalizării sarcinilor, dar nu este identică cu acesta (vezi rata de alfabetizare digitală pentru o măsură bazată pe finalizarea sarcinilor); un produs poate avea un scor SUS bun de la pacienți care nu au încercat funcțiile mai complexe, așa că asocierea SUS cu date obiective privind finalizarea sarcinilor oferă o imagine mai completă decât oricare dintre ele separat. Momentul răspunsului contează: administrarea SUS imediat după un incident specific frustrant (o conectare eșuată, un pas confuz), față de după o sesiune lină, poate deplasa scorurile independent de uzabilitatea generală a produsului.

## Capcane

- **Modificarea itemilor sau a scorării chestionarului standard**: chiar și mici schimbări de formulare sau de scală invalidează compararea cu distribuția de referință publicată, bine stabilită; folosiți instrumentul standard cu 10 itemi exact așa cum a fost validat.
- **Raportarea doar a scorului mediu, fără segmentare**: uzabilitatea variază adesea substanțial în funcție de vârsta utilizatorului, alfabetizarea digitală sau rol (pacient față de clinician); segmentați raportarea pentru a găsi lacune specifice, abordabile, de uzabilitate, pe care o medie unică le ascunde.
- **Tratarea SUS ca măsură a eficacității clinice**: SUS măsoară uzabilitatea în mod specific, nu rezultatul clinic sau satisfacția față de îngrijire; un instrument foarte ușor de utilizat poate totuși să nu îmbunătățească rezultatele clinice, iar acestea nu ar trebui confundate sau substituite una cu alta.
- **Administrarea sondajului doar după sesiuni neobișnuit de line sau neobișnuit de frustrante**: momentul și contextul administrării pot distorsiona scorul; administrați în mod consecvent pe un eșantion reprezentativ de sesiuni reale, nu doar pe cele convenabile sau alese selectiv.

## Surse

- Brooke, J., „SUS: A Quick and Dirty Usability Scale”, instrumentul original publicat
- Bangor, Kortum și Miller, cercetări publicate de benchmarking SUS care stabilesc intervalele de interpretare a scorului larg citate
- Literatura evaluată de specialiști privind utilizarea SUS în evaluarea uzabilității în sănătatea digitală și telemedicină, de exemplu studii publicate în JMIR Human Factors

Vezi și: [scorul Net Promoter al pacienților](../scorul-net-promoter-al-pacienților/), o metrică conexă, dar distinctă, raportată de pacient, care măsoară satisfacția și loialitatea, nu uzabilitatea software-ului în mod specific.
