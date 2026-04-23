// =====================================================
// TEST 3
// Scrivi la soluzione SOLO in questo file JavaScript.
// =====================================================

// =========================
// DATI - ESERCIZIO 1
// =========================
const bibliotecaData = {
  romanzi: [
    { titolo: "1984", autore: "George Orwell", pagine: 328, disponibile: true },
    { titolo: "Il nome della rosa", autore: "Umberto Eco", pagine: 500, disponibile: false },
    { titolo: "Klara e il Sole", autore: "Kazuo Ishiguro", pagine: 320, disponibile: true }
  ],
  fumetti: [
    { titolo: "Batman: Anno Uno", autore: "Frank Miller", pagine: 120, disponibile: true },
    { titolo: "Maus", autore: "Art Spiegelman", pagine: 296, disponibile: true }
  ],
  manuali: [
    { titolo: "JavaScript Base", autore: "Mario Rossi", pagine: 250, disponibile: true },
    { titolo: "Guida HTML e CSS", autore: "Luca Bianchi", pagine: 180, disponibile: false }
  ]
};

const btn_analizza_biblioteca = document.getElementById('btn-analizza-biblioteca');
const book_list = document.getElementById('biblioteca');
btn_analizza_biblioteca.addEventListener('click', showBiblioEs1);


function showBiblioEs1() {

  let html = ''
  let tot_categories = 0
  let tot_books = 0
  let media_pages = 0
  let pages = 0
  let pagine_prec = 0
  let libro_paginoso = ''
  let tot_books_disp = 0
  

  for (const category in bibliotecaData) {
    for (const book of bibliotecaData[category]) {
      if (book.disponibile){tot_books_disp += 1;}
      tot_books += 1
      pages += book.pagine
      if (book.pagine > pagine_prec){
        libro_paginoso = book.titolo
        pagine_prec = book.pagine
      }
      
      html += `
      <article class="book-card">
      <div class="book-card-content">
      <h4 class="book-title">${book.titolo}</h4>
      <p class="book-meta">${book.autore} </P>
      <p class="book-pages">${book.pagine}</p>
      </div>
      </article>
      `;
    }
    html += `</section>`;
  }

  media_pages = pages / tot_books

  let preappeso = `
  <article class="info-card">
  <span class="info-title">Numero totale libri</span>
  <strong>${tot_books_disp}</strong>
  </article>
  <article class="info-card">
  <span class="info-title">Media pagine</span>
  <strong>${media_pages.toFixed(0)}</strong>
  </article>
  <article class="info-card">
  <span class="info-title">Libro con più pagine</span>
  <strong>${libro_paginoso}</strong>
  </article>
  `
  
  book_list.innerHTML = preappeso;
  book_list.innerHTML += html;

  
}








// =========================
// DATI - ESERCIZIO 2
// =========================
let votazioniSnack = [];
let votazioneNulla = [];


const vote_snack = document.querySelectorAll('.vote-snack');

let risultati_voti = document.getElementById('risultati-voti');
let snakkone = document.getElementById('top-snack')
let reset_voti = document.getElementById('reset-voti');
let totale_voti = document.getElementById('totale-voti');
let tot_voti = 0
let snak_act = 0

reset_voti.addEventListener('click', reset_votazione);


for (let button of vote_snack) {

  button.addEventListener('click', (e) => {
    const name = e.target.dataset.nome;
    const categoria = e.target.dataset.categoria;
    tot_voti += 1
    let snakkettino = votazioniSnack.find(prod => prod.name === name);
    if (!snakkettino) {
      votazioniSnack.push({ name, categoria,  qty: 1 });
    } else {
      snakkettino.qty += 1
    }
    totale_voti.textContent = tot_voti
    renderSnak();
  });
}

function renderSnak() {
  let html_voti = '';
 
  for (const snak of votazioniSnack) {
    html_voti += `
    <article class="list-item">
    <div>
    <strong>${snak.name} </strong>
    <p class="muted">${snak.categoria}</p>
    </div>
    <div>
    Voti: <strong>${snak.qty}</strong>
    </div>
    </article>
    `;
     if (snak.qty > snak_act){
      snakkone.textContent = `${snak.name}(${snak.qty})`
      snak_act = snak.qty
    }
    
  }
  
  if (votazioniSnack.length === 0) {
    risultati_voti.innerHTML = `<p class = 'info-title'>Nessuna votazione registrata.</p>`;
  } else {
    risultati_voti.innerHTML = html_voti;
  }
  
 
}

function reset_votazione() {
  renderSnak()
  votazioniSnack = votazioneNulla
  risultati_voti.innerHTML = `<p class = 'info-title'>Nessuna votazione registrata.</p>`;
  snakkone.textContent = 'Nessun voto'
  tot_voti = 0
  totale_voti.textContent = tot_voti
  snak_act = 0
  
}

// =========================
// DATI - ESERCIZIO 3
// =========================
const menuRistorante = {
  primi: [
    {
      nome: "Pasta al pomodoro",
      chef: "Chef Marco",
      prezzo: 12,
      tipo: "primo",
      img: "https://picsum.photos/600/400?random=21"
    },
    {
      nome: "Risotto ai funghi",
      chef: "Chef Laura",
      prezzo: 14,
      tipo: "primo",
      img: "https://picsum.photos/600/400?random=22"
    }
  ],
  secondi: [
    {
      nome: "Bistecca alla griglia",
      chef: "Chef Paolo",
      prezzo: 25,
      tipo: "secondo",
      img: "https://picsum.photos/600/400?random=23"
    },
    {
      nome: "Salmone al forno",
      chef: "Chef Elena",
      prezzo: 22,
      tipo: "secondo",
      img: "https://picsum.photos/600/400?random=24"
    }
  ],
  dolci: [
    {
      nome: "Tiramisù",
      chef: "Chef Anna",
      prezzo: 8,
      tipo: "dolce",
      img: "https://picsum.photos/600/400?random=25"
    },
    {
      nome: "Panna cotta",
      chef: "Chef Giulia",
      prezzo: 7,
      tipo: "dolce",
      img: "https://picsum.photos/600/400?random=26"
    }
  ]
};


const menu_scontato = document.getElementById('menu-scontato');
const btn_show_menu = document.getElementById('btn-mostra-menu');
const input_search = document.getElementById('input-cerca-piatto');
const risparmio_menu = document.getElementById('risparmio-menu');
const discount = 0.20;

btn_show_menu.addEventListener('click', showMenuScontato);


function showMenuScontato() {
  let html = ''
  let tot_discount = 0;



  for (let categoria3 in menuRistorante) {
    for (let product of menuRistorante[categoria3]) {
      tot_discount += product.prezzo * discount;
      const prezzoScontato = product.prezzo - product.prezzo * discount;
      html += `
      <article class="dish-card">
      <img src="${product.img}" alt="${product.nome}">
      <div class="dish-card-content">
      <h4 class="dish-title">${product.nome}</h4>
      <p class="dish-meta">${product.chef} · tipo ${product.tipo}</p>
      <p class="dish-price">
      ${prezzoScontato} CHF
      <span class="old-price">${product.prezzo} CHF</span>
      </p>
      </div>
      </article>
      `;

    }
    html += `</section>`;
  }
  let risparmio = `        
  <article class="info-card">
  <span class="info-title">Risparmio totale</span>
  <strong id="top-snack">${tot_discount}</strong>
  </article>`
  risparmio_menu.innerHTML = risparmio
  menu_scontato.innerHTML += html

}

function searchProduct() {
  let ricerca = input_search.value.trim().toLowerCase();
  let html = '';
  let tot_discount = 0;

  for (let categoria3 in menuRistorante) {
    for (let product of menuRistorante[categoria3]) {
      tot_discount += product.prezzo * discount;
      if (product.nome.toLowerCase().includes(ricerca)) {
        const prezzoScontato = product.prezzo - product.prezzo * discount;
        html += `
        <article class="dish-card">
        <img src="${product.img}" alt="${product.nome}">
        <div class="dish-card-content">
        <h4 class="dish-title">${product.nome}</h4>
        <p class="dish-meta">${product.chef} · tipo ${product.tipo}</p>
        <p class="dish-price">
        ${prezzoScontato} CHF
        <span class="old-price">${product.prezzo} CHF</span>
        </p>
        </div>
        </article>`;
      }
    }
  }

  risparmio_menu.innerHTML = `<article class="info-card"><span class="info-title">Risparmio totale</span><strong>${tot_discount.toFixed(2)}</strong></article>`;
  menu_scontato.innerHTML = html;
}

input_search.addEventListener('input', searchProduct);

