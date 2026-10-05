# Wskaźnik Regularności Zaangażowania Pacjentów

Wskaźnik regularności zaangażowania pacjentów mierzy, jak regularnie zapisany pacjent wchodzi w interakcję z produktem zdrowia cyfrowego w czasie — na przykład rejestrując posiłki lub objawy, zapisując aktywność fizyczną albo przeglądając dane zdrowotne — a nie tylko to, czy w ogóle z niego korzystał. Jest to metryka podłużna, odrębna od punktowej liczby aktywnych użytkowników: dwaj pacjenci mogą mieć identyczny status "korzystał z aplikacji w tym miesiącu", podczas gdy jeden rejestruje dane konsekwentnie każdego dnia, a drugi raz się zaloguje i znika na trzy tygodnie, i tylko metryka regularności ich rozróżnia.

## Dlaczego to ważne

Trwała, regularna interakcja z narzędziem zdrowia cyfrowego jest jednym z bardziej wiarygodnych wskaźników wyprzedzających korzyści klinicznej, zwłaszcza w schorzeniach zależnych od zachowań, takich jak cukrzyca, kontrola masy ciała i zdrowie psychiczne, gdzie wartość narzędzia wynika z nawyku, który wspiera, a nie z żadnej pojedynczej sesji. Produkt może raportować zdrową miesięczną liczbę aktywnych użytkowników, w rzeczywistości obsługując populację, która loguje się raz i odpływa, ponieważ miesięczna aktywność to niski próg, który nic nie mówi o wzorcu użytkowania w obrębie miesiąca; metryki regularności wychwytują to w sposób, jakiego nie zapewnią proste liczby aktywności. Ponieważ regularność jest również jedną z trudniejszych rzeczy do utrzymania przez miesiące, a nie tygodnie, jest uczciwszym sygnałem jakości produktu i dopasowania klinicznego niż wskaźniki zaangażowania w krótkim oknie, podatne na efekty nowości tuż po wdrożeniu.

## Jak to się oblicza

```
Wskaźnik regularności zaangażowania = tygodnie z co najmniej jedną
                               kwalifikującą się interakcją / łączna
                               liczba tygodni uczestnictwa × 100

"Kwalifikującą się interakcję" należy zdefiniować jawnie i konsekwentnie
(np. wpis posiłku, zgłoszenie objawów lub ukończona synchronizacja
aktywności) — nigdy jako zdarzenie bierne, takie jak otwarcie aplikacji
bez zarejestrowanego działania.

Raportuj jako rozkład, a nie tylko średnią populacji:
  np. odsetek pacjentów z regularnością tygodniową ≥ 80%,
      odsetek z 50-79%, odsetek z < 50%
```

## Praktyczny przykład

Aplikacja do coachingu żywieniowego obejmuje pacjenta 12-tygodniowym programem. Pacjent rejestruje co najmniej jeden kwalifikujący się wpis o posiłku w 9 z tych 12 tygodni, co daje indywidualny wskaźnik regularności zaangażowania równy 9 / 12 × 100 = 75%. W pełnej kohorcie 2000 pacjentów objętych aplikacją przez co najmniej 12 tygodni 600 pacjentów (30%) utrzymuje regularność tygodniową ≥ 80%, 900 (45%) mieści się w przedziale 50-79%, a 500 (25%) spada poniżej 50%. Raportowanie samej średniej kohorty (która mogłaby wynosić około 65%) zaciemniłoby fakt, że pełna ćwierć pacjentów ledwo się angażuje — segment wart osobnego zbadania, a nie rozcieńczenia w ogólnej średniej.

## Źródła danych i zastrzeżenia

Dane o regularności pochodzą z własnych dzienników zdarzeń produktu (wpisy posiłków, synchronizacje aktywności, zgłoszenia), a definicja "kwalifikującej się interakcji" ma ogromny wpływ na wynikowy wskaźnik — definicja łagodna (każde otwarcie aplikacji) zawsze będzie wyglądać lepiej niż ścisła (ukończony, znaczący wpis), więc zastosowaną definicję należy jasno podać obok każdej raportowanej wartości. Dane synchronizowane automatycznie (na przykład podłączona opaska fitness synchronizująca aktywność w tle) należy raportować osobno od danych wprowadzanych ręcznie, ponieważ automatyczna synchronizacja może zawyżać pozorną regularność, nie odzwierciedlając żadnego aktywnego wysiłku pacjenta ani zaangażowania w wytyczne produktu.

## Pułapki

- **Utożsamianie otwarć aplikacji ze znaczącym zaangażowaniem**: bierne otwarcie aplikacji (na przykład wywołane powiadomieniem push) nie jest tym samym co zarejestrowany wpis posiłku lub ukończone zgłoszenie; definiuj i raportuj wyłącznie interakcje kwalifikujące się.
- **Raportowanie wyłącznie średniej populacji**: zdrowo wyglądająca średnia regularność może ukrywać populację dwumodalną, złożoną z pacjentów bardzo zaangażowanych i niemal całkowicie niezaangażowanych; raportuj rozkład w przedziałach regularności, a nie tylko średnią.
- **Ignorowanie mianownika długości uczestnictwa**: porównywanie wskaźników regularności między pacjentami uczestniczącymi przez bardzo różne okresy, bez uwzględnienia czasu trwania uczestnictwa, zaburzy wynik na korzyść grupy, która miała krótsze, łatwiejsze do utrzymania okno pomiarowe.
- **Automatyczna synchronizacja w tle zawyżająca wskaźnik**: biernie synchronizowany strumień danych z urządzenia noszonego może sprawić, że niezaangażowany pacjent będzie wyglądał na konsekwentnie aktywnego, bez żadnej rzeczywistej zmiany zachowania ani zaangażowania w produkt z jego strony.

## Źródła

- Literatura recenzowana dotycząca wzorców zaangażowania w zdrowiu cyfrowym i ich związku z wynikami klinicznymi, na przykład badania opublikowane w Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), wytyczne dotyczące jakości danych zdrowotnych generowanych przez pacjentów i pomiaru zaangażowania
- Digital Therapeutics Alliance, wytyczne najlepszych praktyk dotyczące pomiaru zaangażowania i wyników w terapiach cyfrowych

Zobacz także: [wskaźnik utrzymania użytkowników](../wskaźnik-utrzymania-użytkowników/), ściśle powiązana metryka tego, czy pacjent w ogóle pozostaje w programie, odmienna od tego, jak konsekwentnie angażuje się w trakcie uczestnictwa.
