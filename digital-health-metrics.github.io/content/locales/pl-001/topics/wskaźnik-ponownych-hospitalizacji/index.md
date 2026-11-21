# Wskaźnik Ponownych Hospitalizacji

Wskaźnik ponownych hospitalizacji to odsetek wypisanych pacjentów, którzy zostali ponownie przyjęci do szpitala w sposób nieplanowany w określonym oknie po wypisie — najczęściej 30 dni. W zdrowiu cyfrowym jest to metryka najbardziej bezpośrednio powiązana z ekonomią płatników i umowami w opiece opartej na wartości: program zdalnego monitorowania, kontroli po wypisie lub cyfrowego przejścia opieki, który nie potrafi wykazać wiarygodnego wpływu na ponowne hospitalizacje, raczej nie zyska dalszego wsparcia refundacyjnego, bez względu na to, jak dobrze wyglądają jego wskaźniki zaangażowania.

## Dlaczego to ważne

Nieplanowana ponowna hospitalizacja jest kosztowna, uciążliwa dla pacjenta i w wielu systemach opieki zdrowotnej jest obecnie bezpośrednio penalizowana: mechanizmy takie jak amerykański Hospital Readmissions Reduction Program obniżają płatności dla szpitali o wyższych niż oczekiwane wskaźnikach ponownych hospitalizacji w określonych schorzeniach, dlatego szpitale aktywnie zamawiają cyfrowe programy po wypisie i zdalnego monitorowania mające je ograniczać. Znaczna część ponownych hospitalizacji jest uznawana za potencjalnie możliwą do uniknięcia — wynika z niewystarczających instrukcji wypisowych, pominiętych wizyt kontrolnych, błędnego rozumienia leczenia lub nieuwzględnionego pogorszenia objawów, które dobrze zaprojektowany cyfrowy punkt kontaktu może wychwycić wcześniej — i właśnie tę lukę adresują cyfrowe narzędzia przejścia opieki. Wskaźnik ponownych hospitalizacji należy zawsze odczytywać razem ze strukturą przypadków: program obsługujący bardziej chorą, bardziej złożoną populację będzie miał strukturalnie wyższy wskaźnik bazowy niż program obsługujący populację zdrowszą, niezależnie od jakości programu.

## Jak to się oblicza

```
30-dniowy wskaźnik ponownych hospitalizacji = nieplanowane ponowne
                           hospitalizacje w ciągu 30 dni od wypisu /
                           łączna liczba wypisów indeksowych × 100

Wyłącz z licznika: planowane ponowne hospitalizacje (np. zaplanowany
zabieg kontrolny) oraz przeniesienia, które są kontynuacją tego samego
epizodu opieki, a nie nowym przyjęciem.

Koryguj o ryzyko tam, gdzie to możliwe, stosując przyjęty indeks
struktury przypadków lub chorób współistniejących, przed porównaniem
wskaźników między różnymi populacjami pacjentów lub okresami.
```

## Praktyczny przykład

Szpital wypisuje w kwartale 1200 pacjentów z niewydolnością serca. Spośród nich 210 zostaje ponownie przyjętych w ciągu 30 dni, w tym 15 to planowane ponowne hospitalizacje na zaplanowany zabieg, które są wyłączone. Nieplanowany 30-dniowy wskaźnik ponownych hospitalizacji wynosi (210 − 15) / 1200 × 100 = 16,25%. Dla podgrupy 400 z tych pacjentów (wybranych według ryzyka klinicznego, a nie losowo) wprowadzono program zdalnego monitorowania, a ich wskaźnik nieplanowanych ponownych hospitalizacji wynosi 14%, w porównaniu z 18% dla 800 pacjentów nieobjętych programem. Ponieważ włączenie opierało się na ryzyku klinicznym, a nie na losowym przydziale, ta różnica jest dowodem sugestywnym, a nie rozstrzygającym skuteczności programu i należy ją interpretować wraz z analizą korekty o ryzyko, a nie przyjmować dosłownie.

## Źródła danych i zastrzeżenia

Dane o ponownych hospitalizacjach pochodzą zazwyczaj z własnego strumienia przyjęć, wypisów i przeniesień (ADT) szpitala dla ponownych przyjęć do tej samej placówki, ale pacjent ponownie przyjęty do innego szpitala w ogóle nie pojawi się w tym strumieniu, więc śledzenie ponownych hospitalizacji w pojedynczym szpitalu systematycznie zaniża rzeczywiste wskaźniki, chyba że zostanie uzupełnione danymi z regionalnej wymiany informacji zdrowotnej, danymi roszczeń płatników lub stanowymi bazami danych obejmującymi wszystkich płatników. Przypisanie efektu programowi cyfrowemu wymaga ostrożności: pacjenci, którzy dobrowolnie przystępują do programu zdalnego monitorowania, rzadko stanowią losową próbę wypisanej populacji, więc naiwne porównanie wskaźników ponownych hospitalizacji między objętymi a nieobjętymi programem będzie zazwyczaj zakłócone dokładnie tymi efektami selekcji, które sprawiły, że niektórzy pacjenci chętniej do niego przystąpili.

## Pułapki

- **Porównywanie surowych, nieskorygowanych o ryzyko wskaźników między populacjami**: program obsługujący bardziej chorą populację wykaże wyższy surowy wskaźnik ponownych hospitalizacji niż program obsługujący populację zdrowszą, nawet jeśli sam program jest skuteczniejszy; zawsze koryguj o ryzyko przed porównaniem.
- **Zaniżanie liczby ponownych hospitalizacji w innych placówkach**: poleganie wyłącznie na własnych danych ADT jednego szpitala pominie ponowne hospitalizacje gdzie indziej, zaniżając rzeczywisty wskaźnik, zwłaszcza na obszarach z wieloma konkurującymi systemami szpitalnymi.
- **Błąd selekcji przy dobrowolnym włączaniu do programu**: pacjenci, którzy decydują się przystąpić do cyfrowego programu kontrolnego, często systematycznie różnią się (kompetencjami zdrowotnymi, wsparciem społecznym lub motywacją) od tych, którzy tego nie robią, zakłócając każde naiwne porównanie przed/po lub objęci/nieobjęci.
- **Liczenie każdego powrotu do tej samej placówki jako ponownej hospitalizacji**: zaplanowana ponowna hospitalizacja (na przykład planowany drugi etap zabiegu) nie jest sygnałem nieudanego wypisu i powinna być wyłączona z licznika, a nie mieszana z rzeczywiście nieplanowanymi powrotami.

## Źródła

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program oraz specyfikacje miary Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), wytyczne dotyczące ograniczania możliwych do uniknięcia ponownych hospitalizacji
- Literatura recenzowana dotycząca cyfrowego zdalnego monitorowania i interwencji w ramach przejścia opieki na rzecz ograniczania ponownych hospitalizacji, na przykład badania opublikowane w JAMA Network Open i npj Digital Medicine

Zobacz także: [dokładność kierowania w triażu](../dokładność-kierowania-w-triażu/), ponieważ niewłaściwe początkowe skierowanie może samo być czynnikiem prowadzącym do możliwych do uniknięcia przyjęć.
