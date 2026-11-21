# Rata tal-Konsistenza tal-Involviment tal-Pazjent

Ir-rata tal-konsistenza tal-involviment tal-pazjent tkejjel kemm pazjent irreġistrat jinteraġixxi regolarment ma' prodott tas-saħħa diġitali maż-żmien — pereżempju billi jirreġistra l-ikel jew is-sintomi, jirrekordja attività fiżika, jew jara dejta dwar is-saħħa — minflok sempliċement jekk użah xejn. Hija metrika longitudinali, differenti minn għadd ta' użu attiv f'mument wieħed: żewġ pazjenti jistgħu jkollhom status identiku ta' "użaw l-app dan ix-xahar" filwaqt li wieħed jirreġistra b'mod konsistenti kuljum u l-ieħor jirreġistra darba u jisparixxi għal tliet ġimgħat, u l-metrika tal-konsistenza biss tiddistingwihom.

## Għaliex hija importanti

L-interazzjoni sostnuta u regolari ma' għodda tas-saħħa diġitali hija waħda mill-indikaturi ewlenin l-aktar affidabbli ta' benefiċċju kliniku, partikolarment għal kundizzjonijiet li jiddependu mill-imġiba bħad-dijabete, il-ġestjoni tal-piż u s-saħħa mentali, fejn il-valur tal-għodda jiġi mill-faħħ li tappoġġa u mhux minn sessjoni waħda. Prodott jista' jirrapporta għadd b'saħħtu ta' utenti attivi kull xahar filwaqt li fil-fatt qed jaqdi popolazzjoni li tidħol darba u tbiegħed, għax l-użu attiv xahri huwa limitu baxx li ma jgħid xejn dwar il-mudell ta' użu fix-xahar; il-metriki tal-konsistenza jaqbdu dan b'mod li l-għadd sempliċi tal-attività ma jistax. Billi l-konsistenza hija wkoll waħda mill-affarijiet l-aktar diffiċli biex jinżammu matul xhur u mhux ġimgħat, hija sinjal aktar onest tal-kwalità tal-prodott u tal-adattament kliniku minn figuri ta' involviment f'perjodu qasir, li huma suxxettibbli għall-effetti tan-novità immedjatament wara l-introduzzjoni.

## Kif tiġi kkalkulata

```
Rata tal-konsistenza tal-involviment = ġimgħat b'mill-inqas interazzjoni waħda
                                        kwalifikanti / ġimgħat totali ta' reġistrazzjoni × 100

"Interazzjoni kwalifikanti" għandha tiġi definita b'mod espliċitu u konsistenti
(pereżempju daħla ta' reġistru tal-ikel, check-in tas-sintomi, jew sinkronizzazzjoni
ta' attività kompluta) — qatt avveniment passiv bħal ftuħ tal-app mingħajr azzjoni rreġistrata.

Irrapporta bħala distribuzzjoni, mhux biss bħala medja tal-popolazzjoni:
  pereżempju sehem ta' pazjenti b'konsistenza ġimgħatija ta' ≥ 80%,
             sehem b'50-79%, sehem b'< 50%
```

## Eżempju kkalkulat

App ta' coaching dwar in-nutrizzjoni tirreġistra pazjent għal 12-il ġimgħa. Il-pazjent jirreġistra mill-inqas daħla kwalifikanti waħda tal-ikel f'9 minn dawk it-12-il ġimgħa, u dan jagħti rata individwali tal-konsistenza tal-involviment ta' 9 / 12 × 100 = 75%. Fil-koorti sħiħa tal-app ta' 2,000 pazjent irreġistrat għal mill-inqas 12-il ġimgħa, 600 pazjent (30%) iżommu konsistenza ġimgħatija ta' ≥ 80%, 900 (45%) jaqgħu fil-medda ta' 50-79%, u 500 (25%) jaqgħu taħt il-50%. Li tirrapporta biss il-medja tal-koorti (li tista' tkun madwar 65%) tgħatti l-fatt li kwart sħiħ tal-pazjenti bilkemm huma involuti — segment li jixraq li jiġi investigat separatament minflok jinħall f'medja ġenerali.

## Sorsi tad-data u twissijiet

Id-dejta tal-konsistenza tiġi mil-logs tal-avvenimenti tal-prodott innifsu (daħliet tal-ikel, sinkronizzazzjonijiet tal-attività, check-ins), u d-definizzjoni ta' "interazzjoni kwalifikanti" għandha effett enormi fuq ir-rata li tirriżulta — definizzjoni lassa (kull ftuħ tal-app) dejjem se tidher aħjar minn waħda stretta (daħla ta' reġistru kompluta u sinifikanti), għalhekk id-definizzjoni użata trid tiġi ddikjarata b'mod ċar flimkien ma' kull figura rrapportata. Dejta sinkronizzata awtomatikament (pereżempju tracker tal-fitness konness li jissinkronizza l-attività fl-isfond) għandha tiġi rrapportata separatament minn dejta rreġistrata manwalment, billi s-sinkronizzazzjoni awtomatika tista' tkabbar il-konsistenza apparenti mingħajr ma tirrifletti ebda sforz attiv tal-pazjent jew involviment mal-gwida tal-prodott.

## Żbalji komuni

- **Ħawwad bejn ftuħ tal-app u involviment sinifikanti**: ftuħ passiv tal-app (pereżempju attivat minn notifika push) mhuwiex l-istess bħal daħla rreġistrata tal-ikel jew check-in komplut; iddefinixxi u rrapporta dwar interazzjonijiet kwalifikanti biss.
- **Rapportar biss tal-medja tal-popolazzjoni**: rata medja tal-konsistenza li tidher tajba tista' taħbi popolazzjoni bimodali ta' pazjenti involuti ħafna u kważi għal kollox diżinvolti; irrapporta d-distribuzzjoni fil-meded tal-konsistenza, mhux biss il-medja.
- **Ignorar tad-denominatur tat-tul tar-reġistrazzjoni**: it-tqabbil tar-rati tal-konsistenza bejn pazjenti rreġistrati għal perjodi differenti ħafna mingħajr ma titqies it-tul tar-reġistrazzjoni se jkun preġudikat favur kwalunkwe grupp li kellu perjodu ta' kejl iqsar u aktar faċli biex jinżamm.
- **Sinkronizzazzjoni awtomatika fl-isfond li tkabbar ir-rata**: fluss ta' dejta ta' wearable sinkronizzat b'mod passiv jista' jagħmel pazjent diżinvolut jidher kontinwament attiv mingħajr ebda bidla reali fl-imġiba jew involviment mill-prodott min-naħa tiegħu.

## Sorsi

- Letteratura rivedut mill-pari dwar mudelli ta' involviment fis-saħħa diġitali u r-relazzjoni tagħhom mal-eżiti kliniċi, pereżempju studji ppubblikati fil-Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), gwida dwar il-kwalità tad-dejta tas-saħħa ġġenerata mill-pazjenti u l-kejl tal-involviment
- Digital Therapeutics Alliance, gwida ta' prattika tajba dwar il-kejl tal-involviment u tal-eżiti għat-terapewtika diġitali

Ara wkoll: ir-[rata ta' żamma tal-utenti](../rata-ta-żamma-tal-utenti/), il-metrika mill-qrib relatata dwar jekk pazjent jibqax irreġistrat xejn, b'differenza minn kemm jinvolvi ruħu b'mod konsistenti waqt li jkun irreġistrat.
