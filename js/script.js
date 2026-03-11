// Hiệu ứng khi click vào nút liên hệ
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const emailItem = document.getElementById('email');

    // Khi click nút "Gửi email"
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            // Tạo hiệu ứng ripple (đã có CSS, nhưng thêm thông báo)
            const email = 'phanngocxhuu@gmail.com';
            // Sao chép email vào clipboard
            navigator.clipboard.writeText(email).then(() => {
                alert('📋 Đã sao chép email: ' + email);
            }).catch(() => {
                // Fallback
                prompt('Không thể sao chép tự động. Email:', email);
            });
        });
    }

    // Click vào số điện thoại cũng có thể sao chép
    const phoneItem = document.getElementById('phone');
    if (phoneItem) {
        phoneItem.addEventListener('click', function() {
            const phone = '0358103073';
            navigator.clipboard.writeText(phone).then(() => {
                alert('📞 Đã sao chép số điện thoại: ' + phone);
            });
        });
    }

    // Animation tạm dừng khi tab không được focus (tiết kiệm tài nguyên)
    const cvCard = document.querySelector('.cv-card');
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            cvCard.style.animationPlayState = 'paused';
        } else {
            cvCard.style.animationPlayState = 'running';
        }
    });
});