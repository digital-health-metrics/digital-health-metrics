# Cruinneas triage is seòlaidh

Is e cruinneas triage is seòlaidh a’ chuibhreann de thachartasan euslaintich anns a bheil inneal triage fèin-obrachail no le taic AI a’ seòladh euslainteach gu ceart chun na h-ìre agus an t-suidheachaidh chùraim iomchaidh — mar eisimpleir fèin-chùram, cùram bunaiteach, cùram èiginn, no cùram èiginn mòr — a rèir inbhe iomraidh a chaidh a dhearbhadh gu clionaigeach. Is e am meatrag sàbhailteachd-is-èifeachdais airson doras-aghaidh didseatach sam bith, sgrùdair chomharran, no siostam triage AI: tha làn ghealladh luach an inneil an eisimeil air euslaintich a sheòladh gu ceart, gu luath, agus gu cunbhalach.

## Carson a tha e cudromach

Bidh inneal triage mì-chruinn a’ dèanamh cron an dà chuid: faodaidh fo-thriage (a’ seòladh euslainteach gu ìre cùraim nas ìsle na tha a dhìth air) làimhseachadh a dhàilleadh airson fìor èiginn, fhad ’s a bhios ro-thriage (a’ seòladh euslainteach gu ìre cùraim nas àirde na tha a dhìth air) a’ caitheamh comais èiginn is cùraim èiginn gann agus ag àrdachadh cosgais agus uamhas euslaintich gun bhuannachd chlionaigeach. Leis gu bheil buaidh gu math eadar-dhealaichte aig an dà mhodh fàilligidh seo, bu chòir cruinneas triage is seòlaidh a thoirt air aithris an-còmhnaidh còmhla ri stiùir nam mearachdan, chan e mar aon fhigear cruinneis iomlan a chleitheas a bheil an t-inneal ag ionnsachadh gu sàbhailte no gu cunnartach. Tha riaghladairean agus siostaman slàinte a bhios a’ measadh inneal triage AI airson cur an gnìomh a’ sìor iarraidh aithris cruinneis còmhdaichte mar seo mar chumha airson aonta clionaigeach, gu sònraichte airson innealan a bhios ag obair le ìre sam bith de neo-eisimeileachd bho neach-clionaig.

## Mar a thèid a chunntadh

```
Cruinneas triage is seòlaidh = tachartasan air an seòladh gu ceart /
                                tachartasan triage iomlan × 100

Dèan aithris air fo-thriage is ro-thriage air leth:
  Ìre fo-thriage = tachartasan air an seòladh gu ìre dèineis nas ìsle na
                    an inbhe iomraidh / tachartasan triage iomlan × 100
  Ìre ro-thriage = tachartasan air an seòladh gu ìre dèineis nas àirde na
                    an inbhe iomraidh / tachartasan triage iomlan × 100

Mar as trice is e lèirmheas clionaigeach air ais-shealladh den aon chùis an
inbhe iomraidh, dall do thoradh an inneil far a bheil sin comasach.
```

## Eisimpleir obrachaidh

Bidh inneal sgrùdaidh chomharran AI a’ dèanamh triage air 5,000 tachartas euslaintich ann am mìos. Lorgaidh lèirmheas clionaigeach dall air sampall air thuaiream de 500 dhiubh sin gun deach 430 a sheòladh chun na h-ìre dèineis cheart (cruinneas 86%), gun deach 45 a fho-thriagadh (9%), agus gun deach 25 a ro-thriagadh (5%). Is e an ìre fo-thriage 9% am figear as èiginniche a dh’fheumas sgrùdadh, leis gu bheil e a’ riochdachadh thachartasan far an deach euslainteach a stiùireadh gu cùram nas lugha èiginn na bha a dhìth air dha-rìribh; tha an ìre ro-thriage 5% na dhragh comais is cosgais ach chan e dìreach dragh sàbhailteachd.

## Stòran dàta agus rabhaidhean

Tha an inbhe iomraidh an aghaidh a thèid cruinneas triage a thomhas gu math cudromach: bheir lèirmheas le aon neach-clionaig caochlaideachd breithneachaidh an neach-clionaig sin fhèin a-steach, agus mar sin mar as trice feumaidh figear cruinneis creideasach an dàrna cuid grunn luchd-lèirmheas neo-eisimeileach le aonta eadar-luchd-rangachaidh clàraichte, no coimeas ri builean clionaigeach dearbhte às dèidh làimhe (dè an cùram a dh’fheumadh an t-euslainteach dha-rìribh, air a stèidheachadh às dèidh làimhe). Tha samplachadh cudromach cuideachd: chan fhàg lèirmheas air sampall goireasach de thachartasan a-mhàin, no air feadhainn a chaidh a chomharrachadh mar neo-àbhaisteach a-mhàin, figear a ghabhas coitcheannachadh gu coileanadh iomlan an inneil. Bu chòir figearan cruinneis a thoirt air aithris air leth a rèir comharra taisbeanaidh no roinn gearain far a bheil meud chùisean bunaiteach a’ ceadachadh, leis gu bheil innealan triage ainneamh ag obair gu co-ionann thar gach staid.

## Cùisean ri sheachnadh

- **A’ toirt aithris air aon fhigear cruinneis measgaichte**: bidh a bhith a’ leagail fo-thriage is ro-thriage gu aon àireamh a’ falach a bheil mearachdan an inneil a’ claonadh chun a’ mhodh fhàilligidh nas cunnartaiche; dèan aithris orra air leth an-còmhnaidh.
- **A’ cleachdadh aon neach-lèirmheas gun dalladh mar inbhe iomraidh**: faodaidh seo am figear cruinneis a chlaonadh gu sàmhach a dh’ionnsaigh ge bith dè a dhèanadh an neach-lèirmheas sin fhèin, seach inbhe chlionaigeach neo-eisimeileach.
- **A’ dearbhadh air dàta ais-shealladh, goireasach a-mhàin**: bidh fìor chruinneas seòlaidh an inneil fo chur-a-steach beò, neo-shoilleir euslaintich gu tric gu math eadar-dhealaichte bhon chruinneas aige air seata dearbhaidh co-dhèanta a chaidh a chruinneachadh rè leasachadh.
- **A’ dearmad gluasad coileanaidh às dèidh cur an gnìomh**: faodaidh cruinneas modail triage AI crìonadh thar ùine mar a dh’atharraicheas sluagh euslaintich, comharran taisbeanaidh, no ruigsinneachd air slighean cùraim; bu chòir cruinneas a thomhas a-rithist gu cunbhalach, chan ann a dhearbhadh aon uair agus a ghabhail mar sheasmhach.

## Stòran

- ONC / HealthIT.gov, stiùireadh air sàbhailteachd agus dearbhadh càileachd taic co-dhùnaidh clionaigeach agus innealan le comas AI
- Litreachas lèirmheasaichte le co-aoisean air cruinneas sgrùdair chomharran is innealan triage AI, mar eisimpleir sgrùdaidhean a chaidh fhoillseachadh ann an JAMIA, npj Digital Medicine, agus BMJ Health & Care Informatics
- NHS England, stiùireadh air sàbhailteachd chlionaigeach innealan triage didseatach is co-chomhairle cèin (inbhean riaghlaidh cunnairt chlionaigeach DCB0129/DCB0160)

Faic cuideachd: [ùine làimhseachaidh ath-chuiridhean didseatach](../ùine-làimhseachaidh-ath-chuiridhean-didseatach/), am meatrag pròiseis as dìriche shìos an t-sruth bho cho-dhùnadh triage.
