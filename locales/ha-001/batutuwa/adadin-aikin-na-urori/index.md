# Adadin Aikin Na'urori

Adadin aikin na'urori yana auna kaso na lokacin sa ido da aka tsara da na'urar lafiya da aka haɗa — na'urar auna marasa lafiya daga nesa, na'urar sawa, ko na'urar telehealth ta gida — take a kan layi da gaske, tana aika bayanai, kuma tana aiki daidai, maimakon kasancewa ba a kan layi ba, a katse, ko tana lalacewa. Shi ne ma'aunin kayayyakin more rayuwa na tushe a ƙarƙashin kowane shirin sa ido daga nesa ko na'urori da aka haɗa: gargaɗin asibiti, yanayin ma'aunin halittar jiki, ko adadin hulɗa da aka lissafa daga na'ura da ke yawan kasancewa ba a kan layi ba ya dogara ne kawai da haɗin da ke bayansa.

## Dalilin da ya sa yake da muhimmanci

Gabaɗayan darajar asibiti ta shirin sa ido kan marasa lafiya daga nesa ta dogara ne kan ɗaukar bayanai a ci gaba ko kusan a ci gaba; na'ura mai ƙarancin aiki tana haifar da giɓi marasa sauti a hoton asibiti na mara lafiya waɗanda za a iya ɗauka a matsayin kwanciyar hankali (babu gargaɗi saboda babu bayanai, ba saboda babu abin da ya canza ba) maimakon a gano su daidai a matsayin gazawar sa ido. Aikin na'ura kuma alama ce ta farko ta kuɗin shirin da ƙwarewar mara lafiya: na'ura da ke yawan rasa haɗi tana haifar da kiran tallafi, takaicin marasa lafiya, da yuwuwar tuntuɓar asibiti ba lallai ba don bincika ko giɓin bayanai yana nuna abin da ya faru na asibiti na gaske ko kawai kuskuren fasaha. Domin gazawar aikin na'ura galibi ana danganta ta ga kayayyakin more rayuwa da ƙungiya ke sarrafawa (ƙofar cellular da aka saita ba daidai ba, rauni na Wi-Fi a gidan mara lafiya, rukunin na'urori da ba a kula da su sosai) maimakon mara lafiya, wannan ma'auni na ƙungiyar mai siyarwa da ayyukan fasaha ne kai tsaye, ba za a haɗa shi ba tare da bambanci cikin ma'aunin hulɗar marasa lafiya ba.

## Yadda ake lissafa shi

```
Device uptime rate = time device was online and transmitting valid data /
                      total scheduled monitoring time × 100

Segment root causes of downtime where data allows:
  Device-side failure  (battery, hardware fault, firmware crash)
  Connectivity failure (cellular/Wi-Fi/VPN dropout)
  Patient-side factors (device powered off, moved out of range)

Supporting technical parameters to track alongside uptime:
  Average CPU utilization, memory usage, and battery level per device
  Mean time between connectivity failures
  Mean time to reconnect after a dropout
```

## Misali da aka yi aiki

Wani shirin sa ido kan zuciya daga nesa ya tura na'urori da aka haɗa 1,000, kowannensu ana tsammanin zai aika bayanai a ci gaba. A tsawon wata na kwanaki 30 (awanni 720 na sa ido da aka tsara ga kowace na'ura), rukunin yana rubuta jimillar awanni 705,600 a kan layi na zahiri a kan awanni 720,000 da aka tsara, wanda ke ba da adadin aikin na'urori na rukuni gaba ɗaya na 705,600 / 720,000 × 100 = 98%. Binciken tushen dalili na awanni 14,400 na rashin aiki yana nuna 60% ana danganta su ga katsewar haɗin cellular da ke taruwa a wani yankin sabis na karkara, 25% ga na'urori masu tsofaffin batir da aka yi musu alama don sauyawa, da 15% ga marasa lafiya da suka kashe na'urarsu na ɗan lokaci. Wannan rarrabawar tana nuna tsoma baki biyu masu bayyane, daban-daban — gyaran haɗi ga yankin da abin ya shafa da shirin sauya batir na riga-kafi — wanda adadin aiki na jimilla ɗaya ba zai bambance su ba.

## Tushen bayanai da gargaɗi

Bayanan aiki suna zuwa ne daga tsarin sarrafa na'ura da telemetry na masana'antar na'ura ko mai siyar da dandali kansa, wanda ke rubuta abubuwan haɗi da bugun zuciya a kowace na'ura; ya kamata ƙungiya ta tabbatar daidai da abin da mai siyarwa ke ƙidaya a matsayin "a kan layi" (na'ura na iya ba da rahoton kanta a matsayin an haɗa da hanyar sadarwa yayin da take kasa aika ingantattun bayanan asibiti, wanda ya kamata a ƙidaya a matsayin rashin aiki don dalilan asibiti ko da allon mai siyarwa ya nuna ta a matsayin an haɗa). Ya kamata a bayar da rahoton aiki ga kowace ƙungiyar na'ura ko yanki idan yawa ya ba da dama, tun da ingancin haɗi galibi yana taruwa a yanki (rufin cellular na karkara, Wi-Fi na tsofaffin gine-gine) maimakon rarrabuwa daidai a tsakanin yawan marasa lafiya, kuma adadin rukuni gaba ɗaya na iya ɓoye mummunar matsala ta yanki wadda za a iya magance ta.

## Kura-kurai

- **Rikita haɗin hanyar sadarwa da ingantaccen aika bayanai**: na'ura na iya bayyana "an haɗa" a allon mai siyarwa yayin da take kasa aika bayanan asibiti masu amfani; a ayyana a kuma auna aiki bisa karɓar ingantattun bayanai na gaske, ba haɗin hanyar sadarwa kaɗai ba.
- **Bayar da rahoton matsakaicin rukuni gaba ɗaya kawai**: wannan na iya ɓoye mummunar matsalar rashin aiki ta musamman ga yanki ko ƙungiyar na'ura wadda matsakaicin da aka nufa zai bayyana kuma yana da mafita ta musamman da za a iya aiwatarwa.
- **Rashin bambance tushen dalilin rashin aiki**: rashin aikin na'ura, na haɗi, da na mara lafiya kowanne yana buƙatar tsoma baki daban gaba ɗaya; kaso ɗaya na rashin aiki ba tare da rarraba tushen dalili ba ba za a iya yin aiki da shi ba.
- **Ɗaukar giɓin bayanai a matsayin kwanciyar hankali na asibiti ta tsohuwa**: rafin bayanai da ya ɓace daga na'urar da ba ta kan layi ya kamata ya haifar da duba haɗin fasaha, ba a fassara shi a ɓoye a matsayin "babu labari alama ce mai kyau" ga yanayin asibiti na mara lafiya ba.

## Tushe

- Continua Design Guidelines / Personal Connected Health Alliance, ma'aunin haɗin kai na fasaha ga na'urorin lafiya da aka haɗa
- ONC / HealthIT.gov, jagora kan aiwatar da shirin sa ido kan marasa lafiya daga nesa da buƙatun fasaha
- Wallafe-wallafen da aka duba takwarorinsu kan amincin na'urar sa ido kan marasa lafiya daga nesa da cikar bayanai, misali nazarin da aka buga a npj Digital Medicine

Duba kuma: [ingancin raba marasa lafiya ta triage](../ingancin-raba-marasa-lafiya-ta-triage/), wanda ya dogara da karɓar cikakkun bayanan na'ura masu aminci don yin daidaitaccen hukuncin triage tun farko.
