# Miera dokončenia ePROM

Miera dokončenia ePROM meria podiel naplánovaných elektronických mier výsledkov hlásených pacientom (ePROM) — štandardizovaných, validovaných dotazníkov zachytávajúcich vlastný opis pacienta o jeho príznakoch, funkcii alebo kvalite života, doručovaných digitálne namiesto na papieri —, ktoré sa skutočne dokončia. Je to metrika kvality údajov v rovnakej miere ako metrika zapojenia: klinická a výskumná hodnota programu PROM závisí výlučne od dostatočne vysokej miery dokončenia, aby zozbierané odpovede reprezentovali celú zaradenú populáciu, a nie len najviac zapojenú alebo najmenej symptomatickú podskupinu.

## Prečo je dôležitá

Výsledky hlásené pacientmi sú priamym, pacientom potvrdeným doplnkom k údajom zaznamenaným klinickými pracovníkmi alebo meraným zariadeniami, zachytávajúcim rozmery zdravia — bolesť, funkciu, kvalitu života —, ktoré revízia zdravotnej dokumentácie ani biometrická hodnota nezachytia; digitalizácia zberu PROM existuje práve preto, aby tieto údaje boli lacnejšie a jednoduchšie zbierať vo veľkom rozsahu, než kedy umožňovalo papierové podávanie. Program PROM s nízkou mierou dokončenia však riskuje špecifické a závažné skreslenie: pacienti, ktorí sa cítia horšie, často s menšou pravdepodobnosťou vyplnia dlhý dotazník, takže klesajúca miera dokončenia môže byť sama osebe skorým varovným signálom zhoršujúceho sa zdravia populácie a nízka celková miera dokončenia môže spôsobiť, že zozbierané odpovede vyzerajú lepšie než skutočná skúsenosť populácie, jednoducho preto, že najsymptomatickejší pacienti sú medzi dokončenými odpoveďami podreprezentovaní. Preto by sa miera dokončenia mala vždy vykazovať spolu so samotnými skóre PROM a nepovažovať ju za druhoradý prevádzkový detail.

## Ako sa počíta

```
Miera dokončenia ePROM = úplne dokončené ePROM / odoslané alebo
                          naplánované ePROM × 100

Vykazujte osobitne pre:
  Počiatočnú mieru dokončenia   (prvý dotazník v monitorovacej
                                 postupnosti)
  Longitudinálnu mieru dokončenia (nasledujúce dotazníky v prebiehajúcej
                                 monitorovacej postupnosti, ktorá
                                 zvyčajne v čase klesá a mala by sa
                                 sledovať ako trend, nie ako jedno číslo)

„Čiastočne dokončený“ dotazník by sa mal vymedziť a vykazovať osobitne
od „úplne dokončeného“ aj „nezačatého“.
```

## Prepracovaný príklad

Onkologická klinika odošle validovaný ePROM záťaže príznakmi 400 pacientom pred každou mesačnou kontrolnou návštevou. V prvom mesiaci dotazník úplne dokončí 340 pacientov (miera dokončenia 85 %), 30 ho dokončí čiastočne a 30 ho nezačne. V šiestom mesiaci tej istej monitorovacej postupnosti klesne počet úplných odpovedí na 260 zo 400 pacientov tej istej kohorty (65 %), čo je významný longitudinálny pokles, ktorý by sa úplne prehliadol, keby sa ako statická celková metrika vykazovalo iba číslo 85 % z prvého mesiaca. Skúmanie, ktorí pacienti vypadávajú (podľa závažnosti príznakov, štádia ochorenia alebo veku), môže ukázať, či pokles odráža únavu z prieskumov, zhoršujúce sa príznaky, ktoré sťažujú vyplnenie dotazníka, alebo technickú bariéru prístupu.

## Zdroje údajov a výhrady

Údaje o dokončení pochádzajú z vlastných záznamov doručenia a odpovedí platformy ePROM, ktoré dokážu rozlíšiť stavy „nezačatý“, „čiastočne dokončený“ a „úplne dokončený“ — rozlíšenie, ktoré by sa malo vždy zachovať a vykazovať, a nezúžiť na binárne číslo dokončený/nedokončený, pretože čiastočné dokončenie často naznačuje konkrétne miesto v dotazníku, kde pacienti narážajú na ťažkosti alebo strácajú záujem. Mieru dokončenia treba interpretovať spolu so spôsobom doručenia dotazníka (odkaz v textovej správe, oznámenie v aplikácii alebo spôsob doručenia vyžadujúci prihlásenie do portálu), pretože samotné trenie pri doručení ovplyvňuje dokončenie nezávisle od obsahu dotazníka alebo základného stavu pacienta. Pre samotný PROM by sa mal vždy použiť validovaný nástroj (a nie ad hoc súbor otázok), pretože miera dokončenia nevalidovaného nástroja nehovorí nič spoľahlivé o klinickej užitočnosti výsledných údajov, aj keď je dokončenie vysoké.

## Nástrahy

- **Považovanie klesajúcej miery dokončenia len za problém doručenia**: longitudinálny pokles dokončenia môže odrážať skutočne zhoršujúce sa príznaky pacientov (pacienti príliš chorí na vyplnenie prieskumu), a nie únavu z prieskumu alebo technický problém, a toto rozlíšenie je pre klinickú interpretáciu mimoriadne dôležité.
- **Zlučovanie čiastočného a úplného dokončenia do jednej kategórie**: čiastočne dokončený dotazník má podstatne inú kvalitu údajov než úplne dokončený; vykazujte ich osobitne a skúmajte, kde v priebehu dotazníka ho pacienti zvyčajne opúšťajú.
- **Vykazovanie miery dokončenia bez vykázania rizika skreslenia odpovedí**: stredná miera dokončenia by mala podnietiť skúmanie, či sa respondenti systematicky líšia (závažnosťou príznakov, vekom, digitálnou gramotnosťou) od nerespondentov, pretože skóre PROM vypočítané len z respondentov môže skresliť obraz celej populácie.
- **Používanie nevalidovaného alebo vlastného dotazníka**: miera dokončenia je ako signál kvality údajov bezvýznamná, ak vypĺňaný nástroj nebol klinicky validovaný pre sledovaný stav a populáciu.

## Zdroje

- International Consortium for Health Outcomes Measurement (ICHOM), vývoj štandardných súborov a usmernenia k implementácii PROM
- U.S. Food and Drug Administration (FDA), usmernenia k mieram výsledkov hlásených pacientmi v klinických skúšaniach a regulačných podaniach
- Recenzovaná literatúra o implementácii elektronických PROM a mierach dokončenia, napríklad štúdie publikované v Quality of Life Research a Journal of Medical Internet Research (JMIR)

Pozri tiež: [net promoter score pacientov](../net-promoter-score-pacientov/), príbuzná, no odlišná metrika hlásená pacientmi, ktorá meria spokojnosť, a nie klinický výsledok.
