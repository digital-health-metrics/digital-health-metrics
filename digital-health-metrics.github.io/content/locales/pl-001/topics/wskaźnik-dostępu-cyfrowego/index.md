# Wskaźnik Dostępu Cyfrowego

Wskaźnik dostępu cyfrowego mierzy odsetek kwalifikującej się populacji pacjentów, która ma praktyczne możliwości korzystania z produktu zdrowia cyfrowego w ogóle: szerokopasmowe lub niezawodne mobilne połączenie transmisji danych, urządzenie z dostępem do internetu oraz aktywne konto w odpowiednim portalu lub aplikacji pacjenta. Jest to metryka warunku wstępnego dla każdej innej miary zdrowia cyfrowego w tej książce — populacja nie może zarejestrować się w żadnym produkcie zdrowia cyfrowego, angażować się w niego ani z niego korzystać, jeśli strukturalnie nie może do niego dotrzeć, bez względu na to, jak dobrze został zaprojektowany.

## Dlaczego to ważne

Metryki adopcji i zaangażowania w zdrowiu cyfrowym milcząco zakładają populację, która już ma dostęp cyfrowy, a raportowanie wskaźników adopcji lub zaangażowania bez uprzedniego ustalenia bazowego wskaźnika dostępu grozi cichym wykluczeniem pacjentów, którzy najmniej prawdopodobnie ten dostęp mają — a którzy często są również pacjentami o największych potrzebach zdrowotnych. HIMSS Digital Health Equity Measurement Framework (DHEMF) i podobne ramy traktują dostęp cyfrowy jako podstawową metrykę równości pierwszego rzędu właśnie dlatego, że interwencje budowane bez uwzględnienia luk w dostępie mają tendencję do utrwalania, a nie zmniejszania istniejących nierówności zdrowotnych: strategia oparta przede wszystkim na telemedycynie może nieumyślnie ograniczyć dostęp do opieki pacjentom bez niezawodnego połączenia lub urządzenia, nawet jeśli mierzalnie poprawia doświadczenie pacjentów, którzy już mieli jedno i drugie. Wskaźnik dostępu cyfrowego należy śledzić i raportować według segmentów demograficznych i geograficznych, ponieważ średnie krajowe lub obejmujące całą organizację rutynowo maskują duże luki dla określonych populacji.

## Jak to się oblicza

```
Wskaźnik dostępu cyfrowego = pacjenci z łącznością szerokopasmową/mobilną
                              ORAZ urządzeniem z dostępem do internetu ORAZ
                              aktywnym kontem w portalu lub aplikacji
                              pacjenta / łączna liczba kwalifikujących się
                              pacjentów × 100

Raportuj osobno każdy podskładnik, a także wskaźnik łączny:
  Wskaźnik łączności          = pacjenci z niezawodnym połączeniem
                                 z internetem / kwalifikująca się populacja
                                 × 100
  Wskaźnik posiadania urządzeń = pacjenci z urządzeniem z dostępem do
                                 internetu / kwalifikująca się populacja
                                 × 100
  Wskaźnik aktywacji portalu  = pacjenci z aktywnym kontem w portalu/
                                 aplikacji / kwalifikująca się populacja
                                 × 100 (zob. wskaźnik adopcji portalu
                                 pacjenta, aby zobaczyć pełniejszy lejek
                                 adopcji)
```

## Praktyczny przykład

System opieki zdrowotnej obsługuje kwalifikującą się populację 40 000 pacjentów. Ankieta wśród pacjentów i dane o infrastrukturze wskazują, że 34 000 (85%) ma niezawodną łączność szerokopasmową lub mobilną, 33 000 (82,5%) ma urządzenie z dostępem do internetu, a spośród pacjentów spełniających oba warunki 27 000 (67,5% całej kwalifikującej się populacji) ma aktywne konto w portalu pacjenta. Dezagregacja według wieku pokazuje, że pacjenci w wieku 65+ mają łączny wskaźnik dostępu cyfrowego wynoszący zaledwie 48%, w porównaniu z 78% dla pacjentów poniżej 65 lat — luka, którą średnia dla całej organizacji (67,5%) całkowicie zaciemnia, a która powinna bezpośrednio wpływać na to, czy dana usługa może być bezpiecznie oferowana wyłącznie cyfrowo dla tej populacji.

## Źródła danych i zastrzeżenia

Dane o łączności i posiadaniu urządzeń pochodzą zazwyczaj z kombinacji samodzielnych zgłoszeń pacjentów (w drodze ankiety lub kwestionariusza przyjęcia), danych map dostępności łączy szerokopasmowych Federal Communications Commission (FCC) lub równoważnego krajowego organu dla obszaru geograficznego pacjenta oraz danych o aktywacji portalu z własnych systemów organizacji. Dostępność łączy szerokopasmowych na poziomie obszaru (czy operator oferuje usługę w danym kodzie pocztowym) jest słabszym przybliżeniem niż łączność na poziomie gospodarstwa domowego, ponieważ dane o dostępności na poziomie obszaru nie mówią nic o tym, czy konkretnego pacjenta stać na tę usługę lub czy zdecydował się z niej korzystać — wskaźników dostępu na poziomie obszaru i gospodarstwa domowego nie należy utożsamiać. Urządzenia i łączność mogą być również współdzielone w gospodarstwie domowym (na przykład jeden smartfon używany przez kilku członków rodziny), co dane z ankiet na poziomie gospodarstwa domowego uchwytują lepiej niż same dane o logowaniach do portalu na poziomie indywidualnym.

## Pułapki

- **Raportowanie wyłącznie średniej dla całej organizacji**: niezawodnie ukrywa to duże luki w dostępie w przypadku starszych, uboższych, mieszkających na wsi lub w inny sposób cyfrowo zmarginalizowanych segmentów pacjentów; zawsze dezagreguj według segmentów demograficznych i geograficznych.
- **Utożsamianie dostępności łączy szerokopasmowych na poziomie obszaru z rzeczywistym dostępem gospodarstw domowych**: to, że kod pocztowy jest "obsługiwany" przez operatora łączy szerokopasmowych, nie oznacza, że każde gospodarstwo domowe w nim korzysta z tej usługi lub może sobie na nią pozwolić.
- **Traktowanie posiadania urządzenia jako jednorazowego, statycznego faktu**: dostęp do urządzenia może być przejściowy (starzejące się urządzenie, zgubiony lub uszkodzony telefon, przydzielone ponownie urządzenie rodzinne), więc wskaźnik dostępu należy mierzyć cyklicznie, a nie zakładać jego stałości po jednorazowej ocenie.
- **Projektowanie ścieżki wyłącznie cyfrowej przed ustaleniem wskaźnika dostępu dla danej populacji**: przeniesienie usługi na tryb wyłącznie cyfrowy bez uprzedniego potwierdzenia rzeczywistego wskaźnika dostępu cyfrowego populacji docelowej grozi cichym wykluczeniem dokładnie tych pacjentów, którzy najmniej mogą dotrzeć do alternatywnego kanału.

## Źródła

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), krajowe dane o dostępności łączy szerokopasmowych i równości cyfrowej
- Pew Research Center, badania dotyczące dostępu do internetu, łączy szerokopasmowych i urządzeń oraz trendów podziału cyfrowego w grupach demograficznych

Zobacz także: [wskaźnik kompetencji cyfrowych w zdrowiu](../wskaźnik-kompetencji-cyfrowych-w-zdrowiu/), ściśle powiązana metryka tego, czy pacjenci, którzy mają dostęp, potrafią z niego skutecznie korzystać.
