# Czas Realizacji Cyfrowego Skierowania

Czas realizacji cyfrowego skierowania to czas, jaki upływa od złożenia elektronicznego skierowania przez kierującego klinicystę do momentu, gdy zostanie ono poddane triażowi i przyjęte, odrzucone lub zarezerwowane przez usługę odbierającą. Jest to metryka procesowa (przepływu), odrębna od całkowitego czasu oczekiwania pacjenta, i jest jednym z najwyraźniejszych miejsc, w których zmiana systemu cyfrowego (ustrukturyzowane e-skierowanie, triaż oparty na obrazach, standaryzowane formularze skierowań) może wykazać przesunięcie wskaźnika operacyjnego, a nie tylko wyniku satysfakcji.

## Dlaczego to ważne

Wolny lub bardzo zmienny etap triażu dodaje opóźnienie, zanim pacjent w ogóle dołączy do klinicznej listy oczekujących, a ponieważ to opóźnienie występuje przed rozpoczęciem jakiejkolwiek opieki klinicznej, jest to czysta strata procesowa, którą narzędzia cyfrowe są dobrze przygotowane do usunięcia. Systemy skierowań, które wymuszają cykl "powrotu do kierującego" z powodu brakujących informacji, tworzą pętle powtórnej pracy, które łatwo przeoczyć, jeśli czas realizacji jest mierzony tylko dla skierowań, które przechodzą czysto za pierwszym razem. Tam, gdzie usługa wprowadziła ustrukturyzowane cyfrowe formularze skierowań, obowiązkowe pola lub triaż oparty na obrazach (na przykład w teledermatologii), czas realizacji jest zwykle pojedynczą, najbardziej przekonującą metryką do wykazania korzyści, ponieważ można go zmierzyć przed i po zmianie za pomocą tego samego narzędzia pomiarowego.

## Jak to się oblicza

```
Czas realizacji = znacznik czasu(decyzja triażu) − znacznik czasu(złożenie skierowania)

Raportuj medianę i wysoki percentyl (zwykle 90.), a nie tylko średnią,
ponieważ rozkład jest silnie prawoskośny z powodu zwróconych lub
złożonych skierowań.

Rozważ czasy podetapów tam, gdzie system je rejestruje:
  Złożenie → odebrane przez usługę
  Odebrane → decyzja triażu
  Decyzja triażu → zarezerwowana wizyta (tam, gdzie ma to zastosowanie)
```

## Praktyczny przykład

Ślad audytowy systemu e-skierowań pokazuje medianę czasu od złożenia do decyzji triażu wynoszącą 1,8 dnia we wszystkich specjalizacjach, przy 90. percentylu wynoszącym 6 dni, spowodowanym głównie przez skierowania zwracane do kierującego z powodu brakujących informacji klinicznych. Ścieżka teledermatologiczna wykorzystująca triaż oparty na obrazach na tej samej platformie osiąga medianę czasu realizacji wynoszącą 4 godziny i 90. percentyl wynoszący 1 dzień, ponieważ zdjęcie i ustrukturyzowany wywiad są niemal zawsze wystarczające do podjęcia decyzji triażowej bez potrzeby dalszej korespondencji.

## Źródła danych i zastrzeżenia

Własny ślad audytowy systemu e-skierowań lub zarządzania skierowaniami jest głównym źródłem, wykorzystującym znaczniki czasu złożenia i decyzji; organizacje powinny potwierdzić, czy "zegar" zatrzymuje się, gdy skierowanie jest zwracane w celu uzyskania dodatkowych informacji, czy działa nieprzerwanie, ponieważ obie definicje dają istotnie różne liczby dla tego samego procesu bazowego. Czas realizacji powinien być raportowany konsekwentnie w czasie kalendarzowym lub czasie roboczym, ponieważ efekty weekendów i świąt mogą inaczej zniekształcać porównania między usługami o różnych wzorcach pracy.

## Pułapki

- **Mierzenie tylko "czystych" skierowań**: wykluczenie odrzuconych lub zwróconych skierowań z obliczeń ukrywa ciężar powtórnej pracy, który narzędzia cyfrowe często mają za zadanie konkretnie zmniejszyć.
- **Raportowanie średniej zamiast mediany i percentyli**: niewielka liczba długotrwałych, zwróconych skierowań przeciągnie średnią znacznie powyżej rzeczywistego doświadczenia typowego pacjenta.
- **Mylenie czasu realizacji z całkowitym czasem oczekiwania**: czas realizacji obejmuje tylko etap triażu; całkowite doświadczenie pacjenta obejmuje również dalszą kliniczną listę oczekujących, która jest odrębną metryką rządzoną odrębnymi ograniczeniami zdolności.
- **Nierozróżnianie podetapów**: usługa, która mierzy tylko czas od początku do końca, nie może stwierdzić, czy wolna liczba jest spowodowana przez kierujących przesyłających niepełne informacje, zdolność triażową usługi odbierającej, czy oba czynniki.

## Źródła

- NHS England, statystyki i specyfikacje usługi e-Referral Service (e-RS)
- Literatura recenzowana na temat elektronicznych systemów zarządzania skierowaniami i cyfrowych ścieżek triażu, w tym teledermatologii
- ONC / HealthIT.gov, wytyczne dotyczące interoperacyjności i koordynacji skierowań
