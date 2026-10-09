# Yatak Günü Azaltımı

Yatak günü azaltımı, belirli bir bakım dönemini — çoğunlukla ameliyat sonrası iyileşmeyi veya akut durum yönetimini — geleneksel yatarak tedaviden sanal servis ya da evde hastane programı gibi dijital olarak desteklenen bir alternatife kaydırarak önlenen toplam yatan hasta yatak günü sayısını ölçer. Sanal servis ve evde hastane girişimleri için birincil kapasite metriğidir; klinik bakım modelindeki bir değişikliği, hastane operasyonlarının ve sistem planlayıcılarının fiilen yönettiği para birimine (yatak kapasitesine) doğrudan çevirir.

## Neden önemlidir

Yatan hasta yatak kapasitesi, herhangi bir hastane sistemindeki en kısıtlı ve en pahalı kaynaklardan biridir; bir sanal servis veya evde hastane programının temel değer önerisi, belirli bir düzeyde klinik bakımı fiziksel bir yatağı işgal etmeden güvenle sunabilmesi ve bu kapasiteyi başka hiçbir şekilde yönetilemeyen hastalara açabilmesidir. Yatak günü azaltımı, çoğu zaman soyut kalan bir iddiayı ("bu program bakımı iyileştiriyor") hastane kapasite planlayıcılarının, finans ekiplerinin ve komisyonların doğrudan harekete geçebileceği somut bir operasyonel sayıya dönüştürür: bir izleme programına yapılan yatırımın önlenen yatak maliyetleriyle kendini amorti edip etmediğini ve ne kadar ettiğini modellemek için kullanılabilir. Yatak günü azaltımı yalnızca hasta güvenliği korunduğunda değer taşıdığından, aynı popülasyon için her zaman bir güvenlik sonuç metriğiyle (örneğin yeniden yatış veya yatarak bakıma yükseltme oranı) birlikte raporlanmalı, asla onun yerine kullanılmamalıdır.

## Nasıl hesaplanır

```
Yatak günü azaltımı = standart yatarak bakım altında beklenen yatak günleri
                       (eşleştirilmiş bir hasta kohortu için geçmiş
                       yatış süresi verilerine dayalı) − sanal/dijital
                       yolakta olan hastaların kullandığı fiili yatak
                       günleri

Klinik yolak bazında raporlayın (örn. ameliyat sonrası iyileşme, akut
solunum alevlenmesi); çünkü beklenen yatış süresi duruma göre çok
büyük farklılık gösterir ve birbiriyle ilgisiz yolaklar arasında
birleştirilmiş bir rakam anlamlı değildir.
```

## Çalışılmış örnek

Bir hastanenin geçmiş verileri, belirli bir elektif cerrahi işlemden iyileşen hastaların ortalama yatış süresinin 4 gün olduğunu gösterir. Bir sanal servis programı aynı işlemden iyileşen 150 hastayı kaydeder ve iyileşmenin geri kalanını uzaktan izleyerek bunları ortalama 1,5 yatış gününden sonra taburcu eder. Yatak günü azaltımı, ölçüm dönemi boyunca (4 − 1,5) × 150 = 375 yatak günüdür. Bu rakam, aynı 150 hasta için sanal servis kohortunun 30 günlük yatarak bakıma yükseltme oranı ve yeniden yatış oranıyla birlikte raporlanmalıdır; çünkü belirgin biçimde daha yüksek bir yükseltme veya yeniden yatış oranı pahasına elde edilen bir yatak günü tasarrufu, ana rakamın aksi halde düşündüreceği klinik kazanım değildir.

## Veri kaynakları ve uyarılar

Beklenen yatak günleri, güvenilir bir geçmiş referans değeri gerektirir; ideal olarak bu, sanal servis popülasyonuyla benzer klinik özelliklere (yaş, eşlik eden hastalık, işlem türü, ağırlık) sahip, standart yatarak bakımla tedavi edilmiş eşleştirilmiş bir hasta kohortundan gelmelidir; çünkü eşleştirilmemiş bir geçmiş ortalamayla karşılaştırma yapmak, dijital olarak yönetilen kohort geçmiş karşılaştırma grubundan sistematik olarak daha sağlıklı ya da daha hasta ise gerçek azaltımı olduğundan fazla veya az gösterme riski taşır. Dijital yolakta kullanılan fiili yatak günleri hastanenin kendi hasta kabul-taburcu-transfer (ADT) sisteminden gelir; izlenen iyileşme döneminde yatarak bakıma geri dönüş olan her yükseltme programın aleyhine dürüstçe sayılmalıdır (kullanılan yatak günü olarak, hariç tutulmadan), çünkü yükseltmeleri hesaplamanın dışında bırakmak görünen azaltımı yapay olarak şişirir.

## Tuzaklar

- **Yatak günü azaltımını eşleştirilmiş bir güvenlik karşılaştırması olmadan raporlamak**: yatak günü tasarrufu sağlayan ancak standart bakıma göre belirgin biçimde daha kötü bir yükseltme veya yeniden yatış oranına sahip bir sanal servis gerçek bir iyileşme göstermiş sayılmaz; her zaman ikisini birlikte raporlayın.
- **Eşleştirilmemiş veya eskimiş bir geçmiş referans değeri kullanmak**: farklı vaka karması, eşlik eden hastalık yükü veya klinik uygulama dönemine sahip bir geçmiş kohortla karşılaştırmak, gerçek yatak günü tasarrufunu önemli ölçüde olduğundan fazla ya da az gösterebilir.
- **Yatarak bakıma geri yükseltmeleri hesaplamanın dışında bırakmak**: sanal olarak izlenen ancak iyileşmenin bir noktasında yatarak bakıma yükseltilen bir hastanın bu yatak günleri programın aleyhine sayılmalı, analizden sessizce çıkarılmamalıdır.
- **Beklenen yatış süreleri çok farklı yolakları birleştirmek**: yatak günü azaltımını klinik olarak ilgisiz yolaklar arasında (örneğin ameliyat sonrası iyileşme ile kronik solunum yönetimini birleştirerek) tek bir rakamda toplamak, tasarrufu fiilen hangi yolağın sağladığını gizler.

## Kaynaklar

- NHS England, sanal servis ve evde hastane programı rehberliği ile yatak günü etkisi raporlama standartları
- Evde hastane ve sanal servis modelleri hakkında hakemli literatür, örneğin JAMA Internal Medicine ve npj Digital Medicine'de yayımlanan çalışmalar
- Institute for Healthcare Improvement (IHI), kapasite yönetimi ve alternatif bakım modelleri hakkında rehberlik

Ayrıca bakınız: [hastane yeniden yatış oranı](../hastane-yeniden-yatış-oranı/), aynı hasta popülasyonu için herhangi bir yatak günü azaltımı iddiasıyla birlikte her zaman raporlanması gereken güvenlik metriği.
