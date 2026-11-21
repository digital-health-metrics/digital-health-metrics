# Ìre coileanaidh ePROM

Tomhaisidh ìre coileanaidh ePROM a’ chuibhreann de Thomhasan Builean Aithris-Euslaintich dealanach (ePROMs) sgeidealaichte — ceisteachain àbhaisteach, dearbhte a ghlacas cunntas an euslaintich fhèin air na comharran, gnìomh no càileachd beatha aige, air an lìbhrigeadh gu didseatach seach air pàipear — a thèid a choileanadh dha-rìribh. Tha e na mheatrag càileachd dàta cho mòr ri fear com-pàirteachaidh: tha luach clionaigeach is rannsachaidh prògram PROM an eisimeil gu tur air ìre choileanaidh a bhith àrd gu leòr gus am bi na freagairtean a chaidh a chruinneachadh riochdachail air an t-sluagh clàraichte slàn, chan e dìreach an fho-sheata as com-pàirteachaidh no as lugha de chomharran.

## Carson a tha e cudromach

Is e builean aithris-euslaintich an taic dhìreach, air a dearbhadh leis an euslainteach, do dhàta clàraichte le neach-clionaig no air a thomhas le inneal, a’ glacadh mheudan slàinte — pian, gnìomh, càileachd beatha — nach urrainn lèirmheas clàr no leughadh bith-mheatrach a ghlacadh; tha digiteachadh cruinneachadh PROM ann gu sònraichte gus an dàta seo a dhèanamh nas saoire agus nas fhasa a chruinneachadh aig sgèile na bha rianachd stèidhichte air pàipear a-riamh a’ ceadachadh. Ach tha prògram PROM le ìre choileanaidh ìosal an cunnart de dh’aon chlaonadh sònraichte agus mòr: bidh euslaintich a tha a’ faireachdainn nas miosa gu tric nas lugha dualtach ceisteachan fada a choileanadh, agus mar sin faodaidh ìre choileanaidh a tha a’ crìonadh a bhith na rabhadh tràth air slàinte sluaigh a’ dol sìos, agus faodaidh ìre choileanaidh iomlan ìosal na freagairtean a chaidh a chruinneachadh a dhèanamh a’ coimhead nas fheàrr na fìor eòlas an t-sluaigh dìreach air sgàth gu bheil euslaintich le na comharran as miosa fo-riochdaichte anns na thèid a choileanadh. Is e sin as coireach gum bu chòir ìre choileanaidh a thoirt air aithris an-còmhnaidh còmhla ri sgòran PROM fhèin, gun a bhith air a làimhseachadh mar mhion-fhiosrachadh obrachaidh àrd-sgoile.

## Mar a thèid a chunntadh

```
Ìre coileanaidh ePROM = ePROMs air an coileanadh gu h-iomlan /
                         ePROMs a chaidh a chur no a sgeidealadh × 100

Dèan aithris air leth airson:
  Ìre choileanaidh tòiseachaidh     (a’ chiad cheisteachan ann an sreath
                                     sgrùdaidh)
  Ìre choileanaidh fhad-ùine        (ceisteachain às dèidh sin ann an
                                     sreath sgrùdaidh leantainneach, a
                                     bhios a’ crìonadh thar ùine mar as
                                     trice agus bu chòir a leantainn mar
                                     ghluasad, chan e aon fhigear)

Bu chòir ceisteachan “air a choileanadh gu pàirteach” a mhìneachadh agus
aithris air leth bho “air a choileanadh gu h-iomlan” agus “gun tòiseachadh”.
```

## Eisimpleir obrachaidh

Cuiridh clionaig onc-eòlais ePROM dearbhte de dh’eallach chomharran gu 400 euslainteach ro gach tadhal leantainn mìosail. Sa chiad mhìos, bidh 340 euslainteach a’ coileanadh a’ cheisteachain gu h-iomlan (ìre choileanaidh 85%), 30 ga choileanadh gu pàirteach, agus 30 nach tòisich air. Ro an t-siathamh mìos den aon sreath sgrùdaidh, tha freagairtean coileanta air tuiteam gu 260 den aon bhuidheann 400 euslainteach (65%), crìonadh fad-ùine brìghmhor a dh’fhalbhadh gu tur mura biodh ach figear 85% a’ chiad mhìos air aithris mar mheatrag iomlan stataigeach. Faodaidh sgrùdadh air dè na euslaintich a thuiteas às (a rèir dèineis nan comharran, ìre an euslaintidh no aois) sealltainn a bheil an crìonadh a’ nochdadh sgìths sgrùdaidh, comharran a’ dol am miosad a tha a’ dèanamh a’ cheisteachain nas duilghe a choileanadh, no cnap-starra ruigsinneachd teicnigeach.

## Stòran dàta agus rabhaidhean

Thig dàta coileanaidh bho loga lìbhrigidh is freagairt an àrd-ùrlair ePROM fhèin, a dh’fhaodas eadar-dhealachadh a dhèanamh eadar staid “gun tòiseachadh”, “air a choileanadh gu pàirteach” agus “air a choileanadh gu h-iomlan” — eadar-dhealachadh a bu chòir a ghleidheadh agus aithris an-còmhnaidh seach a leagail gu figear dà-fhillte coileanta/gun choileanadh, leis gu bheil coileanadh pàirteach gu tric a’ comharrachadh àite sònraichte sa cheisteachan far am bi euslaintich a’ strì no a’ tuiteam às. Bu chòir ìre choileanaidh a mhìneachadh còmhla ri mar a thèid an ceisteachan a lìbhrigeadh (ceangal teachdaireachd teacsa, brath aplacaid, no dòigh lìbhrigidh a dh’fheumas clàradh a-steach portail), leis gu bheil frith-bhuaidh lìbhrigidh fhèin a’ toirt buaidh air coileanadh gu neo-eisimeileach bho shusbaint a’ cheisteachain no staid bhunaiteach an euslaintich. Bu chòir ionnstramaid dhearbhte (seach seata cheistean ad hoc) a chleachdadh an-còmhnaidh airson a’ PROM fhèin, leis nach can ìre choileanaidh airson ionnstramaid gun dearbhadh dad earbsach mu fheumalachd chlionaigeach an dàta a thig às eadhon ma tha coileanadh àrd.

## Cùisean ri sheachnadh

- **A’ làimhseachadh ìre choileanaidh a’ crìonadh mar dhuilgheadas lìbhrigidh a-mhàin**: faodaidh tuiteam fad-ùine ann an coileanadh comharran euslaintich a’ dol am miosad dha-rìribh a nochdadh (euslaintich ro thinn gus an sgrùdadh a choileanadh) seach sgìths sgrùdaidh no duilgheadas teicnigeach, agus tha an t-eadar-dhealachadh seo gu math cudromach airson mìneachadh clionaigeach.
- **A’ leagail coileanadh pàirteach is slàn gu aon roinn**: tha ceisteachan air a choileanadh gu pàirteach de chàileachd dàta gu math eadar-dhealaichte bho fhear air a choileanadh gu h-iomlan; dèan aithris orra air leth, agus sgrùd càite ann an sruth a’ cheisteachain a bhios euslaintich buailteach a thrèigsinn.
- **A’ toirt aithris air ìre choileanaidh gun aithris air cunnart claonaidh freagairt**: bu chòir ìre choileanaidh mheadhanach sgrùdadh a bhrosnachadh air a bheil luchd-freagairt eadar-dhealaichte gu rianail (ann an dèineas comharran, aois, litearrachd didseatach) bho luchd nach freagair, leis gum faod sgòran PROM a chaidh àireamhachadh bho luchd-freagairt a-mhàin an t-sluagh slàn a mhì-riochdachadh.
- **A’ cleachdadh ceisteachan gun dearbhadh no fèin-dhèanta**: tha ìre choileanaidh gun bhrìgh mar chomharra càileachd dàta ma tha an ionnstramaid a thathar a’ coileanadh fhèin gun a bhith air a dhearbhadh gu clionaigeach airson an staid agus an t-sluagh a thathar a’ tomhas.

## Stòran

- International Consortium for Health Outcomes Measurement (ICHOM), leasachadh sheataichean àbhaisteach agus stiùireadh buileachaidh PROM
- U.S. Food and Drug Administration (FDA), stiùireadh air tomhasan builean aithris-euslaintich ann an deuchainnean clionaigeach agus tagraidhean riaghlaidh
- Litreachas lèirmheasaichte le co-aoisean air buileachadh agus ìrean coileanaidh PROM dealanach, mar eisimpleir sgrùdaidhean a chaidh fhoillseachadh ann an Quality of Life Research agus Journal of Medical Internet Research (JMIR)

Faic cuideachd: [sgòr Net Promoter euslaintich](../sgòr-net-promoter-euslaintich/), meatrag aithris-euslaintich co-cheangailte ach eadar-dhealaichte a tha a’ tomhas sàsachadh seach builean clionaigeach.
