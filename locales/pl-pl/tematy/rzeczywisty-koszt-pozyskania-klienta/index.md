# Rzeczywisty Koszt Pozyskania Klienta

Rzeczywisty koszt pozyskania klienta (rzeczywisty CAC) to w pełni obciążony koszt pozyskania jednego nowego płacącego klienta lub zapisanego pacjenta, obejmujący nie tylko wydatki na płatne reklamy, lecz także każdy inny koszt, który istotnie przyczynił się do tego pozyskania: opłaty agencji i kreacji, infrastrukturę technologii marketingowej i analityki oraz — specyficznie dla zdrowia cyfrowego — koszt pracy klinicznej lub operacyjnej związanej z przyjęciem, weryfikacją uprawnień i wdrożeniem pacjenta. Istnieje jako odrębna metryka, ponieważ wartości kosztu pozyskania raportowane przez platformy reklamowe rutynowo i znacząco zaniżają rzeczywisty koszt organizacji na pozyskanego klienta.

## Dlaczego to ważne

Organizacje zdrowia cyfrowego, które zarządzają wzrostem, opierając się wyłącznie na raportowanych przez platformy reklamowe wartościach kosztu na pozyskanie, rutynowo podejmują decyzje o alokacji zasobów na liczbach pomijających 30-50% rzeczywistego kosztu pozyskania, ponieważ te wartości z platform obejmują tylko wydatki na media i pomijają opłaty agencji, licencje technologii marketingowej oraz — co kluczowe w ochronie zdrowia — pracochłonne czynności przyjęcia i weryfikacji uprawnień, które zespół kliniczny lub operacyjny wykonuje dla każdego nowego pacjenta, zanim można go uznać za pozyskanego. Ta luka ma większe znaczenie w zdrowiu cyfrowym niż w większości innych sektorów właśnie dlatego, że praca kliniczna przy przyjęciu jest droga i obowiązkowa, w przeciwieństwie do e-commerce, gdzie "sprzedaż" wymaga zasadniczo żadnej porównywalnej pracy zaplecza. Zespół optymalizujący wydatki marketingowe względem sztucznie niskiej wartości CAC będzie systematycznie przeinwestowywał w kanały, które wyglądają tanio w panelu platformy, ale są drogie po obliczeniu rzeczywistego CAC.

## Jak to się oblicza

```
Rzeczywisty CAC = (wydatki na płatne media + opłaty agencji i kreacji +
                   koszty technologii marketingowej i analityki + koszt
                   pracy klinicznej/operacyjnej przy przyjęciu) / nowi
                   klienci lub pacjenci pozyskani w okresie

Koszt pracy klinicznej/operacyjnej przy przyjęciu należy oszacować na
podstawie obciążonego kosztu pracy (wynagrodzenie, świadczenia, koszty
ogólne) × średnia liczba godzin poświęconych na pozyskanego pacjenta
na przyjęcie, weryfikację uprawnień i wdrożenie.
```

## Praktyczny przykład

Firma zdrowia cyfrowego pozyskuje w miesiącu 500 nowych pacjentów. Panele platform reklamowych raportują zbiorczy koszt na pozyskanie równy 120 USD, na podstawie 60 000 USD wydatków na płatne media. Dodanie opłat agencji w wysokości 9000 USD, kosztów technologii marketingowej 6000 USD i szacunkowego kosztu pracy przy przyjęciu wynoszącego 45 minut na pacjenta przy w pełni obciążonym koszcie personelu 40 USD/godz. (500 × 0,75 × 40 USD = 15 000 USD) daje łączny koszt pozyskania 60 000 USD + 9000 USD + 6000 USD + 15 000 USD = 90 000 USD. Rzeczywisty CAC wynosi 90 000 USD / 500 = 180 USD — o 50% więcej niż wartość 120 USD raportowana wyłącznie przez platformę reklamową, i to jest wartość, która powinna faktycznie wpływać na alokację budżetów kanałów i decyzje dotyczące ekonomiki jednostkowej.

## Źródła danych i zastrzeżenia

Wydatki na płatne media i raportowany przez platformy koszt na pozyskanie pochodzą bezpośrednio z platform reklamowych (wyszukiwanie, media społecznościowe, programmatic); opłaty agencji i koszty technologii marketingowej pochodzą z rejestrów finansowych lub zobowiązań; koszt pracy przy przyjęciu jest składnikiem najtrudniejszym do dokładnego pozyskania i zwykle wymaga badania czasu i ruchu albo rozsądnego oszacowania uzgodnionego z kierownictwem operacyjnym, ponieważ większość organizacji natywnie nie śledzi czasu pracy personelu na jedno pozyskanie. Rzeczywisty CAC należy obliczać dla każdego kanału pozyskania, o ile pozwala na to wolumen, ponieważ koszt pracy przy przyjęciu na pacjenta bywa podobny w różnych kanałach, podczas gdy koszt mediów różni się ogromnie, co oznacza, że luka między CAC raportowanym przez platformę a rzeczywistym jest proporcjonalnie największa dla kanałów wyglądających na najtańsze.

## Pułapki

- **Poleganie wyłącznie na panelach platform reklamowych**: raportowany przez platformy koszt na pozyskanie strukturalnie pomija opłaty agencji, koszty technologii marketingowej i pracę przy przyjęciu i nie zastępuje obliczenia rzeczywistego CAC.
- **Pomijanie pracy klinicznej lub operacyjnej przy przyjęciu**: jest to konsekwentnie najczęściej pomijany składnik kosztów właśnie w zdrowiu cyfrowym i często największy pojedynczy czynnik luki między kosztem raportowanym przez platformę a rzeczywistym CAC.
- **Uśrednianie rzeczywistego CAC dla wszystkich kanałów**: zbiorcza wartość rzeczywistego CAC może ukrywać, że jeden kanał jest dramatycznie droższy po uwzględnieniu pełnych kosztów, mimo że w samej platformie reklamowej wyglądał na najtańszy.
- **Brak aktualizacji szacunków kosztów pracy przy zmianie procesów przyjęcia**: przeprojektowanie procesu przyjęcia (na przykład automatyzacja weryfikacji uprawnień) może istotnie zmienić rzeczywisty CAC, a nieaktualne oszacowanie kosztu pracy zafałszuje bieżącą wartość.

## Źródła

- Association of National Advertisers (ANA), wytyczne dotyczące pomiaru kosztów marketingu i przejrzystości mediów
- Literatura recenzowana i branżowa dotycząca ekonomiki jednostkowej zdrowia cyfrowego i struktur kosztów wejścia na rynek, na przykład analizy publikowane przez Rock Health i podobne organizacje badawcze zdrowia cyfrowego
- Healthcare Financial Management Association (HFMA), wytyczne dotyczące rachunku kosztów w pełni obciążonych w operacjach opieki zdrowotnej

Zobacz także: [stosunek LTV do CAC](../stosunek-ltv-do-cac/), do którego rzeczywisty CAC jest jednym z dwóch danych wejściowych.
