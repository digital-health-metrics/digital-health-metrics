# Míra telemedicínských návštěv

Míra telemedicínských návštěv je podíl všech kontaktů služby, které jsou poskytovány na dálku, videem nebo telefonem, a nikoli osobně. Je to metrika skladby kanálů poskytování, nikoli metrika aktivity: říká, jak se péče poskytuje, což je důležité pro plánování kapacit, dostupnost a klinickou vhodnost, zcela odděleně od toho, kolik péče se poskytuje celkem.

## Proč na ní záleží

Podíl péče poskytované na dálku změnil provozní model mnoha služeb po rychlém rozšíření virtuálních konzultací za pandemie covidu-19 a organizace potřebují stabilní způsob, jak sledovat, zda se tento posun udržuje, vrací se k předpandemickým normám, nebo je aktivně usměrňován politikou. Telemedicína není univerzální náhradou osobní návštěvy: vhodnost se liší podle oboru, podle typu konzultace (kontrola léčby se chová zcela jinak než fyzikální vyšetření) a podle preferencí pacienta, takže „správná“ míra je klinickým a provozním úsudkem, nikoli cílem k maximalizaci. Poskytovatelé financování a regulátoři také používají tuto míru spolu s metrikami výsledků a bezpečnosti k rozhodování o politice úhrad a k ověření, že se péče na dálku jednoduše nepřenáší na případy, které je třeba vidět osobně.

## Jak se počítá

```
Míra telemedicínských návštěv = telemedicínské kontakty / (telemedicínské kontakty + osobní kontakty) × 100

Kde je to možné, vykazujte zvlášť podle způsobu:
  Míra video návštěv   = video kontakty / celkový počet kontaktů × 100
  Míra telefonních     = pouze telefonní kontakty / celkový počet kontaktů × 100

Jmenovatel by měl zahrnovat jen dokončené kontakty (viz úskalí), pro
definovanou službu, obor a časové období.
```

## Řešený příklad

Komunitní služba duševního zdraví zaznamená za čtvrtletí 4 000 dokončených ambulantních kontaktů: 1 200 osobně, 1 600 videem a 1 200 telefonicky. Míra telemedicínských návštěv je (1 600 + 1 200) / 4 000 × 100 = 70 %, přičemž míra video návštěv je 40 % a míra pouze telefonních 30 %. Vykazování samotného souhrnného údaje 70 % by zakrylo, že velký podíl „telemedicíny“ je zde pouze zvukový, což obvykle nese jiný klinický rizikový profil a zkušenost pacienta než video.

## Zdroje dat a omezení

Typ kontaktu se obvykle zaznamenává buď jako strukturované pole v elektronické zdravotní dokumentaci (typ nebo místo návštěvy), nebo se odvozuje z fakturačních kódů, například kódu místa poskytnutí služby či telemedicínského modifikátoru na nároku. Praxe kódování se mezi organizacemi a dokonce i mezi lékaři téže organizace výrazně liší, a proto by srovnání míry mezi pracovišti mělo nejprve potvrdit, že se „telemedicína“ kóduje všude stejně. Návštěva, která začne jako video, ale kvůli technickému problému přejde na telefon, by měla být kódována důsledně (běžně podle způsobu, kterým se vedla většina klinického obsahu) a toto pravidlo by mělo být zdokumentováno, nikoli ponecháno individuálnímu úsudku.

## Úskalí

- **Počítání pokusů místo dokončených návštěv**: telemedicínský termín, u něhož se nepodaří spojení a který se znovu objedná, by neměl nafouknout jmenovatele telemedicíny dvakrát.
- **Chápání videa a telefonu jako zaměnitelných**: mají odlišné klinické důsledky i důsledky pro rovnost (telefon vylučuje vizuální posouzení, ale je dostupnější pacientům bez chytrého telefonu, spolehlivých dat či soukromého prostoru pro video); vždy je vykazujte odděleně, když je to možné.
- **Ignorování vztahu k nedostavení se**: chování při nedostavení se se často liší podle způsobu konzultace; před vyvozováním závěrů o „zlepšeném přístupu“ jen z rostoucí míry telemedicíny viz [míra nedostavení se na termín](../míra-nedostavení-se-na-termín/).
- **Chápání vysoké míry jako samo o sobě dobré**: u některých onemocnění a typů konzultací je přiměřená míra telemedicíny nízká z klinického návrhu, nikoli kvůli selhání digitální zralosti.

## Zdroje

- Centers for Medicare & Medicaid Services (CMS), data o využití telemedicíny v Medicare a politické publikace
- NHS England, statistiky aktivity ambulantních a komunitních služeb, včetně členění virtuálních/vzdálených návštěv
- Recenzovaná literatura o trendech využití telemedicíny a výsledcích specifických pro způsob konzultace
