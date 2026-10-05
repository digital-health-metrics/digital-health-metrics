# Wskaźnik Utrzymania Użytkowników

Wskaźnik utrzymania użytkowników to odsetek użytkowników aktywnych w okresie początkowym, którzy pozostają aktywni w późniejszym okresie, a jego odwrotność, wskaźnik odpływu (lub rezygnacji), to odsetek tych, którzy całkowicie przestają korzystać z produktu. Podczas gdy wskaźnik adopcji portalu pacjenta (zob. ten temat) mierzy, czy pacjent w ogóle w istotny sposób aktywuje produkt zdrowia cyfrowego, utrzymanie mierzy, czy nadal z niego korzysta — a dla każdego produktu zdrowia cyfrowego w modelu subskrypcji lub bieżącej opieki utrzymanie jest zazwyczaj pojedynczą metryką najściślej powiązaną zarówno z wpływem klinicznym, jak i trwałością komercyjną.

## Dlaczego to ważne

Produkt zdrowia cyfrowego, który nie potrafi utrzymać użytkowników, nie może zapewnić trwałej korzyści klinicznej, bez względu na to, jak mocne są jego początkowe wartości adopcji lub aktywacji: narzędzie do zarządzania chorobą przewlekłą używane przez dwa tygodnie, a następnie porzucone, raczej nie poprawi wyniku biometrycznego zależnego od miesięcy trwałej zmiany zachowania. Utrzymanie jest też jedną z komercyjnie najbardziej doniosłych metryk, które firma zdrowia cyfrowego raportuje inwestorom i płatnikom, ponieważ krzywe utrzymania (kształt spadku w czasie, a nie tylko pojedynczy odsetek utrzymania) ujawniają, czy produkt znalazł naprawdę trwały wzorzec użytkowania, czy jedynie przechwytuje początkowe zainteresowanie wynikające z nowości, które przewidywalnie wygasa. Krzywa utrzymania, która wypłaszcza się po początkowym spadku (pacjenci, którzy przetrwają pierwszy miesiąc, zwykle zostają), to sygnał bardzo odmienny, i znacznie zdrowszy, niż krzywa, która nadal systematycznie spada bez dolnej granicy.

## Jak to się oblicza

```
Wskaźnik utrzymania (okres N) = użytkownicy aktywni w okresie N, którzy
                                 byli także aktywni w okresie początkowym
                                 kohorty / użytkownicy w okresie
                                 początkowym kohorty × 100

Wskaźnik odpływu = 1 − wskaźnik utrzymania (dla tego samego okresu)

Raportuj jako kohortową krzywą utrzymania (utrzymanie w dniu/tygodniu/
miesiącu 1, 2, 3…), a nie jedną wartość punktową, ponieważ pojedynczy
obraz łączy niedawno dołączonych użytkowników (którzy nie mieli jeszcze
szansy zrezygnować) z użytkownikami o długim stażu.
```

## Praktyczny przykład

Aplikacja zdrowia cyfrowego zapisuje w styczniu kohortę 1000 nowych użytkowników. Do końca miesiąca 1 aktywnych pozostaje 640 z tych pierwotnych 1000 (utrzymanie w miesiącu 1: 64%). Do końca miesiąca 3 aktywnych pozostaje 410 (utrzymanie w miesiącu 3: 41%). W miesiącu 6 aktywnych pozostaje 380 (utrzymanie w miesiącu 6: 38%). Kształt tej krzywej — stromy początkowy spadek, po którym następuje wypłaszczenie między miesiącami 3 a 6 — sugeruje, że produkt utrzymuje stabilny trzon użytkowników po przekroczeniu początkowej bariery adopcji, co jest sygnałem istotnie odmiennym i bardziej zachęcającym, niż gdyby spadek od miesiąca 3 do 6 trwał w tym samym tempie co w miesiącach 1-3.

## Źródła danych i zastrzeżenia

Utrzymanie oblicza się z własnych dzienników zdarzeń logowania lub aktywności produktu, definiując "aktywność" spójnie (na przykład co najmniej jedna kwalifikująca się sesja w okresie) w każdej porównywanej kohorcie. Kohorty należy porównywać na zasadzie "porównywalne z porównywalnym" — ta sama początkowa definicja "aktywności", ta sama długość okna obserwacji — ponieważ nawet drobne różnice definicyjne (30-dniowe a 28-dniowe miesiące albo ostrzejszy a luźniejszy próg "aktywności") mogą przesunąć raportowany odsetek utrzymania o kilka punktów bez żadnej rzeczywistej różnicy w zachowaniu użytkowników. Efekty sezonowe są częste w aplikacjach zdrowotnych związanych z noworocznymi postanowieniami lub określonymi okresami świadomości zdrowotnej, więc porównanie kohort rok do roku jest zazwyczaj bardziej informatywne niż porównywanie sąsiednich kohort z różnych pór roku.

## Pułapki

- **Raportowanie pojedynczego obrazu utrzymania zamiast krzywej**: pojedyncza wartość "X% użytkowników nadal jest aktywnych", bez kształtu spadku w czasie, nie odróżni produktu, który się wypłaszcza (zdrowo), od tego w ciągłym spadku (niezdrowo).
- **Zmiana definicji "aktywności" między okresami raportowania**: rozluźnienie definicji aktywnego użytkownika (na przykład liczenie biernego otwarcia aplikacji zamiast ukończonego działania) może sprawić, że utrzymanie wydaje się poprawiać, gdy rzeczywiste użytkowanie w ogóle się nie zmieniło.
- **Ignorowanie sezonowości kohort**: porównanie utrzymania kohorty styczniowej (często zawyżonego przez zapisy z noworocznych postanowień, które średnio przyciągają mniej zmotywowaną kohortę) z kohortą pozyskaną o innej porze roku może prowadzić do mylących wniosków o trendach.
- **Łączenie kohort organicznych i pozyskanych płatnie**: użytkownicy pozyskani różnymi kanałami często utrzymują się bardzo różnie; połączenie ich w jedną zagregowaną wartość utrzymania może ukryć problem utrzymania specyficzny dla kanału.

## Źródła

- Literatura recenzowana dotycząca zaangażowania i rezygnacji w aplikacjach zdrowia cyfrowego, na przykład badania opublikowane w Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, wytyczne najlepszych praktyk dotyczące pomiaru zaangażowania i utrzymania w terapiach cyfrowych
- Branżowe raporty benchmarkingowe dotyczące utrzymania w mobilnych aplikacjach zdrowotnych, z platform analitycznych i organizacji badań rynku zdrowia cyfrowego

Zobacz także: [wskaźnik regularności zaangażowania pacjentów](../wskaźnik-regularności-zaangażowania-pacjentów/), który mierzy jakość zaangażowania wśród utrzymanych użytkowników, odmienną od tego, czy w ogóle pozostają w programie.
