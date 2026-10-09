# Hlutfall uppitíma tækja

Hlutfall uppitíma tækja mælir hve stór hluti áætlaðs vöktunartíma tengt heilbrigðistæki — skynjari til fjarvöktunar sjúklinga, snjalltæki sem borið er á líkamanum eða heimilistæki fyrir fjarheilbrigðisþjónustu — er í raun nettengt, sendir gögn og starfar rétt, frekar en ótengt, aftengt eða bilað. Þetta er grundvallarinnviðamælikvarðinn undir öllum fjarvöktunar- eða tengdum tækjaáætlunum: klínísk viðvörun, þróun lífmælinga eða þátttökutala reiknuð út frá tæki sem var oft ótengt er aðeins jafn áreiðanleg og tengingin að baki.

## Hvers vegna það skiptir máli

Allt klínískt gildi fjarvöktunaráætlunar sjúklinga veltur á samfelldri eða nær samfelldri gagnaöflun; tæki með lélegan uppitíma býr til hljóðlaus göt í klínískri mynd sjúklings sem hægt er að misskilja sem stöðugleika (engin viðvörun vegna þess að engin gögn eru til, ekki vegna þess að ekkert breyttist) frekar en rétt greina sem vöktunarbrest. Uppitími tækja er einnig leiðandi vísir um kostnað áætlunar og upplifun sjúklinga: tæki sem missir oft tengingu veldur stuðningssímtölum, óánægju sjúklinga og hugsanlega óþarfa klínískum samskiptum til að kanna hvort gagnagat endurspegli raunverulegan klínískan atburð eða einfaldlega tæknilega bilun. Þar sem bilanir í uppitíma tækja eru oft rekjanlegar til innviða sem stofnunin stjórnar (illa stilltar farsímagáttir, veikt Wi-Fi-svið á heimili sjúklings, illa viðhaldinn tækjafloti) frekar en til sjúklingsins, á þessi mælikvarði beint heima hjá söluaðilanum og tæknirekstrarteyminu, ekki sjálfkrafa blandaður saman við þátttökumælikvarða sjúklinga.

## Hvernig það er reiknað

```
Hlutfall uppitíma tækja = tími sem tæki var nettengt og sendi gild gögn /
                          heildar áætlaður vöktunartími × 100

Greindu rótarorsakir niðurtíma þar sem gögn leyfa:
  Bilun í tæki          (rafhlaða, vélbúnaðarbilun, fastbúnaðarhrun)
  Tengingarbilun        (fall úr farsíma-/Wi-Fi-/VPN-tengingu)
  Þættir hjá sjúklingi  (slökkt á tæki, fært út fyrir drægni)

Tæknilegir stoðbreytur til að fylgjast með samhliða uppitíma:
  Meðalnýting örgjörva, minnisnotkun og rafhlöðustaða á tæki
  Meðaltími milli tengingarbilana
  Meðaltími til endurtengingar eftir fall
```

## Dæmi útreiknað

Fjarvöktunaráætlun fyrir hjartasjúkdóma setur upp 1.000 tengd tæki, hvert og eitt á að senda samfellt. Yfir 30 daga mánuð (720 áætlaðar vöktunarstundir á tæki) skráir flotinn samanlagt 705.600 raunverulegar nettengdar stundir gegn áætluðum 720.000 stundum, sem gefur hlutfall uppitíma tækja fyrir allan flotann upp á 705.600 / 720.000 × 100 = 98%. Rótargreining á 14.400 niðurtímastundum sýnir að 60% eru rekjanlegar til falls úr farsímatengingu, þéttum á tilteknu dreifbýlissvæði þjónustunnar, 25% til tækja með ellihrörnandi rafhlöður sem merkt eru til endurnýjunar og 15% til sjúklinga sem slökktu tímabundið á tækinu. Þessi sundurliðun bendir á tvö skýr, ólík inngrip — lagfæringu á tengingu á viðkomandi svæði og fyrirbyggjandi rafhlöðuskiptaáætlun — sem ein samanlögð uppitímatala hefði ekki greint á milli.

## Gagnalindir og fyrirvarar

Uppitímagögn koma úr tækjastjórnunar- og mælingakerfi framleiðanda tækisins eða söluaðila vettvangsins, sem skráir tengingar- og hjartsláttaratburði fyrir hvert tæki; stofnunin ætti að staðfesta nákvæmlega hvað söluaðilinn telur „nettengt“ (tæki getur tilkynnt sig tengt við net en ekki sent gild klínísk gögn, sem ætti að telja sem niðurtíma í klínískum tilgangi jafnvel þótt mælaborð söluaðilans sýni það sem tengt). Gefa ætti upp uppitíma fyrir hvern tækjahóp eða landsvæði þar sem umfang leyfir, því gæði tengingar eru oft landfræðilega þyrpt (farsímaþekja í dreifbýli, Wi-Fi í eldri byggingum) en ekki jafndreifð yfir sjúklingaþýðið, og samanlögð tala fyrir allan flotann getur falið alvarlegt, lagfæranlegt svæðisvandamál.

## Gildrur

- **Að rugla saman nettengingu og gildri gagnasendingu**: tæki getur birst „tengt“ á mælaborði söluaðila en ekki sent nothæf klínísk gögn; skilgreindu og mældu uppitíma gegn raunverulegri móttöku gildra gagna, ekki hrárri nettengingu einni saman.
- **Að gefa aðeins upp meðaltal alls flotans**: þetta getur falið alvarlegan niðurtímavanda sem er sértækur fyrir landsvæði eða tækjahóp sem markvisst meðaltal myndi afhjúpa og sem hefur tiltekna, lagfæranlega lausn.
- **Að greina ekki rótarorsök niðurtíma**: niðurtími vegna tækisins, tengingar og sjúklings krefst gerólíkra inngripa; ein niðurtímaprósenta án sundurliðunar eftir rótarorsök er ekki hægt að bregðast við.
- **Að líta á gagnagat sem klínískan stöðugleika sjálfgefið**: vantandi gagnastraumur frá ótengdu tæki ætti að kalla fram athugun á tæknilegri tengingu, ekki hljóðlega túlkast sem „engar fréttir eru góðar fréttir“ um klíníska stöðu sjúklingsins.

## Heimildir

- Continua Design Guidelines / Personal Connected Health Alliance, tæknilegir samvirknistaðlar fyrir tengd heilbrigðistæki
- ONC / HealthIT.gov, leiðbeiningar um innleiðingu fjarvöktunaráætlana sjúklinga og tæknilegar kröfur
- Ritrýnd fræðirit um áreiðanleika tækja og fullnægju gagna í fjarvöktun sjúklinga, til dæmis rannsóknir birtar í npj Digital Medicine

Sjá einnig: [nákvæmni flokkunar og beinleiðingar](../nákvæmni-flokkunar-og-beinleiðingar/), sem veltur á því að fá heil, áreiðanleg tækjagögn til að geta tekið rétta flokkunarákvörðun í upphafi.
