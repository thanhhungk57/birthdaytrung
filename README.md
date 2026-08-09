# THE 24TH — Luxury Birthday Website

Website sinh nhật cinematic dành cho em họ nam sinh năm 2002, làm nha sĩ.

## Demo

GitHub Pages:
`https://YOUR_USERNAME.github.io/the-24th-birthday/`

## Các trang

- `index.html` — website chính
- `iphone16.html` — mockup iPhone 16 để xem giao diện mobile
- `css/style.css` — giao diện
- `js/app.js` — particle, confetti, animation
- `assets/` — ảnh/nhạc tùy chỉnh

## Chạy local

Không cần Node.js.

Mở `index.html` trực tiếp bằng Chrome.

Để xem mockup:

```text
iphone16.html
```

## Đưa lên GitHub

### Cách 1 — GitHub Desktop

1. Tạo repository mới tên `the-24th-birthday`.
2. Copy toàn bộ thư mục này vào repository.
3. Commit.
4. Push lên GitHub.
5. Vào `Settings → Pages`.
6. Chọn `Deploy from a branch`.
7. Chọn branch `main`, folder `/ (root)`.
8. Save.

### Cách 2 — Terminal

```bash
cd the-24th-birthday

git init
git add .
git commit -m "Create THE 24TH birthday experience"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/the-24th-birthday.git
git push -u origin main
```

Sau đó bật GitHub Pages:

```text
Repository
→ Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
→ Save
```

## Cá nhân hóa

Trong `index.html`, tìm:

```text
[TÊN]
```

và thay bằng tên thật.

Nếu có ảnh chân dung, đặt:

```text
assets/portrait.jpg
```

Sau đó thay phần placeholder trong `index.html`.

## Lưu ý

Website hiện không phụ thuộc backend, database hay framework.
Có thể host trực tiếp bằng GitHub Pages.
