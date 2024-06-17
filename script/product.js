
function CreateItem(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
  
  
  let jewelryItems = [
    // Rings
    new CreateItem(1, "Ring of Artemis", "Our beautiful gold Artemis ring", 1900.99, "https://kiara-adams.github.io/ecommerce-images/ring%20img1.jpg"),
    new CreateItem(2, "Ring of Vera", "Our beautiful Ring of Vera inspired by the Greek goddess Vera", 2500.99, "https://kiara-adams.github.io/ecommerce-images/ring%20img%202.jpg"),
    new CreateItem(3, "Ring of Ares", "Our beautiful Ring of Ares inspired by the Greek god Ares", 2400.99, "https://kiara-adams.github.io/ecommerce-images/ring%20img%203.jpg"),
    new CreateItem(4, "Ring of Aphrodite", "Our beautiful Ring of Aphrodite inspired by the Greek Goddess Aphrodite", 1000.99, "https://kiara-adams.github.io/ecommerce-images/ring%20img%204.jpg"),
    new CreateItem(5, "Ring of Gaia", "Our beautiful Ring of Gaia inspired by the Greek goddess Gaia", 1000.99, "https://kiara-adams.github.io/ecommerce-images/ring%20img6.jpg"),
  
    // Earrings
    new CreateItem(6, "Dream Earring", "The very first earring in our Dream collection named after the goddess of dreams", 800.99, "https://kiara-adams.github.io/ecommerce-images/earrringg1.jpg"),
    new CreateItem(7, "Arlo Earring", "Our beautiful Arlo Earring", 950.99, "https://kiara-adams.github.io/ecommerce-images/earrringg2.jpg"),
    new CreateItem(8, "Rema Earring", "Our beautiful Rema Earring", 900.99, "https://kiara-adams.github.io/ecommerce-images/earrinng3.jpg"),
    new CreateItem(9, "Ruby Earring", "Our beautiful Ruby Earring", 750.99, "https://kiara-adams.github.io/ecommerce-images/earring3.jpg"),
    new CreateItem(10, "Rosette Earring", "Our beautiful Rosette Earring", 780.99, "https://kiara-adams.github.io/ecommerce-images/earring%202.jpg"),
  
    // Necklace
    new CreateItem(11, "Love Necklace", "From our love collection", 1100.99, "https://kiara-adams.github.io/ecommerce-images/1.jpg"),
    new CreateItem(12, "Angel Necklace", "From our angel collection", 2500.99, "https://kiara-adams.github.io/ecommerce-images/Opal%20Angel%20Necklace.jpeg"),
    new CreateItem(13, "Pink Cowgirl Necklace", "One from our rose gold cowgirl collection", 2400.99, "https://kiara-adams.github.io/ecommerce-images/Cowgirl%20Star%20Charm%20Necklace.jpeg"),
    new CreateItem(14, "Shelly Necklace", "Our beautiful seashell necklace", 1400.99, "https://kiara-adams.github.io/ecommerce-images/Pearl%20Conch%20Layered%20Necklace.jpeg"),
    new CreateItem(15, "Neptune Necklace", "Around the world", 2100.99, "https://kiara-adams.github.io/ecommerce-images/download%20(11).jpeg"),
  
    // Bracelets
    new CreateItem(16, "Polly Bracelet", "From our Polly collection", 1600.99, "https://kiara-adams.github.io/ecommerce-images/Pearl%20Crystal%20Cross%20Bracelet.jpeg"),
    new CreateItem(17, "Lux Bracelet", "Description of Product 17", 1900.99, "https://kiara-adams.github.io/ecommerce-images/Heart%20Wings%20Wand%20Necklace.jpeg"),
    new CreateItem(18, "Lore Bracelet", "Description of Product 18", 1800.99, "https://kiara-adams.github.io/ecommerce-images/Danica%20Floral%20Triple%20Layer%20Bracelet.jpeg"),
    new CreateItem(19, "Leve Bracelet", "Description of Product 19", 1500.99, "https://kiara-adams.github.io/ecommerce-images/braceler.jpg"),
    new CreateItem(20, "London Bracelet", "Description of Product 20", 2100.99, "https://kiara-adams.github.io/ecommerce-images/download%20(14).jpg"),
  
    // Makeup
    new CreateItem(21, "Blush Makeup", "Description of Product 21", 700.99, "https://kiara-adams.github.io/ecommerce-images/makeup%20blush%20pink.jpg"),
    new CreateItem(22, "Boston Makeup", "Description of Product 22", 800.99, "https://kiara-adams.github.io/ecommerce-images/download%20(18).jpg"),
    new CreateItem(23, "Pink Makeup", "Description of Product 23", 900.99, "https://kiara-adams.github.io/ecommerce-images/%F0%9F%A4%8D.jpg"),
    new CreateItem(24, "Heart Makeup", "Description of Product 24", 950.99, "https://kiara-adams.github.io/ecommerce-images/093bfbb2-f8b7-4d36-8611-0decc66a8673.jpg"),
    new CreateItem(25, "Pia Makeup", "Description of Product 25", 1000.99, "https://kiara-adams.github.io/ecommerce-images/Aesthetic%20pallet.jpg")
  ];
  
  
  function displayProducts() {
    const main = document.querySelector('.product-container');
  
    
    const sections = [
        { id: 'rings', title: 'Rings', items: jewelryItems.slice(0, 5) },
        { id: 'earrings', title: 'Earrings', items: jewelryItems.slice(5, 10) },
        { id: 'necklace', title: 'Necklace', items: jewelryItems.slice(10, 15) },
        { id: 'bracelets', title: 'Bracelets', items: jewelryItems.slice(15, 20) },
        { id: 'makeup', title: 'Makeup', items: jewelryItems.slice(20, 25) }
    ];
  
    sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
  
        sectionElement.innerHTML = `
            <h2 class="jewels">${section.title}</h2>
            <div class="products">
                ${section.items.map(item => `
                    <article class="product" id="product${item.id}">
                        <img src="${item.image}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <span>R${item.price}</span>
                        <button id="product${item.id}-btn" onclick="addToCart('${item.name}', ${item.price}, 'product${item.id}-btn')">Add to Cart</button>
                    </article>
                `).join('')}
            </div>
        `;
  
        main.appendChild(sectionElement);
    });
  }
  
  function addToCart(name, price, btnId) {
    console.log(`Added ${name} to cart for R${price}`);
  }
  
  displayProducts();
  const products = [
    { id: 1, name: 'Gold Ring', price: 500 },
    { id: 2, name: 'Diamond Necklace', price: 1200 },
    { id: 3, name: 'Silver Bracelet', price: 300 },
  
  ];
  
  function formatPrice(price) {
    return price.toFixed(2); 
  }
  
  function addItemToCart(itemId) {
    const item = products.find(product => product.id === itemId);
    if (item) {
        const cartItemsElement = document.getElementById('cart-items');
        const li = document.createElement('li');
        li.textContent = `${item.name} - R${formatPrice(item.price)}`;
        cartItemsElement.appendChild(li);
  
        updateTotalPrice(item.price);
    }
  }
  
  function updateTotalPrice(price) {
    const totalPriceElement = document.getElementById('total-price').querySelector('span');
    let totalPrice = parseFloat(totalPriceElement.textContent); 
    totalPrice += price; 
    totalPriceElement.textContent = formatPrice(totalPrice); 
  }
  
  function handleCheckout() {
    alert('Implement your checkout logic here.'); 
  }
  
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', handleCheckout);
  
  
  addItemToCart(1); 
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselInner.children.length;
        const offset = -currentIndex * carouselInner.clientWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }, 3000);
  });
  
  
  
  
  window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
  };
  
  // caro
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
  
    showSlide(currentIndex);
  
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);
  
    function showSlide(index) {
  
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }
  
  
    function showPrevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }
  
    function showNextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }
  });
  
  
  
  
  
  