# Stopnja doslednosti vključenosti pacientov

Stopnja doslednosti vključenosti pacientov meri, kako redno vključen pacient v daljšem obdobju uporablja digitalni zdravstveni izdelek – na primer beleži hrano ali simptome, zapisuje telesno dejavnost ali pregleduje zdravstvene podatke – in ne samo, ali ga je sploh uporabil. Je longitudinalni kazalnik, različen od štetja aktivne uporabe v določenem trenutku: dva pacienta imata lahko enak status »aplikacijo sem uporabil ta mesec«, pa eden beleži dosledno vsak dan, drugi enkrat zabeleži in za tri tedne izgine, ločuje ju le kazalnik doslednosti.

## Zakaj je pomembna

Trajna, redna interakcija z digitalnim zdravstvenim orodjem je eden zanesljivejših vodilnih kazalnikov kliničnega učinka, zlasti pri stanjih, odvisnih od vedenja, kot so sladkorna bolezen, obvladovanje telesne mase in duševno zdravje, kjer vrednost orodja izvira iz navade, ki jo podpira, in ne iz posamezne seje. Izdelek lahko poroča o zdravem številu mesečnih aktivnih uporabnikov, medtem ko dejansko služi populaciji, ki se prijavi enkrat in se oddalji, saj je mesečna aktivna uporaba nizka meja, ki ne pove ničesar o vzorcu uporabe znotraj meseca; kazalniki doslednosti to odkrijejo na način, ki ga preprosta štetja dejavnosti ne zmorejo. Ker je doslednost tudi ena težjih stvari za vzdrževanje v mesecih in ne v tednih, je pošteneje merilo kakovosti izdelka in klinične primernosti kot kratkoročne številke vključenosti, ki so takoj po uvajanju nagnjene k učinkom novosti.

## Kako se izračuna

```
Stopnja doslednosti vključenosti = tedni z vsaj eno kvalificirano interakcijo
                                    / skupno število tednov vključenosti × 100

»Kvalificirana interakcija« mora biti izrecno in dosledno opredeljena
(npr. vnos obroka, vnos simptomov ali dokončana sinhronizacija dejavnosti) –
nikoli pasivni dogodek, kot je odprtje aplikacije brez zabeleženega dejanja.

Poročajte kot porazdelitev, ne le kot populacijsko povprečje:
  npr. delež pacientov z ≥ 80 % tedenske doslednosti,
       delež s 50-79 %, delež z < 50 %
```

## Izračunani primer

Aplikacija za prehransko svetovanje vključi pacienta za 12 tednov. Pacient v 9 od teh 12 tednov zabeleži vsaj en kvalificiran vnos obroka, kar daje posamezno stopnjo doslednosti vključenosti 9 / 12 × 100 = 75 %. V celotni kohorti aplikacije z 2.000 pacienti, vključenimi vsaj 12 tednov, jih 600 (30 %) ohranja ≥ 80 % tedenske doslednosti, 900 (45 %) jih je v pasu 50-79 %, 500 (25 %) pa pod 50 %. Poročanje samo o povprečju kohorte (ki bi lahko znašalo okoli 65 %) bi prikrilo, da se četrtina pacientov komaj vključuje – segment, ki ga je vredno raziskati posebej in ne razredčiti v splošno povprečje.

## Viri podatkov in omejitve

Podatki o doslednosti prihajajo iz lastnih dnevnikov dogodkov izdelka (vnosi obrokov, sinhronizacije dejavnosti, vprašalniki), opredelitev »kvalificirane interakcije« pa ima izjemen učinek na dobljeno stopnjo – ohlapna opredelitev (katero koli odprtje aplikacije) bo vedno videti boljša od stroge (dokončan, smiseln vnos), zato je treba uporabljeno opredelitev jasno navesti ob vsaki sporočeni številki. Samodejno sinhronizirane podatke (na primer povezan fitnes zapestnik, ki v ozadju sinhronizira dejavnost) je treba poročati ločeno od ročno vnesenih, saj lahko samodejna sinhronizacija napihne navidezno doslednost, ne da bi odražala kakršen koli dejanski trud pacienta ali vključenost v smernice izdelka.

## Pasti

- **Mešanje odprtij aplikacije s smiselno vključenostjo**: pasivno odprtje aplikacije (na primer sproženo s potisnim obvestilom) ni isto kot vnos obroka ali dokončan vprašalnik; opredelite in poročajte le o kvalificiranih interakcijah.
- **Poročanje samo o populacijskem povprečju**: videti zdravo povprečje doslednosti lahko skriva bimodalno populacijo zelo vključenih in skoraj popolnoma nevključenih pacientov; poročajte o porazdelitvi po pasovih doslednosti, ne le o povprečju.
- **Spregledan imenovalec dolžine vključenosti**: primerjava stopenj doslednosti med pacienti, vključenimi zelo različno dolgo, brez upoštevanja trajanja vključenosti, bo pristranska v korist skupine s krajšim in lažje vzdržljivim oknom merjenja.
- **Samodejna sinhronizacija v ozadju, ki napihne stopnjo**: pasivno sinhroniziran tok podatkov z nosljive naprave lahko nevključenega pacienta prikaže kot dosledno aktivnega brez resnične spremembe vedenja ali vključenosti v izdelek.

## Viri

- Recenzirana literatura o vzorcih vključenosti v digitalno zdravje in njihovi povezavi s kliničnimi izidi, na primer študije, objavljene v reviji Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), smernice o kakovosti podatkov, ki jih ustvarijo pacienti, in merjenju vključenosti
- Digital Therapeutics Alliance, smernice dobre prakse za merjenje vključenosti in izidov pri digitalnih terapevtikih

Glej tudi: [stopnja zadržanja uporabnikov](../stopnja-zadržanja-uporabnikov/), tesno povezan kazalnik, ki pove, ali pacient sploh ostane vključen, ne glede na to, kako dosledno je vključen med vključenostjo.
