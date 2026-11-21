# Stopnja ponovnih sprejemov v bolnišnico

Stopnja ponovnih sprejemov v bolnišnico je delež odpuščenih pacientov, ki so neplanirano ponovno sprejeti v bolnišnico v opredeljenem oknu po odpustu – najpogosteje 30 dni. Za digitalno zdravje je kazalnik, ki je najbolj neposredno povezan z ekonomijo plačnikov in pogodbami o oskrbi, temelječi na vrednosti: program oddaljenega spremljanja, nadaljnjega spremljanja po odpustu ali digitalnega prehoda oskrbe, ki ne more pokazati verodostojnega učinka na ponovne sprejeme, verjetno ne bo prejel nadaljnje podpore povračil, ne glede na to, kako dobre so številke o vključenosti.

## Zakaj je pomembna

Neplanirani ponovni sprejem je drag, moteč za pacienta in se v mnogih zdravstvenih sistemih zdaj neposredno kaznuje: sheme, kot je ameriški Hospital Readmissions Reduction Program, znižujejo plačila bolnišnicam z višjimi od pričakovanih stopenj ponovnih sprejemov za določena stanja, zato bolnišnice dejavno naročajo digitalne programe po odpustu in oddaljenega spremljanja, namenjene njihovemu zmanjšanju. Pomemben delež ponovnih sprejemov velja za potencialno preprečljive – povzročajo jih neustrezna navodila ob odpustu, zamujeni nadaljnji termini, nerazumevanje zdravil ali nerešeno poslabšanje simptomov, ki ga dobro zasnovana digitalna stična točka lahko ujame prej – to pa je prav vrzel, ki jo ciljajo digitalna orodja prehodne oskrbe. Stopnjo ponovnih sprejemov je treba vedno brati skupaj s strukturo primerov: program, ki oskrbuje bolnejšo, kompleksnejšo populacijo, bo imel strukturno višjo izhodiščno stopnjo kot program, ki oskrbuje zdravejšo populacijo, neodvisno od kakovosti programa.

## Kako se izračuna

```
30-dnevna stopnja ponovnih sprejemov = neplanirani ponovni sprejemi v 30 dneh po odpustu
                                        / vsi indeksni odpusti × 100

Iz števca izključite: planirane ponovne sprejeme (npr. načrtovan
nadaljnji poseg) in premestitve, ki so nadaljevanje iste
epizode oskrbe in ne nov sprejem.

Kjer je mogoče, prilagodite za tveganje z uveljavljenim indeksom
strukture primerov ali sočasnih bolezni, preden primerjate stopnje
med različnimi populacijami pacientov ali časovnimi obdobji.
```

## Izračunani primer

Bolnišnica v četrtletju odpusti 1.200 pacientov s srčnim popuščanjem. Od teh jih je 210 ponovno sprejetih v 30 dneh, od katerih je 15 planiranih ponovnih sprejemov za načrtovan poseg, ki so izključeni. Neplanirana 30-dnevna stopnja ponovnih sprejemov je (210 − 15) / 1.200 × 100 = 16,25 %. Program oddaljenega spremljanja je uveden za podskupino 400 od teh pacientov (izbranih po kliničnem tveganju, ne naključno), njihova stopnja neplaniranih ponovnih sprejemov pa je 14 %, v primerjavi z 18 % pri 800 nevključenih pacientih. Ker je vključitev temeljila na kliničnem tveganju in ne na naključni dodelitvi, je ta razlika indikativen in ne dokončen dokaz učinka programa, razlagati pa jo je treba skupaj z analizo prilagoditve za tveganje in je ne jemati dobesedno.

## Viri podatkov in omejitve

Podatki o ponovnih sprejemih so običajno pridobljeni iz lastnega vira sprejemov, odpustov in premestitev (ADT) bolnišnice za ponovne sprejeme v isto ustanovo, vendar pacient, ponovno sprejet v drugo bolnišnico, v tem viru sploh ne bo viden, zato sledenje ponovnih sprejemov v eni bolnišnici sistematično podceni pravo stopnjo, razen če se dopolni s podatki regionalne izmenjave zdravstvenih informacij, zahtevki plačnikov ali državnimi bazami vseh plačnikov. Pripisovanje digitalnemu programu zahteva previdnost: pacienti, ki se prostovoljno vključijo v program oddaljenega spremljanja, redko predstavljajo naključni vzorec odpuščene populacije, zato bo naivna primerjava stopenj ponovnih sprejemov vključenih in nevključenih zmedena prav zaradi učinkov izbire, ki so nekatere paciente naredili bolj verjetne za vključitev.

## Pasti

- **Primerjava surovih, neprilagojenih stopenj med populacijami**: program, ki oskrbuje bolnejšo populacijo, bo kazal višjo surovo stopnjo ponovnih sprejemov kot program z zdravejšo populacijo, tudi če je sam program učinkovitejši; pred primerjavo vedno prilagodite za tveganje.
- **Podštevanje ponovnih sprejemov v druge ustanove**: zanašanje samo na lastne podatke ADT ene bolnišnice bo zgrešilo ponovne sprejeme drugje in podcenilo pravo stopnjo, zlasti na območjih z več konkurenčnimi bolnišničnimi sistemi.
- **Pristranskost izbire pri prostovoljni vključitvi v program**: pacienti, ki se odločijo za vključitev v digitalni program nadaljnjega spremljanja, se pogosto sistematično razlikujejo (po zdravstveni pismenosti, socialni podpori ali motivaciji) od tistih, ki se ne, kar zmede vsako naivno primerjavo pred/po ali vključeni/nevključeni.
- **Štetje vsake vrnitve v isto ustanovo kot ponovnega sprejema**: planiran ponovni sprejem (na primer načrtovan drugi del posega) ni signal neuspešnega odpusta in ga je treba izključiti iz števca, ne mešati z resnično neplaniranimi vrnitvami.

## Viri

- Centers for Medicare & Medicaid Services (CMS), specifikacije mer Hospital Readmissions Reduction Program in Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), smernice o zmanjševanju izogibljivih ponovnih sprejemov
- Recenzirana literatura o digitalnem oddaljenem spremljanju in intervencijah prehodne oskrbe za zmanjšanje ponovnih sprejemov, na primer študije, objavljene v revijah JAMA Network Open in npj Digital Medicine

Glej tudi: [natančnost triaže in usmerjanja pacientov](../natančnost-triaže-in-usmerjanja-pacientov/), saj je lahko neustrezno začetno usmerjanje samo po sebi nadaljnji vzrok izogibljivih sprejemov.
