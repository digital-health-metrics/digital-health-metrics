# Wskaźnik Przekierowań z Oddziału Ratunkowego

Wskaźnik przekierowań z oddziału ratunkowego (SOR) mierzy odsetek kontaktów z pacjentami obsłużonych przez cyfrowe narzędzie triażowe lub opieki wirtualnej, które bez tej interwencji prawdopodobnie zakończyłyby się wizytą na SOR, ale zamiast tego zostały bezpiecznie zrealizowane ścieżką o niższej pilności — poradą w zakresie samoopieki, wizytą w podstawowej opiece zdrowotnej lub zaplanowaną wizytą w placówce pilnej opieki. Jest to konkretny, o wysokiej wartości podzbiór dokładności kierowania w triażu (zob. ten temat), skoncentrowany w całości na uniknięciu korzystania z oddziału ratunkowego, które jest wynikiem najbardziej bezpośrednio powiązanym zarówno z kosztami opieki zdrowotnej, jak i odciążeniem pojemności SOR.

## Dlaczego to ważne

Oddziały ratunkowe należą do najdroższych miejsc udzielania opieki w przeliczeniu na jedno zdarzenie i są często wykorzystywane w problemach, które można by bezpiecznie rozwiązać gdzie indziej, dlatego zdolność cyfrowego narzędzia triażowego do bezpiecznego kierowania odpowiednich przypadków poza SOR jest jedną z jego najcenniejszych komercyjnie i operacyjnie możliwości — i jedną z najłatwiejszych do zakomunikowania płatnikowi lub systemowi opieki zdrowotnej oceniającemu zwrot z inwestycji w to narzędzie. Przekierowanie ma jednak wartość tylko wtedy, gdy jest bezpieczne: narzędzie, które agresywnie odsuwa pacjentów od SOR kosztem przeoczenia rzeczywistych stanów nagłych, zoptymalizowało zupełnie niewłaściwą stronę kompromisu, dlatego wskaźnik przekierowań z SOR należy zawsze raportować obok metryki bezpieczeństwa śledzącej przeoczone lub opóźnione zgłoszenia nagłe wśród przekierowanych pacjentów, a nie w izolacji, jako czysty sukces efektywności.

## Jak to się oblicza

```
Wskaźnik przekierowań z SOR = kontakty z pacjentami bezpiecznie
                               przekierowane z SOR na odpowiednią ścieżkę
                               o niższej pilności / łączna liczba kontaktów
                               ocenionych jako potencjalnie kierujące na
                               SOR × 100

"Bezpiecznie przekierowane" wymaga potwierdzenia, na podstawie kontaktu
kontrolnego lub powiązanych danych z dokumentacji medycznej, że stan
pacjenta w rzeczywistości nie wymagał opieki ratunkowej w zdefiniowanym
oknie obserwacji (np. 72 godziny) — decyzja o przekierowaniu nie jest
potwierdzona jako bezpieczna tylko dlatego, że pacjent nie zgłosił się
natychmiast potem na SOR.

Raportuj obok:
  Wskaźnik przeoczonych stanów nagłych = przekierowani pacjenci, którzy
                           wymagali opieki ratunkowej w oknie obserwacji /
                           łączna liczba przekierowanych pacjentów × 100
```

## Praktyczny przykład

Cyfrowa usługa triażowa ocenia w ciągu miesiąca 3000 kontaktów z pacjentami, które jej algorytm kliniczny uznaje za potencjalnie kierujące na SOR w przypadku braku interwencji. Spośród nich 1800 zostaje przekierowanych na ścieżkę o niższej pilności (wskaźnik przekierowań 60%). Kontrola przekierowanej kohorty po 72 godzinach z użyciem powiązanych danych z dokumentacji medycznej wykazuje, że 45 spośród 1800 przekierowanych pacjentów zgłosiło się następnie na SOR w tym oknie (wskaźnik przeoczonych stanów nagłych 45 / 1800 × 100 = 2,5%). Raportowanie wartości 60% przekierowań bez wskaźnika przeoczonych stanów nagłych 2,5% pokazałoby tylko połowę kompromisu między bezpieczeństwem a efektywnością, który faktycznie decyduje o tym, czy zachowanie narzędzia w zakresie przekierowań jest odpowiednio skalibrowane.

## Źródła danych i zastrzeżenia

Potwierdzenie, że przekierowany pacjent nie wymagał następnie opieki ratunkowej, zależy od powiązanych danych — własnych rejestrów SOR tego samego systemu opieki zdrowotnej, regionalnej wymiany informacji zdrowotnej albo ustrukturyzowanego telefonu lub ankiety kontrolnej — a program przekierowań działający bez któregokolwiek z tych źródeł danych nie może faktycznie zweryfikować własnego bezpieczeństwa, a jedynie je zakładać na podstawie braku skargi. Odpowiedni wskaźnik przekierowań i akceptowalny wskaźnik przeoczonych stanów nagłych są decyzjami polityki klinicznej, a nie czysto statystycznymi, i powinny być ustalane świadomie przez kierownictwo kliniczne, a nie wyłaniać się jako efekt uboczny dowolnego progu, który algorytm triażowy domyślnie stosuje. Wskaźnik przekierowań należy raportować według objawu zgłaszanego lub kategorii dolegliwości, ponieważ odpowiednie wskaźniki przekierowań różnią się ogromnie w zależności od schorzenia (drobne rozcięcie skóry a ból w klatce piersiowej wymagają bardzo odmiennych progów przekierowania).

## Pułapki

- **Raportowanie wskaźnika przekierowań bez powiązanej metryki bezpieczeństwa przeoczonych stanów nagłych**: wysoki wskaźnik przekierowań osiągnięty przez niedoszacowanie pilności rzeczywistych stanów nagłych nie jest sukcesem; obie metryki należy zawsze raportować razem.
- **Zakładanie, że brak wizyty na SOR oznacza bezpieczne przekierowanie**: pacjent może zgłosić się na SOR innego, niepowiązanego systemu szpitalnego albo mieć rzeczywiście szkodliwy wynik, nigdy nie zgłaszając się na żaden SOR; weryfikuj bezpieczeństwo za pomocą powiązanych danych lub ustrukturyzowanej kontroli, a nie samym brakiem wizyty na SOR w tym samym systemie.
- **Ustalanie progu przekierowania wyłącznie w celu maksymalizacji wskaźnika przekierowań**: algorytm lub polityka dostrojone do maksymalizacji przekierowań bez dopasowanego ograniczenia bezpieczeństwa wymienią bezpieczeństwo pacjentów na lepiej wyglądającą liczbę efektywności.
- **Łączenie wskaźnika przekierowań dla wszystkich typów dolegliwości**: odpowiednie wskaźniki przekierowań różnią się ogromnie w zależności od zgłaszanej dolegliwości; jedna zbiorcza wartość nie pokaże, czy narzędzie działa bezpiecznie i skutecznie dla konkretnych schorzeń, które mają największe znaczenie kliniczne.

## Źródła

- Agency for Healthcare Research and Quality (AHRQ), badania dotyczące korzystania z oddziałów ratunkowych i odpowiedniego przekierowywania do właściwego miejsca opieki
- NHS England, wytyczne dotyczące NHS 111 oraz standardów bezpieczeństwa i skuteczności cyfrowego triażu w pilnej opiece
- Literatura recenzowana dotycząca wyników przekierowań z SOR w cyfrowym triażu i opiece wirtualnej, na przykład badania opublikowane w Annals of Emergency Medicine i npj Digital Medicine

Zobacz także: [dokładność kierowania w triażu](../dokładność-kierowania-w-triażu/), szersza metryka dokładności, której ta jest konkretnym, krytycznym dla bezpieczeństwa podzbiorem.
