// =====================================================
//  ESERCIZIO 1 – Catalogo elettronica 
// =====================================================

// Oggetto con 3 categorie, ognuna contiene un array di prodotti
const catalogo = {
  laptop: [
    {
      nome: "UltraBook 14",
      marca: "TechMaster",
      prezzo: 1499,
      disponibilita: 5,
      immagine: "img/laptop-ultrabook14.webp"
    },
    {
      nome: "Gaming 17",
      marca: "PowerX",
      prezzo: 1899,
      disponibilita: 2,
      immagine: "img/laptop-gaming17.webp"
    }
  ],
  smartphone: [
    {
      nome: "SmartOne X",
      marca: "PhoneLab",
      prezzo: 899,
      disponibilita: 10,
      immagine: "img/smartone-x.webp"
    },
    {
      nome: "SmartOne Mini",
      marca: "PhoneLab",
      prezzo: 649,
      disponibilita: 8,
      immagine: "img/smartone-mini.webp"
    }
  ],
  accessori: [
    {
      nome: "Mouse Wireless",
      marca: "Clicky",
      prezzo: 39,
      disponibilita: 20,
      immagine: "img/mouse-wireless.webp"
    },
    {
      nome: "Tastiera Meccanica",
      marca: "KeyPro",
      prezzo: 129,
      disponibilita: 6,
      immagine: "img/tastiera-meccanica.webp"
    }
  ]
};


const btn_show_catalog = document.getElementById('btn-mostra-catalogo');
const product_list = document.getElementById('catalogo');

function showCatalogEs1() {

  let html = ''
  let tot_categories = 0
  let tot_products = 0
  let tot_prices = 0

  for (const category in catalogo) {
    html += `<h2>${category}</h2>`
    html += `<section class="product-grid">`;
    tot_categories += 1;
    for (const product of catalogo[category]) {
      tot_products += 1;
      tot_prices += product.prezzo
      html += `
      <article class="product-card">
        <img src="${product.immagine}" alt="${product.nome}">
        <h4 class="product-title">${product.nome}</h4>
        <p class="product-meta">
        ${product.marca} · Disponibilità: ${product.disponibilita}</p>
        <p class="product-price">${product.prezzo} CHF</p>
      </article>`;

    }
    html += `</section>`;
  }
  html += `<div class="meta">Numero categorie: ${tot_categories} | Numero prodotti: ${tot_products} | Somma di tutti i prezzi: ${tot_prices} CHF</div>`;

  product_list.innerHTML = html;
}

btn_show_catalog.addEventListener('click', showCatalogEs1);

// ======================================================
// ESERCIZIO 2 – Carrello
// ======================================================

const buttons_cart = document.querySelectorAll('.add-cart');

let cart_list = document.getElementById('carrello');
let total_price = document.getElementById('totale-carrello');

let empty_cart = document.getElementById('svuota-carrello');


empty_cart.addEventListener('click', emptyCart);

let cart = [];
for (let button of buttons_cart) {

  button.addEventListener('click', (e) => {
    const name = e.target.dataset.nome;
    const price = Number(e.target.dataset.prezzo);

    // verifico se ilprodotto è già presentenel carrello
    let found_product = cart.find(prod => prod.name === name);
    // aggiungo oggetto nel carrello
    if (!found_product) {
      cart.push({ name, price, qty: 1 });
    } else {
      found_product.qty += 1
    }
    renderCart();
  });
}

function renderCart() {
  let price = 0;
  let html_cart = '';
  let subtotal_product = 0;
  for (const product of cart) {
    subtotal_product = product.price * product.qty;
    price += subtotal_product;
    html_cart += `${product.name} x ${product.qty} = ${subtotal_product} CHF<br>`;
  }
  if (cart.length === 0) {
    cart_list.innerText = 'Il carrello è vuoto.';
  } else {
    cart_list.innerHTML = html_cart;
  }
  total_price.innerText = `Totale: ${price} CHF`
}

function emptyCart() {
  cart.length = 0;
  renderCart();
}


// =====================================================
//  ESERCIZIO 3 – Catalogo abbigliamento con sconto e ricerca
// =====================================================

// Oggetto con 3 categorie di abbigliamento
const catalogo3 = {
  uomo: [
    { nome: "Giacca elegante", marca: "StyleMen", prezzo: 180, taglia: "L", immagine: "img/uomo-giacca.webp" },
    { nome: "Camicia bianca", marca: "StyleMen", prezzo: 60, taglia: "M", immagine: "img/uomo-camicia.webp" }
  ],
  donna: [
    { nome: "Vestito estivo", marca: "FashionLady", prezzo: 120, taglia: "S", immagine: "img/donna-vestito.webp" },
    { nome: "Blusa", marca: "FashionLady", prezzo: 70, taglia: "M", immagine: "img/donna-blusa.webp" }
  ],
  accessori: [
    { nome: "Cintura in pelle", marca: "LeatherWorks", prezzo: 45, taglia: "UNICA", immagine: "img/accessorio-cintura.webp" },
    { nome: "Sciarpa", marca: "WinterSoft", prezzo: 35, taglia: "UNICA", immagine: "img/accessorio-sciarpa.webp" }
  ]
};

const product_list_es3 = document.getElementById('catalogo-scontato');
const total_savings = document.getElementById('risparmio-totale');
const btn_show_product = document.getElementById('btn-mostra-sconti');
const btn_search_product = document.getElementById('btn-cerca-prodotto');
const input_search = document.getElementById('input-cerca');
const search_result = document.getElementById('risultato-cerca');

const discount = 0.15;

function showCatalogEs3() {
  let html = ''
  let tot_discount = 0;

  for (let category in catalogo3) {
    html += `<h2>${category}</h2>`
    html += `<section class="product-grid">`;
    for (let product of catalogo3[category]) {
      tot_discount += product.prezzo * discount;
      const prezzoScontato = product.prezzo - product.prezzo * discount;
      html += `
      <article class="product-card">
        <img src="${product.immagine}" alt="${product.nome}">
        <h4 class="product-title">${product.nome}</h4>
        <p class="product-meta">${product.marca}</p>
        <p class="product-price">
          ${prezzoScontato.toFixed(2)} CHF
          <span class="old-price">${product.prezzo.toFixed(2)} CHF</span>
        </p>
      </article>`;

    }
    html += `</section>`;
  }
  total_savings.innerText = `Totale risparmio ${tot_discount.toFixed(2)} CHF`;

  product_list_es3.innerHTML = html;
}

function searchProduct() {
  let search_product = input_search.value.trim().toLowerCase();
  if (!search_product) return;

  let found = null;
  let foundCategory = null;

  for (let category in catalogo3) {
    const product = catalogo3[category].find(
      prod => prod.nome.toLowerCase().includes(search_product) 
    );

    if (product) {
      found = product;
      foundCategory = category;
      break;
    }
  }

  if (found) {
    search_result.innerText =
      `Prodotto trovato: ${found.nome} (categoria: ${foundCategory}) - ` +
      `Marca: ${found.marca} - Prezzo: ${found.prezzo} CHF`;
  } else {
    search_result.innerText = "Prodotto non trovato";
  }
}

btn_search_product.addEventListener('click', searchProduct);
btn_show_product.addEventListener('click', showCatalogEs3);