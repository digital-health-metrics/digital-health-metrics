# Wskaźnik Ukończenia ePROM

Wskaźnik ukończenia ePROM mierzy odsetek zaplanowanych elektronicznych miar wyników zgłaszanych przez pacjentów (ePROM) — ustandaryzowanych, zwalidowanych kwestionariuszy ujmujących własną relację pacjenta o objawach, sprawności lub jakości życia, dostarczanych cyfrowo, a nie na papierze — które zostały faktycznie ukończone. Jest to w równym stopniu metryka jakości danych, co zaangażowania: wartość kliniczna i badawcza programu PROM zależy całkowicie od tego, czy wskaźnik ukończenia jest na tyle wysoki, aby zebrane odpowiedzi były reprezentatywne dla całej populacji uczestników, a nie tylko dla najbardziej zaangażowanej lub najmniej objawowej podgrupy.

## Dlaczego to ważne

Wyniki zgłaszane przez pacjentów są bezpośrednim, poświadczonym przez pacjenta uzupełnieniem danych rejestrowanych przez klinicystę lub mierzonych urządzeniem, ujmując wymiary zdrowia — ból, sprawność, jakość życia — których nie uchwyci przegląd dokumentacji ani odczyt biometryczny; cyfryzacja zbierania PROM istnieje właśnie po to, aby zbieranie tych danych w dużej skali było tańsze i łatwiejsze, niż kiedykolwiek pozwalało na to podawanie ich na papierze. Program PROM o niskim wskaźniku ukończenia naraża się jednak na konkretne i poważne obciążenie: pacjenci, którzy czują się gorzej, są często mniej skłonni do wypełnienia długiego kwestionariusza, więc malejący wskaźnik ukończenia może sam być wczesnym sygnałem ostrzegawczym pogarszającego się zdrowia populacji, a niski ogólny wskaźnik ukończenia może sprawiać, że zebrane odpowiedzi wyglądają lepiej niż rzeczywiste doświadczenie populacji, po prostu dlatego że najbardziej objawowi pacjenci są niedoreprezentowani w tym, co zostaje ukończone. Dlatego wskaźnik ukończenia należy zawsze raportować obok samych wyników PROM, a nie traktować go jako drugorzędnego szczegółu operacyjnego.

## Jak to się oblicza

```
Wskaźnik ukończenia ePROM = w pełni ukończone ePROM / wysłane lub
                             zaplanowane ePROM × 100

Raportuj osobno:
  Początkowy wskaźnik ukończenia   (pierwszy kwestionariusz w sekwencji
                                     monitorowania)
  Podłużny wskaźnik ukończenia     (kolejne kwestionariusze w trwającej
                                     sekwencji monitorowania, który
                                     zazwyczaj maleje w czasie i powinien
                                     być śledzony jako trend, a nie jedna
                                     wartość)

Kwestionariusz "częściowo ukończony" należy zdefiniować i raportować
osobno zarówno od "w pełni ukończonego", jak i "nierozpoczętego".
```

## Praktyczny przykład

Poradnia onkologiczna wysyła zwalidowany ePROM dotyczący obciążenia objawami do 400 pacjentów przed każdą comiesięczną wizytą kontrolną. W pierwszym miesiącu 340 pacjentów w pełni wypełnia kwestionariusz (wskaźnik ukończenia 85%), 30 wypełnia go częściowo, a 30 go nie rozpoczyna. W szóstym miesiącu tej samej sekwencji monitorowania liczba pełnych odpowiedzi spada do 260 w tej samej 400-osobowej kohorcie (65%) — istotny spadek podłużny, który zostałby całkowicie przeoczony, gdyby raportowano tylko pierwszomiesięczną wartość 85% jako statyczną ogólną metrykę. Zbadanie, którzy pacjenci odpadają (według nasilenia objawów, stadium choroby lub wieku), może ujawnić, czy spadek odzwierciedla zmęczenie ankietami, pogarszające się objawy utrudniające wypełnienie kwestionariusza, czy techniczną barierę dostępu.

## Źródła danych i zastrzeżenia

Dane o ukończeniu pochodzą z własnych dzienników dostarczania i odpowiedzi platformy ePROM, które potrafią rozróżnić stany "nierozpoczęty", "częściowo ukończony" i "w pełni ukończony" — rozróżnienie to należy zawsze zachować i raportować, a nie zwijać do binarnej wartości ukończony/nieukończony, ponieważ częściowe ukończenie często wskazuje konkretny punkt w kwestionariuszu, w którym pacjenci napotykają trudności lub przestają się angażować. Wskaźnik ukończenia należy interpretować z uwzględnieniem sposobu dostarczania kwestionariusza (link w wiadomości tekstowej, powiadomienie aplikacji lub metoda wymagająca logowania do portalu), ponieważ samo tarcie w dostarczaniu wpływa na ukończenie niezależnie od treści kwestionariusza lub stanu pacjenta. Do samego PROM należy zawsze stosować zwalidowane narzędzie (a nie doraźny zestaw pytań), ponieważ wskaźnik ukończenia dla niezwalidowanego narzędzia nie mówi nic wiarygodnego o klinicznej użyteczności uzyskanych danych, nawet jeśli ukończenie jest wysokie.

## Pułapki

- **Traktowanie malejącego wskaźnika ukończenia wyłącznie jako problemu dostarczania**: podłużny spadek ukończenia może odzwierciedlać rzeczywiście pogarszające się objawy pacjentów (zbyt chorych, aby wypełnić ankietę), a nie zmęczenie ankietami czy problem techniczny, i to rozróżnienie ma ogromne znaczenie dla interpretacji klinicznej.
- **Zwijanie ukończenia częściowego i pełnego do jednej kategorii**: częściowo ukończony kwestionariusz to dane o istotnie innej jakości niż w pełni ukończony; raportuj je osobno i sprawdzaj, w którym miejscu przebiegu kwestionariusza pacjenci zwykle go porzucają.
- **Raportowanie wskaźnika ukończenia bez raportowania ryzyka błędu odpowiedzi**: umiarkowany wskaźnik ukończenia powinien skłaniać do zbadania, czy respondenci systematycznie różnią się (nasileniem objawów, wiekiem, kompetencjami cyfrowymi) od osób niebiorących udziału, ponieważ wyniki PROM obliczone wyłącznie od respondentów mogą błędnie odzwierciedlać całą populację.
- **Używanie niezwalidowanego lub własnoręcznie opracowanego kwestionariusza**: wskaźnik ukończenia jest pozbawiony znaczenia jako sygnał jakości danych, jeśli wypełniane narzędzie samo nie zostało klinicznie zwalidowane dla mierzonego schorzenia i populacji.

## Źródła

- International Consortium for Health Outcomes Measurement (ICHOM), opracowanie standardowych zestawów i wytyczne wdrażania PROM
- U.S. Food and Drug Administration (FDA), wytyczne dotyczące miar wyników zgłaszanych przez pacjentów w badaniach klinicznych i zgłoszeniach regulacyjnych
- Literatura recenzowana dotycząca wdrażania elektronicznych PROM i wskaźników ich ukończenia, na przykład badania opublikowane w Quality of Life Research i Journal of Medical Internet Research (JMIR)

Zobacz także: [wskaźnik Net Promoter Score pacjentów](../wskaźnik-net-promoter-score-pacjentów/), pokrewna, lecz odrębna metryka zgłaszana przez pacjentów, mierząca satysfakcję, a nie wynik kliniczny.
