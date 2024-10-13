
// function addToCart(itemName, price, buttonId) {
    
//   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  
//   cartItems.push({ name: itemName, price: price });

  
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

//   let button = document.getElementById(buttonId);
//   button.textContent = 'Added to Cart';
//   button.disabled = true;

//   window.location.href = "cart.html";
// }

// function updateCartDisplay() {
//   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   let cartList = document.getElementById('cart-items');
//   let totalPrice = 0;

//   cartList.innerHTML = '';

//   cartItems.forEach(item => {
//       let li = document.createElement('li');
//       li.textContent = `${item.name} - R${item.price}`;
//       cartList.appendChild(li);

//       totalPrice += parseFloat(item.price);
//   });

//   document.getElementById('total-price').textContent = totalPrice.toFixed(2);
// }

// window.onload = updateCartDisplay;


// function removeFromCart(index) {
//   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//   cartItems.splice(index, 1);

//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   let cartList = document.getElementById('cart-items');
//   let totalPrice = 0;

//   cartList.innerHTML = '';

//   cartItems.forEach((item, index) => {
//       let li = document.createElement('li');
//       li.textContent = `${item.name} - R${item.price}`;
      
//       let removeButton = document.createElement('button');
//       removeButton.textContent = 'Remove';
//       removeButton.onclick = function() {
//           removeFromCart(index);
//       };

//       li.appendChild(removeButton);
//       cartList.appendChild(li);

//       totalPrice += parseFloat(item.price);
//   });

//   document.getElementById('total-price').textContent = totalPrice.toFixed(2);
// }

// window.onload = updateCartDisplay;



// function addToCart(itemName, price, buttonId) {
//   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

 
//   cartItems.push({ name: itemName, price: price });

//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

//   let button = document.getElementById(buttonId);
//   button.textContent = 'Added to Cart';
//   button.disabled = true;


// }

// const products = [
// { id: 1, name: 'Gold Ring', description: 'Our beautiful gold Artemis ring', price: 1900.99, image: 'https://kiara-adams.github.io/ecommerce-images/ring%20img1.jpg' },
// { id: 2, name: 'Diamond Necklace', description: 'From our angel collection', price: 2500.99, image: 'https://kiara-adams.github.io/ecommerce-images/Opal%20Angel%20Necklace.jpeg' },
// { id: 3, name: 'Silver Bracelet', description: 'From our Polly collection', price: 1600.99, image: 'https://kiara-adams.github.io/ecommerce-images/Pearl%20Crystal%20Cross%20Bracelet.jpeg' }
// ];

// function formatPrice(price) {
// return price.toFixed(2);
// }

// function addItemToCart(productId) {
// const product = products.find(item => item.id === productId);
// if (product) {
//     const cartTable = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
//     const row = cartTable.insertRow();
//     const imgCell = row.insertCell(0);
//     const nameCell = row.insertCell(1);
//     const descriptionCell = row.insertCell(2);
//     const priceCell = row.insertCell(3);
//     const quantityCell = row.insertCell(4);
//     const actionCell = row.insertCell(5);

//     imgCell.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
//     nameCell.textContent = product.name;
//     descriptionCell.textContent = product.description;
//     priceCell.textContent = `R${formatPrice(product.price)}`;
//     quantityCell.innerHTML = `<input type="number" class="quantity-input" value="1" min="1">`;
//     actionCell.innerHTML = `<button onclick="removeCartItem(this)">Remove</button>`;

//     updateTotalPrice(product.price);
// }
// }

// function updateTotalPrice(price) {
// const totalPriceElement = document.getElementById('total-price').querySelector('span');
// let totalPrice = parseFloat(totalPriceElement.textContent);
// totalPrice += price;
// totalPriceElement.textContent = formatPrice(totalPrice);
// }

// function handleCheckout() {
// alert('Implement your checkout logic here.');
// }

// const checkoutBtn = document.getElementById('checkout-btn');
// checkoutBtn.addEventListener('click', handleCheckout);

// addItemToCart(1);

// function removeCartItem(button) {
// const row = button.parentNode.parentNode;
// const price = parseFloat(row.cells[3].textContent.replace('R', ''));
// row.parentNode.removeChild(row);
// updateTotalPrice(-price);


// }

function addToCart(itemName, price, buttonId, imageUrl) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the item is already in the cart
  const existingItemIndex = cartItems.findIndex(item => item.name === itemName);
  if (existingItemIndex !== -1) {
      // Item already exists in cart, update the price (optional)
      cartItems[existingItemIndex].price += price; // This can be adjusted based on your logic
  } else {
      // Add the item to the cart
      cartItems.push({ name: itemName, price: price, image: imageUrl });
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update the button text and disable it
  let button = document.getElementById(buttonId);
  button.textContent = 'Added to Cart';
  button.disabled = true;

  // Navigate to the cart page
  window.location.href = "cart.html";
}

function updateCartDisplay() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let cartList = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
  let totalPrice = 0;

  // Clear the cart list
  cartList.innerHTML = '';

  // Populate the cart
  cartItems.forEach((item, index) => {
      let row = cartList.insertRow();
      let imgCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let descriptionCell = row.insertCell(2);
      let priceCell = row.insertCell(3);
      let quantityCell = row.insertCell(4);
      let actionCell = row.insertCell(5);

      imgCell.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width: 100px;">`;
      nameCell.textContent = item.name;
      descriptionCell.textContent = "Description here"; // Replace with actual description if available
      priceCell.textContent = `R${item.price.toFixed(2)}`;
      quantityCell.innerHTML = `<input type="number" class="quantity-input" value="1" min="1">`;
      actionCell.innerHTML = `<button onclick="removeCartItem(this, '${item.name}')">Remove</button>`;

      totalPrice += parseFloat(item.price); // Calculate total price
  });

  document.getElementById('total-price').textContent = `R${totalPrice.toFixed(2)}`; // Update total price display
}

function removeCartItem(button, itemName) {
  // Get current cart items
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Filter out the item to remove
  cartItems = cartItems.filter(item => item.name !== itemName);

  // Save the updated cart back to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update the cart display
  updateCartDisplay();
}

function handleCheckout() {
  alert('Thank you for your purchase! Your order has been confirmed.');
  // Implement additional checkout logic here
}

// Event listener for the checkout button
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', handleCheckout);

// Call updateCartDisplay on window load
window.onload = updateCartDisplay;
