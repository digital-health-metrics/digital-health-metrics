# Medicatietrouwpercentage

Het medicatietrouwpercentage meet in welke mate een patiënt een voorgeschreven medicijn volgens voorschrift inneemt, meestal uitgedrukt als het aandeel dagen in een vastgestelde periode waarin een patiënt toegang had tot het medicijn zoals voorgeschreven. Het is een van de meest ingrijpende digitale gezondheidsmaatstaven, omdat therapieontrouw veelvoorkomend is, grotendeels te voorkomen met de juiste ondersteuning, en direct verbonden met slechtere klinische uitkomsten en hogere stroomafwaartse kosten — precies het gat dat medicatieherinneringsapps, slimme pillendozen en apotheekherhaalmeldingen zijn gebouwd om te overbruggen.

## Waarom het belangrijk is

Therapieontrouw bij medicatie voor chronische ziekten wordt door volksgezondheidsinstanties geschat op maar liefst 50% voor sommige aandoeningen, en het is een belangrijke te voorkomen oorzaak van vermijdbare ziekenhuisopnames, ziekteprogressie en behandelfalen dat ten onrechte wordt toegeschreven aan het medicijn zelf in plaats van aan inconsistent gebruik. Digitale trouwinstrumenten bestaan specifiek om dit gat te overbruggen, dus voor elk programma met een medicatiecomponent is het trouwpercentage meestal de enige, meest beslissingsrelevante maatstaf: het ligt causaal stroomopwaarts van biometrische verbetering, heropname en de meeste andere klinische uitkomstmaatstaven die een programma anders zou kunnen rapporteren. Een programma dat betrokkenheid of tevredenheid verbetert zonder de trouw te beïnvloeden, heeft waarschijnlijk nog geen aannemelijk mechanisme voor klinisch voordeel aangetoond.

## Hoe het wordt berekend

```
Proportion of Days Covered (PDC) = dagen in de periode met
                                   medicatie op voorraad (gebaseerd
                                   op dagen voorraad uit afleveringen)
                                   / dagen in de meetperiode × 100

Medication Possession Ratio (MPR) = totaal aantal dagen voorraad
                                   verkregen tijdens de periode /
                                   dagen in de periode × 100 (kan
                                   100% overschrijden bij vroegtijdige
                                   herhaling; PDC heeft om deze
                                   reden over het algemeen de
                                   voorkeur)

Een patiënt wordt doorgaans geclassificeerd als "therapietrouw" bij
een PDC-drempel van ≥ 80%, volgens de algemeen gebruikte conventie
voor kwaliteitsmaatstaven.
```

## Uitgewerkt voorbeeld

Een patiënt krijgt een dagelijks chronisch medicijn voorgeschreven over een meetperiode van 90 dagen. Apotheekafleveringsgegevens tonen aan dat de patiënt voldoende medicatie kreeg om 76 van die 90 dagen te dekken, met twee hiaten: een hiaat van 9 dagen na het opraken voorafgaand aan een herhaling, en een hiaat van 5 dagen rond een ziekenhuisopname. De PDC is 76 / 90 × 100 = 84%, wat de conventionele trouwdrempel van 80% overschrijdt. Als dezelfde hiaten zouden worden gemeten met MPR op basis van afgeleverde dagen voorraad in plaats van daadwerkelijk gedekte dagen, zou een vroegtijdige herhaling elders in de periode de ratio boven de 100% kunnen duwen, wat illustreert waarom PDC de conservatievere en over het algemeen geprefereerde maatstaf is.

## Databronnen en voorbehouden

Apotheekdeclaraties of afleveringsgegevens (ofwel van een apotheekvoordeelbeheerder of een verbonden apotheeksysteem) zijn de standaardbron, omdat ze weerspiegelen wat een patiënt daadwerkelijk heeft verkregen in plaats van wat werd voorgeschreven; receptgegevens alleen overschatten de trouw omdat ze niet bevestigen dat de patiënt het medicijn ooit heeft opgehaald. Digitale trouwinstrumenten — slimme pillendozen, inneembare sensoren, verbonden slimme inhalatoren die elke activering registreren voor luchtwegaandoeningen zoals astma en COPD, en app-gebaseerde check-ins — bieden gegevens met hogere resolutie over of een dosis daadwerkelijk werd ingenomen, niet alleen verkregen, maar worden gebruikt door een kleine, mogelijk niet-representatieve minderheid van patiënten, dus het mengen van apparaatbevestigde trouw met op declaraties gebaseerde PDC over een populatie vereist zorgvuldigheid bij interpretatie. Trouw moet worden gemeten over een periode die lang genoeg is om enkele gemiste doses glad te strijken, maar kort genoeg om een betekenisvolle afname te detecteren voordat het klinische schade veroorzaakt — 90-daagse voortschrijdende vensters zijn gebruikelijk voor chronische medicatie.

## Valkuilen

- **MPR gebruiken zonder te onthullen dat het 100% kan overschrijden**: onverklaarde ratio's boven 100% door vroegtijdige herhalingen of hamsteren maken vergelijking tussen patiënten en perioden onbetrouwbaar, tenzij PDC wordt gebruikt of de ratio expliciet wordt begrensd.
- **Recept- of bestelgegevens behandelen als bewijs van trouw**: een recept dat is geschreven of naar een apotheek is gestuurd, zegt niets over of de patiënt het medicijn heeft opgehaald of ingenomen; alleen afleverings- of apparaatgegevens overbruggen dat gat.
- **Eén trouwdrempel klakkeloos toepassen op alle aandoeningen**: de klinische consequentie van het missen van 20% van de doses varieert enorm per medicijnklasse (bijv. anticoagulantia versus statines), dus een universeel gebruikte drempel van 80% kan het klinisch risico voor sommige medicijnen onder- of overschatten.
- **Medicatiewisselingen en -stopzettingen negeren**: een patiënt die klinisch gezien passend wordt overgezet naar een ander medicijn kan verschijnen als een grote trouwdaling voor het oorspronkelijke medicijn als de wissel niet wordt meegenomen in de berekening.

## Bronnen

- Pharmacy Quality Alliance (PQA), specificaties van de Proportion of Days Covered-maatstaf
- Centers for Medicare & Medicaid Services (CMS), Star Ratings-maatstaven voor medicatietrouw
- Collegiaal getoetste literatuur over het meten van medicatietrouw en digitale trouwinterventies, bijvoorbeeld studies gepubliceerd in het Journal of Managed Care & Specialty Pharmacy

Zie ook: [biometrisch verbeteringspercentage](../biometric-improvement-rate/), waarvoor trouw aan medicatie voor chronische ziekten een belangrijke drijfveer is.
