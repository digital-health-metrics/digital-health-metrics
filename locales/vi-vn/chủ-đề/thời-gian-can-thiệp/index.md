# Thời Gian Can Thiệp

Thời gian can thiệp là khoảng thời gian trôi qua từ khi một cảnh báo sức khỏe tự động được tạo ra — ví dụ một thiết bị giám sát từ xa phát hiện một dấu hiệu sinh tồn ngoài phạm vi, hoặc một công cụ phân loại kỹ thuật số đánh dấu một bệnh nhân đang xấu đi — đến khi một thành viên đội ngũ lâm sàng thực sự bắt đầu phản ứng. Đây là chỉ số quy trình xác định liệu một hệ thống cảnh báo tự động có thực hiện được lời hứa cốt lõi của nó hay không: phát hiện một vấn đề sớm hơn so với mô hình truyền thống của các lần kiểm tra theo lịch hoặc các cuộc gọi điện thoại do bệnh nhân khởi xướng.

## Tại sao điều này quan trọng

Một hệ thống cảnh báo tạo ra một cảnh báo chính xác về mặt lâm sàng nhưng không được theo sau bởi một phản ứng kịp thời thực sự chưa cải thiện an toàn bệnh nhân; toàn bộ đề xuất giá trị của giám sát từ xa và cảnh báo tự động phụ thuộc vào việc khép kín vòng lặp nhanh hơn so với lộ trình không được giám sát thay thế. Vì các mức độ nghiêm trọng cảnh báo khác nhau yêu cầu mức độ khẩn cấp phản ứng khác nhau, thời gian can thiệp nên luôn được báo cáo theo từng tầng mức độ nghiêm trọng thay vì như một mức trung bình duy nhất, vì một mức trung bình nhanh trên tất cả các cảnh báo có thể che giấu một phản ứng nguy hiểm chậm đối với một số ít cảnh báo nghiêm trọng nhất. Chỉ số này cũng là một trong những cách rõ ràng nhất, thuyết phục nhất để chứng minh giá trị của một chương trình giám sát tự động cho ban lãnh đạo lâm sàng và bên chi trả, vì nó có thể được so sánh trực tiếp với thời gian phản ứng không tự động trước đây của cùng tổ chức đối với một tình huống lâm sàng tương tự.

## Cách tính

```
Thời gian can thiệp = dấu thời gian(phản ứng lâm sàng bắt đầu) −
                      dấu thời gian(cảnh báo được tạo ra)

Báo cáo trung vị và một phân vị cao (ví dụ phân vị thứ 90), được
phân khúc theo tầng mức độ nghiêm trọng cảnh báo, không phải như
một mức trung bình gộp duy nhất.

"Phản ứng lâm sàng bắt đầu" nên được định nghĩa một cách chính xác
và nhất quán — ví dụ một bác sĩ lâm sàng mở hồ sơ bệnh nhân và
hành động, hoặc một nỗ lực liên hệ ra ngoài đã được ghi nhận —
không chỉ đơn giản là một cảnh báo được xem hoặc xác nhận mà không
có hành động nào được thực hiện.
```

## Ví dụ tính toán

Hệ thống cảnh báo của một chương trình giám sát tim mạch từ xa đánh dấu 200 cảnh báo loạn nhịp tim mức độ nghiêm trọng cao trong một tháng. Thời gian trung vị từ khi cảnh báo được tạo ra đến khi một bác sĩ lâm sàng bắt đầu liên hệ ra ngoài là 12 phút, với thời gian phân vị thứ 90 là 38 phút. Dữ liệu lịch sử từ lộ trình không được giám sát trước đây của cùng dân số đó (nơi một sự kiện tương tự thường chỉ xuất hiện tại lần khám phòng khám theo lịch tiếp theo hoặc trình bày tại bệnh viện) cho thấy thời gian trung vị đến bất kỳ phản ứng lâm sàng nào được đo bằng ngày, không phải phút. Sự so sánh này — chứ không phải con số 12 phút một mình — là điều chứng minh giá trị lâm sàng của chương trình giám sát; con số phân vị thứ 90 cũng quan trọng không kém, vì nó xác định phần đuôi của các cảnh báo mất hơn nửa giờ để hành động và cần một đánh giá nguyên nhân gốc của riêng nó.

## Nguồn dữ liệu và lưu ý

Dấu thời gian tạo cảnh báo đến từ nhật ký sự kiện của chính nền tảng giám sát; dấu thời gian phản ứng lâm sàng thường đến từ dấu vết kiểm toán của hồ sơ sức khỏe điện tử hoặc hệ thống quy trình làm việc hoặc quản lý nhiệm vụ của chính đội ngũ chăm sóc, và hai hệ thống này phải được đồng bộ hóa thời gian một cách chính xác để khoảng thời gian được tính toán đáng tin cậy. "Phản ứng bắt đầu" cần một định nghĩa nghiêm ngặt, được ghi nhận, vì một bác sĩ lâm sàng chỉ đơn giản xem hoặc bỏ qua một cảnh báo mà không có hành động nào thêm là một sự kiện khác biệt về cơ bản, và kém an tâm hơn nhiều, so với một sự kiện kích hoạt một liên hệ ra ngoài hoặc can thiệp thực sự — gộp hai điều này lại sẽ làm cho thời gian phản ứng trông tốt hơn thực tế lâm sàng. Mức độ nhân sự ban đêm và cuối tuần thường ảnh hưởng đáng kể đến thời gian can thiệp, vì vậy chỉ số này nên được báo cáo theo phân khúc thời gian trong ngày và ngày trong tuần khi khối lượng cảnh báo cho phép, thay vì chỉ như một mức trung bình gộp 24/7 có thể che giấu một khoảng trống phản ứng sau giờ làm việc nghiêm trọng.

## Những cạm bẫy

- **Tính việc xác nhận cảnh báo là phản ứng**: một bác sĩ lâm sàng xem hoặc bỏ qua một cảnh báo không giống như việc bắt đầu một phản ứng lâm sàng; định nghĩa phản ứng một cách nghiêm ngặt là một hành động được ghi nhận, không phải sự xác nhận thụ động.
- **Báo cáo một thời gian gộp duy nhất trên tất cả các mức độ nghiêm trọng**: một mức trung bình nhanh trên các cảnh báo mức độ nghiêm trọng thấp và cao kết hợp có thể che giấu một thời gian phản ứng nguy hiểm chậm cụ thể đối với các cảnh báo mức độ nghiêm trọng cao nhất, những cảnh báo quan trọng nhất.
- **Bỏ qua các hiệu ứng mô hình nhân sự**: thời gian phản ứng thường thay đổi đáng kể theo thời gian trong ngày và ngày trong tuần do mức độ nhân sự; một mức trung bình tổng thể duy nhất có thể che giấu một khoảng trống phản ứng sau giờ làm việc hoặc cuối tuần có tính hệ thống.
- **So sánh thời gian can thiệp giữa các tổ chức có ngưỡng cảnh báo khác nhau**: một tổ chức có ngưỡng cảnh báo bảo thủ hơn (nhạy cảm hơn) sẽ tạo ra nhiều cảnh báo mức độ khẩn cấp thấp hơn, điều này có thể pha loãng thời gian phản ứng trung bình của nó so với một tổ chức sử dụng một ngưỡng nghiêm ngặt hơn, độc lập với khả năng phản ứng lâm sàng thực tế.

## Nguồn

- NHS England, hướng dẫn về các tiêu chuẩn phản ứng lâm sàng giám sát từ xa và bệnh viện ảo
- ONC / HealthIT.gov, hướng dẫn về thiết kế và an toàn hệ thống cảnh báo lâm sàng
- Tài liệu được bình duyệt về thời gian phản ứng cảnh báo giám sát bệnh nhân từ xa và kết quả lâm sàng, ví dụ các nghiên cứu được công bố trên npj Digital Medicine

Xem thêm: [tỷ lệ thời gian hoạt động của thiết bị](../tỷ-lệ-thời-gian-hoạt-động-của-thiết-bị/), vì một con số thời gian can thiệp đáng tin cậy phụ thuộc vào việc thiết bị giám sát cơ bản thực sự trực tuyến để tạo ra cảnh báo ngay từ đầu.
