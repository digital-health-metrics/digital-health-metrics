# Lokacin Sarrafa Turawar Marasa Lafiya ta Dijital

Lokacin sarrafa turawar marasa lafiya ta dijital shi ne lokacin da ya wuce daga lokacin da likitan da ke turawa ya gabatar da turawa ta lantarki zuwa lokacin da sashen da ke karɓa ya yi triage ɗinta ya karɓa, ya ƙi, ko ya ba da alƙawari. Ma'aunin tsari ne (gudana), wanda ya bambanta da jimillar lokacin jiran mara lafiya, kuma yana ɗaya daga cikin wurare mafi bayyana inda canjin tsarin dijital (e-referral mai tsari, triage bisa hoto, fom ɗin turawa na daidaito) za a iya nuna shi yana motsa adadin aiki maimakon makin gamsuwa kawai.

## Dalilin da ya sa yake da muhimmanci

Matakin triage mai jinkiri ko mai bambanci sosai yana ƙara jinkiri tun kafin mara lafiya ya shiga jerin jiran asibiti, kuma saboda wannan jinkiri yana faruwa kafin kowace kulawar asibiti ta fara, ɓarna ce ta tsari tsantsa wadda kayan aikin dijital suka dace sosai da kawarwa. Tsarin turawa da ke tilasta zagayen "komawa ga mai turawa" saboda bayanan da suka ɓace suna haifar da zagayen sake aiki da ke da sauƙin rasawa idan an auna lokacin sarrafawa ne kawai akan turawa da suke wucewa cikin tsabta a karon farko. Inda sashe ya gabatar da fom ɗin turawa na dijital mai tsari, filayen tilas, ko triage bisa hoto (misali a teledermatology), lokacin sarrafawa yawanci shi ne ma'aunin da ya fi lallashi don nuna fa'ida, domin ana iya auna shi kafin da bayan canji da kayan aiki iri ɗaya.

## Yadda ake lissafa shi

```
Turnaround time = timestamp(triage decision) − timestamp(referral submission)

Report median and a high percentile (commonly the 90th), not only the mean,
because the distribution is heavily right-skewed by returned or complex
referrals.

Consider sub-stage timings where the system captures them:
  Submission → received by service
  Received → triage decision
  Triage decision → booked appointment (where relevant)
```

## Misali da aka yi aiki

Rajistar bincike na tsarin e-referral ya nuna matsakaicin lokaci (median) daga gabatarwa zuwa hukuncin triage na kwanaki 1.8 a duk ƙwarewa, tare da lokacin kashi na 90 na kwanaki 6, wanda galibi turawa da ake dawowa da su ga mai turawa saboda bayanan asibiti da suka ɓace ke haifarwa. Hanyar teledermatology da ke amfani da triage bisa hoto a dandali ɗaya tana samun matsakaicin lokacin sarrafawa na awanni 4 da kashi na 90 na rana 1, saboda hoto da tarihin da aka tsara kusan koyaushe sun isa don hukuncin triage ba tare da ƙarin wasiƙa ba.

## Tushen bayanai da gargaɗi

Rajistar bincike na tsarin e-referral ko sarrafa turawa kansa shi ne babban tushe, ta amfani da lokutan gabatarwa da hukunci; ya kamata ƙungiyoyi su tabbatar ko "agogon" yana tsayawa yayin da ake mayar da turawa don ƙarin bayani ko yana gudana a ci gaba, domin ma'anoni biyun suna ba da adadi daban sosai ga tsari ɗaya. Ya kamata a bayar da rahoton lokacin sarrafawa a lokacin kalanda ko lokacin awanni na aiki a koyaushe, domin tasirin ƙarshen mako da hutu na iya karkatar da kwatance tsakanin sassa masu tsarin aiki daban-daban.

## Kura-kurai

- **Auna turawa "masu tsabta" kawai**: cire turawa da aka ƙi ko aka mayar daga lissafi yana ɓoye nauyin sake aiki da kayan aikin dijital galibi aka nufa musamman don rage shi.
- **Bayar da rahoton matsakaici (mean) maimakon median da kashi-kashi**: ƙaramin adadin turawa masu tsawo, da aka mayar, za su ja matsakaicin sama da ainihin ƙwarewar mara lafiya na yau da kullum.
- **Rikita lokacin sarrafawa da jimillar lokacin jira**: lokacin sarrafawa yana ɗaukar matakin triage kaɗai; jimillar ƙwarewar mara lafiya kuma ta haɗa da jerin jiran asibiti na ƙasa, wanda ma'auni ne daban da ƙuntatawar ƙarfi daban ke gudanarwa.
- **Rashin bambance ƙananan matakai**: sashen da ke auna lokaci daga ƙarshe zuwa ƙarshe kawai ba zai iya sanin ko adadi mai jinkiri yana faruwa ne saboda masu turawa suna gabatar da bayanan da ba su cika ba, ko ƙarfin triage na sashen da ke karɓa, ko duka biyun.

## Tushe

- NHS England, ƙididdigar e-Referral Service (e-RS) da ƙayyadaddun sabis
- Wallafe-wallafen da aka duba takwarorinsu kan tsarin sarrafa turawa na lantarki da hanyoyin triage na dijital, ciki har da teledermatology
- ONC / HealthIT.gov, jagorar haɗin kai da daidaita turawa
