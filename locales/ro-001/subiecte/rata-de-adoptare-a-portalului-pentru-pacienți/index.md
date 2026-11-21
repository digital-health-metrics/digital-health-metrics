# Rata de adoptare a portalului pentru pacienți

Rata de adoptare a portalului pentru pacienți măsoară ponderea pacienților eligibili care s-au înregistrat într-un portal online pentru pacienți și îl utilizează activ (de exemplu NHS App, Patient Access sau un portal asociat unui dosar medical electronic, precum MyChart) pentru a-și vedea dosarul, a face programări sau a trimite mesaje echipei de îngrijire. Este indicatorul de nivel de intrare al implicării digitale: un pacient care nu și-a activat niciodată contul nu poate beneficia de niciun serviciu digital ulterior construit pe portal.

## De ce contează

Un portal creează valoare abia atunci când pacientul îl folosește, așa că organizațiile ar trebui să urmărească adoptarea ca pe o pâlnie, nu ca pe o singură cifră: înregistrarea, activarea (prima acțiune semnificativă) și utilizarea activă (utilizare într-o fereastră recentă) sunt trei rate diferite, confundate mult prea des. Echipele de servicii digitale sunt frecvent presate să raporteze o singură cifră de titlu, favorabilă, și este nevoie de disciplină pentru a insista asupra unei defalcări mai dificile, dar mai oneste. Adoptarea scăzută sau distribuită inegal este, de asemenea, un semnal de echitate: pacienții vârstnici, cu alfabetizare digitală mai scăzută, care nu vorbesc limba majoritară sau nu au bandă largă fiabilă ori smartphone au sistematic mai puține șanse să fie numărați la numărător, astfel că o rată medie de adoptare în creștere poate masca un decalaj în creștere pentru pacienții care au adesea cea mai mare nevoie de contactul cu serviciile.

## Cum se calculează

Raportați toate cele trei etape, nu doar înregistrarea, și indicați întotdeauna explicit numitorul:

```
Rata de înregistrare = pacienți cu cont de portal creat / populația eligibilă de pacienți × 100
Rata de activare     = pacienți care au finalizat o primă acțiune semnificativă (au vizualizat un
                       rezultat, au rezervat un interval, au trimis un mesaj) / pacienți cu cont × 100
Rata de utilizare activă = pacienți care s-au autentificat cel puțin o dată în ultimele 12 luni /
                       populația eligibilă de pacienți × 100
```

Populația eligibilă de pacienți este de obicei definită ca pacienții cu cel puțin o întâlnire cu organizația într-o perioadă de referință definită (de regulă 24 de luni), care au o vârstă și un statut de consimțământ ce le permit să dețină propriul cont.

## Exemplu aplicat

O rețea de asistență medicală primară deservește 50.000 de pacienți care îndeplinesc definiția eligibilității. Dintre aceștia, 32.000 s-au înregistrat în portal (rata de înregistrare 64%). Dintre cele 32.000 de înregistrări, 27.000 au finalizat cel puțin o acțiune semnificativă, precum vizualizarea unui rezultat de analize (rata de activare 84% dintre cei înregistrați). În ultimele 12 luni, 21.000 dintre cei 50.000 de pacienți eligibili inițiali s-au autentificat cel puțin o dată (rata de utilizare activă 42%). Raportarea doar a cifrei de înregistrare de 64% ar supraestima considerabil implicarea reală; cifra de utilizare activă de 42% este cea care ar trebui să orienteze deciziile de resurse pentru programul portalului.

## Surse de date și limitări

Analitica portalului provine de obicei din platforma furnizorului (evenimente de autentificare, utilizarea funcțiilor) sau din jurnalul de audit al dosarului medical electronic subiacent, iar organizațiile ar trebui să fie sceptice față de panourile de bord ale furnizorilor care afișează doar numărul de înregistrări. Accesul prin procură (un părinte sau un însoțitor care gestionează un cont în numele pacientului) ar trebui etichetat și raportat separat, deoarece schimbă cine este de fapt „utilizatorul”. Alegerea numitorului contează enorm: raportarea la lista totală de pacienți înregistrați, în loc de o populație cu adevărat eligibilă și contactabilă, va subestima întotdeauna adoptarea, în timp ce raportarea doar la pacienții invitați activ o va supraestima întotdeauna, astfel că definiția eligibilității ar trebui fixată și publicată alături de fiecare rată raportată.

## Capcane

- **Înregistrarea numărată drept adoptare**: un cont creat, dar niciodată folosit, are o valoare apropiată de zero; raportați activarea și utilizarea activă alături de înregistrare, nu în locul ei.
- **Ignorarea excluziunii digitale**: cifrele agregate de adoptare pot crește în timp ce decalajul dintre grupurile cel mai puțin și cel mai mult incluse digital se mărește; segmentați întotdeauna după vârstă, privare socio-economică, limbă și dizabilitate, acolo unde guvernanța datelor o permite.
- **Compararea organizațiilor cu definiții diferite ale eligibilității**: un program de portal care invită doar pacienții cu o adresă de e-mail înregistrată va raporta o rată mai mare decât unul care măsoară față de întreaga listă înregistrată, fără nicio diferență reală de performanță.
- **Tratarea unei autentificări izolate ca implicare continuă**: o perioadă de referință de 12 luni este frecventă, dar o fereastră mai scurtă (de exemplu 90 de zile) oferă un avertisment mai timpuriu despre declinul utilizării.

## Surse

- NHS England, statistici privind utilizarea și înregistrarea în NHS App (publicații nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, măsurile Programului Promoting Interoperability, inclusiv măsurile de acces al pacientului View, Download, Transmit (VDT)
- Literatura evaluată de specialiști privind adoptarea portalurilor pentru pacienți și disparitățile în sănătatea digitală, de exemplu studii publicate în Journal of the American Medical Informatics Association (JAMIA)

Vezi și: [rata de neprezentare la programări](../rata-de-neprezentare-la-programări/), asupra căreia programarea în regim de autoservire și mementourile prin portal influențează direct.
