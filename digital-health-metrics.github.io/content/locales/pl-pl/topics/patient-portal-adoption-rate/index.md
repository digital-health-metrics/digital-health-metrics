# Wskaźnik Adopcji Portalu Pacjenta

Wskaźnik adopcji portalu pacjenta mierzy odsetek uprawnionych pacjentów, którzy zarejestrowali się i aktywnie korzystają z internetowego portalu pacjenta (na przykład NHS App, Patient Access lub portalu powiązanego z elektroniczną dokumentacją medyczną, takiego jak MyChart), aby przeglądać dokumentację, umawiać wizyty lub wysyłać wiadomości do swojego zespołu opieki. Jest to podstawowy wskaźnik zaangażowania cyfrowego: pacjent, który nigdy nie aktywował konta, nie może skorzystać z żadnej kolejnej usługi cyfrowej zbudowanej na bazie portalu.

## Dlaczego to ważne

Portal tworzy wartość dopiero wtedy, gdy pacjent z niego korzysta, więc organizacje powinny śledzić adopcję jako lejek, a nie pojedynczą liczbę: rejestracja, aktywacja (pierwsza znacząca akcja) i aktywne użytkowanie (użytkowanie w określonym oknie czasowym) to trzy różne wskaźniki, które zbyt często są ze sobą mylone. Zespoły usług cyfrowych są często pod presją, aby raportować jedną, korzystną liczbę zbiorczą, a upieranie się przy trudniejszym, bardziej uczciwym podziale wymaga dyscypliny. Niska lub nierównomiernie rozłożona adopcja jest również sygnałem równości: pacjenci starsi, o niższej umiejętności cyfrowej, nieposługujący się językiem większości, lub nieposiadający niezawodnego internetu szerokopasmowego lub smartfona, są systematycznie rzadziej uwzględniani w liczniku, więc rosnący średni wskaźnik adopcji może maskować powiększającą się lukę dla pacjentów, którzy często najbardziej potrzebują kontaktu z usługami.

## Jak to się oblicza

Raportuj wszystkie trzy etapy, nie tylko rejestrację, i zawsze podawaj wyraźnie mianownik:

```
Wskaźnik rejestracji  = pacjenci z utworzonym kontem portalu / uprawniona populacja pacjentów × 100
Wskaźnik aktywacji      = pacjenci, którzy wykonali pierwszą znaczącą akcję (obejrzeli
                          wynik, zarezerwowali termin, wysłali wiadomość) / pacjenci
                          z kontem × 100
Wskaźnik aktywnego użytkowania = pacjenci, którzy zalogowali się co najmniej raz w
                          ciągu ostatnich 12 miesięcy / uprawniona populacja pacjentów × 100
```

Uprawniona populacja pacjentów jest zazwyczaj definiowana jako pacjenci, którzy mieli co najmniej jeden kontakt z organizacją w określonym okresie retrospektywnym (zwykle 24 miesiące), którzy ze względu na wiek i status zgody mogą posiadać własne konto.

## Praktyczny przykład

Sieć podstawowej opieki zdrowotnej obsługuje 50 000 pacjentów spełniających definicję uprawnienia. Z tego 32 000 zarejestrowało się w portalu (wskaźnik rejestracji 64%). Z 32 000 rejestracji 27 000 wykonało co najmniej jedną znaczącą akcję, taką jak obejrzenie wyniku badania (wskaźnik aktywacji 84% zarejestrowanych). W ciągu ostatnich 12 miesięcy 21 000 z pierwotnych 50 000 uprawnionych pacjentów zalogowało się co najmniej raz (wskaźnik aktywnego użytkowania 42%). Raportowanie samego wskaźnika rejestracji na poziomie 64% znacznie zawyżyłoby rzeczywiste zaangażowanie; wskaźnik aktywnego użytkowania na poziomie 42% to liczba, która powinna kierować decyzjami dotyczącymi zasobów dla programu portalu.

## Źródła danych i zastrzeżenia

Analityka portalu zazwyczaj pochodzi albo z samej platformy dostawcy (zdarzenia logowania, użycie funkcji), albo z dziennika audytu bazowej elektronicznej dokumentacji medycznej, a organizacje powinny podchodzić sceptycznie do pulpitów dostawców, które pokazują tylko liczby rejestracji. Dostęp przez pełnomocnika (rodzic lub opiekun zarządzający kontem w imieniu pacjenta) powinien być oznaczony i raportowany osobno, ponieważ zmienia to, kto faktycznie jest "użytkownikiem". Wybór mianownika ma ogromne znaczenie: liczenie względem pełnej listy zarejestrowanych pacjentów, zamiast rzeczywiście uprawnionej, kontaktowalnej populacji, zawsze zaniży adopcję, podczas gdy liczenie tylko względem pacjentów aktywnie zaproszonych zawsze ją zawyży, więc definicja uprawnienia powinna być ustalona i publikowana razem z każdym raportowanym wskaźnikiem.

## Pułapki

- **Rejestracja liczona jako adopcja**: utworzone, ale nigdy nieużywane konto ma niemal zerową wartość; raportuj aktywację i aktywne użytkowanie obok rejestracji, a nie zamiast niej.
- **Ignorowanie wykluczenia cyfrowego**: zagregowane wskaźniki adopcji mogą rosnąć, podczas gdy luka między grupami najbardziej i najmniej włączonymi cyfrowo się poszerza; zawsze segmentuj według wieku, deprywacji, języka i niepełnosprawności, tam gdzie zarządzanie danymi na to pozwala.
- **Porównywanie organizacji o różnych definicjach uprawnienia**: program portalu, który zaprasza tylko pacjentów z zarejestrowanym adresem e-mail, zgłosi wyższy wskaźnik niż ten, który mierzy względem całej zarejestrowanej listy, bez żadnej rzeczywistej różnicy w wydajności.
- **Traktowanie jednorazowego logowania jako ciągłego zaangażowania**: 12-miesięczny okres retrospektywny jest powszechny, ale krótsze okno (na przykład 90 dni) daje wcześniejsze ostrzeżenie o spadającym użytkowaniu.

## Źródła

- NHS England, statystyki użytkowania i rejestracji NHS App (publikacje nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, miary Promoting Interoperability Program, w tym miary dostępu pacjenta View, Download, Transmit (VDT)
- Literatura recenzowana na temat adopcji portali pacjenta i nierówności w zdrowiu cyfrowym, na przykład badania publikowane w Journal of the American Medical Informatics Association (JAMIA)

Zobacz także: [wskaźnik niestawiennictwa na wizyty](../appointment-no-show-rate/), na który bezpośrednio wpływają samodzielne planowanie i przypomnienia oparte na portalu.
