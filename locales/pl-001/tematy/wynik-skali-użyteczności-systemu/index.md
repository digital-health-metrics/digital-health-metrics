# Wynik Skali Użyteczności Systemu

Wynik Skali Użyteczności Systemu (SUS) to ustandaryzowany, 10-pytaniowy kwestionariusz służący do ilościowego określenia, jak użyteczne jest oprogramowanie, dający jeden wynik od 0 do 100, który można porównywać z dobrze ugruntowanymi normami branżowymi. W przeciwieństwie do Net Promoter Score, który mierzy gotowość do polecenia, lub miar wyników zgłaszanych przez pacjentów, które mierzą stan kliniczny lub funkcjonalny, SUS mierzy jedną konkretną rzecz: jak łatwo samo oprogramowanie daje się opanować i używać, przez pacjentów lub personel kliniczny.

## Dlaczego to ważne

Narzędzie zdrowia cyfrowego może mieć mocne dowody kliniczne i przekonujące uzasadnienie biznesowe, a mimo to zawieść w praktyce, ponieważ pacjenci lub klinicyści uznają interfejs za mylący, wolny lub frustrujący w użyciu — a ponieważ SUS jest zwalidowanym, szeroko stosowanym narzędziem z dziesięcioleciami opublikowanych danych porównawczych z różnych branż, pozwala zespołowi zdrowia cyfrowego porównać użyteczność własnego produktu ze znanym rozkładem, zamiast polegać na nieformalnych wrażeniach lub anegdotycznych skargach. SUS jest celowo niezależny od technologii i szybki w przeprowadzeniu (zazwyczaj poniżej pięciu minut), co czyni go praktycznym do wielokrotnego stosowania w kolejnych iteracjach projektu, w przeciwieństwie do pełnego badania użyteczności lub formalnego badania klinicznego. Ponieważ błędy użyteczności skierowane do klinicystów są udokumentowanym czynnikiem wypalenia (zob. wskaźnik wypalenia zawodowego lekarzy), a błędy użyteczności skierowane do pacjentów są udokumentowanym czynnikiem porzucania i słabych wyników w zakresie kompetencji cyfrowych (zob. wskaźnik kompetencji cyfrowych w zdrowiu), SUS działa jako tani sygnał wczesnego ostrzegania o użyteczności, który może wychwycić problem projektowy, zanim ujawni się w tych bardziej doniosłych metrykach następczych.

## Jak to się oblicza

```
Wynik SUS = ((suma wyników pozycji nieparzystych − 5) +
             (25 − suma wyników pozycji parzystych)) × 2,5

Wynik jest pojedynczą wartością od 0 do 100 (nie odsetkiem, mimo skali,
ponieważ nie przedstawia "odsetka poprawnych" ani podobnej wielkości).

Opublikowana interpretacja punktów odniesienia (Bangor i in.):
  Powyżej 80 — doskonała użyteczność
  68         — przeciętna, na podstawie szerokiej normy branżowej
  Poniżej 51 — słaba użyteczność, wymagająca zbadania
```

## Praktyczny przykład

Platforma telemedyczna przeprowadza standardowy 10-pytaniowy kwestionariusz SUS wśród 150 pacjentów po ich pierwszej wizycie wideo. Obliczony średni wynik SUS dla wszystkich respondentów wynosi 74. W porównaniu z powszechnie przywoływaną średnią branżową 68 wskazuje to na ponadprzeciętną użyteczność dla tej konkretnej populacji pacjentów i zastosowania, choć nadal istotnie poniżej "doskonałego" progu 80, który sugerowałby niewiele pozostałych barier użyteczności. Segmentacja tych samych 150 odpowiedzi według wieku pokazuje średni wynik 81 dla pacjentów poniżej 50 lat i 62 dla pacjentów w wieku 65 lat i starszych — luka wskazująca na konkretny, możliwy do rozwiązania problem użyteczności dla starszych pacjentów, a nie ogólny problem użyteczności produktu, i taka, którą pojedyncza zbiorcza średnia by ukryła.

## Źródła danych i zastrzeżenia

Dane SUS pochodzą bezpośrednio od pacjentów lub klinicystów wypełniających ustandaryzowany 10-pytaniowy kwestionariusz, a narzędzie musi być stosowane dokładnie tak, jak zostało zwalidowane (te same 10 pozycji, ta sama 5-stopniowa skala zgodności, ten sam wzór punktacji), aby uzyskany wynik był porównywalny z opublikowanymi punktami odniesienia; zmodyfikowana lub skrócona wersja kwestionariusza, choćby w najlepszych intencjach, daje wynik, którego nie da się wiarygodnie interpretować względem standardowego rozkładu punktów odniesienia. SUS mierzy postrzeganą użyteczność, która koreluje z obiektywnym powodzeniem w wykonywaniu zadań, ale mu nie jest równa (zob. wskaźnik kompetencji cyfrowych w zdrowiu jako miarę opartą na ukończeniu zadań); produkt może mieć dobry wynik SUS od pacjentów, którzy nie próbowali bardziej złożonych funkcji, więc połączenie SUS z obiektywnymi danymi o ukończeniu zadań daje pełniejszy obraz niż każde z nich osobno. Czas odpowiedzi ma znaczenie: przeprowadzenie SUS tuż po frustrującym konkretnym incydencie (nieudane połączenie, mylący krok) w porównaniu z po płynnej sesji może przesunąć wyniki niezależnie od ogólnej użyteczności produktu.

## Pułapki

- **Modyfikowanie pozycji standardowego kwestionariusza lub punktacji**: nawet drobne zmiany sformułowań lub skali unieważniają porównanie z dobrze ugruntowanym, opublikowanym rozkładem punktów odniesienia; stosuj standardowe 10-pozycyjne narzędzie dokładnie tak, jak zostało zwalidowane.
- **Raportowanie samego średniego wyniku bez segmentacji**: użyteczność często znacząco różni się w zależności od wieku użytkownika, kompetencji cyfrowych lub roli (pacjent a klinicysta); raportuj w segmentach, aby znaleźć konkretne, możliwe do usunięcia luki użyteczności, które pojedyncza średnia ukrywa.
- **Traktowanie SUS jako miary skuteczności klinicznej**: SUS mierzy konkretnie użyteczność, a nie wynik kliniczny ani satysfakcję z opieki; wysoce użyteczne narzędzie może nadal nie poprawiać wyników klinicznych i nigdy nie należy ich mylić ani zastępować jednego drugim.
- **Przeprowadzanie ankiety wyłącznie po wyjątkowo płynnych lub wyjątkowo frustrujących sesjach**: czas i kontekst przeprowadzenia mogą obciążać wynik; stosuj ankietę konsekwentnie w reprezentatywnej próbie rzeczywistych sesji, a nie tylko dogodnych lub selektywnie wybranych.

## Źródła

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", oryginalnie opublikowane narzędzie
- Bangor, Kortum i Miller, opublikowane badania porównawcze SUS ustanawiające powszechnie przywoływane przedziały interpretacji wyników
- Literatura recenzowana dotycząca stosowania SUS w ewaluacji użyteczności zdrowia cyfrowego i telemedycyny, na przykład badania opublikowane w JMIR Human Factors

Zobacz także: [wskaźnik Net Promoter Score pacjentów](../wskaźnik-net-promoter-score-pacjentów/), pokrewna, lecz odrębna metryka zgłaszana przez pacjentów, mierząca satysfakcję i lojalność, a nie konkretnie użyteczność oprogramowania.
