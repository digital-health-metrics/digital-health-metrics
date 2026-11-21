# Felhasználó-megtartási arány

A felhasználó-megtartási arány azon felhasználók hányada, akik a kiindulási időszakban aktívak voltak, és egy későbbi időszakban is aktívak maradnak; fordítottja a lemorzsolódási arány (churn, vagy dropout), azoknak a hányada, akik teljesen abbahagyják a termék használatát. Míg a betegportál-elfogadási arány (lásd az adott témát) azt méri, hogy a beteg egyáltalán érdemben aktivál-e egy digitális egészségügyi terméket, a megtartás azt méri, hogy tovább is használja-e – és bármely előfizetéses jellegű vagy folyamatos ellátást nyújtó digitális egészségügyi terméknél a megtartás általában az a mutató, amely a legszorosabban kapcsolódik mind a klinikai hatáshoz, mind az üzleti fenntarthatósághoz.

## Miért fontos

Az a digitális egészségügyi termék, amely nem tudja megtartani a felhasználókat, nem tud tartós klinikai előnyt nyújtani, bármilyen erősek is a kezdeti elfogadási vagy aktiválási számai: egy krónikus állapotot kezelő eszköz, amelyet két hétig használnak, majd elhagynak, valószínűleg nem mozdít olyan biometrikus kimenetet, amely hónapokig tartó, tartós viselkedésváltozáson múlik. A megtartás egyúttal az egyik legnagyobb üzleti jelentőségű mutató, amelyet a digitális egészségügyi vállalatok a befektetőknek és a finanszírozóknak jelentenek, mert a megtartási görbék (a lemorzsolódás időbeli alakja, nem csupán egyetlen megtartási százalék) megmutatják, hogy a termék valóban fenntartható használati mintázatot talált-e, vagy csupán az újdonság hajtotta kezdeti érdeklődést ragadja meg, amely előre láthatóan elhalványul. Az a megtartási görbe, amely a kezdeti esés után ellaposodik (azok a betegek, akik átjutnak az első hónapon, általában maradnak), egészen más, és sokkal egészségesebb jelzés, mint az, amely alj nélkül, egyenletesen tovább csökken.

## Hogyan számítják ki

```
Megtartási arány (N. időszak) = az N. időszakban aktív azon felhasználók, akik
                                a kiindulási kohorszidőszakban is aktívak voltak /
                                a kiindulási kohorszidőszak felhasználói × 100

Lemorzsolódási arány = 1 − megtartási arány (ugyanarra az időszakra)

Kohorsz-megtartási görbeként jelentse (megtartás az 1., 2., 3. napon/héten/hónapon…),
ne egyetlen pillanatnyi számként, mert az egyetlen pillanatkép összemossa
a nemrég csatlakozott felhasználókat (akiknek még nem volt esélyük lemorzsolódni)
a régóta jelenlévőkkel.
```

## Kidolgozott példa

Egy digitális egészségügyi alkalmazás januárban 1000 új felhasználóból álló kohorszot vesz fel. Az 1. hónap végére az eredeti 1000-ből 640 még aktív (1. havi megtartás 64%). A 3. hónap végére 410 marad aktív (3. havi megtartás 41%). A 6. hónapra 380 marad aktív (6. havi megtartás 38%). E görbe alakja – meredek kezdeti esés, majd a 3. és 6. hónap közötti ellaposodás – arra utal, hogy a termék stabil magot tart meg a felhasználókból, miután átjutottak a kezdeti elfogadási akadályon, ami lényegesen más és biztatóbb jelzés, mintha a 3. és 6. hónap közötti csökkenés ugyanolyan ütemben folytatódott volna, mint az 1. és 3. hónap között.

## Adatforrások és megszorítások

A megtartást a termék saját bejelentkezési vagy aktivitási eseménynaplóiból számítják, az „aktív” fogalmát következetesen meghatározva (például legalább egy minősített munkamenet az időszakban) minden összehasonlított kohorszra. A kohorszokat azonos alapon kell összehasonlítani – azonos kiindulási „aktív” meghatározással, azonos hosszúságú megfigyelési ablakkal –, mivel még kisebb meghatározási különbségek is (30 napos és 28 napos hónapok, szigorúbb vagy megengedőbb „aktív” küszöb) néhány ponttal elmozdíthatják a jelentett megtartási százalékot a felhasználói magatartás bármilyen valódi különbsége nélkül. A szezonális hatások gyakoriak az újévi fogadalmakhoz vagy konkrét egészségügyi figyelemfelhívási időszakokhoz kötött egészségügyi alkalmazásoknál, ezért az év/év kohorszösszehasonlítás általában informatívabb, mint az év különböző szakaszaiból származó szomszédos kohorszok összevetése.

## Buktatók

- **Egyetlen megtartási pillanatkép jelentése görbe helyett**: az „X% még aktív” szám a lemorzsolódás időbeli alakja nélkül nem tudja megkülönböztetni az ellaposodó (egészséges) terméket a folyamatosan hanyatlótól (egészségtelen).
- **Az „aktív” meghatározásának megváltoztatása a jelentési időszakok között**: az aktív felhasználó fogalmának lazítása (például passzív alkalmazásmegnyitás számolása befejezett művelet helyett) úgy tüntetheti fel a megtartás javulását, hogy a tényleges használat nem változott.
- **A kohorsz szezonalitásának figyelmen kívül hagyása**: egy januári kohorsz megtartásának (amelyet az újévi fogadalmakból eredő beíratások gyakran felduzzasztanak, ami átlagosan kevésbé motivált kohorszt hoz be) összevetése az év más szakában szerzett kohorsszal félrevezető trendkövetkeztetésekhez vezethet.
- **A szerves és a fizetett szerzésű kohorszok keverése**: a különböző csatornákon szerzett felhasználók gyakran nagyon eltérően maradnak meg; egyetlen összesített megtartási számba keverésük elrejthet egy csatornaspecifikus megtartási problémát.

## Források

- Szakértők által lektorált szakirodalom a digitális egészségügyi alkalmazások bevonódásáról és lemorzsolódásáról, például a Journal of Medical Internet Research (JMIR mHealth and uHealth) folyóiratban megjelent tanulmányok
- Digital Therapeutics Alliance, bevált gyakorlati útmutató a digitális terápiák bevonódásának és megtartásának méréséhez
- Iparági összehasonlító jelentések a mobilegészségügyi alkalmazások megtartásáról, elemzőplatformoktól és digitális egészségügyi piackutató szervezetektől

Lásd még: [betegbevonódás-állandósági arány](../betegbevonódás-állandósági-arány/), amely a megtartott felhasználók bevonódásának minőségét méri, szemben azzal, hogy egyáltalán beíratva maradnak-e.
