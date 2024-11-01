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


//product sorting asc desc

const productsList = document.getElementById('products-list');
const sortByNameDropdown = document.getElementById('sort-by-name'); 

sortByNameDropdown.addEventListener('change', () => {
    const sortOrder = sortByNameDropdown.value;
    const products = Array.from(productsList.querySelectorAll('.product'));

    products.sort((a, b) => {
        const nameA = a.querySelector('.product-title').textContent.toLowerCase();
        const nameB = b.querySelector('.product-title').textContent.toLowerCase();

        if (sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    // Remove existing product elements
    productsList.innerHTML = '';

    // Add sorted product elements back to the list
    products.forEach(product => productsList.appendChild(product));
});