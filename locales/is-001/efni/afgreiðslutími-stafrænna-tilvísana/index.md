# Afgreiðslutími stafrænna tilvísana

Afgreiðslutími stafrænna tilvísana er sá tími sem líður frá því að tilvísandi læknir sendir rafræna tilvísun þar til móttökuþjónustan hefur flokkað hana og annaðhvort samþykkt hana, hafnað eða bókað tíma. Þetta er ferlismælikvarði (flæðismælikvarði), ólíkur heildarbiðtíma sjúklings, og er einn skýrasti vettvangurinn þar sem sýna má að breyting á stafrænu kerfi (skipulögð rafræn tilvísun, myndbyggð flokkun, staðlað tilvísunareyðublað) hreyfir rekstrarlega tölu en ekki aðeins ánægjukönnun.

## Hvers vegna það skiptir máli

Hægt eða mjög breytilegt flokkunarstig bætir töf við áður en sjúklingur kemst yfirhöfuð á klínískan biðlista, og þar sem sú töf verður áður en nokkur klínísk umönnun hefst er hún hrein sóun í ferlinu sem stafræn tækni er vel til þess fallin að fjarlægja. Tilvísunarkerfi sem krefjast „endursendingar til tilvísanda“ vegna vantandi upplýsinga mynda endurvinnsluhringi sem auðvelt er að missa af ef afgreiðslutími er aðeins mældur á tilvísunum sem fara hreint í gegn í fyrsta sinn. Þar sem þjónusta hefur tekið upp skipulögð stafræn tilvísunareyðublöð, skyldureiti eða myndbyggða flokkun (til dæmis í húðlækningum í fjarþjónustu) er afgreiðslutími yfirleitt sá einstaki mælikvarði sem sannfærir mest um ávinninginn, því hann er mælanlegur fyrir og eftir breytinguna með sömu mælitækjum.

## Hvernig hann er reiknaður

```
Afgreiðslutími = tímastimpill(flokkunarákvörðun) − tímastimpill(innsending tilvísunar)

Gefðu upp miðgildi og háa hundraðshlutamörk (oftast 90. hundraðshlutamark),
ekki aðeins meðaltalið, því dreifingin er mjög hægri skekkt vegna
endursendra eða flókinna tilvísana.

Íhugaðu tímamælingar á undirstigum þar sem kerfið skráir þær:
  Innsending → móttekið af þjónustunni
  Móttekið → flokkunarákvörðun
  Flokkunarákvörðun → bókaður tími (þar sem það á við)
```

## Dæmi útreiknað

Úttektarslóð rafræns tilvísunarkerfis sýnir miðgildi tíma frá innsendingu að flokkunarákvörðun upp á 1,8 daga á öllum sérgreinum, með 90. hundraðshlutamarki upp á 6 daga, einkum vegna tilvísana sem eru sendar aftur til tilvísanda vegna vantandi klínískra upplýsinga. Húðlækningaferli í fjarþjónustu með myndbyggðri flokkun á sama kerfi nær miðgildi afgreiðslutíma upp á 4 klukkustundir og 90. hundraðshlutamarki upp á 1 dag, því ljósmynd og skipulögð sjúkrasaga nægja nánast alltaf til flokkunarákvörðunar án frekari bréfaskipta.

## Gagnalindir og fyrirvarar

Úttektarslóð rafræna tilvísunarkerfisins eða tilvísanastjórnunarkerfisins sjálfs er aðalgagnalindin, með tímastimplum innsendingar og ákvörðunar; stofnanir ættu að staðfesta hvort „klukkan“ stöðvast á meðan tilvísun er endursend til að afla frekari upplýsinga eða gengur samfellt, því skilgreiningarnar tvær gefa verulega ólíkar tölur fyrir sama undirliggjandi ferli. Afgreiðslutíma ætti að gefa upp á samræmdan hátt, annaðhvort í almanakstíma eða vinnutíma, því áhrif helga og frídaga geta annars skekkt samanburð milli þjónustu með ólíkt vinnumynstur.

## Gildrur

- **Að mæla aðeins „hreinar“ tilvísanir**: að útiloka hafnaðar eða endursendar tilvísanir úr útreikningnum felur endurvinnslubyrðina sem stafræn tækni er oft sérstaklega ætluð til að draga úr.
- **Að gefa upp meðaltal í stað miðgildis og hundraðshlutamarka**: fáeinar langdregnar, endursendar tilvísanir toga meðaltalið langt yfir raunverulega upplifun dæmigerðs sjúklings.
- **Að rugla afgreiðslutíma saman við heildarbiðtíma**: afgreiðslutími nær aðeins yfir flokkunarstigið; heildarupplifun sjúklings felur einnig í sér klíníska biðlistann á eftir, sem er sérstakur mælikvarði og lýtur sérstökum afkastatakmörkunum.
- **Að greina ekki á milli undirstiga**: þjónusta sem mælir aðeins tímann frá upphafi til enda getur ekki sagt til um hvort hæg niðurstaða stafar af ófullnægjandi upplýsingum frá tilvísendum, flokkunargetu móttökuþjónustunnar eða hvoru tveggja.

## Heimildir

- NHS England, tölfræði og þjónustulýsingar e-Referral Service (e-RS)
- Ritrýnd fræðirit um rafræn tilvísanastjórnunarkerfi og stafrænar flokkunarleiðir, þar á meðal húðlækningar í fjarþjónustu
- ONC / HealthIT.gov, leiðbeiningar um samvirkni og samhæfingu tilvísana
