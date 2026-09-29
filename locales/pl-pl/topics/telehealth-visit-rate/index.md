# Wskaźnik Wizyt Telemedycznych

Wskaźnik wizyt telemedycznych to udział wszystkich kontaktów usługi realizowanych zdalnie, za pomocą wideo lub telefonu, a nie osobiście. Jest to metryka mieszanki kanałów dostarczania, a nie metryka aktywności: mówi, w jaki sposób świadczona jest opieka, co jest ważne dla planowania zdolności, dostępu i zasadności klinicznej, całkowicie niezależnie od tego, ile opieki jest świadczonej ogółem.

## Dlaczego to ważne

Odsetek opieki świadczonej zdalnie zmienił model operacyjny wielu usług po gwałtownej ekspansji konsultacji wirtualnych podczas pandemii COVID-19, a organizacje potrzebują stabilnego sposobu monitorowania, czy ta zmiana jest utrzymywana, powraca do norm sprzed pandemii, czy jest aktywnie sterowana przez politykę. Telemedycyna nie jest jednolitym zastępstwem wizyty osobistej: zasadność różni się w zależności od specjalizacji, rodzaju konsultacji (przegląd leków przebiega zupełnie inaczej niż badanie fizykalne) oraz preferencji pacjenta, więc "właściwy" wskaźnik to osąd kliniczny i operacyjny, a nie cel do maksymalizacji. Instytucje finansujące i regulatorzy również wykorzystują ten wskaźnik, wraz z miarami wyników i bezpieczeństwa, do decydowania o polityce zwrotu kosztów i sprawdzania, czy opieka zdalna nie jest po prostu podstawiana w przypadkach, które muszą być widziane osobiście.

## Jak to się oblicza

```
Wskaźnik wizyt telemedycznych = kontakty telemedyczne / (kontakty telemedyczne + kontakty osobiste) × 100

Raportuj osobno według sposobu, gdzie to możliwe:
  Wskaźnik wideo    = kontakty wideo / łączna liczba kontaktów × 100
  Wskaźnik telefonu = kontakty tylko telefoniczne / łączna liczba kontaktów × 100

Mianownik powinien liczyć tylko zakończone kontakty (patrz pułapki),
dla określonej usługi, specjalizacji i okresu czasu.
```

## Praktyczny przykład

Środowiskowa usługa zdrowia psychicznego rejestruje 4000 zakończonych kontaktów ambulatoryjnych w kwartale: 1200 osobiście, 1600 przez wideo i 1200 przez telefon. Wskaźnik wizyt telemedycznych wynosi (1600 + 1200) / 4000 × 100 = 70%, przy wskaźniku wideo 40% i wskaźniku samego telefonu 30%. Raportowanie tylko łącznej liczby 70% ukryłoby fakt, że duża część "telemedycyny" jest tutaj wyłącznie audio, co zazwyczaj wiąże się z innym profilem ryzyka klinicznego i doświadczeniem pacjenta niż wideo.

## Źródła danych i zastrzeżenia

Rodzaj kontaktu jest zwykle rejestrowany albo jako pole strukturalne w elektronicznej dokumentacji medycznej (rodzaj wizyty lub lokalizacja), albo wnioskowany z kodów rozliczeniowych, takich jak kod miejsca świadczenia usługi lub modyfikator telemedyczny na roszczeniu. Praktyka kodowania różni się znacznie między organizacjami, a nawet między klinicystami w tej samej organizacji, więc porównanie wskaźników między placówkami powinno najpierw potwierdzić, że "telemedycyna" jest kodowana tak samo w każdej z nich. Wizyta, która zaczyna się jako wideo, ale przechodzi na telefon z powodu problemu technicznego, powinna być kodowana konsekwentnie (zwykle jako sposób, który przekazał większość treści klinicznej), a ta zasada powinna być udokumentowana, a nie pozostawiona indywidualnej ocenie.

## Pułapki

- **Liczenie prób zamiast zakończonych wizyt**: wizyta telemedyczna, która nie udaje się połączyć i jest przekładana, nie powinna podwajać mianownika telemedycznego.
- **Traktowanie wideo i telefonu jako wymiennych**: mają różne implikacje kliniczne i równościowe (telefon wyklucza ocenę wzrokową, ale jest bardziej dostępny dla pacjentów bez smartfona, niezawodnych danych lub prywatnej przestrzeni na wideo); zawsze raportuj je osobno, gdy to możliwe.
- **Ignorowanie związku z niestawiennictwem**: zachowanie niestawiennictwa często różni się w zależności od sposobu; zobacz [wskaźnik niestawiennictwa na wizyty](../appointment-no-show-rate/) przed wyciąganiem wniosków o "poprawionym dostępie" wyłącznie na podstawie rosnącego wskaźnika telemedycznego.
- **Traktowanie wysokiego wskaźnika jako z natury dobrego**: dla niektórych schorzeń i rodzajów konsultacji odpowiedni wskaźnik telemedyczny jest niski z powodu projektu klinicznego, a nie z powodu niedojrzałości cyfrowej.

## Źródła

- Centers for Medicare & Medicaid Services (CMS), dane dotyczące wykorzystania telemedycyny Medicare i publikacje dotyczące polityki
- NHS England, statystyki aktywności usług ambulatoryjnych i środowiskowych, w tym podział na obecność wirtualną/zdalną
- Literatura recenzowana na temat trendów wykorzystania telemedycyny i wyników specyficznych dla danego sposobu
