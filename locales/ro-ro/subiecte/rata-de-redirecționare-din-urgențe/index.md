# Rata de redirecționare din urgențe

Rata de redirecționare din departamentul de urgență (DU) măsoară ponderea contactelor cu pacienții gestionate de un instrument de triaj digital sau de îngrijire virtuală care ar fi dus plauzibil la o vizită la DU fără acea intervenție, dar au fost în schimb gestionate în siguranță printr-o cale de acuitate mai mică — sfaturi de autoîngrijire, o programare în asistența primară sau o vizită programată la îngrijirea de urgență imediată. Este un subset specific, de mare valoare, al acurateței triajului și direcționării pacienților (vezi acel subiect), concentrat în întregime pe utilizarea evitată a departamentului de urgență, rezultatul cel mai direct legat atât de costul îngrijirii, cât și de degrevarea capacității DU.

## De ce contează

Departamentele de urgență sunt printre cele mai scumpe medii de îngrijire pe întâlnire și sunt frecvent folosite pentru probleme care ar putea fi gestionate în siguranță în altă parte, astfel că abilitatea unui instrument de triaj digital de a redirecționa în siguranță cazurile adecvate departe de DU este una dintre cele mai valoroase capacități ale sale din punct de vedere comercial și operațional — și una dintre cele mai ușor de comunicat unui plătitor sau sistem de sănătate care evaluează rentabilitatea investiției în instrument. Dar redirecționarea are valoare doar dacă este sigură: un instrument care redirecționează agresiv pacienții departe de DU cu prețul ratării unor urgențe reale a optimizat complet partea greșită a compromisului, motiv pentru care rata de redirecționare din urgențe trebuie raportată întotdeauna alături de o metrică de siguranță care urmărește prezentările de urgență ratate sau întârziate în rândul pacienților redirecționați, nu raportată izolat ca o simplă victorie de eficiență.

## Cum se calculează

```
Rata de redirecționare din urgențe = contacte cu pacienți redirecționate în siguranță
                     de la DU către o cale adecvată de acuitate mai mică / total
                     contacte cu pacienți evaluate ca potențial îndreptate spre DU × 100

„Redirecționat în siguranță” necesită confirmarea, prin urmărire sau
date legate din dosarul medical, că starea pacientului nu a necesitat de fapt
îngrijire de urgență într-o fereastră de urmărire definită (de exemplu
72 de ore) — o decizie de redirecționare nu este validată ca sigură doar pentru
că pacientul nu s-a dus imediat după aceea la DU.

Raportați alături:
  Rata urgențelor ratate = pacienți redirecționați care au avut nevoie de
                           îngrijire de urgență în fereastra de urmărire /
                           total pacienți redirecționați × 100
```

## Exemplu aplicat

Un serviciu de triaj digital evaluează 3.000 de contacte cu pacienți într-o lună, pe care algoritmul său clinic le consideră potențial îndreptate spre DU în lipsa unei intervenții. Dintre acestea, 1.800 sunt redirecționate către o cale de acuitate mai mică (o rată de redirecționare de 60%). Urmărirea cohortei redirecționate la 72 de ore, folosind date legate din dosarul medical, constată că 45 dintre cei 1.800 de pacienți redirecționați s-au prezentat ulterior la un DU în acea fereastră (o rată a urgențelor ratate de 45 / 1.800 × 100 = 2,5%). Raportarea cifrei de redirecționare de 60% fără rata de 2,5% a urgențelor ratate ar prezenta doar jumătate din compromisul siguranță-eficiență care determină de fapt dacă comportamentul de redirecționare al instrumentului este calibrat corespunzător.

## Surse de date și limitări

Confirmarea faptului că un pacient redirecționat nu a avut ulterior nevoie de îngrijire de urgență depinde de date legate — fie propriile înregistrări DU ale aceluiași sistem de sănătate, fie un schimb regional de informații medicale, fie un apel sau un sondaj structurat de urmărire a pacientului — iar un program de redirecționare care funcționează fără vreuna dintre aceste surse de date nu își poate valida de fapt siguranța, ci doar o presupune pe baza absenței unei plângeri. Rata adecvată de redirecționare și rata acceptabilă a urgențelor ratate sunt decizii de politică clinică, nu pur statistice, și ar trebui stabilite deliberat de conducerea clinică, nu lăsate să rezulte ca efect secundar al oricărui prag pe care un algoritm de triaj îl folosește implicit. Rata de redirecționare ar trebui raportată pe categorii de simptome sau acuze de prezentare, deoarece ratele adecvate de redirecționare variază enorm în funcție de afecțiune (o tăietură minoră față de durerea în piept justifică praguri de redirecționare foarte diferite).

## Capcane

- **Raportarea ratei de redirecționare fără o metrică de siguranță legată privind urgențele ratate**: o rată ridicată de redirecționare obținută prin subtriajul unor urgențe reale nu este un succes; cele două metrici trebuie raportate întotdeauna împreună.
- **Presupunerea că lipsa unei vizite la DU înseamnă că redirecționarea a fost sigură**: un pacient se poate prezenta la DU al unui alt sistem spitalicesc, nelegat, sau poate avea un rezultat cu adevărat dăunător fără să se prezinte vreodată la vreun DU; validați siguranța prin date legate sau urmărire structurată, nu doar prin absența unei vizite la DU din același sistem.
- **Stabilirea pragului de redirecționare doar pentru a maximiza rata de redirecționare**: un algoritm sau o politică reglat să maximizeze redirecționarea fără o constrângere de siguranță pereche va sacrifica siguranța pacientului pentru o cifră de eficiență mai bine arătată.
- **Combinarea ratei de redirecționare pentru toate tipurile de acuze**: ratele adecvate de redirecționare diferă enorm în funcție de acuza de prezentare; o singură rată combinată nu poate arăta dacă instrumentul funcționează sigur și eficient pentru afecțiunile care contează cel mai mult clinic.

## Surse

- Agency for Healthcare Research and Quality (AHRQ), cercetări privind utilizarea departamentului de urgență și redirecționarea adecvată către alte medii de îngrijire
- NHS England, ghiduri privind NHS 111 și standardele de siguranță și eficacitate ale triajului digital de urgență imediată
- Literatura evaluată de specialiști privind rezultatele redirecționării din DU prin triaj digital și îngrijire virtuală, de exemplu studii publicate în Annals of Emergency Medicine și npj Digital Medicine

Vezi și: [acuratețea triajului și direcționării pacienților](../acuratețea-triajului-și-direcționării-pacienților/), metrica mai largă de acuratețe al cărei subset specific, critic pentru siguranță, este aceasta.
