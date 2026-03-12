/* Nicola Galeano
   version: 05.03.2026 */
/* Serie 6 */


/* Parte 1 */
/* Array prodotti */

const products = [
    ["Sneakers",  79.90, "https://picsum.photos/200?1"],
    ["Zaino",     49.90, "https://picsum.photos/200?2"],
    ["Cuffie",    29.90, "https://picsum.photos/200?3"],
    ["Mouse",     19.90, "https://picsum.photos/200?4"],
    ["Tastiera",  39.90, "https://picsum.photos/200?5"],
    ["Webcam",    59.90, "https://picsum.photos/200?6"]
];


/* Parte 2 */
/* Generazione dinamica delle card prodotti */

const section = document.querySelector(".products");

products.forEach(product => {

    const article = document.createElement("article");

    /* Parte 3 – bottone "Acquista ora" incluso */
    /* Parte 5 – input quantità incluso */

    article.innerHTML = `
        <img src="${product[2]}" alt="${product[0]}">
        <h3>${product[0]}</h3>
        <p class="price">CHF ${product[1].toFixed(2)}</p>
        <input type="number" value="1" min="1">
        <button>Acquista ora</button>
    `;

    section.appendChild(article);

});


/* Parte 3 & 4 & 5 & 6 */
/* Gestione bottone acquista, carrello, quantità, rimozione */

const cartList  = document.querySelector("#cart-list");
const totalText = document.querySelector("#totale");

let total = 0;

const buttons = document.querySelectorAll(".products button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const article  = button.parentElement;
        const quantity = parseInt(article.querySelector("input").value);

        const name     = products[index][0];
        const price    = products[index][1];

        const subtotal = price * quantity;

        /* Parte 3 – messaggio in console */
        console.log("🛒 Hai acquistato: " + name);


        /* Parte 4 & 5 – creazione riga carrello con nome, quantità e subtotale */

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="cart-name">${name} x${quantity}</span>
            <span class="cart-price">CHF ${subtotal.toFixed(2)}</span>
        `;


        /* Parte 6 – bottone rimuovi */

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Rimuovi";
        removeBtn.classList.add("remove-btn");

        li.appendChild(removeBtn);
        cartList.appendChild(li);


        /* Parte 5 – aggiornamento totale */

        total += subtotal;
        totalText.textContent = "Totale: CHF " + total.toFixed(2);


        /* Parte 6 – rimozione prodotto dal carrello e ricalcolo totale */

        removeBtn.addEventListener("click", () => {

            li.remove();

            total -= subtotal;
            totalText.textContent = "Totale: CHF " + total.toFixed(2);

        });


        /* Step extra */
        /* Feedback visivo: il bottone mostra "Aggiunto ✓" per 1 secondo */

        button.textContent = "Aggiunto ✓";

        setTimeout(() => {
            button.textContent = "Acquista ora";
        }, 1000);

    });

});
