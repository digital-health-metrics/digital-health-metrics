# DAU/MAU Yapışkanlık Oranı

DAU/MAU yapışkanlık oranı, günlük aktif kullanıcıları (DAU) aylık aktif kullanıcılarla (MAU) karşılaştırır (haftalık aktif kullanıcıların (WAU) MAU ile karşılaştırılmasında da aynı temel ölçüt kullanılır) ve bir ürünün daha geniş kullanıcı tabanının herhangi bir günde ne kadarının onunla etkileşime girdiğini ifade eder. Etkileşim yoğunluğunun standart ürün analitiği ölçütüdür; bir kullanıcının hiç elde tutulup tutulmadığından (bkz. kullanıcı elde tutma oranı) veya belirli bir kayıtlı hastanın zaman içinde ne kadar tutarlı etkileşime girdiğinden (bkz. hasta etkileşim tutarlılığı oranı) farklıdır: yapışkanlık, herhangi bir bireyin örüntüsünü değil, popülasyon düzeyindeki kullanım ritmini tanımlar.

## Neden önemlidir

İki dijital sağlık ürünü, birbirinin aynısı aylık aktif kullanıcı sayısı bildirirken çok farklı bir temel etkileşim yoğunluğuna sahip olabilir: birinde kullanıcıların çoğu uygulamayı neredeyse her gün açar, diğerinde ise çoğu uygulamayı aksi halde etkin olmayan sayılacağı andan hemen önce ayda bir kez açar. DAU/MAU yapışkanlık oranı, bu çok farklı iki durumu, ürün ve klinik ekiplerin zaman içinde izleyebileceği ve bilinen sektör aralıklarıyla karşılaştırabileceği tek, basit ve iyi anlaşılmış bir ölçüt rakamıyla ayırt eder; yaklaşık %20'lik bir oran birçok tüketici uygulaması için yaygın olarak anılan makul bir kıyaslama noktasıdır, günlük alışkanlık ürünleri (bir hastanın her gün kullanması beklenen bir beslenme veya semptom günlüğü) ise anlamlı ölçüde daha yüksek bir çıtaya göre değerlendirilmelidir. Yapışkanlık, "aktif" kavramının nasıl tanımlandığına duyarlı olduğundan, mutlak bir sektörler arası kıyaslama noktasından ziyade, tek bir ürün için zaman içindeki bir eğilim olarak ve benzer bir kullanım örüntüsü için tasarlanmış ürünlerle karşılaştırma olarak en yararlıdır.

## Nasıl hesaplanır

```
DAU/MAU yapışkanlık oranı = dönemdeki ortalama günlük aktif kullanıcılar /
                             aynı dönemdeki aylık aktif kullanıcılar × 100

WAU/MAU oranı (haftalık, aynı ilke) daha yumuşak bir varyanttır; günlük
yerine haftada birkaç kez kullanılması beklenen ürünler için daha uygundur.

"Aktif" kavramı, hem pay hem de paydada kesin ve tutarlı biçimde
tanımlanmalıdır (örneğin pasif bir uygulama açılışı değil, tamamlanmış
nitelikli bir eylem).
```

## Çalışılmış örnek

Bir dijital diyabet yönetimi uygulamasının belirli bir ayda 10.000 aylık aktif kullanıcısı vardır; bu, o ay içinde en az bir nitelikli eylemi (bir glikoz kaydı, bir öğün kaydı veya bir ilaç onayı) tamamlayan herhangi bir kullanıcı olarak tanımlanır. O ayın 30 günü boyunca günlük aktif kullanıcı sayılarının ortalaması alındığında ortalama DAU 2.200 çıkar. DAU/MAU yapışkanlık oranı 2.200 / 10.000 × 100 = %22'dir; bu, tipik bir günde uygulamanın aylık kullanıcı tabanının yaklaşık %22'sinin onunla etkileşime girdiğini gösterir. Bu, günlük alışkanlık gerektiren kronik hastalık aracı için makul bir rakamdır; ancak ideal davranış (günlük kayıt) kayıtlı hastalar için daha alışılmış hale geldikçe ürün ekibi bu oranın zaman içinde yükselmesini görmek isteyecektir.

## Veri kaynakları ve uyarılar

DAU, WAU ve MAU'nun tümü aynı temel olay günlüklerinden, her pencerede tek ve tutarlı bir "nitelikli aktif" olay tanımı kullanılarak hesaplanır; bu tanımı pay ve payda hesaplamaları arasında değiştirmek (örneğin DAU için herhangi bir uygulama açılışını, MAU için yalnızca tamamlanmış bir eylemi saymak), gerçek etkileşim yoğunluğunu yansıtmayan çarpıtılmış bir oran üretir. Yapışkanlık için uygun kıyaslama noktası, ürünün amaçlanan kullanım örüntüsüne büyük ölçüde bağlıdır: haftada bir kullanılması amaçlanan bir araç (haftalık semptom kontrolü) günlük kullanılması amaçlanan bir araçtan (sürekli glikoz monitörü yardımcı uygulaması) daha düşük bir DAU/MAU oranına sahip olacaktır ve olmalıdır; bu nedenle yapışkanlık her zaman tek bir evrensel hedefe göre değil, ürünün kendi amaçlanan kullanım sıklığına göre yorumlanmalıdır.

## Tuzaklar

- **Amaçlanan kullanım sıklığı farklı ürünler arasında yapışkanlık oranlarını karşılaştırmak**: haftalık kullanılan bir araç, her ikisi de kendi kullanım senaryoları için tam olarak amaçlandığı gibi çalışıyor olsa bile, günlük kullanılan bir araca göre yapısal olarak daha düşük bir DAU/MAU oranı gösterecektir; tek bir evrensel hedefe göre değil, ürünün kendi amaçlanan kullanım sıklığına göre kıyaslayın.
- **Pay ve paydada tutarsız etkinlik tanımları kullanmak**: bu, gerçek etkileşim yoğunluğunu yansıtmayan ve zaman içinde veya diğer ürünlerle anlamlı biçimde karşılaştırılamayan bir yapışkanlık oranı üretebilir.
- **Genel MAU eğilimini kontrol etmeden yükselen bir yapışkanlık oranını tartışmasız olumlu saymak**: toplam MAU düşerken küçülen, daha alışkın bir çekirdek kullanıcı tabanının yol açtığı yükselen bir oran, istikrarlı veya büyüyen bir kullanıcı tabanında gerçekten artan günlük etkileşimin yol açtığı orandan çok farklı ve daha endişe verici bir durumdur.
- **DAU üzerindeki haftanın günü ve mevsimsel etkileri göz ardı etmek**: birçok sağlık ürünü için DAU, haftanın gününe (hafta içi ve hafta sonu) veya mevsime göre önemli ölçüde değişebilir; çarpıtılabilecek kısa bir pencere yerine, tam bir doğal döngüyü kapsayan bir dönem boyunca ortalama DAU'yu kullanın.

## Kaynaklar

- Mobil ve dijital ürün etkileşim ölçütlerine ilişkin hakemli ve sektör literatürü, mobil analitik platformlarının yaygın olarak kullanılan kıyaslama çerçeveleri
- Digital Therapeutics Alliance, dijital terapötikler için etkileşim ölçümüne ilişkin en iyi uygulama kılavuzları
- Dijital sağlık etkileşimi ölçümüne ilişkin hakemli literatür, örneğin Journal of Medical Internet Research (JMIR mHealth and uHealth) dergisinde yayımlanan çalışmalar

Ayrıca bkz. [kullanıcı elde tutma oranı](../kullanıcı-elde-tutma-oranı/) ve [hasta etkileşim tutarlılığı oranı](../hasta-etkileşim-tutarlılığı-oranı/), bu oranın en sık karıştırıldığı iki ilişkili etkileşim ölçütü.
