# Wskaźnik Kompetencji Cyfrowych w Zdrowiu

Wskaźnik kompetencji cyfrowych w zdrowiu mierzy odsetek populacji pacjentów zdolnych samodzielnie i skutecznie wykonać typowe zadania na platformie zdrowia cyfrowego — zalogować się, umówić wizytę, dołączyć do wizyty wideo lub odczytać wynik badania — bez pomocy innej osoby. Różni się od wskaźnika dostępu cyfrowego i należy go zawsze mierzyć osobno: pacjent może mieć smartfon i łącze szerokopasmowe, a mimo to nie być w stanie samodzielnie obsłużyć platformy telemedycznej, a utożsamianie obu metryk ukrywa dokładnie tę populację, którą ta metryka ma ujawniać.

## Dlaczego to ważne

Sam dostęp cyfrowy nie gwarantuje, że pacjent może skutecznie korzystać z usługi zdrowia cyfrowego: pacjenci o niższych kompetencjach zdrowotnych, ograniczonym ogólnym doświadczeniu z technologią, zaburzeniach poznawczych lub wzroku albo barierach językowych w interfejsie platformy mogą mieć pełny dostęp techniczny, a mimo to nie ukończyć zadania samodzielnie, i ta luka jest systematycznie skorelowana z tymi samymi grupami demograficznymi, które już mierzą się z innymi nierównościami zdrowotnymi. HIMSS Digital Health Equity Measurement Framework traktuje kompetencje cyfrowe jako odrębny filar względem dostępu właśnie z tego powodu: zlikwidowanie luki w dostępie bez zajęcia się luką w kompetencjach może pozostawić populację technicznie połączoną, lecz funkcjonalnie niezdolną do czerpania korzyści. Organizacje, które mierzą ukończenie zadań i czas do ukończenia typowych działań na platformie, w podziale na język i wskaźniki społeczno-ekonomiczne, potrafią identyfikować bariery kompetencyjne i kierować wsparcie (uproszczone interfejsy, wspomagane wdrożenie, treści w innych językach) znacznie precyzyjniej niż organizacje polegające wyłącznie na metrykach dostępu lub ogólnych wynikach satysfakcji.

## Jak to się oblicza

```
Wskaźnik kompetencji cyfrowych = pacjenci, którzy samodzielnie wykonują
                                  zdefiniowane zadanie bez pomocy /
                                  pacjenci, którzy próbują wykonać to
                                  zadanie × 100

Typowe mierzone zadania: logowanie do konta, umawianie wizyty, dołączanie
do wizyty wideo, przeglądanie wyniku badania, wypełnianie formularza
przyjęcia.

Raportuj dla każdego zadania osobno, a nie jako jeden zbiorczy wynik,
ponieważ kompetencje dla zadań prostych (logowanie) i złożonych
(wypełnianie wieloetapowego formularza przyjęcia) znacząco się różnią,
a ich łączenie zaciemnia, gdzie leży konkretna bariera.
```

## Praktyczny przykład

System opieki zdrowotnej śledzi dołączanie do wizyty wideo jako zdefiniowane zadanie w 5000 zaplanowanych wizyt telemedycznych w miesiącu. Spośród nich 4100 pacjentów dołącza pomyślnie bez telefonu do wsparcia i bez pomocy technicznej w trakcie wizyty (wskaźnik kompetencji cyfrowych dla tego zadania: 82%). Segmentacja według języka podstawowego pokazuje wskaźnik 89% dla pacjentów anglojęzycznych wobec 61% dla pacjentów, których język podstawowy różni się od domyślnego języka interfejsu platformy — luka 28 punktów, która byłaby niewidoczna, gdyby raportowano tylko zbiorczą wartość 82%, i która wskazuje bezpośrednio na konkretną, możliwą do wdrożenia interwencję (przetłumaczony interfejs i instrukcje), a nie na niejasny ogólny problem kompetencji.

## Źródła danych i zastrzeżenia

Dane o ukończeniu zadań są zazwyczaj pozyskiwane z własnych dzienników zdarzeń platformy (czy pacjent dotarł do wizyty wideo, czy ścieżka umawiania wizyty zakończyła się bez porzucenia), uzupełnione danymi o kontaktach z infolinią lub działem wsparcia w celu zidentyfikowania zadań, które technicznie zostały "ukończone" tylko dlatego, że pacjent otrzymał pomoc na żywo w trakcie. Zadanie liczone jako "ukończone" wyłącznie na podstawie dzienników systemowych może maskować fakt, że pacjent potrzebował telefonu od członka rodziny lub personelu wsparcia, aby do tego dojść — rzeczywiście niezależne od kompetencji ukończenie należy zdefiniować i śledzić osobno od ukończenia wspomaganego wszędzie tam, gdzie platforma potrafi je odróżnić. Kompetencje cyfrowe korelują z kompetencjami zdrowotnymi i ogólną umiejętnością czytania i pisania, lecz analitycznie są od nich odrębne; wszędzie tam, gdzie wymagana jest formalna ocena, należy stosować zwalidowane narzędzie (a nie nieformalne założenie oparte wyłącznie na wieku lub danych demograficznych).

## Pułapki

- **Utożsamianie kompetencji cyfrowych z dostępem cyfrowym**: pacjent z pełnym dostępem technicznym może nadal nie mieć kompetencji, by skutecznie z niego korzystać; są to odrębne metryki wymagające odrębnych interwencji i nigdy nie należy ich raportować jako jednej łącznej wartości.
- **Zaliczanie ukończeń wspomaganych jako samodzielnych sukcesów**: jeśli pacjent ukończył zadanie tylko dzięki telefonowi do wsparcia lub pomocy członka rodziny, jest to luka kompetencyjna, którą platforma zakryła, a nie rozwiązała; rozróżniaj ukończenie wspomagane od samodzielnego wszędzie, gdzie dane na to pozwalają.
- **Raportowanie jednego zbiorczego wyniku ukończenia zadań**: kompetencje dla zadania prostego (logowanie) i złożonego (wypełnienie szczegółowego formularza przyjęcia) znacząco się różnią; raportuj dla każdego zadania, aby zidentyfikować dokładnie, gdzie leży bariera.
- **Zakładanie, że sam wiek przewiduje kompetencje cyfrowe**: choć wiek korelacyjnie wiąże się z niższymi kompetencjami cyfrowymi w ujęciu zagregowanym, znajomość języka interfejsu platformy i ogólna biegłość w technologii są często silniejszymi predyktorami indywidualnymi i należy je mierzyć bezpośrednio, a nie wnioskować z wieku.

## Źródła

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), badania dotyczące użyteczności technologii informacyjnych w ochronie zdrowia i kompetencji cyfrowych w zdrowiu
- Literatura recenzowana dotycząca pomiaru i interwencji w zakresie kompetencji cyfrowych w zdrowiu, na przykład badania opublikowane w Journal of Medical Internet Research (JMIR)

Zobacz także: [wskaźnik dostępu cyfrowego](../wskaźnik-dostępu-cyfrowego/), metryka warunku wstępnego, z którą ta jest najczęściej, i najczęściej błędnie, utożsamiana.
