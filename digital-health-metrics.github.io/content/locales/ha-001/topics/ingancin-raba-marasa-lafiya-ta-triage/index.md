# Ingancin Raba Marasa Lafiya ta Triage

Ingancin raba marasa lafiya ta triage shi ne kaso na ganawar marasa lafiya da kayan aikin triage na atomatik ko na AI ke tura mara lafiya daidai zuwa matakin da wurin kulawa da ya dace — misali kula da kai, kulawar farko, kulawar gaggawa, ko kulawar ɗakin gaggawa — kamar yadda aka yi hukunci a kan ma'aunin tunani da aka tabbatar a asibiti. Shi ne ma'aunin aminci-da-tasiri ga kowane ƙofar gaba ta dijital, mai duba alamomi, ko tsarin triage na AI: gabaɗayan darajar kayan aikin ta dogara ne kan tura marasa lafiya daidai, da sauri, kuma cikin daidaito.

## Dalilin da ya sa yake da muhimmanci

Kayan aikin triage mara daidai yana haifar da cutarwa a kowace hanya: rashin isasshen triage (tura mara lafiya zuwa ƙaramin matakin kulawa fiye da yadda yake buƙata) na iya jinkirta magani ga gaggawa ta gaske, yayin da triage fiye da kima (tura mara lafiya zuwa babban matakin kulawa fiye da yadda yake buƙata) yana ɓata ƙarancin ƙarfin gaggawa da kulawar gaggawa kuma yana ƙara kuɗi da damuwar mara lafiya ba tare da fa'idar asibiti ba. Domin waɗannan hanyoyin kuskure biyu suna da sakamako daban sosai, ya kamata a bayar da rahoton ingancin raba marasa lafiya ta triage koyaushe tare da alkiblar kurakurai, ba a matsayin adadin daidaito na haɗaka ɗaya wanda ke ɓoye ko kayan aikin yana kuskure cikin aminci ko cikin haɗari ba. Masu ka'ida da tsarin kiwon lafiya da ke tantance kayan aikin triage na AI don turawa suna ƙara buƙatar irin wannan bayar da rahoton daidaito mai rarrabuwa a matsayin sharaɗin amincewar asibiti, musamman ga kayan aikin da ke aiki da wani matakin 'yancin kai daga likita.

## Yadda ake lissafa shi

```
Triage routing accuracy = encounters correctly routed / total triaged encounters × 100

Report under-triage and over-triage separately:
  Under-triage rate = encounters routed to a lower acuity level than the
                       reference standard / total triaged encounters × 100
  Over-triage rate  = encounters routed to a higher acuity level than the
                       reference standard / total triaged encounters × 100

Reference standard is typically a retrospective clinician review of the
same case, blinded to the tool's output where possible.
```

## Misali da aka yi aiki

Kayan aikin duba alamomi na AI yana yin triage ga ganawar marasa lafiya 5,000 a wata. Bitar likita ta makaho ta samfurin bazuwar na 500 daga cikin waɗannan ganawa ta gano cewa 430 an tura su zuwa matakin gaggawa daidai (daidaito 86%), 45 an yi musu rashin isasshen triage (9%), kuma 25 an yi musu triage fiye da kima (5%). Adadin rashin isasshen triage na 9% shi ne adadin da ya fi buƙatar bincike cikin gaggawa, tun da yana wakiltar ganawar da mara lafiya na iya kasancewa an tura shi zuwa kulawa mafi ƙarancin gaggawa fiye da yadda yake buƙata; adadin triage fiye da kima na 5% damuwa ce ta ƙarfi da kuɗi amma ba ta aminci kai tsaye ba.

## Tushen bayanai da gargaɗi

Ma'aunin tunani da ake auna daidaiton triage a kansa yana da muhimmanci sosai: bitar likita ɗaya tana ƙara bambancin hukuncin wannan likita, don haka adadin daidaito mai aminci yawanci yana buƙatar ko dai masu bita masu zaman kansu da yawa tare da yarjejeniyar tsakanin masu kimantawa da aka rubuta, ko kwatancen sakamakon asibiti da aka tabbatar daga baya (wace kulawa mara lafiya ya buƙata da gaske, da aka kafa bayan abin da ya faru). Samfurin kuma yana da muhimmanci: bitar samfurin dacewa kawai na ganawa, ko waɗanda aka yi wa alama a matsayin baƙon abu kawai, ba zai samar da adadin da za a iya amfani da shi ga cikakken aikin kayan aikin ba. Ya kamata a bayar da rahoton adadin daidaito daban ta alamar cuta ko rukunin ƙorafi inda yawan shari'o'in da ke ƙasa ya ba da dama, tun da kayan aikin triage ba kasafai suke aiki daidai a duk yanayi ba.

## Kura-kurai

- **Bayar da rahoton adadin daidaito na haɗaka ɗaya**: rushe rashin isasshen triage da triage fiye da kima zuwa lamba ɗaya yana ɓoye ko kurakuran kayan aikin sun karkata zuwa hanyar gazawa mafi haɗari; koyaushe a bayar da rahoton su daban.
- **Amfani da mai bita ɗaya, wanda ba makaho ba, a matsayin ma'aunin tunani**: wannan na iya karkatar da adadin daidaito a ɓoye zuwa duk abin da wannan mai bita zai yi da kansa, maimakon ma'aunin asibiti mai zaman kansa.
- **Tabbatarwa kan bayanan tarihi, masu dacewa kawai**: ainihin daidaiton raba kayan aikin a ƙarƙashin shigar da marasa lafiya kai tsaye, mara tabbas galibi ya bambanta sosai da daidaitonsa a kan saitin tabbatarwa da aka tsara yayin haɓaka.
- **Yin watsi da ɓacewar aiki bayan turawa**: daidaiton ƙirar triage na AI na iya raguwa a tsawon lokaci yayin da yawan marasa lafiya, alamomin da aka gabatar, ko samuwar hanyar kulawa ke canzawa; ya kamata a sake auna daidaito akai-akai, ba a tabbatar sau ɗaya a ɗauka yana da kwanciyar hankali ba.

## Tushe

- ONC / HealthIT.gov, jagora kan aminci da tabbatar da inganci na tallafin yanke shawara na asibiti da kayan aikin da AI ke ba da damar
- Wallafe-wallafen da aka duba takwarorinsu kan daidaiton mai duba alamomi da kayan aikin triage na AI, misali nazarin da aka buga a JAMIA, npj Digital Medicine, da BMJ Health & Care Informatics
- NHS England, jagora kan amincin asibiti na kayan aikin triage na dijital da shawarwari daga nesa (ma'aunin sarrafa haɗarin asibiti DCB0129/DCB0160)

Duba kuma: [lokacin sarrafa turawar marasa lafiya ta dijital](../lokacin-sarrafa-turawar-marasa-lafiya-ta-dijital/), ma'aunin tsari da ya fi kai tsaye a ƙasan hukuncin triage.
