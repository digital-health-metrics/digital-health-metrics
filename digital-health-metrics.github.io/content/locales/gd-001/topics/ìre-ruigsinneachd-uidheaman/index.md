# Ìre ruigsinneachd uidheaman

Tomhaisidh ìre ruigsinneachd uidheaman a’ chuibhreann de dh’ùine sgrùdaidh sgeidealaichte a bhios inneal slàinte ceangailte — mothachair sgrùdaidh euslaintich cèin, uidheam caitheamh no aonad tele-shlàinte dachaigh — dha-rìribh air loidhne, a’ sgaoileadh dàta agus ag obair gu ceart, seach far loidhne, dealaichte no ag obair gu dona. Is e am meatrag bun-structair bunaiteach fon h-uile prògram sgrùdaidh cèin no uidheaman ceangailte: chan eil rabhadh clionaigeach, gluasad bith-mheatrach no figear com-pàirteachaidh a chaidh a thomhas bho inneal a bha gu tric far loidhne earbsach ach cho mòr ’s a tha an ceangal air a chùlaibh.

## Carson a tha e cudromach

Tha làn luach clionaigeach prògram sgrùdaidh euslaintich cèin an eisimeil air glacadh dàta leantainneach no cha mhòr leantainneach; bidh inneal le droch ruigsinneachd a’ cruthachadh bheàrnan sàmhach ann an dealbh clionaigeach euslaintich a dh’fhaodar a mhì-thuigsinn mar sheasmhachd (chan eil rabhadh ann air sgàth ’s nach eil dàta ann, chan ann air sgàth ’s nach deach dad atharrachadh) seach a bhith air an aithneachadh gu ceart mar fhàilligeadh sgrùdaidh. Tha ruigsinneachd uidheaman cuideachd na chomharra toisich air cosgais prògraim agus eòlas euslaintich: bidh inneal a thuiteas a-mach gu tric a’ gineadh ghairmean taice, sàrachadh euslaintich, agus ruigsinneachd clionaigeach a dh’fhaodadh a bhith gun fheum airson sgrùdadh a bheil beàrn dàta a’ nochdadh fìor thachartas clionaigeach no dìreach mearachd theicnigeach. Leis gu bheil fàilligidhean ruigsinneachd uidheaman gu tric co-cheangailte ri bun-structar a smachdaicheas a’ bhuidheann (geata ceallach air a dhroch rèiteachadh, còmhdach Wi-Fi lag ann an dachaigh euslaintich, cabhlach uidheaman gun chumail suas gu leòr) seach ris an euslainteach, buinidh am metrig seo gu dìreach ris an reiceadair agus sgioba obrachaidh teicnigeach, gun a bhith air a thoirt a-steach gun sgrùdadh am measg mheatragan com-pàirteachaidh euslaintich.

## Mar a thèid a chunntadh

```
Ìre ruigsinneachd uidheaman = ùine a bha an t-inneal air loidhne agus a’
                               sgaoileadh dàta dligheach /
                               iomlan ùine sgrùdaidh sgeidealaichte × 100

Roinn adhbharan bun-fhreumhach na h-ùine sìos far a bheil an dàta a’ ceadachadh:
  Fàilligeadh air taobh an inneil (bataraidh, mearachd bathar-cruaidh,
                                   tuiteam firmware)
  Fàilligeadh ceangail (dì-cheangal ceallach/Wi-Fi/VPN)
  Factaran taobh an euslaintich (inneal air a chuir dheth, air a ghluasad
                                 a-mach à raon)

Crìochan teicnigeach taice ri leantainn còmhla ri ruigsinneachd:
  Cleachdadh CPU cuibheasach, cleachdadh cuimhne, agus ìre bataraidh
  gach inneal
  Ùine mheadhanach eadar fàilligidhean ceangail
  Ùine mheadhanach gu ath-cheangal às dèidh dì-cheangail
```

## Eisimpleir obrachaidh

Bidh prògram sgrùdaidh cridhe cèin a’ cur an gnìomh 1,000 inneal ceangailte, gach fear a’ sgaoileadh gu leantainneach. Thar mìos de 30 latha (720 uair a thìde sgrùdaidh sgeidealaichte gach inneal), clàraidh an cabhlach 705,600 uair a thìde dha-rìribh air loidhne còmhla an aghaidh 720,000 uair a thìde sgeidealaichte, a’ toirt ìre ruigsinneachd uidheaman air feadh a’ chabhlaich de 705,600 / 720,000 × 100 = 98%. Seallaidh mion-sgrùdadh adhbhair bun-fhreumhaich air na 14,400 uair a thìde sìos gu bheil 60% co-cheangailte ri dì-cheanglaichean ceangail cheallach cruinnichte ann an roinn seirbheis dùthchail shònraichte, 25% ri uidheaman le bataraidhean a tha a’ fàs sean air an comharrachadh airson an ath-chur, agus 15% ri euslaintich a bhios a’ cur dheth an uidheam car-ùine. Tha am briseadh sìos seo a’ comharrachadh dà eadar-theachd soilleir, eadar-dhealaichte — càradh ceangail airson an roinn a thèid a bualadh agus prògram ath-chur bataraidh ro-ghnìomhach — nach dealaicheadh aon fhigear ruigsinneachd iomlan.

## Stòran dàta agus rabhaidhean

Thig dàta ruigsinneachd bho shiostam riaghlaidh uidheaman is telemetry an neach-dèanamh no reiceadair an àrd-ùrlair, a chlàras tachartasan ceangail is bualadh-cridhe gach inneal; bu chòir don bhuidheann dearbhadh dè dìreach a chunntas an reiceadair mar “air loidhne” (faodaidh inneal aithris gu bheil e ceangailte ri lìonra fhad ’s a tha e a’ fàiligeadh dàta clionaigeach dligheach a sgaoileadh, agus bu chòir sin a chunntadh mar ùine sìos airson adhbharan clionaigeach eadhon ma tha deas-bhòrd an reiceadair fhèin ga aithris mar cheangailte). Bu chòir ruigsinneachd a thoirt air aithris a rèir buidheann uidheaman no cruinn-eòlas far a bheil meud gu leòr ann, leis gu bheil càileachd ceangail gu tric cruinnichte gu cruinn-eòlasach (còmhdach ceallach dùthchail, Wi-Fi togalaichean nas sine) seach air a sgaoileadh gu cothromach thar sluagh euslainteach, agus faodaidh figear cabhlach iomlan droch dhuilgheadas roinneil a ghabhas rèiteachadh a chlaoidh.

## Cùisean ri sheachnadh

- **A’ measgachadh ceangal lìonra le sgaoileadh dàta dligheach**: faodaidh inneal nochdadh “ceangailte” air deas-bhòrd reiceadair fhad ’s a tha e a’ fàiligeadh dàta clionaigeach so-chleachdaidh a sgaoileadh; mìnich agus tomhais ruigsinneachd an aghaidh fìor ghlacadh dàta dligheach, chan e ceangal lìonra amh a-mhàin.
- **A’ toirt aithris air cuibheasachd cabhlach-leathann a-mhàin**: faodaidh seo duilgheadas ùine sìos dona a chleith a tha sònraichte do chruinn-eòlas no buidheann uidheaman, a nochdadh le cuibheasachd cuimsichte agus aig a bheil càradh sònraichte, a ghabhas rèiteachadh.
- **Gun eadar-dhealachadh a dhèanamh air adhbhar bun-fhreumhach na h-ùine sìos**: tha feum air eadar-theachd gu tur eadar-dhealaichte airson ùine sìos taobh an inneil, ceangail agus taobh an euslaintich; chan urrainnear gnìomh a ghabhail air aon sa cheud ùine sìos às aonais roinneadh adhbhair bun-fhreumhaich.
- **A’ làimhseachadh beàrn dàta mar sheasmhachd clionaigeach a rèir bunaiteach**: bu chòir sruth dàta a tha a dhìth bho inneal far loidhne sgrùdadh ceangail teicnigeach a chuir air bhog, gun a bhith air a mhìneachadh gu sàmhach mar “chan eil naidheachd na deagh naidheachd” airson inbhe clionaigeach an euslaintich.

## Stòran

- Continua Design Guidelines / Personal Connected Health Alliance, inbhean eadar-obrachaidh teicnigeach airson uidheaman slàinte ceangailte
- ONC / HealthIT.gov, stiùireadh air buileachadh prògram sgrùdaidh euslaintich cèin agus riatanasan teicnigeach
- Litreachas lèirmheasaichte le co-aoisean air earbsachd uidheaman sgrùdaidh euslaintich cèin agus coileantachd dàta, mar eisimpleir sgrùdaidhean a chaidh fhoillseachadh ann an npj Digital Medicine

Faic cuideachd: [cruinneas triage is seòlaidh](../cruinneas-triage-is-seòlaidh/), a tha an eisimeil air dàta uidheam coileanta, earbsach fhaighinn gus co-dhùnadh triage ceart a dhèanamh sa chiad àite.
