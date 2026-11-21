# Ocena lestvice uporabnosti sistema (SUS)

Ocena lestvice uporabnosti sistema (System Usability Scale, SUS) je standardiziran vprašalnik z 10 postavkami, s katerim količinsko opredelimo, kako uporabna je programska oprema, in ki da eno samo oceno od 0 do 100, ki jo je mogoče primerjati z uveljavljenimi industrijskimi normami. Za razliko od neto ocene priporočitve (NPS), ki meri pripravljenost za priporočilo, ali od izidov, ki jih sporočijo pacienti in merijo klinični ali funkcionalni status, SUS meri eno samo stvar: kako enostavno se je programske opreme same naučiti in jo uporabljati, bodisi za paciente bodisi za klinično osebje.

## Zakaj je pomembna

Digitalno zdravstveno orodje ima lahko močne klinične dokaze in prepričljivo poslovno utemeljitev, a v praksi vseeno odpove, ker pacienti ali zdravniki vmesnik najdejo zmeden, počasen ali frustrirajoč za uporabo – in ker je SUS validiran, široko uporabljen instrument z desetletji objavljenih primerjalnih podatkov iz različnih panog, ekipi za digitalno zdravje omogoča primerjati uporabnost lastnega izdelka z znano porazdelitvijo namesto zanašanja na neformalne vtise ali anekdotične pritožbe. SUS je namerno tehnološko nevtralen in ga je hitro izvesti (običajno v manj kot petih minutah), zato ga je praktično izvajati ponavljajoče skozi iteracije zasnove, za razliko od polne študije uporabnosti ali formalnega kliničnega preskušanja. Ker so napake uporabnosti za zdravnike dokumentiran prispevek k izgorelosti (glej stopnjo izgorelosti zdravnikov), napake uporabnosti za paciente pa dokumentiran prispevek k opustitvi in slabim izidom digitalne pismenosti (glej stopnjo digitalne pismenosti), SUS deluje kot zgodnje opozorilo in poceni signal uporabnosti, ki lahko ujame težavo zasnove, preden se pokaže v teh posledičnejših nadaljnjih kazalnikih.

## Kako se izračuna

```
Ocena SUS = ((vsota ocen lihih postavk − 5) +
             (25 − vsota ocen sodih postavk)) × 2,5

Rezultat je ena sama ocena od 0 do 100 (ne odstotek, kljub lestvici,
saj ne predstavlja »odstotka pravilnih« ali podobnega).

Objavljena razlaga primerjalnih vrednosti (Bangor in sod.):
  Nad 80  — odlična uporabnost
  68      — povprečje, na podlagi široke industrijske norme
  Pod 51  — slaba uporabnost, ki zahteva raziskavo
```

## Izračunani primer

Platforma za telezdravje standardni 10-postavkovni vprašalnik SUS izvede pri 150 pacientih po njihovem prvem video obisku. Izračunana povprečna ocena SUS med vsemi anketiranci je 74. V primerjavi z splošno navedenim industrijskim povprečjem 68 to kaže nadpovprečno uporabnost za to specifično populacijo pacientov in primer uporabe, čeprav še vedno občutno pod »odličnim« pragom 80, ki bi nakazoval malo preostalih ovir uporabnosti. Segmentacija istih 150 odgovorov po starosti pokaže povprečno oceno 81 za paciente, mlajše od 50 let, in 62 za paciente, stare 65 let in več – vrzel, ki kaže na specifično, odpravljivo težavo z uporabnostjo za starejše paciente in ne na splošno težavo z uporabnostjo izdelka, in ki bi jo eno samo mešano povprečje skrilo.

## Viri podatkov in omejitve

Podatki SUS prihajajo neposredno od pacientov ali zdravnikov, ki izpolnijo standardiziran 10-postavkovni vprašalnik, instrument pa je treba izvesti natanko tako, kot je bil validiran (istih 10 postavk, ista 5-stopenjska lestvica strinjanja, ista formula točkovanja), da je dobljena ocena primerljiva z objavljenimi primerjalnimi vrednostmi; spremenjena ali skrajšana različica vprašalnika, ne glede na dobre namene, da oceno, ki je ni mogoče zanesljivo razlagati glede na standardno primerjalno porazdelitev. SUS meri zaznano uporabnost, ki korelira z objektivnim uspehom pri dokončanju nalog, a ni z njim enaka (glej stopnjo digitalne pismenosti za mero, ki temelji na dokončanju nalog); izdelek ima lahko dobro oceno SUS od pacientov, ki niso poskusili zahtevnejših funkcij, zato združitev SUS z objektivnimi podatki o dokončanju nalog da popolnejšo sliko kot vsak sam. Čas odgovora je pomemben: izvedba SUS takoj po frustrirajočem posameznem dogodku (neuspela povezava, zmeden korak) v primerjavi z izvedbo po gladki seji lahko premakne ocene neodvisno od splošne uporabnosti izdelka.

## Pasti

- **Spreminjanje standardnih postavk vprašalnika ali točkovanja**: že majhne spremembe besedila ali lestvice razveljavijo primerjavo z uveljavljeno objavljeno primerjalno porazdelitvijo; uporabite standardni 10-postavkovni instrument natanko tako, kot je bil validiran.
- **Poročanje samo o povprečni oceni brez segmentacije**: uporabnost se pogosto bistveno razlikuje glede na starost uporabnika, digitalno pismenost ali vlogo (pacient proti zdravniku); poročajte segmentirano, da najdete specifične, odpravljive vrzeli uporabnosti, ki jih eno samo povprečje skriva.
- **Obravnavanje SUS kot mere klinične učinkovitosti**: SUS meri specifično uporabnost, ne kliničnega izida ali zadovoljstva z oskrbo; zelo uporabno orodje lahko še vedno ne izboljša kliničnih izidov, in ju ne smemo mešati ali nadomeščati drug z drugim.
- **Izvedba ankete samo po nenavadno gladkih ali nenavadno frustrirajočih sejah**: čas in kontekst izvedbe lahko pristransko vplivata na oceno; izvajajte dosledno na reprezentativnem vzorcu resničnih sej, ne le priročnih ali selektivno izbranih.

## Viri

- Brooke, J., »SUS: A Quick and Dirty Usability Scale«, izvirni objavljeni instrument
- Bangor, Kortum in Miller, objavljene primerjalne raziskave SUS, ki so vzpostavile splošno navedene pasove razlage ocen
- Recenzirana literatura o uporabi SUS pri vrednotenju uporabnosti digitalnega zdravja in telezdravja, na primer študije, objavljene v reviji JMIR Human Factors

Glej tudi: [neto ocena priporočitve pacientov (NPS)](../neto-ocena-priporočitve-pacientov-nps/), sorodni, a drugačen kazalnik, ki ga sporočijo pacienti in meri zadovoljstvo in zvestobo, ne specifično uporabnosti programske opreme.
