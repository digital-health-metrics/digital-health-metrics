# Thời Gian Xử Lý Chuyển Tuyến Kỹ Thuật Số

Thời gian xử lý chuyển tuyến kỹ thuật số là khoảng thời gian trôi qua từ khi một chuyển tuyến điện tử được gửi bởi một bác sĩ lâm sàng chuyển tuyến đến khi nó được phân loại và hoặc được chấp nhận, từ chối, hoặc đặt lịch bởi dịch vụ tiếp nhận. Đây là một chỉ số quy trình (luồng), khác biệt với tổng thời gian chờ đợi của bệnh nhân, và đây là một trong những nơi rõ ràng nhất mà một thay đổi hệ thống kỹ thuật số (chuyển tuyến điện tử có cấu trúc, phân loại dựa trên hình ảnh, biểu mẫu chuyển tuyến chuẩn hóa) có thể được chứng minh là làm thay đổi một con số vận hành thay vì chỉ là một điểm số hài lòng.

## Tại sao điều này quan trọng

Một bước phân loại chậm hoặc có độ biến thiên cao làm tăng thêm độ trễ trước khi bệnh nhân thậm chí tham gia vào danh sách chờ lâm sàng, và vì độ trễ đó xảy ra trước khi bất kỳ chăm sóc lâm sàng nào bắt đầu, đó là sự lãng phí quy trình thuần túy mà công cụ kỹ thuật số có vị trí tốt để loại bỏ. Các hệ thống chuyển tuyến buộc phải có một chu kỳ "trả lại cho người chuyển tuyến" đối với thông tin bị thiếu tạo ra các vòng lặp làm lại công việc dễ bị bỏ sót nếu thời gian xử lý chỉ được đo trên các chuyển tuyến đi qua một cách suôn sẻ ngay từ lần đầu. Khi một dịch vụ đã giới thiệu các biểu mẫu chuyển tuyến kỹ thuật số có cấu trúc, các trường bắt buộc, hoặc phân loại dựa trên hình ảnh (ví dụ trong bệnh da liễu từ xa), thời gian xử lý thường là chỉ số thuyết phục nhất để chứng minh lợi ích, vì nó có thể đo lường được trước và sau thay đổi với cùng một công cụ đo lường.

## Cách tính

```
Thời gian xử lý = dấu thời gian(quyết định phân loại) − dấu thời
                  gian(nộp chuyển tuyến)

Báo cáo trung vị và một phân vị cao (thường là phân vị thứ 90),
không chỉ giá trị trung bình, vì phân bố bị lệch mạnh về bên phải
bởi các chuyển tuyến bị trả lại hoặc phức tạp.

Xem xét thời gian ở các giai đoạn phụ nếu hệ thống ghi nhận được
chúng:
  Nộp → được dịch vụ nhận
  Nhận → quyết định phân loại
  Quyết định phân loại → đặt lịch hẹn (nếu liên quan)
```

## Ví dụ tính toán

Dấu vết kiểm toán của một hệ thống chuyển tuyến điện tử cho thấy thời gian trung vị từ khi nộp đến quyết định phân loại là 1,8 ngày trên tất cả các chuyên khoa, với thời gian ở phân vị thứ 90 là 6 ngày, chủ yếu do các chuyển tuyến bị trả lại cho người chuyển tuyến vì thiếu thông tin lâm sàng. Một lộ trình bệnh da liễu từ xa sử dụng phân loại dựa trên hình ảnh trên cùng nền tảng đạt được thời gian xử lý trung vị là 4 giờ và phân vị thứ 90 là 1 ngày, vì một bức ảnh và tiền sử có cấu trúc hầu như luôn đủ cho quyết định phân loại mà không cần trao đổi thêm.

## Nguồn dữ liệu và lưu ý

Dấu vết kiểm toán của chính hệ thống chuyển tuyến điện tử hoặc quản lý chuyển tuyến là nguồn chính, sử dụng dấu thời gian nộp và quyết định; các tổ chức nên xác nhận liệu "đồng hồ" có tạm dừng trong khi một chuyển tuyến được trả lại để lấy thêm thông tin hay chạy liên tục, vì hai định nghĩa này tạo ra các con số khác biệt đáng kể cho cùng một quy trình cơ bản. Thời gian xử lý nên được báo cáo nhất quán theo thời gian lịch hoặc thời gian giờ làm việc, vì các hiệu ứng cuối tuần và ngày lễ nếu không sẽ làm sai lệch các so sánh giữa các dịch vụ có mô hình làm việc khác nhau.

## Những cạm bẫy

- **Chỉ đo lường các chuyển tuyến "sạch"**: loại trừ các chuyển tuyến bị từ chối hoặc trả lại khỏi phép tính che giấu gánh nặng làm lại công việc mà công cụ kỹ thuật số thường được thiết kế đặc biệt để giảm bớt.
- **Báo cáo giá trị trung bình thay vì trung vị và phân vị**: một số ít chuyển tuyến chạy lâu, bị trả lại sẽ kéo giá trị trung bình lên cao hơn nhiều so với trải nghiệm thực tế của bệnh nhân điển hình.
- **Nhầm lẫn thời gian xử lý với tổng thời gian chờ**: thời gian xử lý chỉ bao gồm bước phân loại; trải nghiệm tổng thể của bệnh nhân cũng bao gồm danh sách chờ lâm sàng ở hạ lưu, đây là một chỉ số riêng biệt chịu sự chi phối của các ràng buộc năng lực riêng biệt.
- **Không phân biệt các giai đoạn phụ**: một dịch vụ chỉ đo lường thời gian từ đầu đến cuối không thể biết liệu một con số chậm là do người chuyển tuyến nộp thông tin không đầy đủ, do năng lực phân loại của dịch vụ tiếp nhận, hay do cả hai.

## Nguồn

- NHS England, thống kê và đặc tả dịch vụ e-Referral Service (e-RS)
- Tài liệu được bình duyệt về các hệ thống quản lý chuyển tuyến điện tử và lộ trình phân loại kỹ thuật số, bao gồm bệnh da liễu từ xa
- ONC / HealthIT.gov, hướng dẫn về khả năng tương tác và điều phối chuyển tuyến
