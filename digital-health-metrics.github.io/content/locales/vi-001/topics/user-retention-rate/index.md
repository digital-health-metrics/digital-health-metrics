# Tỷ Lệ Giữ Chân Người Dùng

Tỷ lệ giữ chân người dùng là tỷ lệ người dùng hoạt động trong một khoảng thời gian bắt đầu vẫn còn hoạt động trong một khoảng thời gian sau đó, và nghịch đảo của nó, tỷ lệ rời bỏ (hoặc bỏ cuộc), là tỷ lệ những người ngừng sử dụng sản phẩm hoàn toàn. Trong khi tỷ lệ áp dụng cổng thông tin bệnh nhân (xem chủ đề đó) đo lường liệu một bệnh nhân có bao giờ kích hoạt một cách có ý nghĩa một sản phẩm sức khỏe kỹ thuật số hay không, tỷ lệ giữ chân đo lường liệu họ có tiếp tục sử dụng nó hay không — và đối với bất kỳ sản phẩm sức khỏe kỹ thuật số kiểu đăng ký hoặc chăm sóc liên tục nào, tỷ lệ giữ chân thường là chỉ số duy nhất gắn kết chặt chẽ nhất với cả tác động lâm sàng lẫn tính bền vững thương mại.

## Tại sao điều này quan trọng

Một sản phẩm sức khỏe kỹ thuật số không thể giữ chân người dùng thì không thể mang lại lợi ích lâm sàng bền vững, bất kể các con số áp dụng hoặc kích hoạt ban đầu của nó mạnh mẽ đến đâu: một công cụ quản lý bệnh mãn tính được sử dụng trong hai tuần rồi bị bỏ rơi khó có khả năng làm thay đổi một kết quả chỉ số sinh học phụ thuộc vào nhiều tháng thay đổi hành vi bền vững. Tỷ lệ giữ chân cũng là một trong những chỉ số quan trọng nhất về mặt thương mại mà một công ty sức khỏe kỹ thuật số báo cáo cho các nhà đầu tư và bên chi trả, vì các đường cong giữ chân (hình dạng của sự sụt giảm theo thời gian, không chỉ một tỷ lệ phần trăm giữ chân duy nhất) tiết lộ liệu sản phẩm có tìm được một mô hình sử dụng thực sự bền vững hay chỉ đơn giản là đang nắm bắt mối quan tâm ban đầu được thúc đẩy bởi sự mới lạ, mối quan tâm này mờ dần một cách có thể dự đoán được. Một đường cong giữ chân trở nên bằng phẳng sau một sự sụt giảm ban đầu (những bệnh nhân vượt qua tháng đầu tiên có xu hướng ở lại) là một tín hiệu rất khác biệt, và lành mạnh hơn nhiều, so với một đường cong tiếp tục giảm đều đặn mà không có đáy.

## Cách tính

```
Tỷ lệ giữ chân (khoảng thời gian N) = số người dùng hoạt động
                                      trong khoảng thời gian N mà
                                      cũng hoạt động trong khoảng
                                      thời gian nhóm bắt đầu / số
                                      người dùng trong khoảng thời
                                      gian nhóm bắt đầu × 100

Tỷ lệ rời bỏ = 1 − tỷ lệ giữ chân (cho cùng khoảng thời gian)

Báo cáo dưới dạng một đường cong giữ chân theo nhóm (giữ chân tại
ngày/tuần/tháng 1, 2, 3…), không phải một con số tại một thời điểm
duy nhất, vì một ảnh chụp nhanh duy nhất sẽ gộp những người dùng
mới tham gia (chưa có cơ hội rời bỏ) với những người đã tham gia
lâu dài.
```

## Ví dụ tính toán

Một ứng dụng sức khỏe kỹ thuật số đăng ký một nhóm gồm 1.000 người dùng mới vào tháng Một. Đến cuối tháng 1, 640 trong số 1.000 người dùng ban đầu đó vẫn còn hoạt động (giữ chân tháng 1 là 64%). Đến cuối tháng 3, 410 người vẫn còn hoạt động (giữ chân tháng 3 là 41%). Đến tháng 6, 380 người vẫn còn hoạt động (giữ chân tháng 6 là 38%). Hình dạng của đường cong này — một sự sụt giảm ban đầu mạnh mẽ theo sau là sự bằng phẳng giữa tháng 3 và tháng 6 — cho thấy sản phẩm giữ chân một lõi người dùng ổn định sau khi họ vượt qua một rào cản áp dụng ban đầu, đây là một tín hiệu khác biệt về mặt vật chất và đáng khích lệ hơn so với nếu sự suy giảm từ tháng 3 đến tháng 6 tiếp tục ở cùng tốc độ như tháng 1 đến tháng 3.

## Nguồn dữ liệu và lưu ý

Tỷ lệ giữ chân được tính từ nhật ký sự kiện đăng nhập hoặc hoạt động của chính sản phẩm, định nghĩa "hoạt động" một cách nhất quán (ví dụ: ít nhất một phiên đủ điều kiện trong khoảng thời gian đó) trên mọi nhóm đang được so sánh. Các nhóm nên được so sánh trên cơ sở tương đương — cùng định nghĩa bắt đầu về "hoạt động", cùng độ dài cửa sổ quan sát — vì ngay cả những khác biệt nhỏ về định nghĩa (tháng 30 ngày so với 28 ngày, hoặc một ngưỡng "hoạt động" nghiêm ngặt hơn so với lỏng lẻo hơn) cũng có thể làm thay đổi tỷ lệ giữ chân được báo cáo vài điểm phần trăm mà không có sự khác biệt thực sự nào trong hành vi người dùng. Các hiệu ứng theo mùa là phổ biến trong các ứng dụng sức khỏe gắn liền với lời cam kết Năm Mới hoặc các khoảng thời gian nhận thức sức khỏe cụ thể, vì vậy so sánh nhóm theo năm thường cung cấp nhiều thông tin hơn so với việc so sánh các nhóm liền kề từ các thời điểm khác nhau trong năm.

## Những cạm bẫy

- **Báo cáo một ảnh chụp nhanh giữ chân duy nhất thay vì một đường cong**: một con số "X% người dùng vẫn còn hoạt động" duy nhất mà không có hình dạng của sự sụt giảm theo thời gian không thể phân biệt một sản phẩm đang chững lại (lành mạnh) với một sản phẩm đang suy giảm liên tục (không lành mạnh).
- **Thay đổi định nghĩa "hoạt động" giữa các khoảng thời gian báo cáo**: nới lỏng định nghĩa về người dùng hoạt động (ví dụ tính một lần mở ứng dụng thụ động thay vì một hành động đã hoàn thành) có thể làm cho tỷ lệ giữ chân có vẻ được cải thiện trong khi việc sử dụng thực tế không hề thay đổi.
- **Bỏ qua tính mùa vụ của nhóm**: so sánh tỷ lệ giữ chân của một nhóm tháng Một (thường được thổi phồng bởi việc đăng ký theo cam kết Năm Mới, trung bình mang lại một nhóm kém động lực hơn) với một nhóm có được vào một thời điểm khác trong năm có thể tạo ra các kết luận xu hướng sai lệch.
- **Trộn lẫn các nhóm tiếp cận tự nhiên và trả phí**: những người dùng có được thông qua các kênh khác nhau thường giữ chân rất khác nhau; trộn chúng vào một con số giữ chân tổng hợp duy nhất có thể che giấu một vấn đề giữ chân đặc thù theo kênh.

## Nguồn

- Tài liệu được bình duyệt về sự tham gia và tỷ lệ bỏ cuộc của ứng dụng sức khỏe kỹ thuật số, ví dụ các nghiên cứu được công bố trên Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, hướng dẫn thực hành tốt nhất về đo lường sự tham gia và giữ chân cho liệu pháp kỹ thuật số
- Các báo cáo chuẩn mực ngành về giữ chân ứng dụng sức khỏe di động, từ các nền tảng phân tích và tổ chức nghiên cứu thị trường sức khỏe kỹ thuật số

Xem thêm: [tỷ lệ nhất quán trong sự tham gia của bệnh nhân](../patient-engagement-consistency-rate/), chỉ số đo lường chất lượng tham gia trong số những người dùng được giữ chân, khác với việc liệu họ có tiếp tục đăng ký hay không.
