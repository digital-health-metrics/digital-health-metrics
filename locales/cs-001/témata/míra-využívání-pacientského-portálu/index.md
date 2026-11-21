# Míra využívání pacientského portálu

Míra využívání pacientského portálu měří podíl způsobilých pacientů, kteří se zaregistrovali do online pacientského portálu (například NHS App, Patient Access nebo portálu napojeného na EHR, jako je MyChart) a aktivně jej používají k nahlížení do záznamů, objednávání termínů či komunikaci s péčovým týmem. Je to vstupní ukazatel digitálního zapojení: pacient, který nikdy neaktivoval účet, nemůže těžit z žádné navazující digitální služby postavené na portálu.

## Proč na ní záleží

Portál vytváří hodnotu až tehdy, když jej pacient používá, a proto by organizace měly sledovat přijetí jako trychtýř, a nikoli jediné číslo: registrace, aktivace (první smysluplná akce) a aktivní používání (použití v klouzavém okně) jsou tři různé míry, které se zaměňují příliš často. Týmy digitálních služeb jsou často pod tlakem vykazovat jediné, příznivé hlavní číslo a vyžaduje to disciplínu trvat na těžším, poctivějším členění. Nízké nebo nerovnoměrně rozložené přijetí je také signálem rovnosti: pacienti, kteří jsou starší, mají nižší digitální gramotnost, nemluví většinovým jazykem nebo postrádají spolehlivé širokopásmové připojení či chytrý telefon, jsou systematicky méně často započítáni v čitateli, takže rostoucí průměrná míra přijetí může zakrývat rostoucí mezeru u pacientů, kteří často kontakt se službami potřebují nejvíce.

## Jak se počítá

Vykazujte všechny tři fáze, nejen registraci, a vždy výslovně uveďte jmenovatele:

```
Míra registrace = pacienti s vytvořeným účtem v portálu / způsobilá populace pacientů × 100
Míra aktivace   = pacienti, kteří dokončili první smysluplnou akci (zobrazili výsledek,
                  objednali termín, odeslali zprávu) / pacienti s účtem × 100
Míra aktivního používání = pacienti, kteří se za posledních 12 měsíců přihlásili alespoň
                  jednou / způsobilá populace pacientů × 100
```

Způsobilá populace pacientů se obvykle definuje jako pacienti s alespoň jedním kontaktem s organizací v definovaném zpětném období (běžně 24 měsíců), kteří mají věk a stav souhlasu umožňující vlastní účet.

## Řešený příklad

Síť primární péče obsluhuje 50 000 pacientů splňujících definici způsobilosti. Z nich se do portálu zaregistrovalo 32 000 (míra registrace 64 %). Z 32 000 registrací jich 27 000 dokončilo alespoň jednu smysluplnou akci, například zobrazení výsledku vyšetření (míra aktivace 84 % registrovaných). Za posledních 12 měsíců se alespoň jednou přihlásilo 21 000 z původních 50 000 způsobilých pacientů (míra aktivního používání 42 %). Vykazování samotného údaje o registraci 64 % by značně nadhodnotilo skutečné zapojení; právě údaj o aktivním používání 42 % by měl řídit rozhodování o zdrojích pro program portálu.

## Zdroje dat a omezení

Analytika portálu obvykle pochází z platformy dodavatele (události přihlášení, využití funkcí) nebo z auditního protokolu podkladové elektronické zdravotní dokumentace a organizace by měly být skeptické k dashboardům dodavatelů, které zobrazují pouze počty registrací. Zástupný přístup (rodič nebo pečující spravující účet jménem pacienta) by měl být označen a vykazován zvlášť, protože mění to, kdo je vlastně „uživatelem“. Volba jmenovatele má obrovský význam: počítání vůči celému seznamu registrovaných pacientů místo skutečně způsobilé, kontaktovatelné populace přijetí vždy podhodnotí, zatímco počítání pouze vůči aktivně pozvaným pacientům je vždy nadhodnotí, a proto by definice způsobilosti měla být pevně stanovena a zveřejněna spolu s každou vykázanou mírou.

## Úskalí

- **Registrace počítaná jako přijetí**: vytvořený, ale nikdy nepoužitý účet má hodnotu blízkou nule; vykazujte aktivaci a aktivní používání vedle registrace, nikoli místo ní.
- **Ignorování digitálního vyloučení**: souhrnné údaje o přijetí mohou růst, zatímco se rozevírá mezera mezi nejvíce a nejméně digitálně začleněnými skupinami; vždy členěte podle věku, deprivace, jazyka a postižení, kde to dovoluje správa dat.
- **Porovnávání organizací s odlišnými definicemi způsobilosti**: program portálu, který zve jen pacienty se zaznamenanou e-mailovou adresou, vykáže vyšší míru než ten, který měří vůči celému registrovanému seznamu, bez skutečného rozdílu ve výkonu.
- **Chápání jednorázového přihlášení jako trvalého zapojení**: 12měsíční zpětné okno je běžné, ale kratší okno (například 90 dnů) poskytuje dřívější varování před klesajícím používáním.

## Zdroje

- NHS England, statistiky používání a registrace NHS App (publikace nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, míry programu Promoting Interoperability, včetně měřítek přístupu pacienta View, Download, Transmit (VDT)
- Recenzovaná literatura o přijetí pacientských portálů a nerovnostech v digitálním zdraví, například studie publikované v Journal of the American Medical Informatics Association (JAMIA)

Viz také: [míra nedostavení se na termín](../míra-nedostavení-se-na-termín/), kterou samoobslužné objednávání a připomínky přes portál přímo ovlivňují.
