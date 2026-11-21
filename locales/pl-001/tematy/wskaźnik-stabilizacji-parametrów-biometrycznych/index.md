# Wskaźnik Stabilizacji Parametrów Biometrycznych

Wskaźnik stabilizacji parametrów biometrycznych to odsetek pacjentów objętych programem, którzy osiągają i utrzymują klinicznie zdefiniowany zakres docelowy parametru biometrycznego — najczęściej ciśnienia tętniczego poniżej progu takiego jak 130/80 mmHg — przy użyciu podłączonego urządzenia monitorującego, w dłuższym okresie, a nie w jednym punkcie czasu. Różni się on od wskaźnika poprawy parametrów biometrycznych (zob. ten temat): poprawa mierzy wielkość zmiany względem wartości wyjściowej, natomiast stabilizacja mierzy, czy pacjent jest niezawodnie utrzymywany w bezpiecznym zakresie po rozpoczęciu leczenia lub monitorowania, co jest wynikiem najważniejszym dla pacjentów, którzy są już blisko celu lub są już leczeni.

## Dlaczego to ważne

Dla znacznej części pacjentów w programach chorób przewlekłych — zwłaszcza w nadciśnieniu tętniczym, gdzie docelowe wartości ciśnienia w wytycznych są dobrze ugruntowane i bezpośrednio powiązane z ryzykiem sercowo-naczyniowym — celem klinicznym nie jest jednorazowa poprawa, lecz trwała kontrola, a pacjent, którego wartości oscylują w granicach zakresu docelowego i poza nim, stwarza zasadniczo inne ryzyko niż pacjent, który raz się poprawia i na tym poziomie pozostaje. Podłączone urządzenia (ciśnieniomierze z łącznością komórkową, systemy ciągłego monitorowania glikemii) umożliwiają ciągły pomiar stabilizacji, a nie tylko w trakcie wizyt w poradni, ujawniając pacjentów, u których odczyty w gabinecie wyglądają na kontrolowane, lecz odczyty domowe są niestabilne — wzorzec znany jako nadciśnienie maskowane, którego nie sposób wykryć wyłącznie okresowymi pomiarami w trakcie wizyt. Raportowanie wskaźnika stabilizacji, a nie tylko pojedynczego obrazu "w zakresie docelowym", zmusza program do zmierzenia się z tym, jak konsekwentnie, a nie tylko jak często, utrzymuje pacjentów w zakresie.

## Jak to się oblicza

```
Wskaźnik stabilizacji parametrów biometrycznych = pacjenci, u których
                                ≥ 80% odczytów mieści się w zakresie
                                docelowym w okresie pomiarowym /
                                pacjenci z minimalną liczbą prawidłowych
                                odczytów w tym okresie × 100

Przykładowe progi:
  Ciśnienie tętnicze — wartość docelowa < 130/80 mmHg (lub obowiązujący
                       próg z wytycznych klinicznych dla profilu ryzyka
                       pacjenta)
  Glukoza            — zakres docelowy zgodnie z wytycznymi dotyczącymi
                       ciągłego monitorowania glikemii, raportowany jako
                       "czas w zakresie"

Minimalny próg częstotliwości odczytów (np. co najmniej 3 odczyty
tygodniowo) należy ustalić przed włączeniem pacjenta do mianownika,
aby uniknąć sytuacji, w której rzadko mierzący pacjenci wydają się
sztucznie stabilni.
```

## Praktyczny przykład

Program zdalnego monitorowania nadciśnienia obejmuje 600 pacjentów wyposażonych w ciśnieniomierze z łącznością komórkową, od każdego oczekuje się co najmniej 3 odczytów tygodniowo. Spośród nich 540 spełnia minimalny próg częstotliwości odczytów w 3-miesięcznym okresie pomiarowym i zostaje włączonych do mianownika. Z tych 540 u 350 co najmniej 80% odczytów jest poniżej 130/80 mmHg, co daje wskaźnik stabilizacji parametrów biometrycznych równy 350 / 540 × 100 = 65%. Sześćdziesięciu pacjentów wyłączonych z powodu niewystarczającej liczby odczytów jest raportowanych osobno jako luka w kompletności danych, a nie włączanych ani do licznika, ani do grupy "niestabilizowanych", ponieważ ich rzeczywisty status kontroli jest po prostu nieznany, a nie zły.

## Źródła danych i zastrzeżenia

Odczyty pochodzą bezpośrednio ze strumienia danych podłączonego urządzenia, który jest bardziej obiektywny i znacznie częstszy niż pomiary w poradni, jednak błędy w umieszczeniu urządzenia i technice pomiaru (nieprawidłowo dobrany rozmiar lub położenie mankietu ciśnieniomierza) mogą wprowadzać systematyczne obciążenie, którego pojedynczy pomiar walidacyjny w poradni niekoniecznie wykryje. Wybór zakresu docelowego powinien opierać się na aktualnie obowiązującej wytycznej klinicznej dla konkretnego profilu ryzyka i chorób współistniejących pacjenta, a nie na jednym uniwersalnym progu, ponieważ wartości docelowe z wytycznych różnią się w zależności od wieku pacjenta, czynności nerek i ryzyka sercowo-naczyniowego. Pacjenta rzadko dokonującego odczytów nigdy nie należy domyślnie po cichu zaliczać do "stabilnych"; wyłączenie go z mianownika wraz z przejrzystym raportowaniem tego wyłączenia jest uczciwsze niż zaliczenie go do kontrolowanych lub niekontrolowanych na podstawie zbyt małej ilości danych.

## Pułapki

- **Traktowanie pojedynczego odczytu w zakresie jako stabilizacji**: stabilizacja dotyczy trwałej kontroli w określonym okresie, a nie jednorazowego obrazu; zawsze wymagaj minimalnego odsetka odczytów w zakresie w tym okresie, a nie jednego kwalifikującego pomiaru.
- **Ciche wyłączanie rzadko mierzących pacjentów bez raportowania tego faktu**: pacjenci, którzy rzadko dokonują odczytów, nie są automatycznie stabilni ani niestabilni; wyłącz ich jawnie z mianownika i raportuj odsetek wyłączeń jako osobną metrykę kompletności danych.
- **Ignorowanie kalibracji urządzenia i błędów techniki pomiaru**: źle dopasowany mankiet lub nieskalibrowane urządzenie mogą systematycznie zniekształcać odczyty w jednym kierunku, czego wskaźnik stabilizacji obliczany naiwnie z surowych danych z urządzenia nie wychwyci bez okresowej walidacji.
- **Stosowanie jednego uniwersalnego zakresu docelowego dla wszystkich pacjentów**: wartości docelowe z wytycznych klinicznych różnią się w zależności od profilu ryzyka i chorób współistniejących; zastosowanie jednego progu do klinicznie niejednorodnej populacji spowoduje błędną klasyfikację niektórych pacjentów jako ustabilizowanych lub nieustabilizowanych względem ich rzeczywistego, zindywidualizowanego celu.

## Źródła

- American Heart Association (AHA) / American College of Cardiology (ACC), docelowe wartości ciśnienia tętniczego w wytycznych oraz wytyczne dotyczące domowego pomiaru ciśnienia
- International Diabetes Federation i American Diabetes Association (ADA), konsensusowe wytyczne dotyczące ciągłego monitorowania glikemii i "czasu w zakresie"
- Literatura recenzowana dotycząca zdalnego monitorowania parametrów biometrycznych i trwałej kontroli choroby, na przykład badania opublikowane w npj Digital Medicine

Zobacz także: [wskaźnik poprawy parametrów biometrycznych](../wskaźnik-poprawy-parametrów-biometrycznych/), pokrewna metryka wielkości zmiany względem wartości wyjściowej, odmienna od trwałej kontroli po osiągnięciu celu.
