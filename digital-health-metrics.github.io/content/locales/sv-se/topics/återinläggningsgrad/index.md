# Återinläggningsgrad

Återinläggningsgrad är andelen utskrivna patienter som återinläggs på sjukhus, oplanerat, inom ett definierat fönster efter utskrivning – vanligast 30 dagar. För digital hälsa är det måttet mest direkt kopplat till betalarekonomi och värdebaserade vårdkontrakt: ett program för fjärrövervakning, uppföljning efter utskrivning eller digital vårdövergång som inte kan visa en trovärdig effekt på återinläggningar kommer sannolikt inte att få fortsatt ersättningsstöd, oavsett hur bra dess engagemangssiffror ser ut.

## Varför det är viktigt

En oplanerad återinläggning är kostsam, störande för patienten, och i många vårdsystem numera direkt bestraffad: system som USA:s Hospital Readmissions Reduction Program minskar betalningen till sjukhus med högre återinläggningsgrad än förväntat för specifika tillstånd, vilket är varför sjukhus aktivt upphandlar digitala program för uppföljning efter utskrivning och fjärrövervakning som syftar till att minska dem. En betydande andel av återinläggningarna anses potentiellt förebyggbara – drivna av otillräckliga utskrivningsinstruktioner, missade uppföljningstider, läkemedelsmissförstånd eller obehandlad symtomförsämring som en väldesignad digital kontaktpunkt kan fånga upp tidigare – precis det gap som digitala övergångsvårdsverktyg riktar sig mot. Återinläggningsgraden bör alltid läsas tillsammans med fallmix: ett program som betjänar en sjukare, mer komplex population kommer strukturellt att ha en högre baslinjeandel än ett som betjänar en friskare population, oberoende av programkvalitet.

## Hur den beräknas

```
30-dagars återinläggningsgrad = oplanerade återinläggningar inom
                                30 dagar efter utskrivning / totalt
                                indexutskrivningar × 100

Exkludera från täljaren: planerade återinläggningar (t.ex. ett
schemalagt uppföljningsingrepp), och överflyttningar som är en
fortsättning av samma vårdepisod snarare än en ny inläggning.

Riskjustera där möjligt, med ett accepterat fallmix- eller
komorbiditetsindex, innan andelar jämförs över olika
patientpopulationer eller tidsperioder.
```

## Genomräknat exempel

Ett sjukhus skriver ut 1 200 patienter med hjärtsvikt under ett kvartal. Av dessa återinläggs 210 inom 30 dagar, varav 15 är planerade återinläggningar för ett schemalagt ingrepp och exkluderas. Den oplanerade 30-dagars återinläggningsgraden är (210 − 15) / 1 200 × 100 = 16,25 %. Ett fjärrövervakningsprogram införs för en delmängd av 400 av dessa patienter (utvalda efter klinisk risk, inte slumpmässigt), och deras oplanerade återinläggningsgrad är 14 %, jämfört med 18 % för de 800 ej inskrivna patienterna. Eftersom inskrivningen baserades på klinisk risk snarare än slumpmässig tilldelning är denna skillnad antydande snarare än avgörande bevis på programmets effekt, och bör tolkas tillsammans med en riskjusteringsanalys snarare än tas för nominellt värde.

## Datakällor och förbehåll

Återinläggningsdata hämtas vanligtvis från sjukhusets eget flöde för inläggning-utskrivning-överflyttning (ADT) för återinläggningar till samma inrättning, men en patient som återinläggs på ett annat sjukhus kommer inte alls att visas i det flödet, så spårning av återinläggningar på ett enda sjukhus systematiskt underskattar de faktiska återinläggningsgraderna om det inte kompletteras med regionala data för utbyte av hälsoinformation, betalarfordringsdata eller delstatliga databaser för alla betalare. Att tillskriva ett digitalt program kräver försiktighet: patienter som väljer att delta i ett frivilligt fjärrövervakningsprogram är sällan ett slumpmässigt urval av den utskrivna populationen, så en naiv jämförelse av återinläggningsgrad för inskrivna kontra ej inskrivna kommer att tendera att förväxlas av just de urvalseffekter som gjorde vissa patienter mer benägna att skriva in sig från början.

## Fallgropar

- **Att jämföra råa, icke riskjusterade andelar över populationer**: ett program som betjänar en sjukare population kommer att visa en högre rå återinläggningsgrad än ett som betjänar en friskare population även om programmet i sig är mer effektivt; riskjustera alltid innan jämförelse.
- **Att underskatta återinläggningar till andra inrättningar**: att endast förlita sig på ett enda sjukhus egna ADT-data kommer att missa återinläggningar på andra håll, vilket underskattar den faktiska andelen, särskilt i områden med flera konkurrerande sjukhussystem.
- **Urvalsbias vid frivillig programinskrivning**: patienter som väljer att skriva in sig i ett digitalt uppföljningsprogram skiljer sig ofta systematiskt (i hälsolitteracitet, socialt stöd eller motivation) från dem som inte gör det, vilket förväxlar varje naiv före/efter- eller inskriven/ej inskriven-jämförelse.
- **Att räkna varje återkomst till samma inrättning som en återinläggning**: en schemalagd, planerad återinläggning (till exempel ett planerat ingrepp i andra steget) är inte en signal om en misslyckad utskrivning och bör exkluderas från täljaren, inte blandas med genuint oplanerade återkomster.

## Källor

- Centers for Medicare & Medicaid Services (CMS), specifikationer för Hospital Readmissions Reduction Program och måttet Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), vägledning om att minska undvikbara återinläggningar
- Kollegialt granskad litteratur om digitala fjärrövervaknings- och övergångsvårdsinterventioner för att minska återinläggningar, exempelvis studier publicerade i JAMA Network Open och npj Digital Medicine

Se även: [noggrannhet i triageledning](../noggrannhet-i-triageledning/), eftersom olämplig initial ledning i sig kan vara en nedströms drivkraft för undvikbara inläggningar.
