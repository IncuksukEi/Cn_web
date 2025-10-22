// Chờ DOM load
document.addEventListener('DOMContentLoaded', function () {

    // 1. Ẩn/hiện form
    const showFormBtn = document.getElementById('showAddProductFormBtn');
    const addProductForm = document.getElementById('addProductForm');
    const cancelBtn = document.getElementById('cancelBtn');

    // Toggle form
    showFormBtn.addEventListener('click', function () {
        addProductForm.classList.toggle('hidden');
    });

    // Hủy -> ẩn form
    cancelBtn.addEventListener('click', function () {
        addProductForm.classList.add('hidden');
    });


    // 2. Tìm kiếm sản phẩm
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    // Lọc theo tên
    function filterProducts() {
        const filterText = searchInput.value.toLowerCase();
        const allProducts = document.querySelectorAll('.product-item');

        allProducts.forEach(function (product) {
            const productNameElement = product.querySelector('.product-name');

            if (productNameElement) {
                const productName = productNameElement.textContent.toLowerCase();
                product.style.display = productName.includes(filterText) ? 'flex' : 'none';
            }
        });
    }

    // Nút tìm
    searchBtn.addEventListener('click', filterProducts);

    // Tự động tìm khi gõ (tùy chọn)
    // searchInput.addEventListener('keyup', filterProducts);

});