# Wskaźnik Net Promoter Score Pacjentów

Net Promoter Score (NPS) pacjentów mierzy gotowość pacjentów do polecenia produktu zdrowia cyfrowego lub usługi telemedycznej innym osobom, na podstawie jednego pytania ankietowego — "Jak prawdopodobne jest, że polecisz tę usługę znajomemu lub współpracownikowi?" — ocenianego w skali od 0 do 10. Respondenci oceniający na 9-10 to "promotorzy", 7-8 to "pasywni", a 0-6 to "krytycy"; NPS to odsetek promotorów minus odsetek krytyków. Jest to najczęściej stosowana, a zarazem najczęściej krytykowana metryka satysfakcji pacjentów w zdrowiu cyfrowym, ceniona za prostotę, lecz ograniczona w tym, co sama potrafi zdiagnozować.

## Dlaczego to ważne

NPS daje zespołom zdrowia cyfrowego prosty, ustandaryzowany, porównywalny sygnał satysfakcji, tani w zbieraniu i łatwy do zinterpretowania na pierwszy rzut oka dla interesariuszy niebędących specjalistami (kadry kierowniczej, zarządów, zamawiających), dlatego pozostaje popularny mimo dobrze udokumentowanych ograniczeń metodologicznych. W przypadku telemedycyny i cyfrowych "drzwi wejściowych" do opieki NPS jest często wskaźnikiem wyprzedzającym tego, czy pacjenci będą nadal wybierać kanał cyfrowy zamiast alternatywy osobistej, gdy dostępne są obie, co ma bezpośrednie znaczenie dla planowania miksu kanałów i zdolności przyjmowania pacjentów. NPS jest jednak pojedynczą, ogólną liczbą podsumowującą: spadający NPS mówi zespołowi, że coś jest nie tak, ale nie co, więc aby był użyteczny w działaniu, a nie tylko liczbą w tablicy wyników, należy go zawsze łączyć z otwartymi komentarzami tekstowymi lub bardziej szczegółowym narzędziem oceny użyteczności.

## Jak to się oblicza

```
NPS = % promotorów (ocena 9-10) − % krytyków (ocena 0-6)

Wynik jest liczbą od −100 do +100, a nie odsetkiem, mimo że jest
wyprowadzony z odsetków — nigdy nie dopisuj znaku "%" do wartości NPS.

Raportuj obok:
  wskaźnik odpowiedzi (% ankietowanych pacjentów, którzy odpowiedzieli)
  wielkość próby
  dokładne sformułowanie użytego pytania
```

## Praktyczny przykład

Platforma telemedyczna ankietuje 1000 pacjentów po konsultacji wideo i otrzymuje 400 odpowiedzi (wskaźnik odpowiedzi 40%). Spośród tych 400 respondentów 220 ocenia na 9-10 (promotorzy, 55%), 100 na 7-8 (pasywni, 25%), a 80 na 0-6 (krytycy, 20%). NPS wynosi 55 − 20 = 35. Ta wartość ma znaczenie tylko w kontekście: NPS równy 35 może być mocnym wynikiem w porównaniu z szerszą branżą telemedyczną albo niepokojącym spadkiem w porównaniu z wynikiem 48 tej samej platformy w poprzednim kwartale — NPS jest znacznie bardziej użyteczny jako trend jednego produktu w czasie niż jako bezwzględny jednorazowy punkt odniesienia względem innego.

## Źródła danych i zastrzeżenia

NPS zbiera się za pomocą ankiety po interakcji, zazwyczaj uruchamianej bezpośrednio po wizycie wideo, sesji w aplikacji lub epizodzie opieki, a wskaźnik odpowiedzi ma ogromne znaczenie: niski wskaźnik odpowiedzi (znacznie poniżej około 40% z praktycznego przykładu) grozi błędem braku odpowiedzi, gdy odpowiadają tylko pacjenci silnie zadowoleni lub silnie niezadowoleni, co przesuwa wynik ku skrajnościom i oddala od rzeczywistych nastrojów populacji. Porównywanie NPS między organizacjami, a nawet między różnymi kanałami jednej organizacji (na przykład telemedycyna a wizyta osobista), jest uprawnione tylko wtedy, gdy sformułowanie pytania, moment i populacja ankietowana są naprawdę porównywalne; wiadomo, że niewielkie zmiany sformułowania mierzalnie przesuwają wyniki. NPS należy traktować jako wynik do wyjaśnienia, a nie cel sam w sobie — otwarte komentarze tekstowe, które zwykle towarzyszą ankiecie NPS, są zazwyczaj bardziej użyteczne w działaniu niż sam wynik.

## Pułapki

- **Porównywanie wartości NPS zebranych przy różnym sformułowaniu pytania lub w różnym czasie**: nawet drobne różnice w projekcie ankiety mogą przesunąć wyniki o kilka punktów, co czyni międzyorganizacyjny benchmarking NPS znacznie mniej wiarygodnym, niż się wydaje.
- **Ignorowanie wskaźnika odpowiedzi**: główny NPS obliczony przy 10% odpowiedzi jest znacznie mniej wiarygodny niż obliczony przy 60% odpowiedzi, ponieważ niskie wskaźniki odpowiedzi są podatne na błąd braku odpowiedzi w stronę najbardziej skrajnych opinii.
- **Traktowanie NPS jako narzędzia diagnostycznego, a nie metryki podsumowującej**: spadający NPS mówi, że coś jest nie tak, ale nigdy nie mówi co; należy go zawsze łączyć z opinią jakościową lub bardziej szczegółowym narzędziem oceny satysfakcji lub użyteczności, aby zidentyfikować przyczynę.
- **Gonienie za NPS jako celem samym w sobie**: wąska optymalizacja pod liczbę NPS (na przykład ankietowanie pacjentów wyłącznie po nietypowo pozytywnych interakcjach) może poprawić raportowany wynik, nie czyniąc faktycznego doświadczenia pacjenta lepszym, a wręcz je pogarszając.

## Źródła

- Bain & Company, oryginalna metodologia Net Promoter System i wytyczne benchmarkingu
- Agency for Healthcare Research and Quality (AHRQ), program ankiet doświadczeń pacjentów CAHPS (Consumer Assessment of Healthcare Providers and Systems), jako komplementarna, bardziej szczegółowa alternatywa
- Literatura recenzowana dotycząca stosowania i ograniczeń Net Promoter Score w placówkach opieki zdrowotnej, na przykład badania opublikowane w Journal of Medical Internet Research (JMIR)

Zobacz także: [wskaźnik utrzymania użytkowników](../wskaźnik-utrzymania-użytkowników/), ponieważ satysfakcja zgłaszana przez pacjentów i faktyczne dalsze korzystanie z produktu często się rozchodzą i warto śledzić je jako odrębne sygnały.
