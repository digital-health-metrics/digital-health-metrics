# Cihaz Çalışma Süresi Oranı

Cihaz çalışma süresi oranı, bağlı bir sağlık cihazının — bir uzaktan hasta izleme sensörü, giyilebilir bir cihaz veya bir evde tele-sağlık ünitesi — planlanan izleme süresinin ne kadarında çevrimdışı, bağlantısı kopuk veya arızalı olmak yerine gerçekten çevrimiçi olduğunu, veri ilettiğini ve doğru çalıştığını ölçer. Her uzaktan izleme veya bağlı cihaz programının altında yer alan temel altyapı metriğidir: sık sık çevrimdışı kalan bir cihazdan hesaplanan bir klinik uyarı, biyometrik eğilim veya etkileşim rakamı, ancak arkasındaki bağlantı kadar güvenilirdir.

## Neden önemlidir

Bir uzaktan hasta izleme programının tüm klinik değer önerisi sürekli veya sürekliye yakın veri yakalamaya bağlıdır; düşük çalışma süresine sahip bir cihaz, hastanın klinik tablosunda sessiz boşluklar yaratır ve bunlar bir izleme hatası olarak doğru biçimde tanımlanmak yerine kararlılık olarak yanlış yorumlanabilir (hiçbir şey değişmediği için değil, veri olmadığı için uyarı yoktur). Cihaz çalışma süresi aynı zamanda program maliyetinin ve hasta deneyiminin öncü bir göstergesidir: bağlantısı sık sık kopan bir cihaz, destek çağrıları, hasta hayal kırıklığı ve bir veri boşluğunun gerçek bir klinik olayı mı yoksa yalnızca teknik bir arızayı mı yansıttığını kontrol etmek için potansiyel olarak gereksiz klinik iletişim üretir. Cihaz çalışma süresi arızaları sıklıkla hastadan ziyade kuruluşun kontrol ettiği altyapıya (kötü yapılandırılmış bir hücresel ağ geçidi, hastanın evinde zayıf Wi-Fi kapsaması, yetersiz bakımlı bir cihaz filosu) atfedilebildiğinden, bu metrik hasta etkileşimi metriklerinin içine ayrım gözetmeksizin katılmamalı, doğrudan tedarikçi ve teknik operasyon ekibine ait olmalıdır.

## Nasıl hesaplanır

```
Cihaz çalışma süresi oranı = cihazın çevrimiçi olduğu ve geçerli veri
                              ilettiği süre / toplam planlanan izleme
                              süresi × 100

Veri elverdiğinde kesinti kök nedenlerini ayrıştırın:
  Cihaz kaynaklı arıza   (pil, donanım arızası, bellenim çökmesi)
  Bağlantı arızası       (hücresel/Wi-Fi/VPN kopması)
  Hasta kaynaklı etkenler (cihazın kapatılması, kapsama alanı dışına
                           taşınması)

Çalışma süresiyle birlikte izlenecek destekleyici teknik parametreler:
  Cihaz başına ortalama CPU kullanımı, bellek kullanımı ve pil düzeyi
  Bağlantı arızaları arasındaki ortalama süre
  Kopmadan sonra yeniden bağlanmaya kadar geçen ortalama süre
```

## Çalışılmış örnek

Bir uzaktan kardiyak izleme programı, her birinin sürekli veri iletmesi beklenen 1.000 bağlı cihaz kullanır. 30 günlük bir ay boyunca (cihaz başına 720 planlanan izleme saati), filo planlanan 720.000 saate karşılık toplam 705.600 fiili çevrimiçi saat kaydeder; bu da filo genelinde 705.600 / 720.000 × 100 = %98 cihaz çalışma süresi oranı verir. 14.400 kesinti saatinin kök neden analizi, bunun %60'ının belirli bir kırsal hizmet bölgesinde yoğunlaşan hücresel bağlantı kopmalarına, %25'inin değiştirilmek üzere işaretlenmiş eskiyen pilli cihazlara ve %15'inin hastaların cihazlarını geçici olarak kapatmasına bağlanabileceğini gösterir. Bu döküm, tek bir toplam çalışma süresi rakamının ayırt edemeyeceği iki net ve farklı müdahaleye işaret eder: etkilenen bölge için bir bağlantı çözümü ve proaktif bir pil değiştirme programı.

## Veri kaynakları ve uyarılar

Çalışma süresi verileri, cihaz üreticisinin veya platform tedarikçisinin kendi cihaz yönetimi ve telemetri sisteminden gelir; bu sistem cihaz başına bağlantı ve kalp atışı (heartbeat) olaylarını kaydeder. Kuruluş, tedarikçinin "çevrimiçi" ifadesiyle tam olarak neyi saydığını doğrulamalıdır (bir cihaz geçerli klinik veri iletemezken kendisini bir ağa bağlı olarak bildirebilir; tedarikçinin kendi panosu bunu bağlı olarak gösterse bile klinik amaçlar bakımından bu durum kesinti sayılmalıdır). Bağlantı kalitesi çoğu zaman bir hasta popülasyonuna eşit dağılmak yerine coğrafi olarak kümelendiğinden (kırsal hücresel kapsama, eski binalardaki Wi-Fi), hacim elverdiğinde çalışma süresi cihaz kohortu veya coğrafya bazında raporlanmalıdır; filo genelindeki toplam bir rakam, ciddi ve giderilebilir bir bölgesel sorunu gizleyebilir.

## Tuzaklar

- **Ağ bağlantısını geçerli veri iletimiyle karıştırmak**: bir cihaz, kullanılabilir klinik veri iletemezken tedarikçi panosunda "bağlı" görünebilir; çalışma süresini yalnızca ham ağ bağlantısına göre değil, fiili geçerli veri alımına göre tanımlayın ve ölçün.
- **Yalnızca filo genelinde bir ortalama raporlamak**: bu, hedefe yönelik bir ortalamanın ortaya çıkaracağı ve belirli, giderilebilir bir çözümü olan, coğrafi veya cihaz kohortuna özgü ciddi bir kesinti sorununu gizleyebilir.
- **Kesintinin kök nedenini ayırt etmemek**: cihaz kaynaklı, bağlantı kaynaklı ve hasta kaynaklı kesintilerin her biri tamamen farklı bir müdahale gerektirir; kök neden ayrıştırması olmayan tek bir kesinti yüzdesi üzerinde eyleme geçilemez.
- **Bir veri boşluğunu varsayılan olarak klinik kararlılık saymak**: çevrimdışı bir cihazdan gelen eksik veri akışı, hastanın klinik durumu için sessizce "haber yoksa iyidir" şeklinde yorumlanmamalı, teknik bir bağlantı kontrolünü tetiklemelidir.

## Kaynaklar

- Continua Design Guidelines / Personal Connected Health Alliance, bağlı sağlık cihazları için teknik birlikte çalışabilirlik standartları
- ONC / HealthIT.gov, uzaktan hasta izleme programı uygulaması ve teknik gereksinimler hakkında rehberlik
- Uzaktan hasta izleme cihazı güvenilirliği ve veri bütünlüğü hakkında hakemli literatür, örneğin npj Digital Medicine'de yayımlanan çalışmalar

Ayrıca bakınız: [triyaj yönlendirme doğruluğu](../triyaj-yönlendirme-doğruluğu/), ilk etapta doğru bir triyaj kararı verebilmek için eksiksiz ve güvenilir cihaz verisi almaya bağlıdır.
