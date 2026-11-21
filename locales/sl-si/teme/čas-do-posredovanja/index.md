# Čas do posredovanja

Čas do posredovanja je pretekli čas od ustvarjenja samodejnega zdravstvenega opozorila – na primer ko naprava za oddaljeno spremljanje zazna vitalni znak zunaj razpona ali ko orodje za digitalno triažo označi poslabšanje pacientovega stanja – do trenutka, ko član klinične ekipe dejansko začne odziv. Je procesna mera, ki določa, ali sistem samodejnega opozarjanja izpolni svojo temeljno obljubo: odkritje težave prej, kot bi jo odkril tradicionalni model načrtovanih pregledov ali telefonskih klicev, ki jih sproži pacient.

## Zakaj je pomemben

Sistem opozarjanja, ki ustvari klinično pravilno opozorilo, a mu ne sledi pravočasen odziv, dejansko ni izboljšal varnosti pacientov; celotna vrednostna ponudba oddaljenega spremljanja in samodejnega opozarjanja temelji na hitrejšem zapiranju zanke kot alternativna, nespremljana pot. Ker različne resnosti opozoril zahtevajo različno nujnost odziva, je treba čas do posredovanja vedno poročati po stopnjah resnosti in ne kot eno povprečje, saj lahko hitro povprečje vseh opozoril skrije nevarno počasen odziv na majhno število najresnejših. Ta kazalnik je tudi eden najjasnejših in najprepričljivejših načinov za prikaz vrednosti programa samodejnega spremljanja kliničnemu vodstvu in plačnikom, ker ga je mogoče neposredno primerjati s prejšnjim, nesamodejnim časom odziva iste organizacije v podobnem kliničnem scenariju.

## Kako se izračuna

```
Čas do posredovanja = časovni žig (klinični odziv začet) −
                       časovni žig (opozorilo ustvarjeno)

Poročajte mediano in visok percentil (npr. 90.), segmentirano po
stopnji resnosti opozorila, ne kot eno mešano povprečje.

»Klinični odziv začet« mora biti opredeljen natančno in dosledno –
npr. zdravnik odpre pacientov zapis in ukrepa ali dokumentiran
poskus izhodnega stika – ne zgolj ogled opozorila ali potrditev
brez kakršnega koli ukrepa.
```

## Izračunani primer

Sistem opozarjanja programa oddaljenega spremljanja srca v mesecu označi 200 opozoril o aritmiji visoke resnosti. Mediani čas od ustvarjenja opozorila do začetka izhodnega stika zdravnika je 12 minut, s časom 90. percentila 38 minut. Zgodovinski podatki prejšnje, nespremljane poti iste populacije (kjer bi se podoben dogodek običajno pokazal šele ob naslednjem načrtovanem pregledu v kliniki ali ob prihodu v bolnišnico) kažejo mediani čas do kakršnega koli kliničnega odziva, merjen v dneh in ne v minutah. Ta primerjava – ne številka 12 minut sama zase – dokazuje klinično vrednost programa spremljanja; številka 90. percentila je enako pomembna, saj prepozna rep opozoril, na katera se je ukrepalo več kot pol ure, in zahteva lasten pregled temeljnih vzrokov.

## Viri podatkov in omejitve

Časovni žigi ustvarjenja opozoril prihajajo iz lastnega dnevnika dogodkov platforme za spremljanje; časovni žigi kliničnega odziva običajno prihajajo iz revizijske sledi elektronskega zdravstvenega zapisa ali iz lastnega sistema delovnih tokov ali upravljanja nalog oskrbovalne ekipe, ta dva sistema pa morata biti natančno časovno sinhronizirana, da je izračunani interval zanesljiv. »Odziv začet« potrebuje strogo, dokumentirano opredelitev, saj je zdravnik, ki opozorilo le ogleda ali opusti brez nadaljnjega ukrepa, bistveno drugačen in veliko manj pomirjujoč dogodek kot tisti, ki sproži dejanski izhodni stik ali posredovanje – mešanje obeh bo naredilo čas odziva boljši od klinične resničnosti. Nočna in vikend zasedenost običajno pomembno vpliva na čas do posredovanja, zato je treba ta kazalnik poročati po segmentih ure dneva in dneva v tednu, kjer obseg opozoril to dopušča, in ne le kot 24/7 mešano povprečje, ki lahko prikrije resno vrzel v odzivu zunaj delovnega časa.

## Pasti

- **Štetje potrditve opozorila kot odziva**: zdravnik, ki opozorilo ogleda ali opusti, ni isto kot začetek kliničnega odziva; odziv opredelite strogo kot dokumentirano dejanje, ne kot pasivno potrditev.
- **Poročanje enega mešanega časa za vse resnosti**: hitro povprečje nizko- in visokoresnih opozoril skupaj lahko skrije nevarno počasen odziv prav na najresnejša opozorila, ki štejejo največ.
- **Spregledani učinki vzorcev zasedenosti**: čas odziva se pogosto bistveno razlikuje glede na uro dneva in dan v tednu zaradi ravni zasedenosti; eno skupno povprečje lahko skrije sistematično vrzel v odzivu zunaj delovnega časa ali ob vikendih.
- **Primerjava časa do posredovanja med organizacijami z različnimi pragovi opozoril**: organizacija z bolj previdnim (občutljivejšim) pragom opozarjanja bo ustvarila več opozoril nizke nujnosti, kar lahko razredči njen povprečni čas odziva v primerjavi z organizacijo s strožjim pragom, neodvisno od dejanske klinične odzivnosti.

## Viri

- NHS England, smernice o oddaljenem spremljanju in standardih kliničnega odziva virtualnih oddelkov
- ONC / HealthIT.gov, smernice o zasnovi in varnosti sistemov kliničnega opozarjanja
- Recenzirana literatura o časih odziva na opozorila pri oddaljenem spremljanju pacientov in kliničnih izidih, na primer študije, objavljene v reviji npj Digital Medicine

Glej tudi: [stopnja razpoložljivosti naprav](../stopnja-razpoložljivosti-naprav/), saj je zanesljiva številka časa do posredovanja odvisna od tega, da je osnovna naprava za spremljanje sploh povezana in lahko ustvari opozorilo.
