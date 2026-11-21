# Dokładność Kierowania w Triażu

Dokładność kierowania w triażu to odsetek kontaktów z pacjentami, w których automatyczne lub wspierane sztuczną inteligencją narzędzie triażowe prawidłowo kieruje pacjenta na odpowiedni poziom i do odpowiedniego miejsca opieki — na przykład samoopieka, podstawowa opieka zdrowotna, pilna opieka lub opieka ratunkowa — oceniony względem klinicznie zwalidowanego standardu odniesienia. Jest to metryka bezpieczeństwa i skuteczności dla każdych cyfrowych "drzwi wejściowych" do opieki, programu do sprawdzania objawów lub systemu triażu opartego na sztucznej inteligencji: cała wartość narzędzia opiera się na prawidłowym, szybkim i spójnym kierowaniu pacjentów.

## Dlaczego to ważne

Niedokładne narzędzie triażowe wyrządza szkodę w obu kierunkach: niedoszacowanie pilności (skierowanie pacjenta na niższy poziom opieki, niż potrzebuje) może opóźnić leczenie rzeczywistego stanu nagłego, natomiast przeszacowanie pilności (skierowanie pacjenta na wyższy poziom opieki, niż potrzebuje) marnuje ograniczoną pojemność opieki ratunkowej i pilnej oraz zwiększa koszty i niepokój pacjenta bez korzyści klinicznej. Ponieważ te dwa rodzaje błędów mają tak różne konsekwencje, dokładność kierowania w triażu należy zawsze raportować wraz z kierunkiem błędów, a nie jako jedną zagregowaną wartość dokładności, która ukrywa, czy narzędzie myli się w sposób bezpieczny czy niebezpieczny. Organy regulacyjne i systemy opieki zdrowotnej oceniające narzędzie triażowe oparte na sztucznej inteligencji przed wdrożeniem coraz częściej wymagają tego rodzaju warstwowego raportowania dokładności jako warunku zatwierdzenia klinicznego, zwłaszcza dla narzędzi działających z jakimkolwiek stopniem autonomii względem klinicysty.

## Jak to się oblicza

```
Dokładność kierowania w triażu = prawidłowo skierowane kontakty /
                                  łączna liczba ocenionych w triażu
                                  kontaktów × 100

Raportuj osobno niedoszacowanie i przeszacowanie pilności:
  Wskaźnik niedoszacowania = kontakty skierowane na niższy poziom
                              pilności niż według standardu odniesienia /
                              łączna liczba ocenionych w triażu
                              kontaktów × 100
  Wskaźnik przeszacowania  = kontakty skierowane na wyższy poziom
                              pilności niż według standardu odniesienia /
                              łączna liczba ocenionych w triażu
                              kontaktów × 100

Standardem odniesienia jest zazwyczaj retrospektywny przegląd tego samego
przypadku przez klinicystę, zaślepiony względem wyniku narzędzia,
o ile to możliwe.
```

## Praktyczny przykład

Narzędzie do sprawdzania objawów oparte na sztucznej inteligencji ocenia w triażu 5000 kontaktów z pacjentami w ciągu miesiąca. Zaślepiony przegląd klinicysty losowej próby 500 z tych kontaktów wykazuje, że 430 zostało skierowanych na prawidłowy poziom pilności (dokładność 86%), 45 zostało niedoszacowanych (9%), a 25 przeszacowanych (5%). Wskaźnik niedoszacowania 9% jest wartością, która najpilniej wymaga zbadania, ponieważ reprezentuje kontakty, w których pacjent mógł zostać skierowany do mniej pilnej opieki, niż faktycznie potrzebował; wskaźnik przeszacowania 5% jest problemem pojemności i kosztów, ale nie bezpośrednim problemem bezpieczeństwa.

## Źródła danych i zastrzeżenia

Standard odniesienia, względem którego mierzy się dokładność triażu, ma ogromne znaczenie: przegląd przez jednego klinicystę wprowadza zmienność jego własnego osądu, więc wiarygodna wartość dokładności zazwyczaj wymaga albo kilku niezależnych recenzentów z udokumentowaną zgodnością między oceniającymi, albo porównania z późniejszym, potwierdzonym wynikiem klinicznym (jakiej opieki pacjent faktycznie potrzebował, ustalonej post factum). Znaczenie ma także dobór próby: przegląd wyłącznie próby dogodnej lub tylko kontaktów oznaczonych jako nietypowe nie da wartości, którą można uogólnić na ogólną skuteczność narzędzia. Wartości dokładności należy raportować osobno według zgłaszanego objawu lub kategorii dolegliwości, o ile pozwala na to liczba przypadków, ponieważ narzędzia triażowe rzadko działają jednolicie we wszystkich schorzeniach.

## Pułapki

- **Raportowanie jednej zbiorczej wartości dokładności**: zwinięcie niedoszacowania i przeszacowania do jednej liczby ukrywa, czy błędy narzędzia skłaniają się ku groźniejszemu rodzajowi pomyłki; zawsze raportuj je osobno.
- **Używanie jednego, niezaślepionego recenzenta jako standardu odniesienia**: może to po cichu obciążyć wartość dokładności w stronę tego, co sam recenzent by zrobił, zamiast niezależnego standardu klinicznego.
- **Walidacja wyłącznie na danych retrospektywnych i dogodnych**: rzeczywista dokładność kierowania narzędzia przy bieżących, niejednoznacznych danych wejściowych od pacjenta często istotnie różni się od jego dokładności na wyselekcjonowanym zbiorze walidacyjnym zebranym w trakcie rozwoju.
- **Ignorowanie dryfu działania po wdrożeniu**: dokładność modelu triażu opartego na sztucznej inteligencji może z czasem spadać wraz ze zmianą populacji pacjentów, zgłaszanych objawów lub dostępności ścieżek opieki; dokładność należy mierzyć ponownie cyklicznie, a nie walidować jednorazowo i zakładać jej stałość.

## Źródła

- ONC / HealthIT.gov, wytyczne dotyczące bezpieczeństwa i zapewnienia jakości klinicznych systemów wspomagania decyzji oraz narzędzi opartych na sztucznej inteligencji
- Literatura recenzowana dotycząca dokładności programów do sprawdzania objawów i narzędzi triażu opartych na sztucznej inteligencji, na przykład badania opublikowane w JAMIA, npj Digital Medicine i BMJ Health & Care Informatics
- NHS England, wytyczne dotyczące bezpieczeństwa klinicznego cyfrowych narzędzi triażu i zdalnych konsultacji (standardy zarządzania ryzykiem klinicznym DCB0129/DCB0160)

Zobacz także: [czas realizacji cyfrowego skierowania](../czas-realizacji-cyfrowego-skierowania/), metryka procesu najbardziej bezpośrednio następująca po decyzji triażowej.
