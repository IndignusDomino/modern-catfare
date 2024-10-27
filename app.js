//array of Products
const products = [
    {
      id: 1,
      name: "Purrtection Helmet 001",
      price: "$19.99",
      description: "Description for product 1.",
      image: "\images\helm\helm-001.png",
      category: "Helmet",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      description: "Description for product 2.",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    // Add more products as needed
  ];


  // Function to generate product elements
function generateProductElements() {
    const productContainer = document.querySelector("main section ul");
  
    products.forEach((product) => {
      const productElement = document.createElement("li");
  
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      `;
  
      productContainer.appendChild(productElement);
    });
  }