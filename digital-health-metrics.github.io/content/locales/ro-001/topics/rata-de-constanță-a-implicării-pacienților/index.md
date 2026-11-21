# Rata de constanță a implicării pacienților

Rata de constanță a implicării pacienților măsoară cât de regulat interacționează un pacient înrolat cu un produs de sănătate digitală în timp — de exemplu înregistrând alimentele sau simptomele, notând activitatea fizică sau vizualizând datele de sănătate — și nu doar dacă l-a folosit vreodată. Este o metrică longitudinală, distinctă de o numărătoare punctuală a utilizării active: doi pacienți pot avea aceeași stare „a folosit aplicația luna aceasta”, dar unul înregistrează constant în fiecare zi, iar celălalt înregistrează o dată și dispare trei săptămâni, iar numai metrica de constanță îi diferențiază.

## De ce contează

Interacțiunea susținută și regulată cu un instrument de sănătate digitală este unul dintre cei mai fiabili indicatori anticipativi ai beneficiului clinic, în special pentru afecțiunile dependente de comportament, precum diabetul, gestionarea greutății și sănătatea mintală, unde valoarea instrumentului provine din obiceiul pe care îl susține, nu dintr-o singură sesiune. Un produs poate raporta un număr sănătos de utilizatori activi lunar, deși deservește de fapt o populație care se conectează o dată și se îndepărtează, deoarece utilizarea activă lunară este un prag scăzut care nu spune nimic despre tiparul de utilizare din cursul lunii; metricile de constanță surprind acest lucru într-un mod în care simplele numărători de activitate nu pot. Deoarece constanța este, de asemenea, unul dintre lucrurile mai greu de susținut pe parcursul lunilor, nu al săptămânilor, ea este un semnal mai onest despre calitatea produsului și potrivirea clinică decât cifrele de implicare pe ferestre scurte, predispuse la efecte de noutate imediat după integrare.

## Cum se calculează

```
Rata de constanță a implicării = săptămâni cu cel puțin o interacțiune calificantă
                                 / total săptămâni de înrolare × 100

O „interacțiune calificantă” trebuie definită explicit și consecvent
(de exemplu o intrare de jurnal alimentar, o verificare a simptomelor sau o
sincronizare finalizată a activității) —
niciodată un eveniment pasiv, precum deschiderea aplicației fără nicio acțiune înregistrată.

Raportați ca distribuție, nu doar ca medie a populației:
  de exemplu ponderea pacienților cu ≥ 80% constanță săptămânală,
             ponderea cu 50-79%, ponderea cu < 50%
```

## Exemplu aplicat

O aplicație de coaching nutrițional înrolează un pacient pentru 12 săptămâni. Pacientul înregistrează cel puțin o intrare alimentară calificantă în 9 dintre cele 12 săptămâni, ceea ce dă o rată individuală de constanță a implicării de 9 / 12 × 100 = 75%. În întreaga cohortă a aplicației, de 2.000 de pacienți înrolați cel puțin 12 săptămâni, 600 de pacienți (30%) mențin o constanță săptămânală de ≥ 80%, 900 (45%) se situează în intervalul 50-79%, iar 500 (25%) se situează sub 50%. Raportarea doar a mediei cohortei (care ar putea ajunge la aproximativ 65%) ar ascunde faptul că un sfert întreg dintre pacienți abia se implică — un segment care merită investigat separat, nu diluat într-o medie generală.

## Surse de date și limitări

Datele de constanță provin din jurnalele de evenimente ale produsului (intrări alimentare, sincronizări de activitate, verificări), iar definiția unei „interacțiuni calificante” are un efect enorm asupra ratei rezultate — o definiție permisivă (orice deschidere a aplicației) va arăta întotdeauna mai bine decât una strictă (o intrare de jurnal finalizată și semnificativă), astfel că definiția folosită trebuie indicată clar alături de orice cifră raportată. Datele sincronizate automat (de exemplu un tracker de fitness conectat care sincronizează activitatea în fundal) ar trebui raportate separat de datele înregistrate manual, deoarece sincronizarea automată poate umfla constanța aparentă fără a reflecta vreun efort activ al pacientului sau vreo implicare cu îndrumarea oferită de produs.

## Capcane

- **Confundarea deschiderilor aplicației cu implicarea semnificativă**: o deschidere pasivă a aplicației (de exemplu declanșată de o notificare push) nu este același lucru cu o intrare alimentară înregistrată sau o verificare finalizată; definiți și raportați numai interacțiunile calificante.
- **Raportarea doar a mediei populației**: o rată medie de constanță cu aspect sănătos poate ascunde o populație bimodală de pacienți foarte implicați și aproape complet neimplicați; raportați distribuția pe intervale de constanță, nu doar media.
- **Ignorarea numitorului privind durata înrolării**: compararea ratelor de constanță între pacienți înrolați pentru perioade foarte diferite, fără a ține cont de durata înrolării, va favoriza grupul care a avut o fereastră de măsurare mai scurtă, mai ușor de susținut.
- **Sincronizarea automată în fundal care umflă rata**: un flux de date de la un dispozitiv purtabil, sincronizat pasiv, poate face ca un pacient neimplicat să pară constant activ, fără nicio schimbare reală de comportament sau implicare cu produsul din partea lui.

## Surse

- Literatura evaluată de specialiști privind tiparele de implicare în sănătatea digitală și relația lor cu rezultatele clinice, de exemplu studii publicate în Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), ghiduri privind calitatea datelor de sănătate generate de pacient și măsurarea implicării
- Digital Therapeutics Alliance, ghiduri de bune practici privind măsurarea implicării și a rezultatelor pentru terapiile digitale

Vezi și: [rata de retenție a utilizatorilor](../rata-de-retenție-a-utilizatorilor/), metrica strâns legată care arată dacă pacientul rămâne înrolat, spre deosebire de cât de constant se implică cât timp este înrolat.
