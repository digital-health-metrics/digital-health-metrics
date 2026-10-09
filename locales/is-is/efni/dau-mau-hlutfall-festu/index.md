# DAU/MAU-hlutfall festu

DAU/MAU-hlutfall festu ber saman daglega virka notendur (DAU) og mánaðarlega virka notendur (MAU) — sama undirliggjandi mælikvarða er hægt að nota fyrir vikulega virka notendur (WAU) gagnvart MAU — til að lýsa hve stór hluti af breiðari notendahópi vöru tekur þátt í henni á tilteknum degi. Þetta er hinn staðlaði vörugreiningarmælikvarði á þátttökustyrk, ólíkur því hvort notanda er haldið yfirhöfuð (sjá hlutfall viðhalds notenda) eða hversu stöðugt einn tiltekinn skráður sjúklingur tekur þátt yfir tíma (sjá hlutfall stöðugrar þátttöku sjúklinga): festa lýsir takti notkunar á þýðisstigi, ekki mynstri neins einstaklings.

## Hvers vegna það skiptir máli

Tvær stafrænar heilbrigðisvörur geta gefið upp sama fjölda virkra mánaðarnotenda en haft mjög ólíkan undirliggjandi þátttökustyrk: í annarri opnar meirihluti notenda appið nánast daglega, en í hinni opnar meirihlutinn það einu sinni í mánuði rétt áður en hann teldist annars óvirkur. DAU/MAU-hlutfall festu greinir þessar tvær ólíku aðstæður að með einni, einfaldri og vel skilinni viðmiðunartölu sem vöru- og klínísk teymi geta fylgst með yfir tíma og borið saman við þekkt bil í greininni — hlutfall í kringum 20% er algengt viðmið fyrir mörg neytendaforrit, en vörur sem byggja á daglegri venju (fæðu- eða einkennadagbók sem sjúklingi er ætlað að nota daglega) ætti að dæma gegn marktækt hærri mörkum. Þar sem festa er viðkvæm fyrir því hvernig „virkur“ er skilgreindur er hún gagnlegust sem þróun einnar vöru yfir tíma, og sem samanburður við vörur sem smíðaðar eru fyrir áþekkt notkunarmynstur, frekar en sem algert viðmið milli greina.

## Hvernig það er reiknað

```
DAU/MAU-hlutfall festu = meðalfjöldi daglegra virkra notenda á tímabili /
                         mánaðarlegir virkir notendur á sama tímabili × 100

WAU/MAU-hlutfall (vikulegt, sama meginregla) er mildari útgáfa, hentugri
fyrir vörur sem ætlast er til að séu notaðar nokkrum sinnum í viku
frekar en daglega.

„Virkur“ verður að vera skilgreindur nákvæmlega og samræmt (t.d. lokin
gild aðgerð, ekki óvirk opnun apps) bæði í teljara og nefnara.
```

## Dæmi útreiknað

Stafrænt app til stjórnunar sykursýki hefur 10.000 virka mánaðarnotendur í tilteknum mánuði, skilgreint sem hver notandi sem lýkur að minnsta kosti einni gildri aðgerð (blóðsykursskráningu, máltíðarskráningu eða lyfjakvittun) í þeim mánuði. Meðaltal daglegra virkra notenda yfir 30 daga mánaðarins gefur meðal-DAU upp á 2.200. DAU/MAU-hlutfall festu er 2.200 / 10.000 × 100 = 22%, sem þýðir að á dæmigerðum degi tekur um 22% af mánaðarlegum notendahópi appsins þátt í því — eðlileg tala fyrir tæki við langvinnum sjúkdómi sem byggir á daglegri venju, þótt vöruteymið vilji sjá hana þróast upp á við með tímanum eftir því sem æskileg hegðun (dagleg skráning) verður vanabundnari hjá skráðum sjúklingum.

## Gagnalindir og fyrirvarar

DAU, WAU og MAU eru öll reiknuð úr sömu undirliggjandi atburðaskrám, með einni samræmdri skilgreiningu á „gildum virkum“ atburði í öllum gluggum; að breyta þeirri skilgreiningu milli útreikninga á teljara og nefnara (til dæmis að telja hverja opnun apps fyrir DAU en aðeins lokna aðgerð fyrir MAU) gefur skekkt hlutfall sem endurspeglar ekki raunverulegan þátttökustyrk. Viðeigandi viðmið fyrir festu veltur mjög á ætluðu notkunarmynstri vörunnar: tæki sem ætlað er að nota einu sinni í viku (vikuleg einkennainnskráning) mun og á að hafa lægra DAU/MAU-hlutfall en tæki sem ætlað er að nota daglega (fylgiapp við samfelldan blóðsykursmæli), svo túlka ætti festu alltaf gegn ætlaðri notkunartíðni vörunnar sjálfrar, ekki einu algildu markmiði.

## Gildrur

- **Að bera saman festuhlutföll milli vara með ólíka ætlaða notkunartíðni**: tæki til vikulegrar notkunar mun skipulagslega sýna lægra DAU/MAU-hlutfall en tæki til daglegrar notkunar jafnvel þótt bæði standi sig nákvæmlega eins og ætlast er til í sínum notkunartilvikum; berðu saman við ætlaða tíðni vörunnar sjálfrar, ekki eitt algilt markmið.
- **Að nota ósamræmdar skilgreiningar á virkni í teljara og nefnara**: þetta getur gefið festuhlutfall sem endurspeglar ekki raunverulegan þátttökustyrk og er ekki hægt að bera marktækt saman yfir tíma eða við aðrar vörur.
- **Að líta á hækkandi festuhlutfall sem ótvírætt jákvætt án þess að skoða þróun heildar-MAU**: hækkandi hlutfall sem stafar af minnkandi, vanabundnari kjarnahópi á meðan heildar-MAU fellur er allt önnur — og meira áhyggjuefni — staða en hækkun sem stafar af raunverulega aukinni daglegri þátttöku í stöðugum eða stækkandi notendahópi.
- **Að horfa framhjá áhrifum vikudags og árstíðar á DAU**: DAU getur verið mjög breytilegt eftir vikudegi (virkir dagar á móti helgi) eða árstíð fyrir margar heilbrigðisvörur; notaðu meðal-DAU yfir tímabil sem nær yfir heila náttúrulega lotu frekar en stuttan glugga sem gæti verið skekktur.

## Heimildir

- Ritrýnd og iðnaðartengd fræðirit um þátttökumælikvarða farsíma- og stafrænna vara, víða notaðir viðmiðunarrammar frá greiningarvettvöngum fyrir farsíma
- Digital Therapeutics Alliance, leiðbeiningar um bestu starfsvenjur við mælingu á þátttöku í stafrænum meðferðum
- Ritrýnd fræðirit um mælingu á þátttöku í stafrænni heilbrigðisþjónustu, til dæmis rannsóknir birtar í Journal of Medical Internet Research (JMIR mHealth and uHealth)

Sjá einnig: [hlutfall viðhalds notenda](../hlutfall-viðhalds-notenda/) og [hlutfall stöðugrar þátttöku sjúklinga](../hlutfall-stöðugrar-þátttöku-sjúklinga/), hina tvo skyldu þátttökumælikvarða sem þetta hlutfall er oftast ruglað saman við.
