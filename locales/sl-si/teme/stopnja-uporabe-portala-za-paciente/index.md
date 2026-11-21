# Stopnja uporabe portala za paciente

Stopnja uporabe portala za paciente meri delež upravičenih pacientov, ki so se registrirali v spletnem portalu za paciente in ga aktivno uporabljajo (na primer NHS App, Patient Access ali portal, vezan na elektronski zdravstveni zapis, kot je MyChart), da bi si ogledali zapise, rezervirali termine ali pisali svoji zdravstveni ekipi. Je osnovni kazalnik digitalne vključenosti: pacient, ki svojega računa nikoli ni aktiviral, ne more imeti koristi od nobene nadaljnje digitalne storitve, zgrajene na portalu.

## Zakaj je pomembna

Portal ustvari vrednost šele, ko ga pacient uporablja, zato bi morale organizacije spremljati uporabo kot lijak in ne kot eno samo število: registracija, aktivacija (prvo smiselno dejanje) in aktivna uporaba (uporaba v zadnjem obdobju) so tri različne stopnje, ki jih pogosto neupravičeno zamenjujemo. Ekipe za digitalne storitve so pogosto pod pritiskom, da poročajo eno samo ugodno glavno številko, zato je za vztrajanje pri zahtevnejši in bolj pošteni razčlenitvi potrebna disciplina. Nizka ali neenakomerno porazdeljena uporaba je tudi signal enakosti: pacienti, ki so starejši, imajo nižjo digitalno pismenost, ne govorijo večinskega jezika ali nimajo zanesljivega širokopasovnega dostopa ali pametnega telefona, so sistematično manj pogosto všteti v števec, zato lahko naraščajoča povprečna stopnja uporabe prikriva širjenje vrzeli pri pacientih, ki stike z zdravstvenimi storitvami pogosto potrebujejo najbolj.

## Kako se izračuna

Poročajte o vseh treh stopnjah, ne le o registraciji, in vedno izrecno navedite imenovalec:

```
Stopnja registracije = pacienti z ustvarjenim računom v portalu / upravičena populacija pacientov × 100
Stopnja aktivacije   = pacienti, ki so opravili prvo smiselno dejanje (ogled izvida,
                        rezervacija termina, pošiljanje sporočila) / pacienti z računom × 100
Stopnja aktivne uporabe = pacienti, ki so se v zadnjih 12 mesecih prijavili vsaj enkrat /
                        upravičena populacija pacientov × 100
```

Upravičena populacija pacientov je običajno opredeljena kot pacienti z vsaj enim stikom z organizacijo v določenem obdobju za nazaj (običajno 24 mesecev), ki so dovolj stari in imajo status soglasja, ki jim dovoljuje lasten račun.

## Izračunani primer

Mreža primarne zdravstvene oskrbe oskrbuje 50.000 pacientov, ki ustrezajo opredelitvi upravičenosti. Od teh se jih je v portalu registriralo 32.000 (stopnja registracije 64 %). Od 32.000 registracij jih je 27.000 opravilo vsaj eno smiselno dejanje, na primer ogled izvida preiskave (stopnja aktivacije 84 % registriranih). V zadnjih 12 mesecih se je od prvotnih 50.000 upravičenih pacientov vsaj enkrat prijavilo 21.000 (stopnja aktivne uporabe 42 %). Poročanje samo o 64-odstotni registraciji bi precej precenilo dejansko vključenost; 42-odstotna aktivna uporaba je številka, ki bi morala usmerjati odločitve o virih za program portala.

## Viri podatkov in omejitve

Analitika portala običajno prihaja iz same ponudnikove platforme (dogodki prijave, uporaba funkcij) ali iz revizijske sledi osnovnega elektronskega zdravstvenega zapisa, organizacije pa bi morale biti previdne do ponudnikovih nadzornih plošč, ki prikazujejo le število registracij. Dostop prek pooblaščenca (starš ali skrbnik, ki upravlja račun v imenu pacienta) je treba označiti in poročati ločeno, saj spremeni, kdo je dejanski »uporabnik«. Izbira imenovalca je izjemno pomembna: štetje glede na celoten register pacientov namesto glede na resnično upravičeno in dosegljivo populacijo bo uporabo vedno podcenilo, štetje samo glede na paciente, ki so bili dejansko povabljeni, pa jo bo vedno precenilo, zato je treba opredelitev upravičenosti določiti in objaviti ob vsaki sporočeni stopnji.

## Pasti

- **Registracija, šteta kot uporaba**: ustvarjen, a nikoli uporabljen račun nima skoraj nobene vrednosti; poročajte o aktivaciji in aktivni uporabi poleg registracije, ne namesto nje.
- **Spregledana digitalna izključenost**: skupne številke o uporabi lahko rastejo, medtem ko se vrzel med najbolj in najmanj digitalno vključenimi skupinami povečuje; vedno razčlenite po starosti, prikrajšanosti, jeziku in invalidnosti, kjer to dovoljuje upravljanje podatkov.
- **Primerjava organizacij z različnimi opredelitvami upravičenosti**: program portala, ki povabi le paciente z zabeleženim e-poštnim naslovom, bo sporočil višjo stopnjo kot program, ki meri glede na celoten register, brez resnične razlike v uspešnosti.
- **Enkratna prijava, obravnavana kot trajna vključenost**: 12-mesečno obdobje za nazaj je običajno, vendar krajše okno (na primer 90 dni) prej opozori na upadanje uporabe.

## Viri

- NHS England, statistika uporabe in registracij NHS App (publikacije nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, ukrepi programa Promoting Interoperability, vključno z ukrepi dostopa pacientov View, Download, Transmit (VDT)
- Recenzirana literatura o uporabi portalov za paciente in neenakostih v digitalnem zdravju, na primer študije, objavljene v reviji Journal of the American Medical Informatics Association (JAMIA)

Glej tudi: [stopnja neudeležbe na terminih](../stopnja-neudeležbe-na-terminih/), na katero neposredno vplivata samostojno naročanje in opomniki prek portala.
