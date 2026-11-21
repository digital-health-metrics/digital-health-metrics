# Natančnost triaže in usmerjanja pacientov

Natančnost triaže in usmerjanja pacientov je delež stikov s pacienti, pri katerih samodejno ali z umetno inteligenco podprto orodje za triažo pacienta pravilno usmeri na ustrezno raven in okolje oskrbe – na primer samooskrba, primarna oskrba, nujna oskrba ali urgenca – glede na klinično validiran referenčni standard. Je kazalnik varnosti in učinkovitosti za vsaka digitalna »vhodna vrata«, preverjalnik simptomov ali sistem triaže z umetno inteligenco: celotna vrednostna ponudba orodja temelji na pravilnem, hitrem in doslednem usmerjanju pacientov.

## Zakaj je pomembna

Netočno orodje za triažo povzroča škodo v obe smeri: podtriaža (usmeritev pacienta na nižjo raven oskrbe, kot jo potrebuje) lahko zakasni zdravljenje resnične nujnosti, medtem ko nadtriaža (usmeritev pacienta na višjo raven oskrbe, kot jo potrebuje) zapravlja omejene zmogljivosti urgence in nujne oskrbe ter brez kliničnih koristi poveča strošek in tesnobo pacienta. Ker imata ta dva načina napake tako različni posledici, je treba natančnost triaže in usmerjanja vedno poročati skupaj s smerjo napak, ne kot eno skupno številko natančnosti, ki skrije, ali se orodje moti varno ali nevarno. Regulatorji in zdravstveni sistemi, ki ocenjujejo orodje za triažo z umetno inteligenco pred uvedbo, vse pogosteje zahtevajo tovrstno stratificirano poročanje o natančnosti kot pogoj za klinično odobritev, zlasti za orodja, ki delujejo z določeno mero samostojnosti od zdravnika.

## Kako se izračuna

```
Natančnost triaže in usmerjanja = pravilno usmerjeni stiki / vsi triažirani stiki × 100

Podtriažo in nadtriažo poročajte ločeno:
  Stopnja podtriaže = stiki, usmerjeni na nižjo raven nujnosti kot po
                       referenčnem standardu / vsi triažirani stiki × 100
  Stopnja nadtriaže = stiki, usmerjeni na višjo raven nujnosti kot po
                       referenčnem standardu / vsi triažirani stiki × 100

Referenčni standard je običajno retrospektiven pregled istega primera
s strani zdravnika, kjer je mogoče slep glede izhoda orodja.
```

## Izračunani primer

Orodje za preverjanje simptomov z umetno inteligenco v mesecu triažira 5.000 stikov s pacienti. Slep pregled zdravnika naključnega vzorca 500 teh stikov ugotovi, da jih je bilo 430 usmerjenih na pravilno raven nujnosti (natančnost 86 %), 45 jih je bilo podtriaženih (9 %) in 25 nadtriaženih (5 %). Stopnja podtriaže 9 % je številka, ki jo je najnujneje raziskati, saj predstavlja stike, kjer je bil pacient morda usmerjen na manj nujno oskrbo, kot jo je dejansko potreboval; stopnja nadtriaže 5 % je skrb glede zmogljivosti in stroškov, ne pa neposredna varnostna.

## Viri podatkov in omejitve

Referenčni standard, glede na katerega se meri natančnost triaže, je izjemno pomemben: pregled enega zdravnika vnese variabilnost presoje tega zdravnika, zato verodostojna številka natančnosti običajno zahteva več neodvisnih ocenjevalcev z dokumentiranim skladjem med ocenjevalci ali primerjavo z naknadnim, potrjenim kliničnim izidom (kakšno oskrbo je pacient dejansko potreboval, ugotovljeno naknadno). Pomembno je tudi vzorčenje: pregled samo priročnega vzorca stikov ali samo tistih, označenih kot nenavadni, ne bo dal številke, ki jo je mogoče posplošiti na splošno uspešnost orodja. Številke natančnosti je treba poročati ločeno po kategoriji prisotnega simptoma ali težave, kjer to dopušča osnovni obseg primerov, saj orodja za triažo redko delujejo enakomerno pri vseh stanjih.

## Pasti

- **Poročanje ene mešane številke natančnosti**: združitev podtriaže in nadtriaže v eno številko skrije, ali se napake orodja nagibajo k nevarnejšemu načinu napake; vedno ju poročajte ločeno.
- **Uporaba enega neslepega ocenjevalca kot referenčnega standarda**: to lahko tiho pristransko usmeri številko natančnosti k temu, kar bi ocenjevalec storil sam, in ne k neodvisnemu kliničnemu standardu.
- **Validacija samo na retrospektivnih, priročnih podatkih**: natančnost usmerjanja orodja v resničnem svetu ob živem, dvoumnem vnosu pacienta se pogosto bistveno razlikuje od natančnosti na urejenem validacijskem naboru, sestavljenem med razvojem.
- **Spregledan premik uspešnosti po uvedbi**: natančnost modela triaže z umetno inteligenco se lahko skozi čas poslabša, ko se spreminjajo populacije pacientov, simptomi ob prihodu ali razpoložljivost poti oskrbe; natančnost je treba merjeti ponovno redno, ne validirati enkrat in predpostaviti stabilnosti.

## Viri

- ONC / HealthIT.gov, smernice o varnosti in zagotavljanju kakovosti podpore kliničnemu odločanju in orodij z umetno inteligenco
- Recenzirana literatura o natančnosti preverjalnikov simptomov in orodij za triažo z umetno inteligenco, na primer študije, objavljene v revijah JAMIA, npj Digital Medicine in BMJ Health & Care Informatics
- NHS England, smernice o klinični varnosti orodij za digitalno triažo in posvetovanje na daljavo (standarda ravnanja s kliničnim tveganjem DCB0129/DCB0160)

Glej tudi: [čas obdelave digitalnih napotitev](../čas-obdelave-digitalnih-napotitev/), procesna mera, ki je najbolj neposredno za odločitvijo o triaži.
