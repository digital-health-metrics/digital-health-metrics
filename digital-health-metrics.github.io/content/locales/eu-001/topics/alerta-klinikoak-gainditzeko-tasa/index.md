# Alerta klinikoak gainditzeko tasa

Alerta klinikoak gainditzeko tasak neurtzen du erabaki klinikoa laguntzeko (CDS) alerten zer proportzio baztertzen edo gainditzen duen kliniko batek, jarduteko ordez; alerta horien artean daude sendagaien arteko elkarrekintzen abisuak, alergia-alertak eta dosi-tarteen egiaztapenak, medikuaren aginduen sarrera konputerizatuaren (CPOE) sistema batek sortuak. "Alerta-nekea" detektatu eta kudeatzeko erabiltzen den seinale kuantitatibo estandarra da: balio txikiko abisuen bolumena gainezkagarria bihurtzean klinikoek alertekiko sentikortasuna galtzeko ondo dokumentatutako joera.

## Zergatik den garrantzitsua

Sendagaien arteko elkarrekintzen alerten argitaratutako gainditze-tasak, ohi, ehuneko berrogeita hamarretik laurogeita hamar baino gehiagora bitartekoak dira, eta tasa altu bat ez da automatikoki segurtasun-porrota: alerta eten-eragile asko testuinguruan klinikoki garrantzirik gabeko elkarrekintzengatik jaurtitzen dira, edo kliniko batek aginduen multzo beraren barruan lehenago jada jardun duen alerta bat errepikatzen dute; beraz, sistema ondo doitu batek nahita alerta gutxiago eta balio handiagokoak jaurtitzen ditu, gainditze-tasa zerora jaisten saiatu beharrean. Segurtasunerako benetan axola dutenak epe luzeko joera, larritasun-mailen arteko banaketa eta klinikoek larritasun handiko alerta bat gainditzean arrazoia dokumentatzen duten ala ez dira; ebidentzia sendoa duten larritasun handiko elkarrekintzetan gainditze-tasaren gorakada gobernantza-kezka erreala da, alerta guztien batez bestekoa egonkor ageri bada ere.

## Nola kalkulatzen den

```
Gainditze-tasa = gainditutako alertak / jaurtitako alerta guztiak × 100

Honen arabera segmentatu:
  - larritasun-maila (adib. kontraindikatua, larria, ertaina)
  - alerta mota (sendagaien arteko elkarrekintza, alergia, terapia
    bikoiztua, dosi-tartea)
  - gainditzearen arrazoia dokumentatu den ala ez

"Gainditze dokumentatuen tasak" justifikazio erregistratua duten
gainditzeen proportzioa jarraitzen du, eta berez gobernantza-neurri bat da.
```

## Adibide landua

Ospitale baten CPOE sistemak 10.000 sendagai-elkarrekintza alerta jaurtitzen ditu hilabete batean, eta haietatik 8.700 gainditzen dira, % 87ko gainditze-tasa orokorra emanez. Larritasunaren arabera segmentatuta, "kontraindikatua" mailako 500 alertetatik 60 gainditzen dira (% 12), eta "ertaina" mailako 6.000 alertetatik 5.700 (% 95). Ertaineko mailako zifra argitaratutako erreferentziekin nahikoa bat dator eta, bere kabuz, ez da kezkagarria; kontraindikatuen mailako zifrak kasuz kasuko berrikuspena merezi du, eta maila horretako 500 gainditzeetatik 340k bakarrik arrazoi dokumentatua izateak da gobernantza-aurkikuntza ekingarriagoa.

## Datu-iturriak eta kontuan hartu beharrekoak

Historia kliniko elektronikoaren auditoria-erregistroak edo CDS saltzailearen alerta-moduluak berak alerta-jaurtiketa eta alerta-erantzun gertaera bakoitza erregistratzen du, klinikoak testu libreko edo egituratutako justifikaziorik sartu duen ala ez barne. Erakundeen artean, edo erakunde bereko sailen artean ere, gainditze-tasak alderatzeko, azpiko alerta-arau multzoak eta larritasun-mailak berdinak direla egiaztatu behar da; arau multzo oso zorrotz doitu bat duen ospitale batek gainditze-tasa baxuagoa erakutsiko du, klinikoen jokabidearekin zerikusirik ez duten arrazoiengatik.

## Hutsuneak

- **Gainditze-tasa gordina segurtasun-puntuazio bakartzat hartzea**: balio txikiko alerten gainditze ondo justifikatuak eta benetan arriskutsuak diren elkarrekintzen gainditze ez-seguruak nahasten ditu; beti segmentatu larritasunaren arabera.
- **Gainditzearen arrazoia jasotzen ez izatea**: arrazoi dokumentaturik gabe, ezinezkoa da bereiztea "alerta hau okerra zen" eta "alerta hau zuzena zen eta klinikoak erabaki ez-segurua hartu zuen", hau da, pazientearen segurtasunerako benetan axola duen bereizketa.
- **Alerta-arauen puztea denborarekin**: "seguru egoteko" alerta gehiago gehitzeak, balio txikikoak ezabatu gabe, gainditze-tasen gorakadaren eta alerta-nekearen zuzeneko kausa da; alerten gobernantzak gaizki funtzionatzen duten arauen aldizkako berrikuspena eta erretiroa barne hartu behar ditu, ez monitorizazioa bakarrik.
- **Eten-diseinu desberdineko sistemen arteko tasak alderatzea**: eten-eragile eta geldiarazle bihurtzen den alerta batek gainditze-jokabide desberdina sortzen du alerta pasibo eta blokeatzaile ez den batekin alderatuta, beraz bi metrikak ez dira zuzenean alderagarriak.

## Iturriak

- Erabaki klinikoaren laguntzaren alerta-nekeari buruzko literatura aditu-berrikusia, JAMIA eta npj Digital Medicine bezalako aldizkarietan zabal argitaratua
- ONC / HealthIT.gov, erabaki klinikoaren laguntzari buruzko osasun-informatikaren segurtasun-gidalerroak
- Institute for Safe Medication Practices (ISMP), CDS alerten diseinuari eta gobernantzari buruzko gidalerroak
