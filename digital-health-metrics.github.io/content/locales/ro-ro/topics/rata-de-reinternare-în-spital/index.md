# Rata de reinternare în spital

Rata de reinternare în spital este ponderea pacienților externați care sunt reinternați neplanificat în spital într-o fereastră definită după externare — cel mai frecvent 30 de zile. Pentru sănătatea digitală, este metrica cea mai direct legată de economia plătitorilor și de contractele de îngrijire bazată pe valoare: un program de monitorizare la distanță, de urmărire postexternare sau de tranziție digitală a îngrijirii care nu poate arăta un efect credibil asupra reinternărilor este puțin probabil să obțină sprijin continuu de rambursare, oricât de bune ar părea cifrele sale de implicare.

## De ce contează

O reinternare neplanificată este costisitoare, perturbatoare pentru pacient și, în multe sisteme de sănătate, penalizată direct în prezent: scheme precum Hospital Readmissions Reduction Program din SUA reduc plata spitalelor cu rate de reinternare mai mari decât cele așteptate pentru anumite afecțiuni, motiv pentru care spitalele comandă activ programe digitale postexternare și de monitorizare la distanță menite să le reducă. O pondere semnificativă a reinternărilor sunt considerate potențial prevenibile — determinate de instrucțiuni de externare inadecvate, programări de urmărire ratate, neînțelegerea medicației sau deteriorarea simptomelor neabordată, pe care un punct de contact digital bine proiectat o poate depista mai devreme — exact lacuna vizată de instrumentele digitale de îngrijire de tranziție. Rata de reinternare ar trebui citită întotdeauna împreună cu amestecul de cazuri: un program care deservește o populație mai bolnavă și mai complexă va avea o rată de bază structural mai mare decât unul care deservește o populație mai sănătoasă, independent de calitatea programului.

## Cum se calculează

```
Rata de reinternare la 30 de zile = reinternări neplanificate în 30 de zile de la externare
                                    / total externări index × 100

Excludeți de la numărător: reinternările planificate (de exemplu o procedură
programată de urmărire) și transferurile care sunt o continuare a aceluiași
episod de îngrijire, nu o nouă internare.

Ajustați în funcție de risc, acolo unde este posibil, folosind un indice
acceptat de amestec de cazuri sau de comorbiditate, înainte de a compara
ratele între populații de pacienți sau perioade diferite.
```

## Exemplu aplicat

Un spital externează 1.200 de pacienți cu insuficiență cardiacă într-un trimestru. Dintre aceștia, 210 sunt reinternați în 30 de zile, dintre care 15 sunt reinternări planificate pentru o procedură programată și sunt excluse. Rata reinternărilor neplanificate la 30 de zile este (210 − 15) / 1.200 × 100 = 16,25%. Un program de monitorizare la distanță este introdus pentru un subset de 400 dintre acești pacienți (selectați după riscul clinic, nu aleatoriu), iar rata lor de reinternare neplanificată este de 14%, comparativ cu 18% pentru cei 800 de pacienți neînrolați. Deoarece înrolarea s-a bazat pe riscul clinic, nu pe repartizare aleatorie, această diferență este o dovadă sugestivă, nu concludentă, a efectului programului și ar trebui interpretată împreună cu o analiză de ajustare la risc, nu luată ca atare.

## Surse de date și limitări

Datele privind reinternările sunt de obicei extrase din fluxul de admitere-externare-transfer (ADT) al spitalului pentru reinternările în aceeași unitate, dar un pacient reinternat într-un alt spital nu va apărea deloc în acel flux, astfel că urmărirea reinternărilor într-un singur spital subestimează sistematic ratele reale, dacă nu este completată cu date dintr-un schimb regional de informații medicale, date de decontare ale plătitorilor sau baze de date de stat cu toți plătitorii. Atribuirea către un program digital necesită prudență: pacienții care aleg un program voluntar de monitorizare la distanță rareori sunt un eșantion aleatoriu al populației externate, astfel că o comparație naivă a ratelor de reinternare între înrolați și neînrolați va tinde să fie confundată tocmai de efectele de selecție care i-au făcut pe unii pacienți mai înclinați să se înroleze.

## Capcane

- **Compararea ratelor brute, neajustate la risc, între populații**: un program care deservește o populație mai bolnavă va afișa o rată brută de reinternare mai mare decât unul care deservește o populație mai sănătoasă, chiar dacă programul în sine este mai eficace; ajustați întotdeauna la risc înainte de comparație.
- **Subnumărarea reinternărilor în alte unități**: bazarea doar pe datele ADT ale unui singur spital va rata reinternările din altă parte, subestimând rata reală, în special în zonele cu mai multe sisteme spitalicești concurente.
- **Părtinirea de selecție în înrolarea voluntară în program**: pacienții care aleg să se înroleze într-un program digital de urmărire diferă adesea sistematic (în alfabetizare în sănătate, sprijin social sau motivație) de cei care nu o fac, confundând orice comparație naivă înainte/după sau înrolați/neînrolați.
- **Numărarea fiecărei reveniri în aceeași unitate drept reinternare**: o reinternare programată, planificată (de exemplu o a doua etapă planificată a unei proceduri) nu este un semnal al unei externări eșuate și ar trebui exclusă de la numărător, nu amestecată cu revenirile cu adevărat neplanificate.

## Surse

- Centers for Medicare & Medicaid Services (CMS), specificațiile măsurilor Hospital Readmissions Reduction Program și Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), ghiduri privind reducerea reinternărilor evitabile
- Literatura evaluată de specialiști privind intervențiile digitale de monitorizare la distanță și de îngrijire de tranziție pentru reducerea reinternărilor, de exemplu studii publicate în JAMA Network Open și npj Digital Medicine

Vezi și: [acuratețea triajului și direcționării pacienților](../acuratețea-triajului-și-direcționării-pacienților/), deoarece direcționarea inițială necorespunzătoare poate fi ea însăși un factor din aval al internărilor evitabile.
