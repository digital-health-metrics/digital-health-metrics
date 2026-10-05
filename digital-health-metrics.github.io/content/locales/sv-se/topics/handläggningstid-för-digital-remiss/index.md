# Handläggningstid för Digital Remiss

Handläggningstiden för digital remiss är den tid som förflyter från att en remitterande kliniker skickar in en elektronisk remiss till att den triageras av den mottagande verksamheten, vilket resulterar i godkännande, avslag eller bokning. Det är ett processmått (flöde), skilt från patientens totala väntetid, och en av de tydligaste platserna där man kan visa att en digital systemförändring (strukturerad e-remiss, bildbaserad triage, standardiserade remissformulär) faktiskt påverkar ett operativt tal, inte bara en nöjdhetspoäng.

## Varför det spelar roll

Ett långsamt eller mycket varierande triagesteg lägger till fördröjning redan innan patienten ens kommer med på en klinisk väntelista, och eftersom denna fördröjning sker innan någon klinisk vård påbörjas är det ren processpill som digitala verktyg är väl lämpade att eliminera. Remissystem som tvingar fram en cykel av "återsändning till remittenten" på grund av saknad information skapar omarbetningsloopar som lätt missas om handläggningstiden bara mäts på remisser som går rent igenom vid första försöket. Där en verksamhet har infört strukturerade digitala remissformulär, obligatoriska fält, eller bildbaserad triage (till exempel inom teledermatologi), är handläggningstiden vanligtvis det enskilt mest övertygande måttet för att visa nyttan, eftersom det är mätbart före och efter förändringen med samma instrumentering.

## Hur det beräknas

```
Handläggningstid = tidsstämpel(triagebeslut) − tidsstämpel(remissinlämning)

Rapportera medianen och en hög percentil (vanligtvis den 90:e), inte bara
medelvärdet, eftersom fördelningen är kraftigt högerskev på grund av
återsända eller komplexa remisser.

Beakta delsteg där systemet fångar dem:
  Inlämning → mottagen av verksamheten
  Mottagen → triagebeslut
  Triagebeslut → bokad tid (där tillämpligt)
```

## Löst exempel

Revisionsspåret för ett elektroniskt remissystem visar en median tid från inlämning till triagebeslut på 1,8 dagar över alla specialiteter, med en tid vid 90:e percentilen på 6 dagar, huvudsakligen driven av remisser som återsänts till remittenten på grund av saknad klinisk information. En teledermatologisk vårdkedja som använder bildbaserad triage på samma plattform uppnår en median handläggningstid på 4 timmar och en 90:e percentil på 1 dag, eftersom ett foto och en strukturerad anamnes nästan alltid räcker för triagebeslutet utan behov av ytterligare korrespondens.

## Datakällor och förbehåll

Det egna revisionsspåret för e-remiss- eller remisshanteringssystemet är den primära källan, med hjälp av tidsstämplar för inlämning och beslut; organisationer bör klargöra om "klockan" pausas medan en remiss återsänds för ytterligare information eller om den löper kontinuerligt, eftersom de två definitionerna ger väsentligt olika siffror för samma underliggande process. Handläggningstiden bör rapporteras konsekvent antingen i kalendertid eller i arbetstid, eftersom helg- och helgdagseffekter annars kan snedvrida jämförelser mellan verksamheter med olika arbetsmönster.

## Vanliga misstag

- **Att bara mäta "rena" remisser**: att utesluta avslagna eller återsända remisser från beräkningen döljer den omarbetningsbörda som digitala verktyg ofta är särskilt avsedda att minska.
- **Att rapportera medelvärdet i stället för median och percentiler**: ett litet antal långdragna, återsända remisser drar upp medelvärdet långt över den typiska patientens faktiska upplevelse.
- **Att blanda ihop handläggningstid med total väntetid**: handläggningstiden omfattar bara triagesteget; patientens totala upplevelse inkluderar också den efterföljande kliniska väntelistan, som är ett separat mått styrt av separata kapacitetsbegränsningar.
- **Att inte särskilja delsteg**: en verksamhet som bara mäter tiden från början till slut kan inte avgöra om en långsam siffra beror på att remittenter lämnar ofullständig information, på den mottagande verksamhetens triagekapacitet, eller på båda.

## Källor

- NHS England, statistik och tjänstespecifikationer för e-remisstjänsten (e-RS)
- Kollegialt granskad litteratur om elektroniska remisshanteringssystem och digitala triagevägar, inklusive teledermatologi
- ONC / HealthIT.gov, vägledning om interoperabilitet och remissamordning
