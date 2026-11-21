# ISO/TS 82304-2

ISO/TS 82304-2 to międzynarodowa specyfikacja techniczna, opublikowana przez Komitet Techniczny ISO 215 (Informatyka Zdrowotna), która definiuje ustrukturyzowaną metodę oceny jakości aplikacji zdrowotnych i prozdrowotnych — obejmującą użyteczność, odporność techniczną i niezawodność, interoperacyjność, jakość treści oraz bezpieczeństwo i prywatność danych — dla produktów, które nie podlegają pełnej regulacji wyrobów medycznych, lecz mimo to istotnie wpływają na decyzje zdrowotne lub zachowania użytkownika. Istnieje, aby wypełnić konkretną lukę: zdecydowana większość aplikacji zdrowotnych i prozdrowotnych kierowanych do konsumentów (opaski fitness, dzienniki objawów, aplikacje do coachingu prozdrowotnego) nie jest regulowana jako wyroby medyczne, a wcześniej nie istniał wspólny, ustrukturyzowany sposób oceny lub porównywania ich podstawowej jakości i bezpieczeństwa.

## Dlaczego to ważne

Sklepy z aplikacjami oferują setki tysięcy aplikacji zdrowotnych i prozdrowotnych o ogromnie zróżnicowanej jakości, a zanim powstała wspólna specyfikacja techniczna, pacjent, klinicysta lub system opieki zdrowotnej nie miał ustrukturyzowanego, porównywalnego sposobu oceny podstawowej jakości i bezpieczeństwa jednej aplikacji względem drugiej poza ocenami w gwiazdkach i twierdzeniami marketingowymi — luka ta ma znaczenie, ponieważ źle zaprojektowana aplikacja zdrowotna może wyrządzić realną szkodę (niedokładne treści, słabe bezpieczeństwo danych, wprowadzające w błąd twierdzenia), nawet nie osiągając regulacyjnego progu wyrobu medycznego. ISO/TS 82304-2 jest celowo ustrukturyzowana wokół obszarów, które recenzent niebędący specjalistą może oceniać spójnie, co uczyniło ją podstawą techniczną kilku krajowych i komercyjnych usług oznaczania jakości i kuracji aplikacji zdrowotnych, dając systemom opieki zdrowotnej i bibliotekom aplikacji uzasadniony, ustandaryzowany sposób włączania lub wyłączania aplikacji z listy rekomendowanej, zamiast polegania na doraźnym osądzie.

## Jak się ją stosuje

```
Ocena jest zorganizowana wokół zdefiniowanych obszarów jakości,
oceniana w ustrukturyzowanym przeglądzie, a nie według jednego wzoru
liczbowego:

Użyteczność                      — przejrzystość, dostępność i łatwość
                                    użycia dla zamierzonej grupy
                                    użytkowników
Odporność techniczna/niezawodność — stabilność, wydajność i brak
                                    defektów technicznych
Interoperacyjność                — zdolność do wymiany danych z innymi
                                    systemami, jeśli ma to znaczenie dla
                                    funkcji aplikacji
Jakość i bezpieczeństwo treści   — dokładność, aktualność i brak
                                    szkodliwych lub wprowadzających
                                    w błąd twierdzeń zdrowotnych
Bezpieczeństwo i prywatność      — praktyki ochrony danych i przejrzystość
                                    co do wykorzystania danych

Każdy obszar jest oceniany według ustrukturyzowanych kryteriów
przeglądu i łączony w ogólną ocenę jakości, którą kilka programów
oznaczania jakości aplikacji zdrowotnych wykorzystuje jako podstawę
techniczną publicznego oznaczenia jakości lub decyzji o włączeniu do
kuratorowanej biblioteki.
```

## Praktyczny przykład

Program biblioteki aplikacji cyfrowych systemu opieki zdrowotnej chce opracować rekomendowaną listę aplikacji prozdrowotnych dla pacjentów, zamiast pozostawiać wybór aplikacji wyłącznie wyszukiwarce sklepu z aplikacjami. Każda kandydująca aplikacja jest oceniana względem obszarów ISO/TS 82304-2: aplikacja do śledzenia snu uzyskuje dobre wyniki w zakresie użyteczności i odporności technicznej, odpowiednie w zakresie jakości treści, ale w trakcie przeglądu bezpieczeństwa i prywatności zostaje oznaczona za udostępnianie danych użytkowników zewnętrznym reklamodawcom bez jasnego ujawnienia — ustalenie na tyle istotne, że wyklucza aplikację z listy rekomendowanej mimo jej poza tym wysokiej oceny użyteczności. Taki wynik obszar po obszarze jest bardziej przydatny do działania zarówno dla zespołu kuracji, jak i — jeśli zostanie udostępniony — dla samego dewelopera aplikacji niż jedna zbiorcza ocena jakości, ponieważ wskazuje dokładnie, który aspekt wymaga naprawy, zanim aplikacja mogłaby zostać ponownie rozważona.

## Źródła danych i zastrzeżenia

Ocenę względem ISO/TS 82304-2 przeprowadza zazwyczaj przeszkolony recenzent lub akredytowana usługa oceny, zgodnie z ustrukturyzowanymi kryteriami przeglądu specyfikacji dla każdego obszaru, a kilka krajowych i komercyjnych inicjatyw (organizacje oznaczania jakości i kuracji aplikacji zdrowotnych, część z nich działająca pod formalnym poparciem krajowego systemu ochrony zdrowia) wykorzystuje tę normę jako podstawę techniczną własnych, publicznych oznaczeń jakości aplikacji — co oznacza, że status "certyfikowanej" lub "oznaczonej" aplikacji w praktyce często odzwierciedla wdrożenie normy w konkretnym programie oznaczania, a niekoniecznie identyczny proces w każdym programie, dlatego organizację przeprowadzającą ocenę i jej metodologię należy sprawdzić i ujawnić obok każdego przywoływanego oznaczenia jakości. Specyfikacja ocenia jakość i podstawowe cechy bezpieczeństwa aplikacji jako oprogramowania; nie zastępuje regulacyjnego dopuszczenia wyrobu medycznego tam, gdzie twierdzenia lub funkcje aplikacji faktycznie spełniają próg wyrobu medycznego, a traktowanie jej w ten sposób byłoby błędem kategorii.

## Pułapki

- **Traktowanie oznaczenia jakości jako dopuszczenia regulacyjnego**: aplikacja oceniona i oznaczona na podstawie ISO/TS 82304-2 nie uzyskała przez to regulacyjnego zatwierdzenia jako wyrób medyczny; oba mechanizmy służą różnym celom i nigdy nie należy ich mylić w sposobie opisywania lub promowania aplikacji.
- **Zakładanie, że wszystkie programy oznaczania oparte na normie są równoważne**: różne organizacje wdrażają ocenę opartą na ISO/TS 82304-2 z własnymi procesami przeglądu i rygorem; sprawdzaj, która organizacja przeprowadziła ocenę i w jaki sposób, zamiast traktować każde oznaczenie "oparte na ISO/TS 82304-2" jako wymienne z jakimkolwiek innym.
- **Ocenianie wyłącznie użyteczności z pominięciem bezpieczeństwa i prywatności**: problemy z użytecznością są najbardziej widoczne dla użytkownika końcowego i najłatwiejsze do nieformalnej oceny, co może prowadzić recenzentów do niedoważenia mniej widocznego, ale potencjalnie ważniejszego obszaru bezpieczeństwa i prywatności.
- **Traktowanie oceny jako jednorazowej, stałej certyfikacji**: treści aplikacji, praktyki bezpieczeństwa i ustalenia dotyczące udostępniania danych podmiotom trzecim mogą się zmienić po pierwotnej ocenie; wiarygodny program oznaczania jakości przeprowadza ponowną ocenę okresowo, a nie traktuje wstępnego zaliczenia jako trwałego.

## Źródła

- International Organisation for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- Komitet Techniczny ISO 215 (Informatyka Zdrowotna), informacje o publikacjach i grupach roboczych
- Krajowe i komercyjne organizacje oznaczania jakości i kuracji aplikacji zdrowotnych, które publikują metodologię oceny opartą na tej normie

Zobacz także: [wynik skali użyteczności systemu](../wynik-skali-użyteczności-systemu/), komplementarne, węższe narzędzie ukierunkowane na użyteczność, często stosowane obok szerszej oceny jakości ISO/TS 82304-2.
