# Czas do Interwencji

Czas do interwencji to czas, jaki upływa od wygenerowania automatycznego alertu zdrowotnego — na przykład wykrycia przez urządzenie do zdalnego monitorowania parametru życiowego poza zakresem lub oznaczenia przez cyfrowe narzędzie triażowe pogarszającego się stanu pacjenta — do faktycznego podjęcia reakcji przez członka zespołu klinicznego. Jest to metryka procesu, która rozstrzyga, czy automatyczny system alertów spełnia swoją podstawową obietnicę: wychwycenia problemu wcześniej, niż zrobiłby to tradycyjny model zaplanowanych kontroli lub telefonów inicjowanych przez pacjenta.

## Dlaczego to ważne

System alertów, który generuje klinicznie poprawny alert, po którym nie następuje terminowa reakcja, w rzeczywistości nie poprawił bezpieczeństwa pacjenta; cała wartość zdalnego monitorowania i automatycznych alertów polega na szybszym zamknięciu pętli, niż uczyniłaby to alternatywna, niemonitorowana ścieżka. Ponieważ różne poziomy ciężkości alertów wymagają różnej pilności reakcji, czas do interwencji należy zawsze raportować dla każdego poziomu ciężkości, a nie jako jedną średnią, gdyż szybka średnia dla wszystkich alertów może ukrywać niebezpiecznie wolną reakcję na niewielką liczbę najcięższych. Ta metryka jest też jednym z najjaśniejszych i najbardziej przekonujących sposobów wykazania wartości programu automatycznego monitorowania kierownictwu klinicznemu i płatnikom, ponieważ można ją bezpośrednio porównać z wcześniejszym, nieautomatycznym czasem reakcji tej samej organizacji w podobnym scenariuszu klinicznym.

## Jak to się oblicza

```
Czas do interwencji = znacznik czasu(zainicjowana reakcja kliniczna) −
                       znacznik czasu(wygenerowany alert)

Raportuj medianę i wysoki percentyl (np. 90.), w podziale na poziomy
ciężkości alertów, a nie jako jedną zbiorczą średnią.

"Zainicjowaną reakcję kliniczną" należy zdefiniować precyzyjnie
i konsekwentnie — np. klinicysta otwierający dokumentację pacjenta
i podejmujący działanie lub udokumentowana próba kontaktu wychodzącego —
a nie samo wyświetlenie alertu lub jego potwierdzenie bez podjęcia
działania.
```

## Praktyczny przykład

System alertów programu zdalnego monitorowania kardiologicznego oznacza w ciągu miesiąca 200 alertów o wysokiej ciężkości dotyczących zaburzeń rytmu serca. Mediana czasu od wygenerowania alertu do zainicjowania przez klinicystę kontaktu wychodzącego wynosi 12 minut, a czas w 90. percentylu wynosi 38 minut. Dane historyczne z wcześniejszej, niemonitorowanej ścieżki tej samej populacji (gdzie podobne zdarzenie zazwyczaj ujawniłoby się dopiero podczas następnej zaplanowanej wizyty w poradni lub zgłoszenia do szpitala) pokazują medianę czasu do jakiejkolwiek reakcji klinicznej mierzoną w dniach, a nie w minutach. To porównanie — a nie sama wartość 12 minut — wykazuje wartość kliniczną programu monitorowania; wartość w 90. percentylu jest równie ważna, ponieważ wskazuje ogon alertów, na które reakcja zajęła ponad pół godziny, i wymaga osobnego przeglądu przyczyn źródłowych.

## Źródła danych i zastrzeżenia

Znaczniki czasu wygenerowania alertów pochodzą z własnego dziennika zdarzeń platformy monitorowania; znaczniki czasu reakcji klinicznej pochodzą zazwyczaj ze ścieżki audytu elektronicznej dokumentacji medycznej lub z własnego systemu przepływu pracy albo zarządzania zadaniami zespołu opieki, a oba systemy muszą być dokładnie zsynchronizowane czasowo, aby obliczony interwał był wiarygodny. "Zainicjowana reakcja" wymaga ścisłej, udokumentowanej definicji, ponieważ klinicysta, który jedynie wyświetla lub odrzuca alert bez dalszych działań, to zdarzenie zasadniczo inne, i znacznie mniej uspokajające, niż to, które uruchamia rzeczywisty kontakt wychodzący lub interwencję — pomieszanie tych dwóch sprawi, że czas reakcji będzie wyglądał lepiej niż rzeczywistość kliniczna. Poziom obsady nocą i w weekendy zwykle istotnie wpływa na czas do interwencji, więc tę metrykę należy raportować według pory dnia i dnia tygodnia, o ile pozwala na to wolumen alertów, a nie tylko jako całodobową średnią zbiorczą, która może maskować poważną lukę w reakcji poza godzinami pracy.

## Pułapki

- **Liczenie potwierdzenia alertu jako reakcji**: wyświetlenie lub odrzucenie alertu przez klinicystę to nie to samo co zainicjowanie reakcji klinicznej; definiuj reakcję ściśle jako udokumentowane działanie, a nie bierne potwierdzenie.
- **Raportowanie jednego zbiorczego czasu dla wszystkich poziomów ciężkości**: szybka średnia dla połączonych alertów o niskiej i wysokiej ciężkości może ukrywać niebezpiecznie wolny czas reakcji właśnie dla alertów o najwyższej ciężkości, które mają największe znaczenie.
- **Ignorowanie wpływu wzorców obsady**: czas reakcji często znacząco różni się w zależności od pory dnia i dnia tygodnia z powodu poziomów obsady; jedna ogólna średnia może ukrywać systematyczną lukę w reakcji poza godzinami pracy lub w weekendy.
- **Porównywanie czasu do interwencji między organizacjami o różnych progach alertów**: organizacja o bardziej zachowawczym (czulszym) progu alertów wygeneruje więcej alertów o niskiej pilności, co może rozcieńczać jej średni czas reakcji w porównaniu z organizacją stosującą bardziej rygorystyczny próg, niezależnie od rzeczywistej szybkości reagowania klinicznego.

## Źródła

- NHS England, wytyczne dotyczące zdalnego monitorowania i standardów reakcji klinicznej oddziałów wirtualnych
- ONC / HealthIT.gov, wytyczne dotyczące projektowania i bezpieczeństwa systemów alertów klinicznych
- Literatura recenzowana dotycząca czasów reakcji na alerty w zdalnym monitorowaniu pacjentów i wyników klinicznych, na przykład badania opublikowane w npj Digital Medicine

Zobacz także: [wskaźnik dostępności urządzeń](../wskaźnik-dostępności-urządzeń/), ponieważ wiarygodna wartość czasu do interwencji zależy od tego, czy urządzenie monitorujące jest w ogóle online, aby wygenerować alert.
