# Wskaźnik Przywiązania DAU/MAU

Wskaźnik przywiązania DAU/MAU porównuje liczbę dziennych aktywnych użytkowników (DAU) z liczbą miesięcznych aktywnych użytkowników (MAU) — ta sama miara jest stosowana dla tygodniowych aktywnych użytkowników (WAU) względem MAU — aby wyrazić, jaki odsetek szerszej bazy użytkowników produktu korzysta z niego w danym dniu. Jest to standardowa miara analityki produktowej opisująca intensywność zaangażowania, odrębna od tego, czy użytkownik w ogóle zostaje zatrzymany (zob. wskaźnik utrzymania użytkowników), oraz od tego, jak konsekwentnie angażuje się w czasie jeden konkretny zapisany pacjent (zob. wskaźnik regularności zaangażowania pacjentów): przywiązanie opisuje rytm użytkowania na poziomie populacji, a nie wzorzec żadnej pojedynczej osoby.

## Dlaczego to ważne

Dwa produkty zdrowia cyfrowego mogą raportować identyczną liczbę miesięcznych aktywnych użytkowników, a mimo to różnić się bardzo intensywnością zaangażowania: w jednym większość tych użytkowników otwiera aplikację niemal codziennie, a w drugim większość otwiera ją raz w miesiącu, tuż przed tym, zanim zostaliby uznani za nieaktywnych. Wskaźnik przywiązania DAU/MAU odróżnia te dwie bardzo różne sytuacje za pomocą jednej, prostej i dobrze rozumianej wartości referencyjnej, którą zespoły produktowe i kliniczne mogą śledzić w czasie i porównywać ze znanymi branżowymi zakresami — wskaźnik około 20% jest powszechnie przywoływanym rozsądnym punktem odniesienia dla wielu aplikacji konsumenckich, natomiast produkty oparte na codziennym nawyku (dziennik żywienia lub objawów, z którego pacjent ma korzystać każdego dnia) należy oceniać względem zauważalnie wyższego poziomu. Ponieważ przywiązanie jest wrażliwe na to, jak zdefiniowano "aktywność", jest najbardziej użyteczne jako trend jednego produktu w czasie oraz jako porównanie z produktami zbudowanymi z myślą o podobnym wzorcu użytkowania, a nie jako bezwzględny punkt odniesienia obejmujący całą branżę.

## Jak to się oblicza

```
Wskaźnik przywiązania DAU/MAU = średnia dzienna liczba aktywnych
                                 użytkowników w okresie /
                                 miesięczna liczba aktywnych użytkowników
                                 w tym samym okresie × 100

Wskaźnik WAU/MAU (tygodniowy, ta sama zasada) jest łagodniejszym
wariantem, bardziej odpowiednim dla produktów, z których oczekuje się
korzystania kilka razy w tygodniu, a nie codziennie.

"Aktywność" musi być zdefiniowana precyzyjnie i konsekwentnie (np. jako
ukończone kwalifikujące działanie, a nie bierne otwarcie aplikacji)
zarówno w liczniku, jak i w mianowniku.
```

## Praktyczny przykład

Cyfrowa aplikacja do zarządzania cukrzycą ma w danym miesiącu 10 000 miesięcznych aktywnych użytkowników, zdefiniowanych jako każdy użytkownik, który w tym miesiącu wykonał co najmniej jedno kwalifikujące działanie (wpis glikemii, wpis posiłku lub potwierdzenie przyjęcia leku). Uśrednienie dziennej liczby aktywnych użytkowników z 30 dni tego miesiąca daje średnie DAU równe 2200. Wskaźnik przywiązania DAU/MAU wynosi 2200 / 10 000 × 100 = 22%, co wskazuje, że w typowym dniu około 22% miesięcznej bazy użytkowników aplikacji korzysta z niej — jest to rozsądna wartość dla narzędzia dla chorób przewlekłych opartego na codziennym nawyku, choć zespół produktowy chciałby widzieć jej wzrost w czasie, w miarę jak idealne zachowanie (codzienne wpisy) staje się dla zapisanych pacjentów coraz bardziej nawykowe.

## Źródła danych i zastrzeżenia

DAU, WAU i MAU są obliczane z tych samych dzienników zdarzeń, przy użyciu jednej spójnej definicji "kwalifikującego zdarzenia aktywności" w każdym oknie; zmiana tej definicji między obliczeniami licznika i mianownika (na przykład liczenie każdego otwarcia aplikacji dla DAU, ale tylko ukończonego działania dla MAU) da zniekształcony wskaźnik, który nie odzwierciedla rzeczywistej intensywności zaangażowania. Odpowiedni punkt odniesienia dla przywiązania zależy w dużej mierze od zamierzonego wzorca użytkowania produktu: narzędzie przeznaczone do użytku raz w tygodniu (tygodniowy raport objawów) będzie miało i powinno mieć niższy wskaźnik DAU/MAU niż narzędzie przeznaczone do użytku codziennego (aplikacja towarzysząca systemowi ciągłego monitorowania glikemii), więc przywiązanie należy zawsze interpretować względem zamierzonej częstotliwości użytkowania danego produktu, a nie jednego uniwersalnego celu.

## Pułapki

- **Porównywanie wskaźników przywiązania między produktami o różnej zamierzonej częstotliwości użytkowania**: narzędzie do użytku tygodniowego będzie strukturalnie wykazywać niższy wskaźnik DAU/MAU niż narzędzie do użytku codziennego, nawet jeśli oba działają dokładnie zgodnie z przeznaczeniem w swoich zastosowaniach; odnoś się do zamierzonej częstotliwości użytkowania danego produktu, a nie do jednego uniwersalnego celu.
- **Stosowanie niespójnych definicji aktywności w liczniku i mianowniku**: może to dać wskaźnik przywiązania, który nie odzwierciedla rzeczywistej intensywności zaangażowania i którego nie można sensownie porównywać w czasie ani z innymi produktami.
- **Traktowanie rosnącego wskaźnika przywiązania jako jednoznacznie pozytywnego bez sprawdzenia ogólnego trendu MAU**: wzrost wskaźnika wynikający z kurczącej się, bardziej nawykowej podstawowej grupy użytkowników przy jednoczesnym spadku ogólnego MAU to sytuacja bardzo odmienna — i bardziej niepokojąca — niż wzrost wynikający z faktycznie rosnącego codziennego zaangażowania w stabilnej lub rosnącej bazie użytkowników.
- **Ignorowanie wpływu dnia tygodnia i sezonu na DAU**: DAU może się istotnie różnić w zależności od dnia tygodnia (dzień powszedni a weekend) lub pory roku w przypadku wielu produktów zdrowotnych; uśredniaj DAU w okresie obejmującym pełny naturalny cykl, a nie w krótkim oknie, które mogłoby być zniekształcone.

## Źródła

- Literatura recenzowana i branżowa dotycząca metryk zaangażowania w produktach mobilnych i cyfrowych, powszechnie stosowane ramy benchmarkingu z platform analityki mobilnej
- Digital Therapeutics Alliance, wytyczne najlepszych praktyk dotyczące pomiaru zaangażowania w terapiach cyfrowych
- Literatura recenzowana dotycząca pomiaru zaangażowania w zdrowiu cyfrowym, na przykład badania opublikowane w Journal of Medical Internet Research (JMIR mHealth and uHealth)

Zobacz także: [wskaźnik utrzymania użytkowników](../wskaźnik-utrzymania-użytkowników/) oraz [wskaźnik regularności zaangażowania pacjentów](../wskaźnik-regularności-zaangażowania-pacjentów/), dwie pokrewne metryki zaangażowania, z którymi ten wskaźnik jest najczęściej mylony.
