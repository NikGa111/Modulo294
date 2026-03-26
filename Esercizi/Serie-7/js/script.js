/* Nicola Galeano
   version: 26.03.2026 */
/* Serie-7 */



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




const carrello = [];




const section = document.querySelector(".products");

for (const categoria in prodotti) {



    const h2 = document.createElement("h2");
    h2.textContent = categoria;
    section.appendChild(h2);




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



        const btn = article.querySelector("button");

        btn.addEventListener("click", () => {

            aggiungiAlCarrello(prodotto);



 

        });

        div.appendChild(article);

    });

    section.appendChild(div);

}




function aggiungiAlCarrello(prodotto) {

    const esistente = carrello.find(item => item.nome === prodotto.nome);

    if (esistente) {



        esistente.quantita += 1;

    } else {



        carrello.push({
            nome:     prodotto.nome,
            prezzo:   prodotto.prezzo,
            quantita: 1
        });

    }

    renderCarrello();

}




function renderCarrello() {

    const cartList  = document.querySelector("#cart-list");
    const totalText = document.querySelector("#totale");



    cartList.innerHTML = "";

    let totale = 0;

    carrello.forEach((item, indice) => {

        const subtotale = item.prezzo * item.quantita;
        totale += subtotale;

        const li = document.createElement("li");

        li.innerHTML = `
            <div style="width: 250px"><span class="cart-name">${item.nome}</span></div>
            <span class="cart-qty">
                <button class="qty-btn" data-azione="meno" data-indice="${indice}">−</button>
                <span style="width: 20px ">${item.quantita}</span>
                <button class="qty-btn" data-azione="piu" data-indice="${indice}">+</button>
            </span>
            <div style="width: 150px"><span class="cart-price">CHF ${subtotale.toFixed(2)}</span><div>
            <button class="remove-btn" data-indice="${indice}">Rimuovi</button>
        `;

        cartList.appendChild(li);

    });



    totalText.textContent = "Totale: CHF " + totale.toFixed(2);




    document.querySelectorAll(".qty-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            const i = parseInt(btn.dataset.indice);
            const azione = btn.dataset.azione;

            if (azione === "piu") {

                carrello[i].quantita += 1;

            } else if (azione === "meno" && carrello[i].quantita > 1) {



                carrello[i].quantita -= 1;

            }

            renderCarrello();

        });

    });




    document.querySelectorAll(".remove-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            const i = parseInt(btn.dataset.indice);

            carrello.splice(i, 1);

            renderCarrello();

        });

    });

}
