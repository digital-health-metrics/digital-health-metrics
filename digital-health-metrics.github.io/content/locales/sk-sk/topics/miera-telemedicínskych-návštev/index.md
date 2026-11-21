# Miera telemedicínskych návštev

Miera telemedicínskych návštev je podiel všetkých kontaktov služby, ktoré sa poskytujú na diaľku, videom alebo telefonicky, a nie osobne. Je to metrika mixu kanálov poskytovania, nie metrika aktivity: hovorí, ako sa starostlivosť poskytuje, čo je dôležité pre plánovanie kapacity, prístup a klinickú vhodnosť, celkom nezávisle od toho, koľko starostlivosti sa poskytuje celkovo.

## Prečo je dôležitá

Podiel starostlivosti poskytovanej na diaľku zmenil prevádzkový model mnohých služieb po rýchlej expanzii virtuálnych konzultácií počas pandémie COVID-19 a organizácie potrebujú stabilný spôsob, ako sledovať, či sa tento posun udržiava, vracia sa k normám spred pandémie, alebo je aktívne riadený politikou. Telemedicína nie je jednotnou náhradou osobnej návštevy: vhodnosť sa líši podľa odbornosti, typu konzultácie (revízia liekov sa správa veľmi odlišne od fyzikálneho vyšetrenia) a preferencií pacienta, takže „správna“ miera je klinický a prevádzkový úsudok, nie cieľ, ktorý treba maximalizovať. Poskytovatelia financií a regulátori túto mieru popri výsledkových a bezpečnostných mierach tiež používajú na rozhodovanie o politike úhrad a na kontrolu, že starostlivosť na diaľku sa nenahrádza jednoducho v prípadoch, ktoré treba vidieť osobne.

## Ako sa počíta

```
Miera telemedicínskych návštev = telemedicínske kontakty / (telemedicínske
                                  kontakty + osobné kontakty) × 100

Ak je to možné, vykazujte osobitne podľa modality:
  Miera videa     = videokontakty / všetky kontakty × 100
  Miera telefónu  = len telefonické kontakty / všetky kontakty × 100

Menovateľ by mal zahŕňať iba dokončené kontakty (pozri nástrahy), pre
vymedzenú službu, odbornosť a časové obdobie.
```

## Prepracovaný príklad

Komunitná služba duševného zdravia eviduje za štvrťrok 4 000 dokončených ambulantných kontaktov: 1 200 osobne, 1 600 videom a 1 200 telefonicky. Miera telemedicínskych návštev je (1 600 + 1 200) / 4 000 × 100 = 70 %, pričom miera videa je 40 % a miera výlučne telefonických kontaktov 30 %. Vykázanie samotného kombinovaného čísla 70 % by zakrylo, že veľká časť „telemedicíny“ je tu iba zvuková, čo zvyčajne prináša iný klinický rizikový profil a skúsenosť pacienta než video.

## Zdroje údajov a výhrady

Typ kontaktu sa zvyčajne zaznamenáva buď ako štruktúrované pole v elektronickej zdravotnej dokumentácii (typ návštevy alebo miesto), alebo sa odvodzuje z fakturačných kódov, ako je kód miesta poskytnutia služby alebo telemedicínsky modifikátor v nároku. Prax kódovania sa medzi organizáciami, ba aj medzi klinickými pracovníkmi tej istej organizácie, podstatne líši, a porovnanie mier medzi pracoviskami by preto malo najprv potvrdiť, že „telemedicína“ sa kóduje všade rovnako. Návšteva, ktorá sa začne ako video, no pre technický problém prejde na telefón, by sa mala kódovať konzistentne (bežne ako modalita, ktorá niesla väčšinu klinického obsahu) a toto pravidlo by sa malo zdokumentovať, a nie ponechať na individuálny úsudok.

## Nástrahy

- **Počítanie pokusov namiesto dokončených návštev**: telemedicínsky termín, pri ktorom sa nepodarilo pripojiť a bol znovu zarezervovaný, by nemal nafúknuť menovateľa telemedicíny dvakrát.
- **Považovanie videa a telefónu za zameniteľné**: majú odlišné klinické dôsledky aj dôsledky pre rovnosť (telefón vylučuje vizuálne posúdenie, no je prístupnejší pre pacientov bez smartfónu, spoľahlivých dát alebo súkromného priestoru na video); ak je to možné, vždy ich vykazujte osobitne.
- **Ignorovanie vzťahu k neprichodom**: správanie pri neprichodoch sa často líši podľa modality; pred vyvodením záverov o „zlepšenom prístupe“ len z rastúcej miery telemedicíny si pozrite [mieru neprichodov na termíny](../miera-neprichodov-na-termíny/).
- **Považovanie vysokej miery za samo osebe dobrú**: pri niektorých ochoreniach a typoch konzultácií je primeraná miera telemedicíny nízka z klinického dôvodu, nie preto, že by zlyhala digitálna zrelosť.

## Zdroje

- Centers for Medicare & Medicaid Services (CMS), údaje o využívaní telemedicíny v Medicare a politické publikácie
- NHS England, štatistiky aktivity ambulantných a komunitných služieb vrátane rozčlenenia virtuálnych/vzdialených návštev
- Recenzovaná literatúra o trendoch využívania telemedicíny a výsledkoch podľa modality
