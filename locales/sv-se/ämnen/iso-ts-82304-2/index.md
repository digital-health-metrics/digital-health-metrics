# ISO/TS 82304-2

ISO/TS 82304-2 är en internationell teknisk specifikation, publicerad under ISO:s tekniska kommitté 215 (Health Informatics), som definierar en strukturerad metod för att bedöma kvaliteten på hälso- och friskvårdsapplikationer – som spänner över användbarhet, teknisk robusthet och tillförlitlighet, interoperabilitet, innehållskvalitet, och datasäkerhet och integritet – för produkter som faller utanför ramen för fullständig medicinteknisk reglering men ändå materiellt påverkar en användares hälsobeslut eller beteende. Den existerar för att fylla ett specifikt gap: den stora majoriteten av konsumentinriktade hälso- och friskvårdsappar (fitnesspårare, symtomdagböcker, friskvårdscoachningsappar) är inte reglerade som medicintekniska produkter, men tidigare fanns inget gemensamt, strukturerat sätt att bedöma eller jämföra deras grundläggande kvalitet och säkerhet.

## Varför det är viktigt

Appbutiker rymmer hundratusentals hälso- och friskvårdsappar med enormt varierande kvalitet, och innan en gemensam teknisk specifikation existerade hade en patient, kliniker, eller ett vårdsystem inget strukturerat, jämförbart sätt att bedöma en apps grundläggande kvalitet och säkerhet mot en annan bortom stjärnbetyg och marknadsföringspåståenden – ett gap som spelar roll eftersom en dåligt designad hälsoapp fortfarande kan orsaka verklig skada (felaktigt innehåll, dålig datasäkerhet, vilseledande påståenden) även utan att nå den regulatoriska tröskeln för en medicinteknisk produkt. ISO/TS 82304-2 är avsiktligt strukturerad kring områden som en icke-specialistgranskare konsekvent kan bedöma, vilket har gjort den till den tekniska grunden för flera nationella och kommersiella kvalitetsmärknings- och kurateringstjänster för hälsoappar, vilket ger vårdsystem och appbibliotek ett försvarbart, standardiserat sätt att inkludera eller exkludera appar från en rekommenderad lista snarare än att förlita sig på ad hoc-bedömning.

## Hur den tillämpas

```
Bedömningen är organiserad kring definierade kvalitetsområden,
utvärderade genom strukturerad granskning snarare än en enda
numerisk formel:

Användbarhet                      — tydlighet, tillgänglighet,
                                    och lätthet att använda för
                                    den avsedda användargruppen
Teknisk robusthet/tillförlitlighet — stabilitet, prestanda, och
                                    frånvaro av tekniska defekter
Interoperabilitet                  — förmåga att utbyta data med
                                    andra system där relevant för
                                    appens funktion
Innehållskvalitet och -säkerhet    — noggrannhet, aktualitet, och
                                    frånvaro av skadliga eller
                                    vilseledande hälsopåståenden
Säkerhet och integritet            — datasäkerhetspraxis och
                                    transparens om dataanvändning

Varje område poängsätts via strukturerade granskningskriterier och
kombineras till en övergripande kvalitetsbedömning, som flera
kvalitetsmärkningssystem för hälsoappar använder som den tekniska
grunden för ett offentligt kvalitetsmärke eller beslut om inkludering
i ett kurerat bibliotek.
```

## Genomräknat exempel

Ett vårdsystems digitala appbiblioteksprogram vill kuratera en rekommenderad lista av friskvårdsappar för patienter snarare än att helt lämna appval till appbutikssökning. Varje kandidatapp bedöms mot ISO/TS 82304-2-områdena: en sömnspårningsapp poängsätter bra på användbarhet och teknisk robusthet, adekvat på innehållskvalitet, men flaggas under säkerhets- och integritetsgranskningen för att dela användardata med tredjepartsannonsörer utan tydlig information – ett fynd betydelsefullt nog att exkludera appen från den rekommenderade listan trots dess annars starka användbarhetspoäng. Detta områdesvisa resultat är mer handlingsbart för både kurateringsteamet och, om delat, appens egen utvecklare än en enda sammanslagen kvalitetspoäng skulle vara, eftersom det identifierar exakt vilken aspekt som behöver åtgärdas innan appen kan omprövas.

## Datakällor och förbehåll

Bedömning mot ISO/TS 82304-2 genomförs vanligtvis av en utbildad granskare eller en ackrediterad bedömningstjänst, enligt specifikationens strukturerade granskningskriterier för varje område, och flera nationella och kommersiella initiativ (organisationer för kvalitetsmärkning och kuratering av hälsoappar, vissa verksamma under formellt nationellt vårdsystemgodkännande) använder standarden som den tekniska grunden för sina egna offentliga appkvalitetsmärken – vilket innebär att en apps "certifierade" eller "märkta" status i praktiken ofta återspeglar ett specifikt märkningssystems implementering av standarden, inte nödvändigtvis en identisk process över alla system, så den specifika bedömande organisationen och dess metodik bör kontrolleras och offentliggöras tillsammans med alla citerade kvalitetsmärken. Specifikationen bedömer kvalitets- och grundläggande säkerhetsegenskaper hos en app som mjukvara; den är inte en ersättning för medicinteknisk regulatorisk godkännande där en apps påståenden eller funktioner faktiskt når tröskeln för en medicinteknisk produkt, och att använda den som sådan vore ett kategorimisstag.

## Fallgropar

- **Att behandla ett kvalitetsmärke som regulatoriskt godkännande**: en app bedömd och märkt enligt ISO/TS 82304-2 har därigenom inte fått regulatoriskt medicintekniskt godkännande; de två tjänar olika syften och bör aldrig sammanblandas i hur en app beskrivs eller marknadsförs.
- **Att anta att alla märkningssystem baserade på standarden är likvärdiga**: olika organisationer implementerar ISO/TS 82304-2-baserad bedömning med sina egna specifika granskningsprocesser och rigör; kontrollera vilken organisation som utförde en bedömning och hur, snarare än att behandla ett "ISO/TS 82304-2-baserat" märke som utbytbart med ett annat.
- **Att endast bedöma användbarhet samtidigt som säkerhet och integritet försummas**: användbarhetsproblem är mest synliga för en slutanvändare och lättast att bedöma informellt, vilket kan leda till att granskare underviktar det mindre synliga men potentiellt mer konsekvensrika området säkerhet och integritet.
- **Att behandla bedömningen som en engångs-, permanent certifiering**: en apps innehåll, säkerhetspraxis, och arrangemang för tredjepartsdatadelning kan alla förändras efter en initial bedömning; ett trovärdigt kvalitetsmärkningsprogram bedömer om periodiskt snarare än att behandla ett initialt godkännande som permanent.

## Källor

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO:s tekniska kommitté 215 (Health Informatics), publiceringsinformation och information om arbetsgrupper
- Nationella och kommersiella organisationer för kvalitetsmärkning och kuratering av hälsoappar som publicerar sin bedömningsmetodik baserad på denna standard

Se även: [System Usability Scale-poäng](../system-usability-scale-poäng/), ett kompletterande, snävare instrument specifikt för användbarhet som ofta används tillsammans med en bredare ISO/TS 82304-2-kvalitetsbedömning.
