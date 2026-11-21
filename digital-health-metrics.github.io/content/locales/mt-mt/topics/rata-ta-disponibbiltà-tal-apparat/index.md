# Rata ta' Disponibbiltà tal-Apparat

Ir-rata ta' disponibbiltà tal-apparat (device uptime) tkejjel is-sehem tal-ħin skedat ta' monitoraġġ li apparat tas-saħħa konness — sensur ta' monitoraġġ mill-bogħod tal-pazjenti, wearable, jew unità tat-telesaħħa fid-dar — huwa fil-fatt online, jittrażmetti dejta, u jaħdem sew, minflok offline, skonnettjat, jew ma jaħdimx sew. Hija l-metrika fundamentali tal-infrastruttura li hija l-bażi ta' kull programm ta' monitoraġġ mill-bogħod jew ta' apparati konnessi: allert kliniku, tendenza bijometrika, jew figura ta' involviment ikkalkulata minn apparat li kien frekwentement offline hija affidabbli biss daqs il-konnettività wara tagħha.

## Għaliex hija importanti

Il-proposta kollha ta' valur kliniku ta' programm ta' monitoraġġ mill-bogħod tal-pazjenti tiddependi minn qbid kontinwu jew kważi kontinwu tad-dejta; apparat b'disponibbiltà fqira joħloq lakuni siekta fl-istampa klinika tal-pazjent li jistgħu jiġu mitluqin bħala stabbiltà (ebda allert għax ebda dejta, mhux għax ma nbidel xejn) minflok jiġu identifikati korrettament bħala falliment tal-monitoraġġ. Id-disponibbiltà tal-apparat hija wkoll indikatur ewlieni tal-ispiża tal-programm u tal-esperjenza tal-pazjent: apparat li spiss jaqta' l-konnessjoni jiġġenera telefonati ta' appoġġ, frustrazzjoni tal-pazjent, u potenzjalment kuntatt kliniku bla bżonn biex jiġi ċċekkjat jekk lakuna fid-dejta tirriflettix avveniment kliniku reali jew sempliċement ħsara teknika. Billi l-falliment tad-disponibbiltà tal-apparat spiss huwa attribwibbli għal infrastruttura li l-organizzazzjoni tikkontrolla (gateway ċellulari kkonfigurat ħażin, kopertura dgħajfa tal-Wi-Fi f'dar il-pazjent, flotta ta' apparati mhux miżmuma biżżejjed) aktar milli lill-pazjent, din il-metrika tappartjeni bis-sħiħ mal-bejjiegħ u mat-tim tal-operazzjonijiet tekniċi, mhux imħallta bla distinzjoni fil-metriki tal-involviment tal-pazjent.

## Kif tiġi kkalkulata

```
Rata ta' disponibbiltà tal-apparat = ħin li l-apparat kien online u jittrażmetti
                                      dejta valida / ħin totali skedat ta'
                                      monitoraġġ × 100

Segmenta l-kawżi tal-għerq tal-waqfien fejn id-dejta tippermetti:
  Falliment min-naħa tal-apparat    (batterija, ħsara fl-hardware, ħabta tal-firmware)
  Falliment tal-konnettività        (waqfa taċ-ċellulari/Wi-Fi/VPN)
  Fatturi min-naħa tal-pazjent      (apparat mitfi, imċaqlaq barra mill-firxa)

Parametri tekniċi ta' appoġġ li għandhom jiġu segwiti flimkien mad-disponibbiltà:
  Użu medju tas-CPU, użu tal-memorja, u livell tal-batterija għal kull apparat
  Ħin medju bejn falliment u ieħor tal-konnettività
  Ħin medju biex jerġa' jikkonnettja wara waqfa
```

## Eżempju kkalkulat

Programm ta' monitoraġġ kardijaku mill-bogħod jiddepjega 1,000 apparat konness, kull wieħed mistenni jittrażmetti kontinwament. Matul xahar ta' 30 jum (720 siegħa skedata ta' monitoraġġ għal kull apparat), il-flotta tirreġistra total kombinat ta' 705,600 siegħa online attwali kontra 720,000 siegħa skedata, u dan jagħti rata ta' disponibbiltà tal-apparat fil-flotta kollha ta' 705,600 / 720,000 × 100 = 98%. L-analiżi tal-kawża tal-għerq tal-14,400 siegħa ta' waqfien turi li 60% huma attribwibbli għal waqfiet tal-konnettività ċellulari kkonċentrati f'reġjun rurali speċifiku tas-servizz, 25% għal apparati b'batteriji li qed jixjieħu u mmarkati għas-sostituzzjoni, u 15% għal pazjenti li temporanjament itfew l-apparat tagħhom. Din id-diżaggregazzjoni tindika żewġ intervenzjonijiet ċari u differenti — soluzzjoni tal-konnettività għar-reġjun affettwat u programm proattiv ta' sostituzzjoni tal-batteriji — li figura aggregata waħda tad-disponibbiltà ma kinitx tiddistingwi.

## Sorsi tad-data u twissijiet

Id-dejta tad-disponibbiltà tiġi mis-sistema tal-ġestjoni tal-apparati u tat-telemetrija tal-manifattur tal-apparat jew tal-bejjiegħ tal-pjattaforma, li tirreġistra avvenimenti ta' konnessjoni u heartbeat għal kull apparat; l-organizzazzjoni għandha tikkonferma eżattament x'jgħodd il-bejjiegħ bħala "online" (apparat jista' jirrapporta lilu nnifsu konness ma' netwerk filwaqt li jfalli li jittrażmetti dejta klinika valida, u dan għandu jingħadd bħala waqfien għal skopijiet kliniċi anke jekk id-dashboard tal-bejjiegħ stess jirrapportah bħala konness). Id-disponibbiltà għandha tiġi rrapportata għal kull koorti ta' apparati jew ġeografija fejn il-volum jippermetti, billi l-kwalità tal-konnettività spiss tkun miġbura ġeografikament f'raggruppamenti (kopertura ċellulari rurali, Wi-Fi ta' bini aktar qadim) minflok imqassma b'mod indaqs mal-popolazzjoni tal-pazjenti, u figura aggregata fil-flotta kollha tista' taħbi problema reġjonali severa u indirizzabbli.

## Żbalji komuni

- **Ħawwad tal-konnessjoni tan-netwerk ma' trażmissjoni valida tad-dejta**: apparat jista' jidher "konness" fuq id-dashboard tal-bejjiegħ filwaqt li jfalli jittrażmetti dejta klinika użabbli; iddefinixxi u kejjel id-disponibbiltà kontra l-wasla attwali ta' dejta valida, mhux biss il-konnettività mhux ipproċessata tan-netwerk.
- **Rapportar biss ta' medja fil-flotta kollha**: dan jista' jaħbi problema severa ta' waqfien speċifika għal ġeografija jew koorti ta' apparati li medja mmirata kienet turi u li għandha soluzzjoni speċifika u indirizzabbli.
- **Nuqqas ta' distinzjoni tal-kawża tal-għerq tal-waqfien**: il-waqfien min-naħa tal-apparat, tal-konnettività u tal-pazjent kull wieħed jeħtieġ intervent kompletament differenti; perċentwal wieħed ta' waqfien mingħajr segmentazzjoni skont il-kawża tal-għerq ma jistax jittieħed azzjoni fuqu.
- **Trattament ta' lakuna fid-dejta bħala stabbiltà klinika b'mod awtomatiku**: fluss ta' dejta nieqes minn apparat offline għandu jattiva kontroll tal-konnettività teknika, mhux jiġi interpretat bil-kwiet bħala "l-ebda aħbar hija aħbar tajba" għall-istatus kliniku tal-pazjent.

## Sorsi

- Continua Design Guidelines / Personal Connected Health Alliance, standards tekniċi ta' interoperabbiltà għal apparati tas-saħħa konnessi
- ONC / HealthIT.gov, gwida dwar l-implimentazzjoni tal-programmi ta' monitoraġġ mill-bogħod tal-pazjenti u r-rekwiżiti tekniċi
- Letteratura rivedut mill-pari dwar l-affidabbiltà tal-apparati tal-monitoraġġ mill-bogħod tal-pazjenti u t-tlestija tad-dejta, pereżempju studji ppubblikati f'npj Digital Medicine

Ara wkoll: il-[preċiżjoni tat-triage u tal-indirizzar](../preċiżjoni-tat-triage-u-tal-indirizzar/), li tiddependi mill-wasla ta' dejta kompluta u affidabbli mill-apparat sabiex issir deċiżjoni korretta ta' triage fl-ewwel lok.
