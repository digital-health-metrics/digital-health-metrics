# Zmanjšanje števila bolniških dni

Zmanjšanje števila bolniških dni meri skupno število bolnišničnih posteljnih dni, ki jih je mogoče preprečiti s premikom opredeljene epizode oskrbe – najpogosteje okrevanja po operaciji ali obvladovanja akutnega stanja – iz tradicionalnega bolnišničnega zdravljenja v digitalno podprto alternativo, kot sta virtualni oddelek ali program bolnišnične oskrbe na domu. Je primarni kazalnik zmogljivosti za pobude virtualnih oddelkov in bolnišnične oskrbe na domu, ki spremembo modela kliničnega oskrbovanja neposredno pretvori v valuto (posteljne zmogljivosti), s katero dejansko upravljajo bolnišnični procesi in načrtovalci sistema.

## Zakaj je pomembno

Bolnišnične posteljne zmogljivosti so eden najbolj omejenih in dragih virov v vsakem bolnišničnem sistemu, osrednja vrednostna ponudba virtualnega oddelka ali programa oskrbe na domu pa je, da lahko varno zagotovi opredeljeno raven klinične oskrbe, ne da bi zasedel fizično posteljo, in tako sprosti zmogljivost za paciente, ki jih ni mogoče obravnavati drugače. Zmanjšanje števila bolniških dni pogosto abstraktno trditev (»ta program izboljšuje oskrbo«) pretvori v konkretno operativno številko, na katero lahko neposredno ukrepajo načrtovalci bolnišničnih zmogljivosti, finančne ekipe in naročniki: z njo je mogoče modelirati, ali se naložba v program spremljanja povrne z izogibanjem stroškov postelj in za koliko. Ker ima zmanjšanje števila bolniških dni vrednost le, če je ohranjena varnost pacientov, ga je treba vedno poročati skupaj z, nikoli namesto, kazalnikom varnostnega izida (kot sta stopnja ponovnega sprejema ali stopnja stopnjevanja v bolnišnično oskrbo) za isto populacijo.

## Kako se izračuna

```
Zmanjšanje števila bolniških dni = pričakovani posteljni dnevi pri standardni
                                    bolnišnični oskrbi (na podlagi zgodovinskih
                                    podatkov o dolžini ležanja za primerljivo
                                    kohorto pacientov) − dejanski posteljni dnevi,
                                    ki so jih porabili pacienti na virtualni/digitalni poti

Poročajte po klinični poti (npr. okrevanje po operaciji, akutno
poslabšanje dihal), saj se pričakovana dolžina ležanja močno razlikuje
glede na stanje in mešana številka čez nepovezane poti ni smiselna.
```

## Izračunani primer

Zgodovinski podatki bolnišnice kažejo, da imajo pacienti, ki okrevajo po določenem elektivnem kirurškem posegu, povprečno dolžino bolnišničnega ležanja 4 dni. Program virtualnega oddelka vključi 150 pacientov, ki okrevajo po istem posegu, in jih odpusti po povprečno 1,5 bolnišničnega dneva, preostalo okrevanje pa spremlja na daljavo. Zmanjšanje števila bolniških dni je (4 − 1,5) × 150 = 375 posteljnih dni v obdobju merjenja. To številko je treba poročati skupaj s 30-dnevno stopnjo stopnjevanja v bolnišnično oskrbo in stopnjo ponovnega sprejema kohorte virtualnega oddelka za istih 150 pacientov, saj prihranek posteljnih dni, ki gre na račun bistveno višje stopnje stopnjevanja ali ponovnega sprejema, ni klinična zmaga, kot bi sicer nakazovala glavna številka.

## Viri podatkov in omejitve

Pričakovani posteljni dnevi zahtevajo verodostojno zgodovinsko osnovo, idealno iz primerljive kohorte pacientov, zdravljenih s standardno bolnišnično oskrbo s podobnimi kliničnimi značilnostmi (starost, sočasne bolezni, vrsta posega, resnost) kot populacija virtualnega oddelka, saj primerjava z neprimerljivim zgodovinskim povprečjem tvega precenitev ali podcenitev pravega zmanjšanja, če je digitalno obravnavana kohorta sistematično zdravejša ali bolnejša od zgodovinske primerjalne skupine. Dejanski posteljni dnevi, porabljeni na digitalni poti, izvirajo iz lastnega sistema bolnišnice za sprejem, odpust in premestitev (ADT); vsako stopnjevanje nazaj v bolnišnično oskrbo med spremljanim obdobjem okrevanja je treba pošteno šteti v breme programa (kot porabljene posteljne dneve, ne izključene), saj bi izključitev stopnjevanj iz izračuna umetno napihnila navidezno zmanjšanje.

## Pasti

- **Poročanje zmanjšanja števila bolniških dni brez primerljive varnostne primerjave**: virtualni oddelek, ki prihrani posteljne dneve, a ima bistveno slabšo stopnjo stopnjevanja ali ponovnega sprejema kot standardna oskrba, ni dokazal resničnega izboljšanja; vedno poročajte oboje skupaj.
- **Uporaba neprimerljive ali zastarele zgodovinske osnove**: primerjava z zgodovinsko kohorto z drugačno mešanico primerov, bremenom sočasnih bolezni ali dobo klinične prakse lahko bistveno preceni ali podceni pravi prihranek posteljnih dni.
- **Izključitev stopnjevanj nazaj v bolnišnično oskrbo iz izračuna**: pacientu, ki je virtualno spremljan, a nato sredi okrevanja premeščen na bolnišnično posteljo, je treba te posteljne dneve šteti v breme programa, ne tiho izpustiti iz analize.
- **Mešanje poti z zelo različnimi pričakovanimi dolžinami ležanja**: združevanje zmanjšanja števila bolniških dni čez klinično nepovezane poti (na primer združitev okrevanja po operaciji in obvladovanja kroničnih dihalnih bolezni) v eno številko prikrije, katera specifična pot dejansko povzroča prihranek.

## Viri

- NHS England, smernice za programe virtualnih oddelkov in bolnišnične oskrbe na domu ter standardi poročanja o vplivu na posteljne dni
- Recenzirana literatura o modelih bolnišnične oskrbe na domu in virtualnih oddelkov, na primer študije, objavljene v revijah JAMA Internal Medicine in npj Digital Medicine
- Institute for Healthcare Improvement (IHI), smernice o upravljanju zmogljivosti in alternativnih modelih oskrbe

Glej tudi: [stopnja ponovnih sprejemov v bolnišnico](../stopnja-ponovnih-sprejemov-v-bolnišnico/), varnostni kazalnik, ki ga je treba vedno poročati skupaj z vsako trditvijo o zmanjšanju števila bolniških dni za isto populacijo pacientov.
