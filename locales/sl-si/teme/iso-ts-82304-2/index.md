# ISO/TS 82304-2

ISO/TS 82304-2 je mednarodna tehnična specifikacija, objavljena pod okriljem tehničnega odbora ISO 215 (zdravstvena informatika), ki opredeljuje strukturirano metodo za ocenjevanje kakovosti zdravstvenih aplikacij in aplikacij za dobro počutje – zajema uporabnost, tehnično robustnost in zanesljivost, interoperabilnost, kakovost vsebine ter varnost in zasebnost podatkov – za izdelke, ki ne spadajo v področje polne regulacije medicinskih pripomočkov, a vseeno bistveno vplivajo na zdravstvene odločitve ali vedenje uporabnika. Obstaja, da zapolni specifično vrzel: velika večina potrošniških aplikacij za zdravje in dobro počutje (sledilniki telesne dejavnosti, dnevniki simptomov, aplikacije za coaching dobrega počutja) ni regulirana kot medicinski pripomočki, vendar prej ni obstajal skupen, strukturiran način za oceno ali primerjavo njihove osnovne kakovosti in varnosti.

## Zakaj je pomemben

Trgovine z aplikacijami gostijo na stotine tisočev aplikacij za zdravje in dobro počutje z izjemno različno kakovostjo, in preden je obstajala skupna tehnična specifikacija, pacient, zdravnik ali zdravstveni sistem ni imel strukturiranega, primerljivega načina za presojo osnovne kakovosti in varnosti ene aplikacije glede na drugo poleg ocen z zvezdicami in trženjskih trditev – vrzel, ki je pomembna, ker lahko slabo zasnovana zdravstvena aplikacija še vedno povzroči resnično škodo (netočna vsebina, slaba varnost podatkov, zavajajoče trditve), tudi če ne dosega regulatornega praga medicinskega pripomočka. ISO/TS 82304-2 je namenoma strukturiran okoli področij, ki jih nespecialistični ocenjevalec lahko dosledno oceni, zaradi česar je postal tehnična osnova za več nacionalnih in komercialnih storitev označevanja kakovosti in kuracije zdravstvenih aplikacij, ki zdravstvenim sistemom in knjižnicam aplikacij omogočajo zagovorljiv, standardiziran način za vključitev ali izključitev aplikacij s priporočenega seznama, namesto zanašanja na ad hoc presojo.

## Kako se uporablja

```
Ocena je organizirana okoli opredeljenih področij kakovosti,
ovrednotenih s strukturiranim pregledom in ne z eno samo
številčno formulo:

Uporabnost                        — jasnost, dostopnost in enostavnost
                                     uporabe za predvideno skupino
                                     uporabnikov
Tehnična robustnost/zanesljivost  — stabilnost, zmogljivost in
                                     odsotnost tehničnih napak
Interoperabilnost                 — zmožnost izmenjave podatkov z
                                     drugimi sistemi, kjer je to
                                     pomembno za funkcijo aplikacije
Kakovost in varnost vsebine       — natančnost, aktualnost in odsotnost
                                     škodljivih ali zavajajočih
                                     zdravstvenih trditev
Varnost in zasebnost              — praksa varstva podatkov in
                                     preglednost glede uporabe podatkov

Vsako področje se točkuje s strukturiranimi merili pregleda in se
združi v skupno oceno kakovosti, ki jo več shem označevanja
kakovosti zdravstvenih aplikacij uporablja kot tehnično osnovo za
javno oznako kakovosti ali odločitev o vključitvi v kurirano
knjižnico.
```

## Izračunani primer

Program knjižnice digitalnih aplikacij zdravstvenega sistema želi kurirati priporočen seznam aplikacij za dobro počutje za paciente, namesto da bi izbiro aplikacij v celoti prepustil iskanju v trgovini z aplikacijami. Vsaka kandidatna aplikacija je ocenjena glede na področja ISO/TS 82304-2: aplikacija za sledenje spanju dobro odreže pri uporabnosti in tehnični robustnosti, ustrezno pri kakovosti vsebine, vendar je med pregledom varnosti in zasebnosti označena zaradi deljenja uporabniških podatkov s tretjimi oglaševalci brez jasnega razkritja – ugotovitev, dovolj pomembna za izključitev aplikacije s priporočenega seznama kljub sicer močni oceni uporabnosti. Ta izid po področjih je bolj uporaben tako za kurirajočo ekipo kot, če se deli, za razvijalca aplikacije kot ena sama mešana ocena kakovosti, saj natančno opredeli, kateri vidik je treba popraviti, preden bi lahko aplikacijo ponovno obravnavali.

## Viri podatkov in omejitve

Oceno po ISO/TS 82304-2 običajno opravi usposobljen ocenjevalec ali akreditirana ocenjevalna storitev po strukturiranih merilih pregleda specifikacije za vsako področje, več nacionalnih in komercialnih pobud (organizacije za označevanje kakovosti in kuracijo zdravstvenih aplikacij, nekatere s formalno podporo nacionalnega zdravstvenega sistema) pa standard uporablja kot tehnično osnovo za lastne javne oznake kakovosti aplikacij – kar pomeni, da status »certificirano« ali »označeno« aplikacije v praksi pogosto odraža izvedbo standarda v določeni shemi označevanja in ne nujno enakega postopka v vseh shemah, zato je treba poleg vsake navedene oznake kakovosti preveriti in razkriti specifično ocenjevalno organizacijo in njeno metodologijo. Specifikacija ocenjuje kakovost in osnovne varnostne značilnosti aplikacije kot programske opreme; ni nadomestek za regulatorno odobritev medicinskega pripomočka, kadar trditve ali funkcije aplikacije dejansko dosegajo prag medicinskega pripomočka, uporaba kot nadomestek pa bi bila kategorialna napaka.

## Pasti

- **Obravnavanje oznake kakovosti kot regulatorne odobritve**: aplikacija, ocenjena in označena po ISO/TS 82304-2, s tem ni prejela regulatorne odobritve medicinskega pripomočka; obe služita različnima namenoma in ju ne smemo nikoli mešati pri opisu ali trženju aplikacije.
- **Predpostavka, da so vse sheme označevanja, ki temeljijo na standardu, enakovredne**: različne organizacije izvajajo oceno na podlagi ISO/TS 82304-2 z lastnimi specifičnimi postopki pregleda in strogostjo; preverite, katera organizacija je opravila oceno in kako, in ne obravnavajte katere koli oznake »na podlagi ISO/TS 82304-2« kot zamenljive s katero koli drugo.
- **Ocenjevanje samo uporabnosti ob zanemarjanju varnosti in zasebnosti**: težave z uporabnostjo so končnemu uporabniku najbolj vidne in jih je najlažje neformalno oceniti, kar lahko ocenjevalce vodi v podcenjevanje manj vidnega, a potencialno posledičnejšega področja varnosti in zasebnosti.
- **Obravnavanje ocene kot enkratne, trajne certifikacije**: vsebina aplikacije, varnostne prakse in dogovori o deljenju podatkov s tretjimi osebami se lahko po začetni oceni spremenijo; verodostojen program označevanja kakovosti ponovno ocenjuje periodično in začetnega uspeha ne obravnava kot trajnega.

## Viri

- International Organization for Standardization, ISO/TS 82304-2:2021, »Health software — Part 2: Health and wellness apps — Quality and reliability«
- ISO Technical Committee 215 (Health Informatics), informacije o publikacijah in delovnih skupinah
- Nacionalne in komercialne organizacije za označevanje kakovosti in kuracijo zdravstvenih aplikacij, ki objavljajo svojo ocenjevalno metodologijo na podlagi tega standarda

Glej tudi: [ocena lestvice uporabnosti sistema (SUS)](../ocena-lestvice-uporabnosti-sistema-sus/), dopolnilen, ožji instrument, specifičen za uporabnost, ki se pogosto uporablja skupaj s širšo oceno kakovosti po ISO/TS 82304-2.
