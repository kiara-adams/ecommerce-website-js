function CreateItem(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
  
  let item1 = new CreateItem(1, "Product 1", "Description of Product 1", 1900.99);
  let item2 = new CreateItem(2, "Product 2", "Description of Product 2", 2500.99);
  let item3 = new CreateItem(3, "Product 3", "Description of Product 3", 2400.99);
  let item4 = new CreateItem(4, "Product 4", "Description of Product 4", 1000.99);
  let item5 = new CreateItem(5, "Product 5", "Description of Product 5", 1800.99);
  let item6 = new CreateItem(6, "Product 6", "Description of Product 6", 2100.99);
  let item7 = new CreateItem(7, "Product 7", "Description of Product 7", 2200.99);
  let item8 = new CreateItem(8, "Product 8", "Description of Product 8", 1500.99);
  let item9 = new CreateItem(9, "Product 9", "Description of Product 9", 1500.99);
  

  let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
  

  localStorage.setItem('items', JSON.stringify(items));
  

  let main = document.querySelector('main');
  
 
  items.forEach(item => {

    const itemDiv = document.createElement('div');
    itemDiv.className = 'product';
    itemDiv.innerHTML = `
      <h2 class="product-name">${item.name}</h2>
      <p class="product-description">${item.description}</p>
      <p class="product-price">R ${item.price.toFixed(2)}</p>
      <button class="button add-to-cart" value="${item.id}">Add to Cart</button>
      <span class="cart-quantity">(0)</span>
    `;
    main.appendChild(itemDiv);
  
  
    const addToCartButton = itemDiv.querySelector('.add-to-cart');
    const cartQuantitySpan = itemDiv.querySelector('.cart-quantity');
  
    addToCartButton.addEventListener('click', () => {
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        cartItems.push({ ...item, quantity: 1 });
      }
  
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      cartQuantitySpan.textContent = `(${existingItem ? existingItem.quantity : 1})`;
      alert('Item added to cart!');
    });
  });
  