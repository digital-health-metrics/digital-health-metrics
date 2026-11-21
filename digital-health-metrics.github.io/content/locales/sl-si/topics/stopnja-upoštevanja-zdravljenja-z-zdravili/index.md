# Stopnja upoštevanja zdravljenja z zdravili

Stopnja upoštevanja zdravljenja z zdravili (adherenca) meri, v kolikšni meri pacient jemlje predpisano zdravilo po navodilih, najpogosteje izražena kot delež dni v določenem obdobju, v katerih je imel pacient na voljo zdravilo, kot je predpisano. Je eden najpomembnejših kazalnikov digitalnega zdravja, ker je neupoštevanje pogosto, ob ustrezni podpori večinoma preprečljivo in neposredno povezano s slabšimi kliničnimi izidi in višjimi nadaljnjimi stroški – to pa je prav vrzel, ki jo želijo zapolniti aplikacije za opomnike o zdravilih, pametne stekleničke za tablete in opomniki za obnovitev recepta v lekarni.

## Zakaj je pomembna

Javnozdravstveni organi ocenjujejo, da neupoštevanje zdravljenja kroničnih bolezni pri nekaterih stanjih doseže celo 50 %, in je vodilni preprečljiv vzrok izogibljivih hospitalizacij, napredovanja bolezni in neuspeha zdravljenja, ki se napačno pripisuje samemu zdravilu in ne nedosledni uporabi. Digitalna orodja za podporo upoštevanju zdravljenja obstajajo prav za zapolnitev te vrzeli, zato je pri vsakem programu, ki vključuje komponento zdravil, stopnja upoštevanja običajno najpomembnejši kazalnik za odločanje: je vzročno pred biometričnim izboljšanjem, ponovnim sprejemom in večino drugih kazalnikov kliničnih izidov, o katerih bi program sicer poročal. Program, ki izboljša vključenost ali zadovoljstvo, ne da bi premaknil upoštevanje zdravljenja, verjetno še ni dokazal verjetnega mehanizma za klinično korist.

## Kako se izračuna

```
Delež pokritih dni (Proportion of Days Covered, PDC) = dnevi v obdobju z zdravilom
                                    pri roki (na podlagi dnevne zaloge iz
                                    izdaj) / dnevi v obdobju merjenja × 100

Razmerje posesti zdravil (Medication Possession Ratio, MPR) = skupna dnevna
                                    zaloga, pridobljena v obdobju / dnevi v
                                    obdobju × 100 (lahko preseže 100 %
                                    z zgodnjimi obnovitvami; PDC je zato
                                    na splošno bolj priporočen)

Pacient se običajno uvrsti med »upoštevajoče« pri pragu PDC ≥ 80 %,
po splošno uporabljeni konvenciji kakovostnih meril.
```

## Izračunani primer

Pacientu je predpisano dnevno kronično zdravilo v 90-dnevnem obdobju merjenja. Zapisi o izdajah v lekarni kažejo, da je pacient pridobil dovolj zdravila za pokritje 76 od teh 90 dni, z dvema vrzelma: 9-dnevno vrzeljo po tem, ko mu je zdravila zmanjkalo pred obnovitvijo, in 5-dnevno vrzeljo ob hospitalizaciji. PDC je 76 / 90 × 100 = 84 %, kar presega običajni prag upoštevanja 80 %. Če bi se iste vrzeli merile z MPR na podlagi dnevne zaloge, izdane in ne dejansko pokritih dni, bi zgodnja obnovitev drugje v obdobju lahko potisnila razmerje nad 100 %, kar kaže, zakaj je PDC bolj konzervativna in na splošno priporočena mera.

## Viri podatkov in omejitve

Standardni vir so zahtevki lekarne ali podatki o izdajah (od upravitelja lekarniških ugodnosti ali povezanega lekarniškega sistema), saj odražajo, kaj je pacient dejansko pridobil in ne kaj mu je bilo predpisano; podatki o receptih sami precenijo upoštevanje, ker ne potrdijo, da je pacient zdravilo sploh prevzel. Digitalna orodja za podporo upoštevanju – pametne stekleničke za tablete, zaužitni senzorji, povezani pametni inhalatorji, ki beležijo vsak odmerek pri dihalnih boleznih, kot sta astma in KOPB, in preverjanja v aplikaciji – nudijo podatke višje ločljivosti o tem, ali je bil odmerek dejansko vzet, ne le pridobljen, vendar jih uporablja majhna, potencialno nereprezentativna manjšina pacientov, zato mešanje z napravo potrjenega upoštevanja s PDC na podlagi zahtevkov v populaciji zahteva previdnost pri razlagi. Upoštevanje je treba meriti v obdobju, dovolj dolgem za glajenje posameznih izpuščenih odmerkov, a dovolj kratkem za odkritje pomembnega upada, preden povzroči klinično škodo – 90-dnevna drseča okna so pogosta za kronična zdravila.

## Pasti

- **Uporaba MPR brez razkritja, da lahko preseže 100 %**: nepojasnjena razmerja nad 100 % zaradi zgodnjih obnovitev ali kopičenja zalog naredijo primerjavo med pacienti in obdobji nezanesljivo, razen če se uporabi PDC ali je razmerje izrecno omejeno.
- **Obravnavanje podatkov o receptih ali naročilih kot dokaza upoštevanja**: recept, napisan ali poslan v lekarno, ne pove ničesar o tem, ali je pacient zdravilo prevzel ali vzel; to vrzel zapolnijo le podatki o izdajah ali napravi.
- **Brezplodna uporaba enega praga upoštevanja za vsa stanja**: klinična posledica izpuščenih 20 % odmerkov se izjemno razlikuje glede na skupino zdravil (npr. antikoagulanti proti statinom), zato lahko en sam 80-odstotni prag, uporabljen univerzalno, pri nekaterih zdravilih podceni ali preceni klinično tveganje.
- **Spregledane zamenjave in prekinitve zdravil**: pacient, ki je klinično in ustrezno preklopljen na drugo zdravilo, se lahko pri prvotnem zdravilu pokaže kot velik upad upoštevanja, če se zamenjava v izračunu ne upošteva.

## Viri

- Pharmacy Quality Alliance (PQA), specifikacije mere Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), mere upoštevanja zdravljenja z zdravili v sistemu Star Ratings
- Recenzirana literatura o merjenju upoštevanja zdravljenja z zdravili in digitalnih intervencijah za upoštevanje, na primer študije, objavljene v reviji Journal of Managed Care & Specialty Pharmacy

Glej tudi: [stopnja izboljšanja biometričnih meritev](../stopnja-izboljšanja-biometričnih-meritev/), katere glavni vzročni dejavnik je upoštevanje zdravljenja kroničnih bolezni z zdravili.
