# Stopa ponovnih prijema u bolnicu

Stopa ponovnih prijema u bolnicu udio je otpuštenih pacijenata koji su neplanirano ponovno primljeni u bolnicu unutar definiranog razdoblja nakon otpusta — najčešće 30 dana. Za digitalno zdravlje to je metrika najizravnije povezana s ekonomikom platitelja i ugovorima o skrbi temeljenoj na vrijednosti: program praćenja na daljinu, praćenja nakon otpusta ili digitalne tranzicije skrbi koji ne može pokazati vjerodostojan učinak na ponovne prijeme teško će zadržati potporu naknada, koliko god dobro izgledali njegovi brojevi angažmana.

## Zašto je važna

Neplanirani ponovni prijem skup je, ometa pacijenta i u mnogim se zdravstvenim sustavima danas izravno kažnjava: sheme poput američkog programa Hospital Readmissions Reduction Program smanjuju plaćanje bolnicama s višim od očekivanih stopama ponovnih prijema za određena stanja, zbog čega bolnice aktivno naručuju digitalne programe nakon otpusta i praćenja na daljinu usmjerene na njihovo smanjenje. Znatan dio ponovnih prijema smatra se potencijalno sprječivim — uzrokovan nedostatnim uputama pri otpustu, propuštenim kontrolnim terminima, nesporazumom oko terapije ili nezbrinutim pogoršanjem simptoma koje dobro osmišljena digitalna dodirna točka može uhvatiti ranije — što je upravo jaz na koji ciljaju digitalni alati za tranzicijsku skrb. Stopu ponovnih prijema uvijek treba čitati uz sastav slučajeva: program koji opslužuje bolesniju, složeniju populaciju imat će strukturno višu osnovnu stopu od onoga koji opslužuje zdraviju populaciju, neovisno o kvaliteti programa.

## Kako se izračunava

```
30-dnevna stopa ponovnih prijema = neplanirani ponovni prijemi unutar
                                   30 dana od otpusta / ukupni indeksni
                                   otpusti × 100

Isključite iz brojnika: planirane ponovne prijeme (npr. zakazani
kontrolni zahvat) i premještaje koji su nastavak iste epizode skrbi,
a ne novi prijem.

Gdje je moguće, prilagodite za rizik pomoću prihvaćenog indeksa
sastava slučajeva ili komorbiditeta prije usporedbe stopa među
različitim populacijama pacijenata ili razdobljima.
```

## Razrađeni primjer

Bolnica u tromjesečju otpusti 1 200 pacijenata sa zatajivanjem srca. Od njih je 210 ponovno primljeno unutar 30 dana, od čega je 15 planiranih ponovnih prijema za zakazani zahvat, koji se isključuju. Neplanirana 30-dnevna stopa ponovnih prijema iznosi (210 − 15) / 1 200 × 100 = 16,25 %. Za podskup od 400 tih pacijenata (odabranih prema kliničkom riziku, a ne nasumično) uvodi se program praćenja na daljinu i njihova je stopa neplaniranih ponovnih prijema 14 %, u usporedbi s 18 % za 800 pacijenata koji nisu upisani. Budući da je upis temeljen na kliničkom riziku, a ne na nasumičnoj dodjeli, ta je razlika sugestivan, a ne uvjerljiv dokaz učinka programa i treba je tumačiti uz analizu prilagodbe za rizik, a ne uzimati zdravo za gotovo.

## Izvori podataka i ograničenja

Podaci o ponovnim prijemima obično se uzimaju iz vlastitog ADT toka bolnice (prijem, otpust, premještaj) za ponovne prijeme u istu ustanovu, no pacijent ponovno primljen u drugu bolnicu uopće se neće pojaviti u tom toku, pa praćenje ponovnih prijema u jednoj bolnici sustavno podcjenjuje stvarne stope ponovnih prijema osim ako se ne dopuni podacima regionalne razmjene zdravstvenih informacija, podacima o potraživanjima platitelja ili državnim bazama podataka svih platitelja. Pripisivanje digitalnom programu zahtijeva oprez: pacijenti koji se odluče za dobrovoljni program praćenja na daljinu rijetko su nasumičan uzorak otpuštene populacije, pa će naivna usporedba stopa ponovnih prijema upisanih i neupisanih obično biti zbunjena upravo učincima selekcije zbog kojih su neki pacijenti uopće bili skloniji upisu.

## Zamke

- **Usporedba neobrađenih stopa bez prilagodbe za rizik među populacijama**: program koji opslužuje bolesniju populaciju pokazat će višu neobrađenu stopu ponovnih prijema od onoga koji opslužuje zdraviju populaciju, čak i ako je sam program učinkovitiji; uvijek prilagodite za rizik prije usporedbe.
- **Podcjenjivanje ponovnih prijema u druge ustanove**: oslanjanje samo na vlastite ADT podatke jedne bolnice propustit će ponovne prijeme drugdje i podcijeniti stvarnu stopu, osobito u područjima s više konkurentskih bolničkih sustava.
- **Pristranost selekcije pri dobrovoljnom upisu u program**: pacijenti koji se odluče upisati u digitalni program praćenja često se sustavno razlikuju (po zdravstvenoj pismenosti, društvenoj podršci ili motivaciji) od onih koji to ne učine, što zbunjuje svaku naivnu usporedbu prije/poslije ili upisani/neupisani.
- **Brojanje svakog povratka u istu ustanovu kao ponovnog prijema**: zakazani, planirani ponovni prijem (na primjer planirani drugi stadij zahvata) nije signal neuspjelog otpusta i treba ga isključiti iz brojnika, a ne miješati sa stvarno neplaniranim povratcima.

## Izvori

- Centers for Medicare & Medicaid Services (CMS), specifikacije mjera Hospital Readmissions Reduction Program i Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), smjernice o smanjenju izbježivih ponovnih prijema
- Recenzirana literatura o digitalnom praćenju na daljinu i intervencijama tranzicijske skrbi za smanjenje ponovnih prijema, na primjer studije objavljene u časopisima JAMA Network Open i npj Digital Medicine

Vidi također: [točnost usmjeravanja trijaže](../točnost-usmjeravanja-trijaže/), jer neprikladno početno usmjeravanje samo može biti nizvodni pokretač izbježivih prijema.
