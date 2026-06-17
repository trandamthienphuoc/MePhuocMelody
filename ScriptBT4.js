let products = [
{ id: 1, name: 'Violin kèm hộp và cung', price: 8590000, stock: 3, category: 'strings', img: 'day1.jpg', desc: 'Mang đến âm thanh trong trẻo, tinh tế và giàu cảm xúc. Thân đàn chế tác từ gỗ phong tự nhiên, đi kèm hộp bảo vệ và cung chuyên dụng, lý tưởng cho người học và biểu diễn cổ điển.' },
{ id: 2, name: 'Cello (đàn violoncello)', price: 29800000, stock: 0, category: 'strings', img: 'day2.jpg', desc: 'Đàn cello cao cấp với âm trầm sâu lắng, vang dội và giàu nội lực. Dây đàn thép bọc niken cho độ bền cao, phù hợp cho hòa tấu, biểu diễn solo hoặc dàn nhạc cổ điển.' },
{ id: 3, name: 'Đàn grand piano Grand Piano White Edition', price: 420000000, stock: 2, category: 'piano', img: 'piano1.jpg', desc: 'Phiên bản piano trắng sang trọng của Yamaha, mang âm thanh mạnh mẽ và cân bằng. Thiết kế tinh tế, phù hợp cho phòng hòa nhạc, studio hoặc không gian nghệ thuật cao cấp.' },
{ id: 4, name: 'Cello Violin Arts', price: 29000000, stock: 0, category: 'strings', img: 'day4.jpg', desc: 'Đàn cello thủ công tinh xảo, âm thanh ấm áp và mượt mà. Phù hợp cho nghệ sĩ biểu diễn chuyên nghiệp, mang lại cảm xúc sâu lắng trong từng bản nhạc cổ điển.' },
{ id: 5, name: 'Đàn Cổ Tranh (Guzheng)', price: 154900000, stock: 3, category: 'strings', img: 'day5.jpg', desc: 'Cổ tranh truyền thống Trung Hoa với 21 dây tơ lụa, âm thanh thanh thoát và du dương. Thân đàn gỗ hương cao cấp, khắc hoa văn tinh tế, biểu tượng của nghệ thuật Á Đông.' },
{ id: 6, name: 'Violin pha lê/trong suốt', price: 118000000, stock: 2, category: 'strings', img: 'day6.jpg', desc: 'Tác phẩm nghệ thuật độc đáo với thân đàn acrylic trong suốt, âm thanh sáng và vang. Phù hợp cho biểu diễn sân khấu, ánh sáng phản chiếu tạo hiệu ứng lấp lánh tuyệt đẹp.' },
{ id: 7, name: 'Guitar acoustic', price: 3600000, stock: 35, category: 'guitar', img: 'guitar1.jpg', desc: 'Đàn guitar acoustic phổ thông, âm thanh cân bằng, dễ chơi. Thân đàn gỗ thông tự nhiên, phù hợp cho người mới học hoặc biểu diễn đệm hát nhẹ nhàng.' },
{ id: 8, name: 'Ibemita Black Acoustic Guitar', price: 24900000, stock: 10, category: 'guitar', img: 'guitar2.jpg', desc: 'Phiên bản guitar acoustic cao cấp màu đen bóng, âm trầm dày và vang. Thiết kế sang trọng, phù hợp cho biểu diễn chuyên nghiệp và thu âm studio.' },
{ id: 9, name: 'Crimson Autumn Classical Guitar', price: 18600000, stock: 5, category: 'guitar', img: 'guitar3.jpg', desc:'Guitar cổ điển màu đỏ rực, âm thanh mộc mạc và ấm áp. Dây nylon mềm mại, lý tưởng cho nhạc cổ điển, ballad và biểu diễn ngoài trời.' },
{ id: 10, name: 'Scarlet Flame Electric Guitar', price: 5560000, stock: 20, category: 'guitar', img: 'guitar4.jpg', desc: 'Guitar điện cao cấp với mặt gỗ quilted maple đỏ rực, pickup EMG mạnh mẽ. Âm thanh bùng nổ, lý tưởng cho rock, metal và biểu diễn sân khấu.' },
{ id: 11, name: 'Kèn trumpet đồng thau Heritage', price: 38000000, stock: 8, category: 'wind', img: 'hoi1.jpg', desc: 'Kèn trumpet chế tác từ đồng thau mạ vàng, âm sáng và vang. Phù hợp cho biểu diễn jazz, cổ điển và dàn nhạc chuyên nghiệp.' },
{ id: 12, name: 'Selmer Paris Alto Saxophone khắc hoa văn', price: 65000000, stock: 4, category: 'wind', img: 'hoi2.jpg', desc: 'Saxophone Selmer Paris danh tiếng, khắc hoa văn tinh xảo. Âm thanh êm dịu, trầm ấm và giàu cảm xúc, dành cho nghệ sĩ biểu diễn chuyên nghiệp.' },
{ id: 13, name: 'Sáo bạc đính đá quý Emerald Royal', price: 72000000, stock: 3, category: 'wind', img: 'hoi3.jpg', desc: 'Sáo bạc cao cấp đính đá quý emerald, âm thanh trong trẻo và tinh tế. Thiết kế hoàng gia, phù hợp cho biểu diễn cổ điển và sưu tầm nghệ thuật.' },
{ id: 14, name: 'Sáo Tiêu Dao White Flute', price: 18000000, stock: 15, category: 'wind', img: 'hoi4.jpg', desc: 'Sáo trắng thủ công, âm thanh nhẹ nhàng và thanh thoát. Phù hợp cho người mới học hoặc biểu diễn nhạc dân gian, đi kèm tua lụa trang trí tinh tế.' },
{ id: 15, name: 'Sáo ngọc xanh khắc hoa văn Celestial Jade', price: 65000000, stock: 3, category: 'wind', img: 'hoi5.jpg', desc: 'Sáo ngọc xanh khắc hoa văn cổ điển, đính vàng và ngọc trai. Âm thanh trong trẻo, lãng mạn, biểu tượng của nghệ thuật phương Đông.' },
{ id: 16, name: 'Steinway & Sons Concert Grand Piano', price: 2800000000, stock: 1, category: 'piano', img: 'piano2.jpg', desc: 'Đàn grand piano Steinway & Sons – đỉnh cao chế tác thủ công Đức. Âm thanh tinh tế, độ vang hoàn hảo, lựa chọn hàng đầu của nghệ sĩ biểu diễn quốc tế.' },
{ id: 17, name: 'Yamaha Upright Piano Black Gloss', price: 180000000, stock: 4, category: 'piano', img: 'piano3.jpg', desc: 'Đàn upright piano Yamaha, thiết kế cổ điển, âm thanh cân bằng, phù hợp không gian gia đình.' },
{ id: 18, name: 'Steinway & Sons Concert Grand Piano', price: 165000000, stock: 6, category: 'piano', img: 'piano4.jpg', desc: 'Đàn piano điện Yamaha, kiểu dáng hiện đại, tích hợp công nghệ âm thanh chân thực.' },
{ id: 19, name: 'Yamaha Upright Piano Black Gloss', price: 3800000000, stock: 1, category: 'piano', img: 'piano5.jpg', desc: 'Đàn grand piano Blüthner phiên bản đặc biệt, trang trí bằng khảm xà cừ và pha lê Swarovski, chân mạ vàng, âm thanh tinh tế và sang trọng bậc nhất.' },
{ id: 20, name: 'TAMA Studio Drum Set', price: 66900000, stock: 5, category: 'drums', img: 'trong1.jpg', desc: 'Bộ trống acoustic TAMA màu đỏ sẫm, âm trầm mạnh, phù hợp phòng thu và biểu diễn nhỏ.' },
{ id: 21, name: 'DW9000 Pro Drum Kit', price: 128000000, stock: 3, category: 'drums', img: 'trong2.jpg', desc: 'Bộ trống DW cao cấp, pedal đôi DW9000, cymbal Sabian HHX/AAX, dành cho drummer chuyên nghiệp.' },
{ id: 22, name: 'Liberty Natural Wood Drum Set', price: 85000000, stock: 4, category: 'drums', img: 'trong3.jpg', desc: 'Bộ trống gỗ tự nhiên, âm vang ấm, thiết kế cổ điển, phù hợp phong cách jazz và acoustic.' },
{ id: 23, name: 'StageMaster Maple Drum Kit', price: 150000000, stock: 2, category: 'drums', img: 'trong4.jpg', desc: 'Bộ trống biểu diễn sân khấu, ánh sáng phản chiếu đẹp, âm thanh mạnh mẽ, lý tưởng cho concert.' },
{ id: 24, name: 'Zildjian Pearl White Drum Set', price: 112000000, stock: 3, category: 'drums', img: 'trong5.jpg', desc: 'Bộ trống trắng ngọc trai, cymbal Zildjian, âm sáng và cân bằng, phù hợp biểu diễn ngoài trời.' }

];

let cart = [];
let currentCategory = 'all';
let currentUser = { email: '', role: 'guest', avatar: '' };
let invoiceHistory = [];

// 2. MẢNG MỚI: Quản lý danh sách tài khoản hệ thống (Có sẵn Admin và Khách mẫu)
let users = [
    { email: "admin@gmail.com", pass: "123456", role: "admin", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
    { email: "khach@gmail.com", pass: "123456", role: "customer", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" }
];

document.addEventListener("DOMContentLoaded", function() {
    renderProducts(products);
    initSlideshow();
    updateAuthUI();
});

let slideIndex = 0;
function initSlideshow() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        setTimeout(initSlideshow, 4000);
    }
}

function handleLogin(e) {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value.trim();
    let pass = document.getElementById('loginPassword').value;
    let errorDiv = document.getElementById('loginError');

    if (email === "admin@gmail.com" && pass === "123456") {
        currentUser = { email: email, role: 'admin', avatar: 'add1.jpg' };
        errorDiv.innerText = ""; toggleModal('loginModal', false);
        alert("🎉 Đăng nhập thành công với quyền QUẢN TRỊ VIÊN!");
    } else if (email === "khach@gmail.com" && pass === "123456") {
        currentUser = { email: email, role: 'customer', avatar: 'add2.jpg' };
        errorDiv.innerText = ""; toggleModal('loginModal', false);
        alert("👋 Đăng nhập thành công với quyền KHÁCH HÀNG!");
    } else {
        errorDiv.innerText = "❌ Tài khoản hoặc mật khẩu chưa chính xác!";
        return;
    }
    updateAuthUI(onclick);
    filterProducts();
}

function handleLogout() {
    if(confirm("Bạn muốn đăng xuất khỏi hệ thống PhuocMelody?")) {
        currentUser = { email: '', role: 'guest', avatar: '' };
        cart = [];
        updateCartUI();
        updateAuthUI();
        filterProducts();
    }
}

function updateAuthUI() {
    let authSection = document.getElementById('authSection');
    let roleBadge = document.getElementById('roleBadge');
    let adminAddBtn = document.getElementById('adminAddBtn');

    if (currentUser.role === 'guest') {
        authSection.innerHTML = `<button class="btn-auth" onclick="toggleModal('loginModal', true)">🔑 Đăng Nhập</button>`;
        roleBadge.innerText = "Chế độ Khách: Bạn cần đăng nhập để bắt đầu lựa chọn mua sắm.";
        adminAddBtn.style.display = "none";
    } else {
        let roleName = currentUser.role === 'admin' ? 'Quản Trị Viên' : 'Khách Hàng';
        authSection.innerHTML = `
            <div class="user-profile-container" onclick="toggleDropdown(event)">
        <img class="user-avatar" src="${currentUser.avatar}" alt="Avatar">
        <div class="user-info-text">${roleName}</div>
        <div class="profile-dropdown" id="myProfileDropdown">
            <button class="dropdown-item" onclick="handleLogout()">🚪 Đăng Xuất</button>
        </div>
    </div>`;

        if (currentUser.role === 'customer') {
            roleBadge.innerText = `Chế độ Thành Viên: 👋PhuocMelody Xin chào Chúc bạn tìm được giai điệu ưng ý!`;
            adminAddBtn.style.display = "none";
        } else if (currentUser.role === 'admin') {
            roleBadge.innerText = "Chế độ QUẢN TRỊ VIÊN: Cho phép xóa, sửa, cập nhật, Sản phẩm, Trạng thái và Xóa tài khoản KH. ";
            adminAddBtn.style.display = "block";
        }
    }
}

function renderProducts(dataList) {
    let grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    if(dataList.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#64748b; padding:40px 0;">Không tìm thấy nhạc cụ phù hợp.</p>';
        return;
    }
    dataList.forEach(prod => {
        let adminActionHTML = '';
        if(currentUser.role === 'admin') {
            adminActionHTML = `
                <div class="admin-actions">
                    <button class="btn-edit" onclick="openEditModal(${prod.id})" title="Sửa">✏️</button>
                    <button class="btn-delete" onclick="deleteProduct(${prod.id})" title="Xóa">❌</button>
                </div>`;
        }
        grid.innerHTML += `
            <div class="product-card">
                ${adminActionHTML}
                <img src="${prod.img}" alt="${prod.name}" onclick="openDetailModal(${prod.id})">
                <h3 onclick="openDetailModal(${prod.id})" style="cursor:pointer;">${prod.name}</h3>
                <div class="price">${prod.price.toLocaleString('vi-VN')} đ</div>
                <button onclick="addToCart(${prod.id})">Thêm vào giỏ</button>
            </div>`;
    });
}

function filterProducts() {
    let keyword = document.getElementById('searchInput').value.toLowerCase().trim();
    let filtered = products.filter(p => {
        let matchKey = p.name.toLowerCase().includes(keyword);
        let matchCate = (currentCategory === 'all') || (p.category === currentCategory);
        return matchKey && matchCate;
    });
    renderProducts(filtered);
}

function filterCategory(cate, btnElement) {
    currentCategory = cate;
    document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    filterProducts();
}

function openDetailModal(id) {
    let prod = products.find(p => p.id === id);
    if(!prod) return;
    document.getElementById('detailImg').src = prod.img;
    document.getElementById('detailName').innerText = prod.name;
    document.getElementById('detailCategory').innerText = prod.category.toUpperCase();
    document.getElementById('detailPrice').innerText = prod.price.toLocaleString('vi-VN') + " đ";
    document.getElementById('detailDesc').innerText = prod.desc;
    document.getElementById('detailAddBtn').onclick = function() {
        addToCart(prod.id); toggleModal('detailModal', false);
    };
    toggleModal('detailModal', true);
}

function openCartModal() {
    if (currentUser.role === 'guest') {
        alert("🔒 Vui lòng Đăng Nhập trước khi xem chi tiết giỏ hàng!");
        toggleModal('loginModal', true);
        return;
    }
    updateCartUI();
    toggleModal('cartModal', true);
}

function addToCart(id) {
    if (currentUser.role === 'guest') {
        alert("🔒 Vui lòng Đăng Nhập trước khi tiến hành chọn mua nhạc cụ!");
        toggleModal('loginModal', true);
        return;
    }
    let prod = products.find(p => p.id === id);
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: prod.id, name: prod.name, price: prod.price, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Hàm xử lý tăng giảm số lượng trực tiếp trong giỏ hàng khớp với code PhuocMelody
function changeQuantity(id, delta) {
    // Tìm sản phẩm đó trong giỏ hàng hiện tại
    let item = cart.find(c => c.id === id);
    if (!item) return;

    // Tìm thông tin gốc để kiểm tra số lượng tồn kho (stock)
    let originProd = products.find(p => p.id === id);
    
    if (delta === 1) {
        // Nếu nhấn nút [+] -> Kiểm tra xem vượt quá hàng tồn trong kho không
        if (item.quantity >= originProd.stock) {
            alert(`❌ Số lượng nhạc cụ này trong kho của PhuocMelody chỉ còn ${originProd.stock} chiếc.`);
            return;
        }
        item.quantity++;
    } else if (delta === -1) {
        // Nếu nhấn nút [-] -> Giảm đi 1, nếu về 0 thì tự động xóa luôn khỏi giỏ
        item.quantity--;
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
    }
    
    // Cập nhật lại toàn bộ giao diện giỏ hàng và tổng tiền
    updateCartUI();
}

// ================= NÂNG CẤP XỬ LÝ PHÍ GIAO HÀNG TRÊN DƯỚI 5 TRIỆU =================
function updateCartUI() {
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalCount;

    let container = document.getElementById('cart-items-container');
    let subTotalMoney = 0; // Tiền hàng thuần túy chưa tính ship

    if (cart.length === 0) {
        container.innerHTML = `<p style="color: #94a3b8; text-align:center; padding: 20px 0;">Giỏ hàng của bạn đang trống.</p>`;
        document.getElementById('shippingSection').style.opacity = "0.4";
        document.getElementById('cart-subtotal').innerText = "0";
        document.getElementById('cart-shipping-fee').innerText = "0";
        document.getElementById('cart-total').innerText = "0";
        document.getElementById('shipping-hint').innerText = "";
    } else {
        document.getElementById('shippingSection').style.opacity = "1";
        container.innerHTML = '';
        cart.forEach(item => {
            let itemTotal = item.price * item.quantity;
            subTotalMoney += itemTotal;
            container.innerHTML += `
                <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:10px; border-bottom:1px dashed #e2e8f0;">
            <div style="max-width:45%;">
                <div style="font-weight:600; font-size:14px; color:var(--dark-color);">${item.name}</div>
                <small style="color:#64748b;">${item.price.toLocaleString('vi-VN')} đ</small>
            </div>
            
            <div style="display: flex; align-items: center; gap: 8px;">
                <button onclick="changeQuantity(${item.id}, -1)" style="padding: 2px 8px; cursor:pointer; border:1px solid #cbd5e1; background:#f1f5f9; border-radius:4px; font-weight:bold;">-</button>
                <span style="font-weight: 600; min-width: 20px; text-align: center;">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" style="padding: 2px 8px; cursor:pointer; border:1px solid #cbd5e1; background:#f1f5f9; border-radius:4px; font-weight:bold;">+</button>
            </div>

            <div style="display:flex; align-items:center; gap:15px;">
                <span style="font-weight:700; font-size:14px;">${itemTotal.toLocaleString('vi-VN')} đ</span>
                <button class="btn-remove-item" onclick="removeFromCart(${item.id})">Xóa</button>
            </div>
        </div>`;
        });

        // ÁP DỤNG THUẬT TOÁN ĐIỀU KIỆN PHÍ VẬN CHUYỂN
        let shippingFee = 0;
        let hintText = "";
        if (subTotalMoney < 5000000) {
            shippingFee = 200000;
            let missingAmount = 5000000 - subTotalMoney;
            hintText = `💡 Mua thêm ${missingAmount.toLocaleString('vi-VN')} đ để được MIỄN PHÍ VẬN CHUYỂN (Tiết kiệm 200k).`;
            document.getElementById('shipping-hint').style.color = "#ef4444";
        } else {
            shippingFee = 0;
            hintText = "🎉 Đơn hàng trên 5 Triệu: Bạn đã nhận được ưu đãi Miễn Phí Vận Chuyển!";
            document.getElementById('shipping-hint').style.color = "#10b981";
        }

        let finalTotal = subTotalMoney + shippingFee;

        // Đổ dữ liệu ra cấu trúc phân tách
        document.getElementById('cart-subtotal').innerText = subTotalMoney.toLocaleString('vi-VN');
        document.getElementById('cart-shipping-fee').innerText = shippingFee === 0 ? "0" : shippingFee.toLocaleString('vi-VN');
        document.getElementById('shipping-hint').innerText = hintText;
        document.getElementById('cart-total').innerText = finalTotal.toLocaleString('vi-VN');
    }
}

// ================= THANH TOÁN & ĐƯA BILL VÀO LỊCH SỬ LƯU TRỮ =================
function handleCheckout(e) {
    e.preventDefault();
    if(cart.length === 0) return alert("Giỏ hàng của bạn trống, không thể thanh toán!");

    let name = document.getElementById('shipName').value.trim();
    let phone = document.getElementById('shipPhone').value.trim();
    let address = document.getElementById('shipAddress').value.trim();
    let method = document.getElementById('shipMethod').value;

    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let invoiceCode = `#PM${hours}${minutes}${seconds}`;
    let timeString = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${hours}:${minutes}:${seconds}`;

    let subTotalMoney = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let shippingFee = subTotalMoney < 5000000 ? 200000 : 0;
    let finalTotal = subTotalMoney + shippingFee;

    // Lưu trữ bản sao dữ liệu các món đồ để phục vụ xem lại lịch sử
    let orderItemsCopy = [...cart];

    // Tạo đối tượng hóa đơn hoàn chỉnh
    let currentInvoice = {
        code: invoiceCode,
        time: timeString,
        customer: name,
        phone: phone,
        address: address,
        method: method,
        items: orderItemsCopy,
        shippingFee: shippingFee,
        total: finalTotal
    };

    // Đẩy đối tượng hóa đơn vào mảng Nhật ký Lịch sử
    invoiceHistory.push(currentInvoice);

    // Render dữ liệu ra modal Bill hiện tại
    showBillModal(currentInvoice);

    // Reset giỏ hàng
    document.getElementById('shippingForm').reset();
    cart = [];
    updateCartUI();
}

// Hàm hỗ trợ đổ dữ liệu cấu trúc hóa đơn lên Modal Bill Xanh Mint
function showBillModal(invoiceObj) {
    document.getElementById('billInvoiceCode').innerText = invoiceObj.code;
    document.getElementById('billCustomer').innerText = invoiceObj.customer;
    document.getElementById('billPhone').innerText = invoiceObj.phone;
    document.getElementById('billAddress').innerText = invoiceObj.address;
    document.getElementById('billMethod').innerText = invoiceObj.method;
    document.getElementById('billTime').innerText = `Thời gian lập: ${invoiceObj.time}`;
    document.getElementById('billShippingFee').innerText = invoiceObj.shippingFee === 0 ? "0 đ (Free Ship)" : invoiceObj.shippingFee.toLocaleString('vi-VN') + " đ";

    let billItemsDiv = document.getElementById('billItems');
    billItemsDiv.innerHTML = '';
    
    invoiceObj.items.forEach(item => {
        let sub = item.price * item.quantity;
        billItemsDiv.innerHTML += `
            <div class="bill-row">
                <span>${item.name} (x${item.quantity})</span>
                <strong>${sub.toLocaleString('vi-VN')} đ</strong>
            </div>`;
    });
    
    document.getElementById('billTotal').innerText = invoiceObj.total.toLocaleString('vi-VN') + " đ";
    
    toggleModal('cartModal', false);
    toggleModal('billModal', true);
}

// ================= CÁC HÀM XỬ LÝ XEM LẠI LỊCH SỬ ĐƠN HÀNG =================
function openOrderHistoryModal() {
    if (currentUser.role === 'guest') {
        alert("🔒 Vui lòng Đăng Nhập để kiểm tra lịch sử hóa đơn hệ thống!");
        toggleModal('loginModal', true);
        return;
    }
    
    let body = document.getElementById('historyTableBody');
    body.innerHTML = '';

    if(invoiceHistory.length === 0) {
        body.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#94a3b8; padding:20px;">Bạn chưa thực hiện giao dịch thanh toán nào trong phiên làm việc này.</td></tr>`;
    } else {
        invoiceHistory.forEach((inv, index) => {
            body.innerHTML += `
                <tr>
                    <td style="font-weight:700; color:var(--primary-color);">${inv.code}</td>
                    <td style="font-size:13px; color:#64748b;">${inv.time}</td>
                    <td>${inv.customer}</td>
                    <td style="font-weight:700;">${inv.total.toLocaleString('vi-VN')} đ</td>
                    <td>
                        <button class="btn-view-old-bill" onclick="reviewOldInvoice(${index})">Xem Lại Bill</button>
                    </td>
                </tr>`;
        });
    }
    toggleModal('historyModal', true);
}

function reviewOldInvoice(index) {
    let targetInvoice = invoiceHistory[index];
    if(!targetInvoice) return;
    toggleModal('historyModal', false);
    showBillModal(targetInvoice);
}

// Nghiệp vụ CRUD Admin cơ bản
function deleteProduct(id) {
    if(confirm("Xác nhận xóa nhạc cụ này khỏi cơ sở dữ liệu?")) {
        products = products.filter(p => p.id !== id);
        filterProducts();
    }
}

function openAddModal() {
    document.getElementById('formTitle').innerText = "Thêm Sản Phẩm Mới";
    document.getElementById('productForm').reset();
    document.getElementById('formId').value = '';
    toggleModal('productFormModal', true);
}

function openEditModal(id) {
    let prod = products.find(p => p.id === id);
    if(!prod) return;
    document.getElementById('formTitle').innerText = "Chỉnh Sửa Nhạc Cụ";
    document.getElementById('formId').value = prod.id;
    document.getElementById('formName').value = prod.name;
    document.getElementById('formCategory').value = prod.category;
    document.getElementById('formPrice').value = prod.price;
    document.getElementById('formImg').value = prod.img;
    document.getElementById('formDesc').value = prod.desc;
    toggleModal('productFormModal', true);
}

function saveProduct(e) {
    e.preventDefault();
    let id = document.getElementById('formId').value;
    let name = document.getElementById('formName').value;
    let category = document.getElementById('formCategory').value;
    let price = parseInt(document.getElementById('formPrice').value);
    let img = document.getElementById('formImg').value;
    let desc = document.getElementById('formDesc').value;

    if(id) {
        let prod = products.find(p => p.id == id);
        if(prod) {
            prod.name = name; prod.category = category;
            prod.price = price; prod.img = img; prod.desc = desc;
        }
    } else {
        let newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, price, category, img, desc });
    }
    filterProducts();
    toggleModal('productFormModal', false);
}

function toggleModal(modalId, show) {
    document.getElementById(modalId).style.display = show ? 'flex' : 'none';
}
/*11111*/
// Hàm ẩn hiện dropdown khi click vào profile
function toggleDropdown(event) {
    event.stopPropagation(); // Ngăn sự kiện nổi bọt lên window
    let dropdown = document.getElementById('myProfileDropdown');
    if (dropdown) {
        let isDisplayed = dropdown.style.display === 'block';
        dropdown.style.display = isDisplayed ? 'none' : 'block';
    }
}

// Tự động đóng dropdown khi người dùng click trượt ra bất kỳ vị trí nào ngoài màn hình
window.onclick = function(event) {
    let dropdown = document.getElementById('myProfileDropdown');
    if (dropdown && dropdown.style.display === 'block') {
        if (!event.target.closest('.user-profile-container')) {
            dropdown.style.display = 'none';
        }
    }
}


/* ================= TÍNH NĂNG NÂNG CAO MỚI BỔ SUNG ================= */

// 1. Chuyển đổi qua lại giữa Đăng nhập / Đăng ký
function switchAuthTab(tab) {
    let loginForm = document.getElementById('loginForm');
    let registerForm = document.getElementById('registerForm');
    let tabLoginTitle = document.getElementById('tabLoginTitle');
    let tabRegisterTitle = document.getElementById('tabRegisterTitle');
    let authHint = document.getElementById('authHint');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        tabLoginTitle.style.color = 'var(--primary-color)';
        tabRegisterTitle.style.color = '#94a3b8';
        authHint.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        tabLoginTitle.style.color = '#94a3b8';
        tabRegisterTitle.style.color = 'var(--accent-green)';
        authHint.style.display = 'none';
    }
}

// 2. Logic xử lý Đăng Ký Tài Khoản mới
function handleRegister(e) {
    e.preventDefault();
    let email = document.getElementById('regEmail').value.trim();
    let pass = document.getElementById('regPassword').value;
    let passConfirm = document.getElementById('regPasswordConfirm').value;
    let errDiv = document.getElementById('registerError');

    if (pass !== passConfirm) {
        errDiv.innerText = "❌ Xác nhận mật khẩu không trùng khớp!";
        return;
    }

    // Kiểm tra trùng tài khoản
    let isExist = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (isExist) {
        errDiv.innerText = "❌ Email này đã được đăng ký trên hệ thống!";
        return;
    }

    // Thêm khách hàng mới vào mảng dữ liệu hệ thống
    users.push({
        email: email,
        pass: pass,
        role: 'customer',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' // Avatar mặc định
    });

    errDiv.innerText = "";
    alert("🎉 Đăng ký tài khoản thành công! Bạn có thể Đăng nhập ngay bây giờ.");
    document.getElementById('registerForm').reset();
    switchAuthTab('login');
}

// 3. SỬA LẠI HÀM ĐĂNG NHẬP ĐỂ CHECK TRONG MẢNG USERS ĐỘNG
function handleLogin(e) {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value.trim();
    let pass = document.getElementById('loginPassword').value;
    let errorDiv = document.getElementById('loginError');

    // Khớp tài khoản trong mảng dữ liệu tập trung
    let userFound = users.find(u => u.email === email && u.pass === pass);

    if (userFound) {
        currentUser = { email: userFound.email, role: userFound.role, avatar: userFound.avatar };
        errorDiv.innerText = ""; 
        toggleModal('loginModal', false);
        document.getElementById('loginForm').reset();
        alert(`👋 Đăng nhập thành công với quyền: ${userFound.role === 'admin' ? 'QUẢN TRỊ VIÊN' : 'THÀNH VIÊN'}!`);
    } else {
        errorDiv.innerText = "❌ Tài khoản hoặc mật khẩu chưa chính xác!";
        return;
    }
    
    updateAuthUI();
    filterProducts();
}

// 4. Cập nhật giao diện ẩn hiện nút bấm nghiệp vụ theo từng tài khoản
// Hãy bổ sung đoạn xử lý ẩn hiện nút Admin này vào bên dưới cùng của hàm updateAuthUI() cũ:
let originalUpdateAuthUI = updateAuthUI;
updateAuthUI = function() {
    originalUpdateAuthUI(); // Gọi lại tầng logic giao diện cũ
    
    let adminReportBtn = document.getElementById('adminReportBtn');
    let adminUsersBtn = document.getElementById('adminUsersBtn');
    
    if (currentUser.role === 'admin') {
        if(adminReportBtn) adminReportBtn.style.display = "block";
        if(adminUsersBtn) adminUsersBtn.style.display = "block";
    } else {
        if(adminReportBtn) adminReportBtn.style.display = "none";
        if(adminUsersBtn) adminUsersBtn.style.display = "none";
    }
}

// 5. Cập nhật cơ chế hiển thị Sản phẩm: HIỂN THỊ SỐ LƯỢNG TỒN KHO CHO KHÁCH THẤY
// Thay thế hàm renderProducts cũ của bạn bằng hàm nâng cấp kiểm soát số lượng kho này:
function renderProducts(dataList) {
    let grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    if(dataList.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#64748b; padding:40px 0;">Không tìm thấy nhạc cụ phù hợp.</p>';
        return;
    }
    dataList.forEach(prod => {
        let adminActionHTML = '';
        if(currentUser.role === 'admin') {
            adminActionHTML = `
                <div class="admin-actions">
                    <button class="btn-edit" onclick="openEditModal(${prod.id})" title="Sửa">✏️</button>
                    <button class="btn-delete" onclick="deleteProduct(${prod.id})" title="Xóa">❌</button>
                </div>`;
        }
        
        // Nhãn cảnh báo trạng thái kho hàng cho người dùng trực quan
        let stockBadge = `<span style="color:#059669; font-weight:600;">Còn lại: ${prod.stock} chiếc</span>`;
        if (prod.stock <= 0) {
            stockBadge = `<span style="color:#ef4444; font-weight:700;">🚫 Cháy Hàng</span>`;
        }

        grid.innerHTML += `
            <div class="product-card">
                ${adminActionHTML}
                <img src="${prod.img}" alt="${prod.name}" onclick="openDetailModal(${prod.id})">
                <h3 onclick="openDetailModal(${prod.id})" style="cursor:pointer;">${prod.name}</h3>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; font-size:13px;">
                     ${stockBadge}
                </div>
                <div class="price">${prod.price.toLocaleString('vi-VN')} đ</div>
                <button onclick="addToCart(${prod.id})" ${prod.stock <= 0 ? 'disabled style="background:#cbd5e1; color:#94a3b8; cursor:not-allowed;"' : ''}>
                    ${prod.stock > 0 ? 'Thêm vào giỏ' : 'Hết hàng'}
                </button>
            </div>`;
    });
}

// 6. CẬP NHẬT KHI KHÁCH BẤM ĐẶT HÀNG -> TRỪ TỒN KHO THỰC TẾ HỆ THỐNG
// Hãy tìm hàm handleCheckout(e) cũ và cập nhật phần lưu đối tượng hóa đơn:
// (Thay thế đoạn xử lý đối tượng currentInvoice cũ bằng logic thêm trường status và trừ kho hàng bên dưới)
let originalHandleCheckout = handleCheckout;
handleCheckout = function(e) {
    e.preventDefault();
    if(cart.length === 0) return alert("Giỏ hàng của bạn trống, không thể thanh toán!");

    // Kiểm tra lại kho trước khi thanh toán chính thức
    for(let item of cart) {
        let p = products.find(prod => prod.id === item.id);
        if(p && p.stock < item.quantity) {
            return alert(`❌ Nhạc cụ "${item.name}" chỉ còn tồn kho ${p.stock} chiếc, không đủ đáp ứng số lượng đặt!`);
        }
    }

    let name = document.getElementById('shipName').value.trim();
    let phone = document.getElementById('shipPhone').value.trim();
    let address = document.getElementById('shipAddress').value.trim();
    let method = document.getElementById('shipMethod').value;

    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let invoiceCode = `#PM${hours}${minutes}${seconds}`;
    let timeString = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${hours}:${minutes}:${seconds}`;

    let subTotalMoney = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let shippingFee = subTotalMoney < 5000000 ? 200000 : 0;
    let finalTotal = subTotalMoney + shippingFee;

    // Trừ số lượng tồn kho của hệ thống nhạc cụ thực tế
    cart.forEach(item => {
        let originalProd = products.find(p => p.id === item.id);
        if(originalProd) {
            originalProd.stock -= item.quantity;
        }
    });

    let orderItemsCopy = [...cart];

    let currentInvoice = {
        code: invoiceCode,
        time: timeString,
        customer: name,
        phone: phone,
        address: address,
        method: method,
        items: orderItemsCopy,
        shippingFee: shippingFee,
        total: finalTotal,
        status: "Đã thanh toán" // Khởi tạo trạng thái mặc định của đơn hàng
    };

    invoiceHistory.push(currentInvoice);
    showBillModal(currentInvoice);

    document.getElementById('shippingForm').reset();
    cart = [];
    updateCartUI();
    filterProducts(); // Render lại danh sách sản phẩm hiển thị tồn kho mới cho khách xem
}

// 7. Cập nhật hàm xem lại lịch sử hóa đơn của khách hàng có hiển thị Trạng thái giao hàng
function openOrderHistoryModal() {
    if (currentUser.role === 'guest') {
        alert("🔒 Vui lòng Đăng Nhập để kiểm tra lịch sử hóa đơn hệ thống!");
        toggleModal('loginModal', true);
        return;
    }
    
    let body = document.getElementById('historyTableBody');
    body.innerHTML = '';

    // Lọc ra các hóa đơn thuộc về số điện thoại hoặc tên khách hàng này (hoặc hiển thị full trong phiên)
    if(invoiceHistory.length === 0) {
        body.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#94a3b8; padding:20px;">Bạn chưa thực hiện giao dịch thanh toán nào trong phiên làm việc này.</td></tr>`;
    } else {
        invoiceHistory.forEach((inv, index) => {
            // Định dạng màu sắc nhãn trạng thái đơn cho khách dễ theo dõi
            let statusStyle = "color:#2563eb; font-weight:bold;"; // Mặc định Đã thanh toán màu xanh dương
            if(inv.status === "Đang đóng gói") statusStyle = "color:#d97706; font-weight:bold;";
            if(inv.status === "Đang giao") statusStyle = "color:#4f46e5; font-weight:bold;";
            if(inv.status === "Giao hàng hoàn tất") statusStyle = "color:#16a34a; font-weight:bold;";

            body.innerHTML += `
                <tr>
                    <td style="font-weight:700; color:var(--primary-color);">${inv.code}</td>
                    <td style="font-size:13px; color:#64748b;">${inv.time}</td>
                    <td>${inv.customer}</td>
                    <td style="font-weight:700;">${inv.total.toLocaleString('vi-VN')} đ</td>
                    <td><span style="${statusStyle}">● ${inv.status}</span></td>
                    <td>
                        <button class="btn-view-old-bill" onclick="reviewOldInvoice(${index})">Xem Lại Bill</button>
                    </td>
                </tr>`;
        });
    }
    toggleModal('historyModal', true);
}


/* ================= NGHIỆP VỤ ĐỘC QUYỀN DÀNH CHO ADMIN ================= */

// A. Mở cửa sổ Quản lý và Xóa tài khoản khách hàng
function openAdminUsersModal() {
    let body = document.getElementById('adminUsersTableBody');
    body.innerHTML = '';

    users.forEach(u => {
        let actionHTML = `<span style="color:#64748b; font-style:italic;">Không thể tác động</span>`;
        if (u.role !== 'admin') {
            actionHTML = `<button class="btn-remove-item" onclick="deleteUserAccount('${u.email}')" style="font-weight:bold;">❌ Xóa Tài Khoản</button>`;
        }

        body.innerHTML += `
            <tr>
                <td><img src="${u.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;"></td>
                <td style="font-weight:600;">${u.email}</td>
                <td><span class="badge-bct" style="${u.role==='admin'?'color:#ef4444; border-color:#fca5a5; background:#fef2f2;':''}">${u.role.toUpperCase()}</span></td>
                <td>${actionHTML}</td>
            </tr>`;
    });
    toggleModal('adminUsersModal', true);
}

// Hàm thực hiện xóa tài khoản khách hàng
function deleteUserAccount(email) {
    if(confirm(`⚠️ Bạn có chắc chắn muốn XÓA VĨNH VIỄN tài khoản khách hàng: [${email}] khỏi hệ thống?`)) {
        users = users.filter(u => u.email !== email);
        alert("Thực hiện xóa tài khoản thành viên thành công!");
        openAdminUsersModal(); // Render lại bảng thành viên
    }
}

// B. Mở cửa sổ Tổng hợp Doanh Thu và Quản lý / Cập Nhật Trạng Thái Đơn Hàng
function openAdminReportModal() {
    // 1. Tính tổng doanh thu tích lũy từ các đơn đã thanh toán thành công
    let totalRevenue = invoiceHistory.reduce((sum, inv) => sum + inv.total, 0);
    document.getElementById('adminTotalRevenue').innerText = totalRevenue.toLocaleString('vi-VN') + " đ";

    // 2. Đổ danh sách quản lý trạng thái đơn chi tiết
    let body = document.getElementById('adminReportTableBody');
    body.innerHTML = '';

    if (invoiceHistory.length === 0) {
        body.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#94a3b8; padding:20px;">Hệ thống chưa ghi nhận đơn hàng nào trong ngày hôm nay.</td></tr>`;
    } else {
        invoiceHistory.forEach((inv, index) => {
            // Gom tên các mặt hàng khách mua thành danh sách chuỗi hiển thị gọn gàng
            let itemsSummary = inv.items.map(item => `• ${item.name} (SL: ${item.quantity})`).join('<br>');

            body.innerHTML += `
                <tr>
                    <td style="font-weight:700; color:var(--primary-color);">${inv.code}</td>
                    <td>
                        <strong style="color:var(--dark-color);">${inv.customer}</strong> <small style="color:#64748b;">(${inv.phone})</small><br>
                        <div style="font-size:12px; color:#475569; margin-top:4px; line-height:1.4;">${itemsSummary}</div>
                    </td>
                    <td style="font-weight:700; color:#059669;">${inv.total.toLocaleString('vi-VN')} đ</td>
                    <td>
                        <select onchange="updateInvoiceStatus(${index}, this.value)" style="padding:6px; font-size:13px; border-radius:6px; border:1px solid #cbd5e1; font-weight:600; color:#334155;">
                            <option value="Đã thanh toán" ${inv.status === 'Đã thanh toán' ? 'selected' : ''}>🔵 Đã thanh toán</option>
                            <option value="Đang đóng gói" ${inv.status === 'Đang đóng gói' ? 'selected' : ''}>🟡 Đang đóng gói</option>
                            <option value="Đang giao" ${inv.status === 'Đang giao' ? 'selected' : ''}>🟣 Đang giao</option>
                            <option value="Giao hàng hoàn tất" ${inv.status === 'Giao hàng hoàn tất' ? 'selected' : ''}>🟢 Giao hoàn tất</option>
                        </select>
                    </td>
                </tr>`;
        });
    }
    toggleModal('adminReportModal', true);
}

// Cập nhật trạng thái đơn hàng từ Admin
function updateInvoiceStatus(index, newStatus) {
    if(invoiceHistory[index]) {
        invoiceHistory[index].status = newStatus;
        alert(`Cập nhật trạng thái đơn hàng ${invoiceHistory[index].code} thành: [${newStatus}] thành công!`);
    }
}

// C. Sửa hàm lưu sản phẩm (saveProduct) của Admin để ghi nhận số lượng tồn kho khi Thêm mới/Sửa đổi
function openAddModal() {
    document.getElementById('formTitle').innerText = "Thêm Sản Phẩm Mới";
    document.getElementById('productForm').reset();
    document.getElementById('formId').value = '';
    document.getElementById('formStock').value = 10; // Tồn kho mặc định khi thêm mới là 10
    toggleModal('productFormModal', true);
}

function openEditModal(id) {
    let prod = products.find(p => p.id === id);
    if(!prod) return;
    document.getElementById('formTitle').innerText = "Chỉnh Sửa Nhạc Cụ";
    document.getElementById('formId').value = prod.id;
    document.getElementById('formName').value = prod.name;
    document.getElementById('formCategory').value = prod.category;
    document.getElementById('formPrice').value = prod.price;
    document.getElementById('formImg').value = prod.img;
    document.getElementById('formStock').value = prod.stock || 0; // Đổ số lượng kho hiện tại lên ô nhập
    document.getElementById('formDesc').value = prod.desc;
    toggleModal('productFormModal', true);
}

function saveProduct(e) {
    e.preventDefault();
    let id = document.getElementById('formId').value;
    let name = document.getElementById('formName').value;
    let category = document.getElementById('formCategory').value;
    let price = parseInt(document.getElementById('formPrice').value);
    let img = document.getElementById('formImg').value;
    let stock = parseInt(document.getElementById('formStock').value); // Lấy số liệu kho nhập vào
    let desc = document.getElementById('formDesc').value;

    if(id) {
        let prod = products.find(p => p.id == id);
        if(prod) {
            prod.name = name; prod.category = category;
            prod.price = price; prod.img = img; 
            prod.stock = stock; // Cập nhật thay đổi số lượng tồn kho
            prod.desc = desc;
        }
    } else {
        let newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, price, category, img, stock, desc });
    }
    filterProducts(); // Re-render lại để khách hàng nhận ngay các cập nhật mới nhất từ Admin lập tức
    toggleModal('productFormModal', false);
}