# LTV-til-CAC-ratio

LTV-til-CAC-ratioen sammenligner en patients livstidsværdi (den samlede indtægt, en organisation forventer at generere fra en patient over hele deres relation) med den reelle omkostning ved at erhverve den patient, hvilket giver den mest grundlæggende enkelttest af, om en digital sundhedsforretningsmodel rent faktisk er bæredygtig. En ratio på 3:1 — hvor en patients livstidsværdi er tre gange den omkostning, det tog at erhverve dem — er den bredt citerede bæredygtige baseline på tværs af abonnements- og patientbaserede forretningsmodeller.

## Hvorfor det betyder noget

En virksomhed kan vise imponerende vækst i nye patienttilmeldinger, mens den stadig taber penge på hver enkelt patient, hvis erhvervelsesomkostningerne overstiger den indtægt, hver patient rent faktisk genererer — en situation, der kan vare ved uopdaget i lang tid, hvis en organisation kun sporer tilmeldingsvækst uden at sammenligne den med erhvervelsesøkonomi. LTV-til-CAC-ratioen tvinger denne sammenligning eksplicit frem og giver investorer, bestyrelser og ledelsesteams et enkelt tal til at vurdere, om en voksende forretning rent faktisk bevæger sig mod bæredygtig rentabilitet eller blot brænder kapital hurtigere, efterhånden som den vokser. Fordi både LTV og CAC kræver omhyggelig, ærlig beregning for at være meningsfulde (se de respektive artikler om hver), er en pålidelig LTV-til-CAC-ratio kun så god som nøjagtigheden af dens to underliggende input.

## Hvordan det beregnes

```
LTV-til-CAC-ratio = patientlivstidsværdi / reel
                    kundeerhvervelsesomkostning

Patientlivstidsværdi = gennemsnitlig indtægt pr. patient pr.
                       periode × gennemsnitlig patientlevetid
                       (1 / churn-rate)

En ratio på 3:1 er den bredt citerede bæredygtige baseline; en
ratio under 1:1 indikerer, at hver ny patient koster mere at
erhverve, end de nogensinde vil generere i indtægt — en umiddelbart
uholdbar position.
```

## Et gennemarbejdet eksempel

En digital sundhedsabonnementstjeneste genererer en gennemsnitlig indtægt på $20 pr. patient pr. måned med en månedlig churn-rate på 4%, hvilket giver en gennemsnitlig patientlevetid på 25 måneder (1 / 0,04) og en livstidsværdi på $500 (25 måneder × $20). Hvis virksomhedens reelle kundeerhvervelsesomkostning, fuldt belastet med alle markedsførings- og salgsomkostninger, er $150, er LTV-til-CAC-ratioen 500/150 = 3,3:1 — lige over den bredt citerede bæredygtige baseline på 3:1. Hvis virksomheden i stedet havde brugt en ikke-fuldt-belastet CAC på kun $80 (kun direkte annonceudgifter), ville den rapporterede ratio have været et misvisende optimistisk 6,25:1, hvilket illustrerer, hvorfor den underliggende CAC-beregnings nøjagtighed er afgørende.

## Datakilder og forbehold

LTV-til-CAC-ratioen er kun så pålidelig som dens to underliggende input; en kunstigt lav CAC (fra ufuldstændig omkostningsregnskab) eller en kunstigt høj LTV (fra optimistiske churn-antagelser) vil begge producere en vildledende gunstig ratio. Churn-rater, og dermed LTV, kan variere betydeligt efter patientkohorte, erhvervelseskanal og tid siden tilmelding, hvilket betyder, at en enkelt samlet LTV-figur kan skjule betydelig variation, der er relevant for beslutningstagning om specifikke erhvervelseskanaler eller patientsegmenter.

## Faldgruber

- **Brug af en ikke-fuldt-belastet CAC**: dette producerer en kunstigt gunstig ratio, der ikke afspejler den sande forretningsøkonomi; brug altid reel CAC, der inkluderer alle erhvervelsesrelaterede omkostninger.
- **Brug af optimistiske churn-antagelser til LTV**: en LTV-beregning baseret på en bedste-tilfælde-churn-rate frem for faktisk observeret churn vil overvurdere livstidsværdien.
- **Rapportering af en enkelt samlet ratio uden segmentering**: LTV-til-CAC kan variere dramatisk efter erhvervelseskanal eller patientsegment; en sund samlet ratio kan skjule uholdbare individuelle kanaler.
- **Ignorering af tidsramme for tilbagebetaling**: en ratio på 3:1 opnået over 5 år er meget mindre attraktiv end den samme ratio opnået over 1 år, på grund af kapitalomkostninger og risiko; overvej altid tilbagebetalingsperioden sammen med ratioen.

## Kilder

- SaaS- og abonnementsforretningsindustristandarder for LTV-til-CAC-benchmarking
- Collegialt bedømt og industrilitteratur om digital sundhedsvækstøkonomi, f.eks. analyser offentliggjort af Rock Health og lignende digitale sundhedsforskningsorganisationer

Se også: [reel kundeerhvervelsesomkostning](../true-customer-acquisition-cost/) og [markedsføringseffektivitetsratio](../marketing-efficiency-ratio/), de to andre kernevækstøkonomimetrikker, som denne ratio typisk rapporteres sammen med.
