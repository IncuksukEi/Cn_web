// Tóm tắt: Toggle form | Tìm/lọc sản phẩm | Thêm sản phẩm
document.addEventListener('DOMContentLoaded', function () {

    // Toggle form
    const showFormBtn = document.getElementById('showAddProductFormBtn');
    const addProductForm = document.getElementById('addProductForm');
    const cancelBtn = document.getElementById('cancelBtn');

    showFormBtn.addEventListener('click', function () {
        addProductForm.classList.toggle('hidden');
    });

    cancelBtn.addEventListener('click', function () {
        addProductForm.classList.add('hidden'); // Ẩn form
    });

    // Tìm/lọc sản phẩm
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

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
    searchBtn.addEventListener('click', filterProducts);


    // Thêm sản phẩm
    const productList = document.getElementById('product-list');
    const errorMsg = document.getElementById('errorMsg');

    addProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('newProductName').value.trim();
        const price = document.getElementById('newProductPrice').value.trim();
        const desc = document.getElementById('newProductDesc').value.trim();
        let image = document.getElementById('newProductImage').value.trim();

        // Validate
        if (name === "" || price === "" || isNaN(price) || Number(price) <= 0) {
            errorMsg.textContent = "Vui lòng nhập tên và giá hợp lệ (giá > 0).";
            return;
        }
        errorMsg.textContent = "";

        // Placeholder image nếu không có
        if (image === "") {
            image = "https://via.placeholder.com/300x200?text=" + encodeURI(name);
        }

        // Tạo và chèn item
        const newItem = document.createElement('article');
        newItem.className = 'product-item';
        newItem.innerHTML = `
            <img src="${image}" alt="Bìa sách ${name}">
            <h3 class="product-name">${name}</h3>
            <p class="product-desc">${desc}</p>
            <p class="product-price">Giá: ${Number(price).toLocaleString('vi-VN')} VNĐ</p>
        `;
        productList.prepend(newItem);

        // Reset và ẩn form
        addProductForm.reset();
        addProductForm.classList.add('hidden');
    });

});