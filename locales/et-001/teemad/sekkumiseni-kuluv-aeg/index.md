# Sekkumiseni Kuluv Aeg

Sekkumiseni kuluv aeg mõõdab, kui kiiresti kliiniline meeskond reageerib automatiseeritud terviseoiatusele, mille genereerib kaugjälgimissüsteem, alates hoiatuse käivitumise ajast kuni ajani, mil klinitsist selle alusel tegelikult tegutseb. See eksisteerib, kuna kaugjälgimisseadme väärtus sõltub täielikult sellest, et keegi tegelikult reageerib õigeaegselt hoiatustele, mida see genereerib — seade, mis tuvastab täiuslikult halveneva seisundi, ei anna kliinilist kasu, kui hoiatus jääb tundide või päevade jooksul lahendamata.

## Miks see on oluline

Kaugjälgimisprogramme turustatakse sageli nende võime alusel varakult tuvastada halvenevaid patsiendi seisundeid, kuid tuvastamine on ainult pool väärtuspakkumisest; teine pool on õigeaegne kliiniline reageerimine. Programm, millel on suurepärane sensori täpsus, kuid halb hoiatusele reageerimise aeg, ei anna paremaid kliinilisi tulemusi kui üldse mitte mingi jälgimine, ning võib isegi luua vale turvatunde, mis lükkab edasi muud tüüpi ravi. Sekkumiseni kuluv aeg on seetõttu üks otsesemaid mõõdikuid selle kohta, kas kaugjälgimisprogramm tegelikult toimib täieliku kliinilise süsteemina, mitte ainult andmekogumisvahendina, ning seda on eriti oluline jälgida, kui jälgimisprogrammid skaleeruvad ja hoiatustele reageerimise eest vastutav kliiniline personal muutub vastutavaks rohkemate patsientide eest.

## Kuidas seda arvutatakse

```
Sekkumiseni kuluv aeg = ajatempel(kliiniline tegevus) −
                        ajatempel(hoiatuse käivitumine), koondatuna
                        mediaani ja 90. protsentiilina kõigi
                        hoiatuste lõikes perioodis

Esitage alati jaotatuna hoiatuse raskusastme järgi:
  Mediaan sekkumiseni kuluv aeg kõrge raskusastmega hoiatuste jaoks
  Mediaan sekkumiseni kuluv aeg madala raskusastmega hoiatuste jaoks

Kasutage mediaani ja protsentiile keskmise asemel, kuna
reageerimisaja andmed on tavaliselt tugevalt nihkunud harvaesinevate
väga pikkade viivituste tõttu.
```

## Läbitöötatud näide

Virtuaalosakonna programm südamepuudulikkusega patsientide kaugjälgimiseks genereerib hoiatusi, kui patsiendi kaal või hapnikuga küllastatus ületab määratletud läve. Kuu jooksul on kõigi hoiatuste mediaan sekkumiseni kuluv aeg 45 minutit, mis kõlab mõistlikult, kuid jaotamine raskusastme järgi paljastab, et kõrge raskusastmega hoiatustel (mis näitavad võimalikku ägedat halvenemist) on mediaan reageerimisaeg 38 minutit, samas kui kõrge raskusastmega hoiatuste 90. protsentiil on 3 tundi — mis tähendab, et märkimisväärne alamhulk kõige kriitilisemaid hoiatusi jääb murettekitavalt pikaks ajaks lahendamata. See sundis programmi ümber korraldama oma personalikomplekteerimist, et tagada pühendatud kate kõrge raskusastmega hoiatuste triaažile, selle asemel et toetuda ühele jagatud reageerimismeeskonnale.

## Andmeallikad ja hoiatused

Sekkumiseni kuluv aeg nõuab täpseid ajatemplid nii hoiatuse käivitumise kui ka sellele järgneva kliinilise tegevuse jaoks, mis tähendab, et kliinilise töövoo süsteem peab usaldusväärselt registreerima tegevuse ajatempli, mitte ainult seda, millal hoiatus genereeriti — kui klinitsistid tegutsevad hoiatuse alusel, kuid unustavad selle süsteemi õigeaegselt registreerida, näitab mõõdetud sekkumiseni kuluv aeg kunstlikult pikemat aega kui tegelik reageerimisaeg. Sobiv "õigeaegse" reageerimise lävi tuleks kehtestada jälgitava kliinilise raskusastme alusel, mitte rakendada üldiselt kõigi hoiatustüüpide suhtes.

## Lõksud

- **Ainult mediaani esitamine ilma saba-hoiatusteta**: hea mediaan arv võib varjata märkimisväärset hoiatuste alamhulka ohtlikult pikkade reageerimisaegadega; esitage alati 90. või 95. protsentiil koos mediaaniga.
- **Keskmise kasutamine mediaani ja protsentiilide asemel**: reageerimisaja andmed on tavaliselt tugevalt nihkunud, muutes keskmise eksitavaks koondarvuks.
- **Hoiatuse raskusastme jaotuse ignoreerimine**: madala raskusastmega hoiatuse jaoks vastuvõetav reageerimisaeg võib olla ohtlikult aeglane kõrge raskusastmega hoiatuse jaoks; neid ei tohiks kunagi koondada ilma jaotuseta.
- **Sõltuvus ebausaldusväärsetest tegevuse ajatemplitest**: kui klinitsistid ei registreeri järjepidevalt, millal nad hoiatuse alusel tegelikult tegutsesid, ei kajasta mõõdetud mõõdik tõelist reageerimisaega.

## Allikad

- American Heart Association, südamepuudulikkusega patsientide kaugjälgimise juhised
- The Joint Commission, kliiniliste hoiatuste haldussüsteemide standardid
- Eelretsenseeritud kirjandus kaugjälgimise hoiatustele reageerimise kohta, näiteks uuringud, mis on avaldatud ajakirjades Journal of the American College of Cardiology ja Circulation: Heart Failure

Vaata ka: [seadme tööaja määr](../seadme-tööaja-määr/), kuna usaldusväärne sekkumiseni kuluva aja näitaja sõltub sellest, et aluseks olev jälgimisseade on tegelikult võrgus, et hoiatust üldse genereerida.
