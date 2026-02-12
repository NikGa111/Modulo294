// Nicola Galeano 
// version: 12.02.2026
// Serie 4

// Parte 1

let ese1 = document.querySelector("#titolo");
ese1.textContent = "Benvenuti alla lezione di JavaScript";

// Parte 2
let ese2 = document.querySelector("#descrizione");
ese2.innerHTML = `<a href = "https://moodle.edu.ti.ch/cpt">link a <b> moodle</b></a> `;

// Parte 3
let ese3 = document.querySelector("#messaggio");
ese3.outerHTML = `<h2>Titolino</h2>`;

// Parte 4
let ese4 = document.querySelector(".importante");
ese4.textContent = "Attenzione: testo aggiornato!";

// Parte 5
let ese5 = document.querySelector("h3");
ese5.style.color = "blue";

// Parte 6
let ese6 = document.querySelectorAll(".evidenziato");
for (let el of ese6) {
 console.log(el.style.fontWeight = "bold");
}

// Parte 7
let ese7 = document.querySelector("#es7");
ese7.firstElementChild.textContent = "Primo elemento modificato";

// Parte 8
let ese8 = document.querySelector("#contenuto").children;
for (let el of ese8) {
    el.textContent = el.textContent + "!";
}

// Parte 9
