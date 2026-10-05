# Triyaj Yönlendirme Doğruluğu

Triyaj yönlendirme doğruluğu, otomatik veya yapay zekâ destekli bir triyaj aracının bir hastayı uygun bakım düzeyine ve ortamına — örneğin kendi kendine bakım, birinci basamak, acil bakım veya acil servis — klinik olarak doğrulanmış bir referans standardına göre doğru biçimde yönlendirdiği hasta karşılaşmalarının payıdır. Her dijital ön kapı, semptom denetleyici veya yapay zekâ triyaj sistemi için güvenlik ve etkililik metriğidir: aracın tüm değer önerisi, hastaları doğru, hızlı ve tutarlı biçimde yönlendirmeye dayanır.

## Neden önemlidir

Yanlış bir triyaj aracı her iki yönde de zarara yol açar: eksik triyaj (bir hastayı ihtiyaç duyduğundan daha düşük bir bakım düzeyine yönlendirme) gerçek bir acil durumda tedaviyi geciktirebilirken, fazla triyaj (bir hastayı ihtiyaç duyduğundan daha yüksek bir bakım düzeyine yönlendirme) kıt acil ve acil bakım kapasitesini boşa harcar, hiçbir klinik yarar sağlamadan maliyeti ve hasta kaygısını artırır. Bu iki hata biçiminin sonuçları birbirinden çok farklı olduğundan, triyaj yönlendirme doğruluğu her zaman hataların yönüyle birlikte raporlanmalıdır; aracın güvenli mi yoksa tehlikeli mi hata yaptığını gizleyen tek bir toplu doğruluk rakamı olarak değil. Bir yapay zekâ triyaj aracını devreye almak üzere değerlendiren düzenleyiciler ve sağlık sistemleri, özellikle bir klinisyenden herhangi bir ölçüde özerklikle çalışan araçlar için, klinik onayın koşulu olarak bu tür tabakalandırılmış doğruluk raporlamasını giderek daha fazla talep etmektedir.

## Nasıl hesaplanır

```
Triyaj yönlendirme doğruluğu = doğru yönlendirilen karşılaşmalar /
                                triyaj edilen toplam karşılaşmalar × 100

Eksik triyaj ve fazla triyajı ayrı raporlayın:
  Eksik triyaj oranı = referans standardından daha düşük aciliyet
                        düzeyine yönlendirilen karşılaşmalar / triyaj
                        edilen toplam karşılaşmalar × 100
  Fazla triyaj oranı = referans standardından daha yüksek aciliyet
                        düzeyine yönlendirilen karşılaşmalar / triyaj
                        edilen toplam karşılaşmalar × 100

Referans standardı tipik olarak aynı vakanın, mümkün olduğunda aracın
çıktısından habersiz (kör) yapılan geriye dönük klinisyen
incelemesidir.
```

## Çalışılmış örnek

Bir yapay zekâ semptom denetleyici aracı bir ayda 5.000 hasta karşılaşmasını triyaj eder. Bu karşılaşmalardan rastgele seçilen 500'lük bir örneklemin kör klinisyen incelemesi, 430'unun doğru aciliyet düzeyine yönlendirildiğini (doğruluk %86), 45'inin eksik triyaj (%9) ve 25'inin fazla triyaj (%5) edildiğini ortaya koyar. %9'luk eksik triyaj oranı en acil biçimde araştırılması gereken rakamdır; çünkü bir hastanın gerçekte ihtiyaç duyduğundan daha az acil bir bakıma yönlendirilmiş olabileceği karşılaşmaları temsil eder; %5'lik fazla triyaj oranı ise bir kapasite ve maliyet sorunudur, doğrudan bir güvenlik sorunu değildir.

## Veri kaynakları ve uyarılar

Triyaj doğruluğunun ölçüldüğü referans standardı son derece önemlidir: tek bir klinisyen tarafından yapılan inceleme o klinisyenin kendi yargı değişkenliğini içerir; bu nedenle güvenilir bir doğruluk rakamı genellikle ya belgelenmiş değerlendiriciler arası uyum düzeyine sahip birden çok bağımsız değerlendiriciyi ya da sonradan doğrulanmış bir klinik sonuçla (hastanın gerçekte hangi bakıma ihtiyaç duyduğunun sonradan belirlenmesi) karşılaştırmayı gerektirir. Örnekleme de önemlidir: yalnızca kolayda örneklenmiş karşılaşmaları veya yalnızca olağandışı olarak işaretlenenleri incelemek, aracın genel performansına genellenebilecek bir rakam üretmez. Altta yatan vaka hacmi elverdiği ölçüde, triyaj araçları nadiren tüm durumlarda tekdüze performans gösterdiğinden, doğruluk rakamları başvuru semptomuna veya şikâyet kategorisine göre ayrı raporlanmalıdır.

## Tuzaklar

- **Tek bir birleşik doğruluk rakamı raporlamak**: eksik triyaj ve fazla triyajı tek bir sayıda toplamak, aracın hatalarının daha tehlikeli hata biçimine doğru eğilim gösterip göstermediğini gizler; bunları her zaman ayrı raporlayın.
- **Referans standardı olarak tek ve kör olmayan bir değerlendirici kullanmak**: bu, doğruluk rakamını bağımsız bir klinik standarttan ziyade o değerlendiricinin kendisinin yapacağı şeye doğru sessizce saptırabilir.
- **Yalnızca geriye dönük, kolay erişilebilir veriler üzerinde doğrulama yapmak**: bir aracın canlı, belirsiz hasta girdisi altındaki gerçek dünya yönlendirme doğruluğu, geliştirme sırasında derlenen seçilmiş bir doğrulama kümesindeki doğruluğundan çoğu zaman önemli ölçüde farklıdır.
- **Devreye alma sonrasında performans kaymasını göz ardı etmek**: bir yapay zekâ triyaj modelinin doğruluğu, hasta popülasyonları, başvuru semptomları veya bakım yolu erişilebilirliği değiştikçe zamanla bozulabilir; doğruluk bir kez doğrulanıp sabit varsayılmamalı, yinelenen aralıklarla yeniden ölçülmelidir.

## Kaynaklar

- ONC / HealthIT.gov, klinik karar desteği ve yapay zekâ özellikli araçların güvenliği ve kalite güvencesi hakkında kılavuz
- Semptom denetleyici ve yapay zekâ triyaj aracı doğruluğu üzerine hakemli literatür, örneğin JAMIA, npj Digital Medicine ve BMJ Health & Care Informatics'te yayımlanan çalışmalar
- NHS England, dijital triyaj ve uzaktan konsültasyon araçlarının klinik güvenliği hakkında kılavuz (DCB0129/DCB0160 klinik risk yönetimi standartları)

Ayrıca bakınız: [dijital sevk geri dönüş süresi](../dijital-sevk-dönüş-süresi/), bir triyaj kararının en doğrudan ardından gelen süreç metriği.
