// Nicola Galeano 
// version: 26.02.2026
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
    el.style.fontWeight = "bold";
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
let es9 = document.querySelector("#es9");
let es9Testo = document.createElement("li");
es9Testo.textContent = "Pane";
es9.append(es9Testo); 

// Parte 10
let es10 = document.querySelector("#es10");
let es10UltimoTesto = document.createElement("li");
let es10PrimoTesto = document.createElement("li");
es10UltimoTesto.textContent = "Ultimo";
es10PrimoTesto.textContent = "Primo";
es10.append(es10UltimoTesto); 
es10.prepend(es10PrimoTesto); 

// Parte 11
let lista = document.querySelector("#lista");
let uova = document.createElement("li");
let acqua = document.createElement("li");
uova.textContent = "Uova";
acqua.textContent = "Acqua";
lista.insertAdjacentElement("afterbegin", uova); 
lista.insertAdjacentElement("beforeend", acqua); 

// Parte 12
let rimuovere = document.querySelector("#daRimuovere");
rimuovere.remove();

// Parte 13
let selezionaRosso = document.querySelector("#titoloE13");
selezionaRosso.classList.add("rosso"); 

// Parte 14
let es14 = document.querySelector("#titoloE14");
es14.classList.remove("errore"); 
es14.classList.add("ok"); 

// Parte 15
let es15 = document.querySelector("#es15");
let doveButtarlo = es15.firstElementChild;
doveButtarlo.innerHTML = `Brand: ${es15.dataset.brand} <br> Modello: ${es15.dataset.model} `;
