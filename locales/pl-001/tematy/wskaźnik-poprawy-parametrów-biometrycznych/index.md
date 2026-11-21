# Wskaźnik Poprawy Parametrów Biometrycznych

Wskaźnik poprawy parametrów biometrycznych to odsetek pacjentów objętych programem zdrowia cyfrowego, u których w określonym okresie uczestnictwa osiągnięto klinicznie istotną poprawę monitorowanego parametru biometrycznego — najczęściej hemoglobiny glikowanej (HbA1c) w programach diabetologicznych i kardiometabolicznych albo wskaźnika masy ciała (BMI) w programach redukcji masy ciała. Jest to metryka wyników, która ostatecznie uzasadnia deklaracje kliniczne produktu zdrowia cyfrowego: wskaźniki zaangażowania i adopcji opisują, jak produkt jest używany, natomiast poprawa parametrów biometrycznych jest bliższa dowodowi, że produkt działa.

## Dlaczego to ważne

Programy zdrowia cyfrowego są często sprzedawane i zamawiane na podstawie obietnicy poprawy wyników zdrowotnych, a wskaźnik poprawy parametrów biometrycznych jest najbardziej bezpośrednim, policzalnym sposobem zweryfikowania tej obietnicy względem konkretnego, klinicznie uznanego progu, a nie niejasnego twierdzenia o "lepszym zdrowiu". Płatnicy, pracodawcy i systemy opieki zdrowotnej coraz częściej uzależniają refundację lub przedłużenie umowy od wykazanej zmiany parametrów biometrycznych, dlatego program, który nie potrafi wiarygodnie raportować tego wskaźnika, znajduje się w niekorzystnej sytuacji zarówno komercyjnej, jak i klinicznej. Metryka ta stanowi również kontrolę dyscypliny w projektowaniu programu: znacznie łatwiej raportować zaangażowanie (logowania, wysłane wiadomości) niż wyniki, a zespół powinien podchodzić podejrzliwie do każdego programu, który z entuzjazmem raportuje to pierwsze, a pozostaje niejasny co do drugiego.

## Jak to się oblicza

```
Wskaźnik poprawy parametrów biometrycznych = pacjenci, którzy osiągnęli
                              zdefiniowaną klinicznie istotną poprawę /
                              pacjenci z prawidłowym pomiarem wyjściowym
                              i pomiarem kontrolnym × 100

Typowe klinicznie istotne progi:
  HbA1c   — spadek o ≥ 0,5 punktu procentowego albo osiągnięcie
            zdefiniowanej wartości docelowej (np. < 7,0%) z wartości
            wyjściowej poza zakresem
  BMI     — spadek o ≥ 5% wyjściowej masy ciała, utrzymany do punktu
            pomiaru kontrolnego

Raportuj osobno każdy monitorowany parametr biometryczny; nigdy nie
łącz poprawy HbA1c i BMI w jeden zbiorczy odsetek "poprawy".
```

## Praktyczny przykład

Kardiometaboliczny program zdrowia cyfrowego obejmuje 800 pacjentów z wyjściowym poziomem HbA1c poza zakresem. Spośród nich 620 ma zarówno prawidłowy pomiar wyjściowy, jak i pomiar kontrolny po 6 miesiącach (180 osób zostało utraconych z obserwacji i wyłączonych z mianownika, a nie zaliczonych jako niepowodzenia). Spośród 620 pacjentów z parą pomiarów 340 osiąga spadek o co najmniej 0,5 punktu procentowego. Wskaźnik poprawy parametrów biometrycznych wynosi 340 / 620 × 100 = 55%. Odniesienie tego wyniku do wszystkich 800 zapisanych pacjentów (340 / 800 = 42,5%) pomieszałoby utratę z obserwacji z niepowodzeniem leczenia, zaniżając wskaźnik dla pacjentów, którzy faktycznie ukończyli pomiary.

## Źródła danych i zastrzeżenia

Wartości biometryczne wyjściowe i kontrolne pochodzą zazwyczaj z podłączonego urządzenia (glukometru lub inteligentnej wagi z Bluetooth), z wyniku badania laboratoryjnego zaimportowanego z elektronicznej dokumentacji medycznej albo z wartości zgłoszonej samodzielnie przez pacjenta — a te trzy źródła cechują się bardzo różną wiarygodnością, więc źródło powinno być raportowane wraz ze wskaźnikiem. Utrata z obserwacji rzadko bywa losowa: pacjenci, którzy przestają angażować się w program, są często również tymi, u których poprawa jest najmniej prawdopodobna, więc wysoki wskaźnik poprawy obliczony wyłącznie dla pacjentów, którzy ukończyli obserwację, może zawyżać rzeczywisty efekt programu na poziomie populacji. Efekty sezonowe i regresja do średniej są realne zarówno w przypadku HbA1c, jak i masy ciała, dlatego program powinien, jeśli to możliwe, porównywać się z równoległą lub historyczną grupą kontrolną, zamiast traktować każdą poprawę jako dowód skuteczności programu.

## Pułapki

- **Wyłączanie, zamiast raportowania, utraty z obserwacji**: ciche pomijanie w mianowniku pacjentów bez pomiaru kontrolnego może znacząco zawyżyć pozorny wskaźnik poprawy; zawsze raportuj odsetek ukończonych pomiarów kontrolnych obok samego wskaźnika poprawy.
- **Mieszanie pomiarów zgłaszanych samodzielnie i pochodzących z urządzeń bez ich oznaczania**: masa ciała zgłoszona samodzielnie jest systematycznie mniej wiarygodna niż odczyt z podłączonej inteligentnej wagi, a łączenie obu źródeł zaciemnia, jaka część pozornej poprawy jest szumem pomiarowym.
- **Brak grupy kontrolnej lub scenariusza kontrfaktycznego**: wiele przewlekłych miar biometrycznych samoistnie się waha lub regresuje do średniej; wskaźnik poprawy w jednym ramieniu, bez żadnej grupy porównawczej, jest przesłanką sugestywną, a nie rozstrzygającym dowodem skuteczności programu.
- **Traktowanie niewielkiej średniej zmiany jako dowodu szerokiej poprawy**: niewielka średnia poprawa na poziomie populacji może wynikać z kilku osób o bardzo dużej odpowiedzi, podczas gdy u większości pacjentów nie widać zmiany; raportuj rozkład (np. odsetek osób przekraczających klinicznie istotny próg), a nie tylko średnie przesunięcie.

## Źródła

- American Diabetes Association (ADA), Standards of Care in Diabetes, wytyczne dotyczące docelowego poziomu HbA1c i klinicznie istotnej zmiany
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, wytyczne dotyczące ewaluacji programów
- Literatura recenzowana dotycząca wyników cyfrowych programów diabetologicznych i redukcji masy ciała, na przykład badania opublikowane w npj Digital Medicine i Diabetes Care

Zobacz także: [wskaźnik przestrzegania zaleceń lekowych](../wskaźnik-przestrzegania-zaleceń-lekowych/), częsty czynnik wpływający wcześniej na poprawę parametrów biometrycznych w programach dla chorób przewlekłych.
