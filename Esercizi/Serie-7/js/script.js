/* Nicola Galeano
   version: 12.03.2026 */
/* Mini Ecommerce Fast-Food */


/* Struttura dati dei prodotti */
/* Oggetto principale con categorie, ogni categoria è un array di oggetti */

const prodotti = {
    Panini: [
        { nome: "Hamburger",      prezzo: 8.50, img: "https://picsum.photos/200?10" },
        { nome: "Cheeseburger",   prezzo: 9.50, img: "https://picsum.photos/200?11" },
        { nome: "Chicken Burger", prezzo: 9.90, img: "https://picsum.photos/200?12" }
    ],
    Snack: [
        { nome: "Patatine",       prezzo: 3.50, img: "https://picsum.photos/200?20" },
        { nome: "Nuggets",        prezzo: 4.90, img: "https://picsum.photos/200?21" },
        { nome: "Onion Rings",    prezzo: 3.90, img: "https://picsum.photos/200?22" }
    ],
    Bevande: [
        { nome: "Coca-Cola",      prezzo: 2.50, img: "https://picsum.photos/200?30" },
        { nome: "Acqua",          prezzo: 1.50, img: "https://picsum.photos/200?31" },
        { nome: "Succo",          prezzo: 2.90, img: "https://picsum.photos/200?32" }
    ]
};


/* Array carrello */
/* Conterrà oggetti con: nome, prezzo, quantita */

const carrello = [];


/* Generazione dinamica delle card prodotti */
/* Per ogni categoria si crea un titolo e le relative card */

const section = document.querySelector(".products");

for (const categoria in prodotti) {

    /* Titolo della categoria */

    const h2 = document.createElement("h2");
    h2.textContent = categoria;
    section.appendChild(h2);


    /* Contenitore card della categoria */

    const div = document.createElement("div");
    div.classList.add("categoria");

    prodotti[categoria].forEach(prodotto => {

        const article = document.createElement("article");

        article.innerHTML = `
            <img src="${prodotto.img}" alt="${prodotto.nome}">
            <h3>${prodotto.nome}</h3>
            <p class="price">CHF ${prodotto.prezzo.toFixed(2)}</p>
            <button>Aggiungi</button>
        `;

        /* Evento click sul bottone aggiungi */

        const btn = article.querySelector("button");

        btn.addEventListener("click", () => {

            aggiungiAlCarrello(prodotto);

            /* Feedback visivo */

            btn.textContent = "Aggiunto ✓";

            setTimeout(() => {
                btn.textContent = "Aggiungi";
            }, 1000);

        });

        div.appendChild(article);

    });

    section.appendChild(div);

}


/* Funzione: aggiungi prodotto al carrello */
/* Se già presente aumenta la quantità, altrimenti usa push() */

function aggiungiAlCarrello(prodotto) {

    const esistente = carrello.find(item => item.nome === prodotto.nome);

    if (esistente) {

        /* Prodotto già nel carrello: aumenta quantità */

        esistente.quantita += 1;

    } else {

        /* Prodotto nuovo: aggiungilo con push() */

        carrello.push({
            nome:     prodotto.nome,
            prezzo:   prodotto.prezzo,
            quantita: 1
        });

    }

    renderCarrello();

}


/* Funzione: render completo del carrello */
/* Rigenera tutto il contenuto <ul> a partire dall'array carrello */

function renderCarrello() {

    const cartList  = document.querySelector("#cart-list");
    const totalText = document.querySelector("#totale");

    /* Svuota la lista prima di rigenerarla */

    cartList.innerHTML = "";

    let totale = 0;

    carrello.forEach((item, indice) => {

        const subtotale = item.prezzo * item.quantita;
        totale += subtotale;

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="cart-name">${item.nome}</span>
            <span class="cart-qty">
                <button class="qty-btn" data-azione="meno" data-indice="${indice}">−</button>
                ${item.quantita}
                <button class="qty-btn" data-azione="piu" data-indice="${indice}">+</button>
            </span>
            <span class="cart-price">CHF ${subtotale.toFixed(2)}</span>
            <button class="remove-btn" data-indice="${indice}">Rimuovi</button>
        `;

        cartList.appendChild(li);

    });

    /* Aggiornamento totale */

    totalText.textContent = "Totale: CHF " + totale.toFixed(2);


    /* Bottoni + e − */

    document.querySelectorAll(".qty-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            const i      = parseInt(btn.dataset.indice);
            const azione = btn.dataset.azione;

            if (azione === "piu") {

                carrello[i].quantita += 1;

            } else if (azione === "meno" && carrello[i].quantita > 1) {

                /* Non scendere sotto 1 */

                carrello[i].quantita -= 1;

            }

            renderCarrello();

        });

    });


    /* Bottoni rimuovi */
    /* Usa splice(indice, 1) per eliminare l'elemento dall'array */

    document.querySelectorAll(".remove-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            const i = parseInt(btn.dataset.indice);

            carrello.splice(i, 1);

            renderCarrello();

        });

    });

}
