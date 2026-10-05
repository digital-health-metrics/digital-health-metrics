# Tỷ Lệ Vắng Mặt Lịch Hẹn

Tỷ lệ vắng mặt lịch hẹn (còn gọi là tỷ lệ "không đến", hay DNA) là tỷ lệ các cuộc hẹn đã lên lịch mà bệnh nhân không đến cũng không hủy với thông báo hợp lý. Đây là một trong những chỉ số vận hành lâu đời nhất trong chăm sóc sức khỏe, và các công cụ kỹ thuật số, đặc biệt là nhắc nhở, đặt lại lịch tự phục vụ, và đặt lịch qua cổng thông tin, hiện là một trong những đòn bẩy hiệu quả nhất và có bằng chứng tốt nhất để giảm tỷ lệ này.

## Tại sao điều này quan trọng

Mỗi lần vắng mặt là một đơn vị năng lực lâm sàng thường không thể khôi phục được, vì hầu hết các dịch vụ không thể lấp đầy một khoảng trống trong cùng ngày với thông báo ngắn, vì vậy tỷ lệ này trực tiếp thúc đẩy độ dài danh sách chờ, chi phí cho mỗi cuộc hẹn hoàn thành, và thời gian bác sĩ lâm sàng bị mất. Hành vi vắng mặt không được phân bố đồng đều: nó tương quan với sự thiếu thốn, khả năng tiếp cận giao thông, trách nhiệm chăm sóc, và gánh nặng quản lý nhiều bệnh mãn tính, vì vậy việc coi tỷ lệ cao thuần túy là một vấn đề về hành vi của bệnh nhân, thay vì một phần là tín hiệu về các rào cản tiếp cận, có xu hướng tạo ra các can thiệp (chẳng hạn như hình phạt chung) làm sâu sắc thêm sự bất bình đẳng thay vì giảm nó. Nhắc nhở kỹ thuật số và đặt lại lịch kỹ thuật số dễ dàng luôn nằm trong số những can thiệp hiệu quả nhất, chi phí thấp có sẵn, đó là lý do tại sao chỉ số này hoàn toàn thuộc về một chương trình đo lường sức khỏe kỹ thuật số thay vì chỉ trong báo cáo vận hành.

## Cách tính

```
Tỷ lệ vắng mặt = các cuộc hẹn được đánh dấu "không đến" / tổng số
                cuộc hẹn đã lên lịch × 100
```

Một cuộc hẹn đã lên lịch thường được loại khỏi mẫu số, hoặc chuyển sang một danh mục riêng, nếu nó bị hủy bởi một trong hai bên với hơn một khoảng thời gian thông báo xác định (thường là 24 giờ). Các lần hủy muộn (dưới khoảng thời gian thông báo đó) thường được báo cáo riêng với các trường hợp vắng mặt thực sự, vì các hàm ý vận hành và hành vi khác nhau.

## Ví dụ tính toán

Một phòng khám cộng đồng lên lịch 2.000 cuộc hẹn trong một tháng. Trong số này, 140 cuộc bị hủy với hơn 24 giờ thông báo (được đặt lại lịch và loại khỏi mẫu số), 60 cuộc bị hủy muộn (dưới 24 giờ), và 180 cuộc được ghi nhận là vắng mặt thực sự mà không có bất kỳ liên hệ nào. Tỷ lệ vắng mặt là 180 / 2.000 × 100 = 9%. Nếu 60 lần hủy muộn được gộp vào cùng danh mục với các trường hợp vắng mặt thực sự, tỷ lệ được báo cáo sẽ tăng lên 12%, đó là lý do tại sao định nghĩa được sử dụng phải luôn được nêu rõ cùng với con số đó.

## Nguồn dữ liệu và lưu ý

Hệ thống lên lịch hoặc quản lý phòng khám là nguồn chính, sử dụng mã trạng thái cuộc hẹn của nó; chất lượng của chỉ số này hoàn toàn phụ thuộc vào việc nhân viên sử dụng nhất quán trạng thái chính xác thay vì một danh mục "đã hủy" chung chung cho mọi thứ. Các tổ chức giới thiệu nhắc nhở kỹ thuật số (SMS, thông báo đẩy ứng dụng, hoặc cảnh báo cổng thông tin) nên đo lường tỷ lệ vắng mặt trước và sau thay đổi đó cho một nhóm bệnh nhân và dịch vụ tương đương, vì hiệu quả của nhắc nhở đã được ghi nhận rõ ràng trong các nghiên cứu ngẫu nhiên và quan sát nhưng thay đổi theo dân số và kênh.

## Những cạm bẫy

- **So sánh tỷ lệ thô giữa các phòng khám có thực hành đặt chỗ quá mức khác nhau**: một phòng khám cố ý đặt chỗ quá mức để bù đắp cho tỷ lệ vắng mặt dự kiến sẽ hiển thị một tỷ lệ rõ ràng khác với một phòng khám không làm vậy, độc lập với hành vi thực sự của bệnh nhân.
- **Gộp các lần hủy muộn với các trường hợp vắng mặt thực sự**: cả hai có nguyên nhân khác nhau và giải pháp kỹ thuật số khác nhau (vấn đề hủy muộn thường được giải quyết bằng việc đặt lại lịch tự phục vụ dễ dàng hơn; vấn đề vắng mặt thực sự thường được giải quyết bằng nhắc nhở tốt hơn và độ chính xác liên hệ).
- **Thiên lệch sống sót từ các chính sách xuất viện**: các dịch vụ cho bệnh nhân xuất viện sau nhiều lần vắng mặt lặp lại sẽ thấy tỷ lệ của chính họ cải thiện một cách máy móc, trong khi chỉ đơn giản là chuyển cùng những bệnh nhân đó sang nơi khác trong hệ thống.
- **Đổ lỗi cho sự loại trừ kỹ thuật số lên bệnh nhân**: một bệnh nhân không có điện thoại thông minh hoặc dịch vụ tin nhắn đáng tin cậy sẽ không được hưởng lợi từ một chiến lược nhắc nhở chỉ qua kỹ thuật số, vì vậy một cách tiếp cận đa kênh (thư, gọi điện, tin nhắn, ứng dụng) thường cần thiết để tránh làm rộng thêm khoảng cách tiếp cận.

## Nguồn

- NHS England, các cuộc hẹn bị bỏ lỡ trong thực hành tổng quát và chăm sóc ngoại trú, thống kê và hướng dẫn được công bố
- Các đánh giá hệ thống Cochrane về các can thiệp để giảm các cuộc hẹn chăm sóc sức khỏe bị bỏ lỡ, bao gồm các hệ thống nhắc nhở
- Tài liệu được bình duyệt về các mối tương quan kinh tế xã hội và nhân khẩu học của việc không tham dự cuộc hẹn

Xem thêm: [tỷ lệ khám từ xa](../tỷ-lệ-khám-từ-xa/), vì hành vi vắng mặt thường khác nhau theo phương thức tư vấn, và [tỷ lệ áp dụng cổng thông tin bệnh nhân](../tỷ-lệ-áp-dụng-cổng-thông-tin-bệnh-nhân/), vì việc tự đặt lịch và nhắc nhở dựa trên cổng thông tin là một can thiệp kỹ thuật số chính.
