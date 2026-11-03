# Multition · Swagger UI demo

**Static site độc lập để demo tài liệu 5 User endpoints với giảng viên.**
Không phụ thuộc `multition-api`, không cần npm install, build, backend hoặc database.
Chưa triển khai API thật; `Try it out` đang tắt. Request/response và token đều là mô tả minh họa.

## Các file để deploy

```text
multition-swagger-demo/
├── index.html                 # Trang Swagger UI
├── openapi.yaml               # Contract và ví dụ của 5 endpoint
├── swagger-initializer.js     # Cấu hình Swagger UI
├── styles.css                 # Theme Multition
├── logo.svg                   # Logo nhóm
└── README.md                  # Hướng dẫn này, không bắt buộc upload
```

## Deploy static hosting

Upload **5 file đầu tiên**, giữ chúng cùng một thư mục. `index.html` là entry point.

Nếu hosting lấy source từ toàn bộ workspace:

- **Publish/output directory:** `multition-swagger-demo`
- **Build command:** bỏ trống
- **Framework preset:** None / Static

Nếu chỉ đưa riêng thư mục này lên một repo/hosting, publish directory là `.`.
Sau đó gắn custom domain trong hosting. Không cần cấu hình URL backend để xem tài liệu.

Các asset nội bộ dùng đường dẫn tương đối. Swagger UI JS/CSS tải từ CDN unpkg,
pin phiên bản `5.34.1`; trình duyệt cần Internet.

## 5 endpoint minh họa

| Method | Path | Mục đích |
| --- | --- | --- |
| POST | `/users` | Tạo tài khoản học sinh/sinh viên |
| GET | `/users` | Tìm hồ sơ theo kỹ năng, có phân trang |
| GET | `/users/{userId}` | Xem hồ sơ công khai |
| PATCH | `/users/{userId}` | Cập nhật hồ sơ của chính mình |
| DELETE | `/users/{userId}` | Xóa tài khoản của chính mình |

Trong contract, API base URL `http://localhost:4000/api/v1` chỉ là địa chỉ dự kiến,
không được gọi từ trang demo. Nút **Authorize** minh họa Bearer JWT, chưa thực hiện đăng nhập.
Contract này tách riêng hoàn toàn khỏi API và generated types của ứng dụng chính.

## Chỉnh sửa

- Sửa nội dung API, schema và ví dụ trong `openapi.yaml`.
- Sửa giao diện trong `index.html` / `styles.css`.
- Giữ `supportedSubmitMethods: []` trong `swagger-initializer.js` cho bản documentation demo.

Nếu muốn mở local, chạy từ thư mục này rồi truy cập `http://localhost:4010`:

```bash
python3 -m http.server 4010
```

Không mở bằng `file://` vì Swagger UI cần tải YAML qua HTTP.
