// Khởi tạo Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Đã cài đặt');
});

// Chế độ online-first (Luôn lấy dữ liệu mới nhất)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            console.log('[Service Worker] Đang offline');
        })
    );
});
