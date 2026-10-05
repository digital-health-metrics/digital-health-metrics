# Müdahale Süresi

Müdahale süresi, otomatik bir sağlık uyarısının oluşturulmasından (örneğin bir uzaktan izleme cihazının aralık dışı bir yaşamsal bulguyu saptaması veya dijital bir triyaj aracının kötüleşen bir hastayı işaretlemesi) bir klinik ekip üyesinin fiilen yanıt başlatmasına kadar geçen süredir. Otomatik bir uyarı sisteminin temel vaadini, yani bir sorunu planlı kontrol ziyaretleri veya hasta tarafından başlatılan telefon aramalarından oluşan geleneksel modelden daha erken yakalamayı yerine getirip getirmediğini belirleyen süreç metriğidir.

## Neden önemlidir

Klinik açıdan doğru bir uyarı üreten ancak ardından zamanında yanıt verilmeyen bir uyarı sistemi, hasta güvenliğini fiilen iyileştirmiş değildir; uzaktan izleme ve otomatik uyarının tüm değer önerisi, döngüyü izlenmeyen alternatif yoldan daha hızlı kapatmaya dayanır. Farklı uyarı şiddetleri farklı yanıt aciliyeti gerektirdiğinden, müdahale süresi tek bir ortalama olarak değil her zaman şiddet kademesine göre raporlanmalıdır; çünkü tüm uyarılar genelinde hızlı bir ortalama, en şiddetli az sayıdaki uyarıya verilen tehlikeli ölçüde yavaş yanıtı gizleyebilir. Bu metrik aynı zamanda otomatik bir izleme programının değerini klinik liderliğe ve ödeyicilere göstermenin en açık ve en ikna edici yollarından biridir; çünkü aynı kuruluşun benzer bir klinik senaryo için önceki, otomatik olmayan yanıt süresiyle doğrudan karşılaştırılabilir.

## Nasıl hesaplanır

```
Müdahale süresi = zaman damgası(klinik yanıtın başlatılması) −
                   zaman damgası(uyarının oluşturulması)

Medyanı ve yüksek bir yüzdelik değeri (ör. 90.) tek bir harmanlanmış
ortalama olarak değil, uyarı şiddet kademesine göre bölümlenmiş olarak
raporlayın.

"Klinik yanıtın başlatılması" kesin ve tutarlı biçimde tanımlanmalıdır —
ör. bir klinisyenin hastanın kaydını açıp harekete geçmesi veya belgelenmiş
bir giden iletişim girişimi — yalnızca bir uyarının görüntülenmesi veya
hiçbir eylem yapılmadan onaylanması değil.
```

## Çözümlü örnek

Bir uzaktan kardiyak izleme programının uyarı sistemi bir ay içinde 200 yüksek şiddetli aritmi uyarısı işaretler. Uyarının oluşturulmasından bir klinisyenin giden iletişimi başlatmasına kadar geçen medyan süre 12 dakikadır; 90. yüzdelik süre ise 38 dakikadır. Aynı popülasyonun önceki, izlenmeyen yolundan (benzer bir olayın tipik olarak yalnızca bir sonraki planlı klinik ziyarette veya hastaneye başvuruda ortaya çıkacağı yol) elde edilen tarihsel veriler, herhangi bir klinik yanıta kadar geçen medyan sürenin dakika değil gün olarak ölçüldüğünü gösterir. İzleme programının klinik değerini gösteren, 12 dakikalık rakamın tek başına değil, bu karşılaştırmadır; 90. yüzdelik rakam da aynı derecede önemlidir, çünkü harekete geçilmesi yarım saati aşan uyarıların kuyruğunu belirler ve kendi kök neden incelemesini gerektirir.

## Veri kaynakları ve uyarılar

Uyarı oluşturma zaman damgaları izleme platformunun kendi olay günlüğünden gelir; klinik yanıt zaman damgaları genellikle elektronik sağlık kaydının denetim izinden veya bakım ekibinin kendi iş akışı ya da görev yönetimi sisteminden gelir ve hesaplanan aralığın güvenilir olması için bu iki sistemin zamanının hassas biçimde senkronize edilmesi gerekir. "Yanıtın başlatılması" katı, belgelenmiş bir tanım gerektirir; çünkü bir klinisyenin bir uyarıyı yalnızca görüntülemesi veya başka bir eylem yapmadan reddetmesi, gerçek bir giden iletişimi veya müdahaleyi tetikleyen bir olaydan temelde farklı ve çok daha az güven verici bir olaydır; ikisini karıştırmak yanıt süresini klinik gerçeklikten daha iyi gösterecektir. Gece ve hafta sonu personel düzeyleri müdahale süresini yaygın olarak önemli ölçüde etkiler; bu nedenle bu metrik, uyarı hacminin elverdiği ölçüde, mesai dışı ciddi bir yanıt açığını gizleyebilecek 7/24 harmanlanmış bir ortalama yerine günün saati ve haftanın günü segmentine göre raporlanmalıdır.

## Tuzaklar

- **Uyarı onayının yanıt sayılması**: bir klinisyenin bir uyarıyı görüntülemesi veya reddetmesi, klinik bir yanıt başlatmakla aynı şey değildir; yanıtı pasif onay olarak değil, belgelenmiş bir eylem olarak katı biçimde tanımlayın.
- **Tüm şiddetler genelinde tek bir harmanlanmış süre raporlamak**: düşük ve yüksek şiddetli uyarıların birlikte alındığı hızlı bir ortalama, özellikle en önemli olan en yüksek şiddetli uyarılar için tehlikeli ölçüde yavaş bir yanıt süresini gizleyebilir.
- **Personel düzeni etkilerini göz ardı etmek**: yanıt süresi, personel düzeyleri nedeniyle günün saatine ve haftanın gününe göre çoğu zaman önemli ölçüde değişir; tek bir genel ortalama sistematik bir mesai dışı veya hafta sonu yanıt açığını gizleyebilir.
- **Farklı uyarı eşiklerine sahip kuruluşlar arasında müdahale süresini karşılaştırmak**: daha tutucu (daha duyarlı) bir uyarı eşiğine sahip bir kuruluş daha fazla düşük aciliyetli uyarı üretir; bu, gerçek klinik yanıt verebilirlikten bağımsız olarak, daha katı bir eşik kullanan bir kuruluşa kıyasla ortalama yanıt süresini sulandırabilir.

## Kaynaklar

- NHS England, uzaktan izleme ve sanal servis klinik yanıt standartlarına ilişkin kılavuz
- ONC / HealthIT.gov, klinik uyarı sistemi tasarımı ve güvenliğine ilişkin kılavuz
- Uzaktan hasta izleme uyarı yanıt süreleri ve klinik sonuçlara ilişkin hakemli literatür, örneğin npj Digital Medicine dergisinde yayımlanan çalışmalar

Ayrıca bkz.: [cihaz çalışma süresi oranı](../cihaz-çalışma-süresi-oranı/), çünkü güvenilir bir müdahale süresi rakamı, uyarıyı ilk etapta üretmek için temeldeki izleme cihazının fiilen çevrimiçi olmasına bağlıdır.
