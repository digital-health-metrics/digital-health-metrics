# Wskaźnik Wypalenia Zawodowego Lekarzy

Wskaźnik wypalenia zawodowego lekarzy mierzy odsetek klinicystów zgłaszających istotne objawy wypalenia — powszechnie oceniane jako wyczerpanie emocjonalne, depersonalizacja lub niskie poczucie osobistych osiągnięć za pomocą zwalidowanego narzędzia ankietowego — i w zdrowiu cyfrowym jest śledzony obok miar obciążenia klinicystów narzędziami cyfrowymi, takich jak czas poświęcany na pracę papierkową lub dokumentowanie w elektronicznej dokumentacji medycznej (EHR). Znajduje się w ramach metryk zdrowia cyfrowego, ponieważ źle zaprojektowane oprogramowanie kliniczne jest dobrze udokumentowanym, mierzalnym czynnikiem wypalenia, a sukcesu narzędzia zdrowia cyfrowego nigdy nie należy oceniać wyłącznie na podstawie metryk skierowanych do pacjentów, ignorując jego wpływ na klinicystów, którzy muszą je obsługiwać.

## Dlaczego to ważne

Narzędzia zdrowia cyfrowego są często wprowadzane z wyraźnym celem zmniejszenia obciążenia administracyjnego klinicystów, ale źle zaprojektowany przepływ pracy w elektronicznej dokumentacji medycznej, nadmierna liczba mało wartościowych alertów klinicznych (zob. wskaźnik odrzucania alertów klinicznych) lub niezgrabny interfejs telemedyczny mogą równie łatwo zwiększać wypalenie, jak je zmniejszać — a narzędzie, które poprawia metrykę zaangażowania skierowaną do pacjentów, po cichu zwiększając obciążenie klinicystów dokumentacją, nie przyniosło dodatniego wyniku netto dla całego systemu opieki. Wypalenie jest w literaturze klinicznej silnie powiązane z błędami medycznymi, rotacją klinicystów i obniżoną jakością opieki, więc działa jako wskaźnik wyprzedzający późniejszych problemów z bezpieczeństwem i trwałością zasobów kadrowych, a nie tylko miły dodatek do satysfakcji z pracy. Każdy program zdrowia cyfrowego, który deklaruje zmniejszenie obciążenia klinicznego, powinien móc wykazać to względem zmierzonej linii bazowej, a nie jedynie deklarować jako zamiar projektowy.

## Jak to się oblicza

```
Wskaźnik wypalenia zawodowego lekarzy = klinicyści z wynikiem powyżej
                          progu wypalenia zwalidowanego narzędzia /
                          łączna liczba ankietowanych klinicystów × 100

Powszechne zwalidowane narzędzia: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index lub pojedyncze pytanie przesiewowe
dotyczące wypalenia zwalidowane względem pełniejszego narzędzia.

Raportuj obok przybliżenia obciążenia cyfrowego, jeśli jest dostępne:
  czas w systemie EHR na jedno spotkanie z pacjentem
  czas dokumentowania poza zaplanowanymi godzinami klinicznymi
  ("pajama time", czyli praca w domu po godzinach)
```

## Praktyczny przykład

System szpitalny ankietuje 300 lekarzy za pomocą Maslach Burnout Inventory przed wprowadzeniem narzędzia do ambientowej dokumentacji klinicznej, mającego skrócić czas pisania notatek. W punkcie wyjścia 135 lekarzy (45%) przekracza próg wypalenia, a dane z dziennika audytu EHR pokazują średnio 58 minut dziennie czasu dokumentowania na lekarza poza zaplanowanymi godzinami klinicznymi. Sześć miesięcy po wdrożeniu narzędzia ponowna ankieta tych samych lekarzy wykazuje 108 (36%) powyżej progu wypalenia, wraz ze spadkiem czasu dokumentowania po godzinach do 34 minut dziennie. Skorelowana zmiana zarówno wskaźnika wypalenia, jak i obiektywnego przybliżenia opartego na EHR wzmacnia argument, że narzędzie przyczynia się do poprawy, choć formalne porównanie przed/po powinno nadal uwzględniać inne równoczesne zmiany obciążenia pracą w tym samym okresie.

## Źródła danych i zastrzeżenia

Dane ankietowe o wypaleniu pochodzą ze zwalidowanego narzędzia stosowanego cyklicznie (co roku lub częściej), a wskaźnik odpowiedzi ma znaczenie: niski wskaźnik odpowiedzi grozi błędem braku odpowiedzi, gdy najbardziej wypaleni klinicyści (z najmniejszą zdolnością do wypełnienia dodatkowej ankiety) są systematycznie niedoreprezentowani, co zaniża rzeczywisty wskaźnik. Oparte na EHR przybliżenia obciążenia cyfrowego — czas w systemie, czas dokumentowania po godzinach, liczba kliknięć na spotkanie — są użytecznymi, obiektywnymi i stale dostępnymi uzupełnieniami okresowych danych ankietowych, ale przed potraktowaniem ich jako wiarygodnego samodzielnego wskaźnika wypalenia powinny zostać zwalidowane względem zgłaszanego w ankietach wypalenia w danej organizacji, ponieważ związek między czasem w systemie a faktycznym wypaleniem może różnić się w zależności od specjalności i indywidualnego stylu pracy.

## Pułapki

- **Poleganie wyłącznie na przybliżeniach opartych na EHR**: czas w systemie i liczba kliknięć korelują z wypaleniem w ujęciu zagregowanym, ale nie są tym samym co samo wypalenie i mogą wprowadzać w błąd w przypadku pojedynczych klinicystów lub specjalności o rzeczywiście odmiennych potrzebach dokumentacyjnych.
- **Niski wskaźnik odpowiedzi w ankiecie maskujący rzeczywisty wskaźnik**: klinicyści najbardziej dotknięci wypaleniem często mają najmniejszą zdolność do odpowiedzi na dobrowolną ankietę, co obciąża wynik o niskim wskaźniku odpowiedzi w stronę sztucznie zdrowiej wyglądającej wartości.
- **Przypisywanie zmiany wypalenia jednemu narzędziu bez uwzględnienia czynników zakłócających**: na wypalenie wpływa wiele równoczesnych czynników (obsada kadrowa, liczba pacjentów, zmiana organizacyjna); porównanie przed/po wokół wdrożenia jednego narzędzia powinno, o ile to możliwe, kontrolować te czynniki, zamiast zakładać jedną przyczynę.
- **Traktowanie wypalenia wyłącznie jako kwestii indywidualnej odporności**: badania nad wypaleniem konsekwentnie wskazują obciążenie pracą, projekt systemu i czynniki organizacyjne jako główne przyczyny; ujmowanie go wyłącznie jako problemu pojedynczego klinicysty kieruje interwencje z dala od narzędzi cyfrowych i przepływów pracy, które są często rzeczywistą przyczyną źródłową.

## Źródła

- Maslach Burnout Inventory (MBI), zwalidowane narzędzie ankietowe i wytyczne dotyczące punktacji
- American Medical Association (AMA), badania nad wypaleniem lekarzy oraz program doskonalenia praktyki STEPS Forward
- Literatura recenzowana dotycząca użyteczności EHR, obciążenia dokumentacją i wypalenia klinicystów, na przykład badania opublikowane w JAMIA i Annals of Internal Medicine

Zobacz także: [wskaźnik odrzucania alertów klinicznych](../wskaźnik-odrzucania-alertów-klinicznych/), ponieważ zmęczenie alertami jest jednym z bardziej konkretnych, mierzalnych czynników wypalenia klinicystów, na które narzędzia cyfrowe mogą bezpośrednio wpływać.
