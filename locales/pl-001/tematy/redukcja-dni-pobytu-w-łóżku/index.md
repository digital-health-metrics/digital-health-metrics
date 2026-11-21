# Redukcja Dni Pobytu w Łóżku

Redukcja dni pobytu w łóżku mierzy łączną liczbę dni hospitalizacji, których uniknięto dzięki przeniesieniu zdefiniowanego epizodu opieki — najczęściej rekonwalescencji pooperacyjnej lub leczenia stanu ostrego — z tradycyjnego pobytu szpitalnego do alternatywy wspieranej cyfrowo, takiej jak oddział wirtualny lub program hospitalizacji domowej. Jest to podstawowa metryka zdolności przyjmowania pacjentów dla inicjatyw oddziałów wirtualnych i hospitalizacji domowej, przekładająca zmianę klinicznego modelu opieki bezpośrednio na walutę (pojemność łóżkową), którą faktycznie zarządzają działy operacyjne szpitali i planiści systemowi.

## Dlaczego to ważne

Pojemność łóżek szpitalnych jest jednym z najbardziej ograniczonych i najdroższych zasobów w każdym systemie szpitalnym, a główna wartość programu oddziału wirtualnego lub hospitalizacji domowej polega na tym, że może on bezpiecznie zapewnić określony poziom opieki klinicznej bez zajmowania fizycznego łóżka, zwalniając tę pojemność dla pacjentów, których nie da się leczyć w żaden inny sposób. Redukcja dni pobytu w łóżku przekłada często abstrakcyjne twierdzenie ("ten program poprawia opiekę") na konkretną liczbę operacyjną, z której planiści pojemności szpitala, zespoły finansowe i zamawiający mogą bezpośrednio korzystać: można jej użyć do modelowania, czy inwestycja w program monitorowania zwraca się w postaci uniknięcia kosztów łóżek i w jakim stopniu. Ponieważ redukcja dni pobytu w łóżku ma wartość tylko wtedy, gdy zachowane jest bezpieczeństwo pacjentów, należy ją zawsze raportować obok metryki wyniku w zakresie bezpieczeństwa (takiej jak wskaźnik ponownych hospitalizacji lub eskalacji do opieki szpitalnej) dla tej samej populacji, nigdy zamiast niej.

## Jak to się oblicza

```
Redukcja dni pobytu w łóżku = oczekiwana liczba dni pobytu przy standardowej
                     opiece szpitalnej (na podstawie historycznych danych
                     o długości pobytu dla dobranej kohorty pacjentów) −
                     rzeczywista liczba dni pobytu wykorzystanych przez
                     pacjentów na ścieżce wirtualnej/cyfrowej

Raportuj dla każdej ścieżki klinicznej (np. rekonwalescencja pooperacyjna,
ostre zaostrzenie choroby układu oddechowego), ponieważ oczekiwana
długość pobytu bardzo się różni w zależności od schorzenia, a zbiorcza
wartość dla niepowiązanych ścieżek nie ma sensu.
```

## Praktyczny przykład

Historyczne dane szpitala pokazują, że pacjenci wracający do zdrowia po określonym planowym zabiegu chirurgicznym mają średnią długość pobytu szpitalnego wynoszącą 4 dni. Program oddziału wirtualnego obejmuje 150 pacjentów po tym samym zabiegu, wypisując ich po średnio 1,5 dnia pobytu szpitalnego, a resztę rekonwalescencji monitoruje zdalnie. Redukcja dni pobytu w łóżku wynosi (4 − 1,5) × 150 = 375 dni pobytu w okresie pomiarowym. Tę wartość należy raportować obok 30-dniowego wskaźnika eskalacji do opieki szpitalnej i wskaźnika ponownych hospitalizacji dla tych samych 150 pacjentów kohorty oddziału wirtualnego, ponieważ oszczędność dni pobytu okupiona istotnie wyższym wskaźnikiem eskalacji lub ponownych hospitalizacji nie jest sukcesem klinicznym, jaki sugerowałaby sama główna liczba.

## Źródła danych i zastrzeżenia

Oczekiwana liczba dni pobytu wymaga wiarygodnej historycznej linii bazowej, najlepiej z dobranej kohorty pacjentów leczonych w ramach standardowej opieki szpitalnej, o podobnych cechach klinicznych (wiek, choroby współistniejące, rodzaj zabiegu, ciężkość) co populacja oddziału wirtualnego, ponieważ porównanie z niedopasowaną średnią historyczną grozi zawyżeniem lub zaniżeniem rzeczywistej redukcji, jeśli kohorta zarządzana cyfrowo jest systematycznie zdrowsza lub bardziej chora niż historyczna grupa porównawcza. Rzeczywista liczba dni pobytu wykorzystanych na ścieżce cyfrowej pochodzi z własnego systemu przyjęć, wypisów i przeniesień (ADT) szpitala; każda eskalacja z powrotem do opieki szpitalnej w trakcie monitorowanej rekonwalescencji powinna być uczciwie zaliczona na niekorzyść programu (jako wykorzystane dni pobytu, a nie wyłączona), ponieważ pominięcie eskalacji w obliczeniach sztucznie zawyżyłoby pozorną redukcję.

## Pułapki

- **Raportowanie redukcji dni pobytu w łóżku bez dobranego porównania bezpieczeństwa**: oddział wirtualny, który oszczędza dni pobytu, ale ma istotnie gorszy wskaźnik eskalacji lub ponownych hospitalizacji niż standardowa opieka, nie wykazał rzeczywistej poprawy; zawsze raportuj oba wskaźniki razem.
- **Używanie niedopasowanej lub nieaktualnej historycznej linii bazowej**: porównanie z kohortą historyczną o innej strukturze przypadków, obciążeniu chorobami współistniejącymi lub z innej epoki praktyki klinicznej może znacząco zawyżyć lub zaniżyć rzeczywistą oszczędność dni pobytu.
- **Wyłączanie z obliczeń eskalacji z powrotem do opieki szpitalnej**: pacjent monitorowany wirtualnie, który w trakcie rekonwalescencji zostaje przeniesiony do łóżka szpitalnego, powinien mieć te dni pobytu zaliczone na niekorzyść programu, a nie po cichu usunięte z analizy.
- **Łączenie ścieżek o bardzo różnej oczekiwanej długości pobytu**: agregowanie redukcji dni pobytu w łóżku dla klinicznie niepowiązanych ścieżek (na przykład połączenie rekonwalescencji pooperacyjnej i leczenia przewlekłych chorób układu oddechowego) w jedną wartość zaciemnia, która konkretna ścieżka faktycznie generuje oszczędność.

## Źródła

- NHS England, wytyczne dotyczące programów oddziałów wirtualnych i hospitalizacji domowej oraz standardy raportowania wpływu na dni pobytu w łóżku
- Literatura recenzowana dotycząca modeli hospitalizacji domowej i oddziałów wirtualnych, na przykład badania opublikowane w JAMA Internal Medicine i npj Digital Medicine
- Institute for Healthcare Improvement (IHI), wytyczne dotyczące zarządzania pojemnością i alternatywnych modeli opieki

Zobacz także: [wskaźnik ponownych hospitalizacji](../wskaźnik-ponownych-hospitalizacji/), metryka bezpieczeństwa, którą należy zawsze raportować obok każdego twierdzenia o redukcji dni pobytu w łóżku dla tej samej populacji pacjentów.
