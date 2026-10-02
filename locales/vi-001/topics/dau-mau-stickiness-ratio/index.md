# Tỷ Lệ Bám Dính DAU/MAU

Tỷ lệ bám dính DAU/MAU so sánh người dùng hoạt động hàng ngày (DAU) với người dùng hoạt động hàng tháng (MAU) — cùng phép đo cơ bản được sử dụng cho người dùng hoạt động hàng tuần (WAU) so với MAU — để thể hiện tỷ lệ phần nào của cơ sở người dùng rộng lớn hơn của một sản phẩm tham gia với nó vào bất kỳ ngày nào. Đây là thước đo phân tích sản phẩm tiêu chuẩn về cường độ tham gia, khác với việc liệu một người dùng có được giữ chân hay không (xem tỷ lệ giữ chân người dùng) hoặc mức độ nhất quán mà một bệnh nhân đã đăng ký cụ thể tham gia theo thời gian (xem tỷ lệ nhất quán trong sự tham gia của bệnh nhân): sự bám dính mô tả nhịp điệu sử dụng ở cấp độ dân số, không phải mô hình của bất kỳ cá nhân nào.

## Tại sao điều này quan trọng

Hai sản phẩm sức khỏe kỹ thuật số có thể báo cáo cùng một số lượng người dùng hoạt động hàng tháng trong khi có cường độ tham gia cơ bản rất khác nhau: một sản phẩm nơi hầu hết những người dùng đó mở ứng dụng gần như mỗi ngày, và một sản phẩm khác nơi hầu hết mở nó một lần mỗi tháng ngay trước khi nó sẽ được tính là không hoạt động. Tỷ lệ bám dính DAU/MAU phân biệt hai tình huống rất khác nhau này bằng một con số chuẩn mực duy nhất, đơn giản, được hiểu rõ mà các đội ngũ sản phẩm và lâm sàng có thể theo dõi theo thời gian và so sánh với các phạm vi ngành đã biết — một tỷ lệ khoảng 20% là một chuẩn mực hợp lý thường được trích dẫn cho nhiều ứng dụng tiêu dùng, trong khi các sản phẩm thói quen hàng ngày (một nhật ký thức ăn hoặc triệu chứng mà bệnh nhân được kỳ vọng sử dụng mỗi ngày) nên được đánh giá dựa trên một tiêu chuẩn cao hơn có ý nghĩa. Vì sự bám dính nhạy cảm với cách "hoạt động" được định nghĩa, nó hữu ích nhất như một xu hướng cho một sản phẩm theo thời gian, và như một so sánh với các sản phẩm được xây dựng cho một mô hình sử dụng tương tự, thay vì như một chuẩn mực tuyệt đối liên ngành.

## Cách tính

```
Tỷ lệ bám dính DAU/MAU = số người dùng hoạt động hàng ngày trung
                         bình trong khoảng thời gian / số người
                         dùng hoạt động hàng tháng trong cùng
                         khoảng thời gian × 100

Tỷ lệ WAU/MAU (hàng tuần, cùng nguyên tắc) là một biến thể nhẹ
nhàng hơn, phù hợp hơn cho các sản phẩm được kỳ vọng sử dụng vài
lần mỗi tuần thay vì hàng ngày.

"Hoạt động" phải được định nghĩa một cách chính xác và nhất quán
(ví dụ: một hành động đủ điều kiện đã hoàn thành, không phải một
lần mở ứng dụng thụ động) trên cả tử số lẫn mẫu số.
```

## Ví dụ tính toán

Một ứng dụng quản lý tiểu đường kỹ thuật số có 10.000 người dùng hoạt động hàng tháng trong một tháng nhất định, được định nghĩa là bất kỳ người dùng nào hoàn thành ít nhất một hành động đủ điều kiện (một lần ghi đường huyết, một lần ghi bữa ăn, hoặc một lần đánh dấu thuốc) trong tháng đó. Tính trung bình số người dùng hoạt động hàng ngày trên 30 ngày của tháng đó cho một DAU trung bình là 2.200. Tỷ lệ bám dính DAU/MAU là 2.200 / 10.000 × 100 = 22%, cho thấy rằng vào một ngày điển hình, khoảng 22% cơ sở người dùng hàng tháng của ứng dụng tham gia với nó — một con số hợp lý đối với một công cụ bệnh mãn tính thói quen hàng ngày, mặc dù đội ngũ sản phẩm sẽ muốn thấy nó có xu hướng tăng lên theo thời gian khi hành vi lý tưởng (ghi chép hàng ngày) trở nên có tính thói quen hơn đối với các bệnh nhân đã đăng ký.

## Nguồn dữ liệu và lưu ý

DAU, WAU, và MAU đều được tính từ cùng một nhật ký sự kiện cơ bản, sử dụng một định nghĩa nhất quán duy nhất về một sự kiện "hoạt động đủ điều kiện" trên mọi cửa sổ; việc thay đổi định nghĩa đó giữa các phép tính tử số và mẫu số (ví dụ, tính bất kỳ lần mở ứng dụng nào cho DAU nhưng chỉ một hành động đã hoàn thành cho MAU) sẽ tạo ra một tỷ lệ bị bóp méo không phản ánh cường độ tham gia thực sự. Chuẩn mực phù hợp cho sự bám dính phụ thuộc rất nhiều vào mô hình sử dụng dự định của sản phẩm: một công cụ dự định sử dụng một lần mỗi tuần (một lần check-in triệu chứng hàng tuần) sẽ và nên có một tỷ lệ DAU/MAU thấp hơn một công cụ dự định sử dụng hàng ngày (một ứng dụng đồng hành máy giám sát đường huyết liên tục), vì vậy sự bám dính nên luôn được diễn giải dựa trên nhịp độ sử dụng dự định của chính sản phẩm, không phải một mục tiêu chung duy nhất.

## Những cạm bẫy

- **So sánh tỷ lệ bám dính giữa các sản phẩm có tần suất sử dụng dự định khác nhau**: một công cụ sử dụng hàng tuần sẽ về mặt cấu trúc hiển thị một tỷ lệ DAU/MAU thấp hơn một công cụ sử dụng hàng ngày ngay cả khi cả hai đều hoạt động đúng như dự định cho trường hợp sử dụng tương ứng của chúng; so chuẩn với nhịp độ dự định của chính sản phẩm, không phải một mục tiêu chung duy nhất.
- **Sử dụng các định nghĩa hoạt động không nhất quán trên tử số và mẫu số**: điều này có thể tạo ra một tỷ lệ bám dính không phản ánh cường độ tham gia thực sự và không thể được so sánh một cách có ý nghĩa theo thời gian hoặc với các sản phẩm khác.
- **Coi một tỷ lệ bám dính đang tăng là tích cực một cách không mơ hồ mà không kiểm tra xu hướng MAU tổng thể**: một tỷ lệ đang tăng được thúc đẩy bởi một cơ sở người dùng cốt lõi đang thu hẹp, mang tính thói quen hơn trong khi MAU tổng thể giảm là một tình huống rất khác biệt — và đáng lo ngại hơn — so với một tình huống được thúc đẩy bởi sự gia tăng thực sự trong sự tham gia hàng ngày trên một cơ sở người dùng ổn định hoặc đang tăng trưởng.
- **Bỏ qua các hiệu ứng ngày-trong-tuần và mùa vụ đối với DAU**: DAU có thể thay đổi đáng kể theo ngày trong tuần (ngày thường so với cuối tuần) hoặc mùa đối với nhiều sản phẩm sức khỏe; tính trung bình DAU trong một khoảng thời gian nắm bắt một chu kỳ tự nhiên đầy đủ thay vì một cửa sổ ngắn có thể bị lệch.

## Nguồn

- Tài liệu được bình duyệt và ngành về các chỉ số tham gia sản phẩm di động và kỹ thuật số, các khung chuẩn mực được sử dụng rộng rãi từ các nền tảng phân tích di động
- Digital Therapeutics Alliance, hướng dẫn thực hành tốt nhất về đo lường sự tham gia cho liệu pháp kỹ thuật số
- Tài liệu được bình duyệt về đo lường sự tham gia sức khỏe kỹ thuật số, ví dụ các nghiên cứu được công bố trên Journal of Medical Internet Research (JMIR mHealth and uHealth)

Xem thêm: [tỷ lệ giữ chân người dùng](../user-retention-rate/) và [tỷ lệ nhất quán trong sự tham gia của bệnh nhân](../patient-engagement-consistency-rate/), hai chỉ số tham gia liên quan mà tỷ lệ này thường bị nhầm lẫn nhất.
