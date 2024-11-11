//array of Products
const products = [
  {
    category: "Helmet",
    id: 1,
    name: "PURRTECTION HELMET 102",
    price: "1.02 €",
    description: "Description for product 102.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/01-helm/helm-002.png",
  },
  {
    category: "Visor",
    id: 2,
    name: "CAT-EYES VISOR 202",
    price: "2.02 €",
    description: "Description for product 202.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/02-visor/visor-002.png",
  },
  {
    category: "Fatigue",
    id: 3,
    name: "MEOWTARY FATIGUE 302",
    price: "3.02 €",
    description: "Description for product 302.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/03-fatigue/fatigue-002.png",
  },
  {
    category: "Claw",
    id: 4,
    name: "CAT-ANA CLAWS 402",
    price: "4.02 €",
    description: "Description for product 402.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/04-claw/claw-002.png",
  },
  {
    category: "Vest",
    id: 5,
    name: "PURRTECTION VEST 502",
    price: "5.02 €",
    description: "Description for product 502.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/05-vest/vest-002.png",
  },
  {
    category: "Harness",
    id: 6,
    name: "PLUSH HARNESS 602",
    price: "6.02 €",
    description: "Description for product 602.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/06-harness/harness-002.png",
  },
  {
    category: "Harness",
    id: 7,
    name: "SCRATCH POST 702",
    price: "7.02 €",
    description: "Description for product 702.",
    image: "https://raw.githubusercontent.com/IndignusDomino/modern-catfare/main/images/07-post/post-002.png",
  },
  // Add more products as needed
];


//DOM creation of new product elements
document.addEventListener('DOMContentLoaded', (event) => { 
  const productList = document.getElementById('products-list');

  function createProductItem(product) {
      const li = document.createElement('li');
      li.classList.add('product');
      li.innerHTML = `
          <div class="product-card">
              <img src="${product.image}" alt="${product.category}" class="product-image">
              <div class="product-text">
                  <h2 class="product-title">${product.name}</h2>
                  <p class="product-price">${product.price}</p>
                  <p class="product-description">${product.description}</p>
                  <button class="product-buy">Buy Now</button>
                  <button class="add-to-cart">Add to Cart</button>
              </div>
          </div>
      `;
      return li;
  }

  products.forEach(product => {
      const productItem = createProductItem(product);
      productList.appendChild(productItem);
  });
});




//sorty by name
document.addEventListener('DOMContentLoaded', (event) => {
  const productsList = document.getElementById('products-list');
  const sortByNameDropdown = document.getElementById('sort-name'); 

  sortByNameDropdown.addEventListener('change', () => {
    const sortOrder = sortByNameDropdown.value;
    const products = Array.from(productsList.querySelectorAll('.product'));

    products.sort((a, b) => {
      const nameA = a.querySelector('.product-title').textContent.toLowerCase();
      const nameB = b.querySelector('.product-title').textContent.toLowerCase();

      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA); 
    });

    productsList.innerHTML = '';
    products.forEach(product => productsList.appendChild(product)); 
  });
});




// sort by price
document.addEventListener('DOMContentLoaded', (event) => {
  const productsList = document.getElementById('products-list');
  const sortByPriceDropdown = document.getElementById('sort-price'); 

  sortByPriceDropdown.addEventListener('change', () => {
      const sortOrder = sortByPriceDropdown.value;
      const products = Array.from(productsList.querySelectorAll('.product'));

      products.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('.product-price').textContent.replace(/[^0-9.]/g, '')); 
          const priceB = parseFloat(b.querySelector('.product-price').textContent.replace(/[^0-9.]/g, ''));

          if (sortOrder === 'asc') {
              return priceA - priceB;
          } else {
              return priceB - priceA;
          }
      });

      productsList.innerHTML = '';
      products.forEach(product => productsList.appendChild(product));
  });
});





/* NO IDEA HOW TO DO
// sort by category
document.addEventListener('DOMContentLoaded', (event) => {
  const productsList = document.getElementById('products-list');
  const sortByCategoryDropdown = document.getElementById('sort-category'); 

  sortByCategoryDropdown.addEventListener('change', () => {
      const selectedCategory = sortByCategoryDropdown.value;
      const products = Array.from(productsList.querySelectorAll('.product'));

      products.sort((a, b) => {
          // Get the category of each product 
          const categoryA = getCategory(a);
          const categoryB = getCategory(b);

          // Comparison logic
          if (selectedCategory === 'sort-x-category') {
              // No specific category selected, maintain original order
              return 0; 
          } else if (categoryA === selectedCategory && categoryB !== selectedCategory) {
              // a is in the selected category, b is not
              return -1; 
          } else if (categoryA !== selectedCategory && categoryB === selectedCategory) {
              // b is in the selected category, a is not
              return 1; 
          } else {
              // Both are in the selected category or neither are
              return 0; 
          }
      });

      productsList.innerHTML = '';
      products.forEach(product => productsList.appendChild(product));
  });

  // Helper function to determine the category of a product (replace with your actual logic)
  function getCategory(productElement) {
      const productName = productElement.querySelector('.product-title').textContent.toLowerCase();
      if (productName.includes('helmet')) {
          return 'helmet';
      } else if (productName.includes('visor')) {
          return 'visor';
      } else if (productName.includes('fatigue')) {
          return 'fatigue';
      } else if (productName.includes('vest')) {
          return 'vest';
      } else if (productName.includes('claw')) {  // Assuming "CAT-ANA CLAWS 401" falls under 'claw'
          return 'claw';
      } else if (productName.includes('harness')) {
          return 'harness';
      } else if (productName.includes('post')) {
          return 'post';
      } else {
          return 'accessories'; // Default category
      }
  }
});
*/









// CART MODAL
document.addEventListener('DOMContentLoaded', (event) => {
  const openCartModalButton = document.getElementById('open-cart-modal');
  openCartModalButton.addEventListener('click', openCartModal);
  const cartModal = document.getElementById('cart-modal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const subtotalElement = document.getElementById('subtotal-amount');
const grandTotalElement = document.getElementById('grand-total-amount');

let cart = [];
});

function openCartModal() {
  cartModal.classList.add('open');
}

function closeCartModal() {
  cartModal.classList.remove('open');
}

/*
function updateCartDisplay() {
  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.name}</h3>
          <div class="cart-item-quantity">
            <button class="decrement-quantity">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increment-quantity">+</button>
          </div>
          <p class="cart-item-price">${item.price} €</p>
        </div>
      `;

    cartItemsContainer.appendChild(cartItem);
  });

  updateCartTotals();
}

function updateCartTotals() {
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  subtotalElement.textContent = subtotal.toFixed(2);
  grandTotalElement.textContent = subtotal.toFixed(2); // 
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const image = productCard.querySelector('.product-image').src;
    const name = productCard.querySelector('.product-title').textContent;
    const price = parseFloat(productCard.querySelector('.product-price').textContent); 

 
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ image, name, price, quantity: 1 });
    }
    updateCartDisplay();
  });
});


