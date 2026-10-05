# Hastane Yeniden Yatış Oranı

Hastane yeniden yatış oranı, taburcu edilen hastaların taburculuktan sonra tanımlı bir süre içinde — çoğunlukla 30 gün — planlanmamış biçimde yeniden hastaneye yatırılma payıdır. Dijital sağlık açısından, ödeyici ekonomisine ve değer temelli bakım sözleşmelerine en doğrudan bağlı metriktir: yeniden yatışlar üzerinde inandırıcı bir etki gösteremeyen bir uzaktan izleme, taburculuk sonrası takip veya dijital bakım geçişi programının, etkileşim rakamları ne kadar iyi görünürse görünsün, geri ödeme desteğini sürdürmesi pek olası değildir.

## Neden önemlidir

Planlanmamış bir yeniden yatış pahalıdır, hasta için rahatsız edicidir ve birçok sağlık sisteminde artık doğrudan cezalandırılmaktadır: ABD Hospital Readmissions Reduction Program gibi düzenlemeler, belirli durumlar için beklenenden yüksek yeniden yatış oranlarına sahip hastanelere yapılan ödemeyi azaltır; hastanelerin bunları azaltmayı hedefleyen dijital taburculuk sonrası ve uzaktan izleme programlarını etkin biçimde görevlendirmesinin nedeni budur. Yeniden yatışların önemli bir bölümü potansiyel olarak önlenebilir kabul edilir — yetersiz taburculuk talimatları, kaçırılan kontrol randevuları, ilaç yanlış anlaşılması veya iyi tasarlanmış bir dijital temas noktasının daha erken yakalayabileceği ele alınmamış belirti kötüleşmesi tarafından tetiklenir — dijital geçiş bakımı araçlarının hedeflediği boşluk da tam olarak budur. Yeniden yatış oranı her zaman vaka karmasıyla birlikte okunmalıdır: daha hasta ve daha karmaşık bir popülasyona hizmet veren bir program, program kalitesinden bağımsız olarak, daha sağlıklı bir popülasyona hizmet edenden yapısal olarak daha yüksek bir başlangıç oranına sahip olacaktır.

## Nasıl hesaplanır

```
30 günlük yeniden yatış oranı = taburculuktan sonraki 30 gün içindeki
                                 planlanmamış yeniden yatışlar
                                 / toplam indeks taburculuklar × 100

Paydaki sayıdan hariç tutun: planlanmış yeniden yatışları (örn. önceden
planlanmış bir takip işlemi) ve yeni bir yatış değil, aynı bakım
döneminin devamı olan transferleri.

Farklı hasta popülasyonları veya zaman dilimleri arasında oranları
karşılaştırmadan önce, mümkün olduğunda kabul görmüş bir vaka karması
veya eşlik eden hastalık indeksi kullanarak risk ayarlaması yapın.
```

## Çalışılmış örnek

Bir hastane bir çeyrekte kalp yetmezliği olan 1.200 hastayı taburcu eder. Bunların 210'u 30 gün içinde yeniden yatırılır; bunlardan 15'i planlanmış bir işlem için planlı yeniden yatıştır ve hariç tutulur. Planlanmamış 30 günlük yeniden yatış oranı (210 − 15) / 1.200 × 100 = %16,25'tir. Bu hastaların 400'lük bir alt kümesi için (rastgele değil, klinik riske göre seçilmiş) bir uzaktan izleme programı başlatılır ve bunların planlanmamış yeniden yatış oranı %14 olurken, kayıtlı olmayan 800 hastada bu oran %18'dir. Kayıt rastgele atamaya değil klinik riske dayandığından, bu fark programın etkisi için kesin olmaktan ziyade işaret edici bir kanıttır ve olduğu gibi kabul edilmek yerine bir risk ayarlama analiziyle birlikte yorumlanmalıdır.

## Veri kaynakları ve uyarılar

Yeniden yatış verileri, aynı tesise yeniden yatışlar için genellikle hastanenin kendi hasta kabul-taburcu-transfer (ADT) akışından alınır; ancak başka bir hastaneye yeniden yatırılan bir hasta bu akışta hiç görünmeyecektir, dolayısıyla tek hastaneli yeniden yatış takibi, bölgesel sağlık bilgi değişimi verileri, ödeyici talep verileri veya eyalet düzeyindeki tüm ödeyicileri kapsayan veritabanlarıyla desteklenmedikçe gerçek yeniden yatış oranlarını sistematik olarak eksik sayar. Bir dijital programa atfetme dikkat gerektirir: gönüllü bir uzaktan izleme programına katılmayı seçen hastalar nadiren taburcu edilen popülasyonun rastgele bir örneğidir; bu nedenle kayıtlı ile kayıtsız yeniden yatış oranlarının naif karşılaştırması, bazı hastaların ilk etapta kayıt olma olasılığını artıran seçilim etkileriyle karıştırılmaya eğilimli olacaktır.

## Tuzaklar

- **Popülasyonlar arasında ham, risk ayarlaması yapılmamış oranları karşılaştırmak**: daha hasta bir popülasyona hizmet veren bir program, program kendisi daha etkili olsa bile daha sağlıklı bir popülasyona hizmet edenden daha yüksek bir ham yeniden yatış oranı gösterecektir; karşılaştırmadan önce her zaman risk ayarlaması yapın.
- **Diğer tesislere yeniden yatışları eksik saymak**: yalnızca tek bir hastanenin kendi ADT verilerine güvenmek, başka yerlerdeki yeniden yatışları kaçıracak ve özellikle birden fazla rakip hastane sisteminin bulunduğu bölgelerde gerçek oranı olduğundan düşük gösterecektir.
- **Gönüllü program kaydında seçilim yanlılığı**: dijital bir takip programına katılmayı seçen hastalar, katılmayanlardan çoğu zaman sistematik olarak farklıdır (sağlık okuryazarlığı, sosyal destek veya motivasyon bakımından) ve bu durum her türlü naif öncesi/sonrası veya kayıtlı/kayıtsız karşılaştırmasını karıştırır.
- **Aynı tesise yapılan her dönüşü yeniden yatış saymak**: planlanmış bir yeniden yatış (örneğin planlı ikinci aşama bir işlem) başarısız bir taburculuğun işareti değildir ve gerçekten planlanmamış dönüşlerle karıştırılmak yerine paydaki sayıdan hariç tutulmalıdır.

## Kaynaklar

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program ve Hospital-Wide Readmission ölçüm spesifikasyonları
- Institute for Healthcare Improvement (IHI), önlenebilir yeniden yatışların azaltılması hakkında rehberlik
- Yeniden yatışların azaltılması için dijital uzaktan izleme ve geçiş bakımı müdahaleleri hakkında hakemli literatür, örneğin JAMA Network Open ve npj Digital Medicine'de yayımlanan çalışmalar

Ayrıca bakınız: [triyaj yönlendirme doğruluğu](../triyaj-yönlendirme-doğruluğu/), çünkü uygunsuz ilk yönlendirme, kendi başına önlenebilir yatışların alt akıştaki bir nedeni olabilir.
