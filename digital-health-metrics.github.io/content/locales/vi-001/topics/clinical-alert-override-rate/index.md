# Tỷ Lệ Ghi Đè Cảnh Báo Lâm Sàng

Tỷ lệ ghi đè cảnh báo lâm sàng đo lường tỷ lệ các cảnh báo hỗ trợ quyết định lâm sàng (CDS), chẳng hạn như cảnh báo tương tác thuốc-thuốc, cảnh báo dị ứng, và kiểm tra phạm vi liều lượng được tạo ra bởi hệ thống nhập lệnh của nhà cung cấp máy tính hóa (CPOE), mà một bác sĩ lâm sàng bỏ qua hoặc ghi đè thay vì hành động theo. Đây là tín hiệu định lượng tiêu chuẩn được sử dụng để phát hiện và quản lý "sự mệt mỏi cảnh báo": xu hướng được ghi nhận rõ ràng của các bác sĩ lâm sàng trở nên mất nhạy cảm với cảnh báo khi khối lượng cảnh báo giá trị thấp trở nên quá tải.

## Tại sao điều này quan trọng

Các tỷ lệ ghi đè được công bố cho cảnh báo tương tác thuốc thường dao động từ khoảng một nửa đến hơn chín mươi phần trăm, và một tỷ lệ cao không tự động là một thất bại về an toàn: nhiều cảnh báo gây gián đoạn kích hoạt cho các tương tác không đáng kể về mặt lâm sàng trong ngữ cảnh, hoặc lặp lại một cảnh báo mà bác sĩ lâm sàng đã hành động theo trước đó trong cùng bộ lệnh, vì vậy một hệ thống được điều chỉnh tốt cố ý kích hoạt ít cảnh báo hơn, giá trị cao hơn thay vì cố gắng đưa tỷ lệ ghi đè về không. Điều thực sự quan trọng đối với an toàn là xu hướng theo thời gian, sự phân bố qua các tầng mức độ nghiêm trọng, và liệu bác sĩ lâm sàng có ghi lại lý do khi họ ghi đè một cảnh báo mức độ nghiêm trọng cao hay không; một tỷ lệ ghi đè đang tăng đối với các tương tác mức độ nghiêm trọng cao, có bằng chứng tốt là một mối quan tâm quản trị thực sự ngay cả khi mức trung bình trên tất cả các cảnh báo có vẻ ổn định.

## Cách tính

```
Tỷ lệ ghi đè = số cảnh báo bị ghi đè / tổng số cảnh báo được kích
              hoạt × 100

Phân khúc theo:
  - tầng mức độ nghiêm trọng (ví dụ: chống chỉ định, nghiêm trọng,
    trung bình)
  - loại cảnh báo (tương tác thuốc-thuốc, dị ứng, liệu pháp trùng
    lặp, phạm vi liều lượng)
  - liệu lý do ghi đè có được ghi lại hay không

Một "tỷ lệ ghi đè có tài liệu" theo dõi tỷ lệ các lần ghi đè có
mang theo một lời biện minh được ghi nhận, đây là một thước đo
quản trị riêng của nó.
```

## Ví dụ tính toán

Hệ thống CPOE của một bệnh viện kích hoạt 10.000 cảnh báo tương tác thuốc-thuốc trong một tháng, trong đó 8.700 bị ghi đè, cho tỷ lệ ghi đè tổng thể là 87%. Phân khúc theo mức độ nghiêm trọng cho thấy trong số 500 cảnh báo "chống chỉ định", 60 bị ghi đè (12%), trong khi trong số 6.000 cảnh báo "trung bình", 5.700 bị ghi đè (95%). Con số tầng trung bình nhìn chung phù hợp với các tiêu chuẩn đã công bố và tự nó không phải là nguyên nhân đáng lo ngại; con số tầng chống chỉ định đòi hỏi xem xét từng trường hợp riêng lẻ, và việc chỉ có 340 trong số 500 lần ghi đè ở tầng đó mang theo một lý do được ghi nhận là phát hiện quản trị đáng hành động hơn.

## Nguồn dữ liệu và lưu ý

Nhật ký kiểm toán của hồ sơ sức khỏe điện tử, hoặc mô-đun cảnh báo riêng của nhà cung cấp CDS, ghi lại mỗi sự kiện kích hoạt cảnh báo và phản hồi cảnh báo, bao gồm việc liệu bác sĩ lâm sàng có nhập văn bản tự do hoặc lý do có cấu trúc hay không. So sánh tỷ lệ ghi đè giữa các tổ chức, hoặc thậm chí giữa các khoa trong cùng một tổ chức, đòi hỏi phải kiểm tra rằng các bộ quy tắc cảnh báo cơ bản và phân tầng mức độ nghiêm trọng là giống nhau; một bệnh viện có bộ quy tắc được điều chỉnh tích cực sẽ hiển thị tỷ lệ ghi đè thấp hơn vì những lý do không liên quan gì đến hành vi của bác sĩ lâm sàng.

## Những cạm bẫy

- **Coi tỷ lệ ghi đè thô là một điểm số an toàn duy nhất**: nó gộp các lần ghi đè có lý do chính đáng đối với các cảnh báo giá trị thấp với các lần ghi đè không an toàn đối với các tương tác thực sự nguy hiểm; luôn phân khúc theo mức độ nghiêm trọng.
- **Không ghi nhận lý do ghi đè**: nếu không có lý do được ghi nhận, không thể phân biệt "cảnh báo này sai" với "cảnh báo này đúng và bác sĩ lâm sàng đã đưa ra một phán đoán không an toàn", đây là sự khác biệt thực sự quan trọng đối với an toàn bệnh nhân.
- **Lạm phát quy tắc cảnh báo theo thời gian**: thêm nhiều cảnh báo hơn để "an toàn" mà không loại bỏ những cảnh báo giá trị thấp là nguyên nhân trực tiếp dẫn đến tỷ lệ ghi đè tăng và sự mệt mỏi cảnh báo; quản trị cảnh báo nên bao gồm việc xem xét định kỳ và loại bỏ các quy tắc hoạt động kém, không chỉ giám sát.
- **So sánh tỷ lệ giữa các hệ thống có thiết kế gián đoạn khác nhau**: một cảnh báo gây gián đoạn, dừng cứng tạo ra hành vi ghi đè khác với một cảnh báo thụ động, không chặn, vì vậy hai loại này không phải là các chỉ số có thể so sánh trực tiếp.

## Nguồn

- Tài liệu được bình duyệt về sự mệt mỏi cảnh báo hỗ trợ quyết định lâm sàng, được công bố rộng rãi trên các tạp chí bao gồm JAMIA và npj Digital Medicine
- ONC / HealthIT.gov, hướng dẫn an toàn công nghệ y tế về hỗ trợ quyết định lâm sàng
- Institute for Safe Medication Practices (ISMP), hướng dẫn về thiết kế và quản trị cảnh báo CDS
