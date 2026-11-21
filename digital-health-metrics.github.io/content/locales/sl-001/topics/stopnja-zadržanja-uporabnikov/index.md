# Stopnja zadržanja uporabnikov

Stopnja zadržanja uporabnikov je delež uporabnikov, ki so bili aktivni v izhodiščnem obdobju in so aktivni tudi v poznejšem obdobju, njen obrat, stopnja osipa (ali opustitve), pa je delež tistih, ki izdelek povsem nehajo uporabljati. Medtem ko stopnja uporabe portala za paciente (glej to temo) meri, ali pacient digitalni zdravstveni izdelek sploh kdaj smiselno aktivira, zadržanje meri, ali ga uporablja še naprej – in pri vsakem digitalnem zdravstvenem izdelku v obliki naročnine ali trajne oskrbe je zadržanje običajno kazalnik, ki je najtesneje povezan s kliničnim učinkom in komercialno vzdržnostjo.

## Zakaj je pomembna

Digitalni zdravstveni izdelek, ki ne more zadržati uporabnikov, ne more zagotoviti trajne klinične koristi, ne glede na to, kako dobre so njegove začetne številke uporabe ali aktivacije: orodje za obvladovanje kronične bolezni, ki ga uporabljamo dva tedna in nato opustimo, težko premakne biometrični izid, ki je odvisen od mesecev trajne spremembe vedenja. Zadržanje je tudi eden komercialno najpomembnejših kazalnikov, o katerih digitalno zdravstveno podjetje poroča vlagateljem in plačnikom, saj krivulje zadržanja (oblika upadanja skozi čas, ne le en odstotek zadržanja) razkrijejo, ali je izdelek našel resnično vzdržen vzorec uporabe ali pa zgolj zajema začetno zanimanje zaradi novosti, ki predvidljivo zbledi. Krivulja zadržanja, ki se po začetnem padcu izravna (pacienti, ki preživijo prvi mesec, običajno ostanejo), je zelo drugačen in precej bolj zdrav signal kot krivulja, ki se enakomerno znižuje brez dna.

## Kako se izračuna

```
Stopnja zadržanja (obdobje N) = uporabniki, aktivni v obdobju N, ki so bili aktivni tudi
                                 v izhodiščnem obdobju kohorte / uporabniki v
                                 izhodiščnem obdobju kohorte × 100

Stopnja osipa = 1 − stopnja zadržanja (za isto obdobje)

Poročajte kot krivuljo zadržanja kohorte (zadržanje po dnevu/tednu/mesecu 1, 2, 3 …),
ne kot eno samo številko v določenem trenutku, saj posamezen posnetek meša
nedavno pridružene uporabnike (ki še niso imeli priložnosti za osip) z
dolgoletnimi.
```

## Izračunani primer

Digitalna zdravstvena aplikacija januarja vključi kohorto 1.000 novih uporabnikov. Do konca 1. meseca jih je od prvotnih 1.000 še vedno aktivnih 640 (zadržanje po 1. mesecu 64 %). Do konca 3. meseca jih ostane aktivnih 410 (zadržanje po 3. mesecu 41 %). Do 6. meseca jih ostane aktivnih 380 (zadržanje po 6. mesecu 38 %). Oblika te krivulje – strm začetni padec, ki mu sledi izravnava med 3. in 6. mesecem – kaže, da izdelek ohrani stabilno jedro uporabnikov, ko ti prestopijo začetno oviro sprejetja, kar je bistveno drugačen in spodbudnejši signal, kot če bi se upadanje od 3. do 6. meseca nadaljevalo z enako hitrostjo kot od 1. do 3. meseca.

## Viri podatkov in omejitve

Zadržanje se izračuna iz lastnih dnevnikov prijav ali dejavnosti izdelka, pri čemer je »aktiven« opredeljen dosledno (na primer vsaj ena kvalificirana seja v obdobju) pri vseh primerjanih kohortah. Kohorte je treba primerjati enakovredno – z enako izhodiščno opredelitvijo »aktivnega« in enako dolžino okna opazovanja – saj lahko že majhne razlike v opredelitvi (30-dnevni ali 28-dnevni meseci, strožji ali ohlapnejši prag »aktivnega«) premaknejo sporočeni odstotek zadržanja za več točk brez resnične razlike v vedenju uporabnikov. Sezonski učinki so pogosti pri zdravstvenih aplikacijah, vezanih na novoletne zaobljube ali določena obdobja ozaveščanja o zdravju, zato je primerjava kohort iz leta v leto običajno bolj informativna kot primerjava sosednjih kohort iz različnih časov leta.

## Pasti

- **Poročanje o enem posnetku zadržanja namesto o krivulji**: ena sama številka »X % uporabnikov je še vedno aktivnih« brez oblike upadanja skozi čas ne more ločiti izdelka, ki se izravna (zdravo), od izdelka v stalnem upadanju (nezdravo).
- **Spreminjanje opredelitve »aktivnega« med obdobji poročanja**: omilitev opredelitve aktivnega uporabnika (na primer štetje pasivnega odprtja aplikacije namesto dokončanega dejanja) lahko povzroči, da se zadržanje zdi izboljšano, čeprav se dejanska uporaba sploh ni spremenila.
- **Spregledana sezonskost kohort**: primerjava zadržanja januarske kohorte (pogosto napihnjene zaradi vključevanja iz novoletnih zaobljub, ki v povprečju pripelje manj motivirano kohorto) s kohorto, pridobljeno ob drugem času leta, lahko privede do zavajajočih sklepov o trendu.
- **Mešanje organskih kohort in kohort s plačanim pridobivanjem**: uporabniki, pridobljeni po različnih kanalih, se pogosto zadržijo zelo različno; združitev v eno skupno številko lahko skrije težavo zadržanja, značilno za posamezen kanal.

## Viri

- Recenzirana literatura o vključenosti in osipu pri aplikacijah za digitalno zdravje, na primer študije, objavljene v reviji Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, smernice dobre prakse za merjenje vključenosti in zadržanja pri digitalnih terapevtikih
- Industrijska primerjalna poročila o zadržanju v aplikacijah za mobilno zdravje, iz analitičnih platform in organizacij za raziskave trga digitalnega zdravja

Glej tudi: [stopnja doslednosti vključenosti pacientov](../stopnja-doslednosti-vključenosti-pacientov/), ki meri kakovost vključenosti med zadržanimi uporabniki, ne glede na to, ali sploh ostanejo vključeni.
