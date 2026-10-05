# Uteblivandegrad för Besök

Uteblivandegraden för besök (även kallad "did not attend"- eller DNA-grad) är andelen bokade besök där patienten varken kom eller avbokade med rimligt varsel. Det är ett av de äldsta operativa måtten inom hälso- och sjukvård, och digitala verktyg — särskilt påminnelser, självbetjäningsombokning och portalbaserad bokning — hör idag till de mest effektiva och bäst underbyggda hävstängerna för att minska den.

## Varför det spelar roll

Varje uteblivande är en enhet klinisk kapacitet som vanligtvis inte kan återvinnas, eftersom de flesta verksamheter inte kan fylla en lucka samma dag med kort varsel, så andelen påverkar direkt väntelistornas längd, kostnaden per genomfört besök och förlorad klinisk tid. Uteblivandebeteende är inte jämnt fördelat: det korrelerar med socioekonomisk utsatthet, tillgång till transport, omsorgsansvar och bördan av att hantera flera långvariga tillstånd, så att behandla en hög andel enbart som ett beteendeproblem hos patienten, snarare än delvis som en signal om tillgänglighetshinder, tenderar att ge upphov till åtgärder (som generella sanktioner) som befäster ojämlikhet snarare än att minska den. Digitala påminnelser och enkel digital ombokning hör konsekvent till de mest effektiva, lågkostnadsåtgärder som finns tillgängliga, och det är därför detta mått hör tydligt hemma i ett program för mätning av digital hälsa och inte bara i den operativa rapporteringen.

## Hur det beräknas

```
Uteblivandegrad = besök markerade som "uteblivit" / totalt antal bokade besök × 100
```

Ett bokat besök utesluts vanligtvis från nämnaren, eller flyttas till en separat kategori, om det avbokades av endera parten med mer än en definierad varselperiod (vanligtvis 24 timmar). Sena avbokningar (under den varselperioden) rapporteras vanligtvis separat från verkliga uteblivanden, eftersom de operativa och beteendemässiga implikationerna skiljer sig åt.

## Löst exempel

En kommunal mottagning bokar 2 000 besök under en månad. Av dessa avbokas 140 med mer än 24 timmars varsel (ombokade och exkluderade från nämnaren), 60 avbokas sent (mindre än 24 timmar), och 180 registreras som ett verkligt uteblivande utan någon kontakt alls. Uteblivandegraden är 180 / 2 000 × 100 = 9 %. Om de 60 sena avbokningarna hade inkluderats i samma kategori som verkliga uteblivanden skulle den rapporterade andelen stiga till 12 %, vilket är varför den använda definitionen alltid bör anges tillsammans med siffran.

## Datakällor och förbehåll

Bokningssystemet eller mottagningssystemet är den primära källan, med hjälp av dess statuskoder för besök; måttets kvalitet beror helt på att personalen konsekvent använder rätt status i stället för en generell "avbokad"-kategori för allt. Organisationer som inför digitala påminnelser (SMS, push-notiser från appar, eller portalaviseringar) bör mäta uteblivandegraden före och efter förändringen för en jämförbar patient- och tjänstemix, eftersom påminnelsers effektivitet är väl dokumenterad i randomiserade och observationsstudier men varierar beroende på population och kanal.

## Vanliga misstag

- **Att jämföra råa andelar mellan mottagningar med olika överbokningspraxis**: en mottagning som avsiktligt överbokar för att kompensera för en förväntad uteblivandegrad kommer att visa en annan skenbar andel än en som inte gör det, oberoende av det faktiska patientbeteendet.
- **Att blanda ihop sena avbokningar med verkliga uteblivanden**: de har olika orsaker och olika digitala lösningar (ett problem med sena avbokningar löses ofta genom enklare självbetjäningsombokning; ett problem med verkliga uteblivanden löses ofta genom bättre påminnelser och mer korrekta kontaktuppgifter).
- **Överlevnadsbias från utskrivningspolicyer**: verksamheter som skriver ut patienter efter upprepade uteblivanden kommer att se sin egen andel förbättras mekaniskt, samtidigt som de bara flyttar samma patienter till en annan del av systemet.
- **Att lägga skulden för digital exkludering på patienten**: en patient utan smartphone eller tillförlitlig sms-tjänst gynnas inte av en helt digital påminnelsestrategi, så en flerkanalsstrategi (brev, samtal, sms, app) behövs vanligtvis för att undvika att tillgänglighetsklyftorna vidgas.

## Källor

- NHS England, missade besök inom primärvård och öppenvård, publicerad statistik och vägledning
- Cochranes systematiska översikter om åtgärder för att minska missade vårdbesök, inklusive påminnelsesystem
- Kollegialt granskad litteratur om socioekonomiska och demografiska samband med uteblivande från besök

Se även: [andel telehälsobesök](../andel-telehälsobesök/), eftersom uteblivandebeteende ofta skiljer sig åt beroende på konsultationsform, och [adoptionsgrad för patientportal](../adoptionsgrad-för-patientportal/), eftersom portalbaserad självbokning och påminnelser är en central digital åtgärd inom detta område.
