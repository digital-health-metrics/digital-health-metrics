# Stopnja izboljšanja biometričnih meritev

Stopnja izboljšanja biometričnih meritev je delež vključenih pacientov v programu digitalnega zdravja, ki v določenem obdobju vključenosti dosežejo klinično pomembno izboljšanje spremljane biometrične meritve – najpogosteje glikiranega hemoglobina (HbA1c) pri programih za sladkorno bolezen in kardiometabolne programe ali indeksa telesne mase (ITM) pri programih za obvladovanje telesne mase. Je kazalnik izida, ki navsezadnje utemeljuje klinične trditve digitalnega zdravstvenega izdelka: številke o vključenosti in sprejetju opisujejo, kako se izdelek uporablja, biometrično izboljšanje pa je bližje dokazu, da deluje.

## Zakaj je pomembna

Programi digitalnega zdravja se pogosto prodajajo in naročajo na podlagi obljube boljših zdravstvenih izidov, stopnja izboljšanja biometričnih meritev pa je najbolj neposreden, količinsko opredeljiv način za preizkus te obljube glede na specifičen, klinično priznan prag in ne glede na nejasno trditev o »boljšem zdravju«. Plačniki, delodajalci in zdravstveni sistemi vse pogosteje vežejo povračilo ali podaljšanje pogodbe na dokazano biometrično spremembo, zato je program, ki te stopnje ne more verodostojno poročati, v komercialni in klinični slabšavi. Kazalnik je tudi preverjanje discipline pri zasnovi programa: veliko lažje je poročati o vključenosti (prijave, poslana sporočila) kot o izidih, ekipa pa bi morala biti sumničava do vsakega programa, ki prvo poroča navdušeno, o drugem pa je nejasen.

## Kako se izračuna

```
Stopnja izboljšanja biometričnih meritev = pacienti, ki dosežejo opredeljeno klinično
                                            pomembno izboljšanje / pacienti z veljavno
                                            izhodiščno in kontrolno meritvijo × 100

Pogosti klinično pomembni pragovi:
  HbA1c   — znižanje za ≥ 0,5 odstotne točke ali doseganje opredeljenega
            cilja (npr. < 7,0 %) iz izhodišča zunaj razpona
  ITM     — znižanje za ≥ 5 % izhodiščne telesne mase, ohranjeno do
            časovne točke kontrolne meritve

Poročajte ločeno za vsako spremljano biometrično meritev; izboljšanja
HbA1c in ITM nikoli ne združujte v en skupni odstotek »izboljšanja«.
```

## Izračunani primer

Kardiometabolni program digitalnega zdravja vključi 800 pacientov z izhodiščnim HbA1c zunaj razpona. Od teh jih ima 620 veljavno izhodiščno in kontrolno meritev po 6 mesecih (180 jih izpade iz spremljanja in so izključeni iz imenovalca, ne šteti kot neuspehi). Od 620 s parnimi meritvami jih 340 doseže znižanje za vsaj 0,5 odstotne točke. Stopnja izboljšanja biometričnih meritev je 340 / 620 × 100 = 55 %. Poročanje glede na vseh 800 vključenih (340 / 800 = 42,5 %) bi mešalo izpad iz spremljanja z neuspehom zdravljenja in podcenilo stopnjo za paciente, ki so meritev dejansko dokončali.

## Viri podatkov in omejitve

Izhodiščne in kontrolne biometrične vrednosti običajno izvirajo iz povezane naprave (glukometer ali pametna tehtnica Bluetooth), laboratorijskega izvida, uvoženega iz elektronskega zdravstvenega zapisa, ali samoporočane vrednosti, ki jo vnese pacient – ti trije viri pa imajo zelo različno zanesljivost, zato je treba vir poročati skupaj s stopnjo. Izpad iz spremljanja redko poteka naključno: pacienti, ki prenehajo sodelovati v programu, so pogosto tudi tisti, pri katerih je izboljšanje najmanj verjetno, zato lahko visoka stopnja izboljšanja, izračunana le na pacientih, ki so dokončali spremljanje, preceni pravi učinek programa na ravni populacije. Sezonski učinki in regresija k povprečju so resnični tako pri HbA1c kot pri telesni masi, zato bi moral program, kjer je mogoče, primerjati s sočasno ali zgodovinsko kontrolno skupino in ne obravnavati vsakega izboljšanja kot dokaz učinka programa.

## Pasti

- **Izključevanje namesto poročanja o izpadu iz spremljanja**: tiho izpuščanje pacientov brez kontrolne meritve iz imenovalca lahko bistveno napihne navidezno stopnjo izboljšanja; vedno poročajte o stopnji dokončanja kontrolne meritve poleg same stopnje izboljšanja.
- **Mešanje samoporočanih in z napravo pridobljenih meritev brez označbe**: samoporočana telesna masa je sistematično manj zanesljiva kot odčitek povezane pametne tehtnice, mešanje obeh virov pa prikrije, koliko navideznega izboljšanja je merilni šum.
- **Brez kontrole ali protidejstva**: številne kronične biometrične meritve nihajo ali se same vračajo k povprečju; stopnja izboljšanja z eno skupino brez primerjalne skupine je indikativen, ne dokončen dokaz učinka programa.
- **Obravnavanje skromnega povprečnega premika kot dokaza za široko izboljšanje**: majhno povprečno izboljšanje na ravni populacije lahko povzroči peščica velikih odzivnikov, medtem ko večina pacientov ne vidi spremembe; poročajte porazdelitev (npr. delež tistih, ki prečkajo klinično pomemben prag), ne le povprečnega premika.

## Viri

- American Diabetes Association (ADA), Standards of Care in Diabetes, smernice o ciljnem HbA1c in klinično pomembni spremembi
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, smernice za vrednotenje programov
- Recenzirana literatura o izidih digitalnih programov za sladkorno bolezen in obvladovanje telesne mase, na primer študije, objavljene v revijah npj Digital Medicine in Diabetes Care

Glej tudi: [stopnja upoštevanja zdravljenja z zdravili](../stopnja-upoštevanja-zdravljenja-z-zdravili/), pogost vzročni dejavnik biometričnega izboljšanja v programih za kronične bolezni.
