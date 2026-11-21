# Stopa usvajanja portala za pacijente

Stopa usvajanja portala za pacijente mjeri udio prihvatljivih pacijenata koji su se registrirali na mrežnom portalu za pacijente i aktivno ga koriste (na primjer NHS App, Patient Access ili portal povezan sa sustavom elektroničkog zdravstvenog zapisa, kao što je MyChart) kako bi pregledali zapise, rezervirali termine ili poslali poruku svojem timu za skrb. To je ulazni pokazatelj digitalnog angažmana: pacijent koji nikada nije aktivirao račun ne može imati koristi ni od jedne daljnje digitalne usluge izgrađene na portalu.

## Zašto je važna

Portal stvara vrijednost tek kad ga pacijent koristi, pa organizacije usvajanje trebaju pratiti kao lijevak, a ne kao jedan broj: registracija, aktivacija (prva smislena radnja) i aktivna uporaba (uporaba unutar završnog vremenskog prozora) tri su različite stope koje se prečesto miješaju. Timovi za digitalne usluge često su pod pritiskom da prijave jedan, povoljan naslovni broj, a potrebna je disciplina da bi se inzistiralo na težoj i poštenijoj raščlambi. Niska ili neravnomjerno raspoređena stopa usvajanja ujedno je i signal jednakosti: pacijenti koji su stariji, imaju nižu digitalnu pismenost, ne govore jezikom većine ili nemaju pouzdan širokopojasni pristup ili pametni telefon sustavno se rjeđe nalaze u brojniku, pa rastući prosjek usvajanja može prikriti sve veći jaz upravo kod pacijenata kojima je kontakt sa zdravstvenim službama često najpotrebniji.

## Kako se izračunava

Prijavite sve tri faze, a ne samo registraciju, te uvijek izričito navedite nazivnik:

```
Stopa registracije = pacijenti s otvorenim računom na portalu / prihvatljiva populacija pacijenata × 100
Stopa aktivacije   = pacijenti koji su dovršili prvu smislenu radnju (pregled nalaza,
                     rezervacija termina, slanje poruke) / pacijenti s računom × 100
Stopa aktivne uporabe = pacijenti koji su se prijavili barem jednom u posljednjih 12 mjeseci /
                     prihvatljiva populacija pacijenata × 100
```

Prihvatljiva populacija pacijenata obično se definira kao pacijenti koji su imali barem jedan susret s organizacijom u definiranom razdoblju unatrag (uobičajeno 24 mjeseca), a dobi su i statusa privole koji im dopušta imati vlastiti račun.

## Razrađeni primjer

Mreža primarne zdravstvene zaštite skrbi za 50 000 pacijenata koji zadovoljavaju definiciju prihvatljivosti. Od njih se 32 000 registriralo na portalu (stopa registracije 64 %). Od 32 000 registriranih, 27 000 dovršilo je barem jednu smislenu radnju, poput pregleda nalaza (stopa aktivacije 84 % registriranih). U posljednjih 12 mjeseci 21 000 od izvornih 50 000 prihvatljivih pacijenata prijavilo se barem jednom (stopa aktivne uporabe 42 %). Prijava samo podatka o registraciji od 64 % znatno bi precijenila stvarni angažman; podatak o aktivnoj uporabi od 42 % broj je koji bi trebao usmjeravati odluke o resursima za program portala.

## Izvori podataka i ograničenja

Analitika portala obično dolazi sa same platforme dobavljača (događaji prijave, uporaba značajki) ili iz revizijskog zapisa (audit loga) temeljnog sustava elektroničkog zdravstvenog zapisa, a organizacije bi trebale biti skeptične prema nadzornim pločama dobavljača koje prikazuju samo broj registracija. Pristup preko opunomoćenika (roditelj ili skrbnik koji upravlja računom u ime pacijenta) treba označiti i prijavljivati zasebno jer mijenja tko je zapravo „korisnik”. Izbor nazivnika iznimno je važan: računanje u odnosu na ukupni popis registriranih pacijenata, a ne na doista prihvatljivu populaciju do koje se može doprijeti, uvijek će podcijeniti usvajanje, dok će računanje samo u odnosu na pacijente koji su aktivno pozvani uvijek precijeniti, pa definiciju prihvatljivosti treba utvrditi i objaviti uz svaku prijavljenu stopu.

## Zamke

- **Registracija računata kao usvajanje**: otvoren, a nikad korišten račun ima vrijednost blizu nule; prijavite aktivaciju i aktivnu uporabu uz registraciju, a ne umjesto nje.
- **Zanemarivanje digitalne isključenosti**: ukupni podaci o usvajanju mogu rasti dok se jaz između najviše i najmanje digitalno uključenih skupina produbljuje; uvijek segmentirajte prema dobi, deprivaciji, jeziku i invaliditetu ako to dopušta upravljanje podacima.
- **Usporedba organizacija s različitim definicijama prihvatljivosti**: program portala koji poziva samo pacijente sa zabilježenom adresom e-pošte prijavit će višu stopu od programa koji mjeri naspram cijelog popisa registriranih, bez stvarne razlike u uspješnosti.
- **Jednokratna prijava smatra se trajnim angažmanom**: razdoblje unatrag od 12 mjeseci uobičajeno je, no kraći prozor (na primjer 90 dana) daje ranije upozorenje na opadanje uporabe.

## Izvori

- NHS England, statistika uporabe i registracija za NHS App (publikacije nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, mjere programa Promoting Interoperability, uključujući mjere pristupa pacijenata View, Download, Transmit (VDT)
- Recenzirana literatura o usvajanju portala za pacijente i nejednakostima u digitalnom zdravlju, na primjer studije objavljene u časopisu Journal of the American Medical Informatics Association (JAMIA)

Vidi također: [stopa nedolazaka na termine](../stopa-nedolazaka-na-termine/), na koju izravno utječu samostalno zakazivanje i podsjetnici putem portala.
