# Koszt na Epizod Opieki

Koszt na epizod opieki to łączny koszt poniesiony w leczeniu zdefiniowanego epizodu klinicznego — na przykład endoprotezoplastyki stawu biodrowego wraz z towarzyszącą rekonwalescencją lub okresu leczenia cukrzycy — porównany z historyczną kohortą bazową leczoną bez ocenianej interwencji cyfrowej. Jest to standardowa jednostka porównań finansowych w opiece opartej na wartości, ponieważ oddaje pełny obraz ekonomiczny epizodu, a nie pojedynczą pozycję kosztową w oderwaniu od innych, i jest metryką, której płatnicy oraz systemy opieki zdrowotnej najczęściej wymagają, zanim zgodzą się sfinansować program zdrowia cyfrowego na dużą skalę.

## Dlaczego to ważne

Umowy w opiece opartej na wartości coraz częściej płacą za wyniki i epizody, a nie za pojedyncze usługi, co oznacza, że uzasadnienie finansowe programu zdrowia cyfrowego musi być przedstawione w tej samej walucie: łącznego kosztu na epizod, w porównaniu z kosztem takiego samego typu epizodu sprzed wprowadzenia interwencji. Program, który zmniejsza jedną kategorię kosztów (na przykład liczbę osobistych wizyt kontrolnych), jednocześnie zwiększając inną (więcej kosztów urządzeń, więcej czasu pracy personelu klinicznego na monitorowanie), niekoniecznie zmniejszył łączny koszt na epizod, a tę wymianę ujmuje wyłącznie pełne kalkulowanie kosztów na poziomie epizodu; patrzenie na pojedynczą pozycję kosztową w oderwaniu grozi mylącym wnioskiem w obu kierunkach. Ponieważ definicje epizodów i okresy bazowe można konstruować w sposób sprzyjający określonemu wnioskowi, ta metryka wymaga większej przejrzystości metodologicznej niż większość pozostałych metryk w tej książce, aby była wiarygodna dla sceptycznego płatnika lub zespołu finansowego.

## Jak to się oblicza

```
Koszt na epizod opieki = łączny koszt całej opieki udzielonej w ramach
                          zdefiniowanego okna epizodu (wszystkie miejsca
                          udzielania opieki, wszystkie kategorie kosztów) /
                          liczba epizodów

Porównaj z kosztem na epizod historycznej kohorty bazowej dla tego
samego klinicznie zdefiniowanego typu epizodu, skorygowanym o strukturę
przypadków (wiek, choroby współistniejące, ciężkość) między obiema
kohortami.

Uwzględnij nie tylko bezpośrednie koszty kliniczne: koszty platformy
technologicznej i urządzeń, dodatkowy czas pracy personelu klinicznego
oraz każdą opiekę, która zmieniła miejsce udzielania (np. ze szpitala
do domu), a nie zniknęła całkowicie.
```

## Praktyczny przykład

Historyczny koszt bazowy epizodu całkowitej endoprotezoplastyki stawu biodrowego (od operacji do 90-dniowej rekonwalescencji) w systemie opieki zdrowotnej wynosi 28 000 USD na epizod, na podstawie 200 historycznych epizodów. Wprowadzono nowy cyfrowy program monitorowania pooperacyjnego, a 150 nowych epizodów realizowanych z jego użyciem wykazuje średni koszt 24 500 USD na epizod — redukcję o 3500 USD na epizod, wynikającą głównie z mniejszej liczby wizyt na oddziale ratunkowym w trakcie rekonwalescencji i krótszego średniego pobytu szpitalnego. Po skorygowaniu o ryzyko, uwzględniającym nieco młodszą strukturę przypadków i mniejsze obciążenie chorobami współistniejącymi w kohorcie monitorowanej cyfrowo w porównaniu z bazą historyczną, skorygowana oszczędność zmniejsza się do 2100 USD na epizod — nadal jest to rzeczywista poprawa, ale istotnie mniejsza, niż sugerowało surowe, nieskorygowane porównanie.

## Źródła danych i zastrzeżenia

Łączny koszt epizodu jest zazwyczaj składany z własnego systemu rachunku kosztów lub systemu finansowego systemu opieki zdrowotnej, łącząc dane z roszczeń, wewnętrzną alokację kosztów oraz — tam, gdzie uczestniczy platforma cyfrowa — jej koszty licencji i sprzętu; dokładne zestawienie tej wartości jest zazwyczaj najtrudniejszą i najbardziej zasobochłonną częścią każdej analizy wartości zdrowia cyfrowego, ponieważ koszty są często rejestrowane w odrębnych systemach, które nigdy nie były projektowane z myślą o łączeniu ich na poziomie epizodu. Korekta o strukturę przypadków jest niezbędna zawsze wtedy, gdy kohorta zarządzana cyfrowo i historyczna kohorta bazowa nie zostały przydzielone w drodze rzeczywistej randomizacji, ponieważ programy cyfrowe są często oferowane najpierw pacjentom bardziej zaangażowanym, ogólnie zdrowszym lub bardziej zmotywowanym, co może dawać pozorną oszczędność będącą w rzeczywistości efektem selekcji, a nie prawdziwym efektem programu.

## Pułapki

- **Porównywanie nieskorygowanych kosztów między kohortami o różnej strukturze przypadków**: kohorta zarządzana cyfrowo, która jest zdrowsza lub obarczona mniejszym ryzykiem niż baza historyczna, wykaże niższy koszt na epizod z przyczyn niezwiązanych z samą interwencją cyfrową; zawsze koryguj o ryzyko przed porównaniem.
- **Pomijanie kosztów technologii i personelu po "cyfrowej" stronie porównania**: analiza kosztów, która śledzi wyłącznie zmniejszone wykorzystanie zasobów klinicznych, ignorując koszty platformy, urządzeń i personelu potrzebnego do prowadzenia programu cyfrowego, zawyży oszczędności netto.
- **Niespójne definiowanie okna epizodu między kohortami**: porównanie 90-dniowego okna epizodu w jednej kohorcie z 60-dniowym oknem w drugiej da porównanie kosztów, które w rzeczywistości nie mierzy tego samego.
- **Traktowanie przesunięcia kosztów jako ich redukcji**: koszt przeniesiony z jednego miejsca udzielania opieki do innego (na przykład ze szpitala do monitorowanego środowiska domowego) jest rzeczywistym i cennym ustaleniem, ale analitycznie różni się od kosztu całkowicie wyeliminowanego, a oba należy raportować osobno.

## Źródła

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) oraz wytyczne dotyczące modeli płatności opartych na epizodach
- Healthcare Financial Management Association (HFMA), wytyczne dotyczące metodologii kalkulacji kosztów epizodu opieki
- Literatura recenzowana dotycząca analiz kosztów cyfrowej opieki zdrowotnej opartej na wartości, na przykład badania opublikowane w Health Affairs i American Journal of Managed Care

Zobacz także: [zwrot z inwestycji (ROI) i wartość inwestycji (VOI)](../zwrot-z-inwestycji-roi-i-wartość-inwestycji-voi/), gdzie koszt na epizod opieki jest jednym z głównych danych wejściowych.
