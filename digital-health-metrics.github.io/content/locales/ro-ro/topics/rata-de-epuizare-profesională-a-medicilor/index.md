# Rata de epuizare profesională a medicilor

Rata de epuizare profesională (burnout) a medicilor măsoară ponderea clinicienilor care raportează simptome semnificative de epuizare — evaluate de obicei ca epuizare emoțională, depersonalizare sau un sentiment scăzut al realizării personale, printr-un instrument de sondaj validat — și, pentru sănătatea digitală în mod specific, este urmărită alături de măsuri ale poverii instrumentelor digitale destinate clinicienilor, precum timpul petrecut cu hârtiile sau cu documentarea în dosarul medical electronic (DME). Există într-un cadru de metrici de sănătate digitală deoarece software-ul clinic prost conceput este un factor contributiv bine documentat și măsurabil al epuizării profesionale, iar succesul unui instrument de sănătate digitală nu ar trebui evaluat niciodată exclusiv prin metrici orientate către pacient, ignorând efectul său asupra clinicienilor care trebuie să îl opereze.

## De ce contează

Instrumentele de sănătate digitală sunt frecvent introduse cu scopul explicit de a reduce povara administrativă a clinicienilor, dar un flux de lucru prost proiectat al dosarului medical electronic, un volum excesiv de alerte clinice de valoare redusă (vezi rata de ignorare a alertelor clinice) sau o interfață greoaie de telemedicină pot la fel de ușor să crească epuizarea ca să o reducă — iar un instrument care îmbunătățește o metrică de implicare orientată către pacient, crescând discret povara documentării pentru clinicieni, nu a oferit un rezultat net pozitiv pentru sistemul de îngrijire în ansamblu. Epuizarea profesională este puternic legată în literatura clinică de erori medicale, fluctuația clinicienilor și calitate redusă a îngrijirii, astfel că funcționează ca indicator anticipativ al problemelor ulterioare de siguranță și de sustenabilitate a forței de muncă, nu doar ca o finețe de satisfacție la locul de muncă. Orice program de sănătate digitală care pretinde că reduce povara clinică ar trebui să poată demonstra această pretenție față de o linie de bază măsurată, nu să o afirme ca intenție de design.

## Cum se calculează

```
Rata de epuizare profesională a medicilor = clinicieni cu scor peste pragul de
                          epuizare al instrumentului validat / total clinicieni
                          chestionați × 100

Instrumente validate frecvente: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index sau o întrebare unică de screening a
epuizării, validată față de un instrument mai complet.

Raportați alături de un indicator indirect al poverii digitale, acolo unde
este disponibil:
  Timpul petrecut în DME per întâlnire cu pacientul
  Timpul de documentare petrecut în afara orelor clinice programate
  („pajama time”)
```

## Exemplu aplicat

Un sistem spitalicesc chestionează 300 de medici folosind Maslach Burnout Inventory înainte de introducerea unui instrument ambiental de documentare clinică menit să reducă timpul de redactare a notelor. La momentul de bază, 135 de medici (45%) au un scor peste pragul de epuizare, iar datele din jurnalul de audit al DME arată o medie de 58 de minute de documentare pe medic, în afara orelor clinice programate, pe zi. La șase luni după lansarea instrumentului, un sondaj repetat al aceluiași grup de medici constată 108 (36%) peste pragul de epuizare, odată cu o scădere a timpului de documentare după program la 34 de minute pe zi. Mișcarea corelată atât a ratei de epuizare, cât și a indicatorului indirect obiectiv derivat din DME întărește argumentul că instrumentul contribuie la îmbunătățire, deși o comparație formală înainte/după ar trebui totuși să țină cont de alte schimbări concomitente ale volumului de muncă din aceeași perioadă.

## Surse de date și limitări

Datele de sondaj privind epuizarea provin dintr-un instrument validat, administrat periodic (anual sau mai frecvent), iar rata de răspuns contează: o rată scăzută de răspuns riscă o părtinire de non-răspuns, în care clinicienii cei mai epuizați (cu cea mai mică capacitate de a completa un sondaj suplimentar) sunt sistematic subreprezentați, subestimând rata reală. Indicatorii indirecți ai poverii digitale derivați din DME — timpul în sistem, timpul de documentare după program, numărul de clicuri per întâlnire — sunt utili ca complemente obiective, disponibile continuu, ale datelor periodice din sondaje, dar ar trebui validați față de epuizarea raportată în sondaj pentru o anumită organizație înainte de a fi tratați ca indicator autonom fiabil al epuizării, deoarece relația dintre timpul în sistem și epuizarea reală poate varia în funcție de specialitate și de stilul individual de lucru.

## Capcane

- **Bazarea exclusivă pe indicatori indirecți derivați din DME**: timpul în sistem și numărul de clicuri se corelează cu epuizarea la nivel agregat, dar nu sunt același lucru cu epuizarea în sine și pot induce în eroare pentru clinicieni individuali sau specialități cu nevoi de documentare cu adevărat diferite.
- **O rată scăzută de răspuns la sondaj care maschează rata reală**: clinicienii cei mai afectați de epuizare sunt adesea cei mai puțin probabil să aibă capacitatea de a răspunde la un sondaj voluntar, părtinind un rezultat cu rată scăzută de răspuns spre o cifră artificial mai sănătoasă.
- **Atribuirea unei schimbări a epuizării unui singur instrument fără a ține cont de factorii de confuzie**: epuizarea este afectată de mulți factori concomitenți (niveluri de personal, volumul de pacienți, schimbări organizaționale); o comparație înainte/după în jurul lansării unui singur instrument ar trebui să-i controleze pe aceștia acolo unde este posibil, în loc să presupună o singură cauză.
- **Tratarea epuizării exclusiv ca o problemă de reziliență individuală**: cercetările asupra epuizării constată constant că volumul de muncă, designul sistemului și factorii organizaționali sunt principalii factori determinanți; încadrarea ei exclusiv ca problemă individuală a clinicianului deviază intervenția de la instrumentele și fluxurile de lucru digitale care sunt adesea adevărata cauză rădăcină.

## Surse

- Maslach Burnout Inventory (MBI), instrument de sondaj validat și ghiduri de scorare
- American Medical Association (AMA), cercetări privind epuizarea profesională a medicilor și programul de îmbunătățire a practicii STEPS Forward
- Literatura evaluată de specialiști privind uzabilitatea DME, povara documentării și epuizarea clinicienilor, de exemplu studii publicate în JAMIA și Annals of Internal Medicine

Vezi și: [rata de ignorare a alertelor clinice](../rata-de-ignorare-a-alertelor-clinice/), oboseala față de alerte fiind unul dintre factorii contributivi mai specifici și măsurabili ai epuizării clinicienilor pe care instrumentele digitale îi pot aborda direct.
