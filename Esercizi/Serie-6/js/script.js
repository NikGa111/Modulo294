/* Nicola Galeano
   version: 05.03.2026 */
/* Serie 6 */


/* Parte 1 */


const products = [
    ["Sneakers", 79.90, "https://picsum.photos/200?1"],
    ["Zaino", 49.90, "https://picsum.photos/200?2"],
    ["Cuffie", 29.90, "https://picsum.photos/200?3"],
    ["Mouse", 19.90, "https://picsum.photos/200?4"]
];


/* Parte 2 */


const section = document.querySelector(".products");

products.forEach(product => {

    const article = document.createElement("article");

    article.innerHTML = `
        <img src="${product[2]}" alt="${product[0]}">
        <h3>${product[0]}</h3>
        <p class="price">CHF ${product[1].toFixed(2)}</p>
        <input type="number" value="1" min="1">
        <button>Acquista ora</button>
    `;

    section.appendChild(article);

});


/* Parte 3 */


const cartList = document.querySelector("#cart-list");
const totalText = document.querySelector("#totale");

let total = 0;

const buttons = document.querySelectorAll(".products button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const article = button.parentElement;
        const quantity = article.querySelector("input").value;

        const name = products[index][0];
        const price = products[index][1];

        const subtotal = price * quantity;



        const li = document.createElement("li");

        li.innerHTML = `
            ${name} x${quantity}
            <span>CHF ${subtotal.toFixed(2)}</span>
        `;



        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Rimuovi";

        li.appendChild(removeBtn);

        cartList.appendChild(li);



        total += subtotal;
        totalText.textContent = "Totale: CHF " + total.toFixed(2);


        

        removeBtn.addEventListener("click", () => {

            li.remove();

            total -= subtotal;
            totalText.textContent = "Totale: CHF " + total.toFixed(2);

        });




        button.textContent = "Aggiunto ✓";

        setTimeout(() => {
            button.textContent = "Acquista ora";
        }, 1000);

    });

});