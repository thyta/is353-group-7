# IS353 Group 7

## Cấu trúc thư mục

Dự án bao gồm 5 thư mục chính:

### 1. `Synthesis: Education_dataset_V2`

Chứa các dữ liệu do giảng viên cung cấp cùng các dữ liệu thu thập từ các nguồn khác, ví dụ như danh sách tỉnh thành Việt Nam. Thư mục này thực hiện quá trình tổng hợp và tạo ra bảng **fact** để cung cấp dữ liệu cho các bước sau. **Bảng fact** này chỉ là bảng tổng hợp, các bước tiếp theo sẽ linh hoạt trong việc lấy hoặc xử lý các cột dữ liệu khác.

### 2. `Data Mining: Visualize`

Bao gồm các phân tích cơ bản sử dụng Python để khai thác và trực quan hóa dữ liệu. Do việc phân tích bằng Python tốn nhiều thời gian, nhóm đã chuyển sang sử dụng Power BI để phân tích và trực quan hóa dữ liệu một cách hiệu quả hơn.

### 3. `Models`

#### 3.1. `Machine Learning`
- Bao gồm 10 mô hình học máy (ML) được sử dụng để dự đoán và đánh giá độ chính xác của các dự đoán.

#### 3.2. `Deep Learning`
- Gồm 5 mô hình học sâu:
  - **MLP (Multi-Layer Perceptron)**: Một mô hình mạng nơ-ron đơn giản.
  - **LSTM 1 input (sequence input)**: Mô hình LSTM với một loại đầu vào chuỗi.
  - **CNN 1 input (sequence input)**: Mô hình CNN với một loại đầu vào chuỗi.
  - **LSTM 2 inputs (sequence input, categorical input)**: Mô hình LSTM với hai loại đầu vào: chuỗi và phân loại.
  - **CNN 2 inputs (sequence input, categorical input)**: Mô hình CNN với hai loại đầu vào: chuỗi và phân loại.
  
- Đánh giá độ chính xác của 5 mô hình này.
- Lưu các mô hình đã huấn luyện, bao gồm các bộ dữ liệu như label encoder, categorical scaler, và sequence scaler cho mô hình tốt nhất (CNN 2 inputs).

#### 3.3. `Epochs Test Deep Learning`
- Tiến hành thử nghiệm qua nhiều epochs để chọn ra số epochs tối ưu và quan sát các chỉ số hiệu suất của 5 mô hình học sâu.

### 4. `Anvil App: Predict_CNN_2_inputs`

Chứa mã nguồn ứng dụng web sử dụng Anvil Platform để dự đoán kết quả dựa trên mô hình **CNN 2 inputs** đã huấn luyện. Ứng dụng này sẽ tải mô hình và trả về kết quả dự đoán cho người dùng.

### 5. `Store`

#### 5.1. `models`
- Chứa các mô hình đã huấn luyện.

#### 5.2. `pickle`
- Sử dụng thư viện **pickle** để lưu các đối tượng như mô hình CNN 2 inputs, label encoding, label mapping, categorical scaler, và sequence scaler của mô hình tốt nhất.

#### 5.3. `Epochs Test Deep Learning`
- Chứa file Excel lưu kết quả thử nghiệm qua các epochs của các mô hình học sâu.

#### 5.4. `fact`
- Bảng dữ liệu tổng hợp (fact table) chứa các thông tin đã được xử lý để cung cấp cho các mô hình và ứng dụng khác.

---

## Cài đặt

Để chạy dự án này trên máy của bạn, bạn cần làm theo các bước sau:

### 1. Cài đặt các thư viện yêu cầu


### 2. Thiết lập môi trường

Cần thiết lập các môi trường cần thiết để chạy các mô hình học máy và học sâu. Đảm bảo bạn có các công cụ như TensorFlow, PyTorch và các thư viện phân tích dữ liệu như Pandas, NumPy.

### 3. Chạy ứng dụng Anvil

Ứng dụng Anvil Platform có thể được triển khai và sử dụng để dự đoán kết quả từ mô hình CNN 2 inputs. Bạn có thể tìm hướng dẫn chi tiết tại [Anvil Documentation](https://anvil.works/docs).

---

## Cách sử dụng

1. **Dữ liệu đầu vào**: Đảm bảo rằng bạn có dữ liệu đã được xử lý đúng cách từ các bước tổng hợp (fact).
2. **Chạy mô hình học máy**: Sử dụng các mô hình trong thư mục `Models/Machine Learning` để dự đoán và đánh giá độ chính xác.
3. **Huấn luyện mô hình học sâu**: Tiến hành huấn luyện các mô hình trong thư mục `Models/Deep Learning` và điều chỉnh các tham số như epochs để tối ưu hóa hiệu suất mô hình.
4. **Trực quan hóa và phân tích dữ liệu**: Sử dụng Power BI hoặc các công cụ Python như Matplotlib và Seaborn để phân tích kết quả.
5. **Ứng dụng dự đoán**: Tải mô hình đã huấn luyện vào ứng dụng Anvil để dự đoán và hiển thị kết quả.

---

## Ghi chú

- Đảm bảo các mô hình học sâu được huấn luyện với các tham số tối ưu trước khi triển khai vào ứng dụng.
- Các kết quả thử nghiệm được lưu trữ dưới dạng các file Excel trong thư mục `Store/Epochs Test Deep Learning`.

---
