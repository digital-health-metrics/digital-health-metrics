# Vrijeme obrade digitalne uputnice

Vrijeme obrade digitalne uputnice proteklo je vrijeme od trenutka kada uputni kliničar podnese elektroničku uputnicu do trenutka kada je služba koja je prima trijažira i prihvati, odbije ili za nju zakaže termin. To je procesna metrika (protoka), različita od ukupnog vremena čekanja pacijenta, i jedno je od najjasnijih mjesta gdje se može pokazati da promjena digitalnog sustava (strukturirana e-uputnica, trijaža na temelju slika, standardizirani obrasci uputnica) pomiče operativni broj, a ne samo ocjenu zadovoljstva.

## Zašto je važno

Spor ili vrlo promjenjiv korak trijaže dodaje kašnjenje prije nego što se pacijent uopće pridruži kliničkoj listi čekanja, a budući da se to kašnjenje događa prije početka bilo kakve kliničke skrbi, to je čisto procesno rasipanje koje digitalni alati dobro mogu ukloniti. Sustavi uputnica koji prisiljavaju na ciklus „povrat uputitelju” zbog nedostajućih informacija stvaraju petlje ponovnog rada koje je lako previdjeti ako se vrijeme obrade mjeri samo na uputnicama koje prvi put prođu bez prepreka. Gdje je služba uvela strukturirane digitalne obrasce uputnica, obavezna polja ili trijažu na temelju slika (na primjer u teledermatologiji), vrijeme obrade obično je najuvjerljivija pojedinačna metrika za dokazivanje koristi, jer se može izmjeriti prije i poslije promjene istim instrumentarijem.

## Kako se izračunava

```
Vrijeme obrade = vremenska oznaka (odluka o trijaži) − vremenska oznaka
                 (podnošenje uputnice)

Prijavite medijan i visoki percentil (uobičajeno 90.), a ne samo
aritmetičku sredinu, jer je raspodjela jako desno asimetrična zbog
vraćenih ili složenih uputnica.

Razmotrite vremena po podfazama gdje ih sustav bilježi:
  Podnošenje → zaprimljeno u službi
  Zaprimljeno → odluka o trijaži
  Odluka o trijaži → zakazan termin (gdje je relevantno)
```

## Razrađeni primjer

Revizijski trag sustava e-uputnica pokazuje medijan vremena od podnošenja do odluke o trijaži od 1,8 dana za sve specijalnosti, uz vrijeme 90. percentila od 6 dana, uglavnom zbog uputnica vraćenih uputitelju zbog nedostajućih kliničkih informacija. Teledermatološki put koji koristi trijažu na temelju slika na istoj platformi postiže medijan obrade od 4 sata i 90. percentil od 1 dan, jer su fotografija i strukturirana anamneza gotovo uvijek dostatne za odluku o trijaži bez potrebe za daljnjom korespondencijom.

## Izvori podataka i ograničenja

Primarni izvor je vlastiti revizijski trag sustava e-uputnica ili upravljanja uputnicama, uz vremenske oznake podnošenja i odluke; organizacije trebaju potvrditi zaustavlja li se „sat” dok je uputnica vraćena radi dodatnih informacija ili teče neprekidno, jer te dvije definicije daju bitno različite brojke za isti temeljni proces. Vrijeme obrade treba dosljedno prijavljivati u kalendarskom ili radnom vremenu, jer učinci vikenda i praznika inače mogu iskriviti usporedbe među službama s različitim obrascima rada.

## Zamke

- **Mjerenje samo „čistih” uputnica**: isključivanje odbijenih ili vraćenih uputnica iz izračuna skriva teret ponovnog rada koji digitalni alati često upravo trebaju smanjiti.
- **Prijavljivanje aritmetičke sredine umjesto medijana i percentila**: mali broj dugotrajnih, vraćenih uputnica povući će sredinu daleko iznad stvarnog iskustva tipičnog pacijenta.
- **Miješanje vremena obrade s ukupnim vremenom čekanja**: vrijeme obrade obuhvaća samo korak trijaže; ukupno iskustvo pacijenta uključuje i nizvodnu kliničku listu čekanja, koja je zasebna metrika vođena zasebnim ograničenjima kapaciteta.
- **Nerazlikovanje podfaza**: služba koja mjeri samo ukupno vrijeme ne može reći je li spor rezultat uzrokovan time što uputitelji podnose nepotpune informacije, kapacitetom trijaže službe koja prima ili oboje.

## Izvori

- NHS England, statistika i specifikacije usluge e-Referral Service (e-RS)
- Recenzirana literatura o sustavima elektroničkog upravljanja uputnicama i digitalnim putovima trijaže, uključujući teledermatologiju
- ONC / HealthIT.gov, smjernice o interoperabilnosti i koordinaciji uputnica
