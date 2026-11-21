# Preċiżjoni tat-Triage u tal-Indirizzar

Il-preċiżjoni tat-triage u tal-indirizzar hija s-sehem ta' laqgħat ta' pazjenti li fihom għodda awtomatika jew assistita mill-AI tat-triage tindirizza b'mod korrett pazjent lejn il-livell u l-ambjent xierqa ta' kura — pereżempju awtokura, kura primarja, kura urġenti, jew kura ta' emerġenza — kif iġġudikat kontra standard ta' referenza vvalidat klinikament. Hija l-metrika tas-sigurtà u tal-effettività għal kull bieb ta' quddiem diġitali, kontrollur ta' sintomi, jew sistema ta' triage bl-AI: il-proposta kollha ta' valur tal-għodda tistrieħ fuq l-indirizzar tal-pazjenti b'mod korrett, malajr u konsistenti.

## Għaliex hija importanti

Għodda ta' triage mhux preċiża tikkawża dannu fiż-żewġ direzzjonijiet: it-triage baxx żżejjed (l-indirizzar ta' pazjent lejn livell ta' kura aktar baxx minn dak li jeħtieġ) jista' jdewwem it-trattament ta' emerġenza ġenwina, filwaqt li t-triage għoli żżejjed (l-indirizzar ta' pazjent lejn livell ta' kura ogħla minn dak li jeħtieġ) jonfoq kapaċità skarsa ta' emerġenza u kura urġenti u jżid l-ispiża u l-ansjetà tal-pazjent mingħajr ebda benefiċċju kliniku. Billi dawn iż-żewġ modi ta' falliment għandhom konsegwenzi differenti ħafna, il-preċiżjoni tat-triage u tal-indirizzar għandha dejjem tiġi rrapportata flimkien mad-direzzjoni tal-iżbalji, mhux bħala figura aggregata waħda ta' preċiżjoni li taħbi jekk l-għodda tkunx qed tiżbalja b'mod sikur jew perikoluż. Ir-regolaturi u s-sistemi tas-saħħa li jevalwaw għodda ta' triage bl-AI għall-użu dejjem aktar jeżiġu dan it-tip ta' rapportar stratifikat tal-preċiżjoni bħala kundizzjoni tal-approvazzjoni klinika, partikolarment għal għodod li joperaw b'xi grad ta' awtonomija minn kliniċista.

## Kif tiġi kkalkulata

```
Preċiżjoni tat-triage u tal-indirizzar = laqgħat indirizzati b'mod korrett /
                                          laqgħat totali ttriġati × 100

Irrapporta separatament it-triage baxx żżejjed u l-għoli żżejjed:
  Rata ta' triage baxx żżejjed = laqgħat indirizzati lejn livell ta' akutezza
                                  aktar baxx mill-istandard ta' referenza /
                                  laqgħat totali ttriġati × 100
  Rata ta' triage għoli żżejjed = laqgħat indirizzati lejn livell ta' akutezza
                                  ogħla mill-istandard ta' referenza /
                                  laqgħat totali ttriġati × 100

L-istandard ta' referenza huwa tipikament rieżami retrospettiv minn kliniċista
tal-istess każ, mingħajr ma l-kliniċista jkun jaf l-output tal-għodda fejn possibbli.
```

## Eżempju kkalkulat

Għodda ta' kontrollur tas-sintomi bl-AI tittriġa 5,000 laqgħa ta' pazjenti f'xahar. Rieżami minn kliniċista li ma jafx l-output tal-għodda minn kampjun każwali ta' 500 minn dawn il-laqgħat isib li 430 ġew indirizzati lejn il-livell korrett ta' akutezza (preċiżjoni 86%), 45 kienu ttriġati baxx żżejjed (9%), u 25 kienu ttriġati għoli żżejjed (5%). Ir-rata ta' triage baxx żżejjed ta' 9% hija l-figura li teħtieġ l-aktar investigazzjoni urġenti, billi tirrappreżenta laqgħat fejn pazjent seta' ġie mmexxi lejn kura inqas urġenti minn dik li verament kellu bżonn; ir-rata ta' triage għoli żżejjed ta' 5% hija tħassib dwar il-kapaċità u l-ispiża iżda mhux tħassib dirett dwar is-sigurtà.

## Sorsi tad-data u twissijiet

L-istandard ta' referenza li kontrih titkejjel il-preċiżjoni tat-triage huwa importanti ħafna: rieżami minn kliniċista wieħed jintroduċi l-varjabbiltà tal-ġudizzju ta' dak il-kliniċista, għalhekk figura kredibbli ta' preċiżjoni normalment teħtieġ jew diversi reviżuri indipendenti b'qbil dokumentat bejn il-valutaturi, jew tqabbil ma' eżitu kliniku sussegwenti u kkonfermat (liema kura l-pazjent verament kellu bżonn, stabbilita wara l-fatt). Il-kampjunar huwa importanti wkoll: ir-rieżami ta' kampjun konvenjenti biss ta' laqgħat, jew biss dawk immarkati bħala mhux tas-soltu, ma jipproduċix figura li tiġġeneralizza għall-prestazzjoni ġenerali tal-għodda. Il-figuri tal-preċiżjoni għandhom jiġu rrapportati separatament skont il-kategorija tas-sintomu jew tal-ilment ippreżentat fejn il-volum tal-każijiet sottostanti jippermetti, billi l-għodod tat-triage rarament jaħdmu b'mod uniformi fil-kundizzjonijiet kollha.

## Żbalji komuni

- **Rapportar ta' figura waħda mħallta ta' preċiżjoni**: it-taħlit tat-triage baxx żżejjed u l-għoli żżejjed f'numru wieħed jaħbi jekk l-iżbalji tal-għodda jimxux lejn il-mod ta' falliment aktar perikoluż; irrapportahom dejjem separatament.
- **Użu ta' reviżur wieħed li jaf l-output tal-għodda bħala standard ta' referenza**: dan jista' jippreġudika bil-kwiet il-figura tal-preċiżjoni lejn dak li dak ir-reviżur kien jagħmel huwa stess, minflok standard kliniku indipendenti.
- **Validazzjoni biss fuq dejta retrospettiva u konvenjenti**: il-preċiżjoni reali tal-indirizzar ta' għodda taħt input ħaj u ambigwu mill-pazjent spiss tvarja materjalment mill-preċiżjoni tagħha fuq sett ta' validazzjoni kkurat mibni waqt l-iżvilupp.
- **Ignorar tad-drift tal-prestazzjoni wara l-introduzzjoni**: il-preċiżjoni ta' mudell ta' triage bl-AI tista' tiddeterjora maż-żmien hekk kif jinbidlu l-popolazzjonijiet tal-pazjenti, is-sintomi ppreżentati, jew id-disponibbiltà tal-mogħdijiet tal-kura; il-preċiżjoni għandha tiġi mkejla mill-ġdid fuq bażi rikorrenti, mhux validata darba u assunta stabbli.

## Sorsi

- ONC / HealthIT.gov, gwida dwar is-sigurtà u l-assigurazzjoni tal-kwalità tal-appoġġ kliniku għad-deċiżjonijiet u tal-għodod mogħnija bl-AI
- Letteratura rivedut mill-pari dwar il-preċiżjoni tal-kontrolluri tas-sintomi u tal-għodod ta' triage bl-AI, pereżempju studji ppubblikati f'JAMIA, npj Digital Medicine, u BMJ Health & Care Informatics
- NHS England, gwida dwar is-sigurtà klinika tal-għodod diġitali tat-triage u tal-konsultazzjoni mill-bogħod (standards tal-ġestjoni tar-riskju kliniku DCB0129/DCB0160)

Ara wkoll: il-[ħin ta' proċessar tar-riferimenti diġitali](../ħin-ta-proċessar-tar-riferimenti-diġitali/), il-metrika tal-proċess l-aktar direttament wara deċiżjoni ta' triage.
