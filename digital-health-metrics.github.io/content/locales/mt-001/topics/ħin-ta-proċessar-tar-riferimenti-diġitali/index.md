# Ħin ta' Proċessar tar-Riferimenti Diġitali

Il-ħin ta' proċessar tar-riferimenti diġitali huwa l-ħin li jgħaddi minn meta riferiment elettroniku jiġi sottomess minn kliniċista li jirreferi sa meta jiġi ttriġat u jew aċċettat, jew miċħud, jew ibbukkjat mis-servizz li jirċievi. Hija metrika tal-proċess (fluss), differenti mill-ħin totali ta' stennija tal-pazjent, u hija waħda mill-aktar postijiet ċari fejn bidla f'sistema diġitali (e-riferiment strutturat, triage bbażat fuq immaġini, formoli standardizzati ta' riferiment) tista' tintwera li tmexxi numru operazzjonali u mhux biss punteġġ ta' sodisfazzjon.

## Għaliex hija importanti

Pass ta' triage bil-mod jew varjabbli ħafna iżid dewmien qabel ma pazjent anke jingħaqad ma' lista ta' stennija klinika, u billi dak id-dewmien iseħħ qabel ma tibda xi kura klinika, huwa skart puru tal-proċess li l-għodod diġitali huma f'pożizzjoni tajba biex ineħħu. Sistemi ta' riferiment li jġiegħlu ċiklu ta' "ritorn lil min irreferi" minħabba informazzjoni nieqsa joħolqu linji ta' xogħol mill-ġdid li huma faċli biex jinqabżu jekk il-ħin ta' proċessar jitkejjel biss fuq riferimenti li jgħaddu nodfa mill-ewwel darba. Fejn servizz introduċa formoli diġitali strutturati ta' riferiment, oqsma obbligatorji, jew triage bbażat fuq immaġini (pereżempju fit-teledermatoloġija), il-ħin ta' proċessar normalment huwa l-metrika waħda l-aktar konvinċenti biex juri l-benefiċċju, għax jista' jitkejjel qabel u wara l-bidla bl-istess strumentazzjoni.

## Kif tiġi kkalkulata

```
Ħin ta' proċessar = timestamp(deċiżjoni ta' triage) − timestamp(sottomissjoni tar-riferiment)

Irrapporta l-medjan u perċentil għoli (komunement id-90), mhux biss il-medja,
għax id-distribuzzjoni hija mxaqqla ħafna lejn il-lemin minn riferimenti
mibgħuta lura jew kumplessi.

Ikkunsidra l-ħinijiet tal-isfaġi fejn is-sistema tirreġistrahom:
  Sottomissjoni → riċevuta mis-servizz
  Riċevuta → deċiżjoni ta' triage
  Deċiżjoni ta' triage → appuntament ibbukkjat (fejn relevanti)
```

## Eżempju kkalkulat

It-traċċa ta' verifika ta' sistema ta' e-riferiment turi ħin medjan mis-sottomissjoni sad-deċiżjoni ta' triage ta' 1.8 jum fl-ispeċjalitajiet kollha, b'ħin tad-90 perċentil ta' 6 ijiem, immexxi prinċipalment minn riferimenti li jintbagħtu lura lil min irreferi minħabba informazzjoni klinika nieqsa. Mogħdija tat-teledermatoloġija li tuża triage bbażat fuq immaġini fuq l-istess pjattaforma tilħaq ħin medjan ta' proċessar ta' 4 sigħat u d-90 perċentil ta' jum wieħed, għax ritratt u storja strutturata kważi dejjem huma biżżejjed għad-deċiżjoni ta' triage mingħajr il-ħtieġa ta' aktar korrispondenza.

## Sorsi tad-data u twissijiet

It-traċċa ta' verifika tas-sistema tal-e-riferiment jew tal-ġestjoni tar-riferimenti nnifisha hija s-sors primarju, bl-użu tat-timestamps tas-sottomissjoni u tad-deċiżjoni; l-organizzazzjonijiet għandhom jikkonfermaw jekk l-"arloġġ" jieqafx waqt li riferiment jintbagħat lura għal aktar informazzjoni jew jiġrix b'mod kontinwu, billi ż-żewġ definizzjonijiet jipproduċu figuri materjalment differenti għall-istess proċess sottostanti. Il-ħin ta' proċessar għandu jiġi rrapportat konsistentement jew f'ħin kalendarju jew f'ħin tas-sigħat tax-xogħol, billi l-effetti tal-weekends u tal-btajjel jistgħu altrimenti jdewmu t-tqabbil bejn servizzi b'mudelli differenti ta' xogħol.

## Żbalji komuni

- **Kejl ta' riferimenti "nodfa" biss**: l-esklużjoni ta' riferimenti miċħuda jew mibgħuta lura mill-kalkolu taħbi l-piż tax-xogħol mill-ġdid li l-għodod diġitali ħafna drabi huma maħsuba apposta biex inaqqsu.
- **Rapportar tal-medja minflok il-medjan u l-perċentili**: għadd żgħir ta' riferimenti twal u mibgħuta lura jiġbed il-medja ferm 'il fuq mill-esperjenza attwali tipika tal-pazjent.
- **Ħawwad bejn il-ħin ta' proċessar u l-ħin totali ta' stennija**: il-ħin ta' proċessar jgħatti biss il-pass tat-triage; l-esperjenza totali tal-pazjent tinkludi wkoll il-lista ta' stennija klinika sussegwenti, li hija metrika separata rregolata minn restrizzjonijiet ta' kapaċità separati.
- **Nuqqas ta' distinzjoni bejn l-isfaġi**: servizz li jkejjel biss il-ħin minn tarf sa tarf ma jistax ikun jaf jekk figura bil-mod hijiex ikkawżata minn min jirreferi li jissottometti informazzjoni mhux kompluta, mill-kapaċità ta' triage tas-servizz li jirċievi, jew miż-żewġ fatturi.

## Sorsi

- NHS England, statistika u speċifikazzjonijiet tas-servizz tal-e-Referral Service (e-RS)
- Letteratura rivedut mill-pari dwar sistemi elettroniċi ta' ġestjoni tar-riferimenti u mogħdijiet diġitali ta' triage, inkluża t-teledermatoloġija
- ONC / HealthIT.gov, gwida dwar l-interoperabbiltà u l-koordinazzjoni tar-riferimenti
