//array of Products
const products = [
    {
      category: "Helmet",
      id: 1,
      name: "PURRTECTION HELMET 102",
      price: "1.02 €",
      description: "Description for product 102.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/01-helm/helm-002.png",
    },
    {
      category: "Visor",
      id: 2,
      name: "CAT-EYES VISOR 202",
      price: "2.02 €",
      description: "Description for product 202.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/02-visor/visor-002.png",
    },
    {
      category: "Fatigue",
      id: 3,
      name: "MEOWTARY FATIGUE 302",
      price: "3.02 €",
      description: "Description for product 302.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/03-fatigue/fatigue-002.png",
    },
    {
      category: "Claw",
      id: 4,
      name: "CAT-ANA CLAWS 402",
      price: "4.02 €",
      description: "Description for product 402.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/04-claw/claw-002.png",
    },
    {
      category: "Vest",
      id: 5,
      name: "PURRTECTION VEST 502",
      price: "5.02 €",
      description: "Description for product 502.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/05-vest/vest-002.png",
    },
    {
      category: "Harness",
      id: 6,
      name: "PLUSH HARNESS 602",
      price: "6.02 €",
      description: "Description for product 602.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/06-harness/harness-002.png",
    },
    {
      category: "Harness",
      id: 7,
      name: "SCRATCH POST 702",
      price: "7.02 €",
      description: "Description for product 702.",
      image: "https://github.com/IndignusDomino/modern-catfare/blob/main/images/06-harness/harness-002.png",
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