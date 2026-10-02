# Tỷ Lệ Nhất Quán Trong Sự Tham Gia Của Bệnh Nhân

Tỷ lệ nhất quán trong sự tham gia của bệnh nhân đo lường mức độ thường xuyên một bệnh nhân đã đăng ký tương tác với một sản phẩm sức khỏe kỹ thuật số theo thời gian — ví dụ như ghi lại thức ăn hoặc triệu chứng, ghi nhận hoạt động thể chất, hoặc xem dữ liệu sức khỏe — thay vì chỉ đơn giản là họ có từng sử dụng nó hay không. Đây là một chỉ số theo chiều dọc, khác với một số đếm sử dụng tích cực tại một thời điểm: hai bệnh nhân có thể có cùng trạng thái "đã sử dụng ứng dụng tháng này" trong khi một người ghi lại một cách nhất quán mỗi ngày và người kia ghi lại một lần rồi biến mất trong ba tuần, và chỉ có chỉ số nhất quán mới phân biệt được họ.

## Tại sao điều này quan trọng

Sự tương tác liên tục, đều đặn với một công cụ sức khỏe kỹ thuật số là một trong những chỉ số dẫn đường đáng tin cậy hơn về lợi ích lâm sàng, đặc biệt đối với các bệnh lý phụ thuộc vào hành vi như tiểu đường, quản lý cân nặng, và sức khỏe tâm thần, nơi giá trị của công cụ đến từ thói quen mà nó hỗ trợ chứ không phải bất kỳ phiên làm việc đơn lẻ nào. Một sản phẩm có thể báo cáo một số lượng người dùng hoạt động hàng tháng lành mạnh trong khi thực tế phục vụ một dân số chỉ đăng nhập một lần rồi trôi dạt đi, vì việc sử dụng tích cực hàng tháng là một ngưỡng thấp không nói lên điều gì về mô hình sử dụng trong tháng đó; các chỉ số nhất quán nắm bắt điều này theo cách mà các số đếm hoạt động đơn giản không thể. Vì sự nhất quán cũng là một trong những điều khó duy trì hơn qua nhiều tháng thay vì vài tuần, nó là một tín hiệu trung thực hơn về chất lượng sản phẩm và sự phù hợp lâm sàng so với các con số tham gia trong khung thời gian ngắn, vốn dễ bị ảnh hưởng bởi hiệu ứng mới lạ ngay sau khi làm quen.

## Cách tính

```
Tỷ lệ nhất quán tham gia = số tuần có ít nhất một tương tác đủ
                           điều kiện / tổng số tuần đã đăng ký ×
                           100

Một "tương tác đủ điều kiện" nên được định nghĩa một cách rõ ràng
và nhất quán (ví dụ: một mục ghi thức ăn, một lần check-in triệu
chứng, hoặc một lần đồng bộ hoạt động đã hoàn thành) — không bao
giờ là một sự kiện thụ động như mở ứng dụng mà không có hành động
được ghi nhận.

Báo cáo như một phân bố, không chỉ là một giá trị trung bình dân
số:
  ví dụ: tỷ lệ bệnh nhân có tính nhất quán hàng tuần ≥ 80%, tỷ lệ
       có 50-79%, tỷ lệ có < 50%
```

## Ví dụ tính toán

Một ứng dụng huấn luyện dinh dưỡng đăng ký một bệnh nhân trong 12 tuần. Bệnh nhân ghi lại ít nhất một mục thức ăn đủ điều kiện trong 9 trong số 12 tuần đó, cho một tỷ lệ nhất quán tham gia cá nhân là 9 / 12 × 100 = 75%. Trên toàn bộ nhóm đầy đủ của ứng dụng gồm 2.000 bệnh nhân đã đăng ký ít nhất 12 tuần, 600 bệnh nhân (30%) duy trì tính nhất quán hàng tuần ≥ 80%, 900 (45%) rơi vào dải 50-79%, và 500 (25%) rơi xuống dưới 50%. Chỉ báo cáo mức trung bình của nhóm (có thể rơi vào khoảng 65%) sẽ che giấu rằng một phần tư đầy đủ số bệnh nhân hầu như không tham gia chút nào — một phân khúc đáng được điều tra riêng thay vì bị pha loãng vào một mức trung bình tổng thể.

## Nguồn dữ liệu và lưu ý

Dữ liệu nhất quán đến từ nhật ký sự kiện của chính sản phẩm (mục thức ăn, đồng bộ hoạt động, check-in), và định nghĩa về "tương tác đủ điều kiện" có tác động rất lớn đến tỷ lệ kết quả — một định nghĩa khoan dung (bất kỳ lần mở ứng dụng nào) sẽ luôn trông tốt hơn một định nghĩa nghiêm ngặt (một mục ghi có ý nghĩa, đã hoàn thành), vì vậy định nghĩa được sử dụng phải được nêu rõ ràng cùng với bất kỳ con số được báo cáo nào. Dữ liệu được đồng bộ tự động (ví dụ: một thiết bị theo dõi thể hình kết nối đồng bộ hoạt động ở chế độ nền) nên được báo cáo riêng với dữ liệu được ghi lại thủ công, vì việc đồng bộ tự động có thể làm tăng tính nhất quán rõ ràng mà không phản ánh bất kỳ nỗ lực tích cực nào của bệnh nhân hoặc sự tham gia với hướng dẫn của sản phẩm.

## Những cạm bẫy

- **Nhầm lẫn giữa việc mở ứng dụng với sự tham gia có ý nghĩa**: một lần mở ứng dụng thụ động (ví dụ được kích hoạt bởi một thông báo đẩy) không giống như một mục ghi thức ăn hoặc một lần check-in đã hoàn thành; chỉ định nghĩa và báo cáo về các tương tác đủ điều kiện.
- **Chỉ báo cáo mức trung bình của dân số**: một tỷ lệ nhất quán trung bình trông có vẻ lành mạnh có thể che giấu một dân số lưỡng cực gồm những bệnh nhân rất tích cực và gần như hoàn toàn không tham gia; báo cáo phân bố trên các dải nhất quán, không chỉ mức trung bình.
- **Bỏ qua mẫu số độ dài đăng ký**: so sánh tỷ lệ nhất quán giữa các bệnh nhân đăng ký trong các khoảng thời gian rất khác nhau mà không tính đến thời lượng đăng ký sẽ thiên lệch về phía bất kỳ nhóm nào có cửa sổ đo lường ngắn hơn, dễ duy trì hơn.
- **Đồng bộ nền tự động làm tăng tỷ lệ**: một luồng dữ liệu thiết bị đeo được đồng bộ thụ động có thể làm cho một bệnh nhân không tham gia có vẻ hoạt động một cách nhất quán mà không có bất kỳ thay đổi hành vi thực sự nào hoặc sự tham gia sản phẩm từ phía họ.

## Nguồn

- Tài liệu được bình duyệt về các mô hình tham gia sức khỏe kỹ thuật số và mối quan hệ của chúng với kết quả lâm sàng, ví dụ các nghiên cứu được công bố trên Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), hướng dẫn về chất lượng dữ liệu sức khỏe do bệnh nhân tạo ra và đo lường sự tham gia
- Digital Therapeutics Alliance, hướng dẫn thực hành tốt nhất về đo lường sự tham gia và kết quả cho liệu pháp kỹ thuật số

Xem thêm: [tỷ lệ giữ chân người dùng](../user-retention-rate/), chỉ số liên quan chặt chẽ về việc liệu một bệnh nhân có tiếp tục đăng ký hay không, khác với mức độ nhất quán mà họ tham gia trong khi đã đăng ký.
