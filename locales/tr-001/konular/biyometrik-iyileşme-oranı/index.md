# Biyometrik İyileşme Oranı

Biyometrik iyileşme oranı, bir dijital sağlık programına kaydedilen hastalar arasında, belirli bir kayıt dönemi boyunca izlenen bir biyometrik göstergede klinik açıdan anlamlı bir iyileşme sağlayanların payıdır; en yaygın olarak diyabet ve kardiyometabolik programlarda glikozillenmiş hemoglobin (HbA1c), kilo yönetimi programlarında ise beden kitle indeksi (BKİ) kullanılır. Bir dijital sağlık ürününün klinik iddialarını nihai olarak haklı çıkaran sonuç metriğidir: katılım ve benimseme sayıları bir ürünün nasıl kullanıldığını anlatır, ancak biyometrik iyileşme ürünün işe yaradığının kanıtına daha yakındır.

## Neden önemlidir

Dijital sağlık programları sıklıkla iyileştirilmiş sağlık sonuçları vaadiyle satılır ve sözleşmelendirilir; biyometrik iyileşme oranı, bu vaadi belirsiz bir "daha iyi sağlık" iddiası yerine klinik olarak kabul görmüş, belirli bir eşiğe karşı sınamanın en doğrudan ve ölçülebilir yoludur. Ödeyiciler, işverenler ve sağlık sistemleri geri ödemeyi veya sözleşme yenilemeyi giderek daha fazla kanıtlanmış biyometrik değişime bağlamaktadır; dolayısıyla bu oranı güvenilir biçimde raporlayamayan bir program klinik olduğu kadar ticari açıdan da dezavantajlıdır. Bu metrik aynı zamanda program tasarımı için bir disiplin denetimidir: katılımı (girişler, gönderilen mesajlar) raporlamak sonuçları raporlamaktan çok daha kolaydır ve bir ekip, ilkini hevesle bildirirken ikincisi konusunda belirsiz kalan her programdan şüphelenmelidir.

## Nasıl hesaplanır

```
Biyometrik iyileşme oranı = tanımlı, klinik açıdan anlamlı bir iyileşme
                             sağlayan hastalar / geçerli bir başlangıç ve
                             takip ölçümü olan hastalar × 100

Yaygın klinik açıdan anlamlı eşikler:
  HbA1c   — ≥ 0,5 yüzde puanlık bir düşüş veya hedef aralığın dışındaki
            bir başlangıç değerinden tanımlı bir hedefe (ör. < %7,0)
            ulaşma
  BKİ     — başlangıç vücut ağırlığının ≥ %5'i kadar bir azalma;
            takip ölçüm noktasına kadar sürdürülmüş olması

Her izlenen biyometrik için ayrı raporlayın; HbA1c ve BKİ iyileşmesini
asla tek bir birleşik "iyileşme" yüzdesinde harmanlamayın.
```

## Çözümlü örnek

Bir kardiyometabolik dijital sağlık programı, başlangıç HbA1c değeri hedef aralığın dışında olan 800 hastayı kaydeder. Bunlardan 620'sinin 6. ayda hem geçerli bir başlangıç hem de takip ölçümü vardır (180'i takipten kopmuştur ve başarısızlık olarak sayılmaz, paydadan çıkarılır). Eşleştirilmiş ölçümü olan 620 hastanın 340'ı en az 0,5 yüzde puanlık bir düşüş sağlar. Biyometrik iyileşme oranı 340 / 620 × 100 = %55'tir. Bu oranı kaydedilen 800 hastanın tamamına göre raporlamak (340 / 800 = %42,5) takipten kopmayı tedavi başarısızlığıyla karıştırır ve ölçümü fiilen tamamlayan hastalar için oranı olduğundan düşük gösterir.

## Veri kaynakları ve uyarılar

Başlangıç ve takip biyometrik değerleri genellikle bağlı bir cihazdan (Bluetooth'lu glukometre veya akıllı tartı), elektronik sağlık kaydından aktarılan bir laboratuvar sonucundan veya hastanın girdiği öz bildirimli bir değerden gelir; bu üç kaynağın güvenilirliği çok farklıdır, bu nedenle kaynak oranla birlikte raporlanmalıdır. Takipten kopma nadiren rastgeledir: bir programdan uzaklaşan hastalar çoğu zaman iyileşme olasılığı en düşük olanlardır; dolayısıyla yalnızca takibi tamamlayan hastalar üzerinden hesaplanan yüksek bir iyileşme oranı, programın gerçek popülasyon düzeyindeki etkisini olduğundan büyük gösterebilir. Mevsimsel etkiler ve ortalamaya gerileme hem HbA1c hem de kilo için gerçektir; bu nedenle bir program, her iyileşmeyi programın etkisinin kanıtı saymak yerine mümkün olduğunda eş zamanlı veya tarihsel bir kontrol grubuyla karşılaştırma yapmalıdır.

## Tuzaklar

- **Takipten kopmayı raporlamak yerine dışlamak**: takip ölçümü olmayan hastaları sessizce paydadan çıkarmak görünür iyileşme oranını önemli ölçüde şişirebilir; iyileşme oranının yanında takip ölçümü tamamlama oranını da daima raporlayın.
- **Öz bildirimli ve cihaz kaynaklı ölçümleri etiketlemeden karıştırmak**: öz bildirimli bir ağırlık, bağlı bir akıllı tartı ölçümünden sistematik olarak daha az güvenilirdir ve iki kaynağı harmanlamak, görünen iyileşmenin ne kadarının ölçüm gürültüsü olduğunu gizler.
- **Kontrol veya karşı olgusal durumun olmaması**: birçok kronik biyometrik ölçüm kendiliğinden dalgalanır veya ortalamaya geriler; herhangi bir karşılaştırma grubu olmayan tek kollu bir iyileşme oranı, program etkisi için kesin değil, yalnızca düşündürücü bir kanıttır.
- **Mütevazı bir ortalama kaymayı yaygın iyileşmenin kanıtı saymak**: popülasyon düzeyindeki küçük bir ortalama iyileşme, hastaların çoğu hiçbir değişim görmezken birkaç büyük yanıt vericiden kaynaklanıyor olabilir; yalnızca ortalama kaymayı değil, dağılımı da (ör. klinik açıdan anlamlı eşiği aşanların payı) raporlayın.

## Kaynaklar

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c hedefi ve klinik açıdan anlamlı değişim kılavuzu
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, program değerlendirme kılavuzu
- Dijital diyabet ve kilo yönetimi programı sonuçlarına ilişkin hakemli literatür, örneğin npj Digital Medicine ve Diabetes Care dergilerinde yayımlanan çalışmalar

Ayrıca bkz.: [ilaç uyum oranı](../ilaç-uyum-oranı/), kronik hastalık programlarında biyometrik iyileşmenin sık görülen bir üst akım belirleyicisi.
