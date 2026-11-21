# Točnost usmjeravanja trijaže

Točnost usmjeravanja trijaže udio je susreta s pacijentima u kojima automatizirani ili umjetnom inteligencijom potpomognuti alat za trijažu ispravno usmjerava pacijenta na odgovarajuću razinu i okruženje skrbi — na primjer samozbrinjavanje, primarnu zdravstvenu zaštitu, hitnu skrb niže razine ili hitnu službu — prema klinički validiranom referentnom standardu. To je metrika sigurnosti i učinkovitosti za svaka digitalna „ulazna vrata”, provjeru simptoma ili sustav trijaže temeljen na umjetnoj inteligenciji: cjelokupna vrijednosna ponuda alata počiva na tome da pacijente usmjerava ispravno, brzo i dosljedno.

## Zašto je važna

Netočan alat za trijažu uzrokuje štetu u oba smjera: podtrijaža (usmjeravanje pacijenta na nižu razinu skrbi od potrebne) može odgoditi liječenje stvarnog hitnog stanja, dok nadtrijaža (usmjeravanje pacijenta na višu razinu skrbi od potrebne) troši oskudan kapacitet hitne i žurne skrbi te povećava trošak i tjeskobu pacijenta bez kliničke koristi. Budući da ta dva načina neuspjeha imaju vrlo različite posljedice, točnost usmjeravanja trijaže uvijek treba prijavljivati uz smjer pogrešaka, a ne kao jedan zbrojeni podatak o točnosti koji skriva griješi li alat na siguran ili opasan način. Regulatori i zdravstveni sustavi koji procjenjuju alat za trijažu temeljen na umjetnoj inteligenciji za uvođenje sve češće zahtijevaju takvo stratificirano izvješćivanje o točnosti kao uvjet kliničkog odobrenja, osobito za alate koji djeluju s bilo kojim stupnjem autonomije u odnosu na kliničara.

## Kako se izračunava

```
Točnost usmjeravanja trijaže = ispravno usmjereni susreti / ukupni
                               trijažirani susreti × 100

Prijavite podtrijažu i nadtrijažu zasebno:
  Stopa podtrijaže = susreti usmjereni na nižu razinu žurnosti od
                     referentnog standarda / ukupni trijažirani
                     susreti × 100
  Stopa nadtrijaže = susreti usmjereni na višu razinu žurnosti od
                     referentnog standarda / ukupni trijažirani
                     susreti × 100

Referentni standard obično je retrospektivni pregled istog slučaja
od strane kliničara, gdje je moguće zaslijepljen za izlaz alata.
```

## Razrađeni primjer

Alat za provjeru simptoma temeljen na umjetnoj inteligenciji trijažira 5 000 susreta s pacijentima u mjesecu. Zaslijepljeni klinički pregled nasumičnog uzorka od 500 tih susreta pokazuje da je 430 usmjereno na ispravnu razinu žurnosti (točnost 86 %), 45 ih je podtrijažirano (9 %), a 25 nadtrijažirano (5 %). Stopa podtrijaže od 9 % podatak je koji najhitnije treba istražiti, jer predstavlja susrete u kojima je pacijent možda upućen na manje hitnu skrb od one koja mu je zaista trebala; stopa nadtrijaže od 5 % problem je kapaciteta i troška, ali ne izravno sigurnosti.

## Izvori podataka i ograničenja

Referentni standard prema kojem se mjeri točnost trijaže iznimno je važan: pregled jednog kliničara unosi varijabilnost prosudbe tog kliničara, pa vjerodostojan podatak o točnosti obično zahtijeva ili više neovisnih ocjenjivača s dokumentiranom međuocjenjivačkom suglasnošću ili usporedbu s naknadnim, potvrđenim kliničkim ishodom (kakva je skrb pacijentu zaista bila potrebna, utvrđeno naknadno). Važan je i uzorkovanje: pregled samo prigodnog uzorka susreta ili samo onih označenih kao neobični neće dati podatak koji se može generalizirati na ukupne performanse alata. Podatke o točnosti treba prijavljivati zasebno po simptomu ili kategoriji tegoba gdje broj slučajeva to dopušta, jer alati za trijažu rijetko rade ujednačeno za sva stanja.

## Zamke

- **Prijavljivanje jednog zbrojenog podatka o točnosti**: spajanje podtrijaže i nadtrijaže u jedan broj skriva naginju li pogreške alata opasnijem načinu neuspjeha; uvijek ih prijavljujte zasebno.
- **Korištenje jednog nezaslijepljenog ocjenjivača kao referentnog standarda**: to može prešutno pristrano pomaknuti podatak o točnosti prema onome što bi taj ocjenjivač sam učinio, umjesto prema neovisnom kliničkom standardu.
- **Validacija samo na retrospektivnim, prigodnim podacima**: stvarna točnost usmjeravanja alata uz stvarne, dvosmislene unose pacijenata često se bitno razlikuje od njegove točnosti na odabranom validacijskom skupu sastavljenom tijekom razvoja.
- **Zanemarivanje pomaka u performansama nakon uvođenja**: točnost modela trijaže temeljenog na umjetnoj inteligenciji može s vremenom opadati kako se mijenjaju populacije pacijenata, simptomi s kojima se javljaju ili dostupnost puteva skrbi; točnost treba ponovno mjeriti periodički, a ne validirati jednom i pretpostaviti da je stabilna.

## Izvori

- ONC / HealthIT.gov, smjernice o sigurnosti i osiguranju kvalitete kliničke potpore odlučivanju i alata s umjetnom inteligencijom
- Recenzirana literatura o točnosti alata za provjeru simptoma i trijažu temeljenu na umjetnoj inteligenciji, na primjer studije objavljene u časopisima JAMIA, npj Digital Medicine i BMJ Health & Care Informatics
- NHS England, smjernice o kliničkoj sigurnosti alata za digitalnu trijažu i konzultacije na daljinu (standardi upravljanja kliničkim rizikom DCB0129/DCB0160)

Vidi također: [vrijeme obrade digitalne uputnice](../vrijeme-obrade-digitalne-uputnice/), procesnu metriku koja je najizravnije nizvodno od odluke o trijaži.
