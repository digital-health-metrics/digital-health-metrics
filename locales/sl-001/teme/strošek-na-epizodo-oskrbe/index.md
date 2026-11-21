# Strošek na epizodo oskrbe

Strošek na epizodo oskrbe je skupni strošek zdravljenja opredeljene klinične epizode – na primer zamenjave kolka in z njo povezanega okrevanja ali obdobja obvladovanja sladkorne bolezni – v primerjavi z zgodovinsko izhodiščno kohorto, zdravljeno brez digitalne intervencije, ki se vrednoti. Je standardna enota finančne primerjave pri oskrbi, temelječi na vrednosti, ker zajame celotno ekonomsko sliko epizode in ne le posamezne stroškovne postavke, in je kazalnik, ki ga plačniki in zdravstveni sistemi najpogosteje zahtevajo, preden se strinjajo s financiranjem programa digitalnega zdravja v velikem obsegu.

## Zakaj je pomemben

Pogodbe o oskrbi, temelječi na vrednosti, vse pogosteje plačujejo izide in epizode in ne posameznih storitev, kar pomeni, da je treba finančno utemeljitev programa digitalnega zdravja podati v isti valuti: skupni strošek na epizodo v primerjavi s tem, koliko je enaka vrsta epizode stala, preden je intervencija obstajala. Program, ki zmanjša eno stroškovno kategorijo (na primer manj osebnih nadaljnjih obiskov), a poveča drugo (več stroškov naprav, več časa osebja za klinično spremljanje), ni nujno zmanjšal skupnega stroška na epizodo, to izravnavo pa zajame le popolno stroškovno vrednotenje na ravni epizode; opazovanje katere koli posamezne stroškovne postavke ločeno tvega zavajajoč sklep v obe smeri. Ker je mogoče opredelitve epizod in izhodiščna obdobja zasnovati tako, da dajejo prednost določenemu sklepu, ta kazalnik zahteva več metodološke preglednosti kot večina drugih v tej knjigi, da je zaupanja vreden za skeptičnega plačnika ali finančno ekipo.

## Kako se izračuna

```
Strošek na epizodo oskrbe = skupni strošek vse oskrbe, opravljene znotraj
                             opredeljenega okna epizode (vsa okolja oskrbe,
                             vse stroškovne kategorije) / število epizod

Primerjajte s stroškom na epizodo zgodovinske izhodiščne kohorte za
isto klinično opredeljeno vrsto epizode, prilagojeno strukturi
primerov (starost, sočasne bolezni, resnost) med kohortama.

Vključite ne le neposrednih kliničnih stroškov: stroške tehnološke
platforme in naprav, dodaten čas kliničnega osebja in vso oskrbo, ki
se je preselila v drugo okolje (npr. iz bolnišnice na dom) in ni
povsem izginila.
```

## Izračunani primer

Zgodovinski izhodiščni strošek zdravstvenega sistema za epizodo popolne zamenjave kolka (od operacije do 90-dnevnega okrevanja) je 28.000 USD na epizodo, na podlagi 200 zgodovinskih epizod. Uveden je nov digitalni program spremljanja po operaciji, 150 novih epizod, ki uporabljajo program, pa kaže povprečni strošek 24.500 USD na epizodo – znižanje za 3.500 USD na epizodo, ki ga povzročajo predvsem manj obiskov urgence med okrevanjem in krajše povprečno bolnišnično ležanje. Po prilagoditvi za tveganje zaradi nekoliko mlajše strukture primerov z manj sočasnimi boleznimi v digitalno spremljani kohorti v primerjavi z zgodovinsko izhodiščno kohorto se prilagojeni prihranek zmanjša na 2.100 USD na epizodo – še vedno resnično izboljšanje, vendar bistveno manjše, kot je nakazovala surova, neprilagojena primerjava.

## Viri podatkov in omejitve

Skupni strošek epizode se običajno sestavi iz lastnega sistema stroškovnega računovodstva ali financ zdravstvenega sistema, ki združuje podatke zahtevkov, notranjo porazdelitev stroškov in, kjer je vključena digitalna platforma, stroške licenc in strojne opreme – natančna sestava te številke je običajno najtežji in najbolj zahteven del vsake analize vrednosti digitalnega zdravja, saj so stroški pogosto zabeleženi v ločenih sistemih, ki niso bili nikoli zasnovani za združevanje na ravni epizode. Prilagoditev za strukturo primerov je bistvena, kadar digitalno vodena kohorta in zgodovinska izhodiščna kohorta nista bili dodeljeni s pravo randomizacijo, saj se digitalni programi pogosto najprej ponudijo bolj vključenim, na splošno zdravejšim ali bolj motiviranim pacientom, kar lahko ustvari navidezni prihranek stroškov, ki je dejansko učinek izbire in ne pravi učinek programa.

## Pasti

- **Primerjava neprilagojenih stroškov med kohortama z različno strukturo primerov**: digitalno vodena kohorta, ki je naključno zdravejša ali manj tvegana od zgodovinske izhodiščne, bo kazala nižji strošek na epizodo iz razlogov, ki niso povezani z digitalno intervencijo samo; pred primerjavo vedno prilagodite za tveganje.
- **Izpuščanje stroškov tehnologije in osebja na »digitalni« strani primerjave**: stroškovna analiza, ki spremlja le zmanjšano klinično porabo, medtem ko prezre stroške platforme, naprav in osebja za izvajanje digitalnega programa, bo preocenila neto prihranke.
- **Nedosledna opredelitev okna epizode med kohortama**: primerjava 90-dnevnega okna epizode za eno kohorto s 60-dnevnim oknom za drugo bo dala stroškovno primerjavo, ki dejansko ne meri istega.
- **Obravnavanje premika stroškov kot zmanjšanja stroškov**: strošek, preseljen iz enega okolja oskrbe v drugo (na primer iz bolnišnice v spremljano domače okolje), je resnična in dragocena ugotovitev, vendar se analitično razlikuje od stroška, ki je povsem izginil, in ju je treba poročati ločeno.

## Viri

- Centers for Medicare & Medicaid Services (CMS), smernice za Bundled Payments for Care Improvement (BPCI) in modele plačevanja na podlagi epizod
- Healthcare Financial Management Association (HFMA), smernice o metodologiji stroškovnega vrednotenja epizod oskrbe
- Recenzirana literatura o analizi stroškov digitalnega zdravja pri oskrbi, temelječi na vrednosti, na primer študije, objavljene v revijah Health Affairs in American Journal of Managed Care

Glej tudi: [donosnost naložbe (ROI) in vrednost naložbe (VOI)](../donosnost-naložbe-roi-in-vrednost-naložbe-voi/), ki uporablja strošek na epizodo oskrbe kot enega svojih glavnih vložkov.
