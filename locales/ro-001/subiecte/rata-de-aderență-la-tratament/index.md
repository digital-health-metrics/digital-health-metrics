# Rata de aderență la tratament

Rata de aderență la tratament măsoară măsura în care un pacient ia un medicament prescris conform indicațiilor, cel mai frecvent exprimată ca proporția zilelor dintr-o perioadă definită în care pacientul a avut acces la medicație conform prescripției. Este una dintre cele mai importante metrici de sănătate digitală, deoarece neaderența este frecventă, în mare măsură prevenibilă cu sprijinul potrivit și direct legată de rezultate clinice mai slabe și costuri ulterioare mai mari — exact lacuna pe care aplicațiile de memento pentru medicație, flacoanele inteligente de pastile și impulsurile de reînnoire a rețetelor de la farmacie sunt construite să o închidă.

## De ce contează

Neaderența la medicația pentru boli cronice este estimată de organismele de sănătate publică ca putând ajunge la 50% pentru unele afecțiuni și este o cauză principală prevenibilă de spitalizări evitabile, progresie a bolii și eșec terapeutic care este atribuit eronat medicamentului însuși, nu utilizării inconsecvente. Instrumentele digitale de aderență există tocmai pentru a închide această lacună, așa că, pentru orice program care include o componentă medicamentoasă, rata de aderență este de obicei singura metrică cea mai relevantă pentru decizii: se află cauzal în amonte de îmbunătățirea indicatorilor biometrici, de reinternare și de majoritatea celorlalte metrici de rezultat clinic pe care un program le-ar putea raporta. Un program care îmbunătățește implicarea sau satisfacția fără a mișca aderența probabil nu a demonstrat încă un mecanism plauzibil de beneficiu clinic.

## Cum se calculează

```
Proporția zilelor acoperite (PDC) = zile din perioadă cu medicație disponibilă
                                    (pe baza aprovizionării în zile din
                                    eliberări) / zile din perioada de
                                    măsurare × 100

Raportul de posesie a medicației (MPR) = total zile de aprovizionare obținute
                                    în perioadă / zile din perioadă × 100
                                    (poate depăși 100% în cazul reînnoirilor
                                    anticipate; din acest motiv, PDC este în
                                    general preferat)

Un pacient este de obicei clasificat „aderent” la un prag PDC de ≥ 80%,
conform convenției larg utilizate în măsurile de calitate.
```

## Exemplu aplicat

Unui pacient i se prescrie un medicament cronic zilnic pe o perioadă de măsurare de 90 de zile. Înregistrările de eliberare de la farmacie arată că pacientul a obținut suficientă medicație pentru a acoperi 76 din cele 90 de zile, cu două lacune: o lacună de 9 zile după epuizarea medicației înainte de o reînnoire și o lacună de 5 zile în jurul unei internări. PDC este 76 / 90 × 100 = 84%, ceea ce depășește pragul convențional de aderență de 80%. Dacă aceleași lacune ar fi măsurate folosind MPR pe baza zilelor de aprovizionare eliberate, nu a zilelor efectiv acoperite, o reînnoire anticipată în altă parte a perioadei ar putea împinge raportul peste 100%, ilustrând de ce PDC este măsura mai conservatoare și în general preferată.

## Surse de date și limitări

Datele de decontare sau de eliberare de la farmacie (fie de la un manager de beneficii farmaceutice, fie dintr-un sistem de farmacie conectat) sunt sursa standard, deoarece reflectă ce a obținut efectiv pacientul, nu ce i s-a prescris; datele de prescripție singure supraestimează aderența deoarece nu confirmă că pacientul a ridicat vreodată medicamentul. Instrumentele digitale de aderență — flacoane inteligente de pastile, senzori ingerabili, inhalatoare inteligente conectate care înregistrează fiecare acționare pentru afecțiuni respiratorii precum astmul și BPOC, precum și verificările bazate pe aplicații — oferă date cu rezoluție mai mare despre dacă o doză a fost efectiv luată, nu doar obținută, dar sunt folosite de o minoritate mică, potențial nereprezentativă, de pacienți, așa că amestecarea aderenței confirmate prin dispozitiv cu PDC bazat pe decontări la nivelul unei populații necesită prudență în interpretare. Aderența ar trebui măsurată pe o perioadă suficient de lungă pentru a netezi dozele ratate izolate, dar suficient de scurtă pentru a detecta o scădere semnificativă înainte să provoace un prejudiciu clinic — ferestrele glisante de 90 de zile sunt frecvente pentru medicamentele cronice.

## Capcane

- **Folosirea MPR fără a dezvălui că poate depăși 100%**: rapoartele neexplicate peste 100% din reînnoiri anticipate sau stocare fac comparația între pacienți și perioade nefiabilă, dacă nu se folosește PDC sau raportul nu este plafonat explicit.
- **Tratarea datelor de prescripție sau de comandă ca dovadă a aderenței**: o prescripție scrisă sau trimisă la farmacie nu spune nimic despre dacă pacientul a ridicat sau a luat medicamentul; doar datele de eliberare sau de la dispozitive închid această lacună.
- **Aplicarea nediscriminatorie a unui singur prag de aderență tuturor afecțiunilor**: consecința clinică a ratării a 20% dintre doze variază enorm în funcție de clasa de medicamente (de exemplu anticoagulante față de statine), astfel că un singur prag de 80% folosit universal poate subestima sau supraestima riscul clinic pentru unele medicamente.
- **Ignorarea schimbărilor și a întreruperilor de medicație**: un pacient trecut în mod clinic adecvat la un alt medicament poate apărea ca o scădere mare a aderenței la medicamentul inițial dacă schimbarea nu este luată în calcul.

## Surse

- Pharmacy Quality Alliance (PQA), specificațiile măsurii Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), măsurile de aderență la medicație din Star Ratings
- Literatura evaluată de specialiști privind măsurarea aderenței la medicație și intervențiile digitale de aderență, de exemplu studii publicate în Journal of Managed Care & Specialty Pharmacy

Vezi și: [rata de îmbunătățire a indicatorilor biometrici](../rata-de-îmbunătățire-a-indicatorilor-biometrici/), a cărei principală cauză este aderența la medicația pentru boli cronice.
