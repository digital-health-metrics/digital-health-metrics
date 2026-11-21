# Rata de disponibilitate a dispozitivelor

Rata de disponibilitate a dispozitivelor măsoară ponderea timpului de monitorizare programat în care un dispozitiv de sănătate conectat — un senzor de monitorizare la distanță a pacientului, un dispozitiv purtabil sau o unitate de telemedicină la domiciliu — este efectiv online, transmite date și funcționează corect, nu offline, deconectat sau defect. Este metrica fundamentală de infrastructură aflată sub orice program de monitorizare la distanță sau cu dispozitive conectate: o alertă clinică, o tendință biometrică sau o cifră de implicare calculată de la un dispozitiv care a fost frecvent offline este la fel de fiabilă ca și conectivitatea din spatele ei.

## De ce contează

Întreaga propunere de valoare clinică a unui program de monitorizare la distanță a pacientului depinde de captarea continuă sau aproape continuă a datelor; un dispozitiv cu disponibilitate slabă creează lacune tăcute în imaginea clinică a pacientului, care pot fi confundate cu stabilitate (nicio alertă pentru că nu există date, nu pentru că nimic nu s-a schimbat), în loc să fie identificate corect ca un eșec al monitorizării. Disponibilitatea dispozitivelor este, de asemenea, un indicator anticipativ al costului programului și al experienței pacientului: un dispozitiv care își pierde frecvent conexiunea generează apeluri de suport, frustrarea pacientului și potențial acțiuni clinice inutile de contactare pentru a verifica dacă o lacună de date reflectă un eveniment clinic real sau pur și simplu o defecțiune tehnică. Deoarece eșecurile de disponibilitate a dispozitivelor sunt frecvent atribuibile infrastructurii pe care organizația o controlează (un gateway celular configurat prost, o acoperire Wi-Fi slabă în casa pacientului, o flotă de dispozitive întreținută insuficient), nu pacientului, această metrică aparține în mod direct furnizorului și echipei de operațiuni tehnice, nu ar trebui amestecată nediscriminatoriu în metricile de implicare a pacientului.

## Cum se calculează

```
Rata de disponibilitate a dispozitivelor = timpul în care dispozitivul a fost online și a transmis
                      date valide / timp total de monitorizare programat × 100

Segmentați cauzele rădăcină ale indisponibilității, acolo unde datele o permit:
  Defecțiune de partea dispozitivului (baterie, defect hardware, blocare firmware)
  Defecțiune de conectivitate (cădere celulară/Wi-Fi/VPN)
  Factori de partea pacientului (dispozitiv oprit, mutat în afara razei)

Parametri tehnici de suport de urmărit alături de disponibilitate:
  Utilizarea medie a CPU, utilizarea memoriei și nivelul bateriei per dispozitiv
  Timpul mediu între defecțiunile de conectivitate
  Timpul mediu de reconectare după o cădere
```

## Exemplu aplicat

Un program de monitorizare cardiacă la distanță implementează 1.000 de dispozitive conectate, de la fiecare dintre care se așteaptă o transmitere continuă. Pe parcursul unei luni de 30 de zile (720 de ore de monitorizare programată per dispozitiv), flota înregistrează combinat 705.600 de ore online efective față de 720.000 de ore programate, ceea ce dă o rată de disponibilitate a dispozitivelor la nivel de flotă de 705.600 / 720.000 × 100 = 98%. Analiza cauzelor rădăcină ale celor 14.400 de ore de indisponibilitate arată că 60% sunt atribuibile căderilor de conectivitate celulară concentrate într-o anumită regiune rurală deservită, 25% dispozitivelor cu baterii îmbătrânite semnalate pentru înlocuire și 15% pacienților care își opresc temporar dispozitivul. Această defalcare indică două intervenții clare și diferite — o remediere a conectivității în regiunea afectată și un program proactiv de înlocuire a bateriilor — pe care o singură cifră agregată de disponibilitate nu le-ar fi distins.

## Surse de date și limitări

Datele de disponibilitate provin din sistemul de gestionare a dispozitivelor și de telemetrie al producătorului dispozitivului sau al furnizorului platformei, care înregistrează evenimente de conexiune și de puls („heartbeat”) per dispozitiv; organizația ar trebui să confirme exact ce numără furnizorul drept „online” (un dispozitiv se poate raporta ca fiind conectat la o rețea, în timp ce nu reușește să transmită date clinice valide, ceea ce ar trebui să conteze ca indisponibilitate în scopuri clinice, chiar dacă panoul de bord al furnizorului îl raportează ca fiind conectat). Disponibilitatea ar trebui raportată pe cohortă de dispozitive sau pe zonă geografică acolo unde volumul o permite, deoarece calitatea conectivității este adesea grupată geografic (acoperire celulară rurală, Wi-Fi în clădiri mai vechi), nu distribuită uniform în populația de pacienți, iar o cifră agregată la nivel de flotă poate masca o problemă regională severă, abordabilă.

## Capcane

- **Confundarea conexiunii la rețea cu transmiterea de date valide**: un dispozitiv poate părea „conectat” pe panoul de bord al furnizorului, în timp ce nu reușește să transmită date clinice utilizabile; definiți și măsurați disponibilitatea față de primirea efectivă de date valide, nu doar față de conectivitatea brută la rețea.
- **Raportarea doar a unei medii la nivel de flotă**: poate ascunde o problemă severă de indisponibilitate, specifică geografic sau unei cohorte de dispozitive, pe care o medie țintită ar dezvălui-o și care are o remediere specifică, abordabilă.
- **Nedistingerea cauzei rădăcină a indisponibilității**: indisponibilitatea de partea dispozitivului, de conectivitate și de partea pacientului necesită fiecare o intervenție complet diferită; un singur procent de indisponibilitate fără segmentare pe cauze rădăcină nu poate fi acționat.
- **Tratarea implicită a unei lacune de date drept stabilitate clinică**: un flux de date lipsă de la un dispozitiv offline ar trebui să declanșeze o verificare tehnică a conectivității, nu să fie interpretat tacit drept „lipsa veștilor înseamnă vești bune” pentru starea clinică a pacientului.

## Surse

- Continua Design Guidelines / Personal Connected Health Alliance, standarde tehnice de interoperabilitate pentru dispozitive de sănătate conectate
- ONC / HealthIT.gov, ghiduri privind implementarea programelor de monitorizare la distanță a pacientului și cerințele tehnice
- Literatura evaluată de specialiști privind fiabilitatea dispozitivelor de monitorizare la distanță a pacientului și completitudinea datelor, de exemplu studii publicate în npj Digital Medicine

Vezi și: [acuratețea triajului și direcționării pacienților](../acuratețea-triajului-și-direcționării-pacienților/), care depinde de primirea unor date complete și fiabile de la dispozitive pentru a lua în primul rând o decizie corectă de triaj.
