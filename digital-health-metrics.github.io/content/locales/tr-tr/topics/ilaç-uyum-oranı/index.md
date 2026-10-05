# İlaç Uyum Oranı

İlaç uyum oranı, bir hastanın reçete edilen ilacı talimata uygun biçimde kullanma derecesini ölçer ve en yaygın olarak, belirli bir dönemde hastanın reçete edildiği şekilde ilaca erişebildiği günlerin oranı olarak ifade edilir. Uyumsuzluk yaygın olduğu, doğru destekle büyük ölçüde önlenebildiği ve daha kötü klinik sonuçlar ile daha yüksek sonraki maliyetlerle doğrudan ilişkili olduğu için en sonuç doğurucu dijital sağlık ölçütlerinden biridir; ilaç hatırlatma uygulamaları, akıllı ilaç şişeleri ve eczane yeniden dolum bildirimleri tam olarak bu boşluğu kapatmak üzere tasarlanmıştır.

## Neden önemlidir

Halk sağlığı kuruluşları, kronik hastalık ilaçlarına uyumsuzluğun bazı durumlarda %50'ye kadar çıktığını tahmin etmektedir. Uyumsuzluk, kaçınılabilir hastane yatışlarının, hastalık ilerlemesinin ve tedavi başarısızlığının önde gelen önlenebilir bir nedenidir ve çoğu zaman düzensiz kullanıma değil ilacın kendisine atfedilir. Dijital uyum araçları özellikle bu boşluğu kapatmak için vardır; bu nedenle bir ilaç bileşeni içeren herhangi bir program için uyum oranı genellikle karar açısından en belirleyici tek ölçüttür: nedensel olarak biyometrik iyileşmenin, yeniden yatışın ve bir programın aksi hâlde raporlayabileceği çoğu diğer klinik sonuç ölçütünün yukarı akışında yer alır. Uyumu değiştirmeden katılımı veya memnuniyeti artıran bir program, büyük olasılıkla klinik fayda için makul bir mekanizmayı henüz göstermemiştir.

## Nasıl hesaplanır

```
Kapsanan Gün Oranı (PDC) = dönem içinde ilacın elde bulunduğu günler
                            (dolumlardaki günlük arz miktarına göre) /
                            ölçüm dönemindeki gün sayısı × 100

İlaç Sahip Olma Oranı (MPR) = dönem boyunca edinilen toplam günlük arz
                              / dönemdeki gün sayısı × 100 (erken
                              dolumlarla %100'ü aşabilir; bu nedenle
                              genellikle PDC tercih edilir)

Bir hasta tipik olarak, yaygın kullanılan kalite ölçütü geleneğine
uygun şekilde, ≥ %80 PDC eşiğinde "uyumlu" sınıflandırılır.
```

## Çözümlü örnek

Bir hastaya 90 günlük ölçüm dönemi boyunca günlük kronik bir ilaç reçete edilir. Eczane dolum kayıtları, hastanın bu 90 günün 76'sını kapsayacak kadar ilaç edindiğini ve iki boşluk bulunduğunu gösterir: yeniden dolumdan önce ilacın bitmesinin ardından 9 günlük bir boşluk ve bir hastane yatışı çevresinde 5 günlük bir boşluk. PDC, 76 / 90 × 100 = %84'tür ve geleneksel %80 uyum eşiğini aşar. Aynı boşluklar, gerçekte kapsanan günler yerine dağıtılan günlük arza dayalı MPR kullanılarak ölçülseydi, dönem içinde başka bir yerdeki erken dolum oranı %100'ün üzerine çıkarabilirdi; bu da PDC'nin neden daha muhafazakâr ve genellikle tercih edilen ölçü olduğunu gösterir.

## Veri kaynakları ve uyarılar

Eczane talep veya dolum verileri (bir eczane yardım yöneticisinden ya da bağlantılı bir eczane sisteminden) standart kaynaktır; çünkü hastaya reçete edilenden çok hastanın gerçekte edindiğini yansıtır. Yalnızca reçete verisi uyumu olduğundan yüksek gösterir, çünkü hastanın ilacı hiç teslim aldığını doğrulamaz. Akıllı ilaç şişeleri, yutulabilir sensörler, astım ve KOAH gibi solunum hastalıkları için her kullanımı kaydeden bağlantılı akıllı inhalerler ve uygulama tabanlı kontroller, bir dozun yalnızca edinilip edinilmediğini değil gerçekten alınıp alınmadığını gösteren daha yüksek çözünürlüklü veriler sunar; ancak bunlar hastaların küçük ve potansiyel olarak temsil edici olmayan bir azınlığı tarafından kullanılır. Bu nedenle cihazla doğrulanmış uyumu bir popülasyon genelinde talep temelli PDC ile harmanlamak yorumlamada özen gerektirir. Uyum, tek tek atlanan dozları yumuşatacak kadar uzun, ancak klinik zarara yol açmadan önce anlamlı bir düşüşü saptayacak kadar kısa bir dönem boyunca ölçülmelidir; kronik ilaçlar için 90 günlük kayan pencereler yaygındır.

## Tuzaklar

- **MPR'nin %100'ü aşabileceğini belirtmeden kullanmak**: erken dolumlardan veya stoklamadan kaynaklanan açıklanmamış %100 üzerindeki oranlar, PDC kullanılmadıkça veya oran açıkça sınırlandırılmadıkça hastalar ve dönemler arası karşılaştırmayı güvenilmez kılar.
- **Reçete veya sipariş verisini uyumun kanıtı olarak değerlendirmek**: yazılan ya da eczaneye gönderilen bir reçete, hastanın ilacı teslim alıp almadığı veya kullanıp kullanmadığı hakkında hiçbir şey söylemez; bu boşluğu yalnızca dolum veya cihaz verisi kapatır.
- **Tüm durumlar için ayrım gözetmeksizin tek bir uyum eşiği uygulamak**: dozların %20'sini atlamanın klinik sonucu ilaç sınıfına göre (örn. antikoagülanlar ile statinler) büyük farklılık gösterir; bu nedenle evrensel olarak kullanılan tek bir %80 eşiği bazı ilaçlar için klinik riski olduğundan az ya da fazla gösterebilir.
- **İlaç değişikliklerini ve bırakmaları göz ardı etmek**: klinik olarak ve uygun biçimde farklı bir ilaca geçirilen bir hasta, bu geçiş hesaplamada dikkate alınmazsa asıl ilaçta büyük bir uyum düşüşü gibi görünebilir.

## Kaynaklar

- Pharmacy Quality Alliance (PQA), Kapsanan Gün Oranı (Proportion of Days Covered) ölçüt spesifikasyonları
- Centers for Medicare & Medicaid Services (CMS), Star Ratings ilaç uyumu ölçütleri
- İlaç uyumu ölçümü ve dijital uyum müdahalelerine ilişkin hakemli yazın, örneğin Journal of Managed Care & Specialty Pharmacy'de yayımlanan çalışmalar

Ayrıca bakınız: [biyometrik iyileşme oranı](../biyometrik-iyileşme-oranı/); kronik hastalık ilaçlarına uyum bu oranın başlıca belirleyicisidir.
