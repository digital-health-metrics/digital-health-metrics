# Rata de completare a ePROM

Rata de completare a ePROM măsoară ponderea măsurilor electronice ale rezultatelor raportate de pacient (ePROM, electronic Patient-Reported Outcome Measures) programate — chestionare standardizate și validate, care surprind relatarea proprie a pacientului despre simptome, funcționare sau calitatea vieții, livrate digital, nu pe hârtie — care sunt efectiv completate. Este o metrică de calitate a datelor la fel de mult cât una de implicare: valoarea clinică și de cercetare a unui program PROM depinde în întregime de o rată de completare suficient de mare încât răspunsurile colectate să fie reprezentative pentru întreaga populație înrolată, nu doar pentru subsetul cel mai implicat sau cel mai puțin simptomatic.

## De ce contează

Rezultatele raportate de pacient sunt complementul direct, garantat de pacient, al datelor înregistrate de clinician sau măsurate de dispozitive, surprinzând dimensiuni ale sănătății — durere, funcționare, calitatea vieții — pe care o revizuire a fișei sau o valoare biometrică nu le poate surprinde; digitalizarea colectării PROM există tocmai pentru a face aceste date mai ieftin și mai ușor de colectat la scară mare decât a permis vreodată administrarea pe hârtie. Dar un program PROM cu o rată scăzută de completare riscă o părtinire specifică și gravă: pacienții care se simt mai rău sunt adesea mai puțin înclinați să completeze un chestionar lung, astfel că o rată de completare în scădere poate fi ea însăși un semn timpuriu de avertizare privind înrăutățirea sănătății populației, iar o rată generală scăzută de completare poate face ca răspunsurile colectate să pară mai bune decât experiența reală a populației, pur și simplu pentru că pacienții cei mai simptomatici sunt subreprezentați în ceea ce se completează. De aceea rata de completare ar trebui raportată întotdeauna alături de scorurile PROM propriu-zise, nu tratată ca un detaliu operațional secundar.

## Cum se calculează

```
Rata de completare a ePROM = ePROM completate integral / ePROM trimise sau programate × 100

Raportați separat pentru:
  Rata de completare inițială     (primul chestionar dintr-o secvență
                                   de monitorizare)
  Rata de completare longitudinală (chestionarele ulterioare dintr-o secvență
                                   continuă de monitorizare, care de obicei
                                   scade în timp și ar trebui urmărită ca
                                   tendință, nu ca o singură cifră)

Un chestionar „completat parțial” trebuie definit și raportat separat
atât de „completat integral”, cât și de „nepornit”.
```

## Exemplu aplicat

O clinică de oncologie trimite un ePROM validat privind povara simptomelor la 400 de pacienți înaintea fiecărei vizite lunare de urmărire. În prima lună, 340 de pacienți completează integral chestionarul (rata de completare 85%), 30 îl completează parțial, iar 30 nu îl pornesc. Până în a șasea lună a aceleiași secvențe de monitorizare, răspunsurile complete au scăzut la 260 din aceeași cohortă de 400 de pacienți (65%), un declin longitudinal semnificativ care ar fi ratat complet dacă doar cifra de 85% din prima lună ar fi raportată ca metrică generală statică. Investigarea pacienților care renunță (după severitatea simptomelor, stadiul bolii sau vârstă) poate dezvălui dacă declinul reflectă oboseala față de sondaj, simptome în înrăutățire care fac chestionarul mai greu de completat sau o barieră tehnică de acces.

## Surse de date și limitări

Datele de completare provin din jurnalele proprii de livrare și răspuns ale platformei ePROM, care pot distinge stările „nepornit”, „completat parțial” și „completat integral” — o distincție care ar trebui păstrată și raportată întotdeauna, nu redusă la o cifră binară completat/necompletat, deoarece completarea parțială indică adesea un punct specific din chestionar în care pacienții întâmpină dificultăți sau se dezangajează. Rata de completare ar trebui interpretată alături de modul de livrare a chestionarului (un link într-un mesaj text, o notificare din aplicație sau o metodă de livrare care necesită autentificare în portal), deoarece frecarea livrării afectează ea însăși completarea, independent de conținutul chestionarului sau de afecțiunea de bază a pacientului. Pentru PROM în sine ar trebui folosit întotdeauna un instrument validat (nu un set ad-hoc de întrebări), deoarece rata de completare pentru un instrument nevalidat nu spune nimic fiabil despre utilitatea clinică a datelor rezultate, chiar dacă completarea este ridicată.

## Capcane

- **Tratarea unei rate de completare în scădere doar ca o problemă de livrare**: o scădere longitudinală a completării poate reflecta simptome cu adevărat în înrăutățire (pacienți prea bolnavi pentru a completa sondajul), nu oboseală față de sondaj sau o problemă tehnică, iar această distincție contează enorm pentru interpretarea clinică.
- **Reducerea completării parțiale și integrale la o singură categorie**: un chestionar completat parțial are o calitate a datelor semnificativ diferită de unul completat integral; raportați-le separat și investigați în ce punct al fluxului chestionarului tind pacienții să renunțe.
- **Raportarea ratei de completare fără a raporta riscul de părtinire a răspunsurilor**: o rată moderată de completare ar trebui să declanșeze investigarea dacă respondenții diferă sistematic (ca severitate a simptomelor, vârstă, alfabetizare digitală) de nerespondenți, deoarece scorurile PROM calculate doar pe respondenți pot denatura imaginea întregii populații.
- **Folosirea unui chestionar nevalidat sau făcut în casă**: rata de completare nu înseamnă nimic ca semnal de calitate a datelor dacă instrumentul completat nu a fost el însuși validat clinic pentru afecțiunea și populația măsurate.

## Surse

- International Consortium for Health Outcomes Measurement (ICHOM), dezvoltarea seturilor standard și ghiduri de implementare PROM
- U.S. Food and Drug Administration (FDA), ghiduri privind măsurile rezultatelor raportate de pacient în studiile clinice și în dosarele de reglementare
- Literatura evaluată de specialiști privind implementarea ePROM și ratele de completare, de exemplu studii publicate în Quality of Life Research și Journal of Medical Internet Research (JMIR)

Vezi și: [scorul Net Promoter al pacienților](../scorul-net-promoter-al-pacienților/), o metrică conexă, dar distinctă, raportată de pacient, care măsoară satisfacția, nu rezultatul clinic.
