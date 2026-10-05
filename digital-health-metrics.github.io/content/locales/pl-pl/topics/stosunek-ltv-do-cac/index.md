# Stosunek LTV do CAC

Stosunek LTV do CAC porównuje wartość życiową klienta (LTV) — łączny przychód lub marżę, jaką organizacja spodziewa się uzyskać od pacjenta lub klienta w trakcie całej jego relacji z produktem — z rzeczywistym kosztem pozyskania tego klienta (zob. rzeczywisty koszt pozyskania klienta). Jest to najważniejsza pojedyncza metryka ekonomiki jednostkowej do oceny, czy wzrost organizacji zdrowia cyfrowego jest finansowo zrównoważony, ponieważ rosnąca baza klientów pozyskiwana ze stratą nie jest oznaką kondycji, bez względu na to, jak pozytywnie wygląda krzywa wzrostu.

## Dlaczego to ważne

Organizacja zdrowia cyfrowego może stale powiększać bazę użytkowników, po cichu niszcząc wartość przy każdym nowym kliencie, jeśli koszt pozyskania przekracza wartość życiową; stosunek LTV do CAC jest metryką, która uwidacznia to w sposób, jakiego nie zapewni sama dynamika wzrostu ani surowa liczba klientów. Stosunek 3:1 (wartość życiowa co najmniej trzykrotnie wyższa niż koszt pozyskania) jest powszechnie przywoływanym bazowym punktem odniesienia dla zrównoważonego biznesu opartego na subskrypcji lub przychodach cyklicznych, pozostawiającym dość marży na pokrycie kosztów operacyjnych poza pozyskaniem i nadal generującym zwrot; stosunek poniżej 1:1 oznacza, że organizacja traci pieniądze na każdym pozyskanym kliencie, a stosunek znacznie powyżej 3:1 (na przykład 10:1 lub wyższy) może w rzeczywistości wskazywać na niedoinwestowanie wzrostu, ponieważ sugeruje, że organizacja mogłaby rentownie pozyskiwać więcej klientów, niż obecnie to robi. Inwestorzy, zarządy i płatnicy oceniający zrównoważenie finansowe firmy zdrowia cyfrowego traktują ten stosunek jako jedną z pierwszych liczb, o które pytają.

## Jak to się oblicza

```
LTV = średni przychód (lub marża) na klienta w okresie × średni czas
      życia klienta w tej samej jednostce okresu

Stosunek LTV do CAC = LTV / rzeczywisty CAC

Stosunek 3:1 to powszechnie przywoływany zrównoważony punkt odniesienia;
poniżej 1:1 oznacza, że organizacja traci na pozyskiwaniu; znacznie
powyżej 3:1 (np. 10:1+) może wskazywać na niedoinwestowanie wzrostu.
```

## Praktyczny przykład

Cyfrowa usługa zdrowotna w modelu subskrypcji generuje średni miesięczny przychód 40 USD na pacjenta, a przeciętny pacjent pozostaje subskrybentem przez 18 miesięcy, co daje LTV równe 40 USD × 18 = 720 USD. Rzeczywisty CAC tej usługi (zob. podejście z praktycznego przykładu w tamtym temacie) wynosi 180 USD na pozyskanego pacjenta. Stosunek LTV do CAC wynosi 720 USD / 180 USD = 4:1, wyraźnie powyżej bazowej wartości zrównoważenia 3:1. Gdyby rzeczywisty CAC obliczono wyłącznie na podstawie kosztu raportowanego przez platformę reklamową (120 USD, przed doliczeniem opłat agencji i pracy przy przyjęciu pacjenta), stosunek wyglądałby jak 6:1 — obraz ekonomiki jednostkowej istotnie korzystniejszy, a przy tym zwodniczy, w porównaniu z rzeczywistą wartością 4:1.

## Źródła danych i zastrzeżenia

LTV zależy od założenia dotyczącego średniego czasu życia klienta, który z kolei wynika z własnych danych organizacji o utrzymaniu lub odpływie (zob. wskaźnik utrzymania użytkowników) — firma o wysokim odpływie ma krótszy efektywny średni czas życia, a więc niższe LTV, nawet jeśli przychód na klienta w okresie wygląda zdrowo. Ponieważ LTV jest oszacowaniem wybiegającym w przyszłość, a nie zaobserwowanym faktem historycznym, należy go regularnie przeliczać w miarę gromadzenia danych o utrzymaniu i korygować, jeśli założenia dotyczące odpływu okażą się błędne, zamiast ustalać go raz i pozostawiać nieaktualnym. Używanie w tym stosunku CAC raportowanego przez platformę zamiast rzeczywistego CAC jest jednym z najczęstszych sposobów, w jaki organizacja może przekonać samą siebie, że jej ekonomika jednostkowa jest zdrowsza, niż jest naprawdę, ponieważ zaniżony CAC mechanicznie zawyża stosunek.

## Pułapki

- **Używanie CAC raportowanego przez platformę zamiast rzeczywistego CAC**: mechanicznie zawyża to stosunek i może sprawić, że niezrównoważona strategia pozyskiwania wygląda na zrównoważoną; zawsze używaj w pełni obciążonej wartości rzeczywistego CAC.
- **Używanie nieaktualnego lub optymistycznego założenia dotyczącego średniego czasu życia klienta**: LTV obliczone na podstawie nieaktualnej krzywej utrzymania nie odzwierciedli bieżącego zachowania w zakresie odpływu, zwłaszcza po zmianie produktu, cennika lub rynku, która przesuwa utrzymanie.
- **Traktowanie bardzo wysokiego stosunku jako jednoznacznie dobrego**: stosunek znacznie powyżej 3:1 może sygnalizować niedoinwestowanie wzrostu, a nie wyjątkową efektywność, ponieważ oznacza, że organizacja mogłaby prawdopodobnie rentownie pozyskiwać więcej klientów, niż obecnie.
- **Obliczanie jednego zbiorczego stosunku dla bardzo różnych segmentów klientów**: segment o wysokim przychodzie i niskim odpływie może maskować inny segment o słabej ekonomice jednostkowej; oblicz stosunek dla każdego istotnego segmentu (np. według kanału pozyskania lub linii produktów), tam gdzie pozwala na to wolumen.

## Źródła

- Literatura recenzowana i branżowa dotycząca ekonomiki jednostkowej subskrypcji i przychodów cyklicznych, powszechnie stosowane ramy benchmarkingu z funduszy venture capital i organizacji badawczych metryk SaaS
- Healthcare Financial Management Association (HFMA), wytyczne dotyczące metryk zrównoważenia finansowego organizacji zdrowia cyfrowego
- Rock Health i podobne organizacje badań rynku zdrowia cyfrowego, branżowy benchmarking ekonomiki jednostkowej zdrowia cyfrowego

Zobacz także: [rzeczywisty koszt pozyskania klienta](../rzeczywisty-koszt-pozyskania-klienta/) oraz [wskaźnik efektywności marketingu](../wskaźnik-efektywności-marketingu/), pozostałe dwie podstawowe metryki ekonomiki wzrostu, obok których ten stosunek jest zazwyczaj raportowany.
