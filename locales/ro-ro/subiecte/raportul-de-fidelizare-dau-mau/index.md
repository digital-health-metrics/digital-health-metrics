# Raportul de fidelizare DAU/MAU

Raportul de fidelizare DAU/MAU compară utilizatorii activi zilnic (DAU) cu utilizatorii activi lunar (MAU) — aceeași măsură de bază fiind folosită și pentru utilizatorii activi săptămânal (WAU) raportați la MAU — pentru a exprima ce pondere din baza mai largă de utilizatori a unui produs interacționează cu el într-o zi oarecare. Este măsura standard din analitica de produs pentru intensitatea implicării, distinctă de faptul dacă un utilizator este reținut deloc (vezi rata de retenție a utilizatorilor) sau de cât de constant se implică în timp un anumit pacient înrolat (vezi rata de constanță a implicării pacienților): fidelizarea descrie ritmul de utilizare la nivel de populație, nu tiparul unui individ.

## De ce contează

Două produse de sănătate digitală pot raporta același număr de utilizatori activi lunar, având totuși o intensitate de implicare foarte diferită: unul în care majoritatea utilizatorilor deschid aplicația aproape zilnic și altul în care majoritatea o deschid o dată pe lună, chiar înainte de a fi considerați inactivi. Raportul de fidelizare DAU/MAU diferențiază aceste două situații foarte diferite printr-o singură cifră de referință simplă și bine înțeleasă, pe care echipele de produs și cele clinice o pot urmări în timp și o pot compara cu intervale cunoscute din industrie — un raport în jur de 20% este un reper rezonabil, frecvent citat, pentru multe aplicații de consum, în timp ce produsele bazate pe obiceiul zilnic (un jurnal alimentar sau de simptome pe care pacientul trebuie să-l folosească în fiecare zi) ar trebui judecate după un prag semnificativ mai ridicat. Deoarece fidelizarea este sensibilă la modul în care este definit „activul”, este cel mai utilă ca tendință pentru un singur produs în timp și ca punct de comparație cu produse construite pentru un tipar de utilizare similar, nu ca reper absolut între industrii.

## Cum se calculează

```
Raportul de fidelizare DAU/MAU = media utilizatorilor activi zilnic în perioadă /
                                  utilizatori activi lunar în aceeași perioadă × 100

Raportul WAU/MAU (săptămânal, același principiu) este o variantă mai
permisivă, mai potrivită pentru produsele la care se așteaptă o utilizare
de câteva ori pe săptămână, nu zilnică.

„Activ” trebuie definit precis și consecvent (de exemplu o acțiune
calificantă finalizată, nu o deschidere pasivă a aplicației) atât la numărător,
cât și la numitor.
```

## Exemplu aplicat

O aplicație digitală de gestionare a diabetului are 10.000 de utilizatori activi lunar într-o anumită lună, definiți ca orice utilizator care finalizează cel puțin o acțiune calificantă (o înregistrare a glicemiei, o înregistrare a unei mese sau bifarea unui medicament) în acea lună. Media numărului de utilizatori activi zilnic pe cele 30 de zile ale lunii dă un DAU mediu de 2.200. Raportul de fidelizare DAU/MAU este 2.200 / 10.000 × 100 = 22%, ceea ce indică faptul că, într-o zi obișnuită, aproximativ 22% din baza lunară de utilizatori a aplicației interacționează cu ea — o cifră rezonabilă pentru un instrument de afecțiune cronică bazat pe obicei zilnic, deși una pe care echipa de produs ar dori să o vadă crescând în timp, pe măsură ce comportamentul ideal (înregistrarea zilnică) devine mai obișnuit pentru pacienții înrolați.

## Surse de date și limitări

DAU, WAU și MAU se calculează toate din aceleași jurnale de evenimente, folosind o singură definiție consecventă a unui eveniment „activ calificant” pentru fiecare fereastră; schimbarea acestei definiții între calculul numărătorului și cel al numitorului (de exemplu numărarea oricărei deschideri a aplicației pentru DAU, dar doar a unei acțiuni finalizate pentru MAU) va produce un raport distorsionat, care nu reflectă intensitatea reală a implicării. Reperul potrivit pentru fidelizare depinde în mare măsură de tiparul de utilizare dorit al produsului: un instrument menit să fie folosit o dată pe săptămână (o verificare săptămânală a simptomelor) va avea și ar trebui să aibă un raport DAU/MAU mai scăzut decât un instrument menit să fie folosit zilnic (o aplicație însoțitoare a unui monitor continuu al glicemiei), astfel că fidelizarea trebuie interpretată întotdeauna față de cadența de utilizare prevăzută a produsului, nu față de o țintă universală unică.

## Capcane

- **Compararea raporturilor de fidelizare între produse cu frecvențe de utilizare prevăzute diferite**: un instrument de utilizare săptămânală va afișa structural un raport DAU/MAU mai scăzut decât unul de utilizare zilnică, chiar dacă ambele funcționează exact conform scopului lor; comparați cu cadența prevăzută a produsului, nu cu o țintă universală unică.
- **Folosirea unor definiții inconsecvente ale activității la numărător și la numitor**: poate produce un raport de fidelizare care nu reflectă implicarea reală și nu poate fi comparat în mod semnificativ în timp sau cu alte produse.
- **Tratarea unui raport de fidelizare în creștere ca fiind lipsit de ambiguitate pozitiv fără a verifica tendința generală a MAU**: un raport în creștere determinat de o bază de utilizatori tot mai mică și mai obișnuită, în timp ce MAU total scade, este o situație foarte diferită — și mai îngrijorătoare — decât una determinată de o implicare zilnică cu adevărat crescută într-o bază de utilizatori stabilă sau în creștere.
- **Ignorarea efectelor zilei din săptămână și ale sezonului asupra DAU**: DAU poate varia substanțial în funcție de ziua săptămânii (zi lucrătoare față de weekend) sau de sezon pentru multe produse de sănătate; folosiți un DAU mediu pe o perioadă care cuprinde un ciclu natural complet, nu o fereastră scurtă care ar putea fi distorsionată.

## Surse

- Literatură academică și din industrie privind metricile de implicare în produsele mobile și digitale, cadre de benchmarking utilizate pe scară largă de platformele de analitică mobilă
- Digital Therapeutics Alliance, ghiduri de bune practici privind măsurarea implicării pentru terapiile digitale
- Literatura evaluată de specialiști privind măsurarea implicării în sănătatea digitală, de exemplu studii publicate în Journal of Medical Internet Research (JMIR mHealth and uHealth)

Vezi și: [rata de retenție a utilizatorilor](../rata-de-retenție-a-utilizatorilor/) și [rata de constanță a implicării pacienților](../rata-de-constanță-a-implicării-pacienților/), cele două metrici conexe de implicare cu care acest raport este cel mai des confundat.
