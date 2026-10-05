# Wskaźnik Odrzucania Alertów Klinicznych

Wskaźnik odrzucania alertów klinicznych mierzy odsetek alertów wsparcia decyzji klinicznych (CDS), takich jak ostrzeżenia o interakcjach lek-lek, alerty alergiczne i kontrole zakresu dawkowania generowane przez system komputerowego wprowadzania zleceń (CPOE), które klinicysta odrzuca lub pomija zamiast na nie reagować. Jest to standardowy sygnał ilościowy używany do wykrywania i zarządzania "zmęczeniem alertami": dobrze udokumentowaną tendencją klinicystów do desensytyzacji wobec alertów, gdy ilość ostrzeżeń o niskiej wartości staje się przytłaczająca.

## Dlaczego to ważne

Publikowane wskaźniki odrzucania dla alertów o interakcjach lekowych powszechnie wahają się od około połowy do ponad dziewięćdziesięciu procent, a wysoki wskaźnik nie oznacza automatycznie awarii bezpieczeństwa: wiele przerywających alertów uruchamia się dla interakcji klinicznie nieistotnych w danym kontekście lub powtarza alert, na który klinicysta już zareagował wcześniej w tym samym zestawie zleceń, więc dobrze skalibrowany system celowo generuje mniej, ale bardziej wartościowych alertów, zamiast próbować doprowadzić wskaźnik odrzucania do zera. Tym, co naprawdę ma znaczenie dla bezpieczeństwa, jest trend w czasie, rozkład w poszczególnych poziomach ważności oraz to, czy klinicyści dokumentują powód przy odrzucaniu alertu o wysokiej ważności; rosnący wskaźnik odrzucania dla interakcji o wysokiej ważności i dobrze udokumentowanych jest rzeczywistym problemem zarządzania, nawet gdy średnia dla wszystkich alertów wydaje się stabilna.

## Jak to się oblicza

```
Wskaźnik odrzucania = odrzucone alerty / łączna liczba wygenerowanych alertów × 100

Segmentuj według:
  - poziomu ważności (np. przeciwwskazane, poważne, umiarkowane)
  - typu alertu (interakcja lek-lek, alergia, terapia zdublowana, zakres dawkowania)
  - tego, czy powód odrzucenia został udokumentowany

"Udokumentowany wskaźnik odrzucania" śledzi odsetek odrzuceń, które
zawierają zarejestrowane uzasadnienie, co samo w sobie jest miarą zarządzania.
```

## Praktyczny przykład

System CPOE szpitala generuje 10 000 alertów o interakcjach lek-lek w ciągu miesiąca, z czego 8700 zostaje odrzuconych, co daje ogólny wskaźnik odrzucania 87%. Segmentacja według ważności pokazuje, że z 500 alertów "przeciwwskazanych" odrzucono 60 (12%), podczas gdy z 6000 alertów "umiarkowanych" odrzucono 5700 (95%). Liczba dla poziomu umiarkowanego jest ogólnie zgodna z opublikowanymi wartościami odniesienia i sama w sobie nie stanowi powodu do niepokoju; liczba dla poziomu przeciwwskazanego wymaga indywidualnego przeglądu przypadków, a fakt, że tylko 340 z 500 odrzuceń na tym poziomie zawiera udokumentowany powód, jest bardziej praktycznym wnioskiem dotyczącym zarządzania.

## Źródła danych i zastrzeżenia

Dziennik audytu elektronicznej dokumentacji medycznej lub własny moduł alertów dostawcy CDS rejestruje każde zdarzenie wywołania alertu i odpowiedzi na niego, w tym to, czy klinicysta wpisał uzasadnienie w formie wolnego tekstu, czy ustrukturyzowane. Porównywanie wskaźników odrzucania między organizacjami, a nawet między oddziałami tej samej organizacji, wymaga sprawdzenia, czy bazowe zestawy reguł alertów i stratyfikacja ważności są takie same; szpital z agresywnie skalibrowanym zestawem reguł wykaże niższy wskaźnik odrzucania z powodów niezwiązanych z zachowaniem klinicystów.

## Pułapki

- **Traktowanie surowego wskaźnika odrzucania jako pojedynczej oceny bezpieczeństwa**: miesza to dobrze uzasadnione odrzucenia alertów o niskiej wartości z niebezpiecznymi odrzuceniami rzeczywiście groźnych interakcji; zawsze segmentuj według ważności.
- **Brak rejestrowania powodu odrzucenia**: bez udokumentowanego powodu nie sposób odróżnić "ten alert był błędny" od "ten alert był prawidłowy, a klinicysta podjął niebezpieczną decyzję", co jest rzeczywistą różnicą istotną dla bezpieczeństwa pacjenta.
- **Inflacja reguł alertów w czasie**: dodawanie kolejnych alertów "na wszelki wypadek" bez usuwania tych o niskiej wartości jest bezpośrednią przyczyną rosnących wskaźników odrzucania i zmęczenia alertami; zarządzanie alertami powinno obejmować regularny przegląd i wycofywanie słabo działających reguł, a nie tylko monitorowanie.
- **Porównywanie wskaźników między systemami o różnym projekcie przerywania**: przerywający, twardo blokujący alert generuje inne zachowanie odrzucania niż pasywny, nieblokujący, więc te dwa nie są bezpośrednio porównywalnymi metrykami.

## Źródła

- Literatura recenzowana na temat zmęczenia alertami we wsparciu decyzji klinicznych, szeroko publikowana w czasopismach, w tym JAMIA i npj Digital Medicine
- ONC / HealthIT.gov, wytyczne dotyczące bezpieczeństwa IT w opiece zdrowotnej w zakresie wsparcia decyzji klinicznych
- Institute for Safe Medication Practices (ISMP), wytyczne dotyczące projektowania i zarządzania alertami CDS
