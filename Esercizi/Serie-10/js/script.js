let api = "https://fakestoreapi.com/products";
const productsGrid = document.getElementById("products");

function createProductCard(product) {
  const article = document.createElement("article");

  article.innerHTML = `
    <div>
      <div>
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div>
        <h3>${product.title}</h3>
        <p class="multiline-truncate">${product.description}</p>
      </div>
    </div>
    <div>
      <div>${product.price.toFixed(2)} CHF</div>
      <button>Acquista ora</button>
    </div>
  `;

  return article;
}

async function loadProducts() {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    const products = await response.json();

    // Svuota la griglia (rimuove il codice d'esempio)
    productsGrid.innerHTML = "";

    products.forEach((product) => {
      const card = createProductCard(product);
      productsGrid.appendChild(card);
    });

  } catch (error) {
    productsGrid.innerHTML = `
      <p style="color: red; grid-column: 1/-1;">
        Errore nel caricamento dei prodotti: ${error.message}
      </p>
    `;
    console.error("Fetch fallito:", error);
  }
}

loadProducts();