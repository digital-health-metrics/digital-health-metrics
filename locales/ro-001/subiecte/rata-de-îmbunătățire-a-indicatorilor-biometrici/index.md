# Rata de îmbunătățire a indicatorilor biometrici

Rata de îmbunătățire a indicatorilor biometrici este ponderea pacienților înrolați într-un program de sănătate digitală care obțin o îmbunătățire semnificativă clinic a unui indicator biometric urmărit — cel mai frecvent hemoglobina glicată (HbA1c) în programele de diabet și cardiometabolice sau indicele de masă corporală (IMC) în programele de gestionare a greutății — pe o perioadă definită de înrolare. Este metrica de rezultat care justifică în cele din urmă afirmațiile clinice ale unui produs de sănătate digitală: cifrele de implicare și adoptare descriu cum este folosit un produs, dar îmbunătățirea biometrică este mai aproape de dovada că funcționează.

## De ce contează

Programele de sănătate digitală sunt adesea vândute și comandate pe promisiunea unor rezultate de sănătate îmbunătățite, iar rata de îmbunătățire a indicatorilor biometrici este cea mai directă și cuantificabilă modalitate de a testa această promisiune față de un prag specific, recunoscut clinic, în loc de o afirmație vagă despre „o sănătate mai bună”. Plătitorii, angajatorii și sistemele de sănătate leagă tot mai des rambursarea sau reînnoirea contractului de o schimbare biometrică demonstrată, așa că un program care nu poate raporta credibil această rată se află într-un dezavantaj comercial, nu doar clinic. Metrica este și o verificare de disciplină pentru proiectarea programului: este mult mai ușor să raportezi implicarea (autentificări, mesaje trimise) decât rezultatele, iar o echipă ar trebui să fie suspicioasă față de orice program care îl raportează entuziast pe primul, rămânând vag în privința celorlalte.

## Cum se calculează

```
Rata de îmbunătățire a indicatorilor biometrici = pacienți care obțin o îmbunătățire
                              semnificativă clinic definită / pacienți cu o măsurătoare
                              inițială și una de urmărire valide × 100

Praguri frecvente semnificative clinic:
  HbA1c   — o reducere de ≥ 0,5 puncte procentuale sau atingerea unei
            ținte definite (de exemplu < 7,0%) pornind de la o valoare
            inițială în afara intervalului
  IMC     — o reducere de ≥ 5% din greutatea corporală inițială, menținută
            până la momentul măsurătorii de urmărire

Raportați separat pentru fiecare indicator biometric urmărit; nu combinați
niciodată îmbunătățirea HbA1c și a IMC într-un singur procent combinat de „îmbunătățire”.
```

## Exemplu aplicat

Un program de sănătate digitală cardiometabolică înrolează 800 de pacienți cu HbA1c inițială în afara intervalului. Dintre aceștia, 620 au atât o măsurătoare inițială validă, cât și una de urmărire la 6 luni (180 sunt pierduți din urmărire și excluși de la numitor, nu numărați ca eșecuri). Dintre cei 620 cu măsurători perechi, 340 obțin o reducere de cel puțin 0,5 puncte procentuale. Rata de îmbunătățire a indicatorilor biometrici este 340 / 620 × 100 = 55%. Raportarea acesteia la cei 800 de înrolați (340 / 800 = 42,5%) ar confunda pierderea din urmărire cu eșecul tratamentului, subestimând rata pentru pacienții care au finalizat efectiv măsurătoarea.

## Surse de date și limitări

Valorile biometrice inițiale și de urmărire provin de obicei de la un dispozitiv conectat (un glucometru Bluetooth sau o cântar inteligent), de la un rezultat de laborator importat din dosarul medical electronic sau de la o valoare autoraportată introdusă de pacient — iar aceste trei surse au fiabilitate foarte diferită, astfel că sursa ar trebui raportată alături de rată. Pierderea din urmărire rareori este aleatorie: pacienții care se dezangajează de program sunt adesea și cei mai puțin probabil să se fi îmbunătățit, așa că o rată ridicată de îmbunătățire calculată doar pe pacienții care au finalizat urmărirea poate supraestima efectul real al programului la nivel de populație. Efectele sezoniere și regresia către medie sunt reale atât pentru HbA1c, cât și pentru greutate, așa că un program ar trebui să compare cu un grup de control concomitent sau istoric, acolo unde este posibil, în loc să trateze orice îmbunătățire ca dovadă a efectului programului.

## Capcane

- **Excluderea, în loc de raportarea, pierderii din urmărire**: eliminarea discretă de la numitor a pacienților fără măsurătoare de urmărire poate umfla substanțial rata aparentă de îmbunătățire; raportați întotdeauna rata de finalizare a măsurătorii de urmărire alături de rata de îmbunătățire propriu-zisă.
- **Amestecarea măsurătorilor autoraportate cu cele provenite de la dispozitive, fără etichetare**: o greutate autoraportată este sistematic mai puțin fiabilă decât o citire a unui cântar inteligent conectat, iar amestecarea celor două surse ascunde cât din îmbunătățirea aparentă este zgomot de măsurare.
- **Lipsa unui control sau a unui contrafactual**: multe măsuri biometrice cronice fluctuează sau regresează spre medie de la sine; o rată de îmbunătățire dintr-un singur braț, fără niciun grup de comparație, este o dovadă sugestivă, nu concludentă, a efectului programului.
- **Tratarea unei deplasări medii modeste ca dovadă a unei îmbunătățiri generale**: o mică îmbunătățire medie la nivel de populație poate fi determinată de câțiva respondenți puternici, în timp ce majoritatea pacienților nu văd nicio schimbare; raportați distribuția (de exemplu ponderea celor care depășesc pragul semnificativ clinic), nu doar deplasarea medie.

## Surse

- American Diabetes Association (ADA), Standards of Care in Diabetes, ghiduri privind ținta HbA1c și schimbarea semnificativă clinic
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, ghiduri de evaluare a programelor
- Literatura evaluată de specialiști privind rezultatele programelor digitale pentru diabet și gestionarea greutății, de exemplu studii publicate în npj Digital Medicine și Diabetes Care

Vezi și: [rata de aderență la tratament](../rata-de-aderență-la-tratament/), un factor frecvent din amonte al îmbunătățirii indicatorilor biometrici în programele pentru afecțiuni cronice.
