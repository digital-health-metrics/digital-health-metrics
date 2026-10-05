# Wskaźnik Dostępności Urządzeń

Wskaźnik dostępności urządzeń mierzy odsetek zaplanowanego czasu monitorowania, w którym podłączone urządzenie zdrowotne — czujnik zdalnego monitorowania pacjenta, urządzenie noszone lub domowy zestaw telemedyczny — jest faktycznie online, przesyła dane i działa prawidłowo, a nie jest offline, odłączone lub niesprawne. Jest to podstawowa metryka infrastruktury leżąca u podstaw każdego programu zdalnego monitorowania lub urządzeń podłączonych: alert kliniczny, trend biometryczny lub miara zaangażowania obliczone na podstawie urządzenia, które często było offline, są tak wiarygodne, jak łączność, na której się opierają.

## Dlaczego to ważne

Cała wartość kliniczna programu zdalnego monitorowania pacjentów zależy od ciągłego lub prawie ciągłego pozyskiwania danych; urządzenie o słabej dostępności tworzy ciche luki w obrazie klinicznym pacjenta, które można pomylić ze stabilnością (brak alertu, bo brak danych, a nie dlatego, że nic się nie zmieniło), zamiast prawidłowo rozpoznać je jako awarię monitorowania. Dostępność urządzeń jest również wskaźnikiem wyprzedzającym kosztów programu i doświadczenia pacjenta: urządzenie, które często traci połączenie, generuje telefony do wsparcia, frustrację pacjentów i potencjalnie niepotrzebny kontakt kliniczny w celu sprawdzenia, czy luka w danych odzwierciedla rzeczywiste zdarzenie kliniczne, czy po prostu usterkę techniczną. Ponieważ awarie dostępności urządzeń są często przypisywane infrastrukturze kontrolowanej przez organizację (źle skonfigurowana brama komórkowa, słaby zasięg Wi-Fi w domu pacjenta, niedostatecznie konserwowana flota urządzeń), a nie pacjentowi, ta metryka należy w całości do dostawcy i zespołu operacji technicznych, a nie powinna być bezkrytycznie wchłaniana przez metryki zaangażowania pacjentów.

## Jak to się oblicza

```
Wskaźnik dostępności urządzeń = czas, w którym urządzenie było online
                                 i przesyłało prawidłowe dane /
                                 łączny zaplanowany czas monitorowania × 100

Wydziel przyczyny źródłowe przestojów, o ile dane na to pozwalają:
  Awaria po stronie urządzenia (bateria, usterka sprzętowa, awaria
                                oprogramowania układowego)
  Awaria łączności              (przerwanie połączenia komórkowego/Wi-Fi/VPN)
  Czynniki po stronie pacjenta  (urządzenie wyłączone, przeniesione poza
                                 zasięg)

Wspierające parametry techniczne do śledzenia obok dostępności:
  Średnie wykorzystanie procesora, pamięci i poziom baterii na urządzenie
  Średni czas między awariami łączności
  Średni czas ponownego połączenia po przerwaniu
```

## Praktyczny przykład

Program zdalnego monitorowania kardiologicznego wdraża 1000 podłączonych urządzeń, od każdego oczekuje się ciągłej transmisji. W ciągu 30-dniowego miesiąca (720 zaplanowanych godzin monitorowania na urządzenie) flota rejestruje łącznie 705 600 rzeczywistych godzin online wobec zaplanowanych 720 000 godzin, co daje ogólnoflotowy wskaźnik dostępności urządzeń równy 705 600 / 720 000 × 100 = 98%. Analiza przyczyn źródłowych 14 400 godzin przestoju pokazuje, że 60% przypisuje się przerwaniom łączności komórkowej skoncentrowanym w określonym wiejskim regionie usług, 25% urządzeniom ze starzejącymi się bateriami oznaczonymi do wymiany, a 15% pacjentom tymczasowo wyłączającym swoje urządzenie. Ten podział wskazuje dwie wyraźne, różne interwencje — naprawę łączności w dotkniętym regionie i proaktywny program wymiany baterii — których pojedyncza zagregowana wartość dostępności by nie rozróżniła.

## Źródła danych i zastrzeżenia

Dane o dostępności pochodzą z własnego systemu zarządzania urządzeniami i telemetrii producenta urządzenia lub dostawcy platformy, który rejestruje zdarzenia połączenia i sygnału "heartbeat" dla każdego urządzenia; organizacja powinna dokładnie potwierdzić, co dostawca uznaje za "online" (urządzenie może zgłaszać się jako połączone z siecią, nie przesyłając prawidłowych danych klinicznych, co dla celów klinicznych powinno być liczone jako przestój, nawet jeśli panel dostawcy raportuje je jako połączone). Dostępność należy raportować dla poszczególnych kohort urządzeń lub obszarów geograficznych tam, gdzie pozwala na to wolumen, ponieważ jakość łączności bywa skupiona geograficznie (zasięg komórkowy na wsi, Wi-Fi w starszych budynkach), a nie rozłożona równomiernie w populacji pacjentów, a zagregowana wartość dla całej floty może maskować poważny, możliwy do naprawienia problem regionalny.

## Pułapki

- **Utożsamianie połączenia sieciowego z prawidłową transmisją danych**: urządzenie może wyglądać na "połączone" w panelu dostawcy, nie przesyłając użytecznych danych klinicznych; definiuj i mierz dostępność względem faktycznego odbioru prawidłowych danych, a nie samej łączności sieciowej.
- **Raportowanie wyłącznie średniej dla całej floty**: może to ukryć poważny problem przestojów specyficzny geograficznie lub dla kohorty urządzeń, który ujawniłaby średnia celowana i który ma konkretne, możliwe do wdrożenia rozwiązanie.
- **Brak rozróżnienia przyczyny źródłowej przestoju**: przestoje po stronie urządzenia, łączności i pacjenta wymagają całkowicie różnych interwencji; pojedynczy odsetek przestojów bez segmentacji przyczyn źródłowych nie pozwala na podjęcie działań.
- **Domyślne traktowanie luki w danych jako stabilności klinicznej**: brak strumienia danych z urządzenia offline powinien uruchamiać kontrolę techniczną łączności, a nie być po cichu interpretowany jako "brak wiadomości to dobra wiadomość" dla stanu klinicznego pacjenta.

## Źródła

- Continua Design Guidelines / Personal Connected Health Alliance, techniczne standardy interoperacyjności dla podłączonych urządzeń zdrowotnych
- ONC / HealthIT.gov, wytyczne dotyczące wdrażania programów zdalnego monitorowania pacjentów i wymagań technicznych
- Literatura recenzowana dotycząca niezawodności urządzeń do zdalnego monitorowania pacjentów i kompletności danych, na przykład badania opublikowane w npj Digital Medicine

Zobacz także: [dokładność kierowania w triażu](../dokładność-kierowania-w-triażu/), która zależy od otrzymywania kompletnych, wiarygodnych danych z urządzeń, aby w ogóle podjąć prawidłową decyzję triażową.
