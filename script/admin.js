document.getElementById('current-year').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) || [];


function renderProducts() {
  const tableBody = document.getElementById('table-products');
  tableBody.innerHTML = '';

  products.forEach((product, index) => {
    const { id, category, productName, description, price, image } = product;

    const row = `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${productName}</td>
        <td>${description}</td>
        <td>${price}</td>
        <td>
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editProductModal${id}">
            Edit
          </button>
          <button type="button" class="btn btn-danger ms-2" onclick="deleteProduct(${id})">Delete</button>
        </td>
      </tr>
      <div class="modal fade" id="editProductModal${id}" tabindex="-1" aria-labelledby="editProductModal${id}Label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editProductModal${id}Label">Edit Product</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="editProductForm${id}">
                <div class="mb-3">
                  <label for="editProductName${id}" class="form-label">Product Name</label>
                  <input type="text" class="form-control" id="editProductName${id}" value="${productName}" required>
                </div>
                <div class="mb-3">
                  <label for="editProductCategory${id}" class="form-label">Category</label>
                  <input type="text" class="form-control" id="editProductCategory${id}" value="${category}" required>
                </div>
                <div class="mb-3">
                  <label for="editProductDescription${id}" class="form-label">Description</label>
                  <textarea class="form-control" id="editProductDescription${id}" rows="3" required>${description}</textarea>
                </div>
                <div class="mb-3">
                  <label for="editProductPrice${id}" class="form-label">Price</label>
                  <input type="number" class="form-control" id="editProductPrice${id}" value="${price}" required>
                </div>
                <div class="mb-3">
                  <label for="editProductImage${id}" class="form-label">Image URL</label>
                  <input type="url" class="form-control" id="editProductImage${id}" value="${image}" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick="updateProduct(${id})">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `;

    tableBody.innerHTML += row;
  });
}


document.getElementById('saveProduct').addEventListener('click', () => {
  const productName = document.getElementById('productName').value;
  const productCategory = document.getElementById('productCategory').value;
  const productDescription = document.getElementById('productDescription').value;
  const productPrice = document.getElementById('productPrice').value;
  const productImage = document.getElementById('productImage').value;

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    category: productCategory,
    productName: productName,
    description: productDescription,
    price: parseFloat(productPrice),
    image: productImage
  };

  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
  document.getElementById('adminAddProduct').modal('hide'); 
});

function updateProduct(productId) {
  const editProductName = document.getElementById(`editProductName${productId}`).value;
  const editProductCategory = document.getElementById(`editProductCategory${productId}`).value;
  const editProductDescription = document.getElementById(`editProductDescription${productId}`).value;
  const editProductPrice = document.getElementById(`editProductPrice${productId}`).value;
  const editProductImage = document.getElementById(`editProductImage${productId}`).value;

  products = products.map(product => {
    if (product.id === productId) {
      return {
        ...product,
        productName: editProductName,
        category: editProductCategory,
        description: editProductDescription,
        price: parseFloat(editProductPrice),
        image: editProductImage
      };
    }
    return product;
  });

  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
  document.getElementById(`editProductModal${productId}`).modal('hide'); 
}

function deleteProduct(productId) {
  products = products.filter(product => product.id !== productId);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

let isHighest = false;
document.getElementById('adminSortProduct').addEventListener('click', () => {
  if (!isHighest) {
    products.sort((a, b) => b.id - a.id);
    isHighest = true;
  } else {
    products.sort((a, b) => a.id - b.id);
    isHighest = false;
  }
  renderProducts();
});


renderProducts();
