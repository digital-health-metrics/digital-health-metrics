# Lokacin Ɗaukar Mataki

Lokacin ɗaukar mataki shi ne lokacin da ya wuce daga lokacin da aka samar da gargaɗin lafiya na atomatik — misali na'urar sa ido daga nesa ta gano alamar rayuwa a wajen kewaye, ko kayan aikin triage na dijital ya yi wa mara lafiya mai tabarbarewa alama — zuwa lokacin da memba na ƙungiyar asibiti ya fara amsawa da gaske. Shi ne ma'aunin tsari da ke ƙayyade ko tsarin gargaɗi na atomatik yana cika alƙawarinsa na tushe: kama matsala da wuri fiye da yadda tsarin gargajiya na duba-ta-lokaci ko kiran waya da mara lafiya ya fara zai yi.

## Dalilin da ya sa yake da muhimmanci

Tsarin gargaɗi da ke samar da gargaɗi daidai a asibiti amma ba a bi shi da amsa kan lokaci ba bai inganta amincin marasa lafiya da gaske ba; gabaɗayan darajar sa ido daga nesa da gargaɗi na atomatik ya dogara ne kan rufe zagaye da sauri fiye da hanyar madadin da ba a sa ido ba. Domin tsananin gargaɗi daban-daban yana buƙatar gaggawar amsa daban, ya kamata a bayar da rahoton lokacin ɗaukar mataki koyaushe ga kowane matakin tsanani maimakon matsakaici ɗaya, tun da matsakaici mai sauri a duk gargaɗi na iya ɓoye jinkirin amsa mai haɗari ga ƙaramin adadin mafi tsanani. Wannan ma'auni kuma yana ɗaya daga cikin hanyoyi mafi bayyana, mafi lallashi na nuna darajar shirin sa ido na atomatik ga shugabancin asibiti da masu biyan kuɗi, domin ana iya kwatanta shi kai tsaye da lokacin amsa na baya, na rashin atomatik na ƙungiya iri ɗaya ga irin wannan yanayin asibiti.

## Yadda ake lissafa shi

```
Time to intervention = timestamp(clinical response initiated) −
                        timestamp(alert generated)

Report median and a high percentile (e.g. 90th), segmented by alert
severity tier, not as a single blended average.

"Clinical response initiated" should be defined precisely and
consistently — e.g. a clinician opening the patient's record and
acting, or a documented outbound contact attempt — not merely an
alert being viewed or acknowledged with no action taken.
```

## Misali da aka yi aiki

Tsarin gargaɗi na shirin sa ido kan zuciya daga nesa yana yi wa gargaɗin arrhythmia masu tsanani 200 alama a wata. Matsakaicin lokaci (median) daga samar da gargaɗi zuwa likita ya fara tuntuɓar waje shi ne mintuna 12, tare da lokacin kashi na 90 na mintuna 38. Bayanan tarihi daga hanyar da ba a sa ido ba ta yawan jama'a iri ɗaya (inda irin wannan lamari yawanci zai bayyana ne kawai a ziyarar asibiti ta gaba da aka tsara ko zuwa asibiti) suna nuna matsakaicin lokaci zuwa kowace amsar asibiti da aka auna a kwanaki, ba mintuna ba. Wannan kwatancen — ba adadin mintuna 12 shi kaɗai ba — shi ne ke nuna darajar asibiti ta shirin sa ido; adadin kashi na 90 yana da muhimmanci daidai, tun da yana gano ƙarshen gargaɗi da suka ɗauki fiye da rabin awa don aiki a kansu kuma yana buƙatar nasa bitar tushen dalili.

## Tushen bayanai da gargaɗi

Lokutan samar da gargaɗi suna zuwa daga rajistar abubuwan da suka faru na dandalin sa ido kansa; lokutan amsar asibiti yawanci suna zuwa daga rajistar bincike na tarihin lafiya na lantarki ko tsarin aiki ko sarrafa ayyuka na ƙungiyar kulawa, kuma dole ne waɗannan tsare-tsare biyu su daidaita lokaci daidai don tazarar da aka lissafa ta zama abin dogaro. "An fara amsa" yana buƙatar ma'ana mai tsauri, da aka rubuta, tun da likita kawai ya duba ko ya yi watsi da gargaɗi ba tare da ƙarin aiki ba abu ne daban gaba ɗaya, kuma ƙasa da kwanciyar hankali, fiye da wanda ya haifar da ainihin tuntuɓar waje ko tsoma baki — rikita su biyun zai sa lokacin amsa ya yi kama da mafi kyau fiye da gaskiyar asibiti. Matakan ma'aikata na dare da ƙarshen mako galibi suna shafar lokacin ɗaukar mataki sosai, don haka ya kamata a bayar da rahoton wannan ma'auni ta ɓangaren lokacin rana da ranar mako inda yawan gargaɗi ya ba da dama, maimakon matsakaicin haɗaka na 24/7 kawai wanda zai iya ɓoye mummunan giɓin amsa bayan awanni.

## Kura-kurai

- **Ƙidaya amincewa da gargaɗi a matsayin amsa**: likita ya duba ko ya yi watsi da gargaɗi ba ɗaya yake da fara amsar asibiti ba; a ayyana amsa da tsauri a matsayin aiki da aka rubuta, ba amincewa mara aiki ba.
- **Bayar da rahoton lokaci ɗaya na haɗaka a duk tsanani**: matsakaici mai sauri a haɗaɗɗun gargaɗi marasa tsanani da masu tsanani na iya ɓoye jinkirin amsa mai haɗari musamman ga gargaɗi mafi tsanani, waɗanda suka fi muhimmanci.
- **Yin watsi da tasirin tsarin ma'aikata**: lokacin amsa galibi yana bambanta sosai da lokacin rana da ranar mako saboda matakan ma'aikata; matsakaicin gaba ɗaya ɗaya na iya ɓoye giɓin amsa na bayan awanni ko ƙarshen mako a tsari.
- **Kwatanta lokacin ɗaukar mataki tsakanin ƙungiyoyi masu ƙofofin gargaɗi daban-daban**: ƙungiya mai ƙofar gargaɗi mafi taka-tsantsan (mafi hankali) za ta samar da ƙarin gargaɗin ƙaramin gaggawa, wanda zai iya narkar da matsakaicin lokacin amsarta idan aka kwatanta da ƙungiya mai ƙofa mai tsauri, ba tare da la'akari da ainihin saurin amsa na asibiti ba.

## Tushe

- NHS England, jagora kan sa ido daga nesa da ma'aunin amsar asibiti na virtual ward
- ONC / HealthIT.gov, jagora kan ƙirar tsarin gargaɗin asibiti da aminci
- Wallafe-wallafen da aka duba takwarorinsu kan lokutan amsa gargaɗin sa ido kan marasa lafiya daga nesa da sakamakon asibiti, misali nazarin da aka buga a npj Digital Medicine

Duba kuma: [adadin aikin na'urori](../adadin-aikin-na-urori/), domin amintaccen adadin lokacin ɗaukar mataki ya dogara da na'urar sa ido da ke ƙasa kasancewa a kan layi da gaske don samar da gargaɗin tun farko.
