# Rata ta' Żamma tal-Utenti

Ir-rata ta' żamma tal-utenti hija s-sehem ta' utenti attivi f'perjodu tal-bidu li jibqgħu attivi f'perjodu aktar tard, u l-invers tagħha, ir-rata ta' churn (jew abbandun), hija s-sehem li jieqfu jużaw il-prodott għal kollox. Fejn ir-rata ta' adozzjoni tal-portal tal-pazjent (ara dak is-suġġett) tkejjel jekk pazjent qatt attivax prodott tas-saħħa diġitali b'mod sinifikanti, iż-żamma tkejjel jekk jibqax jużah — u għal kull prodott tas-saħħa diġitali bi stil ta' abbonament jew ta' kura kontinwa, iż-żamma normalment hija l-metrika waħda l-aktar marbuta mill-qrib kemm mal-impatt kliniku kif ukoll mas-sostenibbiltà kummerċjali.

## Għaliex hija importanti

Prodott tas-saħħa diġitali li ma jistax iżomm l-utenti ma jistax jagħti benefiċċju kliniku sostnut, ikunu b'saħħithom kemm ikunu n-numri inizjali tal-adozzjoni jew tal-attivazzjoni: għodda għall-ġestjoni ta' kundizzjoni kronika użata għal ġimgħatejn u mbagħad abbandunata hija improbabbli li tbiddel eżitu bijometriku li jiddependi minn xhur ta' bidla sostnuta fl-imġiba. Iż-żamma hija wkoll waħda mill-metriki l-aktar konsegwenzjali kummerċjalment li kumpanija tas-saħħa diġitali tirrapporta lill-investituri u lill-pagaturi, għax il-kurvi taż-żamma (il-forma tat-tnaqqis maż-żmien, mhux biss perċentwal wieħed ta' żamma) jiżvelaw jekk il-prodott sabx mudell ta' użu verament sostenibbli jew sempliċement qed jaqbad interess inizjali mmexxi min-novità li jonqos b'mod prevedibbli. Kurva taż-żamma li tiċċattja wara tnaqqis inizjali (pazjenti li jagħmluha lil hinn mill-ewwel xahar għandhom tendenza li jibqgħu) hija sinjal differenti ħafna, u ħafna aktar b'saħħtu, minn waħda li tkompli tonqos b'mod kostanti mingħajr qiegħ.

## Kif tiġi kkalkulata

```
Rata ta' żamma (perjodu N) = utenti attivi fil-perjodu N li kienu attivi wkoll
                              fil-perjodu tal-koorti tal-bidu / utenti fil-perjodu
                              tal-koorti tal-bidu × 100

Rata ta' churn = 1 − rata ta' żamma (għall-istess perjodu)

Irrapporta bħala kurva taż-żamma tal-koorti (żamma fil-jum/ġimgħa/xahar 1, 2, 3…),
mhux bħala figura waħda f'mument wieħed, għax snapshot wieħed jħawwad
utenti li ssieħbu reċentement (li għadhom ma kellhomx ċans jabbandunaw)
ma' dawk b'tul twil ta' użu.
```

## Eżempju kkalkulat

App tas-saħħa diġitali tirreġistra koorti ta' 1,000 utent ġdid f'Jannar. Sa tmiem ix-xahar 1, 640 minn dawk l-1,000 oriġinali għadhom attivi (żamma tax-xahar 1 ta' 64%). Sa tmiem ix-xahar 3, 410 jibqgħu attivi (żamma tax-xahar 3 ta' 41%). Sax-xahar 6, 380 jibqgħu attivi (żamma tax-xahar 6 ta' 38%). Il-forma ta' din il-kurva — tnaqqis inizjali qawwi segwit minn ċattjar bejn ix-xahar 3 u x-xahar 6 — tissuġġerixxi li l-prodott iżomm qalba stabbli ta' utenti ladarba jgħaddu l-ostakolu inizjali tal-adozzjoni, li huwa sinjal materjalment differenti u aktar inkoraġġanti milli kieku t-tnaqqis mix-xahar 3 sax-xahar 6 kompla bl-istess rata bħax-xhur 1 sa 3.

## Sorsi tad-data u twissijiet

Iż-żamma tiġi kkalkulata mil-logs tal-avvenimenti tal-login jew tal-attività tal-prodott innifsu, billi "attiv" jiġi definit b'mod konsistenti (pereżempju, mill-inqas sessjoni kwalifikanti waħda fil-perjodu) f'kull koorti li tkun qed titqabbel. Il-koorti għandhom jitqabblu fuq bażi ekwivalenti — l-istess definizzjoni tal-bidu ta' "attiv", l-istess tul ta' tieqa ta' osservazzjoni — billi anke differenzi żgħar fid-definizzjoni (xhur ta' 30 jum kontra 28 jum, jew limitu ta' "attiv" aktar strett kontra aktar laxk) jistgħu jbiddlu perċentwal irrapportat taż-żamma b'diversi punti mingħajr ebda differenza reali fl-imġiba tal-utenti. L-effetti staġjonali huma komuni fl-apps tas-saħħa marbuta mar-riżoluzzjonijiet tas-Sena l-Ġdida jew ma' perjodi speċifiċi ta' sensibilizzazzjoni dwar is-saħħa, għalhekk it-tqabbil tal-koorti sena wara sena normalment huwa aktar informattiv milli tqabbil ta' koorti ġirien minn żminijiet differenti tas-sena.

## Żbalji komuni

- **Rapportar ta' snapshot wieħed taż-żamma minflok kurva**: figura waħda ta' "X% tal-utenti għadhom attivi" mingħajr il-forma tat-tnaqqis maż-żmien ma tistax tiddistingwi prodott li jiċċattja (b'saħħtu) minn wieħed fi tnaqqis kontinwu (mhux b'saħħtu).
- **Bidla fid-definizzjoni ta' "attiv" bejn perjodi ta' rapportar**: it-teħid ħafif tad-definizzjoni ta' utent attiv (pereżempju l-għadd ta' ftuħ passiv tal-app minflok azzjoni kompluta) jista' jagħmel iż-żamma tidher li qed titjieb meta l-użu attwali ma nbidilx xejn.
- **Ignorar tal-istaġjonalità tal-koorti**: it-tqabbil taż-żamma ta' koorti ta' Jannar (spiss inflata mir-reġistrazzjoni għal riżoluzzjonijiet tas-Sena l-Ġdida, li ġġib koorti inqas immotivata fil-medja) ma' koorti miksuba fi żmien differenti tas-sena jista' jipproduċi konklużjonijiet qarrieqa dwar it-tendenza.
- **Taħlit ta' koorti organiċi u ta' akkwist imħallas**: utenti miksuba permezz ta' kanali differenti spiss jinżammu b'mod differenti ħafna; it-taħlit tagħhom f'figura aggregata waħda taż-żamma jista' jaħbi problema ta' żamma speċifika għal kanal.

## Sorsi

- Letteratura rivedut mill-pari dwar l-involviment u l-abbandun tal-apps tas-saħħa diġitali, pereżempju studji ppubblikati fil-Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, gwida ta' prattika tajba dwar il-kejl tal-involviment u taż-żamma għat-terapewtika diġitali
- Rapporti ta' benchmarking tal-industrija dwar iż-żamma fl-apps tas-saħħa mobbli, minn pjattaformi tal-analitika u organizzazzjonijiet tar-riċerka tas-suq tas-saħħa diġitali

Ara wkoll: ir-[rata tal-konsistenza tal-involviment tal-pazjent](../rata-tal-konsistenza-tal-involviment-tal-pazjent/), li tkejjel il-kwalità tal-involviment fost l-utenti miżmuma, b'differenza minn jekk jibqgħux irreġistrati xejn.
