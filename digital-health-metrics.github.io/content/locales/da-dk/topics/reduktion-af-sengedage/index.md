# Reduktion af Sengedage

Reduktion af sengedage måler antallet af hospitalssengedage, der spares ved at flytte patientgenoptræning eller -overvågning fra en fysisk hospitalsseng til en virtuel afdeling eller et fjernovervågningsprogram. Den er en af de mest direkte kapacitets- og omkostningsmetrikker i digital sundhed, fordi hospitalssenge er en af de knappeste og dyreste ressourcer i et sundhedssystem, og enhver dag en patient trygt kan behandles hjemme i stedet for på hospitalet, repræsenterer både en omkostningsbesparelse og frigjort kapacitet til en anden patient, der har brug for den fysiske seng.

## Hvorfor det betyder noget

Hospitaler driver ofte med meget lille reservekapacitet, hvilket betyder, at selv beskedne reduktioner i sengedagesbehov kan have uforholdsmæssigt store operationelle fordele — at lindre overbelægning, reducere behovet for kostbar kapacitetsudvidelse eller frigøre kapacitet til mere akutte tilfælde. For betalere og sundhedssystemer, der evaluerer en virtuel afdeling eller et fjernovervågningsprogram, er reduktion af sengedage ofte den enkelte mest overbevisende forretningscase-figur, fordi den oversættes relativt direkte til en dollarfigur via standard omkostning-pr-sengedag-beregninger. Men fordi overførsel af en patient fra en fysisk til en virtuel seng kun er værdifuld, hvis det er klinisk sikkert, skal reduktion af sengedage altid rapporteres sammen med en sikkerhedsmetrik, der bekræfter, at patienter behandlet virtuelt ikke oplever værre resultater end dem, der forbliver indlagt.

## Hvordan det beregnes

```
Reduktion af sengedage = (forventede sengedage baseret på
                         historisk plejemønster for lignende
                         patienter − faktiske hospitalssengedage
                         brugt) summeret på tværs af alle patienter
                         i det virtuelle afdelingsprogram

Rapporter altid sammen med:
  Sikkerhedsreindlæggelsesrate = patienter behandlet virtuelt, der
                                 kræver uplanlagt hospitalsindlæggelse
                                 inden for et defineret vindue /
                                 samlet antal patienter behandlet
                                 virtuelt × 100
```

## Et gennemarbejdet eksempel

Et virtuelt afdelingsprogram for patienter med lungebetændelse behandler 200 patienter, der historisk ville have krævet en gennemsnitlig indlæggelse på 5 dage baseret på matchede historiske data. De faktiske hospitalssengedage brugt af disse 200 patienter (for den delmængde, der krævede en vis fysisk indlæggelse før eller efter virtuel pleje) summerer til kun 150 sengedage i alt, sammenlignet med en forventet 1.000 sengedage (200 patienter × 5 dage), hvilket giver en reduktion af sengedage på 850 dage. Sammen med denne figur rapporterer programmet en sikkerhedsreindlæggelsesrate på 4%, som sammenlignes gunstigt med den historiske reindlæggelsesrate på 6% for lignende patienter behandlet udelukkende på hospitalet — hvilket giver tillid til, at sengedagsbesparelserne ikke kom på bekostning af patientsikkerheden.

## Datakilder og forbehold

At estimere "forventede sengedage" kræver en troværdig historisk sammenligningsgruppe af lignende patienter behandlet under det traditionelle plejemønster, og kvaliteten af denne sammenligning er afgørende for troværdigheden af enhver rapporteret reduktion — en dårligt matchet sammenligningsgruppe (f.eks. en, der systematisk omfatter mere alvorligt syge patienter end dem, der er valgt til det virtuelle program) kan producere en kunstigt oppustet reduktionsfigur. Omkostning-pr-sengedag-beregninger varierer betydeligt på tværs af sundhedssystemer og regioner, så at konvertere sengedagsreduktion til en dollarfigur kræver brug af den specifikke organisations egen omkostningsregnskabsmetodologi.

## Faldgruber

- **Rapportering af reduktion af sengedage uden en sikkerhedsmetrik**: sengedagebesparelser opnået ved at udskrive patienter, der rent faktisk havde brug for hospitalspleje, repræsenterer ikke reel værdi og kan skade patienter.
- **Brug af en dårligt matchet historisk sammenligningsgruppe**: hvis patienter valgt til det virtuelle program systematisk er mindre syge end den historiske sammenligningsgruppe, vil den rapporterede reduktion overdrive programmets sande effekt.
- **Ignorering af patienter, der kræver overgang tilbage til hospitalet**: sengedage brugt af patienter, der starter virtuelt, men senere kræver fysisk indlæggelse, skal inkluderes i den faktiske sengedagstælling, ikke udelukkes.
- **Anvendelse af en generisk omkostning-pr-sengedag-figur**: omkostninger pr. sengedag varierer betydeligt efter afdelingstype, region og sundhedssystem; brug den specifikke organisations egne omkostningsdata for troværdige finansielle beregninger.

## Kilder

- NHS England, retningslinjer for virtuel afdeling og hospital-til-hjem-programmer
- Agency for Healthcare Research and Quality (AHRQ), forskning i hospitalskapacitet og sengeudnyttelse
- Collegialt bedømt litteratur om virtuelle afdelingsresultater, f.eks. undersøgelser offentliggjort i BMJ Open og Journal of the American Medical Association (JAMA)

Se også: [hospitalsgenindlæggelsesrate](../hospitalsgenindlæggelsesrate/), sikkerhedsmetrikken, der altid bør rapporteres sammen med enhver påstand om reduktion af sengedage for den samme patientpopulation.
