# Wskaźnik Przestrzegania Zaleceń Lekowych

Wskaźnik przestrzegania zaleceń lekowych mierzy, w jakim stopniu pacjent przyjmuje przepisany lek zgodnie z zaleceniami, najczęściej wyrażany jako odsetek dni w określonym okresie, w których pacjent miał dostęp do leku zgodnie z receptą. Jest to jedna z najważniejszych metryk zdrowia cyfrowego, ponieważ nieprzestrzeganie zaleceń jest powszechne, w dużej mierze możliwe do uniknięcia przy odpowiednim wsparciu i bezpośrednio powiązane z gorszymi wynikami klinicznymi oraz wyższymi kosztami następczymi — i właśnie tę lukę mają zamykać aplikacje z przypomnieniami o lekach, inteligentne pojemniki na tabletki oraz zachęty do realizacji ponownych recept w aptekach.

## Dlaczego to ważne

Według szacunków organów zdrowia publicznego nieprzestrzeganie zaleceń dotyczących leków w chorobach przewlekłych sięga w niektórych schorzeniach nawet 50% i jest jedną z głównych możliwych do uniknięcia przyczyn niepotrzebnych hospitalizacji, progresji choroby i niepowodzeń leczenia, które bywają błędnie przypisywane samemu lekowi, a nie niekonsekwentnemu stosowaniu. Cyfrowe narzędzia wspierające przestrzeganie zaleceń istnieją właśnie po to, by zamknąć tę lukę, więc w każdym programie zawierającym komponent lekowy wskaźnik przestrzegania jest zazwyczaj pojedynczą metryką o największym znaczeniu decyzyjnym: leży przyczynowo przed poprawą parametrów biometrycznych, ponownymi hospitalizacjami i większością innych metryk wyników klinicznych, które program mógłby raportować. Program, który poprawia zaangażowanie lub satysfakcję bez zmiany przestrzegania zaleceń, prawdopodobnie nie wykazał jeszcze wiarygodnego mechanizmu korzyści klinicznej.

## Jak to się oblicza

```
Odsetek dni pokrytych (PDC) = dni w okresie z dostępnym lekiem (na
                               podstawie liczby dni zaopatrzenia
                               z realizacji recept) / dni w okresie
                               pomiarowym × 100

Wskaźnik posiadania leku (MPR) = łączna liczba dni zaopatrzenia
                               uzyskanych w okresie / dni w okresie
                               × 100 (może przekraczać 100% przy
                               wcześniejszych realizacjach; z tego
                               powodu zazwyczaj preferuje się PDC)

Pacjenta zwykle klasyfikuje się jako "przestrzegającego zaleceń"
przy progu PDC ≥ 80%, zgodnie z powszechnie stosowaną konwencją
miar jakości.
```

## Praktyczny przykład

Pacjentowi przepisano codzienny lek przewlekły na 90-dniowy okres pomiarowy. Dane o realizacji recept w aptece pokazują, że pacjent uzyskał ilość leku wystarczającą na 76 z tych 90 dni, z dwiema lukami: 9-dniową luką po wyczerpaniu zapasu przed realizacją ponownej recepty i 5-dniową luką w okolicy przyjęcia do szpitala. PDC wynosi 76 / 90 × 100 = 84%, co przekracza konwencjonalny próg przestrzegania zaleceń 80%. Gdyby te same luki zmierzyć za pomocą MPR opartego na dniach zaopatrzenia wydanych, a nie dniach faktycznie pokrytych, wcześniejsza realizacja gdzie indziej w okresie mogłaby podnieść wskaźnik powyżej 100%, co ilustruje, dlaczego PDC jest miarą bardziej konserwatywną i zazwyczaj preferowaną.

## Źródła danych i zastrzeżenia

Standardowym źródłem są dane o roszczeniach aptecznych lub realizacji recept (od menedżera świadczeń farmaceutycznych lub z podłączonego systemu aptecznego), ponieważ odzwierciedlają to, co pacjent faktycznie uzyskał, a nie to, co mu przepisano; same dane o receptach zawyżają przestrzeganie zaleceń, gdyż nie potwierdzają, że pacjent w ogóle odebrał lek. Cyfrowe narzędzia wspierające przestrzeganie zaleceń — inteligentne pojemniki na tabletki, czujniki połykane, podłączone inteligentne inhalatory rejestrujące każde użycie w chorobach układu oddechowego takich jak astma i POChP oraz zgłoszenia w aplikacjach — dostarczają danych o wyższej rozdzielczości na temat tego, czy dawka została faktycznie przyjęta, a nie tylko uzyskana, ale są używane przez niewielką, potencjalnie niereprezentatywną mniejszość pacjentów, więc łączenie przestrzegania potwierdzonego urządzeniem z PDC opartym na roszczeniach w całej populacji wymaga ostrożności w interpretacji. Przestrzeganie zaleceń należy mierzyć w okresie na tyle długim, by wygładzić pojedyncze pominięte dawki, ale na tyle krótkim, by wykryć istotny spadek, zanim wyrządzi szkodę kliniczną — dla leków przewlekłych powszechne są 90-dniowe okna kroczące.

## Pułapki

- **Używanie MPR bez ujawnienia, że może przekraczać 100%**: niewyjaśnione wartości powyżej 100% wynikające z wcześniejszych realizacji lub gromadzenia zapasów czynią porównania między pacjentami i okresami niewiarygodnymi, chyba że zastosowano PDC lub wskaźnik jawnie ograniczono.
- **Traktowanie danych o receptach lub zleceniach jako dowodu przestrzegania zaleceń**: recepta wystawiona lub wysłana do apteki nie mówi nic o tym, czy pacjent odebrał lub przyjął lek; lukę tę zamykają wyłącznie dane o realizacji lub dane z urządzeń.
- **Stosowanie jednego progu przestrzegania zaleceń do wszystkich schorzeń bez rozróżnienia**: kliniczne konsekwencje pominięcia 20% dawek bardzo się różnią w zależności od klasy leku (np. leki przeciwzakrzepowe a statyny), więc jeden uniwersalny próg 80% może zaniżać lub zawyżać ryzyko kliniczne dla niektórych leków.
- **Ignorowanie zmian i odstawień leków**: pacjent, któremu klinicznie i zasadnie zmieniono lek na inny, może wyglądać na dużą utratę przestrzegania zaleceń dla pierwotnego leku, jeśli zmiany nie uwzględniono w obliczeniach.

## Źródła

- Pharmacy Quality Alliance (PQA), specyfikacje miary Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), miary przestrzegania zaleceń lekowych w ocenach Star Ratings
- Literatura recenzowana dotycząca pomiaru przestrzegania zaleceń lekowych i cyfrowych interwencji wspierających, na przykład badania opublikowane w Journal of Managed Care & Specialty Pharmacy

Zobacz także: [wskaźnik poprawy parametrów biometrycznych](../wskaźnik-poprawy-parametrów-biometrycznych/), którego głównym czynnikiem napędowym jest przestrzeganie zaleceń lekowych w chorobach przewlekłych.
